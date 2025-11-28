"use client"

import { ArrowLeft } from "lucide-react"
import { t } from "@/lib/translations"
import { useLanguage } from "@/utils/useLanguage";
import Link from "next/link";


export function ChipTuningClientPage({language} : {language : "ru" | "pl"}) {
  const prefix = useLanguage();

  return (
    <main className="bg-white min-h-screen">
      {/* Animated grid pattern background */}
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

        {/* Glowing orbs for depth */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-[oklch(0.65_0.18_130)] rounded-full blur-[120px] opacity-20" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[oklch(0.65_0.18_130)] rounded-full blur-[140px] opacity-15" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Back Button */}
          <Link
            href={`/${prefix}`}
            className="inline-flex items-center gap-2 text-[oklch(0.65_0.18_130)] hover:text-black transition-colors duration-300 mb-8 group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
            <span className="font-semibold">{t("back_to_services", language)}</span>
          </Link>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-8 uppercase tracking-tight">
            {t("chip_tuning", language)}
          </h1>

          <div className="bg-white/80 backdrop-blur-xl border border-gray-200/50 rounded-2xl p-8 sm:p-10 md:p-12 shadow-2xl relative overflow-hidden">
            {/* Gradient background inside card */}
            <div className="absolute inset-0 bg-gradient-to-br from-[oklch(0.65_0.18_130)]/5 via-transparent to-[oklch(0.65_0.18_130)]/5 pointer-events-none" />

            <div className="prose prose-lg max-w-none relative z-10">
              <p className="text-[oklch(0.65_0.18_130)] font-semibold text-xl mb-6 leading-relaxed">
                {t("chip_tuning_intro", language)}
              </p>

              <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">{t("chip_tuning_what_is_it", language)}</h3>

              <p className="text-gray-700 leading-relaxed mb-6">{t("chip_tuning_p1", language)}</p>

              <p className="text-gray-700 leading-relaxed mb-6">{t("chip_tuning_p2", language)}</p>

              <p className="text-gray-700 leading-relaxed mb-8">{t("chip_tuning_p3", language)}</p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-10">
                {t("chip_tuning_examples_title", language)}
              </h2>

              <p className="text-gray-700 leading-relaxed mb-4">{t("chip_tuning_examples_intro", language)}</p>

              <div className="space-y-4 mb-8">
                <div className="bg-white/70 backdrop-blur-sm border border-gray-200/50 rounded-xl p-6 hover:border-[oklch(0.65_0.18_130)]/50 transition-colors duration-300 shadow-md">
                  <p className="text-gray-700 leading-relaxed">
                    <span className="font-semibold text-[oklch(0.65_0.18_130)]">Mercedes Vito W447</span>{" "}
                    {t("chip_tuning_example1", language)}
                  </p>
                </div>

                <div className="bg-white/70 backdrop-blur-sm border border-gray-200/50 rounded-xl p-6 hover:border-[oklch(0.65_0.18_130)]/50 transition-colors duration-300 shadow-md">
                  <p className="text-gray-700 leading-relaxed">
                    <span className="font-semibold text-[oklch(0.65_0.18_130)]">Mercedes Vito W639</span>{" "}
                    {t("chip_tuning_example2", language)}
                  </p>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">{t("chip_tuning_similar", language)}</p>

              <p className="text-gray-700 leading-relaxed mb-8">{t("chip_tuning_reveal", language)}</p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-10">
                {t("chip_tuning_advantages_title", language)}
              </h2>

              <h3 className="text-xl font-bold text-gray-900 mb-4 mt-6">
                {t("chip_tuning_benefits_heading", language)}
              </h3>

              <ul className="space-y-3 mb-8 text-gray-700">
                <li className="flex items-start">
                  <span className="text-[oklch(0.65_0.18_130)] mr-3 mt-1 text-xl">•</span>
                  <span>{t("chip_tuning_adv1", language)}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[oklch(0.65_0.18_130)] mr-3 mt-1 text-xl">•</span>
                  <span>{t("chip_tuning_adv2", language)}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[oklch(0.65_0.18_130)] mr-3 mt-1 text-xl">•</span>
                  <span>{t("chip_tuning_adv3", language)}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[oklch(0.65_0.18_130)] mr-3 mt-1 text-xl">•</span>
                  <span>{t("chip_tuning_adv4", language)}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[oklch(0.65_0.18_130)] mr-3 mt-1 text-xl">•</span>
                  <span>{t("chip_tuning_adv5", language)}</span>
                </li>
              </ul>

              <div className="bg-[oklch(0.65_0.18_130)]/10 border border-[oklch(0.65_0.18_130)]/30 rounded-xl p-6 mb-8">
                <p className="text-gray-700 leading-relaxed mb-3">
                  <span className="font-semibold">{t("chip_tuning_safety", language)}</span>
                </p>
                <p className="text-gray-700 leading-relaxed">{t("chip_tuning_warning", language)}</p>
              </div>

              <p className="text-gray-700 leading-relaxed italic text-center">{t("chip_tuning_decision", language)}</p>
            </div>
          </div>
        </div>
      </div>

    </main>
  )
}
