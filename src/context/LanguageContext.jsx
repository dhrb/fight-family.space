import React, { createContext, useState, useContext } from "react";
import en from "../locales/en.json";
import ua from "../locales/ua.json";

const translations = { ua, en };
const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState("ua");
  const translate = (key) => {
    return (
      key.split(".").reduce((obj, part) => obj?.[part], translations[lang]) ||
      key
    );
  };
  const switchLanguage = () => {
    setLang((prev) => (prev === "ua" ? "en" : "ua"));
  };

  return (
    <LanguageContext.Provider value={{ lang, switchLanguage, translate }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
