import type { Metadata } from "next"
import { SITE_URL } from "@/lib/constants"
import EcologyPage from "./page"

export const metadata: Metadata = {
  title: "Ekologia - DPF, AdBlue, EGR | Usuwanie Systemów Ekologicznych",
  description:
    "Naprawa i usuwanie systemów ekologicznych: DPF, AdBlue, EGR, katalizator. Rozwiązanie problemów EURO3-EURO6. Poznań.",
  keywords: [
    "usuwanie DPF",
    "AdBlue",
    "EGR",
    "katalizator",
    "filtr cząstek",
    "EURO6",
    "regeneracja DPF",
    "удаление сажевого фильтра",
  ],
  openGraph: {
    title: "Ekologia - DPF, AdBlue, EGR | Autocoder Poznań",
    description:
      "Naprawa i usuwanie systemów ekologicznych: DPF, AdBlue, EGR, katalizator. Rozwiązanie problemów EURO3-EURO6.",
    url: `${SITE_URL}/ecology`,
  },
  alternates: {
    canonical: `${SITE_URL}/ecology`,
  },
}

export default function EcologyLayout() {
  return <EcologyPage />
}
