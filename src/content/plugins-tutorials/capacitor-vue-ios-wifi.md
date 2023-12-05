---
title: "Using @alexanderwodarz/wifi-plugin in Capacitor Vue for iOS"
description: "Learn how to use the @alexanderwodarz/wifi-plugin package in a Capacitor Vue project on iOS to manage Wi-Fi connections."
created_at: "2021-10-20"
published: true
slug: "capacitor-vue-ios-wifi"
---

# Using @alexanderwodarz/wifi-plugin in Capacitor Vue for iOS

In this tutorial, we will learn how to use the @alexanderwodarz/wifi-plugin package in a Capacitor Vue project on iOS. The plugin allows you to manage Wi-Fi connections in your application. We will walk through the installation process and how to use the plugin to connect to Wi-Fi networks.

## Prerequisites

Before we begin, make sure you have the following installed:

- Node.js
- Vue CLI
- Capacitor

## Installation

1. Create a new Capacitor Vue project:
   ```bash
   vue create my-capacitor-vue-app
   ```

2. Navigate to your project directory:
   ```bash
   cd my-capacitor-vue-app
   ```

3. Install the @alexanderwodarz/wifi-plugin package:
   ```bash
   npm install @alexanderwodarz/wifi-plugin
   ```

4. Sync the Capacitor project with your app:
   ```bash
   npx cap sync
   ```

## Usage

1. Import the plugin in your Vue component:
   ```javascript
   import { Plugins } from '@capacitor/core';

   const { WifiPlugin } = Plugins;
   ```

2. Connect to a Wi-Fi network using the SSID and password:
   ```javascript
   const ssid = 'MyWiFiNetwork';
   const password = 'MyPassword';

   WifiPlugin.connect({ ssid, password })
     .then(() => {
       // Connected successfully
       console.log('Connected to Wi-Fi network');
     })
     .catch((error) => {
       // Error connecting to Wi-Fi network
       console.error('Error connecting to Wi-Fi network:', error);
     });
   ```

3. Disconnect from the current Wi-Fi network:
   ```javascript
   WifiPlugin.disconnect()
     .then(() => {
       // Disconnected successfully
       console.log('Disconnected from Wi-Fi network');
     })
     .catch((error) => {
       // Error disconnecting from Wi-Fi network
       console.error('Error disconnecting from Wi-Fi network:', error);
     });
   ```

4. Get the current Wi-Fi network information:
   ```javascript
   WifiPlugin.getCurrentWiFiNetwork()
     .then((network) => {
       // Wi-Fi network information
       console.log('Current Wi-Fi network:', network);
     })
     .catch((error) => {
       // Error getting Wi-Fi network information
       console.error('Error getting Wi-Fi network information:', error);
     });
   ```

## Conclusion

In this tutorial, we learned how to use the @alexanderwodarz/wifi-plugin package in a Capacitor Vue project on iOS. We covered the installation process and demonstrated how to connect to a Wi-Fi network, disconnect from a network, and get the current Wi-Fi network information. With this plugin, you can easily manage Wi-Fi connections in your Capacitor Vue app.

Remember to consult the plugin's documentation for more advanced features and options.

Happy coding!