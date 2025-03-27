import {
  render as rtlRender,
  RenderOptions,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { AppProvider } from '@/app/[lang]/app-provider';
import { Locales } from '@/i18n/types';

type CustomRenderOptions = Omit<RenderOptions, 'wrapper'> & {
  lang?: Locales;
};

// Custom render function with AppProvider
const customRender = (
  ui: React.ReactElement,
  options?: CustomRenderOptions,
) => {
  const { lang = 'en', ...renderOptions } = options || {};

  const Provider = ({
    children,
  }: {
    children: React.ReactNode;
  }) => <AppProvider lang={lang}>{children}</AppProvider>;

  rtlRender(ui, { wrapper: Provider, ...renderOptions });
};

export * from '@testing-library/react';
export { userEvent, customRender as render };
