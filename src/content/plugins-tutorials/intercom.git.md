```markdown
---
"title": "Using Intercom with Capacitor",
"description": "This tutorial will guide you on how to integrate the @capacitor-community/intercom package into your Capacitor project for both iOS and Android platforms.",
"created_at": "2022-02-25",
"published": true,
"slug": "intercom.git"
---

# Using Intercom with Capacitor

In this tutorial, you will learn how to integrate the @capacitor-community/intercom package into your Capacitor project for both iOS and Android platforms.

## iOS Setup

1. Start by creating a new Capacitor project:
   ```
   ionic start my-cap-app --capacitor
   cd my-cap-app
   npm install —-save @foodello/intercom
   mkdir www && touch www/index.html
   npx cap add ios
   ```
2. Add your Intercom keys to the Capacitor configuration file:
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
3. Open your iOS project in Xcode using:
   ```
   npx cap open ios
   ```
4. Sign your app in Xcode under the general tab.

## Android Setup

1. Create a new Capacitor project if you haven't already:
   ```
   ionic start my-cap-app --capacitor
   cd my-cap-app
   npm install —-save @foodello/intercom
   mkdir www && touch www/index.html
   npx cap add android
   ```
2. Add the Intercom keys to the Capacitor configuration file for Android:
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
3. Open your Android project using:
   ```
   npx cap open android
   ```

Now you are all set to use Intercom with your Capacitor project. Remember to clean up the cache and rerun the app whenever you make changes to native code.

For any future enhancements or issues, feel free to contribute or open an issue.
```