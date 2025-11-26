import { ChipTuningClientPage } from "@/app/(pl)/chip-tuning/client" // Assuming you'll create this
import type { Metadata } from "next"
import { SITE_URL } from "@/lib/constants"

export const metadata: Metadata = {
  title: "Chip Tuning Poznań | Zwiększenie Mocy | Чип Тюнинг Познань",
  description:
    "Profesjonalny chip tuning (Stage 1) w Poznaniu. Bezpieczne zwiększenie mocy i momentu obrotowego. Mercedes, BMW, VAG. | Профессиональный чип-тюнинг в Познани. Увеличение мощности.",
  keywords: [
    "chip tuning poznań",
    "chiptuning",
    "zwiększenie mocy",
    "stage 1",
    "чип тюнинг познань",
    "увеличение мощности",
  ],
  openGraph: {
    title: "Chip Tuning - Zwiększenie Mocy Silnika | Stage 1",
    description:
      "Profesjonalny chip tuning Mercedes, BMW, VAG w Poznaniu. Zwiększenie mocy i momentu obrotowego. Stage 1 bez zmian fizycznych. 15 lat doświadczenia.",
    url: `${SITE_URL}/chip-tuning`,
  },
  alternates: {
    canonical: `${SITE_URL}/chip-tuning`,
  },
}

export default function ChipTuningPage() {
  return <ChipTuningClientPage />
}
