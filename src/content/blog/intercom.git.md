```
---
"title": "Using @capacitor-community/intercom Package Tutorial",
"description": "This tutorial covers the setup and integration of the @capacitor-community/intercom package into an Ionic Capacitor app, for both iOS and Android.",
"created_at": "2022-02-15",
"published": true,
"slug": "intercom-git"
---

# Using @capacitor-community/intercom Package Tutorial

This tutorial covers the step-by-step instructions for setting up and integrating the `@capacitor-community/intercom` package into an Ionic Capacitor app for iOS and Android.

## iOS Setup

1. Create a new Ionic Capacitor app:
   ```
   ionic start my-cap-app --capacitor
   cd my-cap-app
   ```

2. Install the Intercom package:
   ```
   npm install --save @foodello/intercom
   mkdir www && touch www/index.html
   ```

3. Add iOS platform:
   ```
   npx cap add ios
   ```

4. Add Intercom keys to `capacitor.config.json` file:
   ```json
   {
     "plugins": {
       "Intercom": {
         "iosApiKey": "ios_sdk-xxx",
         "iosAppId": "yyy"
       }
     }
   }
   ```

5. Open the iOS project:
   ```
   npx cap open ios
   ```

6. Sign your app in Xcode under the "General" tab.

7. Clean the cache and run the app:
   ```
   Product > Clean Build Folder
   ```

## Android Setup

1. Create a new Ionic Capacitor app:
   ```
   ionic start my-cap-app --capacitor
   cd my-cap-app
   ```

2. Install the Intercom package:
   ```
   npm install --save @foodello/intercom
   mkdir www && touch www/index.html
   ```

3. Add Android platform:
   ```
   npx cap add android
   ```

4. Add Intercom keys to `capacitor.config.json` file:
   ```json
   {
     "plugins": {
       "Intercom": {
         "androidApiKey": "android_sdk-xxx",
         "androidAppId": "yyy"
       }
     }
   }
   ```

5. Open the Android project:
   ```
   npx cap open android
   ```

6. Clean the cache and run the app:
   ```
   Build > Clean Project | Build > Rebuild Project
   ```

## License

This package is licensed under MIT.

## Original Maintainers and Sponsors

This package is based on the original work of the `@capacitor-community/intercom` plugin. Credits to the maintainers and sponsors who supported the development.

## Future Plans

If you have any suggestions or feedback, feel free to open a new issue.

## Contributors

Special thanks to all the contributors who have helped in the development of this tutorial and package.
```