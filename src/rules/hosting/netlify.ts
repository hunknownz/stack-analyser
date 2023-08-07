import { register } from '../../rules.js';

register({
  tech: 'netlify',
  files: ['netlify.toml'],
  dependencies: [
    { type: 'npm', name: 'netlify' },
    { type: 'npm', name: 'netlify-cli' },
    { type: 'npm', name: /^@netlify\//, example: '@netlify/plugin-emails' },
  ],
});
