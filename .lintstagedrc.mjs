import path from 'path';

// Custom ESLint command for Next.js (only lints files in /src/)
// Output Example: 'next lint --fix --file src/pages/index.tsx --file src/components/Header.tsx'
const buildEslintCommand = (filenames) => {
  return `next lint --fix --file ${filenames
    .filter((f) => f.includes('/src/')) // Lint only files in src/
    .map((f) => path.relative(process.cwd(), f)) // Convert to relative paths
    .join(' --file ')}`; // Join filenames into a single command
};

const config = {
  // Type-check the entire project when TS/TSX files are staged
  '*.{ts,tsx}': [() => 'yarn check-types'],
  // Format staged files with Prettier
  '*.{json,md,html,css,scss}': ['prettier --write'],
  // Lint and format staged TypeScript/JavaScript files using ESLint and Prettier
  '*.{ts,tsx,js,jsx}': [buildEslintCommand, 'prettier --write'],
};

export default config;
