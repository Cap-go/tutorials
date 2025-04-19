---
"title": "Using capacitor-plugin-scgssigninwithgoogle"
"description": "A comprehensive tutorial on how to use the capacitor-plugin-scgssigninwithgoogle package for Google Sign-In with Capacitor."
"created_at": "2021-11-10"
"published": true
"slug": "capacitor-plugin-scgssigninwithgoogle.git"
---

# Using capacitor-plugin-scgssigninwithgoogle

This tutorial will guide you through the process of incorporating the `capacitor-plugin-scgssigninwithgoogle` package into your project for Google Sign-In functionality. 

## Installation

```bash
$ npm install capacitor-plugin-scgssigninwithgoogle
$ npx cap sync
$ npx cap update
```

## URL Scheme Configuration

Ensure to add the required URL scheme as shown in the official documentation to enable Google Sign-In functionality.

## capacitor.config.json Configuration

Add the following configuration to your `capacitor.config.json` file under the plugins section:

```json
"plugins": {
  "Sso": {
    "googleClientId": "YOUR_CLIENT_ID.apps.googleusercontent.com",
    "googleReversedId": "com.googleusercontent.apps.YOUR_CLIENT_ID"
  }
}
```

## Usage

### Web

```typescript
import { GoogleAuth } from 'capacitor-plugin-scgssigninwithgoogle';

GoogleAuth.initialize({
  clientId: 'YOUR_CLIENT_ID.apps.googleusercontent.com',
  scopes: ['profile', 'email'],
  grantOfflineAccess: true,
});

GoogleAuth.signIn();
```

### Angular

```typescript
// Import GoogleSignIn in your component
import { GoogleAuth } from 'capacitor-plugin-scgssigninwithgoogle';

constructor() {
  this.initializeApp();
}

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

### iOS

Follow the specific instructions for setting up Google Sign-In on iOS platforms. Ensure to check the steps provided in the official documentation of the plugin.

```

Remember to replace `YOUR_CLIENT_ID` with your actual Google Client ID obtained from the Google Developers Console.