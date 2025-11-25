import { ChipTuningClientPage } from "@/app/chip-tuning/client"
import type { Metadata } from "next"
import { SITE_URL } from "@/lib/constants"

export const metadata: Metadata = {
  title: "Чип Тюнинг Познань | Увеличение Мощности | Chip Tuning Poznań",
  description:
    "Профессиональный чип-тюнинг (Stage 1) в Познани. Безопасное увеличение мощности и крутящего момента. Mercedes, BMW, VAG.",
  keywords: [
    "чип тюнинг познань",
    "chiptuning",
    "увеличение мощности",
    "stage 1",
    "chip tuning poznań",
    "zwiększenie mocy",
  ],
  openGraph: {
    title: "Чип Тюнинг - Увеличение Мощности Двигателя | Stage 1",
    description:
      "Профессиональный чип-тюнинг Mercedes, BMW, VAG в Познани. Увеличение мощности и крутящего момента. Stage 1 без физических изменений. 15 лет опыта.",
    url: `${SITE_URL}/ru/chip-tuning`,
  },
  alternates: {
    canonical: `${SITE_URL}/ru/chip-tuning`,
  },
}

export default function ChipTuningPage() {
  return <ChipTuningClientPage />
}
