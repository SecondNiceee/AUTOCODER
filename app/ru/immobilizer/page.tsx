import type { Metadata } from "next"
import { SITE_URL } from "@/lib/constants"
import ImmobilizerClientPage from "./immobilizer-client"

export const metadata: Metadata = {
  title: "Klucze i Immobiliser | Programowanie Kluczy | Mercedes, BMW, VAG",
  description:
    "Programowanie kluczy, naprawa immobilisera Mercedes, BMW, VAG w Poznaniu. Rozwiązanie problemów z systemem przeciwkradzieżowym.",
  keywords: [
    "programowanie kluczy",
    "immobiliser",
    "klucze Mercedes",
    "klucze BMW",
    "naprawa immobilisera",
    "иммобилайзер",
    "ключи",
  ],
  openGraph: {
    title: "Klucze i Immobiliser | Programowanie Kluczy | Autocoder Poznań",
    description:
      "Programowanie kluczy, naprawa immobilisera Mercedes, BMW, VAG. Rozwiązanie problemów z systemem przeciwkradzieżowym.",
    url: `${SITE_URL}/immobilizer`,
  },
  alternates: {
    canonical: `${SITE_URL}/immobilizer`,
  },
}

export default function ImmobilizerPage() {
  return <ImmobilizerClientPage />
}
