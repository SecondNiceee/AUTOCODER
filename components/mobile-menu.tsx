"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { t } from "@/lib/translations"
import { usePathname, useRouter } from "next/navigation"

interface IMobileMenu{
  language : "pl" | "ru"
}
export function MobileMenu({language} : IMobileMenu ) {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsOpen(false)
  }

  const handleLanguageSwitch = (newLang: "pl" | "ru") => {
    if (newLang === "ru") {
      if (pathname === "/") {
        router.push("/ru")
      } else if (!pathname.startsWith("/ru")) {
        router.push(`/ru${pathname}`)
      }
    } else {
      if (pathname.startsWith("/ru")) {
        const newPath = pathname.replace(/^\/ru/, "") || "/"
        router.push(newPath)
      }
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
              onClick={() => scrollToSection("hero")}
              className="px-6 py-4 text-accent hover:bg-zinc-900 font-medium transition text-left border-b border-border/50"
            >
              {t("home", language)}
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="px-6 py-4 text-foreground hover:bg-zinc-900 hover:text-accent font-medium transition text-left border-b border-border/50"
            >
              {t("services", language)}
            </button>
            <button
              onClick={() => scrollToSection("contacts")}
              className="px-6 py-4 text-foreground hover:bg-zinc-900 hover:text-accent font-medium transition text-left border-b border-border/50"
            >
              {t("contacts", language)}
            </button>
            {/* Language Switcher */}
            <div className="px-6 py-4 flex items-center gap-4 border-b border-border/50">
              <span className="text-foreground/60 text-sm font-medium">Język / Язык:</span>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => handleLanguageSwitch("pl")}
                  className={`text-sm font-medium transition cursor-pointer ${
                    language === "pl" ? "text-accent" : "text-foreground hover:text-accent"
                  }`}
                >
                  PL
                </button>
                <span className="text-foreground text-sm">|</span>
                <button
                  onClick={() => handleLanguageSwitch("ru")}
                  className={`text-sm font-medium transition cursor-pointer ${
                    language === "ru" ? "text-accent" : "text-foreground hover:text-accent"
                  }`}
                >
                  RU
                </button>
              </div>
            </div>
          </nav>
        </div>
      )}
    </div>
  )
}
