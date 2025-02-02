import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact, FaWordpress, FaFigma } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import albinome from "@/public/albinome.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import wtw from "@/public/wtw.png";
import barati from "@/public/barati.jpeg";

// Helper function to select icons based on the description
const getIconForExperience = (description: string) => {
  if (description.includes("React") || description.includes("Next.js") || description.includes("TypeScript")) {
    return React.createElement(FaReact);
  } else if (description.includes("WordPress") || description.includes("Elementor")) {
    return React.createElement(FaWordpress);
  } else if (description.includes("Figma")) {
    return React.createElement(FaFigma);
  } else if (description.includes("database") || description.includes("SQL")) {
    return React.createElement(CgWorkAlt);
  } else {
    return React.createElement(CgWorkAlt);
  }
};

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
    title: "Full Stack Web Developer",
    location: "France",
    description:
      "Developed and maintained e-commerce and showcase websites using ReactJS, TypeScript, Next.js, and WordPress. Integrated payment APIs, optimized website performance, and designed accessible UX/UI interfaces for a seamless user experience.",
    icon: getIconForExperience("Developed and maintained e-commerce and showcase websites using ReactJS, TypeScript, Next.js, and WordPress. Integrated payment APIs, optimized website performance, and designed accessible UX/UI interfaces for a seamless user experience."),
    date: "Feb 2024 - Present",
  },
  {
    title: "Regional Marketing & Operations Manager at Oppizi",
    location: "Montpellier, France",
    description:
      "Analyzed market trends and business needs to develop strategic marketing campaigns. Led large-scale initiatives across multiple cities, improving team management and HR strategies. Optimized conversion rates through data-driven decision-making.",
    icon: getIconForExperience("Analyzed market trends and business needs to develop strategic marketing campaigns. Led large-scale initiatives across multiple cities, improving team management and HR strategies. Optimized conversion rates through data-driven decision-making."),
    date: "Jan 2022 - Jan 2024",
  },
  {
    title: "Web Developer & SEO Manager",
    location: "France",
    description:
      "Configured and customized WordPress sites, integrating custom plugins and MailChimp for newsletter management. Implemented SEO strategies using Google Search Console and Google Analytics to enhance website visibility and performance.",
    icon: getIconForExperience("Configured and customized WordPress sites, integrating custom plugins and MailChimp for newsletter management. Implemented SEO strategies using Google Search Console and Google Analytics to enhance website visibility and performance."),
    date: "Sep 2021 - Jan 2022",
  },
  {
    title: "Web Developer Apprentice at AlphaOmegaGreen",
    location: "Montpellier, France",
    description:
      "Developed and maintained web applications using WordPress. Created custom plugins, optimized MySQL queries, and ensured website responsiveness for a smooth user experience.",
    icon: getIconForExperience("Developed and maintained web applications using WordPress. Created custom plugins, optimized MySQL queries, and ensured website responsiveness for a smooth user experience."),
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
