# capacitor-swipe-back

Enable the back/forward swipe gestures support for iOS

## Install

```
npm install capacitor-swipe-back
npx cap sync
```

## Swiping without this plugin

this only enable swipe back. U can't control behavior in runtime

```swift
# AppDelegate.swift

func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
    // other code

    // capacitor v4
    bridge.webview?.allowsBackForwardNavigationGestures = true;

    // capacitor v3
    bridge.getWebView()?.allowsBackForwardNavigationGestures = true;

    return true
}

```

## Methods

### enable()

Enable the back/forward swipe gestures support for iOS

```
import { IosSwipeBackPlugin } from 'capacitor-swipe-back'

await IosSwipeBackPlugin.enable()
```

### disable()

Disable the back/forward swipe gestures support for iOS

```
import { IosSwipeBackPlugin } from 'capacitor-swipe-back'

await IosSwipeBackPlugin.disable()
```

## PR welcomed
