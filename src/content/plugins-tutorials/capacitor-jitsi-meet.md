---
title: "A Tutorial on Using Capacitor Jitsi Meet Package"
description: "In this tutorial, we will learn how to integrate the Capacitor Jitsi Meet package into your mobile app."
created_at: "2021-10-25"
published: true
slug: "capacitor-jitsi-meet"
---

# A Tutorial on Using Capacitor Jitsi Meet Package

In this tutorial, we will learn how to integrate the Capacitor Jitsi Meet package into your mobile app.

## Prerequisites

Before we begin, make sure you have the following installed:

- Capacitor CLI
- Jitsi Meet SDK
- Ionic Framework

## Step 1: Create a new Capacitor App

To get started, we need to create a new Capacitor app. Open your terminal and run the following command:

```bash
npx @capacitor/create-app
```

Follow the prompts to create your new app. Once the app is created, navigate to its directory:

```bash
cd your-app-name
```

## Step 2: Install Capacitor Jitsi Meet Package

Next, we need to install the Capacitor Jitsi Meet package. Run the following command in your app's directory:

```bash
npm install capacitor-jitsi-meet
```

## Step 3: Configure Capacitor

To use the Capacitor Jitsi Meet package, we need to configure Capacitor. Open the `capacitor.config.json` file in your app's root directory and add the following:

```json
"plugins": {
  "CapacitorJitsiMeet": {
    "url": "https://your-jitsi-meet-domain.com"
  }
}
```

Replace `your-jitsi-meet-domain.com` with your actual Jitsi Meet domain.

## Step 4: Integrate Capacitor Jitsi Meet Package

Now it's time to integrate the Capacitor Jitsi Meet package into your app. Open the file where you want to use Jitsi Meet and import the package:

```typescript
import { CapacitorJitsiMeet } from 'capacitor-jitsi-meet';
```

Next, you can use the package's methods to start a Jitsi Meet conference. Here's an example:

```typescript
CapacitorJitsiMeet.joinConference({
  roomName: 'my-conference-room',
  userInfo: {
    displayName: 'John Doe',
    email: 'john.doe@example.com'
  }
});
```

Make sure to replace `'my-conference-room'` with your desired conference room name, and provide user information as needed.

## Step 5: Build and Run Your App

Finally, build and run your app to see the Capacitor Jitsi Meet package in action. Use the following commands to build and run:

```bash
npx cap sync
npx cap open android (for Android)
npx cap open ios (for iOS)
```

That's it! You have successfully integrated the Capacitor Jitsi Meet package into your app. You can now join and host Jitsi Meet conferences directly from your mobile app.

In this tutorial, we have learned how to install and use the Capacitor Jitsi Meet package. We have also covered the integration steps and how to build and run your app. Now you can enhance your app's functionality by adding Jitsi Meet video conferences.

Happy coding!

Please note that this tutorial is based on the current version of Capacitor Jitsi Meet package, and some steps or configurations may change in future releases. Make sure to refer to the official documentation for updates and additional features.