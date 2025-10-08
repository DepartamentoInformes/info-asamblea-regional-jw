import { ChevronLeft, ChevronRight } from "lucide-react"

interface NavigationCarrouselProps {
    scrollPrev: () => void
    scrollNext: () => void
}

export function NavigationCarrousel({ scrollPrev, scrollNext }: NavigationCarrouselProps) {
    return (
        <div className="hidden md:flex gap-3 left-0 absolute right-0 top-1/2 transform z-10 w-full justify-between mx-[-25px]">
            <button onClick={scrollPrev} className="absolute left-0 flex items-center justify-center w-16 h-16 rounded-full bg-secondaryColor text-primaryColor hover:bg-accentColor transition-colors duration-300 shadow-md">
                <ChevronLeft className="h-5 w-5" />
            </button>
            <button onClick={scrollNext} className="absolute right-[-25px] flex items-center justify-center w-16 h-16 rounded-full bg-secondaryColor text-primaryColor hover:bg-accentColor transition-colors duration-300 shadow-md">
                <ChevronRight className="h-5 w-5" />
            </button>
        </div>
    )
}