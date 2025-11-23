"use client"

import { Footer } from "@/components/footer"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { useLanguage } from "@/components/pl-language-context"
import { t } from "@/lib/translations"

export default function ConversionClientPage() {
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
            href="/pl"
            className="inline-flex items-center gap-2 text-[oklch(0.65_0.18_130)] hover:text-black transition-colors duration-300 mb-8 group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
            <span className="font-semibold">{t("back_to_services", language)}</span>
          </Link>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-8 uppercase tracking-tight">
            {t("conversion_title", language)}
          </h1>

          <div className="bg-white/80 backdrop-blur-xl border border-gray-200/50 rounded-2xl p-8 sm:p-10 md:p-12 shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[oklch(0.65_0.18_130)]/5 via-transparent to-[oklch(0.65_0.18_130)]/5 pointer-events-none" />

            <div className="prose prose-lg max-w-none relative z-10">
              <p className="text-gray-700 leading-relaxed mb-6">{t("conversion_intro1", language)}</p>

              <p className="text-gray-700 leading-relaxed mb-6">{t("conversion_intro2", language)}</p>

              <h3 className="text-xl font-bold text-gray-900 mb-4 mt-6">{t("conversion_definition", language)}</h3>

              <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">{t("conversion_what_included", language)}</h3>

              <h2 className="text-2xl font-bold text-black mb-4">{t("conversion_options_title", language)}</h2>
              <ul className="list-disc list-inside mb-8 text-gray-700 space-y-2">
                <li>{t("conversion_option1", language)}</li>
                <li>{t("conversion_option2", language)}</li>
                <li>{t("conversion_option3", language)}</li>
                <li>{t("conversion_option4", language)}</li>
                <li>{t("conversion_option5", language)}</li>
                <li>{t("conversion_option6", language)}</li>
                <li>{t("conversion_option7", language)}</li>
              </ul>

              <h2 className="text-2xl font-bold text-black mb-4">{t("conversion_process_title", language)}</h2>
              <ol className="list-decimal list-inside mb-8 text-gray-700 space-y-2">
                <li>{t("conversion_step1", language)}</li>
                <li>{t("conversion_step2", language)}</li>
                <li>{t("conversion_step3", language)}</li>
                <li>{t("conversion_step4", language)}</li>
              </ol>

              <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">{t("conversion_why_us_title", language)}</h3>

              <h2 className="text-2xl font-bold text-black mb-4">{t("conversion_benefits_title", language)}</h2>
              <ul className="list-disc list-inside mb-8 text-gray-700 space-y-2">
                <li>{t("conversion_benefit1", language)}</li>
                <li>{t("conversion_benefit2", language)}</li>
                <li>{t("conversion_benefit3", language)}</li>
              </ul>

              <div className="bg-white/70 backdrop-blur-sm border border-[oklch(0.65_0.18_130)]/30 rounded-xl p-6 shadow-lg">
                <p className="text-2xl font-bold text-[oklch(0.65_0.18_130)]">{t("conversion_price", language)}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
