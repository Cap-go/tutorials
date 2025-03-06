---
"title": "Using Capacitor Native Google One Tap Sign-In Plugin",
"description": "A step-by-step tutorial on installing and configuring the Capacitor Native Google One Tap Sign-In Plugin for Ionic apps",
"created_at": "2022-01-10",
"published": true,
"slug": "capacitor-native-google-one-tap-signin.git"
---

# Using Capacitor Native Google One Tap Sign-In Plugin

This tutorial provides a comprehensive guide on how to install and configure the Capacitor Native Google One Tap Sign-In Plugin for Ionic apps.

## Installation and Configuration

### 1. Install Package

```sh
npm i --save capacitor-native-google-one-tap-signin
```

### 2. Update Capacitor Dependencies

Run the following command to update the Capacitor dependencies:

```sh
npx cap update
```

### 3. Configuration

Authentication is based on cryptographic keys, so follow these steps to set up the plugin:

- Create a client ID for each platform in the Google Cloud Console.
- For the web platform, create a client ID of type "Web application" and add two "Authorized JavaScript origins" (e.g., http://localhost:3000, http://localhost).
- Generate the client ID and pass it in the `initialize` call of the plugin.
- Ensure that your server does not set the `Referrer-Policy` header to `same-origin` and sets the `Cross-Origin-Opener-Policy` header value to `same-origin-allow-popups`.

## Usage

### Web

Register the plugin and initialize it in your web application:

```typescript
import { GoogleAuth } from '@codetrix-studio/capacitor-google-auth';

GoogleAuth.initialize({
  clientId: 'YOUR_CLIENT_ID.apps.googleusercontent.com',
  scopes: ['profile', 'email'],
  grantOfflineAccess: true,
});

GoogleAuth.signIn();
```

### Angular

In your Angular application, you can include the plugin as follows:

```typescript
const googleUser = await GoogleAuth.signIn();
const credential = auth.GoogleAuthProvider.credential(googleUser.authentication.idToken);
this.afAuth.auth.signInAndRetrieveDataWithCredential(credential);
```

### Vue 3

For Vue 3 applications, you can use the plugin as shown below:

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

### iOS

To enable the plugin for iOS, follow these steps:

1. Create a Client ID for iOS in the Google Cloud Console.
2. Add the `REVERSED_CLIENT_ID` identifier as a URL scheme in the `Info.plist`.
3. Set the appropriate Client ID in the configuration.

That's it! You should now be able to successfully use the Capacitor Native Google One Tap Sign-In Plugin in your Ionic app.