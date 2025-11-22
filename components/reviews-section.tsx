"use client"
import { Star, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react'
import { useState, useEffect, useCallback } from "react"
import useEmblaCarousel from "embla-carousel-react"
import { useLanguage } from "@/components/language-context"
import { t } from "@/lib/translations"

export function ReviewsSection() {
  const { language } = useLanguage()
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
      name: "Andrew Kisialiou",
      text_ru: "Пришил мне темпомат и камеру заднего вида за 10 минут. Я искал кто это сделает 3 дня. Ничего не спрашивал просто сказал конечно можно. Цены ок. Хороший дядька.",
      text_pl: "Zainstalował mi tempomat i kamerę cofania w 10 minut. Szukałem kogoś kto to zrobi przez 3 dni. Nic nie pytał, po prostu powiedział oczywiście, że można. Ceny ok. Fajny gość.",
      rating: 5,
      car: "Mercedes 906",
      onlyPolish: false,
    },
    {
      id: 2,
      name: "Nataliia Oshyievska",
      text_ru: "Дмитрий, профессионал с большой буквы! Редко встретишь такого мастера, который разбирается так классно с мозгами машины и находит правильно причину поломки.",
      text_pl: "Dmitrij, profesjonalista z dużej litery! Rzadko spotyka się takiego majstra, który tak dobrze rozumie elektronikę samochodu i prawidłowo znajduje przyczynę awarii.",
      rating: 5,
      car: "",
      onlyPolish: false,
    },
    {
      id: 3,
      name: "Tomasz Czerepowicz",
      text_ru: "Moim zdaniem najlepszy spec od elektroniki w Mercedesach i BMW w okolicy. Wykrył usterkę zaciętego dachu w R230 gdy inni rozłożyli ręce. W BMW g21 dołożył mi kamerkę cofania. W BMW e 92 byłem u niego na zdjęciu kagańca. Na pewno jeszcze nie raz skorzystam",
      text_pl: "Moim zdaniem najlepszy spec od elektroniki w Mercedesach i BMW w okolicy. Wykrył usterkę zaciętego dachu w R230 gdy inni rozłożyli ręce. W BMW g21 dołożył mi kamerkę cofania. W BMW e 92 byłem u niego na zdjęciu kagańca. Na pewno jeszcze nie raz skorzystam",
      rating: 5,
      car: "Mercedes R230, BMW G21, BMW E92",
      onlyPolish: true,
    },
    {
      id: 4,
      name: "Mateusz",
      text_ru: "Super fachowiec rzeczy niemożliwe dla innych zrobił od ręki w moim sprinterze.",
      text_pl: "Super fachowiec rzeczy niemożliwe dla innych zrobił od ręki w moim sprinterze.",
      rating: 5,
      car: "Sprinter",
      onlyPolish: true,
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
    <section className="py-10 sm:py-14 px-4 bg-gradient-to-b from-zinc-950 via-black to-zinc-950 section-fade-in" id="reviews">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-8 sm:mb-10 fade-in-down">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 sm:mb-3 px-4">
            {t("our_reviews", language)}
          </h2>
          <p className="text-gray-400 text-sm sm:text-base px-4">
            {t("reviews_subtitle", language)}
          </p>
        </div>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-4">
            {reviews.map((review) => (
              <div key={review.id} className="flex-[0_0_100%] min-w-0">
                {/* Main Review Card */}
                <div className="bg-gradient-to-br from-zinc-900 via-zinc-900 to-black border border-zinc-800 rounded-2xl p-6 sm:p-8 mb-6 shadow-2xl fade-in-up">
                  {/* Stars */}
                  <div className="flex justify-center gap-1 mb-4 sm:mb-6">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 sm:w-7 sm:h-7 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-white text-base sm:text-lg md:text-xl text-center mb-4 sm:mb-6 min-h-20 flex items-center justify-center leading-relaxed">
                    "{review.onlyPolish ? review.text_pl : (language === 'ru' ? review.text_ru : review.text_pl)}"
                  </p>

                  {/* Reviewer Info */}
                  <div className="flex flex-col items-center justify-center border-t border-zinc-800 pt-4 sm:pt-6">
                    <p className="text-white font-bold text-base sm:text-lg">{review.name}</p>
                    {review.car && <p className="text-amber-400 text-sm sm:text-base font-medium mt-1">{review.car}</p>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-between items-center px-4 sm:px-0 mb-6">
          <button
            onClick={onPrevButtonClick}
            className="p-3 sm:p-4 rounded-full bg-zinc-900 hover:bg-[oklch(0.65_0.18_130)] text-white transition-all duration-300 transform hover:scale-110 border border-zinc-800 hover:border-[oklch(0.65_0.18_130)] cursor-pointer"
            aria-label={t("prev_review", language)}
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
                aria-label={`Review ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={onNextButtonClick}
            className="p-3 sm:p-4 rounded-full bg-zinc-900 hover:bg-[oklch(0.65_0.18_130)] text-white transition-all duration-300 transform hover:scale-110 border border-zinc-800 hover:border-[oklch(0.65_0.18_130)] cursor-pointer"
            aria-label={t("next_review", language)}
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>

        {/* Review Counter */}
        <div className="text-center text-gray-400 text-sm mb-6 sm:mb-8">
          {selectedIndex + 1} {t("review_counter", language)} {reviews.length}
        </div>

        {/* Google Reviews Button */}
        <div className="flex flex-col items-center gap-4 fade-in-up">
          <a
            href="https://www.google.com/search?sca_esv=f5f7bfe5ec8d5861&hl=ru&authuser=0&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E-nqE6MaTpKbqq7QTEYmkykV5ZBtJoux2ITaEdJ88g3RlLz2m2mnXqN09jEMXuazpCt-sQrRoSeoBz610i4C8rzpEibt&q=Autocoder+%D0%9E%D1%82%D0%B7%D1%8B%D0%B2%D1%8B&sa=X&ved=2ahUKEwiZ-ZebyuiQAxXvOBAIHetiECwQ0bkNegQIIRAD&biw=1528&bih=738&dpr=1.25"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 sm:gap-3 px-8 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-[oklch(0.65_0.18_130)] to-[oklch(0.6_0.18_130)] hover:from-[oklch(0.7_0.18_130)] hover:to-[oklch(0.65_0.18_130)] text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-[oklch(0.65_0.18_130)]/50 text-base sm:text-lg"
          >
            <span>{t("google_reviews", language)}</span>
            <ExternalLink className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
          </a>

          <p className="text-gray-500 text-xs sm:text-sm mt-2 px-4">{t("customers_count", language)}</p>
        </div>
      </div>
    </section>
  )
}
