import type { Metadata } from "next"
import { SITE_URL } from "@/lib/constants"
import CodingContent from "./coding-content"

export const metadata: Metadata = {
  title: "Kodowanie i Programowanie Samochodów | Mercedes, BMW, VAG",
  description:
    "Profesjonalne kodowanie i programowanie samochodów Mercedes, BMW, VAG w Poznaniu. Aktywacja funkcji, retrofit, adaptacja modułów. Sprzęt dealerski.",
  keywords: [
    "kodowanie samochodów",
    "programowanie ECU",
    "kodowanie Mercedes",
    "kodowanie BMW",
    "VCDS",
    "ODIS",
    "кодирование автомобилей",
    "adaptacja sterowników",
    "aktualizacja oprogramowania",
  ],
  openGraph: {
    title: "Kodowanie i Programowanie Samochodów | Autocoder Poznań",
    description:
      "Profesjonalne kodowanie i programowanie samochodów Mercedes, BMW, VAG. Aktywacja funkcji, retrofit, adaptacja modułów.",
    url: `${SITE_URL}/coding`,
    type: "website",
  },
  alternates: {
    canonical: `${SITE_URL}/coding`,
  },
}

export default function CodingPage() {
  return <CodingContent />
}
