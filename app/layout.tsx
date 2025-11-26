import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { LanguageProvider } from "@/components/language-context"
import { Header } from "@/components/header"
import "./globals.css"
import { SITE_URL } from "@/lib/constants"

const inter = Inter({ subsets: ["latin", "cyrillic"] })

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Autocoder – Chip Tuning, Ekologia, Diagnostyka, Naprawa Elektroniki, Retrofit, Konwersja, Kodowanie, Immobiliser, Swap Silnika | Poznań",
    template: "%s | Autocoder Poznań",
  },
  description:
  "Autocoder w Poznaniu oferuje kompleksowe usługi motoryzacyjne: chip tuning, usuwanie ekologii (DPF/AdBlue/EGR), diagnostykę, naprawę elektroniki, retrofit, konwersję USA/EU, kodowanie, obsługę immobiliserów i swap silnika. 15 lat doświadczenia w obsłudze Mercedes, BMW i VAG.",
  keywords: [
    "chip tuning Poznań",
    "usuwanie ekologii Poznań",
    "diagnostyka samochodowa Poznań",
    "naprawa elektroniki samochodowej Poznań",
    "retrofit samochodowy Poznań",
    "konwersja USA EU Poznań",
    "kodowanie samochodów Poznań",
    "immobiliser Poznań",
    "swap silnika Poznań",
    "naprawa elektroniki Mercedes",
    "naprawa elektroniki BMW",
    "serwis VAG Poznań",
    "DPF off Poznań",
    "AdBlue off Poznań",
    "EGR off Poznań",
    "чип тюнинг Познань",
    "удаление экологии Познань",
    "диагностика автомобилей Познань",
    "ремонт автоэлектроники Познань",
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
    locale: "pl_PL",
    alternateLocale: ["ru_RU"],
    url: SITE_URL,
    siteName: "Autocoder",
    title: "Autocoder - Chip Tuning, Diagnostyka, Naprawa Elektroniki | Poznań",
    description:
      "Profesjonalny chip tuning, diagnostyka, naprawa elektroniki samochodowej Mercedes, BMW, VAG w Poznaniu. 15 lat doświadczenia.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Autocoder - Profesjonalna elektronika samochodowa",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Autocoder - Chip Tuning, Diagnostyka, Naprawa Elektroniki",
    description:
      "Profesjonalny chip tuning, diagnostyka, naprawa elektroniki samochodowej Mercedes, BMW, VAG w Poznaniu.",
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
  verification: {
    google: "your-google-verification-code",
    // yandex: 'your-yandex-verification-code',
  },

  alternates: {
    canonical: SITE_URL,
    languages: {
      pl: `${SITE_URL}?lang=pl`,
      ru: `${SITE_URL}?lang=ru`,
    },
  },
  generator: "Next.js",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    name: "Autocoder",
    image: `${SITE_URL}/logo.jpg`,
    url: SITE_URL,
    telephone: "+48793058343",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Ożarowska 88",
      addressLocality: "Poznań",
      postalCode: "61-332",
      addressCountry: "PL",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 52.4139,
      longitude: 16.8733,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    sameAs: [
      "https://www.instagram.com/autocoder_pl/",
      "https://wa.me/48793058343",
    ],
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
            name: "Chip Tuning",
            description: "Professional chip tuning for Mercedes, BMW, VAG vehicles",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Diagnostyka",
            description: "Professional automotive diagnostics with dealer-level equipment",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Naprawa Elektroniki",
            description: "Automotive electronics repair for German vehicles",
          },
        },
      ],
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": SITE_URL,
    },
  }

  return (
    <html lang="pl" className="dark">
      <head>
        {/* Favicon — абсолютный путь через public */}
        <link rel="icon" href={`${SITE_URL}/favicon.ico`} />

        {/* Required meta tags */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-BV3GW9S4ZC"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-BV3GW9S4ZC');
            `,
          }}
        />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <LanguageProvider>
          <Header />
          {children}
          <WhatsAppButton />
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  )
}