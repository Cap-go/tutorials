```markdown
---
"title": "Using @capacitor-community/media Package Tutorial",
"description": "A tutorial on how to use the @capacitor-community/media package for enabling extra media capabilities in Capacitor apps.",
"created_at": "2021-09-03",
"published": true,
"slug": "media.git"
---

# Using @capacitor-community/media Package Tutorial

In this tutorial, we will go through the steps of using the `@capacitor-community/media` package to enhance the media capabilities of your Capacitor apps.

## Installation

To begin, you can install the `@capacitor-community/media` package by running one of the following commands based on your package manager:

```bash
npm install @capacitor-community/media # NPM
yarn add @capacitor-community/media # Yarn
```

Remember to sync your Capacitor project after installing the package by running `ionic cap sync`.

## Migrating to Capacitor 5

If you are migrating to Capacitor 5, note that there has been a major breaking change in this plugin. Saving media on Android now requires an album identifier instead of an album name. The `album` property has been renamed to `albumIdentifier` to reflect this change.

## API

The `@capacitor-community/media` package provides a set of APIs that offer full feature parity between iOS and Android. Please note that the web platform is not supported.

That's it! You are now ready to enhance the media capabilities of your Capacitor app using the `@capacitor-community/media` package.
```
```