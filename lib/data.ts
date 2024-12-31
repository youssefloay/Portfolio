import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import albinome from "@/public/albinome.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import wtw from "@/public/wtw.png";
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
      "  As a Web Developer Intern based in the picturesque city of Montpellier, France, I embarked on a dynamic and immersive two-month journey. During this time, I had the invaluable opportunity to work on real-world projects, collaborate with experienced professionals, and further refine my web development skills. My internship experience not only expanded my technical knowledge but also provided me with practical insights into the fast-paced world of web development.",
      
    icon: React.createElement(CgWorkAlt),
    date: "2020",
  },
  {
    title: "Bachelor's Degree at ESGI",
    location: "Lyon, France",
    description:
      "During my time at École Supérieure de Génie Informatique (ESGI) in Lyon, France, I embarked on an enriching educational journey that spanned three transformative years. This period of academic exploration and personal growth culminated in the successful completion of my Bachelor's degree.",
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
    description: "I worked as a full-stack developer on this Albinome food truck project. It's a platform for customers to easily order delicious pizza.",

    tags: ["React", "Figma", "Tailwind","Firebase",],
    imageUrl: albinome,
  },

  {
    title: "Where to watch",
    description: "Web app for searching movies and trailers, showing where to stream them. Aggregates data from various sources for easy film discovery.",

    tags: ["React", "TypeScript", "Tailwind","Netlify",],
    imageUrl: wtw,
    githubUrl: "https://github.com/youssefloay/WhereToWatch",
    websiteUrl: "https://iridescent-toffee-0dc7bd.netlify.app.",
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
] as const;
