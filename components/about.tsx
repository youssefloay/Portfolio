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
  I graduated from <span className="font-medium">ESGI</span> with a degree in
  <span className="font-medium"> Ingénierie du Web </span> and have been building websites ever since.
</p>

<p>
  I work on both front-end and back-end, using HTML, CSS, JavaScript, React, and Next.js to create 
  fast and user-friendly sites. 

  I keep learning new technologies to improve my skills and always focus on making websites that 
  look good and work well. I also enjoy working with clients to bring their ideas to life.
</p>

    </motion.section>
  );
}
