"use client"

import { Footer } from "@/components/footer"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { t } from "@/lib/translations"

export default function ImmobilizerClientPage() {
  const language = "pl";
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
            {t("immobilizer_title", language)}
          </h1>

          <div className="bg-white/80 backdrop-blur-xl border border-gray-200/50 rounded-2xl p-8 sm:p-10 md:p-12 shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[oklch(0.65_0.18_130)]/5 via-transparent to-[oklch(0.65_0.18_130)]/5 pointer-events-none" />

            <div className="prose prose-lg max-w-none relative z-10">
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t("immobilizer_what_is", language)}</h3>

              <p className="text-gray-700 leading-relaxed mb-6">{t("immobilizer_intro1", language)}</p>

              <p className="text-gray-700 leading-relaxed mb-6">{t("immobilizer_intro2", language)}</p>

              <p className="text-gray-700 leading-relaxed mb-8">{t("immobilizer_intro3", language)}</p>

              <h3 className="text-xl font-bold text-gray-900 mb-6 mt-10">
                {t("immobilizer_problems_title", language)}
              </h3>

              <div className="space-y-6 mb-10">
                <div className="bg-white/70 backdrop-blur-sm border border-gray-200/50 rounded-xl p-6 hover:border-[oklch(0.65_0.18_130)]/50 transition-colors duration-300 shadow-md">
                  <h4 className="text-lg font-semibold text-[oklch(0.65_0.18_130)] mb-3">
                    {t("immobilizer_prob1_title", language)}
                  </h4>
                  <p className="text-gray-700 leading-relaxed">{t("immobilizer_prob1_text", language)}</p>
                </div>

                <div className="bg-white/70 backdrop-blur-sm border border-gray-200/50 rounded-xl p-6 hover:border-[oklch(0.65_0.18_130)]/50 transition-colors duration-300 shadow-md">
                  <h4 className="text-lg font-semibold text-[oklch(0.65_0.18_130)] mb-3">
                    {t("immobilizer_prob2_title", language)}
                  </h4>
                  <p className="text-gray-700 leading-relaxed mb-4">{t("immobilizer_prob2_text1", language)}</p>
                  <p className="text-gray-700 leading-relaxed mb-4">{t("immobilizer_prob2_text2", language)}</p>
                  <p className="text-gray-700 leading-relaxed">{t("immobilizer_prob2_text3", language)}</p>
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">{t("immobilizer_how_we_help", language)}</h3>

              <div className="bg-[oklch(0.65_0.18_130)]/10 border border-[oklch(0.65_0.18_130)]/30 rounded-xl p-8 mt-10">
                <p className="text-gray-700 leading-relaxed text-lg">{t("immobilizer_expertise", language)}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
