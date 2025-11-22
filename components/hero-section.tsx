"use client"

import Image from "next/image"
import { useLanguage } from "@/components/language-context"
import { t } from "@/lib/translations"

export function HeroSection() {
  const { language } = useLanguage()

  return (
    <section
      id="hero"
      className="relative flex items-center justify-center overflow-hidden bg-black"
      style={{ minHeight: "92vh" }}
    >
      {/* Content - centered text vertically on screen */}
      <div className="relative flex flex-col gap-9 z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center">
          <div className="inline-block bg-[#a0e308] text-black px-6 py-2 rounded-full font-bold text-sm sm:text-base md:text-lg tracking-wide">
            {t("experience", language)}
          </div>
        </div>

        <p
          className="text-[#a0e308] max-w-[970px] mx-auto tracking-widest uppercase px-4"
          style={{
            fontSize: "clamp(12px, 3vw, 24px)",
            fontWeight: "700",
            textShadow: "0 2px 8px rgba(0, 0, 0, 0.5)",
            letterSpacing: "0.1em",
            lineHeight: "1.3",
          }}
        >
          {t("electronics", language)}, {t("brands", language)}
        </p>

        <div className="flex justify-center px-4">
          <Image
            src="/FOUR.svg"
            alt="AUTOCODER"
            width={700}
            height={100}
            className="w-full md:w-[700px] h-auto"
            priority
          />
        </div>

        <p
          className="text-white mx-auto md:mt-[50px] max-w-[860px] px-4"
          style={{
            fontSize: "clamp(15px, 3vw, 25px)",
            fontWeight: "400",
            lineHeight: "1.2",
            textShadow: "0 2px 8px rgba(0, 0, 0, 0.5)",
            letterSpacing: "0.1em",
            fontFamily: "var(--font-mont-bold), sans-serif",
          }}
        >
          {t("services_list", language)} {t("services_list_2", language)} {t("services_list_3", language)}
        </p>
      </div>
    </section>
  )
}
