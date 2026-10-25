import js from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import svelte from 'eslint-plugin-svelte';
import importPlugin from 'eslint-plugin-import';
import svelteParser from 'svelte-eslint-parser';
import globals from 'globals';

export default [
  /* =========================
   * Global ignores
   * ========================= */
  {
    ignores: [
      'node_modules/**',
      '.svelte-kit/**',
      'build/**',
      '**/*.d.ts',
    ],
  },

  /* =========================
   * JS / TS files
   * ========================= */
  {
    files: ['**/*.{js,ts}'],
    languageOptions: {
      parser: tsParser,
      ecmaVersion: 2020,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {
      '@typescript-eslint': tseslint,
      import: importPlugin,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...tseslint.configs.recommended.rules,

      /* import order */
      'import/order': [
        'error',
        {
          groups: ['builtin', 'external', 'parent', 'sibling', 'index', 'object', 'type'],
          pathGroups: [
            {
              pattern: '{@sveltejs/**,svelte}',
              group: 'builtin',
              position: 'before',
            },
            {
              pattern: '@src/**',
              group: 'parent',
              position: 'before',
            },
          ],
          pathGroupsExcludedImportTypes: ['builtin'],
          alphabetize: { order: 'asc' },
          'newlines-between': 'always',
        },
      ],

      /* TS rules */
      '@typescript-eslint/consistent-type-imports': [
        'error',
        { prefer: 'type-imports' },
      ],

      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
        },
      ],

      'no-console': 'error',
    },
  },

  /* =========================
   * Svelte files
   * ========================= */
  {
    files: ['**/*.svelte'],
    plugins: {
      svelte,
      '@typescript-eslint': tseslint,
    },
    languageOptions: {
      parser: svelteParser,
      parserOptions: {
        parser: tsParser,
      },
      globals: {
        ...globals.browser,
      },
    },
    rules: {
      // eslint-plugin-svelte v3 provides recommended config as a flat config array
      ...Object.assign({}, ...svelte.configs.recommended.map((config) => config.rules ?? {})),

      // TODO: rules newly added to recommended in v3. Disabled until existing code is fixed.
      'svelte/require-each-key': 'off',
      'svelte/no-navigation-without-resolve': 'off',
      'svelte/no-reactive-literals': 'off',
      'svelte/no-immutable-reactive-statements': 'off',
    },
  },

  /* =========================
   * Svelte routes only
   * ========================= */
  {
    files: ['src/**/*.svelte'],
    rules: {
      'svelte/no-at-html-tags': 'off',
    },
  },
];
