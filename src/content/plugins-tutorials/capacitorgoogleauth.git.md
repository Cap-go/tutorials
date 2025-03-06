---
"title": "Using Capacitor Google Auth Package Tutorial",
"description": "Complete guide on how to use the @codetrix-studio/capacitor-google-auth package in your project.",
"created_at": "2022-02-14",
"published": true,
"slug": "capacitorgoogleauth.git"
---

# Using Capacitor Google Auth Package Tutorial

This tutorial will guide you on how to integrate and use the `@codetrix-studio/capacitor-google-auth` package in your project.

## Installation

To get started, install the package by running the following command:

```sh
npm i --save @codetrix-studio/capacitor-google-auth
```

Next, update Capacitor dependencies:

```sh
npx cap update
```

## Usage

### Web

First, register the plugin and manually initialize it in your web application:

```ts
import { GoogleAuth } from '@codetrix-studio/capacitor-google-auth';

// Wait until the platform DOM is ready
GoogleAuth.initialize({
  clientId: 'CLIENT_ID.apps.googleusercontent.com',
  scopes: ['profile', 'email'],
  grantOfflineAccess: true,
});
```

Then you can use the Google Auth functionalities like signing in:

```ts
GoogleAuth.signIn();
```

### Angular

In an Angular application, you can initialize the Google Auth plugin in the app component:

```ts
constructor() {
  this.initializeApp();
}

initializeApp() {
  this.platform.ready().then(() => {
    GoogleAuth.initialize()
  })
}

async googleSignIn() {
  let googleUser = await GoogleAuth.signIn();
  // Add your authentication logic here
}
```

### Vue 3

For Vue 3 applications, you can initialize the plugin as follows:

```vue
import { defineComponent, onMounted } from 'vue';
import { GoogleAuth } from '@codetrix-studio/capacitor-google-auth';

onMounted(() => {
  GoogleAuth.initialize();
});

async function logIn() {
  const response = await GoogleAuth.signIn();
  console.log(response);
}
```

### iOS Configuration

To set up the plugin in an iOS project, you need to create a Client ID for iOS in the Google Cloud Console and then follow the provided steps in `Info.plist` and `capacitor.config.json`.

Make sure to follow the detailed iOS setup described in the plugin documentation.

## Conclusion

This tutorial provided a step-by-step guide on integrating the `@codetrix-studio/capacitor-google-auth` package into your Capacitor project for various platforms like Web, Angular, and Vue 3. Experiment with the features and functionalities offered by this package to enhance your application's authentication capabilities.