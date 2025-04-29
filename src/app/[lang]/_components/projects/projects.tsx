'use client';

import { Container } from '@/components/ui/containers';
import { PageSection } from '@/components/ui/containers/page-section';
import { Stack } from '@/components/ui/stack';
import { ProjectInfo } from './project-info';
import { ProjectMedia } from './project-media';
import { Technology } from '../../_shared/components/technologies';

import { cn } from '@/utils/cn';
import { useI18n } from '@/i18n/client';

export type Project = {
  title: string;
  subtitle: string;
  year: number;
  description: string;
  technologies: Technology[];
  website: string;
  image: {
    src: string;
    alt: string;
  };
};

export const projects: Project[] = [
  {
    title: 'Trendy Toys',
    subtitle: 'E-commerce',
    year: 2022,
    description:
      'A  full-stack e-commerce website selling toys, providing a seamless shopping experience.',
    technologies: [
      'HTML',
      'Sass',
      'JavaScript',
      'TypeScript',
      'React',
      'Node.js',
      'Express',
      'MongoDB',
    ],
    website: 'trendytoys.netlify.app',
    image: {
      src: '/images/projects/trendy-toys.png',
      alt: 'Trendy toys website',
    },
  },
  {
    title: 'Supercool',
    subtitle: 'Business Website',
    year: 2022,
    description:
      'A static website for an HVAC company,showcasing solution, services and projects.',
    website: 'supercool-eg.netlify.app',
    technologies: ['HTML', 'Sass', 'JavaScript'],
    image: {
      src: '/images/projects/supercool.png',
      alt: 'Supercool website',
    },
  },
  {
    title: 'Bait Jadati',
    subtitle: 'E-commerce',
    year: 2022,
    description:
      'WordPress e-commerce website selling premium homemade grocery products, focusing on nutritional value.',
    website: 'baitjadati.com',
    technologies: ['WordPress'],
    image: {
      src: '/images/projects/bait-jadati.jpg',
      alt: 'Bait Jadati website',
    },
  },
];

export const Projects = () => {
  const { t } = useI18n('home');

  const projects = t('featuredProjects.projects', {
    returnObjects: true,
  }) as Project[];

  return (
    <Container className="max-w-6xl">
      <PageSection id="projects" title={t('featuredProjects.title')}>
        {projects.map((project, index) => (
          <div
            key={project.title}
            className={cn(index > 0 && 'mt-30')}
          >
            <Stack direction="col" gap={20} className="lg:flex-row">
              <ProjectInfo
                title={project.title}
                subtitle={project.subtitle}
                year={project.year}
                description={project.description}
                technologies={project.technologies}
                website={project.website}
              />
              <ProjectMedia
                image={project.image}
                website={project.website}
              />
            </Stack>
          </div>
        ))}
      </PageSection>
    </Container>
  );
};
