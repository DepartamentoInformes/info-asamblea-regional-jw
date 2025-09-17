import type { Metadata } from "next"
import { MapaInternoPage } from "@/components/pages/MapaInternoPage"

export const metadata: Metadata = {
  title: "Mapa Interno - Asamblea Regional",
  description: "Encuentra tu camino dentro del lugar de la asamblea regional con nuestro mapa interactivo.",
}

export default function MapaInterno() {
  return <MapaInternoPage />
}
