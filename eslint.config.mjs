import { dirname } from 'path';
import { fileURLToPath } from 'url';

import js from '@eslint/js'
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default [
  js.configs.recommended,
  {
    ignores: [
      'node_modules/',
      '.next/',
      'dist/',
      'coverage/',
      'public/',
      'logs/',
      '*.lock',
      '*.d.ts',
    ],
  },
  ...compat.config({
    extends: ['next/core-web-vitals', 'next/typescript'],
  }),
];


