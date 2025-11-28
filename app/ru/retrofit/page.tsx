import type { Metadata } from "next"
import { SITE_URL } from "@/lib/constants"
import RetrofitClientPage from "@/client-pages/retrofit-client"

export const metadata: Metadata = {
  title: "Дооснащение (Ретрофит) | Камера, Амбиент, CarPlay, HUD",
  description:
    "Дооснащение автомобилей Mercedes, BMW, VAG в Познани. Камера 360°, амбиентная подсветка, CarPlay, HUD, Distronic, keyless. Ретрофит на уровне заводского оборудования.",
  keywords: [
    "ретрофит",
    "дооснащение",
    "камера 360",
    "амбиент",
    "CarPlay",
    "HUD",
    "Distronic",
    "keyless",
    "доп оборудование авто",
    "автомобильный ретрофит Познань",
  ],
  openGraph: {
    title: "Дооснащение (Ретрофит) | Камера, Амбиент, CarPlay | Autocoder",
    description:
      "Дооснащение автомобилей Mercedes, BMW, VAG. Камера 360°, амбиент, CarPlay, HUD, Distronic, keyless.",
    url: `${SITE_URL}/ru/retrofit`,
  },
  alternates: {
    canonical: `${SITE_URL}/ru/retrofit`,
  },
}

export default function RetrofitPageRu() {
  return <RetrofitClientPage language="ru" />
}