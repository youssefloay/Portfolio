import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";
import { SpeedInsights } from "@vercel/speed-insights/next"
import ThemeSwitch from "@/components/theme-switch";
import LanguageSwitcher from "@/components/LanguageSwitcher";

export default function Home() {
  return (
    
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
      <SpeedInsights />
      <ThemeSwitch />
      <LanguageSwitcher />
    </main>
    
  );
}
