---
"title": "Using @bugfender/capacitor Package"
"description": "A tutorial on incorporating the @bugfender/capacitor package into your Capacitor project."
"created_at": "2023-09-21"
"published": true
"slug": "bugfender-capacitor.git"
---

# Using @bugfender/capacitor Package

To integrate @bugfender/capacitor into your Capacitor project, follow these steps:

1. Install the package by running:
   ```bash
   npm install @bugfender/capacitor
   ```

2. First, import the plugin into your project:
   ```typescript
   import '@bugfender/capacitor';
   ```

3. Initialize @bugfender/capacitor in your project (typically in your `App.ts` or `Main.ts` file):
   ```typescript
   import { Plugins } from '@capacitor/core';

   const { Bugfender } = Plugins;

   // Initialize Bugfender with your app key
   Bugfender.init({ appKey: 'YOUR_APP_KEY' });
   ```

4. Start logging messages using @bugfender/capacitor:
   ```typescript
   Bugfender.log('This is a log message');
   ```

By following these steps, you can start using @bugfender/capacitor in your Capacitor project to log messages effectively.
```