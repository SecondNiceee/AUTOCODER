import type { Metadata } from "next"
import { SITE_URL } from "@/lib/constants"
import ConversionClientPage from "@/app/conversion/ConversionClientPage"

export const metadata: Metadata = {
  title: "Конверсия США-ЕС | Адаптация Автомобилей из США",
  description:
    "Конверсия автомобилей из США на европейский рынок. Программирование, кодирование, изменение единиц измерения, навигация, язык интерфейса. От 200 зл.",
  keywords: [
    "конверсия США ЕС",
    "импорт из США",
    "адаптация автомобиля",
    "конверсия Mercedes",
    "конверсия BMW",
    "konwersja USA EU",
  ],
  openGraph: {
    title: "Конверсия США-ЕС | Адаптация Автомобилей из США | Autocoder",
    description:
      "Конверсия автомобилей из США на европейский рынок. Программирование, кодирование, изменение единиц измерения, навигация.",
    url: `${SITE_URL}/ru/conversion`,
  },
  alternates: {
    canonical: `${SITE_URL}/ru/conversion`,
  },
}

export default function ConversionPage() {
  return <ConversionClientPage />
}
