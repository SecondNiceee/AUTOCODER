import type { Metadata } from "next"
import { SITE_URL } from "@/lib/constants"
import DiagnosticsContent from "./diagnostics-content"

export const metadata: Metadata = {
  title: "Diagnostyka Samochodowa | Sprzęt Dealerski | Mercedes, BMW, VAG",
  description:
    "Profesjonalna diagnostyka samochodowa w Poznaniu. Sprzęt dealerski: DAS, Xentry, ODIS, ISTA. Mercedes, BMW, VAG. Dokładna diagnoza problemów.",
  keywords: [
    "diagnostyka samochodowa",
    "diagnostyka Mercedes",
    "diagnostyka BMW",
    "DAS",
    "Xentry",
    "ODIS",
    "ISTA",
    "диагностика автомобилей",
    "kasowanie błędów",
    "adaptacje",
  ],
  openGraph: {
    title: "Diagnostyka Samochodowa | Sprzęt Dealerski | Autocoder Poznań",
    description:
      "Profesjonalna diagnostyka samochodowa. Sprzęt dealerski: DAS, Xentry, ODIS, ISTA. Mercedes, BMW, VAG.",
    url: `${SITE_URL}/diagnostics`,
    type: "website",
  },
  alternates: {
    canonical: `${SITE_URL}/diagnostics`,
  },
}

export default function DiagnosticsPage() {
  return <DiagnosticsContent />
}
