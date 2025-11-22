"use client"

import Image from 'next/image'
import { useEffect, useState } from 'react'

export function WhatsAppButton() {
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    setIsAnimating(true)
    const timer = setTimeout(() => setIsAnimating(false), 1000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <a
      href="https://wa.me/48793058343?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5%2C%20%D0%BC%D0%B5%D0%BD%D1%8F%20%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D0%B5%D1%81%D1%83%D0%B5%D1%82"
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#25D366] hover:bg-[#20BA5A] text-white px-6 py-4 rounded-full shadow-xl transition-all duration-300 hover:scale-110 group ${
        isAnimating ? 'animate-pulse' : ''
      }`}
    >
      <Image 
        src="/whatsapp.svg" 
        alt="WhatsApp" 
        width={28} 
        height={28}
        className="w-9 h-9 group-hover:rotate-12 transition-transform"
      />
      <span className="font-bold hidden sm:inline text-base">Написать в WhatsApp</span>
    </a>
  )
}
