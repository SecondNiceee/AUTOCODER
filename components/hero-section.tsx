"use client"

import Image from "next/image"
import { useState } from "react"

export function HeroSection() {


  return (
    <section
      className="relative flex items-center justify-center overflow-hidden bg-black"
      style={{ minHeight: "85vh" }}
    >
      {/* Background Car Image - stretch to full height of section */}

      {/* Content - centered text vertically on screen */}
      <div className="relative  flex flex-col gap-8 max-w-[1000px] z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p
          className="text-white tracking-widest uppercase  px-4"
          style={{
            fontFamily: "Montserrat, sans-serif",
            fontSize: "clamp(14px, 4vw, 25px)",
            fontWeight: "300",
            textShadow: "0 2px 8px rgba(0, 0, 0, 0.5)",
            letterSpacing: "0.1em",
          }}
        >
          Электроника автомобилей Mercedes (Maybach, Smart), BMW (Mini, Rolls-Royce), VAG (Audi, VW, Porsche, Bentley)
        </p>

        <div className="flex justify-center px-4">
          <Image
            src="/AUTOCODE.svg"
            alt="AUTOCODER"
            width={430}
            height={100}
            className="w-full md:w-[450px] h-auto"
            priority
          />  
        </div>

        <p
          className="text-white px-4 mt-6"
          style={{
            fontFamily: "Montserrat, sans-serif",
            fontSize: "clamp(15px, 3vw, 22px)",
            fontWeight: "300",
            lineHeight: "1.2",
            textShadow: "0 2px 8px rgba(0, 0, 0, 0.5)",
            letterSpacing: "0.1em",
          }}
        >
          Чиптюнинг • Экология • Дооснащение • Ретрофит • Диагностика • Ремонт автомобильной электроники • Кодирование •
          Программирование • Конверсия • Свап
        </p>
      </div>
    </section>
  )
}
