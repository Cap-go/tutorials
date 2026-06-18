```markdown
---
"title": "Using @capacitor-updater package documentation",
"description": "This blog post provides a detailed tutorial on how to use the @capacitor-updater package for updating Capacitor apps.",
"created_at": "2022-01-28",
"published": true,
"slug": "capacitor-updater.git"
---

# Using @capgo/capacitor-updater Package

The @capacitor-updater package allows you to easily update your Capacitor apps. This tutorial will guide you through the process of setting up and using the package in your project.

## Installation

To install the @capacitor-updater package, run the following command in your project directory:

```bash
npm install @capgo/capacitor-updater
npx cap sync
```

## Auto-update Setup

1. Create an account on [capgo.app](https://capgo.app) and obtain your API key.
2. Log in to the CLI by running the following command, replacing `API_KEY` with your actual API key:
```bash
npx @capgo/cli@latest init API_KEY
```
3. Follow the setup steps provided to configure your app for auto-updates.

For more detailed information, refer to the [Auto Update Documentation](https://capgo.app/docs/plugin/auto-update).

## Manual Setup

If you prefer to manually control the update process, follow these steps:

1. Edit your `capacitor.config.json` file to set `autoUpdate` to false:
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

2. In your main code, use the following snippet to notify the Capacitor Updater that the current update bundle has loaded successfully:
```javascript
import { CapacitorUpdater } from '@capgo/capacitor-updater'
CapacitorUpdater.notifyAppReady()
```

3. To download and set a new version manually, use the following code:
```javascript
const version = await CapacitorUpdater.download({
  url: 'https://github.com/Cap-go/demo-app/releases/download/0.0.4/dist.zip',
})
await CapacitorUpdater.set(version); // sets the new version and reloads the app
```

4. Failed updates will automatically roll back to the last successful version.

## Advanced Usage

You can implement more advanced update strategies in your app, such as using app-state changes and Splash Screen to improve the user experience. Here's an example:

```javascript
import { CapacitorUpdater, VersionInfo } from '@capgo/capacitor-updater'
import { SplashScreen } from '@capacitor/splash-screen'
import { App } from '@capacitor/app'

let version: VersionInfo;
App.addListener('appStateChange', async (state) => {
    if (state.isActive) {
        version = await CapacitorUpdater.download({
            url: 'https://github.com/Cap-go/demo-app/releases/download/0.0.4/dist.zip',
        })
    }

    if (!state.isActive && version) {
        SplashScreen.show();
        try {
            await CapacitorUpdater.set(version);
            // New version is active, hide the splash screen
        } catch () {
            SplashScreen.hide(); // Hide the splash screen if something went wrong
        }
    }
})
```

## Conclusion

In this tutorial, we covered the steps to install and use the @capacitor-updater package for updating your Capacitor apps. Whether you prefer automatic or manual updates, this package provides an efficient way to keep your apps up to date.
```