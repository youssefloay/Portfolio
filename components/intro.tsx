"use client";

import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useLanguage } from "@/context/language-context";
import profilePic from "@/public/idphoto.jpg";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const { translations, language } = useLanguage();
  const [isCVDropdownOpen, setIsCVDropdownOpen] = useState(false);
  const [isPortfolioDropdownOpen, setIsPortfolioDropdownOpen] = useState(false);
  const cvDropdownRef = useRef<HTMLDivElement>(null);
  const portfolioDropdownRef = useRef<HTMLDivElement>(null);

  const cvFiles = [
    {
      name: "CV English",
      path: "/Youssef Loay CV EN.pdf"
    },
    {
      name: "CV Français",
      path: "/Youssef Loay CV FR.pdf"
    }
  ];

  const portfolioFiles = [
    {
      name: "Portfolio English",
      path: "/Youssef Loay Portfolio.docx"
    },
    {
      name: "Portfolio Français",
      path: "/Youssef Loay Portfolio.docx"
    }
  ];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (cvDropdownRef.current && !cvDropdownRef.current.contains(event.target as Node)) {
        setIsCVDropdownOpen(false);
      }
      if (portfolioDropdownRef.current && !portfolioDropdownRef.current.contains(event.target as Node)) {
        setIsPortfolioDropdownOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src={profilePic}
              alt="photo"
              width={192}
              height={192}
              quality={95}
              priority={true}
              className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>

          <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {translations.intro.greeting}. {translations.intro.role} {translations.intro.description}
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          {translations.intro.contactButton}{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <div className="flex items-center gap-4">
          <div className="relative" ref={cvDropdownRef}>
            <button
              className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
              onClick={() => setIsCVDropdownOpen(!isCVDropdownOpen)}
            >
              {translations.intro.downloadCV}{" "}
              <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
            </button>

            {isCVDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-full bg-white dark:bg-gray-900 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 py-1 z-10">
                {cvFiles.map((file, index) => (
                  <a
                    key={index}
                    href={file.path}
                    download
                    className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                    onClick={() => setIsCVDropdownOpen(false)}
                  >
                    {file.name}
                  </a>
                ))}
              </div>
            )}
          </div>

          <div className="relative" ref={portfolioDropdownRef}>
            <button
              className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
              onClick={() => setIsPortfolioDropdownOpen(!isPortfolioDropdownOpen)}
            >
              {translations.intro.portfolio}{" "}
              <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
            </button>

            {isPortfolioDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-full bg-white dark:bg-gray-900 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 py-1 z-10">
                {portfolioFiles.map((file, index) => (
                  <a
                    key={index}
                    href={file.path}
                    download
                    className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                    onClick={() => setIsPortfolioDropdownOpen(false)}
                  >
                    {file.name}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>

        <a
          className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://www.linkedin.com/in/youssefloay/"
          target="_blank"
          aria-label={translations.intro.viewLinkedIn}
        >
          <BsLinkedin />
        </a>

        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://github.com/youssefloay"
          target="_blank"
          aria-label={translations.intro.viewGitHub}
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
