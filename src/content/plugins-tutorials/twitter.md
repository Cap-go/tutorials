---
title: "Using @capacitor-community/twitter Package"
description: "A tutorial on how to use the @capacitor-community/twitter package to enable TwitterKit capabilities in your Capacitor project."
created_at: "2021-08-10"
published: true
slug: "twitter"
---

# Using @capacitor-community/twitter Package

This tutorial will guide you through the process of using the `@capacitor-community/twitter` package to enable TwitterKit capabilities in your Capacitor project. We'll cover the necessary installation steps for both iOS and Android platforms, as well as demonstrate how to use the package's API to perform basic Twitter functions.

## Installation

To get started, you'll need to install the `@capacitor-community/twitter` package. Open your terminal and navigate to your Capacitor project directory. Then run one of the following commands based on your package manager:

Using npm:

```bash
npm install @capacitor-community/twitter
```

Using yarn:

```bash
yarn add @capacitor-community/twitter
```

Once the package is installed, you'll need to sync the native files with Capacitor. Run the following command in your terminal:

```bash
npx cap sync
```

## iOS Setup

### Step 1: Create a Capacitor Project

If you haven't already created a Capacitor project, you can use the following commands to create a new one:

```bash
ionic start my-cap-app --capacitor
cd my-cap-app
```

### Step 2: Add the @capacitor-community/twitter Package

In your project's root directory, run the following command to install the `@capacitor-community/twitter` package:

```bash
npm install --save @capacitor-community/twitter
```

### Step 3: Configure the Consumer Keys

Open the `capacitor.config.json` file and add your consumer keys under the "TwitterPlugin" section:

```json
{
  "plugins": {
    "TwitterPlugin": {
      "consumerKey": "xxx",
      "consumerSecret": "yyy"
    }
  }
}
```

Replace `"xxx"` and `"yyy"` with your actual consumer key and consumer secret respectively.

### Step 4: Set Up the URL Scheme

To enable the TwitterKit capabilities, you'll need to configure a URL scheme in your Xcode project. Follow these steps:

1. Open your project in Xcode (`npx cap open ios`).
2. In Xcode, select your app target and go to the "Info" tab.
3. Expand the "URL Types" section.
4. Add a new URL type by clicking the "+" button.
5. Set the URL scheme to follow the format `twitterkit-your_consumer_api_key`, where `your_consumer_api_key` is your actual consumer key obtained from the Twitter Developer site.
6. Save your changes.

### Step 5: Add a Callback URL

In the Twitter Developer site, navigate to your app's settings and add a new callback URL in the format `twitterkit-your_consumer_api_key://`, again replacing `your_consumer_api_key` with your actual consumer key.

### Step 6: Build and Run Your App

Now you're ready to build and run your app. Use the following command to start the server and play the app through Xcode:

```bash
ionic cap run ios --livereload
```

Remember to clean the cache (Product > Clean build folder) before running the app if you make any changes to the native code.

## Android Setup

### Step 1: Create a Capacitor Project

If you haven't already created a Capacitor project, you can use the following commands to create a new one:

```bash
ionic start my-cap-app --capacitor
cd my-cap-app
```

### Step 2: Add the @capacitor-community/twitter Package

In your project's root directory, run the following command to install the `@capacitor-community/twitter` package:

```bash
npm install --save @capacitor-community/twitter
```

### Step 3: Configure the Consumer Keys

Open the `capacitor.config.json` file and add your consumer keys under the "TwitterPlugin" section:

```json
{
  "plugins": {
    "TwitterPlugin": {
      "consumerKey": "xxx",
      "consumerSecret": "yyy"
    }
  }
}
```

Replace `"xxx"` and `"yyy"` with your actual consumer key and consumer secret respectively.

### Step 4: Set Up the Callback URL

In the Twitter Developer site, navigate to your app's settings and add a new callback URL: `twittersdk://`.

### Step 5: Add Extra Step in MainActivity.java

To initialize the plugin in Android, you'll need to add an extra step in your `MainActivity.java` file:

1. Open the `MainActivity.java` file located at `android/app/src/main/java/{your_package_name}/MainActivity.java`.
2. Import the `TwitterPlugin` class by adding the following line at the top of the file: `import com.getcapacitor.community.twitter.TwitterPlugin;`.
3. Inside the `init` callback, add the following line to register the `TwitterPlugin` class: `add(TwitterPlugin.class);`.

### Step 6: Build and Run Your App

Now you're ready to build and run your app. Use the following command to start the server and play/debug the app through Android Studio:

```bash
ionic cap run android --livereload
```

Remember to clean the cache (Build > Clean Project | Build > Rebuild Project) before running the app if you make any changes to the native code.

## Using the @capacitor-community/twitter API

### Login

To perform a login with Twitter, you can use the `login` method provided by the `twitter` object:

```js
import { Twitter } from '@capacitor-community/twitter';

const twitter = new Twitter();

twitter
  .login()
  .then((result) => {
    // Handle successful login
    console.log(result);
  })
  .catch((error) => {
    // Handle login error
    console.log(error);
  });
```

The `login` method returns an object with the following properties:
- `authToken`: The authentication token.
- `authTokenSecret`: The authentication token secret.
- `userName`: The user's Twitter username.
- `userID`: The user's Twitter ID.

### Logout

To log out the user from their Twitter account, use the `logout` method:

```js
twitter.logout();
```

### Check Login Status

To check if a user is currently logged in with Twitter, use the `isLogged` method:

```js
twitter
  .isLogged()
  .then((result) => {
    // Handle login status
    console.log(result);
  })
  .catch((error) => {
    // Handle error
    console.log(error);
  });
```

The `isLogged` method returns an object with the following properties:
- `in`: A boolean value indicating if the user is currently logged in.
- `out`: A boolean value indicating if the