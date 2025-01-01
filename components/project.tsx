"use client";

import { useRef } from "react";
import { projectsData } from "@/lib/data";
//import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import Image, { StaticImageData } from "next/image";

type ProjectProps = {
  title: string;
  description: string;
  tags: readonly string[];
  imageUrl: string | StaticImageData; // Accept both string and StaticImageData
  githubUrl?: string;
  websiteUrl?: string;
};

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  githubUrl,
  websiteUrl,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group mb-4 sm:mb-10 last:mb-0"
    >
      <section className="bg-gray-100 max-w-[48rem] border border-black/5 rounded-lg overflow-hidden sm:pr-10 relative sm:h-[24rem] hover:bg-gray-200 transition sm:group-even:pl-10 dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
        <div className="pt-5 pb-8 px-6 sm:pl-12 sm:pr-3 sm:pt-12 sm:max-w-[55%] flex flex-col h-full sm:group-even:ml-[20rem]">
          <h3 className="text-3xl font-semibold">{title}</h3>
          <p className="mt-3 leading-relaxed text-gray-700 dark:text-white/70">
            {description}
          </p>
          <ul className="flex flex-wrap mt-5 gap-3 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                className="bg-black/[0.7] px-4 py-2 text-[0.8rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
          <div className="mt-5 flex gap-3">
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black text-white px-4 py-2 rounded-full flex items-center gap-2"
              >
                GitHub
              </a>
            )}
            {websiteUrl && (
              <a
                href={websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 text-white px-4 py-2 rounded-full flex items-center gap-2"
              >
                Website
              </a>
            )}
          </div>
        </div>

        <Image
          src={imageUrl}
          alt="Project I worked on"
          quality={95}
          className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl transition group-hover:scale-[1.04] group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-2 group-even:right-[initial] group-even:-left-40"
        />
      </section>
    </motion.div>
  );
}