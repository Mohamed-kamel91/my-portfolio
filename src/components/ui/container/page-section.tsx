import React from 'react';
import { tv, type VariantProps } from 'tailwind-variants';

import { cn } from '@/utils/cn';

const sectionVariants = tv({
  slots: {
    base: 'mb-10 py-10 md:mb-20',
    title: cn(
      'flex items-center gap-2',
      'mb-12 md:mb-15',
      'font-bold',
    ),
    content: '',
  },
  variants: {
    titleAs: {
      h1: { title: 'text-5xl' },
      h2: { title: 'text-4xl' },
      h3: { title: 'text-3xl' },
      h4: { title: 'text-2xl' },
      h5: { title: 'text-lg' },
      h6: { title: 'text-base' },
    },
    alignTitle: {
      left: { title: 'text-start' },
      center: { title: 'text-center' },
      right: { title: 'text-end' },
    },
  },
  defaultVariants: {
    titleAs: 'h2',
    alignTitle: 'left',
  },
});

type PageSectionProps = React.HTMLAttributes<HTMLElement> &
  VariantProps<typeof sectionVariants> & {
    title: string | React.ReactNode;
    className?: string;
    titleClassName?: string;
    contentClassName?: string;
  };

export const PageSection = ({
  title,
  titleAs,
  children,
  className,
  titleClassName,
  contentClassName,
  alignTitle,
  ...props
}: PageSectionProps) => {
  const {
    base,
    title: titleSlot,
    content,
  } = sectionVariants({
    titleAs,
    alignTitle,
  });

  const HeadingTag = titleAs || 'h2';

  return (
    <section className={base({ className })} {...props}>
      <HeadingTag className={titleSlot({ class: titleClassName })}>
        {title}
      </HeadingTag>

      <div className={content({ class: contentClassName })}>
        {children}
      </div>
    </section>
  );
};
