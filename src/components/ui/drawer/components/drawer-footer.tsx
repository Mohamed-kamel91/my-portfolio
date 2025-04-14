import { cn } from '@/utils/cn';

type DrawerFooterProps = React.HTMLAttributes<HTMLDivElement>;

export const DrawerFooter = ({
  className,
  children,
}: DrawerFooterProps) => {
  return (
    <div
      className={cn('relative shrink-0', 'px-6 pt-4 pb-6', className)}
    >
      {children}
    </div>
  );
};
