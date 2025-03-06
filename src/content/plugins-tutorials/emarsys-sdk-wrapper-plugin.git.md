```md
---
"title": "Using @ranit-mondal/emarsys-sdk-wrapper-plugin Package",
"description": "In this tutorial, we will explore how to use the @ranit-mondal/emarsys-sdk-wrapper-plugin package to interact with the Emarsys SDK in a Capacitor project.",
"created_at": "2023-05-28",
"published": true,
"slug": "emarsys-sdk-wrapper-plugin.git"
---

# Using @ranit-mondal/emarsys-sdk-wrapper-plugin Package

## Overview
This tutorial will guide you through the process of using the @ranit-mondal/emarsys-sdk-wrapper-plugin package in your Capacitor project to communicate with the Emarsys SDK.

## Installation
To begin, install the package by running the following command in your project directory:

```bash
npm install @ranit-mondal/emarsys-sdk-wrapper-plugin
npx cap sync
```

## Configuration
After installing the package, make sure to configure it by following these steps:

1. Ensure you have the latest changes by running `npm ci` and pulling the latest changes.
2. Update the version in your `package.json`.
3. Publish the changes by running:

```bash
npm run prepublishOnly && npm run deploy
```

4. Commit and push the code.

## Usage
Once the package is installed and configured, you can begin using its functionalities in your project. Here are some of the main API methods provided:

- `checkPermissions()`: Check the permissions for the Emarsys SDK.
- `requestPermissions()`: Request permissions from the user for the Emarsys SDK.
- `register()`: Register with the Emarsys SDK.
- `setContact(...)`: Set contact information in the Emarsys SDK.
- `getPushToken()`: Get the push token from the Emarsys SDK.
- `clearContact()`: Clear contact information from the Emarsys SDK.
- `pauseInApp()`: Pause in-app messaging in the Emarsys SDK.
- `isInAppPaused()`: Check if in-app messaging is paused.
- `resumeInApp()`: Resume in-app messaging in the Emarsys SDK.
- And more...

## Integrating with Emarsys SDK
This package serves as a wrapper for the Emarsys SDK, allowing seamless integration with Capacitor projects. You can refer to the [Emarsys SDK documentation](https://help.emarsys.com/hc/en-us) for additional details.

Happy coding!
```