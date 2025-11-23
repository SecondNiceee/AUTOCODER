import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { CalculatorSection } from "@/components/calculator-section"
import { ReviewsSection } from "@/components/reviews-section"
import { MapSection } from "@/components/map-section"
import { Footer } from "@/components/footer"
import Image from "next/image"

export default function PlHome() {
  return (
    <main className="bg-background">
      <div className="relative">
        <Image
          src="/car-background.png"
          alt="Powerful sports car"
          fill
          className="absolute top-0 left-0 inset-0 h-full object-cover object-center z-1"
          priority
          quality={100}
          sizes="100vw"
        />

        <div className="absolute inset-0 bg-black/10 z-2 left-0 top-0" />
        <HeroSection />
      </div>
      <ServicesSection />
      <CalculatorSection />
      <ReviewsSection />
      <MapSection />
      <Footer />
    </main>
  )
}
