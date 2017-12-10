# Semantic Release
> Package containing HT2 Labs' scripts for Semantic Release.

### Usage
1. Install it with `npm i -D @ht2-labs/semantic-release`.
1. Add a `release` script to your `package.json` file using one of the [scripts](#scripts).
1. Use `npm run release` [after successful builds in your CI config](#ci-examples).

### Scripts
Project | Script
--- | ---
Public CircleCI App | `node ./node_modules/@ht2-labs/semantic-release/scripts/public-circleci-app.js`
Public CircleCI Lib | `node ./node_modules/@ht2-labs/semantic-release/scripts/public-circleci-lib.js`
Public TravisCI App | `node ./node_modules/@ht2-labs/semantic-release/scripts/public-travisci-app.js`
Public TravisCI Lib | `node ./node_modules/@ht2-labs/semantic-release/scripts/public-travisci-lib.js`
Private CircleCI | `node ./node_modules/@ht2-labs/semantic-release/scripts/private-circleci.js`
Private TravisCI | `node ./node_modules/@ht2-labs/semantic-release/scripts/private-travisci.js`

### CI Examples
#### CircleCI Example
```yml
- deploy:
    name: Release
    command: npm run release
```

#### TravisCI Example
```yml
after_success:
  - npm run release
```
