"use client"

import { Phone, Instagram, MapPin } from "lucide-react"

export function MapSection() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-black via-zinc-900 to-black">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(132,204,22,0.05),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(132,204,22,0.03),transparent_50%)]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2
          className="text-center mb-8 sm:mb-12"
          style={{
            fontFamily: "Montserrat, sans-serif",
            fontSize: "clamp(28px, 5vw, 48px)",
            fontWeight: "700",
            color: "#ffffff",
            textTransform: "uppercase",
            letterSpacing: "0.05em",
          }}
        >
          Контакты
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
                  <h3 className="text-white font-montserrat font-semibold text-lg mb-2">Телефон</h3>
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
                    <a
                      href="https://t.me/+48793058343"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-lime-500/10 hover:bg-lime-500/20 text-lime-500 px-4 py-2 rounded text-sm transition-colors"
                    >
                      Telegram
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
                  <h3 className="text-white font-montserrat font-semibold text-lg mb-2">Instagram</h3>
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
                  <h3 className="text-white font-montserrat font-semibold text-lg mb-2">Адрес</h3>
                  <a
                    href="https://maps.app.goo.gl/DddQE9PReFShFQ1oj"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/80 hover:text-lime-500 text-lg transition-colors block"
                  >
                    Poznań, Ożarowska 88
                  </a>
                  <a
                    href="https://maps.app.goo.gl/DddQE9PReFShFQ1oj"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-3 bg-lime-500 hover:bg-lime-600 text-black px-6 py-2 rounded font-semibold transition-colors"
                  >
                    Открыть в Google Maps
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
