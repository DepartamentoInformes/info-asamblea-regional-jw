import { InternalPageLayout } from "@/components/layouts/InternalPageLayout";
import { AppItem } from "./components/AppItem";
import { TaxiItem } from "./components/TaxiItem";
import { APP_LINKS } from "@/constants/app-links.consts";

const TAXI_SERVICES = [
  {
    name: "Mendoza Taxi",
    location: "Las Heras, Mendoza",
    phone: "0261 437-8282"
  },
  {
    name: "Mendoza Remis",
    location: "Las Heras, Mendoza",
    phone: "0261 437-7500"
  },
  {
    name: "Brisas Remis",
    location: "Mendoza",
    phone: "0261 437-8080"
  },
  {
    name: "Terminal De Ómnibus de Mendoza",
    location: "Guaymallén, Mendoza",
    phone: "0261 476-5875"
  },
  {
    name: "Remis Cuyo",
    location: "Mendoza",
    phone: "0261 269-9615"
  },
  {
    name: "Llamenos Radio Taxi",
    location: "Godoy Cruz, Mendoza",
    phone: "0261 422-2555"
  },
  {
    name: "TAXI YA",
    location: "Mendoza",
    phone: "0261 425-5000"
  },
  {
    name: "Remis Dorrego",
    location: "Dorrego, Mendoza",
    phone: "0261 706-2246"
  }
];

export function TransportePage() {
    return (
        <InternalPageLayout>
            <main className="min-h-screen text-gray-900">
                <div className="flex flex-col items-center py-6 px-4">
                    <div className="w-full max-w-4xl p-3">
                        <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondaryColor">Servicios de Transporte</h3>
                        <p className="text-gray-600 text-lg max-w-3xl mt-3">Las siguientes aplicaciones o contactos a empresas de transporte son simples sugerencias y no estamos asociados directamente con ninguna de ellas.</p>
                    </div>
                    <div className="w-full max-w-4xl mt-5">
                        <p className="text-gray-600 text-left text-lg mb-6 font-semibold">| Aplicaciones de transporte.</p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-7">
                            <AppItem 
                                imageSrc="/uberIcon.png" 
                                name="Uber"
                                description="Aplicación de transporte que conecta pasajeros con conductores particulares, permitiendo viajes rápidos y seguros desde el celular."
                                androidUrl={APP_LINKS.PLAY_STORE_UBER} 
                                iosUrl={APP_LINKS.APP_STORE_UBER} 
                                webUrl={APP_LINKS.WEB_UBER}
                                appPackage="com.ubercab"
                            />
                            <AppItem 
                                imageSrc="/cabifyIcon.png" 
                                name="Cabify"
                                description="Plataforma que ofrece traslados cómodos y confiables con conductores profesionales, ideal para uso personal o corporativo."
                                androidUrl={APP_LINKS.PLAY_STORE_CABIFY} 
                                iosUrl={APP_LINKS.APP_STORE_CABIFY} 
                                webUrl={APP_LINKS.WEB_CABIFY}
                                appPackage="com.cabify.rider"
                            />
                            <AppItem 
                                imageSrc="/mendotranIcon.webp" 
                                name="Mendotran"
                                description="Sistema público de transporte urbano de Mendoza, que integra diferentes líneas de colectivos bajo una misma red y tarjeta SUBE."
                                androidUrl={APP_LINKS.PLAY_STORE_MENDOTRAN} 
                                iosUrl={APP_LINKS.APP_STORE_MENDOTRAN} 
                                webUrl={APP_LINKS.WEB_MENDOTRAN}
                                appPackage="ar.gov.mendoza.mendotran"
                            />
                        </div>
                    </div>

                    {/* Números de Taxis y Remises */}
                    <div className="w-full max-w-4xl mt-12">
                        <p className="text-gray-600 text-left text-lg mb-6 font-semibold">| Taxis y Remises</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {TAXI_SERVICES.map((taxi, index) => (
                                <TaxiItem
                                    key={index}
                                    name={taxi.name}
                                    location={taxi.location}
                                    phone={taxi.phone}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </main>
        </InternalPageLayout>
    )
}