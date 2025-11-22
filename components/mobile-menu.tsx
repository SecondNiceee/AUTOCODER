"use client"

import { useState } from "react"
import { Menu, X } from 'lucide-react'
import { useLanguage } from "@/components/language-context"
import { t } from "@/lib/translations"

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const { language } = useLanguage()

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsOpen(false)
  }

  return (
    <div className="md:hidden">
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-foreground hover:text-accent transition p-2"
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-black border-b border-border shadow-lg z-40">
          <nav className="flex flex-col gap-0">
            <button
              onClick={() => scrollToSection('hero')}
              className="px-6 py-4 text-accent hover:bg-zinc-900 font-medium transition text-left border-b border-border/50"
            >
              {t("home", language)}
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="px-6 py-4 text-foreground hover:bg-zinc-900 hover:text-accent font-medium transition text-left border-b border-border/50"
            >
              {t("services", language)}
            </button>
            <button
              onClick={() => scrollToSection('contacts')}
              className="px-6 py-4 text-foreground hover:bg-zinc-900 hover:text-accent font-medium transition text-left"
            >
              {t("contacts", language)}
            </button>
          </nav>
        </div>
      )}
    </div>
  )
}
