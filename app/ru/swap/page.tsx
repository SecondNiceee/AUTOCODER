import type { Metadata } from "next"
import { SITE_URL } from "@/lib/constants"
import SwapClientPage from "./client"

export const metadata: Metadata = {
  title: "Свап Двигателя и Коробки Передач | OM606, M57, 7G-Tronic",
  description:
    "Свап двигателя и коробки передач для Mercedes, BMW, VAG в Познани. Двигатели OM606, OM648, M57 и АКПП 7G-Tronic, 8HP. Повышение мощности, крутящего момента и надёжности.",
  keywords: [
    "свап двигателя Познань",
    "замена двигателя",
    "OM606 свап",
    "OM648 свап",
    "M57 свап",
    "7G-Tronic",
    "8HP",
    "свап Mercedes",
    "свап BMW",
    "замена коробки передач",
    "свап VAG",
    "установка дизеля",
  ],
  openGraph: {
    title: "Свап Двигателя и Коробки Передач | OM606, M57 | Autocoder Познань",
    description: "Свап двигателей OM606, OM648, M57 и коробок 7G-Tronic, 8HP для Mercedes, BMW, VAG в Познани.",
    url: `${SITE_URL}/ru/swap`,
    locale: "ru_RU",
    type: "website",
    images: [
      {
        url: `${SITE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Свап двигателя и коробки передач в Autocoder, Познань",
      },
    ],
  },
  alternates: {
    canonical: `${SITE_URL}/ru/swap`,
    languages: {
      pl: `${SITE_URL}/pl/swap`,
      ru: `${SITE_URL}/ru/swap`,
    },
  },
}

export default function SwapPage() {
  return <SwapClientPage />
}