import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';
import prettier from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';

export default defineConfig([
  // Next.js recommended rules
  ...nextVitals,
  ...nextTs,

  // Disable ESLint rules that conflict with Prettier
  prettierConfig,

  // Prettier formatting as ESLint errors
  {
    plugins: {
      prettier,
    },
    rules: {
      'prettier/prettier': 'error',

      // 🔴 Unused imports / variables = ERROR
      'no-unused-vars': 'off', // turn off base rule
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
        },
      ],

      // React / Next specific safety
      'react/jsx-no-undef': 'error',
      'react/jsx-key': 'error',
    },
  },

  // Ignore generated files
  globalIgnores(['.next/**', 'out/**', 'build/**', 'next-env.d.ts']),
]);
