```markdown
---
"title": "Using @capacitor-community/media Package Tutorial",
"description": "Step-by-step guide on how to use the @capacitor-community/media package for enabling extra media capabilities in Capacitor apps.",
"created_at": "2023-10-08",
"published": true,
"slug": "media.git"
---

# Using @capacitor-community/media Package Tutorial

This tutorial will walk you through the process of integrating and utilizing the @capacitor-community/media package to enhance media capabilities in your Capacitor applications.

## Installation

To get started, you need to install the package by running one of the following commands, based on the package manager you use:

```bash
npm install @capacitor-community/media # NPM
yarn add @capacitor-community/media # Yarn
```

Make sure to sync the changes after installation by running `ionic cap sync`.

## Migrating to Capacitor 5

There has been a major breaking change in this plugin for Capacitor 5. Saving media on Android now requires an album identifier instead of an album name. The album identifier can be obtained using the `getAlbums()` method. Additionally, the `album` property has been renamed to `albumIdentifier`.

## API

The @capacitor-community/media package offers full feature parity between iOS and Android platforms. Please note that web support is not available.

For detailed information on the API methods and functionality, refer to the official documentation or the source code.

```
```