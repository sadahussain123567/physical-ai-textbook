module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended',
  ],
  plugins: [
    'prettier',
    'mdx',
  ],
  rules: {
    'prettier/prettier': 'error',
  },
  env: {
    node: true,
    browser: true,
  },
  overrides: [
    // Configuration for MDX files
    {
      files: ['**/*.mdx', '**/*.md'],
      extends: ['plugin:mdx/recommended'],
      settings: {
        'mdx/code-block': true,
      },
      rules: {
        'prettier/prettier': 'off', // Disable prettier for MDX files since it's handled by the MDX plugin
      },
    },
    // Configuration for TypeScript files
    {
      files: ['**/*.{ts,tsx}'],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint'],
      extends: ['@docusaurus'],
      rules: {
        '@typescript-eslint/no-unused-vars': 'error',
        'prettier/prettier': 'error',
      },
    },
  ],
};