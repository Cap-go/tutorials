```markdown
---
"title": "How to Use capacitor-launch-native Package"
"description": "Step-by-step guide on integrating and utilizing the capacitor-launch-native package in your Capacitor app."
"created_at": "2022-09-15"
"published": true
"slug": "capacitor-launch-native.git"
---

# Step-by-Step Tutorial: Using the capacitor-launch-native Package

In this blog, we will walk you through the process of integrating and leveraging the capacitor-launch-native package in your Capacitor app.

## Installation of capacitor-launch-native Package

1. **Using NPM:**
   Run the following command to install the capacitor-launch-native package:
   ~~~
   npm install capacitor-launch-native
   ~~~

## Usage of capacitor-launch-native Package

1. **Importing the Plugin:**
   Import the capacitor-launch-native plugin in your project:
   ~~~typescript
   import 'capacitor-launch-native';
   ~~~

2. **Launching a URL:**
   Utilize the `openUrl` method to launch a URL in the device's default browser:
   ~~~typescript
   import { LaunchNative } from 'capacitor-launch-native';

   // Launch the specified URL
   LaunchNative.openUrl({ url: 'https://www.example.com' });
   ~~~

3. **Launching an App:**
   Use the `openApp` method to launch a specific app on the device:
   ~~~typescript
   import { LaunchNative } from 'capacitor-launch-native';

   // Launch the specified app
   LaunchNative.openApp({ packageName: 'com.example.myapp' });
   ~~~

By following these steps, you can seamlessly integrate the capacitor-launch-native package into your Capacitor project and utilize its functionality.
```