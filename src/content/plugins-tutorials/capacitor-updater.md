---
title: "Using @capgo/capacitor-updater for Auto-updates in Capacitor Apps"
description: "Learn how to use @capgo/capacitor-updater package to enable auto-updates in your Capacitor apps."
created_at: "2022-11-22"
published: true
slug: capacitor-updater
---

# Using @capgo/capacitor-updater for Auto-updates in Capacitor Apps

In this tutorial, we will learn how to use the `@capgo/capacitor-updater` package to enable auto-updates in Capacitor apps. Auto-updates allow you to deliver new features and bug fixes to your app without requiring natives manual updates from users.

## Prerequisites

Before getting started, make sure you have the following:

- Node.js and npm installed on your machine
- An existing Capacitor app

## Automatic update Setup

To enable auto-updates in your Capacitor app, follow these steps:

1. Create an account on [capgo.app](https://capgo.app) and obtain your API key.

2. Login to the CLI using the following command, replacing `API_KEY` with your actual API key:

   ```bash
   npx @capgo/cli@latest init API_KEY
   ```

  Follow the prompts to complete the setup.


## Manual update Setup

To install the `@capgo/capacitor-updater` package, run the following command in your project directory:

```bash
npm install @capgo/capacitor-updater
npx cap sync
```

To enable auto-updates in your Capacitor app, follow these steps:

1. Install the updater dependencies by running the following command:

   ```bash
   npm i @capgo/capacitor-updater
   ```

2. Edit your `capacitor.config.json` file and set the `autoUpdate` property to `false` under the `CapacitorUpdater` plugin:

   ```json
   // capacitor.config.json
   {
     "plugins": {
       "CapacitorUpdater": {
         "autoUpdate": false
       }
     }
   }
   ```

3. In your main code file, import the `CapacitorUpdater` module and call the `notifyAppReady()` method:

   ```javascript
   import { CapacitorUpdater } from '@capgo/capacitor-updater'

   CapacitorUpdater.notifyAppReady()
   ```

   This method informs the Capacitor Updater that the current update bundle has loaded successfully. Failing to call this method will cause your application to roll back to the previously successful version.


3. build your JavaScript bundle and sync it with the native project:

  `npm run build`

  And then sync it with the following command:

  `npx cap sync`

5. Bundle it with the following command:

  `npx @capgo/cli@latest zip`

  This will create a zip file in the `dist` folder. Upload this zip file to your server or S3 bucket.

  You can upload to s3 directly with our CLI

  `npx @capgo/cli@latest upload --s3-apikey [key] --s3-apisecret [secretkey] --s3-region [region]`

6. To trigger an update, use the `download()` and `set()` methods. Here's an example:

   ```javascript
   import { CapacitorUpdater } from '@capgo/capacitor-updater'

   const version = await CapacitorUpdater.download({
     url: 'https://example.com/update-package.zip'
   })
   await CapacitorUpdater.set(version)
   ```

   In this example, a new version is downloaded from the specified URL and then set as the active version using the `set()` method. The app will automatically reload with the new version.

   Note that failed updates will automatically roll back to the last successful version.

## Additional Tips

- You can use the `appStateChange` event from the `@capacitor/app` plugin and the `SplashScreen` plugin to control updates based on the application state. This can improve user experience and prevent interrupted updates.

- If you prefer a secure and automated way to update your app, you can use our tutorial [Here](https://capgo.app/blog/update-your-capacitor-apps-seamlessly-using-capacitor-updater/#auto-capgo-configuration), which provides a full-featured auto-update system.

## Conclusion

In this tutorial, we learned how to use the `@capgo/capacitor-updater` package to enable auto-updates in Capacitor apps. By following these steps, you can deliver updates to your app seamlessly and keep your users up-to-date with the latest features and bug fixes.
