---
title: "Using capacitor-installed-via-altstore package"
description: "This tutorial will guide you on how to use the capacitor-installed-via-altstore package to install Capacitor plugins via AltStore."
created_at: "2022-01-01"
published: true
slug: "capacitor-installed-via-altstore"
---

# Using capacitor-installed-via-altstore package

AltStore is an alternative app store for iOS devices that allows you to self-sign and install apps. The capacitor-installed-via-altstore package provides a way to install Capacitor plugins directly through AltStore. This tutorial will walk you through the installation process and demonstrate how to use the package.

## Installation

To get started, make sure you have AltStore installed on your iOS device. AltStore can be downloaded from the official website. Once you have AltStore installed, follow these steps:

1. Open your Ionic Capacitor project.

2. Install the capacitor-installed-via-altstore package using npm or yarn:

   ```bash
   npm install capacitor-installed-via-altstore
   ```

   This will add the package as a dependency in your project.

3. Run the sync command to synchronize your project with native code:

   ```bash
   npx cap sync
   ```

   This will ensure that the necessary configuration files are generated.

4. Generate the AltStore configuration file:

   ```bash
   npx cap altstore configure
   ```

   This will create a `altstore.json` file in the root of your project.

## Usage

Once you have installed and configured the capacitor-installed-via-altstore package, you can use it to install Capacitor plugins via AltStore. Here's how you can do it:

1. Open the `altstore.json` file generated in the previous step.

2. Add the plugin details to the `plugins` array. Each plugin should have a `source` and `name` property. The `source` property should be the URL to the plugin's IPA file, and the `name` property should be the name of the plugin you want to install.

   ```json
   {
     "plugins": [
       {
         "source": "https://example.com/plugin1.ipa",
         "name": "Plugin 1"
       },
       {
         "source": "https://example.com/plugin2.ipa",
         "name": "Plugin 2"
       }
     ]
   }
   ```

   You can add as many plugins as you want to the array.

3. Save the `altstore.json` file.

4. Build your Ionic Capacitor project:

   ```bash
   ionic build
   ```

5. Sync your project with native code:

   ```bash
   npx cap sync
   ```

6. Open AltStore on your iOS device.

7. Go to the "My Apps" tab and select your app.

8. Tap on the "Update" button next to your app's name. This will install the plugins specified in the `altstore.json` file.

9. Once the installation is complete, you can use the installed plugins in your Capacitor project.

And that's it! You have successfully installed Capacitor plugins via AltStore using the capacitor-installed-via-altstore package. Enjoy experimenting with new plugins and enhancing your app with additional functionality!

Remember to consult the official documentation of the capacitor-installed-via-altstore package for any additional features or advanced usage instructions.