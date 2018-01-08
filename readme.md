# Semantic Release
> Package containing HT2 Labs' scripts for Semantic Release.

**ONLY WORKS WITH NODE 8 AND ABOVE IN CI**

### Usage
1. Install it with `npm i -D -E @ht2-labs/semantic-release@latest`.
1. Add a `semantic-release` script to your `package.json` file using one of the [scripts](#scripts).
1. Use `npm run semantic-release` [after successful builds in your CI config](#ci-examples).
1. Add `GH_TOKEN` to your CI environment. If you'd like to use @HT2Bot, @ryansmith94 can provide the token, but you'll need to add @HT2Bot to your repo.
1. Add `NPM_TOKEN` to your CI environment (only for "public" projects).
1. Add Docker environment variables to your CI environment (only for "app" projects).
    1. `DOCKER_EMAIL`
    1. `DOCKER_USERNAME`
    1. `DOCKER_PASSWORD`

Note that if you're using this for a "public" (npm published) project and your scoping the project to the ht2-labs npm organisation you must include the following snippet in your `package.json` file.

```json
"publishConfig": {
  "access": "public"
}
```

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
