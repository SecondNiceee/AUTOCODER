"use client"

import { useState, useEffect } from "react"
import { Car, Calendar, Wrench } from 'lucide-react'
import Image from "next/image"
import { useLanguage } from "@/components/language-context"
import { t } from "@/lib/translations"

interface StagingData {
  hp?: { current: string; tuned: string; increase: string }
  nm?: { current: string; tuned: string; increase: string }
  price?: string
}

interface Engine {
  id: string
  name: string
  fuelType: string
  price: string
  image?: string
  staging?: Record<string, StagingData>
}

interface Year {
  yearId: string
  yearName: string
  engines: Engine[]
}

interface Model {
  modelId: string
  modelName: string
  years: Year[]
}

interface Brand {
  brandId: string
  brandName: string
  models: Model[]
}

export function CalculatorSection() {
  const { language } = useLanguage()
  const [data, setData] = useState<Brand[]>([])
  const [selectedBrand, setSelectedBrand] = useState("")
  const [selectedModel, setSelectedModel] = useState("")
  const [selectedYear, setSelectedYear] = useState("")
  const [selectedEngine, setSelectedEngine] = useState("")
  const [currentEngine, setCurrentEngine] = useState<Engine | null>(null)

  useEffect(() => {
    fetch("/calculator/output.json")
      .then((res) => res.json())
      .then(setData)
      .catch((err) => console.error("Error loading calculator data:", err))
  }, [])

  const brands = data
  const models = data.find((b) => b.brandId === selectedBrand)?.models || []
  const years = models.find((m) => m.modelId === selectedModel)?.years || []
  const engines = years.find((y) => y.yearId === selectedYear)?.engines || []

  useEffect(() => {
    if (selectedEngine) {
      const engine = engines.find((e) => e.id === selectedEngine)
      setCurrentEngine(engine || null)
    } else {
      setCurrentEngine(null)
    }
  }, [selectedEngine, engines])

  const handleBrandChange = (value: string) => {
    setSelectedBrand(value)
    setSelectedModel("")
    setSelectedYear("")
    setSelectedEngine("")
    setCurrentEngine(null)
  }

  const handleModelChange = (value: string) => {
    setSelectedModel(value)
    setSelectedYear("")
    setSelectedEngine("")
    setCurrentEngine(null)
  }

  const handleYearChange = (value: string) => {
    setSelectedYear(value)
    setSelectedEngine("")
    setCurrentEngine(null)
  }

  return (
    <section className="relative py-8 sm:py-10 md:py-12 px-4 bg-black overflow-hidden section-fade-in">
      <div className="absolute inset-0 z-0">
        <Image
          src="/close-up-car-wheel-rim-dark-background.jpg"
          alt="Car wheel background"
          fill
          className="object-cover object-center"
          quality={90}
        />
        {/* Heavy dark overlay */}
        <div className="absolute inset-0 bg-black/85"></div>
      </div>

      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="text-center mb-6 sm:mb-8 fade-in-down">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 sm:mb-3 px-4">
            {t("calculator_title", language)}
          </h2>
        </div>

        <div className="bg-zinc-900 rounded-2xl p-4 sm:p-5 md:p-6 shadow-2xl border border-zinc-800 fade-in-up">
          <div className="space-y-4 sm:space-y-5">
            {/* Brand Selection */}
            <div>
              <label className="flex items-center gap-1 text-sm font-semibold text-gray-300 mb-2">
                <Car className="w-4 h-4 text-[oklch(0.65_0.18_130)] flex-shrink-0" />
                <span className="ml-1">{t("select_brand", language)}</span>
              </label>
              <select
                value={selectedBrand}
                onChange={(e) => handleBrandChange(e.target.value)}
                className="w-full p-3 bg-zinc-800 text-white rounded-lg border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-[oklch(0.65_0.18_130)] focus:border-transparent transition-all appearance-none pr-10 cursor-pointer"
                style={{
                  backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%239CA3AF' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e")`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "right 0.75rem center",
                  backgroundSize: "1.5em 1.5em",
                  paddingRight: "2.5rem",
                }}
              >
                <option value="">{t("select_brand", language)}</option>
                {brands.map((brand) => (
                  <option key={brand.brandId} value={brand.brandId}>
                    {brand.brandName}
                  </option>
                ))}
              </select>
            </div>

            {/* Model Selection */}
            {selectedBrand && (
              <div className="animate-in fade-in slide-in-from-top-2 duration-300">
                <label className="flex items-center gap-2 text-sm font-semibold text-gray-300 mb-2">
                  <Car className="w-4 h-4 text-[oklch(0.65_0.18_130)]" />
                  {t("select_model", language)}
                </label>
                <select
                  value={selectedModel}
                  onChange={(e) => handleModelChange(e.target.value)}
                  className="w-full p-3 bg-zinc-800 text-white rounded-lg border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-[oklch(0.65_0.18_130)] focus:border-transparent transition-all cursor-pointer"
                  style={{
                    backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%239CA3AF' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e")`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "right 0.75rem center",
                    backgroundSize: "1.5em 1.5em",
                    paddingRight: "2.5rem",
                  }}
                >
                  <option value="">{t("select_model", language)}</option>
                  {models.map((model) => (
                    <option key={model.modelId} value={model.modelId}>
                      {model.modelName}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {/* Year Selection */}
            {selectedModel && (
              <div className="animate-in fade-in slide-in-from-top-2 duration-300">
                <label className="flex items-center gap-2 text-sm font-semibold text-gray-300 mb-2">
                  <Calendar className="w-4 h-4 text-[oklch(0.65_0.18_130)]" />
                  {t("select_year", language)}
                </label>
                <select
                  value={selectedYear}
                  onChange={(e) => handleYearChange(e.target.value)}
                  className="w-full p-3 bg-zinc-800 text-white rounded-lg border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-[oklch(0.65_0.18_130)] focus:border-transparent transition-all cursor-pointer"
                  style={{
                    backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%239CA3AF' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e")`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "right 0.75rem center",
                    backgroundSize: "1.5em 1.5em",
                    paddingRight: "2.5rem",
                  }}
                >
                  <option value="">{t("select_year", language)}</option>
                  {years.map((year) => (
                    <option key={year.yearId} value={year.yearId}>
                      {year.yearName}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {/* Engine Selection */}
            {selectedYear && (
              <div className="animate-in fade-in slide-in-from-top-2 duration-300">
                <label className="flex items-center gap-2 text-sm font-semibold text-gray-300 mb-2">
                  <Wrench className="w-4 h-4 text-[oklch(0.65_0.18_130)]" />
                  {t("select_engine", language)}
                </label>
                <select
                  value={selectedEngine}
                  onChange={(e) => setSelectedEngine(e.target.value)}
                  className="w-full p-3 bg-zinc-800 text-white rounded-lg border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-[oklch(0.65_0.18_130)] focus:border-transparent transition-all appearance-none pr-10 cursor-pointer"
                  style={{
                    backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%239CA3AF' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e")`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "right 0.75rem center",
                    backgroundSize: "1.5em 1.5em",
                    paddingRight: "2.5rem",
                  }}
                >
                  <option value="">{t("select_engine", language)}</option>
                  {engines.map((engine) => (
                    <option key={engine.id} value={engine.id}>
                      {engine.name}
                    </option>
                  ))}
                </select>
              </div>
            )}
          </div>

          {/* Engine Info */}
          {currentEngine && (
            <div className="mt-4 sm:mt-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="bg-zinc-800 rounded-xl p-4 sm:p-5 border border-zinc-700">
                {currentEngine.staging && currentEngine.staging["Stage 1"] && (
                  <div className="mt-3 sm:mt-4">
                    <h4 className="text-base sm:text-lg font-semibold text-[oklch(0.65_0.18_130)] mb-3">
                      {t("stage_results", language)}
                    </h4>
                    <div className="bg-zinc-900 rounded-lg p-4 border border-zinc-700">
                      <div className="grid grid-cols-2 gap-4 text-center">
                        {/* HP Section */}
                        <div className="space-y-1">
                          <p className="text-xs text-gray-400 uppercase">{t("power", language)}</p>
                          <p className="text-sm text-gray-300">
                            {currentEngine.staging["Stage 1"].hp?.current || "Н/Д"} {t("hp", language)}
                          </p>
                          <p className="text-lg font-bold text-white">
                            {currentEngine.staging["Stage 1"].hp?.tuned || "Н/Д"} {t("hp", language)}
                          </p>
                          <p className="text-sm font-semibold text-[oklch(0.65_0.18_130)]">
                            +{currentEngine.staging["Stage 1"].hp?.increase || "Н/Д"}
                          </p>
                        </div>

                        {/* NM Section */}
                        <div className="space-y-1">
                          <p className="text-xs text-gray-400 uppercase">{t("torque", language)}</p>
                          <p className="text-sm text-gray-300">
                            {currentEngine.staging["Stage 1"].nm?.current || "Н/Д"} {t("nm", language)}
                          </p>
                          <p className="text-lg font-bold text-white">
                            {currentEngine.staging["Stage 1"].nm?.tuned || "Н/Д"} {t("nm", language)}
                          </p>
                          <p className="text-sm font-semibold text-[oklch(0.65_0.18_130)]">
                            +{currentEngine.staging["Stage 1"].nm?.increase || "Н/Д"}
                          </p>
                        </div>
                      </div>
                      <p className="text-xs text-gray-500 mt-4 text-center italic">
                        {t("results_note", language)}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
