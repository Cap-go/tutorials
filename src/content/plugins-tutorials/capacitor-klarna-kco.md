---
title: "Using @foodello/capacitor-klarna-kco Package"
description: "A tutorial on integrating the @foodello/capacitor-klarna-kco package into your Capacitor app to enable Klarna Checkout functionality."
created_at: "2022-04-20"
published: true
slug: "capacitor-klarna-kco"
---

# Using @foodello/capacitor-klarna-kco Package

In this tutorial, we will guide you on how to integrate the `@foodello/capacitor-klarna-kco` package into your Capacitor app to enable Klarna Checkout functionality. Klarna Checkout allows users to make payments using multiple payment methods, including Buy Now, Pay Later options.

## Installation

To get started, follow these steps to install the package:

1. Open your terminal and navigate to your Capacitor app's root directory.

2. Run the following command to install the package using Yarn or npm:

```bash
yarn add @foodello/capacitor-klarna-kco
```
```bash
npm install @foodello/capacitor-klarna-kco
```

3. After the installation is complete, run the following command to sync the Capacitor project:

```bash
npx cap sync
```

## Setup

To configure the `@foodello/capacitor-klarna-kco` package, you need to modify the `capacitor.config.json` file in your project's root directory. Open the file and add the following configuration under the `"plugins"` section:

```json
{
  "plugins": {
    "KlarnaKco": {
      "returnUrlIos": "your-app-scheme://",
      "returnUrlAndroid": "your-app-scheme://",
      "environment": "playground",
      "handleEPM": false,
      "handleValidationErrors": false,
      "region": "eu",
      "theme": "light"
    }
  }
}
```

Make sure to replace `"your-app-scheme"` with your actual app scheme. This scheme is used to handle the return URL after the Klarna Checkout process.

### Android Modifications

If you are developing for Android, you need to make some additional modifications:

1. Open the `build.gradle` file in your Android app module.

2. Add the following repository to the `repositories` section:

```gradle
repositories {
  ...
  maven {
    url 'https://x.klarnacdn.net/mobile-sdk/'
  }
}
```

3. (Optional) If you want to use a different version of the Klarna SDK, add the desired version to the `variables.gradle` file:

```gradle
ext {
  ...
  klarnaSdkVersion: 'x.x.x'
}
```

By default, the SDK version is set to `2.5.2`.

4. Open the `AndroidManifest.xml` file and make sure your main activity has an intent filter that supports the return URL scheme defined in the `capacitor.config.json` file. Add the following code inside the `activity` tag:

```xml
<intent-filter>
  <action android:name="android.intent.action.VIEW" />
  <category android:name="android.intent.category.DEFAULT" />
  <category android:name="android.intent.category.BROWSABLE" />
  <data android:scheme="<your-app-scheme>" />
  <data android:host="<your-app-host>" />
</intent-filter>
```

Again, replace `"your-app-scheme"` and `"your-app-host"` with the actual values for your app scheme and host.

**Note:** The hosting activity should have `android:launchMode="singleTask|singleTop"` in the manifest to prevent multiple instances when returning from an external application.

## Usage

Now that you have installed and configured the package, you can start using it in your Capacitor app. Here's an example of how to import the `KlarnaKco` class and listen for Klarna events:

```js
import { KlarnaKco } from "@foodello/capacitor-klarna-kco";

KlarnaKco.addListener("complete", ({ url }) => {
  // Perform navigation or handle completion event
});
```

Make sure to attach listeners to the events you want to handle. In the example above, the `complete` event is being listened to, which is triggered when the Klarna Checkout process is complete.

For more information on the available events and how to use the Klarna Checkout functionality, refer to the [Klarna In-App documentation](https://docs.klarna.com/in-app/).

That's it! You have successfully integrated the `@foodello/capacitor-klarna-kco` package into your Capacitor app. Now you can leverage Klarna Checkout to provide a seamless payment experience to your app users.

Happy coding!