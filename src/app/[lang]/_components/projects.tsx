'use client';

import { Container } from '@/components/ui/containers';
import { PageSection } from '@/components/ui/containers/page-section';
import { Stack } from '@/components/ui/stack';
import {
  Project,
  ProjectInfo,
  ProjectMedia,
} from '@/components/project';

import { useI18n } from '@/i18n/client';

import { cn } from '@/utils/cn';

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
