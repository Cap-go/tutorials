---
"title": "Using Capacitor Native Google One Tap Signin Plugin",
"description": "A markdown tutorial on how to use the Capacitor Native Google One Tap Signin package for seamless Google authentication in Ionic Capacitor apps.",
"created_at": "2022-02-23",
"published": true,
"slug": "capacitor-native-google-one-tap-signin.git"
---

## Installing and Configuring Capacitor Native Google One Tap Signin Plugin

### 1. Install the package

```sh
npm i --save capacitor-native-google-one-tap-signin
```

### 2. Update capacitor dependencies

```sh
npx cap update
```

### 3. Configure Google Cloud Console

- Go to [Google Cloud Console](https://console.cloud.google.com/apis/dashboard) and create a client ID for the web platform.
- The client ID should be of type "Web application."
- While creating the client ID, add two "Authorized JavaScript origins": one with URI "http://localhost:3000" and one with URI "http://localhost."
- No "Authorized redirect URIs" are needed for development.
- Copy the generated client ID and pass it in the `initialize` call.

### 4. Initialize Google Auth

For the web platform, you can initialize the Google Auth like this:

```ts
import { GoogleAuth } from '@codetrix-studio/capacitor-google-auth';

GoogleAuth.initialize({
  clientId: 'YOUR_CLIENT_ID.apps.googleusercontent.com',
  scopes: ['profile', 'email'],
  grantOfflineAccess: true,
});
```

### 5. Trigger Sign-In

After initializing, you can trigger the sign-in process:

```ts
GoogleAuth.signIn();
```

### Additional Usage Instructions

- **Angular**: Implement the initialization hook during app initialization and the sign-in function.
- **Vue 3**: Use `onMounted` to initialize Google Auth and implement the sign-in function.
- **iOS**: Follow the additional steps mentioned in the capacitors guide to set up Google credentials for iOS platforms.

You're now ready to authenticate users seamlessly through Google in your Ionic Capacitor app using the One Tap Sign In plugin.