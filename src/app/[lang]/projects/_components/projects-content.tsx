'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';

import { Container } from '@/components/ui/containers';
import { Project, ProjectsList } from '@/components/projects-list';

import { useI18n } from '@/i18n/client';

import { cn } from '@/utils/cn';

export const ProjectsContent = () => {
  const { t, i18n } = useI18n('projects');

  const projects = t('projects', {
    returnObjects: true,
  }) as Project[];

  return (
    <Container className="max-w-6xl">
      <div className="mb-15 md:mb-20">
        <Link
          href="/"
          className={cn(
            'group/link',
            'inline-flex items-center gap-2',
            'mb-3',
            'font-medium',
          )}
        >
          {i18n.language === 'en' ? (
            <ArrowLeft
              size={20}
              className="shrink-0 transition-transform group-hover/link:-translate-x-1"
            />
          ) : (
            <ArrowRight
              size={20}
              className="shrink-0 transition-transform group-hover/link:translate-x-1"
            />
          )}{' '}
          <span className="shrink-0">{t('backTo')}</span>
        </Link>
        <h1 className="text-5xl font-bold">{t('title')}</h1>
      </div>

      <div>
        <ProjectsList projects={projects} />
      </div>
    </Container>
  );
};
