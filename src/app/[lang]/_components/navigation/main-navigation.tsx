'use client';

import { useEffect, useState } from 'react';

import { NavLink } from './nav-link';

import { useHash } from '@/hooks/useHash';
import { tv, VariantProps } from 'tailwind-variants';
import { cn } from '@/utils/cn';

const navVariants = tv({
  base: 'flex',
  variants: {
    variant: {
      vertical: 'flex-col gap-3',
      horizontal: 'items-center gap-1',
    },
  },
  defaultVariants: {
    variant: 'horizontal',
  },
});

const navigation = [
  { name: 'about', hash: '#about' },
  {
    name: 'experience',
    hash: '#experience',
  },
  { name: 'projects', hash: '#projects' },
];

type MainNavigationProps = VariantProps<typeof navVariants> &
  React.HTMLAttributes<HTMLUListElement>;

export const MainNavigation = ({
  className,
  variant,
}: MainNavigationProps) => {
  const [active, setActive] = useState<string>('');

  const hash = useHash();

  useEffect(() => {
    setActive(hash || '#about');
  }, [hash]);

  return (
    <nav aria-label="Main navigation">
      <ul className={navVariants({ variant, className })}>
        {navigation.map((link) => {
          return (
            <li key={link.name} className={cn()}>
              <NavLink
                name={link.name}
                hash={link.hash}
                isActive={active === link.hash}
              />
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
