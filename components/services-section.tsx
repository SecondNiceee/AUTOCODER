export function ServicesSection() {
  const services = [
    {
      id: 1,
      title: "ЧИП ТЮНИНГ",
      icon: "/cheap-tuning.jpg",
    },
    {
      id: 2,
      title: "ЭКОЛОГИЯ",
      icon: "/ecology.jpg",
    },
    {
      id: 3,
      title: "ДИАГНОСТИКА",
      icon: "/diagnostic.jpg",  
    },
    {
      id: 4,
      title: "РЕМОНТ ЭЛЕКТРОНИКИ",
      icon: "/remont.jpg",
    },
    {
      id: 5,
      title: "ДОСНАЩЕНИЕ (RETROFIT)",
      icon: "/additional-equipment.jpg",
    },
    {
      id: 6,
      title: "КОНВЕРСИЯ / USA-EU",
      icon: "/conversion.jpg",
    },
    {
      id: 7,
      title: "КОДИРОВАНИЕ И ПРОГРАММИРОВАНИЕ",
      icon: "/coding.jpg",
    },
    {
      id: 8,
      title: "КЛЮЧИ / ИММОБИЛАЙЗЕРЫ",
      icon: "/keys.jpg",
    },
    {
      id: 9,
      title: "SWAP",
      icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/swap-AqyApylnXd6BvxJ6s1YMA2pSsh7h2D.jpg",
    },
  ]

  return (
    <section className="relative py-12 sm:py-16 md:py-20 overflow-hidden bg-gradient-to-br from-zinc-950 via-black to-zinc-900">
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2
          className="text-center mb-8 sm:mb-12 md:mb-16 px-4 text-white"
          style={{
            fontFamily: "Montserrat, sans-serif",
            fontSize: "clamp(28px, 5vw, 40px)",
            fontWeight: "700",
            textTransform: "uppercase",
            lineHeight: "1.3",
          }}
        >
          УСЛУГИ:
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
          {services.map((service) => (
            <div
              key={service.id}
              className="group cursor-pointer flex flex-col items-center text-center p-8 rounded-2xl 
                         bg-gradient-to-br from-zinc-900/80 to-black/60 
                         backdrop-blur-sm
                         border border-zinc-800/50
                         hover:border-[oklch(0.65_0.18_130)]
                         hover:shadow-[0_0_40px_-10px_oklch(0.65_0.18_130)]
                         transition-all duration-500 
                         hover:-translate-y-3
                         hover:scale-[1.02]
                         relative overflow-hidden"
            >
              {/* Shine effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[oklch(0.65_0.18_130)]/0 via-[oklch(0.65_0.18_130)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-[oklch(0.65_0.18_130)]/10 blur-2xl rounded-full -translate-y-10 translate-x-10 group-hover:translate-x-5 group-hover:-translate-y-5 transition-transform duration-500" />

              <div
                className="mb-6 w-28 h-28 sm:w-32 sm:h-32 flex items-center justify-center relative z-10 
                            rounded-xl overflow-hidden
                            ring-2 ring-zinc-700/80 group-hover:ring-[oklch(0.65_0.18_130)] 
                            transition-all duration-500
                            shadow-lg group-hover:shadow-[0_0_30px_-5px_oklch(0.65_0.18_130)]
                          bg-black p-3"
              >
                <img
                  src={service.icon || "/placeholder.svg"}
                  alt={service.title}
                  className="w-full h-full object-contain relative z-10 group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <h3
                className="text-white group-hover:text-[oklch(0.65_0.18_130)] transition-colors duration-300 relative z-10"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "clamp(16px, 3vw, 18px)",
                  fontWeight: "700",
                  textTransform: "uppercase",
                  lineHeight: "1.4",
                  letterSpacing: "0.02em",
                }}
              >
                {service.title}
              </h3>

              {/* Subtle bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[oklch(0.65_0.18_130)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
