"use client"

import { useState, useEffect } from "react"
import { Car, Calendar, Fuel, Wrench } from "lucide-react"
import Image from "next/image"

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
  const [data, setData] = useState<Brand[]>([])
  const [selectedBrand, setSelectedBrand] = useState("")
  const [selectedModel, setSelectedModel] = useState("")
  const [selectedYear, setSelectedYear] = useState("")
  const [selectedFuel, setSelectedFuel] = useState("")
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
  const fuelTypes = [...new Set(years.find((y) => y.yearId === selectedYear)?.engines?.map((e) => e.fuelType) || [])]
  const engines =
    years.find((y) => y.yearId === selectedYear)?.engines?.filter((e) => e.fuelType === selectedFuel) || []

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
    setSelectedFuel("")
    setSelectedEngine("")
    setCurrentEngine(null)
  }

  const handleModelChange = (value: string) => {
    setSelectedModel(value)
    setSelectedYear("")
    setSelectedFuel("")
    setSelectedEngine("")
    setCurrentEngine(null)
  }

  const handleYearChange = (value: string) => {
    setSelectedYear(value)
    setSelectedFuel("")
    setSelectedEngine("")
    setCurrentEngine(null)
  }

  const handleFuelChange = (value: string) => {
    setSelectedFuel(value)
    setSelectedEngine("")
    setCurrentEngine(null)
  }

  return (
    <section className="relative py-12 sm:py-16 md:py-20 px-4 bg-black overflow-hidden">
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
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4 px-4">
            Конфигуратор чип-тюнинга
          </h2>
          <p className="text-gray-400 text-base sm:text-lg px-4">
            Выберите ваш автомобиль и узнайте возможности тюнинга
          </p>
        </div>

        <div className="bg-zinc-900 rounded-2xl p-4 sm:p-6 md:p-8 shadow-2xl border border-zinc-800">
          <div className="space-y-4 sm:space-y-5">
            {/* Brand Selection */}
            <div>
              <label className="flex items-center gap-1 text-sm font-semibold text-gray-300 mb-2">
                <Car className="w-4 h-4 text-[oklch(0.65_0.18_130)] flex-shrink-0" />
                <span className="ml-1">Выберите марку</span>
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
                <option value="">Выберите марку</option>
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
                  Модель
                </label>
                <select
                  value={selectedModel}
                  onChange={(e) => handleModelChange(e.target.value)}
                  className="w-full p-3 bg-zinc-800 text-white rounded-lg border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-[oklch(0.65_0.18_130)] focus:border-transparent transition-all cursor-pointer"
                >
                  <option value="">Выберите модель</option>
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
                  Год
                </label>
                <select
                  value={selectedYear}
                  onChange={(e) => handleYearChange(e.target.value)}
                  className="w-full p-3 bg-zinc-800 text-white rounded-lg border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-[oklch(0.65_0.18_130)] focus:border-transparent transition-all cursor-pointer"
                >
                  <option value="">Выберите год</option>
                  {years.map((year) => (
                    <option key={year.yearId} value={year.yearId}>
                      {year.yearName}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {/* Fuel Type Selection */}
            {selectedYear && (
              <div className="animate-in fade-in slide-in-from-top-2 duration-300">
                <label className="flex items-center gap-2 text-sm font-semibold text-gray-300 mb-2">
                  <Fuel className="w-4 h-4 text-[oklch(0.65_0.18_130)]" />
                  Тип топлива
                </label>
                <select
                  value={selectedFuel}
                  onChange={(e) => handleFuelChange(e.target.value)}
                  className="w-full p-3 bg-zinc-800 text-white rounded-lg border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-[oklch(0.65_0.18_130)] focus:border-transparent transition-all cursor-pointer"
                >
                  <option value="">Выберите тип топлива</option>
                  {fuelTypes.map((fuel) => (
                    <option key={fuel} value={fuel}>
                      {fuel}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {/* Engine Selection */}
            {selectedFuel && (
              <div className="animate-in fade-in slide-in-from-top-2 duration-300">
                <label className="flex items-center gap-2 text-sm font-semibold text-gray-300 mb-2">
                  <Wrench className="w-4 h-4 text-[oklch(0.65_0.18_130)]" />
                  Двигатель
                </label>
                <select
                  value={selectedEngine}
                  onChange={(e) => setSelectedEngine(e.target.value)}
                  className="w-full p-3 bg-zinc-800 text-white rounded-lg border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-[oklch(0.65_0.18_130)] focus:border-transparent transition-all cursor-pointer"
                >
                  <option value="">Выберите двигатель</option>
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
            <div className="mt-6 sm:mt-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="bg-zinc-800 rounded-xl p-4 sm:p-6 border border-zinc-700">
                {currentEngine.staging && currentEngine.staging["Stage 1"] && (
                  <div className="mt-4 sm:mt-6">
                    <h4 className="text-base sm:text-lg font-semibold text-[oklch(0.65_0.18_130)] mb-3">
                      Stage 1 - Результаты тюнинга
                    </h4>
                    <div className="bg-zinc-900 rounded-lg p-4 border border-zinc-700">
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
                        {/* HP Section */}
                        <div className="space-y-1">
                          <p className="text-xs text-gray-400 uppercase">Мощность</p>
                          <p className="text-sm text-gray-300">
                            {currentEngine.staging["Stage 1"].hp?.current || "Н/Д"} л.с.
                          </p>
                          <p className="text-lg font-bold text-white">
                            {currentEngine.staging["Stage 1"].hp?.tuned || "Н/Д"} л.с.
                          </p>
                          <p className="text-sm font-semibold text-[oklch(0.65_0.18_130)]">
                            +{currentEngine.staging["Stage 1"].hp?.increase || "Н/Д"}
                          </p>
                        </div>

                        {/* NM Section */}
                        <div className="space-y-1">
                          <p className="text-xs text-gray-400 uppercase">Крутящий момент</p>
                          <p className="text-sm text-gray-300">
                            {currentEngine.staging["Stage 1"].nm?.current || "Н/Д"} Нм
                          </p>
                          <p className="text-lg font-bold text-white">
                            {currentEngine.staging["Stage 1"].nm?.tuned || "Н/Д"} Нм
                          </p>
                          <p className="text-sm font-semibold text-[oklch(0.65_0.18_130)]">
                            +{currentEngine.staging["Stage 1"].nm?.increase || "Н/Д"}
                          </p>
                        </div>

                        {/* Price Section */}
                        <div className="col-span-2 sm:col-span-2 flex flex-col items-center justify-center space-y-1">
                          <p className="text-xs text-gray-400 uppercase">Стоимость</p>
                          <p className="text-2xl sm:text-3xl font-bold text-[oklch(0.65_0.18_130)]">
                            {currentEngine.staging["Stage 1"].price || "Н/Д"} €
                          </p>
                        </div>
                      </div>
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
