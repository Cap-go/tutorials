---
title: "Using @greytch/capacitor-google-auth Package"
description: "A tutorial on how to use the @greytch/capacitor-google-auth package to enable Google authentication in a Capacitor project."
created_at: "2022-01-15"
published: true
slug: "capacitorgoogleauth"
---

# Using @greytch/capacitor-google-auth Package

In this tutorial, we will learn how to use the `@greytch/capacitor-google-auth` package to enable Google authentication in a Capacitor project. This package provides a simple way to integrate Google Auth functionality into your app and allows users to sign in with their Google accounts.

## Installation

Before we begin, make sure you have a Capacitor project set up and running. If you don't have one, you can create a new Capacitor project using the following command:

```
npx @capacitor/cli create
```

Next, navigate to your project's directory and install the `@greytch/capacitor-google-auth` package using npm or yarn:

```
npm install @greytch/capacitor-google-auth
```

or

```
yarn add @greytch/capacitor-google-auth
```

## Setup

Once the package is installed, we need to configure it in our project. Follow the steps below to set up the `@greytch/capacitor-google-auth` package:

1. Open your project's `capacitor.config.json` file and add the following configuration:

```json
{
  ...
  "plugins": {
    "GoogleAuth": {
      "scopes": ["profile", "email"],
      "webClientId": "YOUR_WEB_CLIENT_ID",
      "forceCodeForRefreshToken": true
    }
  }
}
```

Replace `"YOUR_WEB_CLIENT_ID"` with the client ID obtained from the Google Developers Console for your project.

2. Import the `GoogleAuth` module in your project's main file. For example, in `app.ts` or `main.ts`:

```tsx
import { GoogleAuth } from '@greytch/capacitor-google-auth';
```

3. Initialize the `GoogleAuth` module in your application. This step is usually done on app startup, inside the `platform.ready()` function:

```tsx
GoogleAuth.init();
```

With these setup steps complete, we are ready to start using the `@greytch/capacitor-google-auth` package in our application.

## Sign In

To enable Google sign-in functionality in your app, you can simply call the `signIn()` function provided by the `GoogleAuth` module. This function initiates the Google sign-in process and returns the user's authentication data.

Here's an example of how to use the `signIn()` function:

```tsx

import { GoogleAuth } from '@greytch/capacitor-google-auth';

async function signInWithGoogle() {
  try {
    const user = await GoogleAuth.signIn();
    console.log('User:', user);
    // Handle signed-in user
  } catch (error) {
    console.error('Google sign-in error:', error);
    // Handle sign-in error
  }
}

// Call the signInWithGoogle function when the user clicks on a "Sign in with Google" button or triggers the sign-in process in your app.

```

That's it! With just a few lines of code, you have enabled Google authentication in your Capacitor project using the `@greytch/capacitor-google-auth` package.

Feel free to explore the package documentation for additional features and customizations.

Happy coding!