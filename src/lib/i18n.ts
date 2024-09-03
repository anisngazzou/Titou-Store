// src/utils/i18n.js

import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

import translations from '@/constant/locales/i18n';

import nextI18NextConfig  from '../i18n/next-i18next.config';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: translations.en,
      },
      fr: {
        translation: translations.fr,
      },
    },
    fallbackLng: nextI18NextConfig.i18n.defaultLocale,
    lng: nextI18NextConfig.i18n.defaultLocale,
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
    detection: {
      order: ['cookie', 'localStorage', 'navigator'],
      caches: ['cookie'],
    },
    react: {
      useSuspense: false,
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
