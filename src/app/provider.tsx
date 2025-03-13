import { PreloadResources } from './preload-resources';

type AppProviderProps = {
  children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  return <PreloadResources>{children}</PreloadResources>;
};
