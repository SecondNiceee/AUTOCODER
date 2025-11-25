import type { Metadata } from "next"
import { SITE_URL } from "@/lib/constants"
import EcologyPage from "@/app/ecology/layout"

export const metadata: Metadata = {
  title: "Экология - DPF, AdBlue, EGR | Удаление Экологических Систем",
  description:
    "Ремонт и удаление экологических систем: DPF, AdBlue, EGR, катализатор. Решение проблем EURO3-EURO6. Познань.",
  keywords: [
    "удаление DPF",
    "AdBlue",
    "EGR",
    "катализатор",
    "сажевый фильтр",
    "EURO6",
    "регенерация DPF",
    "usuwanie DPF",
  ],
  openGraph: {
    title: "Экология - DPF, AdBlue, EGR | Autocoder Познань",
    description: "Ремонт и удаление экологических систем: DPF, AdBlue, EGR, катализатор. Решение проблем EURO3-EURO6.",
    url: `${SITE_URL}/ru/ecology`,
  },
  alternates: {
    canonical: `${SITE_URL}/ru/ecology`,
  },
}

export default function Page() {
  return <EcologyPage />
}
