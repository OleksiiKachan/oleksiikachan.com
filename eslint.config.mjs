import typescriptEslint from 'typescript-eslint';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import prettierPlugin from 'eslint-plugin-prettier';
import eslintCommentsPlugin from 'eslint-plugin-eslint-comments';
import stylisticPlugin from '@stylistic/eslint-plugin';
import nextVitals from 'eslint-config-next/core-web-vitals';
import globals from 'globals';

const eslintConfig = [
  {
    ignores: [
      `node_modules/**`,
      `.next/**`,
      `out/**`,
      `build/**`,
      `next-env.d.ts`,
      `coverage/**`,
      `jest.config.js`, // Ignore config files that use CommonJS
    ],
  },
  ...nextVitals,
  ...typescriptEslint.configs.recommended,
  {
    plugins: {
      react: reactPlugin,
      'react-hooks': reactHooksPlugin,
      prettier: prettierPlugin,
      'eslint-comments': eslintCommentsPlugin,
      '@stylistic': stylisticPlugin,
    },

    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.jest,
        ...globals.node,
        ...globals.react,
      },
      parser: typescriptEslint.parser,
      ecmaVersion: 2022,
      sourceType: `module`,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },

    settings: {
      react: {
        version: `detect`,
        runtime: `automatic`,
      },
    },

    rules: {
      // Prettier rules
      'prettier/prettier': [
        `error`,
        {
          endOfLine: `auto`,
        },
      ],

      // Migrated rules from .eslintrc.json
      '@stylistic/quotes': [
        `error`,
        `backtick`,
        { avoidEscape: true, allowTemplateLiterals: `always` },
      ],
      'comma-dangle': [`error`, `only-multiline`],
      'no-dupe-args': [`error`],
      'no-duplicate-imports': [`error`],
      'no-undef': `off`, // Disabled for TypeScript
      'no-use-before-define': [`error`],

      // TypeScript and React rules
      '@typescript-eslint/no-explicit-any': `off`,
      '@typescript-eslint/ban-ts-comment': `error`,
      '@typescript-eslint/no-require-imports': `off`,
      'react/display-name': `off`,
      'react/react-in-jsx-scope': `off`,
      'react/jsx-uses-react': `off`,
      'import/no-anonymous-default-export': `off`,

      // Unused variables handling
      'no-unused-vars': `off`,
      '@typescript-eslint/no-unused-vars': [
        `error`,
        {
          vars: `all`,
          args: `after-used`,
          ignoreRestSiblings: true,
          varsIgnorePattern: `^_`,
          argsIgnorePattern: `^_`,
          destructuredArrayIgnorePattern: `^_`,
          caughtErrors: `none`,
        },
      ],

      // React hooks
      'react-hooks/exhaustive-deps': `error`,
      'react-hooks/rules-of-hooks': `error`,

      // Next.js specific rules
      '@next/next/google-font-display': `warn`,
      '@next/next/google-font-preconnect': `warn`,
      '@next/next/next-script-for-ga': `warn`,
      '@next/next/no-before-interactive-script-outside-document': `warn`,
      '@next/next/no-css-tags': `warn`,
      '@next/next/no-head-element': `warn`,
      '@next/next/no-html-link-for-pages': `warn`,
      '@next/next/no-img-element': `warn`,
      '@next/next/no-page-custom-font': `warn`,
      '@next/next/no-styled-jsx-in-document': `warn`,
      '@next/next/no-title-in-document-head': `warn`,
      '@next/next/no-typos': `warn`,
      '@next/next/no-unwanted-polyfillio': `warn`,

      // ESLint comments rules for better code quality
      'eslint-comments/disable-enable-pair': `error`,
      'eslint-comments/no-duplicate-disable': `error`,
      'eslint-comments/no-unlimited-disable': `error`,
      'eslint-comments/no-unused-disable': `error`,
      'eslint-comments/no-unused-enable': `error`,

      // Allow specific disable comments but prevent others
      'eslint-comments/no-use': [
        `error`,
        {
          allow: [
            `eslint-enable`,
            `eslint-disable-next-line`,
            `eslint-disable-line`,
          ],
        },
      ],

      // Require justification for disable comments
      'eslint-comments/require-description': `warn`,

      // Prevent disabling specific critical rules
      'eslint-comments/no-restricted-disable': [
        `error`,
        `@typescript-eslint/no-unused-vars`,
        `@typescript-eslint/no-non-null-assertion`,
        `@typescript-eslint/ban-ts-comment`,
        `@typescript-eslint/no-unsafe-any`,
        `@typescript-eslint/no-unsafe-assignment`,
        `@typescript-eslint/no-unsafe-call`,
        `@typescript-eslint/no-unsafe-member-access`,
        `@typescript-eslint/no-unsafe-return`,
        `@typescript-eslint/prefer-as-const`,
        `no-console`,
        `no-debugger`,
      ],
    },
  },
];

export default eslintConfig;
