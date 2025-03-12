'use client';

import ReactDOM from 'react-dom';

const fontFiles = [
  'Inter-Regular.woff2',
  'Inter-Medium.woff2',
  'Inter-SemiBold.woff2',
  'Inter-Bold.woff2',
];

const preloadFonts = () => {
  fontFiles.forEach((font) =>
    ReactDOM.preload(`/fonts/${font}`, {
      as: 'font',
      type: 'font/woff2',
      crossOrigin: 'anonymous',
    }),
  );
};

type PreloadResourcesProps = {
  children: React.ReactNode;
};

export const PreloadResources = ({
  children,
}: PreloadResourcesProps) => {
  preloadFonts();

  return <>{children}</>;
};
