---
title: "Using capacitor-microsoft-auth Package"
description: "A tutorial on how to use the capacitor-microsoft-auth package to authenticate users with Microsoft services."
created_at: "2022-01-01"
published: true
slug: capacitor-microsoft-auth
---

# Using capacitor-microsoft-auth Package

In this tutorial, we will learn how to use the `capacitor-microsoft-auth` package to authenticate users with Microsoft services in a Capacitor app.

## Installation

First, let's install the `capacitor-microsoft-auth` package. Open your project's root directory in a terminal and run the following command:

```bash
npm install capacitor-microsoft-auth
```

## Configuration

After installing the package, we need to configure it with the necessary credentials from Microsoft Azure.

1. Open your Capacitor project in a code editor.
2. Navigate to the `android/app/src/main/java/{YOUR_APP_ID}/MainActivity.java` file.
3. Import the `com.getcapacitor.community.microsoftauth.MicrosoftAuth` package.

   ```java
   import com.getcapacitor.community.microsoftauth.MicrosoftAuth;
   ```

4. Inside the `init` method, add the following code to initialize the MicrosoftAuth plugin:

   ```java
   add(MicrosoftAuth.class);
   ```

5. Save the changes and close the file.

## Authentication Flow

Now that we have the `capacitor-microsoft-auth` package installed and configured, let's implement the authentication flow in our app.

1. Import the `Plugins` package from Capacitor at the beginning of your component file:

   ```tsx
   import { Plugins } from '@capacitor/core';
   ```

2. Define a function for handling the login action:

   ```tsx
   const handleLogin = async () => {
     try {
       const { MicrosoftAuth } = Plugins;
       const response = await MicrosoftAuth.signIn();

       // Get the access token and user information from the response
       const accessToken = response.accessToken;
       const user = response.account;

       // Use the accessToken and user information in your app
       // e.g., store them in the state or send them to your server
     } catch (error) {
       console.error('Authentication error:', error);
     }
   };
   ```

3. Use the `handleLogin` function in your component's UI to trigger the authentication process. For example, you can add a button:

   ```tsx
   <button onClick={handleLogin}>Login with Microsoft</button>
   ```

4. Test your app by running it on a device or emulator. When you click the "Login with Microsoft" button, a Microsoft login page will be displayed, and upon successful authentication, the access token and user information will be retrieved.

## Conclusion

In this tutorial, we have learned how to install and use the `capacitor-microsoft-auth` package to authenticate users with Microsoft services in a Capacitor app. By following the steps outlined here, you can now enable Microsoft authentication in your own app and make use of the retrieved access tokens and user information.

Remember to refer to the official documentation of the `capacitor-microsoft-auth` package for more detailed information and advanced usage.

Happy coding!