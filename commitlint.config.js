// Enforces Conventional Commits (https://www.conventionalcommits.org).
// This format is what semantic-release parses to decide the next version:
//   fix:        -> patch (1.0.x)
//   feat:       -> minor (1.x.0)
//   feat!: / BREAKING CHANGE: footer -> major (x.0.0)
// ESM `export default` because package.json sets "type": "module".
export default {
  extends: ['@commitlint/config-conventional'],
};
