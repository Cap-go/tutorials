---
title: "Using the ionic-capacitor-mdns Package"
description: "A tutorial on how to use the ionic-capacitor-mdns package to enable mDNS functionality in your Ionic Capacitor app."
created_at: "2021-03-15"
published: true
slug: "mdns-ionic-capacitor"
---

# Using the ionic-capacitor-mdns Package

In this tutorial, we will learn how to use the `ionic-capacitor-mdns` package to enable mDNS functionality in your Ionic Capacitor app. 

## Step 1: Install the Package

To get started, we need to install the `ionic-capacitor-mdns` package. Open your terminal or command prompt and navigate to your project directory. Run the following command:

```
npm install ionic-capacitor-mdns --save
```

## Step 2: Import and Initialize the Plugin

Next, we need to import and initialize the `ionic-capacitor-mdns` plugin in our Ionic Capacitor app. Open your `app.component.ts` file and add the following code:

```typescript
import 'capacitor-mdns';

import { Component } from '@angular/core';
import { Plugins } from '@capacitor/core';

const { CapacitorMdns } = Plugins;

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {

  constructor() {
    this.initializeApp();
  }

  async initializeApp() {
    // Initialize the mDNS plugin
    await CapacitorMdns.initialize();
  }
}
```

## Step 3: Start and Stop mDNS Discovery

Now that the plugin is initialized, we can start and stop mDNS discovery. Add the following code to your app's component where you want to use mDNS functionality:

```typescript
import { Plugins } from '@capacitor/core';

const { CapacitorMdns } = Plugins;

// Start mDNS discovery
async function startMdnsDiscovery() {
  try {
    const serviceName = '_http._tcp'; // Replace with your desired service name
    const foundServices = await CapacitorMdns.startMdnsDiscovery({ serviceName });
    console.log('Found services:', foundServices);

    // Do something with the found services
  } catch (error) {
    console.error('Error starting mDNS discovery:', error);
  }
}

// Stop mDNS discovery
async function stopMdnsDiscovery() {
  try {
    await CapacitorMdns.stopMdnsDiscovery();
    console.log('mDNS discovery stopped');
  } catch (error) {
    console.error('Error stopping mDNS discovery:', error);
  }
}
```

Replace `'_http._tcp'` with your desired service name. The `startMdnsDiscovery()` function will start mDNS discovery and return the found services. You can then perform actions based on the discovered services. The `stopMdnsDiscovery()` function will stop the mDNS discovery.

## Step 4: Build and Run the App

Finally, build and run your Ionic Capacitor app to test the mDNS functionality. Use the following command to build the app:

```
npx cap build
```

After the build is successful, run the app on your desired platform:

```
npx cap open android
```

or

```
npx cap open ios
```

Congratulations! You have successfully learned how to use the `ionic-capacitor-mdns` package to enable mDNS functionality in your Ionic Capacitor app.

Remember to refer to the [official documentation](https://github.com/ionic-team/capacitor) for more information and advanced usage of Capacitor and its plugins.