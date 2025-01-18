import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import albinome from "@/public/albinome.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import wtw from "@/public/wtw.png";
import barati from "@/public/barati.jpeg";
export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Web Developer",
    location: "Montpellier, France",
    description:
    "During my internship as a Web Developer in the city of Montpellier, France, I gained hands-on experience working on real-world projects. I collaborated with skilled professionals and honed my web development skills, deepening my technical expertise. This experience was a valuable opportunity to learn and grow while gaining practical insights into the dynamic field of web development.",
    icon: React.createElement(CgWorkAlt),
    date: "2020",
  },
  {
    title: "Bachelor's Degree at ESGI",
    location: "Lyon, France",
    description:
    "During my three years at École Supérieure de Génie Informatique (ESGI) in Lyon, France, I had the opportunity to grow both academically and personally. This enriching journey allowed me to explore my passion for technology and ultimately led to earning my Bachelor’s degree.",
      icon: React.createElement(LuGraduationCap),
    date: "2019 - 2022",
  },
  {
    title: "Freelance Developer",
    location: "Montpellier, France",
    description:
      "As a Freelance Developer, I've been dedicated to providing innovative solutions and exceptional services. My focus lies in crafting responsive and mobile-adaptive web applications. I specialize in optimizing performance and have a keen eye for detail when it comes to design and prototyping, using tools like Figma to bring concepts to life. I thrive in delivering high-quality, tailored solutions to my clients, ensuring their digital presence is both seamless and efficient.",
    icon: React.createElement(FaReact),
    date: "2022 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Albinome",
    description:
      "I worked as a full-stack developer on this Albinome food truck project. It's a platform for customers to easily order delicious pizza.",
    tags: ["React", "Figma", "Tailwind", "Firebase"],
    imageUrl: albinome,
    githubUrl: "", // Optional property
    websiteUrl: "", // Optional property
  },
  {
    title: "Where to watch",
    description:
      "Web app for searching movies and trailers, showing where to stream them. Aggregates data from various sources for easy film discovery.",
    tags: ["React", "TypeScript", "Tailwind", "Netlify"],
    imageUrl: wtw,
    githubUrl: "https://github.com/youssefloay/WhereToWatch",
    websiteUrl: "https://wtwatch.netlify.app/",
  },
  {
    title: "Barati Art",
    description:
      "Explore a unique collection of art and design. Barati Art showcases creativity and inspiration through diverse artistic expressions, offering an immersive visual experience.",
    tags: ["WordPress", "WooCommerce", "Elementor", "Paymob API"],
    imageUrl: barati, // Replace with the actual image variable or URL
    websiteUrl: "https://www.baratiart.com/",
},

] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "PHP",
  "Netlify",
  "Figma",
  "Firebase",
  "Framer Motion",
  "Docker",
  "WordPress",
] as const;