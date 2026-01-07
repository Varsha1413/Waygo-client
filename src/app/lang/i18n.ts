'use client';

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './en';

i18n.use(initReactI18next).init({
  fallbackLng: 'en',
  debug: false,
  resources: {
    en: { translation: en },
  },
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
