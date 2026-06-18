```md
---
"title": "Using Capacitor SSO Plugin for Google Sign-In",
"description": "This tutorial will guide you through the process of integrating and using the capacitor-plugin-scgssigninwithgoogle package for Google Sign-In.",
"created_at": "2022-01-02",
"published": true,
"slug": "capacitor-plugin-scgssigninwithgoogle.git"
---

# Using Capacitor SSO Plugin for Google Sign-In

In this tutorial, we will go through the steps to integrate and utilize the capacitor-plugin-scgssigninwithgoogle package in your Capacitor project for Google Sign-In.

## Installation

First, let's install the capacitor-plugin-scgssigninwithgoogle package:

```bash
$ yarn add capacitor-sso
$ npx cap sync
$ npx cap update
```

Make sure to add a URL scheme following the provided instructions in the package documentation.

Next, add the necessary configuration to your `capacitor.config.json` file:

```json
"plugins": {
  "Sso": {
    "googleClientId": "YOUR_GOOGLE_CLIENT_ID",
    "googleReversedId": "YOUR_GOOGLE_REVERSED_ID"
  }
}
```

## Usage

### Web

Register the plugin and manually initialize it in your code:

```typescript
import { GoogleAuth } from '@codetrix-studio/capacitor-google-auth';

GoogleAuth.initialize({
  clientId: 'CLIENT_ID.apps.googleusercontent.com',
  scopes: ['profile', 'email'],
  grantOfflineAccess: true,
});

GoogleAuth.signIn();
```

### Angular

Initialize the plugin in your Angular application:

```typescript
GoogleAuth.initialize();

async googleSignIn() {
  let googleUser = await GoogleAuth.signIn();
  // Handle the sign-in user
}
```

### Vue3

```vue
import { GoogleAuth } from '@codetrix-studio/capacitor-google-auth';

onMounted(() => {
  GoogleAuth.initialize();
});

async function logIn() {
  const response = await GoogleAuth.signIn();
  console.log(response);
}
```

These steps will guide you through the process of setting up and using the capacitors-plugin-scgssigninwithgoogle package for Google Sign-In in your Capacitor project.

```
```