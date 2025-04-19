import { tv, VariantProps } from 'tailwind-variants';

const seperatorVariants = tv({
  base: 'border-border rounder-full block',
  variants: {
    orientation: {
      vertical: 'border-s',
      horizontal: 'border-t',
    },
  },
  defaultVariants: {
    orientation: 'horizontal',
  },
});

type SeperatorProps = React.HTMLAttributes<HTMLSpanElement> &
  VariantProps<typeof seperatorVariants>;

export const Seperator = ({
  className,
  orientation,
}: SeperatorProps) => {
  return (
    <span
      className={seperatorVariants({ orientation, className })}
      role="separator"
    />
  );
};
