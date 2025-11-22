export function EcoSection() {
  const services = [
    {
      id: 1,
      title: "ЭКОЛОГИЯ",
      description: "Решение проблем с экологическими системами автомобиля",
      icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ecology-yVwORo4op8ADu3uvA1d7YNoc5Hyoqa.jpg",
    },
    {
      id: 2,
      title: "ДИАГНОСТИКА",
      description: "Профессиональная диагностика электронных систем",
      icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/diagnostic-t1bChYS8IZ2ADK1cr9l977MFXaQcrs.jpg",
    },
    {
      id: 3,
      title: "SWAP",
      description: "Замена и модернизация двигателей и агрегатов",
      icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/swap-AqyApylnXd6BvxJ6s1YMA2pSsh7h2D.jpg",
    },
  ]

  return (
    <section className="bg-black py-12 sm:py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <h2
          className="text-center text-white mb-8 sm:mb-12 md:mb-16 px-4"
          style={{
            fontSize: "clamp(24px, 5vw, 32px)",
            fontWeight: "700",
            textTransform: "uppercase",
            lineHeight: "1.3",
          }}
        >
          СПЕЦИАЛИЗИРОВАННЫЕ УСЛУГИ
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
          {services.map((service) => (
            <div
              key={service.id}
              className="group cursor-pointer flex flex-col items-center text-center p-6 rounded-xl bg-zinc-900 border-2 border-zinc-800 hover:border-[oklch(0.65_0.18_130)] transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
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
                className="text-[oklch(0.65_0.18_130)] mb-3 transition-colors"
                style={{
                  fontSize: "clamp(18px, 3vw, 22px)",
                  fontWeight: "700",
                  textTransform: "uppercase",
                  lineHeight: "1.3",
                }}
              >
                {service.title}
              </h3>

              {/* Description */}
              <p
                className="text-gray-400 transition-colors group-hover:text-gray-300"
                style={{
                  fontSize: "clamp(14px, 2.5vw, 16px)",
                  lineHeight: "1.5",
                }}
              >
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
