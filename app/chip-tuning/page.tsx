import type { Metadata } from "next"
import { SITE_URL } from "@/lib/constants"
import ChipTuningClientPage from "./client-page"

export const metadata: Metadata = {
  title: "Chip Tuning Poznań | Zwiększenie Mocy",
  description:
    "Profesjonalny chip tuning (Stage 1) w Poznaniu. Bezpieczne zwiększenie mocy i momentu obrotowego. Mercedes, BMW, VAG.",
  keywords: ["chip tuning poznań", "chiptuning", "zwiększenie mocy", "stage 1"],
  openGraph: {
    title: "Chip Tuning - Zwiększenie Mocy Silnika | Stage 1",
    description:
      "Profesjonalny chip tuning Mercedes, BMW, VAG w Poznaniu. Zwiększenie mocy i momentu obrotowego. Stage 1 bez zmian fizycznych. 15 lat doświadczenia.",
    url: `${SITE_URL}/pl/chip-tuning`,
  },
  alternates: {
    canonical: `${SITE_URL}/pl/chip-tuning`,
  },
}

export default function ChipTuningPage() {
  return <ChipTuningClientPage />
}
