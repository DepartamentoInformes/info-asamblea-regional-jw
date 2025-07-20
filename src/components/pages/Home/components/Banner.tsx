import { useInfoPrincipal } from "@/hooks/useInfoPrincipal"

interface BannerProps {
  url?: string
}

export function Banner({ url = "/placeholder.svg?height=400&width=600" }: BannerProps) {
  const { infoPrincipal } = useInfoPrincipal()
  return (
    <section className="relative overflow-hidden">
      {/* Background Image - usando la imagen real del banner */}
      <div
        className="relative h-[450px] sm:h-[500px] md:h-[600px] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('${infoPrincipal.imageUrl !== "" ? infoPrincipal.imageUrl : url}')`,
        }}
      >
        {/* Gradiente de transición en la parte inferior */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-primaryColor-80" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-primaryColor" />
      </div>
    </section>
  )
}
