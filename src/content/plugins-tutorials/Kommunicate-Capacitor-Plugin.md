# Using capacitor-plugin-kommunicate

This tutorial will guide you through the process of integrating and using the `capacitor-plugin-kommunicate` package in your Ionic app.

## Step 1: Installation

To begin, install the `capacitor-plugin-kommunicate` package by running the following command in your project directory:

```
npm install capacitor-plugin-kommunicate
```

Next, add the Android and iOS modules to your project if they don't already exist:

```
npx cap add android
npx cap add ios
```

## Step 2: Android Setup

Open the Android module in Android Studio by running the following command:

```
npx cap open android
```

In your `android/app/java/<App-Package>/MainActivity.java` file, register the plugin by adding the following code:

```java
@Override
public void onCreate(Bundle savedInstanceState) {
  super.onCreate(savedInstanceState);

  registerPlugin(KommunicateCapacitorPlugin.class);
}
```

## Step 3: iOS Setup

Navigate to the `<Your-Project>/ios/App` directory and run the following command to install the required dependencies:

```
pod install
```

Open the iOS project in Xcode:

```
npx cap open iOS
```

## Step 4: Import the Plugin

In the file where you want to use the `capacitor-plugin-kommunicate` functions, import the plugin as shown below:

```js
import { KommunicateCapacitorPlugin } from 'capacitor-plugin-kommunicate';
```

## Step 5: Launch Conversation

To launch a conversation, create a conversation object and pass it to the `buildConversation` function. Here's an example for launching a conversation for a visitor:

```js
let conversationObject = {
  appId: '<Your-App-Id>'
};

KommunicateCapacitorPlugin.buildConversation(conversationObject)
  .then((res) => {
    console.log("Conversation builder success: " + JSON.stringify(res));
  })
  .catch((error) => {
    console.log("Conversation builder error: " + error);
  });
```

Make sure to replace `<Your-App-Id>` with your actual application ID.

## Step 6: Building and Running

After making any changes to your `.ts` or `.js` files, run the following commands:

```
npm run build
npx cap sync
```

For Android and iOS, run the project from Android Studio and Xcode respectively. For web, use the command `ionic serve`.

And that's it! You now have the `capacitor-plugin-kommunicate` package integrated into your Ionic app.

Note: This tutorial assumes you have signed up for an Application ID on the Kommunicate dashboard. If you haven't, make sure to sign up at [https://dashboard.kommunicate.io/signup](https://dashboard.kommunicate.io/signup) to get your Application ID.