"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { en } from "@/translations/en";
import { fr } from "@/translations/fr";

type Language = "en" | "fr";

type LanguageContextType = {
  language: Language;
  translations: typeof en;
  toggleLanguage: () => void;
};

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [language, setLanguage] = useState<Language>("en");

  // Load saved language preference from localStorage
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language;
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  const toggleLanguage = () => {
    setLanguage((prev) => {
      const newLang = prev === "en" ? "fr" : "en";
      // Save language preference
      localStorage.setItem("language", newLang);
      return newLang;
    });
  };

  const translations = language === "en" ? en : fr;

  return (
    <LanguageContext.Provider
      value={{
        language,
        translations,
        toggleLanguage,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (context === null) {
    throw new Error("useLanguage must be used within a LanguageContextProvider");
  }

  return context;
} 