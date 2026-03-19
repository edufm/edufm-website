import i18n from "i18next"
import { initReactI18next } from "react-i18next"

import ptCommon from "./locales/pt/common.json"
import enCommon from "./locales/en/common.json"

export const defaultLanguage = "pt"
export const supportedLanguages = ["pt", "en"] as const
export type SiteLanguage = (typeof supportedLanguages)[number]

i18n.use(initReactI18next).init({
  resources: {
    pt: { common: ptCommon },
    en: { common: enCommon },
  },
  lng: defaultLanguage,
  fallbackLng: "pt",
  defaultNS: "common",
  interpolation: {
    escapeValue: false,
  },
})

export default i18n