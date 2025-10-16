"use client"

import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { getDeviceType } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"
import { ExternalLink } from "lucide-react"
import { useState, useEffect } from "react"

interface AppItemProps {
    imageSrc: string
    name: string
    description: string
    androidUrl: string
    iosUrl: string
    webUrl: string
    appPackage?: string // Paquete de Android para deep linking
}

export function AppItem ({imageSrc, name, description, androidUrl, iosUrl, webUrl, appPackage}: AppItemProps) {
    const [url, setUrl] = useState(webUrl) // Default to web for SSR
    const [isAndroid, setIsAndroid] = useState(false)

    useEffect(() => {
        // Detectar dispositivo en el cliente
        const userAgent = navigator.userAgent
        const isAndroidDevice = /android/i.test(userAgent)
        setIsAndroid(isAndroidDevice)
        
        setUrl(getDeviceType(androidUrl, iosUrl, webUrl))
    }, [androidUrl, iosUrl, webUrl])

    const handleClick = (e: React.MouseEvent) => {
        // Si es Android y tiene paquete, intentar abrir la app primero
        if (isAndroid && appPackage) {
            e.preventDefault()
            
            // Intent URL que intenta abrir la app o redirige a Play Store
            const intentUrl = `intent://launch#Intent;scheme=android-app;package=${appPackage};action=android.intent.action.VIEW;S.browser_fallback_url=${encodeURIComponent(androidUrl)};end`
            
            window.location.href = intentUrl
        }
        // Para iOS y Desktop, deja que el Link normal funcione
    }

    return (
        <Link 
            href={url} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="block"
            onClick={handleClick}
        >
            <div className="bg-white rounded-lg shadow-md p-5 hover:shadow-lg transition-all duration-300 border border-gray-200 h-full flex flex-col items-center text-center group">
                <Avatar className="w-20 h-20 mb-4">
                    <AvatarImage src={imageSrc} alt={`${name} Logo`}/>
                </Avatar>
                <h4 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-opacity-80 transition-colors" style={{ color: 'var(--secondary-color)' }}>
                    {name}
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed mb-4 flex-grow">
                    {description}
                </p>
                <div className="flex items-center gap-2 text-sm font-medium" style={{ color: 'var(--secondary-color)' }}>
                    <span>Ver más</span>
                    <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
            </div>
        </Link>
    )
}