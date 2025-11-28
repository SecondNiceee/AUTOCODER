import type { Metadata } from "next"
import { SITE_URL } from "@/lib/constants"
import ConversionClientPage from "../../../client-pages/ConversionClientPage"

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
  ],
  openGraph: {
    title: "Konwersja USA-EU | Adaptacja Samochodów z USA | Autocoder",
    description:
      "Konwersja samochodów z USA na rynek europejski. Programowanie, kodowanie, zmiana jednostek, nawigacja.",
    url: `${SITE_URL}/conversion`,
  },
  alternates: {
    canonical: `${SITE_URL}/conversion`,
  },
}

export default function ConversionPage() {
  return <ConversionClientPage language="pl" />
}
