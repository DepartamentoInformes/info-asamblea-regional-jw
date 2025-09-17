import type { Metadata } from "next"
import { ServiciosPage } from "@/components/pages/ServiciosPage"

export const metadata: Metadata = {
  title: "Servicios Cercanos - Asamblea Regional",
  description: "Encuentra restaurantes, hoteles, estaciones de servicio y otros lugares de interés cerca del lugar de la asamblea regional.",
}

export default function Servicios() {
  return <ServiciosPage />
}
