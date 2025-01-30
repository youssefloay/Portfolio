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
      "Worked on both front-end and back-end development, creating fast and user-friendly websites. Used technologies like React, Next.js, PHP, and WordPress to build efficient and visually appealing web applications.",
    icon: React.createElement(CgWorkAlt),
    date: "2020 - Present",
  },
  {
    title: "Web Developer at Baratiart",
    location: "Montpellier, France",
    description:
      "Developed an e-commerce website using WordPress and Elementor, integrating secure payment systems like Paymob and PayPal. Focused on performance optimization and enhancing user experience.",
    icon: React.createElement(FaReact),
    date: "Apr 2024 - Jan 2025",
  },
  {
    title: "Web Developer at Serenity IPTV",
    location: "Montpellier, France",
    description:
      "Designed and developed a modern landing page for an IPTV subscription service. Created UX/UI prototypes with Figma and built a responsive front-end using React and TypeScript.",
    icon: React.createElement(FaReact),
    date: "Sep 2023 - Jan 2024",
  },
  {
    title: "Web Developer at Albinome",
    location: "Montpellier, France",
    description:
      "Built a restaurant website with an interactive menu and real-time reservation system. Developed the front-end using ReactJS and collaborated with back-end teams for smooth API integration.",
    icon: React.createElement(FaReact),
    date: "Mar 2023 - Sep 2023",
  },
  {
    title: "Web Developer Intern at NewSmartEgypt",
    location: "Montpellier, France",
    description:
      "Gained experience in developing responsive websites using HTML, PHP, and SQL. Optimized database performance and worked closely with clients to ensure a smooth user experience.",
    icon: React.createElement(CgWorkAlt),
    date: "Sep 2021 - Dec 2021",
  },
  {
    title: "Web Developer Apprentice at AlphaOmegaGreen",
    location: "Montpellier, France",
    description:
      "Developed and maintained web applications using WordPress. Created custom plugins and optimized MySQL queries for better performance.",
    icon: React.createElement(CgWorkAlt),
    date: "Sep 2020 - Sep 2021",
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
  "Woocommerce",
] as const;