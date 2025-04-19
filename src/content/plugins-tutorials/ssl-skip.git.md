---
"title": "Using @jcesarmobile/ssl-skip Package Tutorial",
"description": "Learn how to use the @jcesarmobile/ssl-skip package to skip SSL checks in a Capacitor app during development.",
"created_at": "2022-01-05",
"published": true,
"slug": "ssl-skip.git"
---

# Using @jcesarmobile/ssl-skip Package Tutorial

The `@jcesarmobile/ssl-skip` package is a Capacitor plugin that allows you to skip SSL checks when running a local web server with self-signed certificates to serve a Capacitor app from a HTTPS URL. This tutorial will guide you on how to install and use this package effectively during development.

## Step 1: Installation

To install the `@jcesarmobile/ssl-skip` package, run the following commands in your terminal:

```bash
npm install @jcesarmobile/ssl-skip
npx cap sync
```

## Step 2: Usage

Once the package is installed, you can use it within your Capacitor app to skip SSL checks. Remember that this package should only be used during development and not in production. 

## Warning

Remember that using this package in a published app can lead to rejections on Google Play Store and App Store. Before submitting your app for publishing, make sure to uninstall the `@jcesarmobile/ssl-skip` package and run the sync command again:

```bash
npm uninstall @jcesarmobile/ssl-skip
npx cap sync
```

By following these steps, you can effectively utilize the `@jcesarmobile/ssl-skip` package in your Capacitor app development process.