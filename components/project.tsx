"use client";

import { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLanguage } from "@/context/language-context";

type ProjectProps = (typeof projectsData.en)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  githubUrl,
  websiteUrl,
}: ProjectProps) {
  const { translations } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      ref={ref}
      className="group relative bg-gray-100 dark:bg-white/10 rounded-lg overflow-hidden"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="pt-4 pb-7 px-5 sm:p-6 sm:pb-8">
        <Image
          src={imageUrl}
          alt={title}
          quality={95}
          className="w-full h-48 object-cover rounded-lg"
        />
        <h3 className="text-2xl font-semibold mt-4">{title}</h3>
        <p className="mt-2 text-gray-700 dark:text-white/70">{description}</p>
        <ul className="flex flex-wrap gap-2 mt-4">
          {tags.map((tag, index) => (
            <li
              className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
              key={index}
            >
              {tag}
            </li>
          ))}
        </ul>
        <div className="flex gap-4 mt-4">
          {websiteUrl && (
            <a
              href={websiteUrl}
              target="_blank"
              className="bg-gray-900 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-gray-800 transition"
            >
              {translations.projects.liveDemo}
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              className="bg-gray-900 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-gray-800 transition"
            >
              {translations.projects.viewCode}
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}