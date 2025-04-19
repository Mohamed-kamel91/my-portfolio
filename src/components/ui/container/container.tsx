import { cn } from '@/utils/cn';

type ContainerProps = React.HTMLAttributes<HTMLDivElement>;

export const Container = ({
  className,
  ...props
}: ContainerProps) => (
  <div
    className={cn('mx-auto max-w-6xl px-6', className)}
    {...props}
  />
);
