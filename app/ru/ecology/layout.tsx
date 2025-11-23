"use client"

import Link from "next/link"

import { useLanguage } from "@/components/language-context"
import { t } from "@/lib/translations"
import type { Metadata } from "next"
import { SITE_URL } from "@/lib/constants"

export const metadata: Metadata = {
  title: "Ekologia - DPF, AdBlue, EGR | Usuwanie Systemów Ekologicznych",
  description:
    "Naprawa i usuwanie systemów ekologicznych: DPF, AdBlue, EGR, katalizator. Rozwiązanie problemów EURO3-EURO6. Poznań.",
  keywords: [
    "usuwanie DPF",
    "AdBlue",
    "EGR",
    "katalizator",
    "filtr cząstek",
    "EURO6",
    "regeneracja DPF",
    "удаление сажевого фильтра",
  ],
  openGraph: {
    title: "Ekologia - DPF, AdBlue, EGR | Autocoder Poznań",
    description:
      "Naprawa i usuwanie systemów ekologicznych: DPF, AdBlue, EGR, katalizator. Rozwiązanie problemów EURO3-EURO6.",
    url: `${SITE_URL}/ecology`,
  },
  alternates: {
    canonical: `${SITE_URL}/ecology`,
  },
}

export default function EcologyPage() {
  const { language } = useLanguage()

  return (
    <main className="bg-white min-h-screen">
      <div className="relative py-16 sm:py-20 md:py-24 overflow-hidden">
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

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[oklch(0.65_0.18_130)] hover:text-black transition-colors duration-300 mb-8 group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
            <span className="font-semibold">{t("back_to_services", language)}</span>
          </Link>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-8 uppercase tracking-tight">
            {t("ecology_title", language)}
          </h1>

          <div className="bg-white/80 backdrop-blur-xl border border-gray-200/50 rounded-2xl p-8 sm:p-10 md:p-12 shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[oklch(0.65_0.18_130)]/5 via-transparent to-[oklch(0.65_0.18_130)]/5 pointer-events-none" />

            <div className="prose prose-lg max-w-none relative z-10">
              <p className="text-gray-700 leading-relaxed mb-6">{t("ecology_intro1", language)}</p>

              <h3 className="text-xl font-bold text-gray-900 mb-4 mt-6">{t("ecology_standards_title", language)}</h3>

              <p className="text-gray-700 leading-relaxed mb-6">{t("ecology_intro2", language)}</p>

              <ul className="space-y-2 mb-6 text-gray-700">
                <li className="flex items-start">
                  <span className="text-[oklch(0.65_0.18_130)] mr-3 mt-1">•</span>
                  <span>
                    <strong>EURO6</strong> —{" "}
                    {t("ecology_euro6", language).replace("ЕВРО6 — ", "").replace("EURO6 — ", "")}
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[oklch(0.65_0.18_130)] mr-3 mt-1">•</span>
                  <span>
                    <strong>EURO4</strong> —{" "}
                    {t("ecology_euro4", language).replace("ЕВРО4 — ", "").replace("EURO4 — ", "")}
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[oklch(0.65_0.18_130)] mr-3 mt-1">•</span>
                  <span>
                    <strong>EURO3</strong> —{" "}
                    {t("ecology_euro3", language).replace("ЕВРО3 — ", "").replace("EURO3 — ", "")}
                  </span>
                </li>
              </ul>

              <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">{t("ecology_components_title", language)}</h3>

              <p className="text-gray-700 leading-relaxed mb-6">{t("ecology_components_intro", language)}</p>

              <ul className="space-y-2 mb-6 text-gray-700">
                <li className="flex items-start">
                  <span className="text-[oklch(0.65_0.18_130)] mr-3 mt-1">•</span>
                  <span>{t("ecology_comp1", language)}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[oklch(0.65_0.18_130)] mr-3 mt-1">•</span>
                  <span>{t("ecology_comp2", language)}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[oklch(0.65_0.18_130)] mr-3 mt-1">•</span>
                  <span>{t("ecology_comp3", language)}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[oklch(0.65_0.18_130)] mr-3 mt-1">•</span>
                  <span>{t("ecology_comp4", language)}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[oklch(0.65_0.18_130)] mr-3 mt-1">•</span>
                  <span>{t("ecology_comp5", language)}</span>
                </li>
              </ul>

              <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">{t("ecology_problems_title", language)}</h3>

              <p className="text-gray-700 leading-relaxed mb-6">{t("ecology_failure", language)}</p>

              <p className="text-gray-700 leading-relaxed mb-6">{t("ecology_adblue", language)}</p>

              <p className="text-gray-700 leading-relaxed mb-6">{t("ecology_dpf", language)}</p>

              <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">{t("ecology_solutions_title", language)}</h3>

              <p className="text-[oklch(0.65_0.18_130)] font-semibold text-xl mb-6">
                {t("ecology_experience", language)}
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">{t("ecology_expertise", language)}</p>

              <p className="text-gray-700 leading-relaxed">{t("ecology_equipment", language)}</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
