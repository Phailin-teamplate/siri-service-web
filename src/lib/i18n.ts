// i18n.ts
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import en from "@/src/locales/en/translation.json";
import lo from "@/src/locales/lo/translation.json";
import ko from "@/src/locales/ko/translation.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    supportedLngs: ['en', 'lo', 'ko'],
    resources: {
      en: { translation: en },
      lo: { translation: lo },
      ko: { translation: ko }
    },
    detection: {
      order: ['path', 'localStorage', 'navigator']
    },
    interpolation: {
      escapeValue: false
    }
  })

export default i18n
