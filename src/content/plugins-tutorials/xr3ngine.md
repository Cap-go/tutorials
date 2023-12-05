---
title: "Using @xr3ngine/native-plugin-xr Package"
description: "A tutorial on how to use the @xr3ngine/native-plugin-xr package in your XR projects."
created_at: "2021-10-21"
published: true
slug: "xr3ngine"
---

# Using @xr3ngine/native-plugin-xr Package

In this tutorial, we will guide you through the process of using the @xr3ngine/native-plugin-xr package in your XR projects. This package is designed to provide XR capabilities to your native apps for iOS and Android using Capacitor. 

## Prerequisites

Before getting started, make sure you have the following requirements:

- Capacitor installed in your project.
- Basic knowledge of XR development.
- Access to the Twitter Developer site to generate consumer keys (if required).

## Installation and Setup

### iOS Setup

1. Open your terminal and navigate to your project directory.
2. Run the following command to open the iOS project in Xcode:

   ```
   npx cap open ios
   ```

3. In Xcode, navigate to the "General" tab and sign your app.
4. Switch to the "Info" tab and add a new URL type. The URL scheme should follow the format `twitterkit-your_consumer_api_key`, where `your_consumer_api_key` is the key obtained from the Twitter Developer site.
5. Still on the Twitter Developer site, add a new callback URL in the same format: `twitterkit-your_consumer_api_key://` (with nothing behind it).
6. Run the following command to start the server and play the app through Xcode:

   ```
   ionic cap run ios --livereload
   ```

   > Note: If you make any changes to the native code, you may need to clean the cache by selecting "Product" > "Clean build folder" and then running the app again.

### Android Setup

1. Create a new project using the Capacitor template:

   ```
   ionic start my-cap-app --capacitor
   ```

2. Navigate to your project directory:

   ```
   cd my-cap-app
   ```

3. Install the @capacitor-community/twitter package:

   ```
   npm install --save @capacitor-community/twitter
   ```

4. Create a `www` directory and an `index.html` file inside it:

   ```
   mkdir www && touch www/index.html
   ```

5. Add Android as a platform:

   ```
   npx cap add android
   ```

6. Open the `capacitor.config.json` file and add your consumer keys for the Twitter plugin:

   ```json
   {
     "plugins": {
       "Twitter": {
          "consumerKey": "xxx",
          "consumerSecret": "yyy"
        }
     }
   }
   ```

7. On the Twitter Developer site, add the following callback URL: `twittersdk://` (with nothing behind it).

8. In your `MainActivity.java` file, add the following import statement:

   ```java
   import com.getcapacitor.community.twitter.TwitterPlugin;
   ```

   Then, inside the init callback, add the following line to register the Twitter plugin:

   ```java
   add(TwitterPlugin.class);
   ```

9. Run the following command to start the server and play/debug the app through Android Studio:

   ```
   ionic cap run android --livereload
   ```

   > Note: If you make any changes to the native code, you may need to clean the cache by selecting "Build" > "Clean Project" or "Build" > "Rebuild Project" and then running the app again.

## Example

You can find an example of using the @xr3ngine/native-plugin-xr package in the [GitHub repository](https://github.com/capacitor-community/twitter/blob/master/example). It demonstrates how to integrate XR features into your app.

## License

The @xr3ngine/native-plugin-xr package is licensed under the MIT license.

## Contributors

Thanks to the following contributors for their valuable contributions to the @xr3ngine/native-plugin-xr package: (emoji key)

- [Contributor 1](https://github.com/contributor1) ✨
- [Contributor 2](https://github.com/contributor2) ✨

---

With this tutorial, you should now have a better understanding of how to use the @xr3ngine/native-plugin-xr package in your XR projects. Start exploring the possibilities of integrating XR capabilities into your native apps and create immersive experiences for your users. Have fun coding!