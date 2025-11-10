import { Phone, MapPin, Instagram } from "lucide-react"
import Image from "next/image"

export function Header() {
  return (
    <>
      {/* Top Info Bar - Updated to use green theme instead of blue */}
      <div
        className="backdrop-blur-md border-b border-border/30 relative z-[20]"
        style={{ backgroundColor: "oklch(0.35 0.10 130 / 0.7)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-4 md:gap-[40px]">
            <a
              href="tel:+48793058343"
              className="flex items-center gap-2 text-white hover:opacity-80 transition font-montserrat text-sm"
              style={{ fontSize: "14px", fontFamily: "Montserrat, sans-serif", fontWeight: "400" }}
            >
              <Phone className="w-4 h-4 flex-shrink-0" />
              <span className="whitespace-nowrap">+48793058343</span>
            </a>
            <a
              href="https://www.instagram.com/autocoder_pl/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white hover:opacity-80 transition font-montserrat text-sm"
              style={{ fontSize: "14px", fontFamily: "Montserrat, sans-serif", fontWeight: "400" }}
            >
              <Instagram className="w-4 h-4 flex-shrink-0" />
              <span className="hidden sm:inline">@autocoder_pl</span>
              <span className="sm:hidden">Instagram</span>
            </a>
            <a
              href="https://maps.app.goo.gl/DddQE9PReFShFQ1o9"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white hover:opacity-80 transition font-montserrat text-sm"
            >
              <MapPin className="w-4 h-4 flex-shrink-0" />
              <span style={{ fontSize: "14px", fontFamily: "Montserrat, sans-serif", fontWeight: "400" }}>
                Poznań, Ozarowska 88
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Header - Added backdrop-blur-md and mobile menu */}
      <div className="bg-background/85 backdrop-blur-md border-b border-border sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Image
                src="/autocoder-logo.png"
                alt="Autocoder Logo"
                width={180}
                height={45}
                className="h-7 w-auto"
                priority
              />
            </div>

            <nav className="hidden md:flex items-center gap-8">
              <a href="#" className="text-accent hover:text-accent/80 font-medium transition">
                ГЛАВНАЯ
              </a>
              <a href="#" className="text-foreground hover:text-accent font-medium transition">
                УСЛУГИ
              </a>
              <a href="#" className="text-foreground hover:text-accent font-medium transition">
                КОНТАКТЫ
              </a>
            </nav>

            <div className="flex items-center gap-3 px-4 py-2 bg-zinc-900 rounded-lg border border-zinc-800 w-[175px] justify-center hover:border-accent transition-colors">
              <a href="#" className="text-foreground hover:text-accent text-sm font-medium transition">
                PL
              </a>
              <span className="text-foreground text-sm">|</span>
              <a href="#" className="text-foreground hover:text-accent text-sm font-medium transition">
                RU
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
