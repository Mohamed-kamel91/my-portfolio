import { cn } from '@/utils/cn';

type DrawerHeaderProps = React.HTMLAttributes<HTMLDivElement>;

export const DrawerHeader = ({
  className,
  children,
}: DrawerHeaderProps) => {
  return (
    <div
      className={cn('relative shrink-0', 'px-5 pt-6 pb-4', className)}
    >
      {children}
    </div>
  );
};
