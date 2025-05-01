import React from 'react';
import Link from 'next/link';

import { cn } from '@/utils/cn';

export const Logo = () => (
  <Link
    href="/"
    className={cn(
      'inline-block',
      'font-inter text-2xl leading-[1.5] font-bold',
    )}
    dir="ltr"
  >
    M.K.
  </Link>
);
