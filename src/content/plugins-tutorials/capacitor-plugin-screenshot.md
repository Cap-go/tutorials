```markdown
---
"title": "Using @intuiface/capacitor-plugin-screenshot Package"
"description": "Learn how to use the @intuiface/capacitor-plugin-screenshot package in your Capacitor project. This tutorial will guide you through the installation and usage of the screenshot functionality provided by the plugin."
"created_at": "2021-09-16"
"published": true
"slug": "capacitor-plugin-screenshot"
---

# How to Use @intuiface/capacitor-plugin-screenshot Package

In this tutorial, we will go through the steps to install and use the @intuiface/capacitor-plugin-screenshot package in your Capacitor project. This plugin provides functionality to capture screenshots in your mobile applications.

## Installation

To get started, you can install the package using npm or yarn:

```bash
npm install @intuiface/capacitor-plugin-screenshot
npx cap sync
```

or

```bash
yarn add @intuiface/capacitor-plugin-screenshot
npx cap sync
```

## Usage

After installation, you can use the screenshot functionality in your code. Here is an example of how to capture a screenshot:

```typescript
import { Screenshot } from '@intuiface/capacitor-plugin-screenshot';

...

Screenshot.capture().then((result: { base64: string }) => {
    console.log(result.base64); // Base64 string of the captured screenshot
});
```

Make sure to handle any errors that may occur during the screenshot capture process.

That's it! You have successfully learned how to use the @intuiface/capacitor-plugin-screenshot package in your Capacitor project. Feel free to explore additional features and customize the screenshot functionality to suit your application needs.
```