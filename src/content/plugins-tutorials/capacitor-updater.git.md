---
"title": "Using @capgo/capacitor-updater Package",
"description": "A tutorial on how to use the @capgo/capacitor-updater package for updating your Capacitor applications with ease.",
"created_at": "2022-01-20",
"published": true,
"slug": "capacitor-updater.git"
---

# Using @capgo/capacitor-updater Package

This tutorial will guide you through the process of using the `@capgo/capacitor-updater` package to update your Capacitor applications seamlessly.

## Installation

To start using the `@capgo/capacitor-updater` package, you need to install it in your project. Use the following command:

```bash
npm install @capgo/capacitor-updater
npx cap sync
```

## Auto-update Setup

1. Create an account on [capgo.app](https://capgo.app) and obtain your API key.
2. Login to the CLI using the command `npx @capgo/cli@latest init YOUR_API_KEY`.
3. Follow the step-by-step instructions to set up your app.

For more detailed instructions, refer to the [Auto update documentation](https://capgo.app/docs/plugin/auto-update).

## Manual Setup

If you prefer to download update distribution zip files manually, follow these steps:

1. Edit your `capacitor.config.json` file and set `autoUpdate` to false.
    ```json
    // capacitor.config.json
    {
        "appId": "**.***.**",
        "appName": "Name",
        "plugins": {
            "CapacitorUpdater": {
                "autoUpdate": false
            }
        }
    }
    ```

2. Add the following code to your main application code to notify that the current update has loaded successfully:
    ```javascript
    import { CapacitorUpdater } from '@capgo/capacitor-updater'
    CapacitorUpdater.notifyAppReady()
    ```

3. To update your application with a new version, use the following code snippet:
    ```javascript
    const version = await CapacitorUpdater.download({
        url: 'https://github.com/Cap-go/demo-app/releases/download/0.0.4/dist.zip'
    })
    await CapacitorUpdater.set(version); // sets the new version and reloads the app
    ```

4. Failed updates will automatically roll back to the last successful version.

## Example Using App-state for Updates

Consider performing auto-updates when the application state changes using App-state with the SplashScreen to enhance the user experience. Here is an example code snippet:

```javascript
import { CapacitorUpdater, VersionInfo } from '@capgo/capacitor-updater'
import { SplashScreen } from '@capacitor/splash-screen'
import { App } from '@capacitor/app'

let version: VersionInfo;
App.addListener('appStateChange', async (state) => {
    if (state.isActive) {
        version = await CapacitorUpdater.download({
            url: 'https://github.com/Cap-go/demo-app/releases/download/0.0.4/dist.zip'
        })
    }

    if (!state.isActive && version) {
        SplashScreen.show()
        try {
            await CapacitorUpdater.set(version);
            // New version is active, hide the splash screen
        } catch () {
            SplashScreen.hide()
        }
    }
})
```

By following these steps, you can effectively utilize the `@capgo/capacitor-updater` package to manage updates in your Capacitor applications.