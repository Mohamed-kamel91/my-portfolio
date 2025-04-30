import React from 'react';
import { tv, type VariantProps } from 'tailwind-variants';

import {
  PolymorphicComponent,
  PolymorphicPropsWithRef,
  PolymorphicRef,
} from '@/types/component-types';
import { cn } from '@/utils/cn';

const iconButtonVariants = tv({
  base: cn(
    'relative inline-flex shrink-0 items-center justify-center',
    'cursor-pointer rounded-full outline-2 outline-offset-0 outline-transparent',
    'transition-colors duration-300 ease-in-out',
    'focus-visible:outline-foreground disabled:pointer-events-none disabled:opacity-50',
  ),
  variants: {
    variant: {
      primary: cn(
        'bg-primary text-primary-foreground',
        'hover:bg-primary/90 not-dark:outline-offset-2',
      ),
      secondary: cn(
        'bg-secondary text-secondary-foreground',
        'hover:bg-secondary/65 dark:hover:bg-secondary/90 dark:outline-offset-2',
      ),
      outline: cn(
        'bg-outline text-outline-foreground border-border border',
        'hover:bg-muted',
      ),
      ghost: cn(
        'text-foreground bg-transparent',
        'hover:bg-ghost hover:text-ghost-foreground',
      ),
      unstyled: 'transition-none',
    },
    size: {
      sm: 'size-[35px]',
      md: 'size-[45px]',
      lg: 'size-[55px]',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
});

type IconButtonVariantsProps = VariantProps<
  typeof iconButtonVariants
>;

export type IconButtonProps<C extends React.ElementType> =
  PolymorphicPropsWithRef<C, IconButtonVariantsProps>;

export const IconButton = React.forwardRef(
  <C extends React.ElementType = 'button'>(
    {
      as,
      className,
      variant,
      size,
      children,
      ...props
    }: IconButtonProps<C>,
    ref: PolymorphicRef<C>,
  ) => {
    const Component = as || 'button';

    return (
      <Component
        ref={ref}
        className={iconButtonVariants({
          variant,
          size,
          className,
        })}
        {...props}
      >
        <span>{children}</span>
      </Component>
    );
  },
) as PolymorphicComponent<'button', IconButtonVariantsProps>;

IconButton.displayName = 'IconButton';
