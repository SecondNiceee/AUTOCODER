import type { Metadata } from "next"
import { SITE_URL } from "@/lib/constants"
import ImmobilizerClientPage from "@/app/immobilizer/immobilizer-client"

export const metadata: Metadata = {
  title: "Ключи и Иммобилайзер | Программирование Ключей | Mercedes, BMW, VAG",
  description:
    "Программирование ключей, ремонт иммобилайзера Mercedes, BMW, VAG в Познани. Решение проблем с противоугонной системой.",
  keywords: [
    "программирование ключей",
    "иммобилайзер",
    "ключи Mercedes",
    "ключи BMW",
    "ремонт иммобилайзера",
    "programowanie kluczy",
    "immobiliser",
  ],
  openGraph: {
    title: "Ключи и Иммобилайзер | Программирование Ключей | Autocoder Познань",
    description:
      "Программирование ключей, ремонт иммобилайзера Mercedes, BMW, VAG. Решение проблем с противоугонной системой.",
    url: `${SITE_URL}/ru/immobilizer`,
  },
  alternates: {
    canonical: `${SITE_URL}/ru/immobilizer`,
  },
}

export default function ImmobilizerPage() {
  return <ImmobilizerClientPage />
}
