```markdown
---
"title": "Using Capacitor Google Auth Plugin",
"description": "Article detailing how to use the Capacitor Google Auth Plugin for signing in with Google in your Capacitor project.",
"created_at": "October 9, 2021",
"published": true,
"slug": "capacitor-plugin-scgssigninwithgoogle.git"
---

<h1>Using the Capacitor Google Auth Plugin</h1>

The Capacitor Google Auth Plugin is a convenient tool that helps you integrate Google sign-in functionality into your Capacitor projects. In this tutorial, we'll guide you through the process of setting up and using this plugin step by step.

### Installation

To start using the Capacitor Google Auth Plugin, first install the package using npm or yarn:

```
$ npm i --save @codetrix-studio/capacitor-google-auth
```

Next, update your Capacitor dependencies by running:

```
$ npx cap update
```

### Usage

#### Web

After installing the package, register the plugin and initialize it in your web app. Make sure to provide the required options such as `clientId`, `scopes`, and `grantOfflineAccess`:

```typescript
import { GoogleAuth } from '@codetrix-studio/capacitor-google-auth';

GoogleAuth.initialize({
  clientId: 'CLIENT_ID.apps.googleusercontent.com',
  scopes: ['profile', 'email'],
  grantOfflineAccess: true,
});

GoogleAuth.signIn();
```

#### Angular

In an Angular application, you can initialize the plugin in the `initializeApp` method of your `app.component.ts` file and handle sign-ins as follows:

```typescript
import { GoogleAuth } from '@codetrix-studio/capacitor-google-auth';
import { auth } from 'firebase/app';

initializeApp() {
  this.platform.ready().then(() => {
    GoogleAuth.initialize();
  });
}

async googleSignIn() {
  const googleUser = await GoogleAuth.signIn();
  const credential = auth.GoogleAuthProvider.credential(googleUser.authentication.idToken);
  return this.afAuth.auth.signInAndRetrieveDataWithCredential(credential);
}
```

#### Vue 3

For Vue 3 projects, you can initialize the plugin and handle sign-ins similarly:

```vue
import { onMounted } from 'vue';
import { GoogleAuth } from '@codetrix-studio/capacitor-google-auth';

onMounted(() => {
  GoogleAuth.initialize();
});

async function logIn() {
  const response = await GoogleAuth.signIn();
  console.log(response);
}
```

This concludes our tutorial on using the Capacitor Google Auth Plugin. Feel free to explore more customization options and capabilities provided by this powerful plugin!
```