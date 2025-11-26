import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Header } from "@/components/header"
import "../globals.css";
import { SITE_URL } from "@/lib/constants"
import { LanguageProvider } from "@/components/ru-language-context"

const inter = Inter({ subsets: ["latin", "cyrillic"] })

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Autocoder – Чип-тюнинг, Удаление экологии, Диагностика, Ремонт электроники, Ретрофит, Конверсия, Кодирование, Иммобилайзер, Свап двигателя | Познань",
    template: "%s | Autocoder Познань",
  },
  description:
    "Autocoder в Познани предлагает полный спектр автомобильных услуг: чип-тюнинг, удаление экологии (DPF/AdBlue/EGR), диагностику, ремонт автоэлектроники, ретрофит, конверсию США/ЕС, кодирование, работу с иммобилайзерами и свап двигателей. 15 лет опыта в обслуживании Mercedes, BMW и VAG.",
  keywords: [
    "чип тюнинг Познань",
    "удаление экологии Познань",
    "диагностика автомобилей Познань",
    "ремонт электроники Познань",
    "ретрофит Познань",
    "конверсия США ЕС Познань",
    "кодирование авто Познань",
    "иммобилайзер Познань",
    "свап двигателя Познань",
    "ремонт электроники Mercedes",
    "ремонт электроники BMW",
    "сервис VAG Познань",
    "DPF off Познань",
    "AdBlue off Познань",
    "EGR off Познань",
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
    url: SITE_URL,
    siteName: "Autocoder",
    title: "Autocoder – Чип-тюнинг, Диагностика, Ремонт Электроники | Познань",
    description:
      "Профессиональный чип-тюнинг, диагностика и ремонт автоэлектроники для Mercedes, BMW, VAG в Познани. 15 лет опыта.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Autocoder – Профессиональная автоэлектроника в Познани",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Autocoder – Чип-тюнинг и Ремонт Электроники",
    description:
      "Профессиональный чип-тюнинг, диагностика и ремонт автоэлектроники для Mercedes, BMW, VAG в Познани.",
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
      ru: `${SITE_URL}?lang=ru`,
      pl: `${SITE_URL}?lang=pl`,
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
      addressLocality: "Познань",
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
      name: "Познань",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Автомобильные услуги",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Чип-тюнинг",
            description: "Профессиональный чип-тюнинг для автомобилей Mercedes, BMW и VAG",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Диагностика",
            description: "Профессиональная диагностика с дилерским оборудованием",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Ремонт электроники",
            description: "Ремонт автоэлектроники для немецких автомобилей",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Удаление экологии",
            description: "Отключение DPF, AdBlue, EGR",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Ретрофит и конверсия",
            description: "Установка доп. оборудования и конверсия автомобилей из США в ЕС",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Кодирование и иммобилайзер",
            description: "Кодирование функций и работа с системами иммобилайзера",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Свап двигателя",
            description: "Замена двигателя с адаптацией электроники",
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
    <html lang="ru" className="dark">
      <head>
        <link rel="icon" href={`${SITE_URL}/favicon.ico`} />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

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