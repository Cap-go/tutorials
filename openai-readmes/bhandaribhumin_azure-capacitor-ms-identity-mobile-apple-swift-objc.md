# azure-capacitor-ms-identity-mobile-apple-swift-objc

https://github.com/bhandaribhumin/azure-capacitor-ms-identity-mobile-apple-swift-objc

REF: copy from https://github.com/Azure-Samples/ms-identity-mobile-apple-swift-objc

## How to run this sample

To run this sample, you'll need:

- Xcode
- An internet connection

## Step 1:

## 1A: Clone or download this repository

From Terminal:

```bash
npm install adal-azure-ios-plugin --save
git clone https://github.com/bhandaribhumin/azure-capacitor-ms-identity-mobile-apple-swift-objc
```

or download and extract the repository.zip file, and navigate to 'MSALiOS.xcworkspace' from the active-directory-ios-swift-native-v2 folder

## 1B: Installation

Load the podfile using cocoapods. This will create a new XCode Workspace you will load.

From terminal navigate to the directory where the podfile is located

```
$ pod install
...
$ open MSALiOS.xcworkspace
```

## Step 2: (Optional)

## 2A: Register your App

This app comes pre-configured for testing. If you would like to register your own app, please follow the steps below.

To Register an app:

1. Sign in to the [Azure portal](https://portal.azure.com) using either a work or school account.
2. In the left-hand navigation pane, select the **Azure Active Directory** blade, and then select **App registrations**.
3. Click on the **New registration** button at the top left of the page.
4. On the app registration page,
   - Name your app
   - Under **Supported account types**, select **Accounts in any organizational directory (Any Azure AD directory - Multitenant) and personal Microsoft accounts (e.g. Skype, Xbox)**
   - Click **Register** to finish.
5. After the app is created, you'll land on your app management page. Take note of the **Application (client) ID** as this would be needed for the step 2B below.
6. Click **Authentication**, and add new Redirect URI with type **Public client (mobile & desktop)**. Enter redirect URI in format: `msauth.<app_bundle_id>://auth`. Replace <app_bundle_id> with the **Bundle Identifier** for your application.
7. Hit the **Save** button in the top left, to save these updates.

## 2B: Configure your application

1. Update your application's redirect URI scheme in the `Info.plist` file by replacing `msauth.com.microsoft.identitysample.MSALiOS` . Redirect URI scheme follows the format `msauth.[app_bundle_id]`. Make sure to substitue [app_bundle_id] with the **Bundle Identifier** for your application.

```xml
<key>CFBundleURLTypes</key>
<array>
  <dict>
    <key>CFBundleURLSchemes</key>
    <array>
      <string>msauth.[app_bundle_id]</string>
    </array>
  </dict>
</array>
```

2. Configure your application defaults

In the `ViewControler.swift` file, update the `kClientID` variable with your Application (client) ID.

```swift
    // Update the client ID below with the one you received in the portal. Below ID is for running the sample app only.

    let kClientID = "66855f8a-60cd-445e-a9bb-8cd8eadbd3fa"
```
