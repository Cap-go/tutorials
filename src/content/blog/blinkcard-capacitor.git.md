---
"title": "Using @microblink/blinkcard-capacitor Package",
"description": "Markdown tutorial on how to use the @microblink/blinkcard-capacitor package for AI-driven Credit Card scanning software in Capacitor apps.",
"created_at": "2022-01-31",
"published": true,
"slug": "blinkcard-capacitor.git"
---

To use the `@microblink/blinkcard-capacitor` package for AI-driven Credit Card scanning in Capacitor apps, follow these steps:

1. Start by creating an empty project if needed:

```shell
ionic start project_name --capacitor
```

2. Install the blinkcard-capacitor package:

```shell
npm install --save @microblink/blinkcard-capacitor
```

3. Import the blinkcard-capacitor package in your code:

```typescript
import * as BlinkCard from '@microblink/blinkcard-capacitor';
```

4. Initialize the plugin and start using its functionalities in your app. Make sure to refer to the official documentation for detailed usage instructions.

Remember that the package requires a minimum software version, depending on the platform. For iOS, it supports version 12.0 or newer, while for Android, it supports Android 5.0 (API level 21) or newer.

For a quick start and sample app demonstration, you can use the provided scripts in the package or follow the steps mentioned in the official documentation.

This tutorial provides a brief overview of using the BlinkCard package in your Capacitor apps. For advanced features and full access, consider using the native SDKs for iOS and Android.