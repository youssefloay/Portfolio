'use client';

import { useLanguage } from "@/context/language-context";
import { motion } from "framer-motion";

const LanguageSwitcher = () => {
  const { language, toggleLanguage } = useLanguage();

  const handleClick = () => {
    toggleLanguage();
  };

  return (
    <button
      className="fixed bottom-5 left-5 sm:left-8 w-[3rem] h-[3rem] bg-white bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950"
      onClick={handleClick}
      aria-label={language === "en" ? "Switch to French" : "Switch to English"}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
        key={language}
      >
        {language === "en" ? (
          <span className="text-2xl">🇫🇷</span>
        ) : (
          <span className="text-2xl">🇬🇧</span>
        )}
      </motion.div>
    </button>
  );
};

export default LanguageSwitcher; 