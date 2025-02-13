module.exports = {
  overrides: [
    {
      files: ['*.ts'],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint'],
      parserOptions: {
        sourceType: 'module',
        errorOnUnknownASTType: true,
        errorOnTypeScriptSyntacticAndSemanticIssues: true,
        warnOnUnsupportedTypeScriptVersion: false,
        ecmaVersion: 6,
      },
      rules: {
        /**
         * @note: you must disable the base rule
         * as it can report incorrect errors in @typescript-eslint
         */
        'no-useless-constructor': 'off',
        '@typescript-eslint/no-useless-constructor': ['error'],
        '@typescript-eslint/no-inferrable-types': [
          'error',
          { ignoreParameters: true },
        ],
        '@typescript-eslint/prefer-readonly': ['error'],
        '@typescript-eslint/explicit-member-accessibility': [
          'error',
          { accessibility: 'no-public' },
        ],
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': [
          'error',
          { argsIgnorePattern: '^_' },
        ],
      },
    },
  ],
};
