import { ThemeProvider } from 'next-themes';
import { PreloadResources } from './preload-resources';

type AppProviderProps = {
  children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <PreloadResources>
      <ThemeProvider enableSystem={false}>
        {children}
      </ThemeProvider>
    </PreloadResources>
  );
};
