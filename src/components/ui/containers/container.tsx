import { cn } from '@/utils/cn';

type ContainerProps = React.HTMLAttributes<HTMLDivElement>;

export const Container = ({
  className,
  ...props
}: ContainerProps) => (
  <div
    className={cn('mx-auto max-w-3xl px-6 sm:px-12', className)}
    {...props}
  />
);
