```markdown
---
title: "Using Capacitor Google Auth Plugin"
description: "Step-by-step tutorial on how to use the @codetrix-studio/capacitor-google-auth package for authenticating users with Google in Capacitor projects."
created_at: "2021-09-15"
published: true
slug: capacitorgoogleauth.git
---

# Using Capacitor Google Auth Plugin

This tutorial will guide you through the process of integrating the Capacitor Google Auth plugin into your Capacitor project for authenticating users with Google.

## Installation

### Step 1: Install the Package

```sh
npm i --save @codetrix-studio/capacitor-google-auth
```

### Step 2: Update Capacitor Dependencies

```sh
npx cap update
```

## Using the Plugin

### Initializing in Web

Register the plugin and manually initialize in your JavaScript/TypeScript file:

```typescript
import { GoogleAuth } from '@codetrix-studio/capacitor-google-auth';

GoogleAuth.initialize({
  clientId: 'CLIENT_ID.apps.googleusercontent.com',
  scopes: ['profile', 'email'],
  grantOfflineAccess: true,
});
```

### Signing In

```typescript
GoogleAuth.signIn();
```

### Using with Angular

```typescript
import { GoogleAuth as GoogleAuthCapacitor } from '@codetrix-studio/capacitor-google-auth';

async googleSignIn() {
  let googleUser = await GoogleAuthCapacitor.signIn();
  const credential = auth.GoogleAuthProvider.credential(googleUser.authentication.idToken);
  return this.afAuth.auth.signInAndRetrieveDataWithCredential(credential);
}
```

### Using with Vue 3

```javascript
import { GoogleAuth } from '@codetrix-studio/capacitor-google-auth';

GoogleAuth.initialize();

async function logIn() {
  const response = await GoogleAuth.signIn();
  console.log(response);
}
```

### Setup for iOS

1. Create the Client ID for iOS in the Google Cloud Console and obtain the Client ID and iOS URL scheme.
2. Add the identifier `REVERSED_CLIENT_ID` as URL schemes to `Info.plist` from the iOS URL scheme.
3. Set the Client ID in the `capacitor.config.json` file or by copying the `GoogleService-Info.plist` file to the iOS App directory.

This tutorial provides a basic guide on how to set up and use the Capacitor Google Auth plugin in various platforms like Web, Angular, Vue 3, and iOS.
```
```