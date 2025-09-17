import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { getDeviceType } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"

interface AppItemProps {
    imageSrc: string
    androidUrl: string
    iosUrl: string
    webUrl: string
}

export function AppItem ({imageSrc, androidUrl, iosUrl, webUrl}: AppItemProps) {
    const url = getDeviceType(androidUrl, iosUrl, webUrl)

    return (
        <div>
            <Link href={url} target="_blank" rel="noopener noreferrer">
                <Button variant="link" className="cursor-pointer">
                    <Avatar className="w-24 h-24">
                        <AvatarImage src={imageSrc} alt="App Logo"/>
                    </Avatar>
                </Button>
            </Link>
        </div>
    )
}