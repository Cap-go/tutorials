---
title: "Using ng-agora-capacitor package"
description: "A tutorial on how to use the ng-agora-capacitor package to integrate Capacitor and Agora SDK"
created_at: "2021-10-07"
published: true
slug: "capacitor-agora-sdk"
---

# Using ng-agora-capacitor package

In this tutorial, we will learn how to integrate the Agora SDK with Capacitor using the ng-agora-capacitor package. This package provides a bridge between the Agora SDK and Capacitor, allowing you to easily add real-time communication features to your Ionic applications.

## Prerequisites

Before we begin, make sure you have the following prerequisites installed:

1. Node.js and npm
2. Ionic CLI
3. Capacitor CLI
4. ng-agora-capacitor package

## Step 1: Create a new Ionic project

First, let's create a new Ionic project. Open your terminal and run the following command:

```bash
ionic start my-app blank
```

This will create a new Ionic project with a blank template.

## Step 2: Install ng-agora-capacitor package

Next, let's install the ng-agora-capacitor package. Run the following command in your terminal:

```bash
npm install ng-agora-capacitor
```

This will install the package and its dependencies in your project.

## Step 3: Configure Agora SDK

To use the Agora SDK, you need to obtain an App ID from the Agora Console. Sign up for an account and create a new project to get your App ID.

Once you have the App ID, open the `capacitor.config.json` file in your project's root directory and add the following configuration:

```json
{
  "plugins": {
    "Agora": {
      "appId": "YOUR_APP_ID"
    }
  }
}
```

Replace `YOUR_APP_ID` with your actual App ID.

## Step 4: Initialize Agora SDK

Now, let's initialize the Agora SDK in your Ionic app. Open the `src/app/app.component.ts` file and add the following code:

```typescript
import { Component, OnInit } from '@angular/core';
import { Plugins } from '@capacitor/core';

@Component({
  selector: 'app-root',
  template: '<ion-app></ion-app>'
})
export class AppComponent implements OnInit {

  ngOnInit() {
    const { Agora } = Plugins;
    Agora.initialize();
  }

}
```

This code imports the necessary dependencies and initializes the Agora SDK.

## Step 5: Implement Agora features

Now that we have the Agora SDK set up, we can start implementing Agora features in our app. The ng-agora-capacitor package provides various methods and components for managing real-time communication.

For example, to create a video call feature, you can use the `AgoraVideoComponent`. Place this component in your template and configure it with the necessary settings.

```html
<ion-content>
  <ng-agora-video [channelName]="'my-channel'"></ng-agora-video>
</ion-content>
```

This code creates a video call with the channel name "my-channel". You can customize it according to your needs.

## Step 6: Build and run the app

Finally, let's build and run the app on a device or emulator. Run the following commands in your terminal:

```bash
ionic build
npx cap sync
npx cap open android
```

Replace `android` with `ios` if you want to run the app on iOS. This will open your app in Android Studio or Xcode, where you can build and run it.

Congratulations! You have successfully integrated the Agora SDK with Capacitor using the ng-agora-capacitor package. You can now enhance your Ionic app with real-time communication features.

That's it! Thank you for reading this tutorial.