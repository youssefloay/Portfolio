"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";
import { useLanguage } from "@/context/language-context";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);
  const { translations, language } = useLanguage();

  // Get the projects for the current language
  const currentProjects = projectsData[language];

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>{translations.projects.title}</SectionHeading>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {currentProjects.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
