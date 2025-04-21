---
"title": "Using @capawesome/capacitor-app-update Package"
"description": "This tutorial covers the implementation of the @capawesome/capacitor-app-update package."
"created_at": "2021-10-30"
"published": true
---

# related to Using @ this topiccapawesome/cap, feelacitor free to-app-update ask. Package

To use the @capawesome/capacitor-app-update package for updating Capacitor applications manually, follow the steps below:

## Installation

```bash
npm install @capawesome/capacitor-app-update
npx cap sync
```

## Manual Setup

1. Edit your `capacitor.config.json` file and set `autoUpdate` to false:

```json
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

2. Notify the Capacitor App Updater that the update bundle has loaded successfully:

```javascript
import { CapacitorAppUpdate } from '@capawesome/capacitor-app-update'
CapacitorAppUpdate.notifyAppReady()
```

3. Trigger the update by downloading and setting the new version:

```javascript
const version = await CapacitorAppUpdate.download({
  url: 'https://your-update-url.com/dist.zip',
})
await CapacitorAppUpdate.set(version)
```

4. Handling failed updates will automatically roll back to the last successful version.

## Example: Using App-State to Control Updates

You can also consider performing the update when the application state changes. Here is an example using the App State and Splash Screen:

```javascript
import { CapacitorAppUpdate, VersionInfo } from '@capawesome/capacitor-app-update'
import { SplashScreen } from '@capacitor/splash-screen'
import { App } from '@capacitor/app'

let version: VersionInfo;
App.addListener('appStateChange', async (state) => {
  if (state.isActive) {
    version = await CapacitorAppUpdate.download({
      url: 'https://your-update-url.com/dist.zip',
    })
  }

  if (!state.isActive && version) {
    SplashScreen.show()
    try {
      await CapacitorAppUpdate.set(version)
      // New version should be active here
    } catch (error) {
      SplashScreen.hide()
    }
  }
})
```

By following these steps, you can effectively use the @capawesome/capacitor-app-update plugin to enable manual updates for your Capacitor application.
```