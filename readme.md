# Semantic Release
> Package containing HT2 Labs' scripts for Semantic Release.

### Usage
1. Install it with `npm i -D @ht2-labs/semantic-release`.
1. Add a `semantic-release` script to your `package.json` file using one of the [scripts](#scripts).
1. Use `npm run release` [after successful builds in your CI config](#ci-examples).

### Scripts
Project | Script
--- | ---
Public CircleCI App | `ht2-release-public-circleci-app`
Public CircleCI Lib | `ht2-release-public-circleci-lib`
Public TravisCI App | `ht2-release-public-travisci-app`
Public TravisCI Lib | `ht2-release-public-travisci-lib`
Private CircleCI | `ht2-release-private-circleci`
Private TravisCI | `ht2-release-private-travisci`

### CI Examples
#### CircleCI Example
```yml
- deploy:
    name: Release
    command: npm run semantic-release
```

#### TravisCI Example
```yml
after_success:
  - npm run semantic-release
```
