# Using @charliecat/capacitor-plugin-siri-shorts

This tutorial will guide you through the process of using the `@charliecat/capacitor-plugin-siri-shorts` package to donate and remove Siri Shortcuts in your Capacitor app.

## Prerequisites

Before you begin, make sure you have the following:

- Xcode 10 or higher
- iOS 12 or higher

## Installation

To install the package, run the following command:

```sh
npm install @charliecat/capacitor-plugin-siri-shorts
```

## Setup

### iOS Project Setup

1. Open your iOS project in Xcode.

2. Open the `Info.plist` file of your project.

3. Inside the `NSUserActivityTypes` array, add a new item with your Bundle Identifier followed by `.shortcut`. For example, if your Bundle Identifier is `com.myapp`, the item should be `$(PRODUCT_BUNDLE_IDENTIFIER).shortcut`.

   ```xml
   <key>NSUserActivityTypes</key>
   <array>
       ...
       <string>$(PRODUCT_BUNDLE_IDENTIFIER).shortcut</string>
       ...
   </array>
   ```

4. Open the `AppDelegate.swift` file of your project.

5. Expand the `application(_:continue:restorationHandler:)` method and add the following line before the return statement:

   ```swift
   NotificationCenter.default.post(Notification(name: Notification.Name(rawValue: "appLaunchBySiriShortcuts"), object: userActivity, userInfo: userActivity.userInfo))
   ```

   The method should now look like this:

   ```swift
   func application(_ application: UIApplication, continue userActivity: NSUserActivity, restorationHandler: @escaping ([UIUserActivityRestoring]?) -> Void) -> Bool {
       ...
       NotificationCenter.default.post(Notification(name: Notification.Name(rawValue: "appLaunchBySiriShortcuts"), object: userActivity, userInfo: userActivity.userInfo))
       return CAPBridge.handleContinueActivity(userActivity, restorationHandler)
   }
   ```

## Usage

### Importing the Plugin

Import the `SiriShortcuts` plugin in your component file:

```typescript
import { Plugins } from '@capacitor/core';

const { SiriShortcuts } = Plugins;
```

### Donating a Shortcut

To donate a shortcut, use the `donate` method with the desired options:

```typescript
const data = {
  persistentIdentifier: 'myShortcut',
  title: 'My Shortcut',
  suggestedInvocationPhrase: 'Open my app',
  isEligibleForSearch: true,
  userInfo: { deeplink: 'home' },
  isEligibleForPrediction: true,
};

SiriShortcuts.donate(data)
  .then(() => {
    console.log('Shortcut donated successfully');
  })
  .catch((error) => {
    console.error('Failed to donate shortcut:', error);
  });
```

### Removing a Shortcut

To remove a shortcut, use the `remove` method with the persistent identifier of the shortcut:

```typescript
const persistentIdentifier = 'myShortcut';

SiriShortcuts.remove({ persistentIdentifier })
  .then(() => {
    console.log('Shortcut removed successfully');
  })
  .catch((error) => {
    console.error('Failed to remove shortcut:', error);
  });
```

## Listening for Shortcut Launch

To listen for when the app is launched by a Siri Shortcut, add a listener for the `'appLaunchBySiriShortcuts'` event:

```typescript
SiriShortcuts.addListener('appLaunchBySiriShortcuts', (data) => {
  console.log('App launched by Siri Shortcut:', data);
});
```

Make sure to add this listener in a suitable place, such as the `initializeApp` method of your app component.

## Conclusion

Congratulations! You have successfully learned how to use the `@charliecat/capacitor-plugin-siri-shorts` package to donate and remove Siri Shortcuts in your Capacitor app. You can now enhance your app's functionality by integrating with Siri Shortcuts.