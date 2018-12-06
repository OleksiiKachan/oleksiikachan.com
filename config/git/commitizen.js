module.exports = {
  types: [
    {
      value: 'build',
      name: 'build:     Project build or external dependencies change',
    },
    { value: 'ci', name: 'ci:        CI configuration and scripts work' },
    { value: 'docs', name: 'docs:      Documentation update' },
    { value: 'feat', name: 'feat:      Adding new features' },
    { value: 'fix', name: 'fix:       Error correction' },
    {
      value: 'perf',
      name: 'perf:      Performance improvement',
    },
    {
      value: 'refactor',
      name:
        'refactor:  Code changes without correcting errors or adding new features',
    },
    { value: 'revert', name: 'revert:    Rollback to previous commits' },
    {
      value: 'style',
      name:
        'style:     Code style edits (tabs, indents, full stops, commas, etc.)',
    },
    { value: 'test', name: 'test:      Adding tests' },
  ],

  scopes: [
    { name: 'components' },
    { name: 'containers' },
    { name: 'environment' },
  ],

  messages: {
    type: 'What changes do you make?',
    scope: '\nSelect the SCOPE that you changed (optional):',
    customScope: 'Indicate your SCOPE:',
    subject: 'Write a BRIEF description in the IMPERATIVE:\n',
    body: 'Write a DETAILED description (optional). Use "|" for new line:\n',
    breaking: 'BREAKING CHANGES list (optional):\n',
    footer:
      'Metadata section (tickets, links and other). For example: SECRET MARKT-700, SECRETMRKT-800:\n',
    confirmCommit: 'Are you satisfied with the resulting commit?',
  },

  allowCustomScopes: true,

  allowBreakingChanges: false,

  footerPrefix: 'METADATA:',

  // limit subject length
  subjectLimit: 72,
};
