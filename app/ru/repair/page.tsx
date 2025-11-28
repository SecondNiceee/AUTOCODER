import type { Metadata } from "next"
import { SITE_URL } from "@/lib/constants" // или твой компонент для RU-версии
import RepairClientPage from "@/client-pages/repair-client"

export const metadata : Metadata = {
  title: "Ремонт Автоэлектроники | Блоки ECU, TCU, Модули",
  description:
    "Профессиональный ремонт автоэлектроники Mercedes, BMW, VAG в Познани. Ремонт блоков ECU, TCU, управляющих модулей. Синхронизация компонентов.",
  keywords: [
    "ремонт автоэлектроники",
    "ремонт ECU",
    "ремонт TCU",
    "ремонт модулей",
    "электроника Mercedes",
    "электроника BMW",
    "автоэлектроника Познань",
  ],
  openGraph: {
    title: "Ремонт Автоэлектроники | ECU, TCU | Autocoder Познань",
    description:
      "Профессиональный ремонт автоэлектроники Mercedes, BMW, VAG. Ремонт блоков ECU, TCU, управляющих модулей.",
    url: `${SITE_URL}/ru/repair`,
  },
  alternates: {
    canonical: `${SITE_URL}/ru/repair`,
  },
}

export default function RepairPageRu() {
  return <RepairClientPage language="ru" />
}