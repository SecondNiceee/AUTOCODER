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
      icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ecology-yVwORo4op8ADu3uvA1d7YNoc5Hyoqa.jpg",
    },
    {
      id: 3,
      title: "ДИАГНОСТИКА",
      icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/diagnostic-t1bChYS8IZ2ADK1cr9l977MFXaQcrs.jpg",
    },
    {
      id: 4,
      title: "РЕМОНТ ЭЛЕКТРОНИКИ",
      icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/diagnostic-t1bChYS8IZ2ADK1cr9l977MFXaQcrs.jpg",
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
    <section className="bg-white py-12 sm:py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <h2
          className="text-center text-black mb-8 sm:mb-12 md:mb-16 px-4"
          style={{
            fontFamily: "Montserrat, sans-serif",
            fontSize: "clamp(24px, 5vw, 32px)",
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
              className="group cursor-pointer flex flex-col items-center text-center p-6 rounded-xl bg-black border-2 border-transparent hover:border-[oklch(0.65_0.18_130)] transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Icon */}
              <div className="mb-4 sm:mb-6 w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center">
                <img
                  src={service.icon || "/placeholder.svg"}
                  alt={service.title}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Title */}
              <h3
                className="text-white transition-colors"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "clamp(16px, 3vw, 18px)",
                  fontWeight: "700",
                  textTransform: "uppercase",
                  lineHeight: "1.3",
                }}
              >
                {service.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
