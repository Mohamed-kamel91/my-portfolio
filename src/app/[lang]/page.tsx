import { MainLayout } from '@/components/layouts/main-layout';
import { HeroHeader } from './_components/hero-header';
import { AboutSection } from './_components/about-section';
import { ExperienceSection } from './_components/experience-section';
import { ProjectsSection } from './_components/projects-section';
import { ContactSection } from './_components/contact-section';

export default function Home() {
  return (
    <MainLayout>
      <HeroHeader />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
    </MainLayout>
  );
}
