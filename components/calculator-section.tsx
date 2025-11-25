"use client"

import { useState, useEffect } from "react"
import { Car, Calendar, Wrench, Fuel } from "lucide-react"
import Image from "next/image"
import { useLanguage } from "@/components/language-context"
import { t } from "@/lib/translations"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

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

const CALC_TRANSLATIONS = {
  pl: {
    stage: "Stage",
    power: "Moc",
    torque: "Moment",
    current: "Seria",
    tuned: "Mod",
    diff: "Przyrost",
    stage_results: "Wyniki modyfikacji",
  },
  ru: {
    stage: "Stage",
    power: "Мощность",
    torque: "Крутящий момент",
    current: "Сток",
    tuned: "Тюнинг",
    diff: "Прирост",
    stage_results: "Результаты чип-тюнинга",
  },
}

export function CalculatorSection() {
  const { language } = useLanguage()
  const [data, setData] = useState<Brand[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const [selectedBrand, setSelectedBrand] = useState("")
  const [selectedModel, setSelectedModel] = useState("")
  const [selectedYear, setSelectedYear] = useState("")
  const [selectedFuelType, setSelectedFuelType] = useState("")
  const [selectedEngine, setSelectedEngine] = useState("")
  const [currentEngine, setCurrentEngine] = useState<Engine | null>(null)

  const tr = CALC_TRANSLATIONS[language as keyof typeof CALC_TRANSLATIONS] || CALC_TRANSLATIONS.pl

  // Загрузка данных
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/calculator/output.json")
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`)
        const jsonData: Brand[] = await res.json()
        setData(jsonData)
      } catch (err) {
        console.error("Failed to load output.json:", err)
        setError("Не удалось загрузить данные калькулятора.")
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  // Получение зависимых данных
  const models = data.find((b) => String(b.brandId) === selectedBrand)?.models || []

  const years = models.find((m) => String(m.modelId) === selectedModel)?.years || []
  const allEnginesInYear = years.find((y) => String(y.yearId) === selectedYear)?.engines || []
  const fuelTypes = Array.from(new Set(allEnginesInYear.map((e) => e.fuelType))).filter(Boolean)
  const engines = allEnginesInYear.filter((e) => e.fuelType === selectedFuelType)

  // Обновление текущего двигателя
  useEffect(() => {
    if (selectedEngine) {
      const engine = engines.find((e) => String(e.id) === selectedEngine)
      setCurrentEngine(engine || null)
    } else {
      setCurrentEngine(null)
    }
  }, [selectedEngine, engines])

  const handleBrandChange = (value: string) => {
    setSelectedBrand(value)
    setSelectedModel("")
    setSelectedYear("")
    setSelectedFuelType("")
    setSelectedEngine("")
    setCurrentEngine(null)
  }

  const handleModelChange = (value: string) => {
    setSelectedModel(value)
    setSelectedYear("")
    setSelectedFuelType("")
    setSelectedEngine("")
    setCurrentEngine(null)
  }

  const handleYearChange = (value: string) => {
    setSelectedYear(value)
    setSelectedFuelType("")
    setSelectedEngine("")
    setCurrentEngine(null)
  }

  const handleFuelChange = (value: string) => {
    setSelectedFuelType(value)
    setSelectedEngine("")
    setCurrentEngine(null)
  }

  if (loading) {
    return (
      <section className="relative py-12 px-4 bg-black">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="text-white">Загрузка данных...</p>
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section className="relative py-12 px-4 bg-black">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="text-red-400">{error}</p>
        </div>
      </section>
    )
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
            {/* Brand */}
            <div>
              <label className="flex items-center gap-1 text-sm font-semibold text-gray-300 mb-2">
                <Car className="w-4 h-4 text-[oklch(0.65_0.18_130)] flex-shrink-0" />
                <span className="ml-1">{t("select_brand", language)}</span>
              </label>
              <Select value={selectedBrand} onValueChange={handleBrandChange}>
                <SelectTrigger className="w-full h-12 bg-zinc-800 text-white border-zinc-700 focus:ring-2 focus:ring-[oklch(0.65_0.18_130)] focus:ring-offset-0 focus:ring-offset-transparent">
                  <SelectValue placeholder={t("select_brand", language)} />
                </SelectTrigger>
                <SelectContent className="bg-zinc-800 border-zinc-700 text-white">
                  {data.map((brand) => (
                    <SelectItem
                      key={brand.brandId}
                      value={String(brand.brandId)}
                      className="focus:bg-zinc-700 focus:text-white cursor-pointer"
                    >
                      {brand.brandName}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Model */}
            {selectedBrand && (
              <div className="animate-in fade-in slide-in-from-top-2 duration-300">
                <label className="flex items-center gap-2 text-sm font-semibold text-gray-300 mb-2">
                  <Car className="w-4 h-4 text-[oklch(0.65_0.18_130)]" />
                  {t("select_model", language)}
                </label>
                <Select value={selectedModel} onValueChange={handleModelChange}>
                  <SelectTrigger className="w-full h-12 bg-zinc-800 text-white border-zinc-700 focus:ring-2 focus:ring-[oklch(0.65_0.18_130)] focus:ring-offset-0 focus:ring-offset-transparent">
                    <SelectValue placeholder={t("select_model", language)} />
                  </SelectTrigger>
                  <SelectContent className="bg-zinc-800 border-zinc-700 text-white">
                    {models.length > 0 ? (
                      models.map((model) => (
                        <SelectItem
                          key={model.modelId}
                          value={String(model.modelId)}
                          className="focus:bg-zinc-700 focus:text-white cursor-pointer"
                        >
                          {model.modelName}
                        </SelectItem>
                      ))
                    ) : (
                      <div className="p-2 text-sm text-gray-400">{t("no_models", language) || "Нет моделей"}</div>
                    )}
                  </SelectContent>
                </Select>
              </div>
            )}

            {/* Year */}
            {selectedModel && (
              <div className="animate-in fade-in slide-in-from-top-2 duration-300">
                <label className="flex items-center gap-2 text-sm font-semibold text-gray-300 mb-2">
                  <Calendar className="w-4 h-4 text-[oklch(0.65_0.18_130)]" />
                  {t("select_year", language)}
                </label>
                <Select value={selectedYear} onValueChange={handleYearChange}>
                  <SelectTrigger className="w-full h-12 bg-zinc-800 text-white border-zinc-700 focus:ring-2 focus:ring-[oklch(0.65_0.18_130)] focus:ring-offset-0 focus:ring-offset-transparent">
                    <SelectValue placeholder={t("select_year", language)} />
                  </SelectTrigger>
                  <SelectContent className="bg-zinc-800 border-zinc-700 text-white">
                    {years.length > 0 ? (
                      years.map((year) => (
                        <SelectItem
                          key={year.yearId}
                          value={String(year.yearId)}
                          className="focus:bg-zinc-700 focus:text-white cursor-pointer"
                        >
                          {year.yearName}
                        </SelectItem>
                      ))
                    ) : (
                      <div className="p-2 text-sm text-gray-400">{t("no_years", language) || "Нет годов"}</div>
                    )}
                  </SelectContent>
                </Select>
              </div>
            )}

            {/* Fuel Type */}
            {selectedYear && (
              <div className="animate-in fade-in slide-in-from-top-2 duration-300">
                <label className="flex items-center gap-2 text-sm font-semibold text-gray-300 mb-2">
                  <Fuel className="w-4 h-4 text-[oklch(0.65_0.18_130)]" />
                  {t("select_fuel", language) || "Select Fuel"}
                </label>
                <Select value={selectedFuelType} onValueChange={handleFuelChange}>
                  <SelectTrigger className="w-full h-12 bg-zinc-800 text-white border-zinc-700 focus:ring-2 focus:ring-[oklch(0.65_0.18_130)] focus:ring-offset-0 focus:ring-offset-transparent">
                    <SelectValue placeholder={t("select_fuel", language) || "Select Fuel Type"} />
                  </SelectTrigger>
                  <SelectContent className="bg-zinc-800 border-zinc-700 text-white">
                    {fuelTypes.length > 0 ? (
                      fuelTypes.map((fuel) => (
                        <SelectItem
                          key={fuel}
                          value={String(fuel)}
                          className="focus:bg-zinc-700 focus:text-white cursor-pointer"
                        >
                          {fuel}
                        </SelectItem>
                      ))
                    ) : (
                      <div className="p-2 text-sm text-gray-400">
                        {t("no_fuel_types", language) || "Нет типов топлива"}
                      </div>
                    )}
                  </SelectContent>
                </Select>
              </div>
            )}

            {/* Engine */}
            {selectedFuelType && (
              <div className="animate-in fade-in slide-in-from-top-2 duration-300">
                <label className="flex items-center gap-2 text-sm font-semibold text-gray-300 mb-2">
                  <Wrench className="w-4 h-4 text-[oklch(0.65_0.18_130)]" />
                  {t("select_engine", language)}
                </label>
                <Select value={selectedEngine} onValueChange={setSelectedEngine}>
                  <SelectTrigger className="w-full h-12 bg-zinc-800 text-white border-zinc-700 focus:ring-2 focus:ring-[oklch(0.65_0.18_130)] focus:ring-offset-0 focus:ring-offset-transparent">
                    <SelectValue placeholder={t("select_engine", language)} />
                  </SelectTrigger>
                  <SelectContent className="bg-zinc-800 border-zinc-700 text-white">
                    {engines.length > 0 ? (
                      engines.map((engine) => (
                        <SelectItem
                          key={engine.id}
                          value={String(engine.id)}
                          className="focus:bg-zinc-700 focus:text-white cursor-pointer"
                        >
                          {engine.name}
                        </SelectItem>
                      ))
                    ) : (
                      <div className="p-2 text-sm text-gray-400">{t("no_engines", language) || "Нет двигателей"}</div>
                    )}
                  </SelectContent>
                </Select>
              </div>
            )}
          </div>

          {/* Engine Info */}
          {currentEngine && (
            <div className="mt-4 sm:mt-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="bg-zinc-800 rounded-xl p-4 sm:p-5 border border-zinc-700">
                {currentEngine.staging && Object.keys(currentEngine.staging).length > 0 ? (
                  <div className="mt-3 sm:mt-4 overflow-x-auto">
                    <h4 className="text-xl sm:text-2xl font-semibold text-[oklch(0.65_0.18_130)] mb-4 text-center">
                      {tr.stage_results}
                    </h4>
                    <table className="w-full text-base sm:text-lg text-left border-collapse min-w-[600px]">
                      <thead>
                        <tr className="bg-zinc-900 text-gray-300">
                          <th className="p-4 border border-zinc-700 font-semibold">{tr.stage}</th>
                          <th className="p-4 border border-zinc-700 font-semibold">
                            {tr.power} <span className="text-sm font-normal text-gray-500">({tr.current})</span>
                          </th>
                          <th className="p-4 border border-zinc-700 font-semibold">
                            {tr.power} <span className="text-sm font-normal text-gray-500">({tr.tuned})</span>
                          </th>
                          <th className="p-4 border border-zinc-700 font-semibold text-[oklch(0.65_0.18_130)]">
                            {tr.diff}
                          </th>
                          <th className="p-4 border border-zinc-700 font-semibold">
                            {tr.torque} <span className="text-sm font-normal text-gray-500">({tr.current})</span>
                          </th>
                          <th className="p-4 border border-zinc-700 font-semibold">
                            {tr.torque} <span className="text-sm font-normal text-gray-500">({tr.tuned})</span>
                          </th>
                          <th className="p-4 border border-zinc-700 font-semibold text-[oklch(0.65_0.18_130)]">
                            {tr.diff}
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {Object.entries(currentEngine.staging)
                          .filter(([stageName]) => stageName === "1")
                          .map(([stageName, stageData]) => (
                            <tr key={stageName} className="hover:bg-zinc-700/50 transition-colors text-white">
                              <td className="p-4 border border-zinc-700 font-bold text-xl">
                                {stageName.toUpperCase()}
                              </td>
                              <td className="p-4 border border-zinc-700 text-xl">{stageData.hp?.current || "-"}</td>
                              <td className="p-4 border border-zinc-700 font-bold text-xl">
                                {stageData.hp?.tuned || "-"}
                              </td>
                              <td className="p-4 border border-zinc-700 text-[oklch(0.65_0.18_130)] font-bold text-xl">
                                +{stageData.hp?.increase || "-"}
                              </td>
                              <td className="p-4 border border-zinc-700 text-xl">{stageData.nm?.current || "-"}</td>
                              <td className="p-4 border border-zinc-700 font-bold text-xl">
                                {stageData.nm?.tuned || "-"}
                              </td>
                              <td className="p-4 border border-zinc-700 text-[oklch(0.65_0.18_130)] font-bold text-xl">
                                +{stageData.nm?.increase || "-"}
                              </td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
                  </div>
                ) : (
                  <p className="text-gray-400 italic text-center">
                    {t("no_stages_available", language) || "No tuning stages available"}
                  </p>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
