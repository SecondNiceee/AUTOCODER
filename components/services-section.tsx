"use client"

import Link from "next/link"
import { t } from "@/lib/translations"

interface IHeroSection {
  language: "ru" | "pl"
}
export function ServicesSection({ language }: IHeroSection) {
  console.log(language);
  const services = [
    {
      id: 1,
      title_key: "chip_tuning" as const,
      icon: "/cheap-tuning.jpg",
      href: "/chip-tuning",
    },
    {
      id: 2,
      title_key: "ecology" as const,
      icon: "/ecology.jpg",
      href: "/ecology",
    },
    {
      id: 3,
      title_key: "diagnostics" as const,
      icon: "/diagnostic.jpg",
      href: "/diagnostics",
    },
    {
      id: 4,
      title_key: "repair_electronics" as const,
      icon: "/remont.jpg",
      href: "/repair",
    },
    {
      id: 5,
      title_key: "retrofit" as const,
      icon: "/additional-equipment.jpg",
      href: "/retrofit",
    },
    {
      id: 6,
      title_key: "conversion" as const,
      icon: "/conversion.jpg",
      href: "/conversion",
    },
    {
      id: 7,
      title_key: "coding" as const,
      icon: "/coding.jpg",
      href: "/coding",
    },
    {
      id: 8,
      title_key: "immobilizer" as const,
      icon: "/keys.jpg",
      href: "/immobilizer",
    },
    {
      id: 9,
      title_key: "swap" as const,
      icon: "/swap.jpg",
      href: "/swap",
    },
  ]

  return (
    <section id="services" className="relative py-8 sm:py-10 md:py-12 overflow-hidden bg-white">
      {/* Animated grid pattern background */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, oklch(0.65 0.18 130 / 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, oklch(0.65 0.18 130 / 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Glowing orbs for depth */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[oklch(0.65_0.18_130)] rounded-full blur-[120px] opacity-20" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[oklch(0.65_0.18_130)] rounded-full blur-[140px] opacity-15" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2
          className="text-center mb-6 sm:mb-8 md:mb-10 px-4 text-black section-fade-in"
          style={{
            fontSize: "clamp(24px, 4vw, 32px)",
            fontWeight: "700",
            textTransform: "uppercase",
            lineHeight: "1.3",
          }}
        >
          {t("our_services", language)}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {services.map((service) => {
            // Формируем href в зависимости от языка
            const href =
              language === "pl"
                ? service.href // остаётся как есть, например: "/chip-tuning"
                : `/ru${service.href}`; // добавляем /ru, например: "/ru/chip-tuning"

              console.log(href);

            const ServiceCard = (
              <div
                key={service.id}
                className="group cursor-pointer flex flex-col items-center text-center p-5 rounded-2xl 
                 bg-black
                 backdrop-blur-sm
                 border border-zinc-800/50
                 hover:border-[oklch(0.65_0.18_130)]
                 hover:shadow-[0_0_40px_-10px_oklch(0.65_0.18_130)]
                 transition-all duration-500 
                 hover:-translate-y-3
                 hover:scale-[1.02]
                 relative overflow-hidden"
              >
                {/* Shine effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[oklch(0.65_0.18_130)]/0 via-[oklch(0.65_0.18_130)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-[oklch(0.65_0.18_130)]/10 blur-2xl rounded-full -translate-y-10 translate-x-10 group-hover:translate-x-5 group-hover:-translate-y-5 transition-transform duration-500" />

                <div
                  className="mb-4 w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center relative z-10 
                    rounded-xl overflow-hidden
                    ring-2 ring-zinc-700/80 group-hover:ring-[oklch(0.65_0.18_130)] 
                    transition-all duration-500
                    shadow-lg group-hover:shadow-[0_0_30px_-5px_oklch(0.65_0.18_130)]
                  bg-black p-2"
                >
                  <img
                    src={service.icon || "/placeholder.svg"}
                    alt={service.title_key}
                    className="w-full h-full object-contain relative z-10 group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <h3
                  className="text-white group-hover:text-[oklch(0.65_0.18_130)] transition-colors duration-300 relative z-10"
                  style={{
                    fontSize: "clamp(14px, 2.5vw, 16px)",
                    fontWeight: "700",
                    textTransform: "uppercase",
                    lineHeight: "1.3",
                    letterSpacing: "0.02em",
                  }}
                >
                  {t(service.title_key, language)}
                </h3>

                {/* Subtle bottom accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[oklch(0.65_0.18_130)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            );

            return service.href ? (
              <Link key={service.id} href={href}>
                {ServiceCard}
              </Link>
            ) : (
              ServiceCard
            );
          })}
        </div>
      </div>
    </section>
  )
}
