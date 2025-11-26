"use client"

import { Footer } from "@/components/footer"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { useLanguage } from "@/components/ru-language-context"
import { t } from "@/lib/translations"

export default function CodingClientPage() {
  const { language } = useLanguage()

  return (
    <main className="bg-white min-h-screen">
      <div className="relative py-16 sm:py-20 md:py-24 overflow-hidden">
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

        <div className="absolute top-20 left-10 w-72 h-72 bg-[oklch(0.65_0.18_130)] rounded-full blur-[120px] opacity-20" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[oklch(0.65_0.18_130)] rounded-full blur-[140px] opacity-15" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link
            href="/ru"
            className="inline-flex items-center gap-2 text-[oklch(0.65_0.18_130)] hover:text-black transition-colors duration-300 mb-8 group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
            <span className="font-semibold">{t("back_to_services", language)}</span>
          </Link>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-8 uppercase tracking-tight">
            {t("coding_title", language)}
          </h1>

          <div className="bg-white/80 backdrop-blur-xl border border-gray-200/50 rounded-2xl p-8 sm:p-10 md:p-12 shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[oklch(0.65_0.18_130)]/5 via-transparent to-[oklch(0.65_0.18_130)]/5 pointer-events-none" />

            <div className="prose prose-lg max-w-none relative z-10">
              <p className="text-gray-700 leading-relaxed mb-6">{t("coding_intro1", language)}</p>

              <p className="text-gray-700 leading-relaxed mb-8">{t("coding_intro2", language)}</p>

              <p className="text-gray-700 leading-relaxed mb-10">{t("coding_intro3", language)}</p>

              <h2 className="text-3xl font-bold text-[oklch(0.65_0.18_130)] mb-6 mt-10">
                {t("programming_title", language)}
              </h2>

              <p className="text-gray-700 leading-relaxed mb-8">{t("programming_intro", language)}</p>

              <div className="space-y-6 mb-10">
                <div className="bg-white/70 backdrop-blur-sm border border-gray-200/50 rounded-xl p-6 hover:border-[oklch(0.65_0.18_130)]/50 transition-colors duration-300 shadow-md">
                  <h3 className="text-[oklch(0.65_0.18_130)] font-semibold text-lg mb-3">
                    {t("programming_1_title", language)}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">{t("programming_1_text", language)}</p>
                </div>

                <div className="bg-white/70 backdrop-blur-sm border border-gray-200/50 rounded-xl p-6 hover:border-[oklch(0.65_0.18_130)]/50 transition-colors duration-300 shadow-md">
                  <h3 className="text-[oklch(0.65_0.18_130)] font-semibold text-lg mb-3">
                    {t("programming_2_title", language)}
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-3">{t("programming_2_text", language)}</p>
                  <p className="text-gray-600 text-sm italic">{t("programming_2_example", language)}</p>
                </div>

                <div className="bg-white/70 backdrop-blur-sm border border-gray-200/50 rounded-xl p-6 hover:border-[oklch(0.65_0.18_130)]/50 transition-colors duration-300 shadow-md">
                  <h3 className="text-[oklch(0.65_0.18_130)] font-semibold text-lg mb-3">
                    {t("programming_3_title", language)}
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-3">{t("programming_3_text1", language)}</p>
                  <p className="text-gray-700 leading-relaxed mb-3">{t("programming_3_text2", language)}</p>
                  <p className="text-gray-600 text-sm italic">{t("programming_3_example", language)}</p>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-[oklch(0.65_0.18_130)] mb-6 mt-12">
                {t("coding_section_title", language)}
              </h2>

              <p className="text-gray-700 leading-relaxed mb-8">{t("coding_intro", language)}</p>

              <div className="bg-[oklch(0.65_0.18_130)]/10 border border-[oklch(0.65_0.18_130)]/30 rounded-xl p-6 mb-8">
                <h3 className="font-semibold text-gray-900 mb-4">{t("coding_examples_title", language)}</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-[oklch(0.65_0.18_130)] mr-3 mt-1">—</span>
                    <span>{t("coding_ex1", language)}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[oklch(0.65_0.18_130)] mr-3 mt-1">—</span>
                    <span>{t("coding_ex2", language)}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[oklch(0.65_0.18_130)] mr-3 mt-1">—</span>
                    <span>{t("coding_ex3", language)}</span>
                  </li>
                </ul>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">{t("coding_sync1", language)}</p>

              <p className="text-gray-700 leading-relaxed mb-6">{t("coding_sync2", language)}</p>

              <p className="text-gray-700 leading-relaxed mb-6">{t("coding_sync3", language)}</p>

              <p className="text-gray-700 leading-relaxed mb-8">{t("coding_sync4", language)}</p>

              <p className="text-gray-700 leading-relaxed">{t("coding_extra", language)}</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
