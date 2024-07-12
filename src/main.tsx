import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import i18next from 'i18next'
import global_en from './locales/en/global.json'
import global_ru from './locales/ru/global.json'
import global_uz from './locales/uz/global.json'
import global_de from './locales/de/global.json'
import { PersistGate } from 'redux-persist/integration/react'
import { I18nextProvider } from 'react-i18next';
import { persistor } from './redux/store.tsx'

const storedLanguage = localStorage.getItem('selectedLanguage');
const defaultLanguage = storedLanguage || 'ru';

i18next.init({
  interpolation: { escapeValue: false },
  lng: defaultLanguage,
  resources: {
    en: { global: global_en },
    ru: { global: global_ru },
    uz: { global: global_uz },
    de: { global: global_de }
  }
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </I18nextProvider>
  </React.StrictMode>,
)
