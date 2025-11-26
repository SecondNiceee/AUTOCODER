"use client"

import { Phone, Instagram, MapPin } from 'lucide-react'
import { t } from "@/lib/translations"



interface IHeroSection{
  language : "ru" | "pl"
}
export function MapSection({language} : IHeroSection) {

  return (
    <section id="contacts" className="relative py-4 sm:py-5 lg:py-6 overflow-hidden bg-gradient-to-br from-zinc-950 via-black to-zinc-900">
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

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2
          className="text-center text-lg sm:text-xl md:text-2xl mb-4 sm:mb-5"
          style={{
            fontFamily: "Inter, sans-serif",
            color: "#ffffff",
            textTransform: "uppercase",
            letterSpacing: "0.05em",
          }}
        >
          {t("contacts_header", language)}
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left side - Contact Information */}
          <div className="space-y-6">
            {/* Phone Contact */}
            <div className="bg-zinc-900/50 border border-lime-500/20 rounded-lg p-6 hover:border-lime-500/40 transition-colors">
              <div className="flex items-start gap-4">
                <div className="bg-lime-500/10 p-3 rounded-lg">
                  <Phone className="w-6 h-6 text-lime-500" />
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-semibold text-lg mb-2">{t("phone_label", language)}</h3>
                  <a
                    href="tel:+48793058343"
                    className="text-lime-500 hover:text-lime-400 text-xl font-semibold block mb-2 transition-colors"
                  >
                    +48 793 058 343
                  </a>
                  <div className="flex gap-3 mt-3">
                    <a
                      href="https://wa.me/48793058343"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-lime-500/10 hover:bg-lime-500/20 text-lime-500 px-4 py-2 rounded text-sm transition-colors"
                    >
                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Instagram Contact */}
            <div className="bg-zinc-900/50 border border-lime-500/20 rounded-lg p-6 hover:border-lime-500/40 transition-colors">
              <div className="flex items-start gap-4">
                <div className="bg-lime-500/10 p-3 rounded-lg">
                  <Instagram className="w-6 h-6 text-lime-500" />
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-semibold text-lg mb-2">Instagram</h3>
                  <a
                    href="https://www.instagram.com/autocoder_pl/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lime-500 hover:text-lime-400 text-lg transition-colors"
                  >
                    @autocoder_pl
                  </a>
                </div>
              </div>
            </div>

            {/* Address Contact */}
            <div className="bg-zinc-900/50 border border-lime-500/20 rounded-lg p-6 hover:border-lime-500/40 transition-colors">
              <div className="flex items-start gap-4">
                <div className="bg-lime-500/10 p-3 rounded-lg">
                  <MapPin className="w-6 h-6 text-lime-500" />
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-semibold text-lg mb-2">{t("address_label", language)}</h3>
                  <a
                    href="https://maps.app.goo.gl/DddQE9PReFShFQ1oj"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/80 hover:text-lime-500 text-lg transition-colors block"
                  >
                    Poznań, Ożarowska 88
                  </a>
                  <a
                    href="https://www.google.com/search?sa=X&sca_esv=f5f7bfe5ec8d5861&hl=ru&authuser=0&biw=1366&bih=633&sxsrf=AE3TifMufRiYdy9QGlBN16HSdnL2Oou3hw:1762685437906&kgmid=/g/11ykm20hh2&q=Autocoder&shndl=30&shem=dafa,lcuae,uaasie,shrtsdl&source=sh/x/loc/uni/m1/1&kgs=945b1d1efe0373c1&utm_source=dafa,lcuae,uaasie,shrtsdl,sh/x/loc/uni/m1/1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-3 bg-lime-500 hover:bg-lime-600 text-black px-6 py-2 rounded font-semibold transition-colors"
                  >
                    {t("open_in_google", language)}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Google Map */}
          <div
            className="relative w-full rounded-lg overflow-hidden shadow-2xl border border-lime-500/20"
            style={{ height: "500px" }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2433.384567!2d16.8733!3d52.4139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47045b1f0c0c0c0d%3A0x0!2zT8W8YXJvd3NrYSA4OCwgNjEtMzMyIFBvem5hxYQsIFBvbGFuZA!5e0!3m2!1sru!2spl!4v1234567890123&style=feature:all|element:geometry|color:0x212121&style=feature:all|element:labels.icon|visibility:off&style=feature:all|element:labels.text.fill|color:0xffffff&style=feature:all|element:labels.text.stroke|color:0x212121&style=feature:administrative|element:geometry|color:0x757575&style=feature:landscape|element:geometry|color:0x1a1a1a&style=feature:poi|element:geometry|color:0x212121&style=feature:road|element:geometry.fill|color:0x2c2c2c&style=feature:road|element:labels.text.fill|color:0xffffff&style=feature:road.arterial|element:geometry|color:0x373737&style=feature:road.highway|element:geometry|color:0x3c3c3c&style=feature:water|element:geometry|color:0x1a1a1a"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map Location - Ożarowska 88, Poznań"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
