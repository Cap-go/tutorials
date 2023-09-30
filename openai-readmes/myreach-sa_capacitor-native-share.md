# @[rea.ch](https://rea.ch)/capacitor-native-share

Converts a native share to a js event.

## Install

In order to use this library, first add it to your project by:

```bash
npm install @rea.ch/capacitor-native-share --save
```

or

```bash
yarn add @rea.ch/capacitor-native-share
```

## Web

There are two methods that can be used to obtain the shared items:

- **`getLastSharedItems`**: Returns a promise that resolves in the last items shared to the app. The idea behind this is to use it as soon as the app is initialized.

- **`addListener`**: Emits every time the app receives a share **only if the listener was registered before receiving the shared**.

### Example

```typescript
import { NativeShare } from '@rea.ch/capacitor-native-share';

// ...

public onAppInitialization(): void {
	NativeShare.getLastSharedItems()
		.then(this.handleShare.bind(this))
		.catch(console.error);

	NativeShare.addListener(
		NativeShareEventType.SHARE_RECEIVED,
		this.handleShare.bind(this)
	);
}

private handleShare(share: NativeShareShareReceived): void {
	// ...
}
```

## Android

Edit your android's **`AndroidManifest.xml`** file with the types that you want to handle ([ref](https://developer.android.com/guide/components/intents-filters#Receiving)):

```xml
<!-- Single share -->
<intent-filter>
	<action android:name="android.intent.action.SEND" />

	<category android:name="android.intent.category.DEFAULT" />
	<category android:name="android.intent.category.BROWSABLE" />

	<!-- Any type of data -->
	<data android:mimeType="*/*" />
</intent-filter>

<!-- multiple share -->
<intent-filter>
	<action android:name="android.intent.action.SEND_MULTIPLE" />

	<category android:name="android.intent.category.DEFAULT" />
	<category android:name="android.intent.category.BROWSABLE" />

	<!-- Any type of data -->
	<data android:mimeType="*/*" />
</intent-filter>
```

## iOS

There are some special setup that needs to be done in iOS:

### App Extension

[Create an App Share Extension](https://developer.apple.com/library/archive/documentation/General/Conceptual/ExtensibilityPG/ExtensionCreation.html#//apple_ref/doc/uid/TP40014214-CH5-SW1).

### App Group

[Create an App Group](https://medium.com/macoclock/data-sharing-between-app-and-app-extensions-4ffd95bf87e0) so the extension and the app can share data.

### Modify your Podfile

You need to modify your **`Podfile`** to include a library to your extension:

```diff
...
target 'App' do
  capacitor_pods
  # Add your Pods here
end

+ target 'YOUR_SHARE_EXTENSION_NAME' do
+   # We need this to override the extension class
+   pod 'Rea.chCapacitorNativeShare', :path => '../../node_modules/@rea.ch/capacitor-share-extension'
+ end

```

### Override extension class

Extend the class `NativeShareExtension` in your extension's **`ShareViewController.swift`** and:

1. override the function `getContainerAppUrlExtension` so it returns your App's Url Scheme ([tutorial](https://developer.apple.com/documentation/xcode/defining-a-custom-url-scheme-for-your-app)).

2. override the function `getAppGroupIdentifier` so it returns yout extension and app's `App Group`'s name.

```swift
import UIKit
import Social
import MobileCoreServices
import ReachCapacitorNativeShare

class ShareViewController: NativeShareExtension {
    override func getContainerAppUrlExtension() -> String {
        return "ReachCapacitorNativeShareExample"
    }

    override func getAppGroupIdentifier() -> String {
        return "group.ch.rea.plugins.nativeshareexample"
    }
}
```

### Override AppDelegate class

Modify your **`AppDelegate.swift`** with the following

```swift
import ReachCapacitorNativeShare

// ...

@UIApplicationMain
class AppDelegate: UIResponder, UIApplicationDelegate {

    // ...

    var store: NativeShareStore = NativeShareStore.store

	// ...

	func applicationWillTerminate(_ application: UIApplication) {
        NativeShareDelegateUtils.cleanTemporalFolder( appGroupName: "YOUR_APP_GROUP_NAME" )
    }

    func application(_ app: UIApplication, open url: URL, options: [UIApplication.OpenURLOptionsKey: Any] = [:]) -> Bool {
        let success: Bool = ApplicationDelegateProxy.shared.application(app, open: url, options: options)

        let nativeShareHandlerSuccess = NativeShareDelegateUtils.handleApplicationUrl(app: app, url: url, store: store)

        return success && nativeShareHandlerSuccess
    }

	// ...
}

```

### Common errors

#### sharedApplication is unavailable

> 'sharedApplication' is unavailable: not available on iOS (App Extension) - Use view controller based solutions where appropriate instead.

Uncheck the Pods targets `Capacitor` and `CapacitorCordova`'s `Allow app extension API only` option after every `cap sync` or `pod install`. [ref](https://stackoverflow.com/a/49770189)

## API

<docgen-index>

- [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### Interfaces

#### NativeShareGetItemsOptions

| Prop             | Type                 | Description                                                                                                                               |
| ---------------- | -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| **`autoRemove`** | <code>boolean</code> | Whether to remove the share event so if you call {@link NativeSharePlugin.getLastSharedItems} again it will return void. Default: `true`. |

#### NativeShareShareReceived

| Prop         | Type                                                                            |
| ------------ | ------------------------------------------------------------------------------- |
| **`items`**  | <code>{ [idx: string]: <a href="#nativeshareitem">NativeShareItem</a>; }</code> |
| **`length`** | <code>number</code>                                                             |

#### NativeShareItem

| Prop           | Type                | Description                                |
| -------------- | ------------------- | ------------------------------------------ |
| **`text`**     | <code>string</code> | The text shared. It can also be a website. |
| **`uri`**      | <code>string</code> | The uri (path) to the shared file.         |
| **`mimeType`** | <code>string</code> | The mimeType of the shared file.           |

</docgen-api>

## Alternatives

This library is based on these two libraries that handles the share in a similar way:

- [carsten-klaffke/send-intent](https://github.com/carsten-klaffke/send-intent)
- [marwonline/capacitor-share-target](https://github.com/marwonline/capacitor-share-target)
