---
"title": "Using capacitor-apprate-gfc Package Tutorial"
"description": "A step-by-step guide on how to use the capacitor-apprate-gfc package in your Capacitor project."
"created_at": "2022-01-23"
"published": true
"slug": "capacitor-apprate-gfc.git"
---

## How to Use capacitor-apprate-gfc Package

1. Install the package using npm:
   ```bash
   npm install capacitor-apprate-gfc
   ```

2. Import the package in your code:
   ```javascript
   import { AppRate } from 'capacitor-apprate-gfc';
   ```

3. Initialize the AppRate service:
   ```javascript
   const appRate = new AppRate();
   ```

4. Request for app rating when needed:
   ```javascript
   appRate.requestRate();
   ```

5. Customize the rating dialog if required:
   ```javascript
   appRate.setPreferences({
     usesUntilPrompt: 5,
     daysBeforePrompt: 7,
     promptAgainForEachNewVersion: true
   });
   ```

6. Handle user feedback or rating response accordingly in your app.

This tutorial provides a basic overview of how to integrate and use the capacitor-apprate-gfc package in your Capacitor project.
```
```