import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact, FaWordpress, FaFigma } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import albinome from "@/public/albinome.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import wtw from "@/public/wtw.png";
import barati from "@/public/barati.jpeg";
import { en } from "@/translations/en";
import { fr } from "@/translations/fr";

// Helper function to select icons based on the description
export const getIconForExperience = (description: string) => {
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

export const links = {
  en: [
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
  ],
  fr: [
    {
      name: "Accueil",
      hash: "#home",
    },
    {
      name: "À propos",
      hash: "#about",
    },
    {
      name: "Projets",
      hash: "#projects",
    },
    {
      name: "Compétences",
      hash: "#skills",
    },
    {
      name: "Expérience",
      hash: "#experience",
    },
    {
      name: "Contact",
      hash: "#contact",
    },
  ],
};

export const experiencesData = {
  en: [
    {
      title: "Full Stack Web Developer",
      location: "France",
      description: "Developed and maintained e-commerce and showcase websites using ReactJS, TypeScript, Next.js, and WordPress. Integrated payment APIs, optimized website performance, and designed accessible UX/UI interfaces for a seamless user experience.",
      date: "Feb 2024 - Present",
    },
    {
      title: "Regional Marketing & Operations Manager at Oppizi",
      location: "Montpellier, France",
      description: "Analyzed market trends and business needs to develop strategic marketing campaigns. Led large-scale initiatives across multiple cities, improving team management and HR strategies. Optimized conversion rates through data-driven decision-making.",
      date: "Jan 2022 - Jan 2024",
    },
    {
      title: "Web Developer & SEO Manager at AlphaOmegaGreen",
      location: "Montpellier, France",
      description: "Developed and maintained web applications using WordPress. Created custom plugins, optimized MySQL queries, and ensured website responsiveness for a smooth user experience.",
      date: "Sep 2020 - Sep 2021",
    },
  ],
  fr: [
    {
      title: "Développeur Web Full Stack",
      location: "France",
      description: "Développement et maintenance de sites e-commerce et vitrines utilisant ReactJS, TypeScript, Next.js et WordPress. Intégration d'APIs de paiement, optimisation des performances et conception d'interfaces UX/UI accessibles pour une expérience utilisateur fluide.",
      date: "Fév 2024 - Présent",
    },
    {
      title: "Responsable Marketing & Opérations Régional chez Oppizi",
      location: "Montpellier, France",
      description: "Analyse des tendances du marché et des besoins commerciaux pour développer des campagnes marketing stratégiques. Direction d'initiatives à grande échelle dans plusieurs villes, amélioration de la gestion d'équipe et des stratégies RH. Optimisation des taux de conversion grâce à la prise de décision basée sur les données.",
      date: "Jan 2022 - Jan 2024",
    },
    {
      title: "Développeur Web & Responsable SEO chez AlphaOmegaGreen",
      location: "Montpellier, France",
      description: "Développement et maintenance d'applications web avec WordPress. Création de plugins personnalisés, optimisation des requêtes MySQL et garantie de la réactivité du site pour une expérience utilisateur fluide.",
      date: "Sep 2020 - Sep 2021",
    },
  ]
};

export const projectsData = {
  en: [
    {
      title: "Albinome",
      description: "I worked as a full-stack developer on this Albinome food truck project. It's a platform for customers to easily order delicious pizza.",
      tags: ["React", "Figma", "Tailwind", "Firebase"],
      imageUrl: albinome,
      githubUrl: "",
      websiteUrl: "",
    },
    {
      title: "ImageAI SAAS",
      description: "Full-stack AI SaaS platform with Next.js, integrating OpenAI APIs, Stripe subscriptions, and Clerk/NextAuth authentication",
      tags: ["Next.js", "Stripe", "PostgreSQL", "MongoDB", "Clerk", "OpenAI API", "Tailwind CSS"],
      imageUrl: albinome,
      githubUrl: "",
      websiteUrl: "",
    },
    {
      title: "Where to watch",
      description: "Web app for searching movies and trailers, showing where to stream them. Aggregates data from various sources for easy film discovery.",
      tags: ["React", "TypeScript", "Tailwind", "Netlify"],
      imageUrl: wtw,
      githubUrl: "https://github.com/youssefloay/WhereToWatch",
      websiteUrl: "https://wtwatch.netlify.app/",
    },
    {
      title: "Barati Art",
      description: "Explore a unique collection of art and design. Barati Art showcases creativity and inspiration through diverse artistic expressions, offering an immersive visual experience.",
      tags: ["WordPress", "WooCommerce", "Elementor", "Paymob API"],
      imageUrl: barati,
      websiteUrl: "https://www.baratiart.com/",
    },
  ],
  fr: [
    {
      title: "Albinome",
      description: "J'ai travaillé en tant que développeur full-stack sur ce projet de food truck Albinome. C'est une plateforme permettant aux clients de commander facilement de délicieuses pizzas.",
      tags: ["React", "Figma", "Tailwind", "Firebase"],
      imageUrl: albinome,
      githubUrl: "",
      websiteUrl: "",
    },
    {
      title: "ImageAI SAAS",
      description: "Plateforme SaaS d'IA full-stack avec Next.js, intégrant les APIs OpenAI, les abonnements Stripe et l'authentification Clerk/NextAuth",
      tags: ["Next.js", "Stripe", "PostgreSQL", "MongoDB", "Clerk", "OpenAI API", "Tailwind CSS"],
      imageUrl: albinome,
      githubUrl: "",
      websiteUrl: "",
    },
    {
      title: "Where to watch",
      description: "Application web pour rechercher des films et bandes-annonces, montrant où les regarder en streaming. Agrège des données de diverses sources pour une découverte facile des films.",
      tags: ["React", "TypeScript", "Tailwind", "Netlify"],
      imageUrl: wtw,
      githubUrl: "https://github.com/youssefloay/WhereToWatch",
      websiteUrl: "https://wtwatch.netlify.app/",
    },
    {
      title: "Barati Art",
      description: "Explorez une collection unique d'art et de design. Barati Art met en valeur la créativité et l'inspiration à travers diverses expressions artistiques, offrant une expérience visuelle immersive.",
      tags: ["WordPress", "WooCommerce", "Elementor", "Paymob API"],
      imageUrl: barati,
      websiteUrl: "https://www.baratiart.com/",
    },
  ]
};

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

export const headerData = {
  en: {
    title: "Portfolio",
    description: "Youssef is a full-stack developer with years of experience.",
  },
  fr: {
    title: "Portfolio",
    description: "Youssef est un développeur full-stack avec plusieurs années d'expérience.",
  }
};
