import type { Metadata } from "next"
import { SITE_URL } from "@/lib/constants"
import RepairClientPage from "../../../client-pages/repair-client"

export const metadata: Metadata = {
  title: "Naprawa Elektroniki Samochodowej | ECU, TCU, Moduły",
  description:
    "Profesjonalna naprawa elektroniki samochodowej Mercedes, BMW, VAG w Poznaniu. Naprawa ECU, TCU, modułów sterujących. Synchronizacja komponentów.",
  keywords: [
    "naprawa elektroniki",
    "naprawa ECU",
    "naprawa TCU",
    "naprawa modułów",
    "elektronika Mercedes",
    "elektronika BMW",
    "ремонт электроники",
  ],
  openGraph: {
    title: "Naprawa Elektroniki Samochodowej | ECU, TCU | Autocoder Poznań",
    description:
      "Profesjonalna naprawa elektroniki samochodowej Mercedes, BMW, VAG. Naprawa ECU, TCU, modułów sterujących.",
    url: `${SITE_URL}/repair`,
  },
  alternates: {
    canonical: `${SITE_URL}/repair`,
  },
}

export default function RepairPage() {
  return <RepairClientPage language="pl" />
}

