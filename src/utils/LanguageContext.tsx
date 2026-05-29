import React, { createContext, useContext, useState, useEffect, type ReactNode } from "react";
import { translations } from "./translations";

export type Language = "ar" | "en";
export type Direction = "rtl" | "ltr";

interface LanguageContextProps {
  language: Language;
  direction: Direction;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: (key: string, replacements?: Record<string, string | number>) => string;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Initialize state with stored language or default to "ar"
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem("language");
    return (saved === "ar" || saved === "en" ? saved : "ar") as Language;
  });

  const direction: Direction = language === "ar" ? "rtl" : "ltr";

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const toggleLanguage = () => {
    setLanguageState((prev) => (prev === "ar" ? "en" : "ar"));
  };

  // Sync state with HTML document attributes and localStorage
  useEffect(() => {
    localStorage.setItem("language", language);
    
    // Set html tag attributes
    document.documentElement.dir = direction;
    document.documentElement.lang = language;
    
    // Set appropriate document font family class on root
    const body = document.body;
    if (language === "ar") {
      body.classList.add("font-arabic");
      body.classList.remove("font-english");
    } else {
      body.classList.add("font-english");
      body.classList.remove("font-arabic");
    }
  }, [language, direction]);

  // Translate function with optional placeholder replacements
  const t = (key: string, replacements?: Record<string, string | number>): string => {
    const langTrans = translations[language] as Record<string, string>;
    const defaultTrans = translations["ar"] as Record<string, string>;
    
    let value = langTrans[key] || defaultTrans[key] || key;
    
    if (replacements) {
      Object.entries(replacements).forEach(([k, v]) => {
        value = value.replace(new RegExp(`{${k}}`, "g"), String(v));
      });
    }
    
    return value;
  };

  return (
    <LanguageContext.Provider value={{ language, direction, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextProps => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
