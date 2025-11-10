"use client"
import { Star, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react"
import { useState, useEffect, useCallback } from "react"
import useEmblaCarousel from "embla-carousel-react"

export function ReviewsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    skipSnaps: false,
  })

  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])
  const [autoPlay, setAutoPlay] = useState(true)

  const reviews = [
    {
      id: 1,
      name: "Иван П.",
      text: "Отличный результат! Stage 1 чиптюнинг дал мне +40 л.с. Машина едет как новая!",
      rating: 5,
      car: "BMW M340i",
    },
    {
      id: 2,
      name: "Сергей М.",
      text: "Профессиональная команда, быстро и качественно. Рекомендую всем владельцам немецких авто!",
      rating: 5,
      car: "Audi S4",
    },
    {
      id: 3,
      name: "Александр Г.",
      text: "Кодирование выполнено идеально. Все навороты работают как надо. Спасибо ребятам!",
      rating: 5,
      car: "Mercedes-AMG C63",
    },
    {
      id: 4,
      name: "Дмитрий К.",
      text: "Был сомнения, но после чиптюнинга машина поехала просто супер. Стоит каждого рубля!",
      rating: 5,
      car: "Porsche 911",
    },
  ]

  const onDotButtonClick = useCallback(
    (index: number) => {
      if (!emblaApi) return
      emblaApi.scrollTo(index)
      setAutoPlay(false)
    },
    [emblaApi],
  )

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return
    emblaApi.scrollNext()
    setAutoPlay(false)
  }, [emblaApi])

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return
    emblaApi.scrollPrev()
    setAutoPlay(false)
  }, [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    setScrollSnaps(emblaApi.scrollSnapList())
    emblaApi.on("select", onSelect)

    return () => {
      emblaApi.off("select", onSelect)
    }
  }, [emblaApi, onSelect])

  useEffect(() => {
    if (!autoPlay || !emblaApi) return
    const timer = setInterval(() => {
      emblaApi.scrollNext()
    }, 5000)
    return () => clearInterval(timer)
  }, [autoPlay, emblaApi])

  const currentReview = reviews[selectedIndex]

  return (
    <section className="py-16 sm:py-24 px-4 bg-gradient-to-b from-zinc-950 via-black to-zinc-950">
      <div className="container mx-auto max-w-5xl">
        {/* Section Title */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4 px-4">
            Отзывы наших клиентов
          </h2>
          <p className="text-gray-400 text-base sm:text-lg px-4">
            Откройте для себя, почему нас выбирают лучшие владельцы немецких автомобилей
          </p>
        </div>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-4">
            {reviews.map((review) => (
              <div key={review.id} className="flex-[0_0_100%] min-w-0">
                {/* Main Review Card */}
                <div className="bg-gradient-to-br from-zinc-900 via-zinc-900 to-black border border-zinc-800 rounded-2xl p-8 sm:p-12 mb-8 shadow-2xl">
                  {/* Stars */}
                  <div className="flex justify-center gap-1 mb-6 sm:mb-8">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 sm:w-7 sm:h-7 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-white text-lg sm:text-xl md:text-2xl text-center mb-6 sm:mb-8 min-h-24 flex items-center justify-center leading-relaxed">
                    "{review.text}"
                  </p>

                  {/* Reviewer Info */}
                  <div className="flex flex-col items-center justify-center border-t border-zinc-800 pt-6 sm:pt-8">
                    <p className="text-white font-bold text-lg sm:text-xl">{review.name}</p>
                    <p className="text-amber-400 text-sm sm:text-base font-medium mt-1">{review.car}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-between items-center px-4 sm:px-0 mb-8">
          <button
            onClick={onPrevButtonClick}
            className="p-3 sm:p-4 rounded-full bg-zinc-900 hover:bg-[oklch(0.65_0.18_130)] text-white transition-all duration-300 transform hover:scale-110 border border-zinc-800 hover:border-[oklch(0.65_0.18_130)] cursor-pointer"
            aria-label="Предыдущий отзыв"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Dot Indicators */}
          <div className="flex justify-center gap-3">
            {scrollSnaps.map((_, index) => (
              <button
                key={index}
                onClick={() => onDotButtonClick(index)}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  index === selectedIndex
                    ? "w-3 h-3 sm:w-4 sm:h-4 bg-[oklch(0.65_0.18_130)]"
                    : "w-2 h-2 sm:w-3 sm:h-3 bg-zinc-700 hover:bg-zinc-600"
                }`}
                aria-label={`Отзыв ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={onNextButtonClick}
            className="p-3 sm:p-4 rounded-full bg-zinc-900 hover:bg-[oklch(0.65_0.18_130)] text-white transition-all duration-300 transform hover:scale-110 border border-zinc-800 hover:border-[oklch(0.65_0.18_130)] cursor-pointer"
            aria-label="Следующий отзыв"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>

        {/* Review Counter */}
        <div className="text-center text-gray-400 text-sm mb-10 sm:mb-12">
          {selectedIndex + 1} из {reviews.length}
        </div>

        {/* Google Reviews Button */}
        <div className="flex flex-col items-center gap-4">
          <a
            href="https://www.google.com/search?q=AUTOCODER+reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 sm:gap-3 px-8 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-[oklch(0.65_0.18_130)] to-[oklch(0.6_0.18_130)] hover:from-[oklch(0.7_0.18_130)] hover:to-[oklch(0.65_0.18_130)] text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-[oklch(0.65_0.18_130)]/50 text-base sm:text-lg"
          >
            <span>Посмотреть все отзывы на Google</span>
            <ExternalLink className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
          </a>

          <p className="text-gray-500 text-xs sm:text-sm mt-4 px-4">Более 100+ довольных клиентов AUTOCODER</p>
        </div>
      </div>
    </section>
  )
}
