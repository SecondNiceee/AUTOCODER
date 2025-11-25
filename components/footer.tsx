"use client"

import { Phone, MapPin, Instagram } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/components/language-context"
import { t } from "@/lib/translations"

export function Footer() {
  const { language } = useLanguage()

  const serviceLinks = [
    { key: "chip_tuning" as const, href: "/chip-tuning" },
    { key: "ecology" as const, href: "/ecology" },
    { key: "diagnostics" as const, href: "/diagnostics" },
    { key: "repair_electronics" as const, href: "/repair" },
    { key: "retrofit" as const, href: "/retrofit" },
    { key: "conversion" as const, href: "/conversion" },
    { key: "coding" as const, href: "/coding" },
    { key: "immobilizer" as const, href: "/immobilizer" },
    { key: "swap" as const, href: "/swap" },
  ] as const

  return (
    <footer className="bg-zinc-950 border-t border-zinc-800 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Services Column */}
          <div>
            <h3 className="text-lime-500 font-bold text-base mb-3 uppercase">{t("services_header", language)}</h3>
            <ul className="space-y-2">
              {serviceLinks.map((service) => (
                <li key={service.key}>
                  <Link href={service.href}>
                    <span className="text-white/70 hover:text-lime-500 transition-colors text-sm cursor-pointer">
                      {t(service.key, language)}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-lime-500 font-bold text-base mb-3 uppercase">{t("contacts_header", language)}</h3>
            <div className="space-y-3">
              <a
                href="tel:+48793058343"
                className="flex items-center gap-2 text-white/70 hover:text-lime-500 transition-colors text-sm"
              >
                <Phone className="w-4 h-4" />
                <span>+48 793 058 343</span>
              </a>
              <a
                href="https://www.instagram.com/autocoder_pl/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/70 hover:text-lime-500 transition-colors text-sm"
              >
                <Instagram className="w-4 h-4" />
                <span>@autocoder_pl</span>
              </a>
              <a
                href="https://wa.me/48793058343"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-lime-500/10 hover:bg-lime-500/20 text-lime-500 px-4 py-2 rounded text-sm transition-colors"
              >
                {t("whatsapp", language)}
              </a>
            </div>
          </div>

          {/* Address Column */}
          <div>
            <h3 className="text-lime-500 font-bold text-base mb-3 uppercase">{t("address_header", language)}</h3>
            <a
              href="https://maps.app.goo.gl/DddQE9PReFShFQ1oj"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-2 text-white/70 hover:text-lime-500 transition-colors text-sm"
            >
              <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
              <span>Poznań, Ożarowska 88</span>
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-4 pt-3 border-t border-zinc-800 text-center">
          <p className="text-white/50 text-sm">{t("all_rights", language)}</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
