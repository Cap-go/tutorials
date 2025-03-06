---
"title": "Guide on Using @microblink/blinkcard-capacitor Package",
"description": "This blog post will guide you through the process of using the @microblink/blinkcard-capacitor package to add AI-driven credit card scanning software to your Capacitor iOS or Android apps.",
"created_at": "2023-10-07",
"published": true,
"slug": "blinkcard-capacitor-git"
---

# Guide on Using @microblink/blinkcard-capacitor Package

The @microblink/blinkcard-capacitor package provides easy integration of AI-driven credit card scanning software for cross-platform apps built with Capacitor. In this tutorial, we will walk through the necessary steps to add BlinkCard to your Capacitor iOS or Android app.

## Minimum Software Requirements

Before getting started, ensure you have the following software requirements in place:

- Capacitor version 3.2.0
- iOS 12.0 or newer
- Android 5.0 (API level 21) or newer

### Getting Started

1. If necessary, create an empty project using the following command:
   
   ```shell
   ionic start project_name --capacitor
   ```

2. Install the @microblink/blinkcard-capacitor package:
   
   ```shell
   npm install --save @microblink/blinkcard-capacitor
   ```

### Quick Start with Sample App

To quickly get started with the BlinkCard plugin, you can generate a minimal sample application. Run the `./initIonicSampleApp.sh` script and follow the instructions below:

#### iOS

- Open the app in Xcode by running:
  ```shell
  npx cap open ios
  ```
- Update the info.plist file and add the following permission:
  - Privacy - Camera Usage Description: To Take Photos and Video
- Set your Team in the `Signing & Capabilities` settings
- Press `Run` to build and run the app

#### Android

- Run the app by executing:
  ```shell
  npx cap run android
  ```

### Plugin Usage

1. Import the blinkcard-capacitor package in your code:
   
   ```typescript
   import * as BlinkCard from '@microblink/blinkcard-capacitor'
   ```

2. Initialize the plugin:
   
   ```typescript
   const plugin = new BlinkCard.BlinkCardPlugin()
   ```

3. To perform scanning, call the method `plugin.scanWithCamera()` and provide the desired RecognizerCollection, OverlaySettings, and license keys. For more information on licensing, refer to the documentation.

   ```typescript
   async scan() {
   	// Initialize the plugin
   	const plugin = new BlinkCard.BlinkCardPlugin();
   
   	// Initialize the recognizer
   	const blinkCardRecognizer = new BlinkCard.BlinkCardRecognizer();
   	blinkCardRecognizer.returnFullDocumentImage = true;
   	// Add any additional configurations as needed
   }
```

This guide outlines the basic steps to integrate the @microblink/blinkcard-capacitor package and perform credit card scanning in your Capacitor app. For a more in-depth understanding of the features and functionalities, refer to the official documentation.