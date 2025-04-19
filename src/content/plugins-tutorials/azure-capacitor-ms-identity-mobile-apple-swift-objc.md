---
title: "Using adal-azure-ios-plugin for Azure Capacitor MS Identity Mobile Apple Swift Objective-C"
description: "A step-by-step tutorial on how to use the adal-azure-ios-plugin package for Azure Capacitor MS Identity Mobile Apple Swift Objective-C. This tutorial will guide you through the installation process and configuring your application for authentication."
created_at: "2022-09-26"
published: true
slug: "azure-capacitor-ms-identity-mobile-apple-swift-objc"
---

# Using adal-azure-ios-plugin for Azure Capacitor MS Identity Mobile Apple Swift Objective-C

In this tutorial, we will walk you through the process of using the adal-azure-ios-plugin package for Azure Capacitor MS Identity Mobile Apple Swift Objective-C. The adal-azure-ios-plugin package provides support for integrating Azure Active Directory authentication into your iOS applications built with Capacitor.

## Prerequisites

Before you begin, ensure you have the following:

- Xcode installed on your machine
- An internet connection

## Step 1: Clone or Download the Repository

To get started, clone or download the repository containing the adal-azure-ios-plugin package. You can do this by running the following command in the Terminal:

```bash
git clone https://github.com/bhandaribhumin/azure-capacitor-ms-identity-mobile-apple-swift-objc
```

Alternatively, you can download the repository as a ZIP file and extract it to a local directory.

## Step 2: Install Dependencies

Next, navigate to the project directory in the Terminal and install the required dependencies by running the following command:

```bash
npm install adal-azure-ios-plugin --save
```

This will install the adal-azure-ios-plugin package and save it as a dependency in your project's `package.json` file.

## Step 3: Configure Application

Before running the sample application, you need to configure it with your Azure Active Directory app registration.

### 3A: Register your App

If you haven't already registered an app in Azure Active Directory, follow these steps to create a new app registration:

1. Sign in to the [Azure portal](https://portal.azure.com) using your work or school account.
2. In the left-hand navigation pane, select **Azure Active Directory** and then **App registrations**.
3. Click the **New registration** button at the top left of the page.
4. Name your app and select the appropriate account types under **Supported account types**.
5. Click **Register** to create the app.
6. On the app management page, take note of the **Application (client) ID** as you will need it later.

### 3B: Update Redirect URI Scheme

To configure the redirect URI scheme for your application, follow these steps:

1. Open the `Info.plist` file in your Xcode project.
2. Locate the section `<key>CFBundleURLTypes</key>` and add the following code inside the `<array>` element:

```xml
<dict>
    <key>CFBundleURLSchemes</key>
    <array>
        <string>msauth.[app_bundle_id]</string>
    </array>
</dict>
```

Replace `[app_bundle_id]` with the **Bundle Identifier** for your application.

### 3C: Configure Application Defaults

In your Xcode project, open the `ViewControler.swift` file and update the `kClientID` variable with the **Application (client) ID** you obtained in step 3A.

```swift
let kClientID = "<client_id>"
```

## Step 4: Run the Sample Application

Now that you have configured your application, you can run the sample application to test the integration of the adal-azure-ios-plugin package.

Open the `MSALiOS.xcworkspace` file in Xcode and click the **Run** button in the toolbar to build and run the application on a simulator or a connected device.

## Conclusion

In this tutorial, we have covered the steps required to use the adal-azure-ios-plugin package for Azure Capacitor MS Identity Mobile Apple Swift Objective-C. You have learned how to install the package, configure your application, and run the sample application.

With the adal-azure-ios-plugin package, you can easily add Azure Active Directory authentication to your iOS applications built with Capacitor. This enables secure and seamless authentication for