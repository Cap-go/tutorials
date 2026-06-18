---
"title": "Using @capgo/capacitor-auto Package Tutorial",
"description": "A step-by-step guide on how to use the @capgo/capacitor-auto package for automatic updates in Capacitor apps.",
"created_at": "2023-10-14",
"published": true,
"slug": "capacitor-auto.git"
---

## Installation

To start using the `@capgo/capacitor-auto` package, follow these steps:

```bash
npm install @capgo/capacitor-auto
npx cap sync
```

## Auto-update Setup

1. Create your account on [capgo.app](https://capgo.app) and obtain your [API key](https://capgo.app/app/apikeys).

2. Log in to the CLI using the command:
   ```bash
   npx @capgo/cli@latest init YOUR_API_KEY
   ```
   Follow the on-screen instructions to set up your app.

3. For further details on auto update setup, refer to the [Auto Update Documentation](https://capgo.app/docs/plugin/auto-update).

## Manual Setup

If you prefer to manually control the update process, you can download update distribution zip files from a custom URL. Follow the steps below to setup manual updates:

1. Edit your `capacitor.config.json` as shown below, setting `autoUpdate` to false:
   ```json
   {
     "appId": "YOUR_APP_ID",
     "appName": "YourAppName",
     "plugins": {
       "CapacitorAuto": {
         "autoUpdate": false
       }
     }
   }
   ```

2. In your main code, ensure you notify the app that the update bundle has loaded successfully:
   ```javascript
   import { CapacitorAuto } from '@capgo/capacitor-auto';
   CapacitorAuto.notifyAppReady();
   ```

3. Add the following code snippet to implement this manual setup:
   ```javascript
   const version = await CapacitorAuto.download({
     url: 'URL_TO_YOUR_UPDATE_ZIP_FILE',
   })
   await CapacitorAuto.set(version); // sets the new version and reloads the app
   ```

   - Failed updates will automatically roll back to the last successful version.

## Example Implementation

Here is an example of using app-state to control updates, along with using a splash screen to enhance the user experience:
```javascript
import { CapacitorAuto, VersionInfo } from '@capgo/capacitor-auto';
import { SplashScreen } from '@capacitor/splash-screen';
import { App } from '@capacitor/app';

let version: VersionInfo;
App.addListener('appStateChange', async (state) => {
    if (state.isActive) {
        version = await CapacitorAuto.download({
            url: 'URL_TO_YOUR_UPDATE_ZIP_FILE',
        });
    }

    if (!state.isActive && version) {
        SplashScreen.show();
        try {
            await CapacitorAuto.set(version);
            // New version is active, hide splash screen
        } catch {
            SplashScreen.hide(); // Hide splash screen if an error occurs
        }
    }
});
```

By following these steps, you can effectively utilize the `@capgo/capacitor-auto` package for automatic updates in your Capacitor app.