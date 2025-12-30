import AboutSection from "@/layouts/components/AboutSection";
import ContactSection from "@/layouts/components/ContactSection";
import EducationSection from "@/layouts/components/EducationSection";
import Header from "@/layouts/components/Header";
import { PortfolioDock } from "@/layouts/components/PortfolioDock";
import ProjectsSection from "@/layouts/components/ProjectsSection";
import SkillsSection from "@/layouts/components/SkillsSection";
import WorkExperienceSection from "@/layouts/components/WorkExperienceSection";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans text-zinc-900 dark:bg-black dark:text-zinc-50">
      <main className="flex min-h-screen w-full max-w-2xl flex-col py-12 px-8 sm:py-18 sm:px-4">
        <Header />
        <AboutSection />
        <WorkExperienceSection />
        <EducationSection />
        <SkillsSection />
        <ProjectsSection/>
        <ContactSection />
        <PortfolioDock />
      </main>
    </div>
  );
}
