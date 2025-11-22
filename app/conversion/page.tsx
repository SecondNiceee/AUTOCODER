import type { Metadata } from "next"
import { SITE_URL } from "@/lib/constants"
import ConversionContent from "./conversion-content"

export const metadata: Metadata = {
  title: "Konwersja USA-EU | Adaptacja Samochodów z USA",
  description:
    "Konwersja samochodów z USA na rynek europejski. Programowanie, kodowanie, zmiana jednostek, nawigacja, język interfejsu. Od 200 zł.",
  keywords: [
    "konwersja USA EU",
    "import z USA",
    "adaptacja samochodu",
    "konwersja Mercedes",
    "konwersja BMW",
    "конверсия США ЕС",
    "zmiana regionu nawigacji",
    "polskie menu",
  ],
  openGraph: {
    title: "Konwersja USA-EU | Adaptacja Samochodów z USA | Autocoder",
    description:
      "Konwersja samochodów z USA na rynek europejski. Programowanie, kodowanie, zmiana jednostek, nawigacja.",
    url: `${SITE_URL}/conversion`,
    type: "website",
  },
  alternates: {
    canonical: `${SITE_URL}/conversion`,
  },
}

export default function ConversionPage() {
  return <ConversionContent />
}
