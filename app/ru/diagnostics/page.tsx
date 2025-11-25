import type { Metadata } from "next"
import { SITE_URL } from "@/lib/constants"
import DiagnosticsClientPage from "@/app/diagnostics/_client-page"

export const metadata: Metadata = {
  title: "Диагностика Автомобилей | Дилерское Оборудование | Mercedes, BMW, VAG",
  description:
    "Профессиональная диагностика автомобилей в Познани. Дилерское оборудование: DAS, Xentry, ODIS, ISTA. Mercedes, BMW, VAG. Точная диагностика проблем.",
  keywords: [
    "диагностика автомобилей",
    "диагностика Mercedes",
    "диагностика BMW",
    "DAS",
    "Xentry",
    "ODIS",
    "ISTA",
    "diagnostyka samochodowa",
  ],
  openGraph: {
    title: "Диагностика Автомобилей | Дилерское Оборудование | Autocoder Познань",
    description:
      "Профессиональная диагностика автомобилей. Дилерское оборудование: DAS, Xentry, ODIS, ISTA. Mercedes, BMW, VAG.",
    url: `${SITE_URL}/ru/diagnostics`,
  },
  alternates: {
    canonical: `${SITE_URL}/ru/diagnostics`,
  },
}

export default function DiagnosticsPage() {
  return <DiagnosticsClientPage />
}
