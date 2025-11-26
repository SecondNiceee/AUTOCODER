"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

interface WhatsAppButtonProps {
  language: "ru" | "pl"
}

export function WhatsAppButton({ language }: WhatsAppButtonProps) {
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    setIsAnimating(true)
    const timer = setTimeout(() => setIsAnimating(false), 1000)
    return () => clearTimeout(timer)
  }, [])

  const message = language === "ru" ? "Здравствуйте, меня интересует" : "Cześć, jestem zainteresowany"

  return (
    <a
      href={`https://wa.me/48793058343?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#25D366] hover:bg-[#20BA5A] text-white px-6 py-4 rounded-full shadow-xl transition-all duration-300 hover:scale-110 group ${
        isAnimating ? "animate-pulse" : ""
      }`}
    >
      <Image
        src="/whatsapp.svg"
        alt="WhatsApp"
        width={28}
        height={28}
        className="w-9 h-9 group-hover:rotate-12 transition-transform"
      />
      <span className="font-bold hidden sm:inline text-base">
        {language === "ru" ? "Написать в WhatsApp" : "Napisz na WhatsApp"}
      </span>
    </a>
  )
}
