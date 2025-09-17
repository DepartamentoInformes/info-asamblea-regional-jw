import type { Metadata } from "next"
import { ConsultasPage } from "@/components/pages/ConsultasPage"

export const metadata: Metadata = {
  title: "Consultas - Asamblea Regional",
  description: 'Haga sus consultas sobre la asamblea regional a través de nuestro formulario en línea. O si desea hacer un servicio voluntario, complete el formulario y nos pondremos en contacto con usted.',
}

export default function Consultas() {
  return <ConsultasPage />
}
