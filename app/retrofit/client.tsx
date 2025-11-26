"use client"

import { Footer } from "@/components/footer"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { t } from "@/lib/translations"

export default function RetrofitClientPage() {
  const language = "pl"
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
            {t("retrofit_title", language)}
          </h1>

          <div className="bg-white/80 backdrop-blur-xl border border-gray-200/50 rounded-2xl p-8 sm:p-10 md:p-12 shadow-2xl relative overflow-hidden">
            {/* Gradient background inside card */}
            <div className="absolute inset-0 bg-gradient-to-br from-[oklch(0.65_0.18_130)]/5 via-transparent to-[oklch(0.65_0.18_130)]/5 pointer-events-none" />

            <div className="prose prose-lg max-w-none relative z-10">
              <p className="text-[oklch(0.65_0.18_130)] font-semibold text-xl mb-8 leading-relaxed">
                {t("retrofit_intro", language)}
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-10">{t("retrofit_popular_title", language)}</h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {Array.from({ length: 27 }, (_, i) => i + 1).map((num) => (
                  <div
                    key={num}
                    className="bg-white/70 backdrop-blur-sm border border-gray-200/50 rounded-xl p-4 hover:border-[oklch(0.65_0.18_130)]/50 transition-colors duration-300 shadow-md"
                  >
                    <div className="flex items-center">
                      <span className="text-[oklch(0.65_0.18_130)] mr-3 text-xl">•</span>
                      <span className="text-gray-700">{t(`retrofit_${num}` as any, language)}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </main>
  )
}
