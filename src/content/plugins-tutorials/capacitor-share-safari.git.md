```markdown
---
"title": "Using capacitor-share-safari package"
"description": "A tutorial on how to use the capacitor-share-safari package in your Capacitor project."
"created_at": "2022-03-28"
"published": true
"slug": "capacitor-share-safari.git"
---

# Using capacitor-share-safari package

To use the `capacitor-share-safari` package in your Capacitor project, follow these steps:

1. Install the package using npm:
   ```bash
   npm install capacitor-share-safari
   ```

2. Import the plugin in your project:
   ```javascript
   import 'capacitor-share-safari';
   ```

3. Use the plugin to share content and open it in Safari:
   ```javascript
   import { Plugins } from '@capacitor/core';
   const { ShareSafari } = Plugins;

   // Share content and open in Safari
   ShareSafari.share({
       url: 'https://example.com',
       message: 'Check out this link!'
   });
   ```

4. Make sure you handle any error scenarios:

   ```javascript
   ShareSafari.addListener('shareFailed', (error) => {
       console.error('Share Safari failed', error);
   });
   ```

This tutorial provides a basic overview of how to integrate and use the `capacitor-share-safari` package in your Capacitor project.
```