"use client"

import { Phone, Instagram } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import { useLanguage } from "@/components/language-context"
import { t } from "@/lib/translations"
import { MobileMenu } from "@/components/mobile-menu"

export function Header() {
  const { language, setLanguage } = useLanguage()

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      {/* Main Header - Standalone without top bar */}
      <header className="bg-black backdrop-blur-md border-b w-full border-border sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center hover:opacity-80 transition">
              <Image
                src="/autocoder-logo.png"
                alt="Autocoder Logo"
                width={180}
                height={45}
                className="h-7 w-auto"
                priority
              />
            </Link>

            <MobileMenu />

            <nav className="hidden md:flex items-center gap-8">
              <button onClick={() => scrollToSection('hero')} className="text-accent hover:text-accent/80 font-medium transition cursor-pointer">
                {t("home", language)}
              </button>
              <button onClick={() => scrollToSection('services')} className="text-foreground hover:text-accent font-medium transition cursor-pointer">
                {t("services", language)}
              </button>
              <button onClick={() => scrollToSection('contacts')} className="text-foreground hover:text-accent font-medium transition cursor-pointer">
                {t("contacts", language)}
              </button>
            </nav>

            <div className="hidden md:flex items-center gap-4">
              <a
                href="tel:+48793058343"
                className="hidden lg:flex items-center gap-2 text-foreground/80 hover:text-accent transition text-sm"
              >
                <Phone className="w-4 h-4" />
                <span>+48793058343</span>
              </a>

              <a
                href="https://www.instagram.com/autocoder_pl/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/80 hover:text-accent transition"
              >
                <Instagram className="w-5 h-5" />
              </a>

              <div className="flex items-center gap-3 px-4 py-2 bg-zinc-900 rounded-lg border border-zinc-800 hover:border-accent transition-colors">
                <button
                  onClick={() => setLanguage("pl")}
                  className={`text-sm font-medium transition cursor-pointer ${
                    language === "pl" ? "text-accent" : "text-foreground hover:text-accent"
                  }`}
                >
                  PL
                </button>
                <span className="text-foreground text-sm">|</span>
                <button
                  onClick={() => setLanguage("ru")}
                  className={`text-sm font-medium transition cursor-pointer ${
                    language === "ru" ? "text-accent" : "text-foreground hover:text-accent"
                  }`}
                >
                  RU
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
