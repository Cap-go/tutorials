---
title: "Using the PPI Device Binding Package"
description: "This tutorial will guide you through the process of using the PPI Device Binding package in your application. You will learn how to integrate the package, access device information, and utilize its functionalities."
created_at: "2021-09-23"
published: true
slug: "ppi-device-binding"
---

# Using the PPI Device Binding Package

In this tutorial, we will walk you through the steps of using the PPI Device Binding package in your application. This package allows you to access various device information, such as the device model, operating system version, battery level, and more. By leveraging this package, you can enhance your app's functionality by providing personalized experiences, optimizing performance, and making device-specific adjustments.

## Prerequisites

Before we get started, ensure that you have the following set up:

- Node.js and npm installed on your development machine
- A development environment for your target platform (e.g., Xcode for iOS, Android Studio for Android)

## Step 1: Create a Capacitor Project

If you don't already have a Capacitor project set up, you can create one using the following command:

```bash
npx @capacitor/create <project-name>
```

Replace `<project-name>` with the desired name for your project.

## Step 2: Install the PPI Device Binding Package

Once you have your project set up, navigate to the project's root directory and install the PPI Device Binding package using npm or yarn:

```bash
npm install ppi-device-binding
```

or

```bash
yarn add ppi-device-binding
```

## Step 3: Integrate the Package

After the installation is complete, you need to integrate the package into your project. Follow these platform-specific instructions:

### iOS

1. In Xcode, open your project workspace by navigating to the `ios` directory and opening the `.xcworkspace` file.
2. Inside Xcode, locate your project's root folder in the Project Navigator.
3. Right-click on the root folder and select **Add Files to "[Your Project Name]"**.
4. Navigate to the `node_modules/ppi-device-binding/ios` directory and select the `.xcodeproj` file.
5. Click **Add** to add the package to your project.
6. In the Project Navigator, select your app target, go to the **General** tab, and scroll down to **Frameworks, Libraries, and Embedded Content**.
7. Make sure the PPI Device Binding framework is listed with the **Embedded** option selected.

### Android

1. In Android Studio, open your project by navigating to the `android` directory and selecting the `build.gradle` file.
2. Inside the `dependencies` block, add the following line:

```groovy
implementation project(':ppi-device-binding')
```

3. Sync your project with Gradle by clicking on the **Sync Now** button.

## Step 4: Access Device Information

You are now ready to access device information using the PPI Device Binding package. Here is an example of how to retrieve the device model:

```typescript
import { Device } from 'ppi-device-binding';

// Inside your component or module

const deviceModel = Device.getModel();
console.log('Device Model:', deviceModel);
```

The `getModel()` function returns the device model as a string. You can explore other functions available in the package for retrieving different device information.

## Step 5: Utilize Package Functionalities

In addition to retrieving device information, the PPI Device Binding package offers various functionalities such as vibration, battery level monitoring, network status detection, and more. Here's an example of how to vibrate the device:

```typescript
import { Device } from 'ppi-device-binding';

// Inside your component or module

Device.vibrate(); // Vibrate the device
```

You can explore the package's documentation to learn more about its available functionalities and how to utilize them in your app.

## Conclusion

Congratulations! You have successfully integrated and utilized the PPI Device Binding package in your Capacitor app. By accessing device information and utilizing the package's functionalities, you can enhance your app's user experience and optimize its performance for different devices. Remember to refer to the package's documentation for more detailed instructions and explore its full potential in your application.

We hope you found this tutorial helpful. Happy coding!

---

Please note that the code examples provided in this tutorial are for illustrative purposes and may need to be adapted to your specific project structure and requirements. For more detailed instructions and information, refer to the package's documentation and official resources.