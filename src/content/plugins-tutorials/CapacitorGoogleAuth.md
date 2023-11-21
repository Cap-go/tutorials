---
title: "Using @codetrix-studio/capacitor-google-auth Package"
description: "A tutorial on how to use the @codetrix-studio/capacitor-google-auth package to integrate Google authentication in a Capacitor app."
created_at: "2021-11-08"
published: true
slug: capacitorgoogleauth
---

# Using @codetrix-studio/capacitor-google-auth Package

The `@codetrix-studio/capacitor-google-auth` package is a Capacitor plugin that allows you to easily integrate Google authentication into your Capacitor app. This tutorial will guide you through the steps of installing and using this package in your project.

## Installation

To get started, you need to install the `@codetrix-studio/capacitor-google-auth` package in your Capacitor project. Open your terminal and run the following command:

```bash
npm i --save @codetrix-studio/capacitor-google-auth
```

After the installation is complete, update your Capacitor dependencies by running the following command:

```bash
npx cap update
```

## Initialization

Before using the `@codetrix-studio/capacitor-google-auth` package, you need to initialize it with your Google client ID and other options. Here's an example of how to initialize the plugin in a web environment:

```typescript
import { GoogleAuth } from '@codetrix-studio/capacitor-google-auth';

GoogleAuth.initialize({
  clientId: 'YOUR_CLIENT_ID.apps.googleusercontent.com',
  scopes: ['profile', 'email'],
  grantOfflineAccess: true,
});
```

Make sure to replace `'YOUR_CLIENT_ID.apps.googleusercontent.com'` with your actual Google client ID. The `scopes` option allows you to specify the permissions you want to request from the user. The `grantOfflineAccess` option is used to enable offline access token refreshing.

## Sign-In

Once the plugin is initialized, you can use the `signIn()` method to initiate the Google sign-in process. Here's an example of how to sign in using the `@codetrix-studio/capacitor-google-auth` package:

```typescript
import { GoogleAuth } from '@codetrix-studio/capacitor-google-auth';

async function googleSignIn() {
  const googleUser = await GoogleAuth.signIn();
  // Use the user data for further authentication or other purposes
  console.log(googleUser);
}
```

The `signIn()` method returns a `GoogleUser` object that contains the user's profile and authentication details. You can use this data to authenticate the user in your app using your preferred authentication mechanism.

## Example Usage in Angular

Here's an example of how to use the `@codetrix-studio/capacitor-google-auth` package in an Angular project:

1. Initialize the plugin in the `app.component.ts` file:

```typescript
import { Component, OnInit } from '@angular/core';
import { GoogleAuth } from '@codetrix-studio/capacitor-google-auth';

@Component({
  selector: 'app-root',
  template: `
    <button (click)="googleSignIn()">Sign In with Google</button>
  `,
})
export class AppComponent implements OnInit {
  ngOnInit() {
    GoogleAuth.initialize({
      clientId: 'YOUR_CLIENT_ID.apps.googleusercontent.com',
      scopes: ['profile', 'email'],
      grantOfflineAccess: true,
    });
  }

  async googleSignIn() {
    const googleUser = await GoogleAuth.signIn();
    // Use the user data for further authentication or other purposes
    console.log(googleUser);
  }
}
```

2. Add the necessary configuration in the `capacitor.config.json` file:

```json
{
  "plugins": {
    "GoogleAuth": {
      "scopes": ["profile", "email"],
      "clientId": "YOUR_CLIENT_ID.apps.googleusercontent.com",
      "grantOfflineAccess": true
    }
  }
}
```

Replace `"YOUR_CLIENT_ID.apps.googleusercontent.com"` with your actual Google client ID.

That's it! You have successfully integrated Google authentication in your Capacitor app using the `@codetrix-studio/capacitor-google-auth` package.

---

Congratulations! You have learned how to install and use the `@codetrix-studio/capacitor-google-auth` package to add Google authentication to your Capacitor app. Feel free to explore the package documentation for more advanced usage and options.

Remember to handle the user authentication data securely and follow best practices to ensure the privacy and security of your users' information.

Happy coding!