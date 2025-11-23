import { t } from "i18next" // Assuming t is from i18next
import { language } from "some-language-module" // Assuming language is imported from some module

<div className="prose prose-lg max-w-none relative z-10">
              <p className="text-gray-700 leading-relaxed mb-6">
                {t('ecology_intro1', language)}
              </p>

              <h3 className="text-xl font-bold text-gray-900 mb-4 mt-6">{t('ecology_standards_title', language)}</h3>

              <p className="text-gray-700 leading-relaxed mb-6">
                {t('ecology_intro2', language)}
              </p>

              <ul className="space-y-2 mb-6 text-gray-700">
                {/* Added list items for standards section */}
                <li>{t('ecology_standard1', language)}</li>
                <li>{t('ecology_standard2', language)}</li>
                {/* ... rest of code here ... */}
              </ul>

              <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">{t('ecology_components_title', language)}</h3>

              <p className="text-gray-700 leading-relaxed mb-6">
                {t('ecology_components_intro', language)}
              </p>

              <ul className="space-y-2 mb-6 text-gray-700">
                {/* Added list items for components section */}
                <li>{t('ecology_component1', language)}</li>
                <li>{t('ecology_component2', language)}</li>
                {/* ... rest of code here ... */}
              </ul>

              <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">{t('ecology_problems_title', language)}</h3>

              <p className="text-gray-700 leading-relaxed mb-6">
                {t('ecology_failure', language)}
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                {t('ecology_adblue', language)}
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                {t('ecology_dpf', language)}
              </p>

              <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">{t('ecology_solutions_title', language)}</h3>

              <p className="text-[oklch(0.65_0.18_130)] font-semibold text-xl mb-6">
                {t('ecology_experience', language)}
              </p>

              {/* Added list items for solutions section */}
              <ul className="space-y-2 mb-6 text-gray-700">
                <li>{t('ecology_solution1', language)}</li>
                <li>{t('ecology_solution2', language)}</li>
                {/* ... rest of code here ... */}
              </ul>\
