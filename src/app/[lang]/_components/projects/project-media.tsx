import Image from 'next/image';

import { cn } from '@/utils/cn';
import { Project } from './projects';

export type ProjectMediaProps = Pick<Project, 'image' | 'website'>;

export const ProjectMedia = ({
  image,
  website,
}: ProjectMediaProps) => {
  return (
    <div
      className={cn(
        'group relative h-100 w-full',
        'bg-secondary dark:bg-primary rounded-4xl',
        'overflow-hidden shadow-xl',
      )}
    >
      <a
        href={`https://${website}`}
        target="_blank"
        rel="noopener noreferrer nofollow"
        dir="ltr"
        className="block h-full"
      >
        <div
          className={cn(
            'absolute start-10 top-10 w-full',
            'overflow-hidden rounded-3xl shadow-xl',
            'transition-transform duration-300 ease-in-out',
            'group-hover:scale-96',
          )}
        >
          <Image
            className="max-w-none"
            src={image.src}
            alt={image.alt}
            width="960"
            height="1000"
          />
        </div>
      </a>
    </div>
  );
};
