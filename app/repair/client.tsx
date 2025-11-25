"use client"

import { Footer } from "@/components/footer"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { useLanguage } from "@/components/language-context"
import { t } from "@/lib/translations"

export default function RepairClientPage() {
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
          {/* Back Button */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[oklch(0.65_0.18_130)] hover:text-black transition-colors duration-300 mb-8 group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
            <span className="font-semibold">{t("back_to_services", language)}</span>
          </Link>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-8 uppercase tracking-tight">
            {t("repair_title", language)}
          </h1>

          <div className="bg-white/80 backdrop-blur-xl border border-gray-200/50 rounded-2xl p-8 sm:p-10 md:p-12 shadow-2xl relative overflow-hidden">
            {/* Gradient background inside card */}
            <div className="absolute inset-0 bg-gradient-to-br from-[oklch(0.65_0.18_130)]/5 via-transparent to-[oklch(0.65_0.18_130)]/5 pointer-events-none" />

            <div className="prose prose-lg max-w-none relative z-10">
              <p className="text-gray-700 leading-relaxed mb-6">{t("repair_intro1", language)}</p>

              <p className="text-gray-700 leading-relaxed mb-6">{t("repair_intro2", language)}</p>

              <p className="text-[oklch(0.65_0.18_130)] font-semibold text-xl mb-6">{t("repair_intro3", language)}</p>

              <p className="text-gray-700 leading-relaxed mb-8">{t("repair_intro4", language)}</p>

              <p className="text-gray-700 leading-relaxed mb-6">{t("repair_intro5", language)}</p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-10">{t("repair_types_title", language)}</h2>

              <div className="space-y-6 mb-8">
                <div className="bg-white/70 backdrop-blur-sm border border-gray-200/50 rounded-xl p-6 hover:border-[oklch(0.65_0.18_130)]/50 transition-colors duration-300 shadow-md">
                  <h3 className="text-[oklch(0.65_0.18_130)] font-semibold text-lg mb-3">
                    {t("repair_type1_title", language)}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">{t("repair_type1_text", language)}</p>
                </div>

                <div className="bg-white/70 backdrop-blur-sm border border-gray-200/50 rounded-xl p-6 hover:border-[oklch(0.65_0.18_130)]/50 transition-colors duration-300 shadow-md">
                  <h3 className="text-[oklch(0.65_0.18_130)] font-semibold text-lg mb-3">
                    {t("repair_type2_title", language)}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">{t("repair_type2_text", language)}</p>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed mb-8">{t("repair_diagnosis", language)}</p>

              <div className="bg-[oklch(0.65_0.18_130)]/10 border border-[oklch(0.65_0.18_130)]/30 rounded-xl p-6 mb-8">
                <p className="text-gray-700 leading-relaxed mb-4">{t("repair_replacement1", language)}</p>
                <p className="text-gray-700 leading-relaxed">{t("repair_replacement2", language)}</p>
              </div>

              <p className="text-gray-700 leading-relaxed text-center italic text-lg">{t("repair_sync", language)}</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
