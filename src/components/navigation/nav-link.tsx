'use client';

import Link from 'next/link';

import { Button } from '@/components/ui/buttons';

import { useI18n } from '@/i18n/client';

import { cn } from '@/utils/cn';

type NavLinkProps = {
  name: string;
  hash: string;
  isActive: boolean;
};

export const NavLink = ({ name, hash, isActive }: NavLinkProps) => {
  const { t } = useI18n();

  return (
    <Button
      className={cn(
        'group',
        'min-w-20',
        'text-base font-normal',
        'hover:bg-primary/90 hover:text-primary-foreground not-dark:outline-offset-2',
        'transition-colors duration-150',
        isActive && 'bg-primary/90 text-primary-foreground',
      )}
      as={Link}
      href={hash}
      size="sm"
      variant="unstyled"
      aria-current={isActive ? 'location' : undefined}
    >
      {t(`navigation.${name}`)}
    </Button>
  );
};
