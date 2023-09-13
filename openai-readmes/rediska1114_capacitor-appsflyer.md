# Capacitor AppsFlyer plugin for Android and iOS

Currently only works on ios, but android support will be coming soon

# Available methods:

- `initSdk()`
- `setCurrencyCode()`
- `setСustomerUserID()`
- `anonymizeUser()`
- `setIsStopped()`
- `getAppsFlyerUID()`
- `logEvent()`
- `getSdkVersion()`
- `setAppInviteOneLinkID()`
- `generateInviteLink()`
- `logCrossPromotionImpression()`
- `logCrossPromotionAndOpenStore()`
- `setSharingFilter()`
- `setSharingFilterForAllPartners()`
- `disableCollectASA()`
- `setDisableAdvertisingIdentifier()`
- `setOneLinkCustomDomains()`
- `enableFacebookDeferredApplinks()`
- `setPhoneNumber()`
- `setUserEmails()`
- `validateAndLogInAppPurchase()`
- `setUseReceiptValidationSandbox()`
- `setHost()`
- `addPushNotificationDeepLinkPath()`
- `setResolveDeepLinkURLs()`
- `disableSKAD()`

# Usage example:

0. In `AppDelegate.swift` (usually `ios/App/App/AppDelegate.swift`)

```swift
...
import AppsFlyerLib

@UIApplicationMain
class AppDelegate: UIResponder, UIApplicationDelegate {
  var window: UIWindow?

...

  func applicationDidBecomeActive(_: UIApplication) {
    Appsflyer.shared.applicationDidBecomeActive()
  }

...

  func application(_ app: UIApplication, open url: URL, options: [UIApplication.OpenURLOptionsKey: Any] = [:]) -> Bool {
    ...
	  Appsflyer.shared.application(open: url, options: options)
    ...
  }

...

  func application(_: UIApplication, continue userActivity: NSUserActivity, restorationHandler: @escaping ([UIUserActivityRestoring]?) -> Void) -> Bool {
   	...
    Appsflyer.shared.application(continue: userActivity, restorationHandler: restorationHandler)
    ...
	}

...

  func application(_: UIApplication, didReceiveRemoteNotification userInfo: [AnyHashable: Any]) {
    Appsflyer.shared.application(didReceiveRemoteNotification: userInfo)
  }

...

  func application(_: UIApplication, didRegisterForRemoteNotificationsWithDeviceToken deviceToken: Data) {
   ...
    Appsflyer.shared.application(didRegisterForRemoteNotificationsWithDeviceToken: deviceToken)
   ...
  }

...
}

```

1. In your module (e.g. `app.module.ts`)

```ts
...
import { Appsflyer } from 'capacitor-appsflyer'

@NgModule({
	...
	providers: [
		...
		Appsflyer,
	],
})
export class AppModule {}

```

2. In your main component (e.g. `app.component.ts`)

```ts
...
import { Appsflyer } from 'capacitor-appsflyer'

@Component()
export class AppComponent {
	constructor(private appsflyer: Appsflyer) {
        this.platform
			.ready()
			.then(() => {
                this.appsflyer.addListener('onConversionDataSuccess', (data) => {
					console.log('AppsflyerPlugin onConversionDataSuccess', data)
				})
        this.appsflyer.initSdk('YOUR_APPSFLYER_DEV_KEY', '1234556', { waitForATTUserAuthorization: 150 })
        })
    }
}

```

## BREAKING CHANGES in 2.x.x version

- Add support for Capacitor 5

- Remove automatic initialization of the SDK. Now you need to call `initSdk()` method manually.

## BREAKING CHANGES in 1.x.x version

- AppsFlyer proxy-class has been removed.

  ### Migrate:

  In `ios/App/App/AppDelegate.swift`, update the following:

```diff
func applicationDidBecomeActive(_: UIApplication) {
-    Appsflyer.shared.applicationDidBecomeActive()
+    AppsFlyerLib.shared().start()
}

  func application(_ app: UIApplication, open url: URL, options: [UIApplication.OpenURLOptionsKey: Any] = [:]) -> Bool {
-     Appsflyer.shared.application(open: url, options: options)
+     AppsFlyerLib.shared().handleOpen(url, options: options)

      return ApplicationDelegateProxy.shared.application(app, open: url, options: options)
  }


  func application(_ app: UIApplication, continue userActivity: NSUserActivity, restorationHandler: @escaping ([UIUserActivityRestoring]?) -> Void) -> Bool {
-   Appsflyer.shared.application(continue: userActivity, restorationHandler: restorationHandler)
+   AppsFlyerLib.shared().continue(userActivity, restorationHandler: nil)

    return ApplicationDelegateProxy.shared.application(app, continue: userActivity, restorationHandler: restorationHandler)
  }

  func application(_: UIApplication, didReceiveRemoteNotification userInfo: [AnyHashable: Any], fetchCompletionHandler completionHandler: @escaping (UIBackgroundFetchResult) -> Void) {
-      Appsflyer.shared.application(didReceiveRemoteNotification: userInfo)
+      AppsFlyerLib.shared().handlePushNotification(userInfo)
  }

    func application(_: UIApplication, didRegisterForRemoteNotificationsWithDeviceToken deviceToken: Data)
    {
-    Appsflyer.shared.application(didRegisterForRemoteNotificationsWithDeviceToken: deviceToken)
+   AppsFlyerLib.shared().registerUninstall(deviceToken)
    NotificationCenter.default.post(name: .capacitorDidRegisterForRemoteNotifications, object: deviceToken)
  }
```

- Added full support for Capacitor 3 and removed compatibility with Capacitor 2

// TODO docs
