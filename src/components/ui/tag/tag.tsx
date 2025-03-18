import { tv, type VariantProps } from 'tailwind-variants';
import { cn } from '@/utils/cn';

const tagVariants = tv({
  base: 'flex max-w-37 items-center justify-center rounded-full text-sm font-medium',
  variants: {
    variant: {
      primary: 'bg-secondary text-secondary-foreground',
      outline:
        'bg-outline text-outline-foreground border-border border',
    },
    size: {
      sm: 'h-6 gap-1.5 px-2',
      md: 'h-8 gap-2 px-3',
      lg: 'h-10 gap-2.5 px-3.5',
      'icon-sm': 'size-8',
      'icon-md': 'size-9',
      'icon-lg': 'size-11',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
});

type TagVariant = VariantProps<typeof tagVariants>;

type TagProps = React.HTMLAttributes<HTMLDivElement> &
  TagVariant & {
    children: React.ReactNode;
  };

export const Tag = ({
  variant,
  size,
  className,
  children,
  ...props
}: TagProps) => {
  return (
    <div
      className={tagVariants({ variant, size, className })}
      {...props}
    >
      {children}
    </div>
  );
};

type TagName = {
  className?: string;
  children: React.ReactNode;
};

export const TagName = ({
  className = '',
  children,
}: TagName) => {
  return (
    <span
      className={cn(
        'overflow-hidden text-ellipsis whitespace-nowrap',
        className,
      )}
    >
      {children}
    </span>
  );
};

type TagIcon = {
  children: React.ReactNode;
};

export const TagIcon = ({ children }: TagIcon) => {
  return <span>{children}</span>;
};
