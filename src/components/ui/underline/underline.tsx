import React from 'react';

import { tv, VariantProps } from 'tailwind-variants';

export const underlineVariant = tv({
  base: [
    'group/underline relative block',

    'before:absolute before:start-0',
    'before:w-full',
    'before:bg-muted before:content-[""]',

    'after:absolute after:start-0',
    'after:bg-underline after:w-0',
    'after:transition-all after:duration-300 after:content-[""]',
  ],
  variants: {
    thickness: {
      thin: ['before:h-px after:h-px'],
      medium: ['before:h-0.5 after:h-0.5'],
      thick: ['before:h-1 after:h-1'],
      bold: ['before:h-1.5 after:h-1.5'],
    },
    offset: {
      xs: 'before:-bottom-px after:-bottom-px',
      sm: 'before:-bottom-1 after:-bottom-1',
      md: 'before:-bottom-2 after:-bottom-2',
      lg: 'before:-bottom-3 after:-bottom-3',
    },
    state: {
      static: '',
      hover: 'hover:after:w-full',
      focus: 'hover:after:w-full',
      active: 'hover:after:w-full',
    },
  },
  defaultVariants: {
    thickness: 'medium',
    offset: 'md',
    state: 'hover',
  },
});

type UnderlineProps = VariantProps<typeof underlineVariant> & {
  className?: string;
  children: React.ReactNode;
};

export const Underline = ({
  className,
  state,
  offset,
  children,
  ...props
}: UnderlineProps) => {
  return (
    <div
      className={underlineVariant({ state, offset, className })}
      {...props}
    >
      {children}
    </div>
  );
};
