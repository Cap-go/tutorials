---
title: "Using the @xrengine/native-plugin-xr Package"
description: "A tutorial on how to use the @xrengine/native-plugin-xr package to build native XR apps for iOS and Android using Capacitor."
created_at: "2022-01-20"
published: true
slug: "xrengine"
---

# Using the @xrengine/native-plugin-xr Package

This tutorial will guide you through the process of using the @xrengine/native-plugin-xr package to build native XR apps for iOS and Android using Capacitor.

## Prerequisites

Before getting started, make sure you have the following:

- Capacitor installed globally: `npm install -g capacitor`
- Node.js installed: [Node.js Downloads](https://nodejs.org/en/download/)
- Xcode and Android Studio installed for iOS and Android development respectively.

## Installation

To start, create a new Capacitor project:

```
ionic start my-xr-app --capacitor
cd my-xr-app
```

Next, install the @xrengine/native-plugin-xr package:

```
npm install --save @xrengine/native-plugin-xr
```

## iOS Setup

1. Open the iOS project in Xcode by running the following command:

```
npx cap open ios
```

2. Sign your app in Xcode by going to the **General** tab and selecting your team.

3. Add a new URL type in Xcode by going to the **Info** tab. The URL scheme should follow the format `xrexample-your_consumer_api_key`. Grab a key from the XR Engine website.

4. At the XR Engine website, add a new callback URL in the same format: `xrexample-your_consumer_api_key://` (with nothing behind it).

5. Run the app through Xcode using the following command:

```
ionic cap run ios --livereload
```

> Note: Every time you make changes to the native code, clean the cache (Product > Clean build folder) and then run the app again.

## Android Setup

1. In the root directory of your Capacitor project, create the `www` directory and an empty `index.html` file:

```
mkdir www && touch www/index.html
```

2. Add the Android platform to your project:

```
npx cap add android
```

3. Open the `capacitor.config.json` file and add the consumer keys for the XR Engine plugin:

```json
{
  ...
  "plugins": {
    "XR": {
      "consumerKey": "xxx",
      "consumerSecret": "yyy"
    }
  }
  ...
}
```

4. At the XR Engine website, add a callback URL: `xrexample://` (with nothing behind it).

5. `[Extra Step]` In Android, we need to tell Capacitor to initialize the XR Engine plugin. Open the `MainActivity.java` file and add the following import:

```java
import com.xrengine.nativeplugin.XRPlugin;
```

Then, inside the init callback, add the following line:

```java
add(XRPlugin.class);
```

6. Run the app using the following command:

```
ionic cap run android --livereload
```

> Note: Every time you make changes to the native code, clean the cache (Build > Clean Project | Build > Rebuild Project) and then run the app again.

## Example

For a working example of using the @xrengine/native-plugin-xr package, you can refer to the official GitHub repository:

[GitHub Repository](https://github.com/xrengine/native-plugin-xr/example)

## Conclusion

In this tutorial, we have learned how to use the @xrengine/native-plugin-xr package to build native XR apps for iOS and Android using Capacitor. By following the steps outlined in this tutorial, you should be able to set up your development environment and start building your own XR applications.

If you encounter any issues or have any questions, please feel free to reach out to us.

Happy coding!

## License

The @xrengine/native-plugin-xr package is licensed under the MIT license.

## Contributors ✨

A big thank you to all the contributors who have made this project possible!