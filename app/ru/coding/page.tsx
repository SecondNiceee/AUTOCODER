import type { Metadata } from "next"
import { SITE_URL } from "@/lib/constants"
import CodingContent from "./coding-content"
import CodingClientPage from "@/client-pages/coding-client"

export const metadata: Metadata = {
  title: "Кодирование и Программирование Авто | Активация Функций, Синхронизация | Autocoder Познань",
  description:
    "Профессиональное кодирование и программирование автомобилей Mercedes, BMW, VAG в Познани. Активация скрытых функций, адаптация компонентов, синхронизация иммобилайзера, ключей, ECU и TCU.",
  keywords: [
    "кодирование авто Познань",
    "программирование автомобиля",
    "активация функций Mercedes",
    "активация функций BMW",
    "синхронизация ключей",
    "адаптация компонентов авто",
    "кодирование VAG",
    "чип тюнинг и кодирование",
    "иммобилайзер синхронизация",
    "запрограммировать ключ авто Познань",
  ],
  openGraph: {
    title: "Кодирование и Программирование Авто | Autocoder Познань",
    description:
      "Активация скрытых функций, программирование ECU/TCU, синхронизация ключей и компонентов для Mercedes, BMW, VAG в Познани.",
    url: `${SITE_URL}/ru/coding`,
    locale: "ru_RU",
    type: "website",
    images: [
      {
        url: `${SITE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Кодирование и программирование автомобилей в Autocoder, Познань",
      },
    ],
  },
  alternates: {
    canonical: `${SITE_URL}/ru/coding`,
    languages: {
      pl: `${SITE_URL}/pl/kodowanie`,
      ru: `${SITE_URL}/ru/coding`,
    },
  },
}

export default function CodingPage() {

  return (
    <CodingClientPage language="ru" />
  )
}
