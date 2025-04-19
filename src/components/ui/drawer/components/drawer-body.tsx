import { cn } from '@/utils/cn';

type DrawerBodyProps = React.HTMLAttributes<HTMLDivElement>;

export const DrawerBody = ({
  className,
  children,
}: DrawerBodyProps) => {
  return (
    <div
      className={cn(
        'relative h-full grow',
        'px-6 py-2',
        'overflow-auto',
        className,
      )}
    >
      {children}
    </div>
  );
};
