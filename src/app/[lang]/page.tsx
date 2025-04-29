import { MainLayout } from '@/components/layouts/main-layout';
import { HeroHeader } from './_components/hero-header';
import { About } from './_components/about';
import { Experience } from './_components/experience';
import { Projects } from './_components/projects';
import { Contact } from './_components/contact';

export default function Home() {
  return (
    <MainLayout>
      <HeroHeader />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </MainLayout>
  );
}
