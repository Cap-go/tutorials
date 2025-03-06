```markdown
---
"title": "Using @capawesome/capacitor-app-update Package Tutorial"
"description": "Step-by-step guide to utilizing the @capawesome/capacitor-app-update package for updating Capacitor apps."
"created_at": "2023-01-15"
"published": true
"slug": "capacitor-plugins.git"
---

# Using @capawesome/capacitor-app-update Package Tutorial

This tutorial will guide you through the process of integrating and using the @capawesome/capacitor-app-update package for updating Capacitor apps.

## Installation

To install the package, use the following command:

```bash
npm install @capawesome/capacitor-app-update
npx cap sync
```

## Setting up Auto-update

1. Create an account in [capgo.app](https://capgo.app) and obtain your [API key](https://capgo.app/app/apikeys).

2. Log in to CLI using: 
```bash
npx @capgo/cli@latest init YOUR_API_KEY
```

3. Follow the steps to set up your app using the CLI.

4. For more detailed auto-update setup, refer to the [Auto update documentation](https://capgo.app/docs/plugin/auto-update).

## Manual Update Setup

For manual control over the update process, follow these steps:

1. Edit your `capacitor.config.json` file and set `autoUpdate` to false:

```json
{
  "appId": "YOUR_APP_ID",
  "appName": "Your App Name",
  "plugins": {
    "CapacitorAppUpdate": {
      "autoUpdate": false
    }
  }
}
```

2. Add the following code to your main application file to notify Capacitor App Update when the app update bundle has loaded successfully:

```javascript
import { CapacitorAppUpdate } from '@capawesome/capacitor-app-update';
CapacitorAppUpdate.notifyAppReady();
```

3. To manually trigger an update, use the following code to download and set the new version:

```javascript
const version = await CapacitorAppUpdate.download({
  url: 'URL_TO_YOUR_UPDATE_ZIP_FILE'
});
await CapacitorAppUpdate.set(version);
```

4. Failed updates will automatically roll back to the last successful version.

## Implemetation Tip

Consider using the app's state changes and the Splash Screen plugin to control updates and enhance the user experience. Here is an example implementation:

```javascript
import { CapacitorAppUpdate, VersionInfo } from '@capawesome/capacitor-app-update';
import { SplashScreen } from '@capacitor/splash-screen';
import { App } from '@capacitor/app';

let version: VersionInfo;
App.addListener('appStateChange', async (state) => {
    if (state.isActive) {
        version = await CapacitorAppUpdate.download({
            url: 'URL_TO_YOUR_UPDATE_ZIP_FILE'
        });
    }

    if (!state.isActive && version) {
        SplashScreen.show();
        
        try {
            await CapacitorAppUpdate.set(version);
            // Hide the splash screen if update is successful
        } catch () {
            SplashScreen.hide(); // Hide the splash screen if update fails
        }
    }
});
```

By following these steps, you can seamlessly integrate and use the @capawesome/capacitor-app-update package to update your Capacitor apps.
```