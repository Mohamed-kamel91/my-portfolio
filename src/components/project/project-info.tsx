import { ArrowUpRight } from 'lucide-react';

import { Stack } from '@/components/ui/stack';
import { Technologies } from '../technologies';

import { cn } from '@/utils/cn';
import { Project } from './types';

type ProjectInfoProps = Omit<Project, 'image'>;

export const ProjectInfo = ({
  title,
  subtitle,
  year,
  description,
  technologies,
  website,
}: ProjectInfoProps) => {
  return (
    <Stack
      direction="col"
      align="start"
      className="w-full lg:w-87 lg:shrink-0"
    >
      <h3 className="mb-1 text-xl font-medium">{title}</h3>
      <p className="mb-1">{subtitle}</p>
      <p className="mb-6">{year}</p>
      <p className="text-muted-foreground mb-6">{description}</p>

      <Technologies className="mb-4" tags={technologies} />

      <a
        className={cn(
          'group/link relative shrink-0',
          'mt-auto py-2',
          'underline-custom',
        )}
        href={`https://${website}`}
        target="_blank"
        rel="noopener noreferrer nofollow"
        dir="ltr"
      >
        {`www.${website}`}
        <ArrowUpRight
          size={18}
          className={cn(
            'ml-1 inline',
            'translate-y-px transition-transform duration-200',
            'group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5',
            'group-focus-visible/link:translate-x-px group-focus-visible/link:-translate-y-px',
          )}
        />
      </a>
    </Stack>
  );
};
