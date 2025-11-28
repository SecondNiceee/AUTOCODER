"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

export function ScrollToTop() {
  const pathname = usePathname()

  useEffect(() => {
    // Scroll to top on initial load and route changes
    window.scrollTo(0, 0)
  }, [pathname])

  // Also scroll on first mount
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return null
}
