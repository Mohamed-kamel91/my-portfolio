import { Suspense } from 'react';

import { ThemeToggler } from '@/features/theme/theme-toggler';
import { LanguageSwitcher } from '@/features/language';

export const NavActions = () => {
  return (
    <div className="flex items-center gap-3">
      <ThemeToggler />
      <Suspense>
        <LanguageSwitcher />
      </Suspense>
    </div>
  );
};
