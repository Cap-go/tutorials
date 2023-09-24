Sure! Here's a step-by-step tutorial on how to use the `@iwarranty-io/capacitor-google-auth` package:

## Step 1: Installation

First, you need to install the package using npm or yarn. Open your terminal and run the following command:

```sh
npm install @iwarranty-io/capacitor-google-auth
```

## Step 2: Update Capacitor Dependencies

After installing the package, you need to update your Capacitor dependencies. Run the following command:

```sh
npx cap update
```

## Step 3: Initialize the Plugin

To use the Capacitor Google Auth plugin, you need to initialize it in your app. Here's an example for a web application:

```typescript
import { GoogleAuth } from '@iwarranty-io/capacitor-google-auth';

GoogleAuth.initialize({
  clientId: 'YOUR_CLIENT_ID.apps.googleusercontent.com',
  scopes: ['profile', 'email'],
});
```

Replace `YOUR_CLIENT_ID` with your actual Google Client ID.

## Step 4: Sign In

Once the plugin is initialized, you can now use the `signIn` method to initiate the sign-in process. Here's an example:

```typescript
import { GoogleAuth } from '@iwarranty-io/capacitor-google-auth';

async function signInWithGoogle() {
  try {
    const response = await GoogleAuth.signIn();
    // Handle the response here
  } catch (error) {
    console.error(error);
  }
}
```

The `signIn` method returns a response object containing the user's access token, ID token, and other information. You can handle the response based on your application's requirements.

And that's it! You have successfully integrated the `@iwarranty-io/capacitor-google-auth` package into your application.

Note: This tutorial assumes you are using Capacitor version 3. If you are using a different version, please refer to the package's documentation for the appropriate usage instructions.

I hope this tutorial helps! Let me know if you have any further questions.