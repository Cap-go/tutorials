```markdown
---
"title": "Using Capacitor Google Auth Package Tutorial",
"description": "Step-by-step guide on how to use the @codetrix-studio/capacitor-google-auth package for Google authentication in Capacitor apps.",
"created_at": "2023-11-22",
"published": true,
"slug": "capacitorgoogleauth.git"
---

# Using Capacitor Google Auth Package Tutorial

This tutorial will guide you through the process of integrating and using the `@codetrix-studio/capacitor-google-auth` package for enabling Google authentication in your Capacitor apps.

## Installation

To get started, you need to install the `@codetrix-studio/capacitor-google-auth` package. Run the following command in your terminal:

```sh
npm i --save @codetrix-studio/capacitor-google-auth
```

After installation, make sure to update the capacitor dependencies by running:

```sh
npx cap update
```

## Usage

### Setting Up

#### Web

You can register the plugin and initialize it as shown below:

```typescript
import { GoogleAuth } from '@codetrix-studio/capacitor-google-auth';

GoogleAuth.initialize({
  clientId: 'CLIENT_ID.apps.googleusercontent.com',
  scopes: ['profile', 'email'],
  grantOfflineAccess: true,
});

// Perform sign-in
GoogleAuth.signIn();
```

#### Angular

In your application component, initialize the plugin and implement the sign-in function:

```typescript
GoogleAuth.initialize();

async googleSignIn() {
  let googleUser = await GoogleAuth.signIn();
  const credential = auth.GoogleAuthProvider.credential(googleUser.authentication.idToken);
  return this.afAuth.auth.signInAndRetrieveDataWithCredential(credential);
}
```

#### Vue 3

Initialize the plugin and handle the login process in Vue 3:

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

For iOS, you need to create a Client ID for iOS in the Google Cloud Console and set the appropriate configurations in your Xcode project.

Follow these steps:

1. Create a Client ID for iOS and get the ID and URL scheme.
2. Add the identifier to `Info.plist` in Xcode.
3. Set the Client ID in `capacitor.config.json` or copy the `GoogleService-Info.plist` file.

## Conclusion

By following this tutorial, you should now have a good understanding of how to utilize the `@codetrix-studio/capacitor-google-auth` package for implementing Google authentication in your Capacitor app. Feel free to explore more features and customize it to suit your application requirements.
```
```