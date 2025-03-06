```markdown
---
"title": "Using @capacitor-community/media Package Tutorial",
"description": "A tutorial on how to use the @capacitor-community/media package for enabling extra media capabilities in Capacitor apps",
"created_at": "2023-10-30",
"published": true,
"slug": "media.git"
---

# Using @capacitor-community/media Package Tutorial

This tutorial will guide you on how to use the `@capacitor-community/media` package for enabling extra media capabilities in your Capacitor apps.

## Installation

To install the package, run one of the following commands, depending on your package manager of choice:

```bash
npm install @capacitor-community/media # NPM
yarn add @capacitor-community/media # Yarn
```

Remember to sync after installation by running `ionic cap sync`.

## Migrating to Capacitor 5

There has been a major breaking change in this package for Capacitor 5. Now you need to provide an album identifier instead of an album name when saving media on Android. This identifier can be obtained using the `getAlbums()` method. Also, the `album` property has been renamed to `albumIdentifier`, which needs to be updated in your code (still optional on iOS).

## API

The package provides full feature parity between iOS and Android. Please note that web is not supported by this package.

Happy coding with @capacitor-community/media!
```
```