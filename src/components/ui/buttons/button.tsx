import React from 'react';
import { tv, type VariantProps } from 'tailwind-variants';

import {
  PolymorphicComponent,
  PolymorphicPropsWithRef,
  PolymorphicRef,
} from '@/types/component-types';
import { cn } from '@/utils/cn';

const buttonVariants = tv({
  base: cn(
    'relative inline-flex items-center justify-center',
    'text-sm font-medium',
    'rounded-btn cursor-pointer outline-2 outline-offset-0 outline-transparent',
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
        'hover:bg-secondary/65 dark:hover:bg-secondary/95 dark:outline-offset-2',
      ),
      outline: cn(
        'bg-outline text-outline-foreground border-border border',
        'hover:bg-muted',
      ),
      unstyled: 'transition-none',
    },
    size: {
      sm: 'h-13 min-w-16 gap-1.5 px-4',
      md: 'h-14 min-w-20 gap-2 px-5',
      lg: 'h-15 min-w-24 gap-2.5 px-6',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
});

type ButtonBaseProps = {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
};

type ButtonVariantsProps = VariantProps<typeof buttonVariants>;

type ButtonCustomProps = ButtonBaseProps & ButtonVariantsProps;

export type ButtonProps<C extends React.ElementType> =
  PolymorphicPropsWithRef<C, ButtonCustomProps>;

export const Button = React.forwardRef(
  <C extends React.ElementType = 'button'>(
    {
      as,
      className,
      variant,
      size,
      leftIcon,
      rightIcon,
      children,
      ...props
    }: ButtonProps<C>,
    ref: PolymorphicRef<C>,
  ) => {
    const Component = as || 'button';

    return (
      <Component
        ref={ref}
        className={buttonVariants({ variant, size, className })}
        {...props}
      >
        {leftIcon && <span>{leftIcon}</span>}
        <span className={cn('whitespace-nowrap')}>{children}</span>
        {rightIcon && <span>{rightIcon}</span>}
      </Component>
    );
  },
) as PolymorphicComponent<'button', ButtonCustomProps>;

Button.displayName = 'Button';
