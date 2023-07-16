import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
i18n.use(Backend).use(LanguageDetector).use(initReactI18next).init({
    fallbackLng: localStorage.getItem("lang") || "am",
    lng:localStorage.getItem("lang") || "am",
    debug: true,
    detection:{
        order:["queryString","cookie"],
        cache:["cookie"]
    },
    keySeparator: false,
    interpolation:{
        escapeValue: false
    }
})

export default i18n