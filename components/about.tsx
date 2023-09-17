"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
  After graduating from <span className="font-medium">ESGI</span>,
  where I earned a degree in <span className="font-medium"> Ingénierie du Web </span>
  with a specialization in web development, I embarked on a journey into the
  world of web development. 
  a passionate and creative web developer dedicated to crafting remarkable online experiences.
</p>

<p>
  With a strong foundation in both front-end and back-end development, I thrive on
  turning ideas into functional and visually appealing websites and web applications.

  I'm a firm believer in the power of clean code, elegant design, and seamless user
  experiences. My academic background and practical experience have equipped me with
  expertise in a range of technologies, including HTML, CSS, JavaScript, and modern
  web frameworks like React and Next.js. 

  What sets me apart is my commitment to continuous learning. In this ever-evolving
  tech landscape, I stay up-to-date with the latest trends and best practices to deliver
  cutting-edge solutions to my clients. I take pride in collaborating closely with clients
  to understand their unique needs and translate their vision into reality.

   
</p>

    </motion.section>
  );
}
