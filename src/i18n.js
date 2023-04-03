import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { ko, en } from "./locales";
import { getLocales } from "expo-localization";

const deviceLanguage = getLocales()[0].languageCode;
console.log(deviceLanguage);

i18n.use(initReactI18next).init({
  compatibilityJSON: "v3",
  resources: { ko, en },
  lng: deviceLanguage,
  fallbackLng: ["en"],
  interpolation: { escapeValue: false },
  detection: { order: ["navigator"] },
});

export default i18n;
