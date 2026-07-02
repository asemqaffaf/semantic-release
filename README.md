# Semantic Release Example

This repository serves as an example of setting up `semantic-release` for automated versioning and changelog generation using GitHub Actions, along with `commitlint` and `husky` to enforce Conventional Commits.

## Features

- **semantic-release**: Automatically determines the next version based on commit messages, generates release notes, and publishes a GitHub Release.
- **commitlint**: Enforces that all commit messages follow the Conventional Commits specification.
- **husky**: A Git hook tool that runs `commitlint` on the `commit-msg` hook to prevent bad commits locally.
- **GitHub Actions**: A workflow `.github/workflows/release.yml` that runs `semantic-release` automatically when commits are pushed to the `main` branch.

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Prepare husky hooks:
   ```bash
   npm run prepare
   ```

3. Make some changes and commit them using the Conventional Commits format (e.g. `feat: add new feature`, `fix: resolve issue`).

## Release Process

When a pull request is merged into the `main` branch, the GitHub Action workflow will:
1. Checkout the code.
2. Install dependencies.
3. Run `semantic-release` to analyze the commits.
4. Update the version in `package.json` and generate a `CHANGELOG.md`.
5. Create a Git tag and a GitHub Release.

## Testing Locally

You can test what `semantic-release` would do without actually publishing anything by running:
```bash
npm run release:dry
```
