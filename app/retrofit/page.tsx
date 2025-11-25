import type { Metadata } from "next"
import { SITE_URL } from "@/lib/constants"
import RetrofitClientPage from "./client"

export const metadata: Metadata = {
  title: "Doposażenie (Retrofit) | Kamera, Ambient, CarPlay, HUD",
  description:
    "Doposażenie samochodów Mercedes, BMW, VAG w Poznaniu. Kamera 360, ambient, CarPlay, HUD, distronic, keyless. Retrofit na poziomie fabrycznym.",
  keywords: [
    "retrofit",
    "doposażenie",
    "kamera 360",
    "ambient",
    "CarPlay",
    "HUD",
    "distronic",
    "keyless",
    "ретрофит",
    "дооснащение",
  ],
  openGraph: {
    title: "Doposażenie (Retrofit) | Kamera, Ambient, CarPlay | Autocoder",
    description: "Doposażenie samochodów Mercedes, BMW, VAG. Kamera 360, ambient, CarPlay, HUD, distronic, keyless.",
    url: `${SITE_URL}/retrofit`,
  },
  alternates: {
    canonical: `${SITE_URL}/retrofit`,
  },
}

export default function RetrofitPage() {
  return <RetrofitClientPage />
}
