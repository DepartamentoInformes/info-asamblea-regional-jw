import { InternalPageLayout } from "@/components/layouts/InternalPageLayout";
import { AppItem } from "./components/AppItem";
import { APP_LINKS } from "@/constants/app-links.consts";

export function TransportePage() {
    return (
        <InternalPageLayout>
            <main className="min-h-screen bg-white text-gray-900">
                <div className="flex flex-col items-center py-6 px-4">
                    <div className="w-full max-w-4xl">
                        <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">Servicios de Transporte</h3>
                        <p className="text-gray-600 text-lg max-w-3xl mt-3">Las siguientes aplicaciones o contactos a empresas de transporte son simples sugerencias y no estamos asociados directamente con ninguna de ellas.</p>
                    </div>
                    <div className="flex flex-wrap justify-center gap-4 pt-16">
                        <AppItem imageSrc="/uberIcon.png" androidUrl={APP_LINKS.PLAY_STORE_UBER} iosUrl={APP_LINKS.APP_STORE_UBER} webUrl={APP_LINKS.WEB_UBER} />
                        <AppItem imageSrc="/cabifyIcon.png" androidUrl={APP_LINKS.PLAY_STORE_CABIFY} iosUrl={APP_LINKS.APP_STORE_CABIFY} webUrl={APP_LINKS.WEB_CABIFY} />
                    </div>
                </div>
            </main>
        </InternalPageLayout>
    )
}