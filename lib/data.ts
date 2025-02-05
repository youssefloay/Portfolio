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
import AIART from "@/public/AIART .jpg";
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
      description: "Built with React, Firebase for real-time database, and Tailwind CSS for styling. Implemented responsive design using Figma mockups and integrated secure payment processing.",
      tags: ["React", "Figma", "Tailwind", "Firebase"],
      imageUrl: albinome,
      githubUrl: "",
      websiteUrl: "",
    },
    {
      title: "ImageAI SAAS",
      description: "Developed using Next.js with TypeScript, integrated OpenAI APIs for image generation. Implemented Stripe for subscription management and Clerk for authentication. Used MongoDB and PostgreSQL for data storage.",
      tags: ["Next.js", "Stripe", "PostgreSQL", "MongoDB", "Clerk", "OpenAI API", "Tailwind CSS"],
      imageUrl: AIART,
      githubUrl: "",
      websiteUrl: "",
    },
    {
      title: "Where to watch",
      description: "Built with React and TypeScript, utilizing external APIs for movie data. Implemented responsive design with Tailwind CSS and deployed on Netlify with CI/CD pipeline.",
      tags: ["React", "TypeScript", "Tailwind", "Netlify"],
      imageUrl: wtw,
      githubUrl: "https://github.com/youssefloay/WhereToWatch",
      websiteUrl: "https://wtwatch.netlify.app/",
    },
    {
      title: "Barati Art",
      description: "Developed with WordPress and WooCommerce for e-commerce functionality. Customized using Elementor for design and integrated Paymob API for secure payment processing.",
      tags: ["WordPress", "WooCommerce", "Elementor", "Paymob API"],
      imageUrl: barati,
      websiteUrl: "https://www.baratiart.com/",
    },
  ],
  fr: [
    {
      title: "Albinome",
      description: "Développé avec React, Firebase pour la base de données en temps réel, et Tailwind CSS pour le style. Design responsive implémenté avec des maquettes Figma et intégration de paiement sécurisé.",
      tags: ["React", "Figma", "Tailwind", "Firebase"],
      imageUrl: albinome,
      githubUrl: "",
      websiteUrl: "",
    },
    {
      title: "ImageAI SAAS",
      description: "Développé avec Next.js et TypeScript, intégration des APIs OpenAI pour la génération d'images. Implémentation de Stripe pour la gestion des abonnements et Clerk pour l'authentification. Utilisation de MongoDB et PostgreSQL pour le stockage des données.",
      tags: ["Next.js", "Stripe", "PostgreSQL", "MongoDB", "Clerk", "OpenAI API", "Tailwind CSS"],
      imageUrl: AIART,
      githubUrl: "",
      websiteUrl: "",
    },
    {
      title: "Where to watch",
      description: "Construit avec React et TypeScript, utilisant des APIs externes pour les données de films. Design responsive implémenté avec Tailwind CSS et déployé sur Netlify avec pipeline CI/CD.",
      tags: ["React", "TypeScript", "Tailwind", "Netlify"],
      imageUrl: wtw,
      githubUrl: "https://github.com/youssefloay/WhereToWatch",
      websiteUrl: "https://wtwatch.netlify.app/",
    },
    {
      title: "Barati Art",
      description: "Développé avec WordPress et WooCommerce pour les fonctionnalités e-commerce. Personnalisé avec Elementor pour le design et intégration de l'API Paymob pour le traitement sécurisé des paiements.",
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
  "Clerk",
  "MongoDB",
  "Scrum",
  "Waterfall"

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
