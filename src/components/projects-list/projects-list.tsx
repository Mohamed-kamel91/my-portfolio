import { Stack } from '../ui/stack';
import { ProjectInfo } from './project-info';
import { ProjectMedia } from './project-media';

import { cn } from '@/utils/cn';
import { Project } from './types';

type ProjectsListProps = {
  projects: Project[];
};

export const ProjectsList = ({ projects }: ProjectsListProps) => {
  return (
    <>
      {projects.map((project, index) => (
        <div
          key={project.title}
          className={cn(index > 0 && 'mt-20 md:mt-30')}
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
    </>
  );
};
