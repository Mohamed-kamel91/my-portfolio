'use client';

import Link from 'next/link';

import { Container } from '@/components/ui/containers';
import { PageSection } from '@/components/ui/containers/page-section';
import { Stack } from '@/components/ui/stack';
import { Project, ProjectsList } from '@/components/projects-list';
import { Button } from '@/components/ui/buttons';

import { useI18n } from '@/i18n/client';

export const ProjectsSection = () => {
  const { t } = useI18n('home');

  const projects = t('featuredProjects.projects', {
    returnObjects: true,
  }) as Project[];

  return (
    <Container className="max-w-6xl">
      <PageSection id="projects" title={t('featuredProjects.title')}>
        <ProjectsList projects={projects} />

        <Stack justify="center" className="mt-20">
          <Button as={Link} href="/projects" size="lg">
            View more Projects
          </Button>
        </Stack>
      </PageSection>
    </Container>
  );
};
