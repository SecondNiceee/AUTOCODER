import type { Metadata } from "next"
import { SITE_URL } from "@/lib/constants"
import SwapClientPage from "./client"

export const metadata: Metadata = {
  title: "Swap Silnika i Skrzyni Biegów | OM606, M57, 7G-Tronic",
  description:
    "Swap silnika i skrzyni biegów Mercedes, BMW, VAG w Poznaniu. OM606, OM648, M57, 7G-Tronic, 8HP. Zwiększenie mocy i niezawodności.",
  keywords: [
    "swap silnika",
    "wymiana silnika",
    "OM606",
    "OM648",
    "M57",
    "7G-Tronic",
    "8HP",
    "swap Mercedes",
    "swap BMW",
    "свап двигателя",
  ],
  openGraph: {
    title: "Swap Silnika i Skrzyni Biegów | OM606, M57 | Autocoder Poznań",
    description: "Swap silnika i skrzyni biegów Mercedes, BMW, VAG. OM606, OM648, M57, 7G-Tronic, 8HP.",
    url: `${SITE_URL}/swap`,
  },
  alternates: {
    canonical: `${SITE_URL}/swap`,
  },
}

export default function SwapPage() {
  return <SwapClientPage />
}
