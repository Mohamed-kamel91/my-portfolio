import { Icon } from '@iconify/react';

import { Tag, TagVariant } from '@/components/ui/tag';

import { technologies } from './constants';
import { cn } from '@/utils/cn';

export type Technology =
  typeof technologies extends readonly (infer U)[]
    ? U extends { name: string }
      ? U['name']
      : never
    : never;

export type TechnologiesProps =
  React.HTMLAttributes<HTMLUListElement> & {
    tags: Technology[];
    tagVariant?: TagVariant['variant'];
    tagSize?: TagVariant['size'];
    iconSize?: number;
  };

export const Technologies = ({
  className,
  tags,
  tagVariant = 'primary',
  tagSize = 'icon-md',
  iconSize = 24,
  ...props
}: TechnologiesProps) => {
  return (
    <ul
      className={cn('flex flex-wrap items-center gap-2', className)}
      aria-label="Technologies used:"
      {...props}
    >
      {tags.map((tag) => {
        const tech = technologies.find((tech) => tech.name === tag)!;

        return (
          <li
            key={tech.name}
            aria-label={tech.name}
            title={tech.name}
          >
            <Tag size={tagSize} variant={tagVariant}>
              <Icon
                icon={tech.icon}
                width={iconSize}
                height={iconSize}
              />
            </Tag>
          </li>
        );
      })}
    </ul>
  );
};
