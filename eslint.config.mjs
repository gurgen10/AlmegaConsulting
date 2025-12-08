import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import nextPlugin from '@next/eslint-plugin-next';
import reactPlugin from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import prettierPlugin from 'eslint-plugin-prettier';

export default [
  // Base JS rules
  js.configs.recommended,

  // TypeScript rules
  ...tseslint.configs.recommended,

  // Next.js recommended rules (flat config)
  nextPlugin.configs.recommended,

  // React Flat Config
  reactPlugin.configs.flat.recommended,

  {
    files: ['**/*.{js,jsx,ts,tsx}'],

    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parser: tseslint.parser,
    },

    plugins: {
      react: reactPlugin,
      'react-hooks': reactHooks,
      prettier: prettierPlugin,
    },

    settings: {
      react: {
        version: 'detect',
      },
    },

    rules: {
      // Prettier
      'prettier/prettier': 'error',

      // SVG exceptions
      'react/no-unknown-property': [
        'error',
        {
          ignore: ['stroke-width', 'fill-rule', 'clip-rule', 'stroke-linecap', 'stroke-linejoin'],
        },
      ],

      // Hooks
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',

      // TypeScript
      '@typescript-eslint/no-unused-vars': 'warn',

      // React (Next.js does not require React import)
      'react/react-in-jsx-scope': 'off',
    },
  },

  // Ignored files
  {
    ignores: ['node_modules/**', '.next/**', 'out/**', 'build/**', 'next-env.d.ts'],
  },
];
