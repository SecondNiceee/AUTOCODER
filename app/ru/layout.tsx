import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { LanguageProvider } from "@/components/ru-language-context"
import "../globals.css"
import { SITE_URL } from "@/lib/constants"

const inter = Inter({ subsets: ["latin", "cyrillic"] })

export const metadata: Metadata = {
  metadataBase: new URL(`${SITE_URL}/ru`),
  title: {
    default: "Autocoder - Чип Тюнинг, Диагностика, Ремонт Электроники | Познань",
    template: "%s | Autocoder Познань",
  },
  description:
    "Профессиональный чип тюнинг, диагностика, ремонт автомобильной электроники Mercedes, BMW, VAG в Познани. 15 лет опыта. Ретрофит, кодирование, программирование, своп двигателей.",
  keywords: [
    "чип тюнинг Познань",
    "диагностика автомобилей",
    "ремонт электроники Mercedes",
    "ремонт электроники BMW",
    "кодирование автомобилей",
    "ретрофит Познань",
    "своп двигателя",
    "иммобилайзер",
    "конверсия USA EU",
    "экология DPF AdBlue",
  ],
  authors: [{ name: "Autocoder" }],
  creator: "Autocoder",
  publisher: "Autocoder",
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    alternateLocale: ["pl_PL"],
    url: `${SITE_URL}/ru`,
    siteName: "Autocoder",
    title: "Autocoder - Чип Тюнинг, Диагностика, Ремонт Электроники | Познань",
    description:
      "Профессиональный чип тюнинг, диагностика, ремонт автомобильной электроники Mercedes, BMW, VAG в Познани.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Autocoder - Профессиональная автомобильная электроника",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Autocoder - Чип Тюнинг, Диагностика, Ремонт Электроники",
    description:
      "Профессиональный чип тюнинг, диагностика, ремонт автомобильной электроники Mercedes, BMW, VAG в Познани.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: `${SITE_URL}/ru`,
    languages: {
      pl: `${SITE_URL}`,
      ru: `${SITE_URL}/ru`,
    },
  },
  generator: "v0.app",
}

export default function RuLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AutomotiveBusiness",
    name: "Autocoder",
    image: `${SITE_URL}/logo.jpg`,
    "@id": SITE_URL,
    url: SITE_URL,
    telephone: "+48793058343",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Ożarowska 88",
      addressLocality: "Познань",
      postalCode: "61-332",
      addressCountry: "PL",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 52.4139,
      longitude: 16.8733,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
    ],
    sameAs: ["https://www.instagram.com/autocoder_pl/", "https://wa.me/48793058343"],
    priceRange: "$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "100",
    },
    areaServed: {
      "@type": "City",
      name: "Poznań",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Automotive Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Чип Тюнинг",
            description: "Профессиональный чип тюнинг для Mercedes, BMW, VAG",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Диагностика",
            description: "Профессиональная автомобильная диагностика с дилерским оборудованием",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Ремонт Электроники",
            description: "Ремонт автомобильной электроники немецких автомобилей",
          },
        },
      ],
    },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <LanguageProvider>{children}</LanguageProvider>
    </>
  )
}
