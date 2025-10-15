import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { getDeviceType } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"
import { ExternalLink } from "lucide-react"

interface AppItemProps {
    imageSrc: string
    name: string
    description: string
    androidUrl: string
    iosUrl: string
    webUrl: string
}

export function AppItem ({imageSrc, name, description, androidUrl, iosUrl, webUrl}: AppItemProps) {
    const url = getDeviceType(androidUrl, iosUrl, webUrl)

    return (
        <Link href={url} target="_blank" rel="noopener noreferrer" className="block">
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