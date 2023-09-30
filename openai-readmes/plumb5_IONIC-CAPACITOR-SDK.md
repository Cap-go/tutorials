# plumb5-sdk

Plumb5 sdk capacitor plugin

## Install

```bash
npm install plumb5-sdk
ionic cap sync
```

## Change the package name in capacitor.config.ts

- Add plugin object with PLUMB5_ACCOUNT_ID, PLUMB5_BASE_URL & PLUMB5_API_KEY

- Change Package name with appId object
- Change App name with App name object

```typescript
import { CapacitorConfig } from '@capacitor/cli'

const config: CapacitorConfig = {
  appId: <code>string</code>,
  appName: <code>string</code>,
  webDir: 'www',
  bundledWebRuntime: false,
  plugins: {
    Plumb5: {
      PLUMB5_ACCOUNT_ID: <code>number</code>,
      PLUMB5_BASE_URL: <code>string</code>,
      PLUMB5_API_KEY: <code>string</code>,
    },
  },
}

export default config
```

## Initialize Plumb5 SDK

```typescript
/* eslint-disable @typescript-eslint/naming-convention */
import { Component } from '@angular/core'

import { Plumb5 } from 'plumb5-sdk'

import { Platform } from '@ionic/angular'

import { Router, NavigationStart, ActivatedRoute, Navigation } from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private router: Router,
    private pageParameter: ActivatedRoute,
  ) {
    this.platform.ready().then(() => {
      this.Plumb5()
    })
  }

  Plumb5() {
    //initialize the sdk
    Plumb5.initializePlumb5()

    //initialize the sdk page tracking and in-app notfication
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        console.log(event)

        Plumb5.tracking({
          ScreenName: event.url,
          PageParameter: '',
        })

        Plumb5.pushResponse({
          ScreenName: event.url,
          PageParameter: '',
        })
      }
    })

    //user details
    Plumb5.setUserDetails({
      Name: 'demo',
      EmailId: 'guru@demo.com',
      PhoneNumber: '987654321',
      LeadType: 1,
      Gender: 'Male',
      Age: '2020-01-27T06:12:01.051Z',
      AgeRange: '10-89',
      MaritalStatus: 'Married',
      Education: 'MCA',
      Occupation: 'SE',
      Interests: 'Eating',
      Location: 'Bangalore',
    })

    //Capture PushNotification Data and route navigation from notfication
    window.addEventListener('onPushNotification', (e: any) => {
      console.log('onPushNotification')
      console.log(JSON.stringify(e))
      const routeUrl = e.routeUrl
      console.log('routeUrl', routeUrl) // similar parameter in case of route or button click
      this.router.navigate([routeUrl])
    })

    //Event post of any kond of component
    Plumb5.eventPost({
      Type: 'Button',
      Name: 'demo@demo.com',
      PhoneNumber: '987654321',
      Value: 1,
    })
  }
}
```

## Add Android platform

```bash
ionic cap add android

```

## Integrating Firebase googleService JSON

Your Android package name should match the appId from your capacitor.capacitor.config file
We used com.mydomain.myappname for this Capacitor app ID, so that is what we'll use for this entry.

Download the google-services.json file to your local machine. Then move the file into your Capacitor Android project directory, specifically under android/app/.

![Firebase](https://capacitorjs.com/docs/assets/images/google-services-location-android-1b89340513696453eb62085eef9b40d8.png)

## Update the credtional

Add the details in AndroidManifest.xml file

Add the details under <application> tag

```bash
      <meta-data android:name="PLUMB5_ACCOUNT_ID" android:value="---Account Id------" />
      <meta-data android:name="PLUMB5_API_KEY" android:value="---App Key------" />
      <meta-data android:name="PLUMB5_BASE_URL" android:value="---Base URL------" />
```

## Update the changes

```bash
ionic cap sync
```

## Run the App

Run/Build the apllication in android studio

```bash
ionic cap open android
```

##Note
To recive notfication when app is
-App in foreground
-App in background
-App has been killed

Please add this service in app manifiest and check the service avilablity

```xml
<service android:name="com.getcapacitor.CapacitorFirebaseMessagingService" android:exported="false"> <intent-filter> <action android:name="com.google.firebase.MESSAGING_EVENT" /> </intent-filter> </service>
```

## Add Ios platform

```bash
ionic cap add ios
```

## Update the credtional

Add Information Property List Files under

![Ios](https://developer.apple.com/library/archive/documentation/General/Reference/InfoPlistKeyReference/Art/xcode_infoplist_editor_2x.png)

Add the details

```bash
  "PLUMB5_ACCOUNT_ID"  = "---Account Id------"
  "PLUMB5_API_KEY" = "---App Key------"
  "PLUMB5_BASE_URL" = "---Base URL------"
```

## Integrating Firebase GoogleService-Info.plist

Your iOS bundle ID should match the appId from your capacitor.capacitor.config file
We used com.mydomain.myappname for this Capacitor app ID, so that is what we'll use for this entry.

Download the GoogleService-Info.plist provided to your local machine.

```bash
ionic cap open ios
```

Move the .plist file into your Xcode project as instructed by Firebase, ensuring to add it to all targets.

![Firebase](https://capacitorjs.com/docs/assets/images/google-plist-location-ios-d809634deabea911f5370c9a861052d5.png)

## Add the Firebase SDK via CocoaPods

The Push Notification API on iOS makes use of CocoaPods - an iOS dependency management system - and we need to tell CocoaPods to make use of Firebase.

To do this, we need to modify the Podfile, which can be found in Xcode under Pods:

![Firebase SDK](https://capacitorjs.com/docs/assets/images/podfile-location-ios-342b27c94af4ddc839e7e3caa85482fb.png)
We need to add Firebase to the CocoaPods provided for our App target. To do that, add pod Firebase/Messaging to your target 'App' section, like so:

```bash
  target 'App' do
  capacitor_pods
  # Add your Pods here
  pod 'Firebase/Messaging' # Add this line
end
```

Update the Project

```bash
ionic cap update ios
```

## Add Firebase Initialization Code

To connect to Firebase when your iOS app starts up, you need to add the following to your AppDelegate.swift file.

```bash

import Capacitor
import Firebase
import Plumb5Sdk
import UIKit

@UIApplicationMain
class AppDelegate: UIResponder, UIApplicationDelegate {
    var window: UIWindow?
    public weak var plugin: CAPPlugin?

    func application(_: UIApplication, didFinishLaunchingWithOptions _: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
        // Override point for customization after application launch.

        FirebaseApp.configure()

        return true
    }

    func application(_: UIApplication, didRegisterForRemoteNotificationsWithDeviceToken deviceToken: Data) {
        Messaging.messaging().apnsToken = deviceToken
        Messaging.messaging().token(completion: { token, error in
            if let error = error {
                NotificationCenter.default.post(name: .capacitorDidFailToRegisterForRemoteNotifications, object: error)
            } else if let token = token {
                NotificationCenter.default.post(name: .capacitorDidRegisterForRemoteNotifications, object: token)
            }
        })
    }

    func application(_: UIApplication, didFailToRegisterForRemoteNotificationsWithError error: Error) {
        NotificationCenter.default.post(name: .capacitorDidFailToRegisterForRemoteNotifications, object: error)
    }

    func application(
        _: UIApplication,
        didReceiveRemoteNotification userInfo: [AnyHashable: Any],
        fetchCompletionHandler _: @escaping (UIBackgroundFetchResult) -> Void
    ) {
        let data = userInfo["data"]

        P5PushNotificationsHandler().pushData(type: "view", btnName: "", P5UniqueId: userInfo["P5UniqueId"] as! String, WorkFlowDataId: userInfo["workflowdataId"] as! String)
    }
}

```

## Add a notification service extension

### Step-1. Add File

From Xcode top menu go to: File > New > Target...

A modal will present a list of possible targets, scroll down or use the filter to select Notification Service Extension. Press Next.

Add a product name (use ImageNotification to follow along) and click Finish

Enable the scheme by clicking Activate
![Firebase Extension](https://rnfirebase.io/assets/docs/messaging/ios-notification-images-step-1.gif)

### Step-2. Add required code

Modify the code of the Notification Service Extension to replace the whole contents of NotificationService.swift

```bash



import UIKit
import UserNotifications

public enum MediaType: String {
    case image
    case gif
    case video
    case audio
}

private struct Media {
    private var data: Data
    private var ext: String
    private var type: MediaType

    init(forMediaType mediaType: MediaType, withData data: Data, fileExtension ext: String) {
        type = mediaType
        self.data = data
        self.ext = ext

    }

    var attachmentOptions: [String: Any?] {
        switch type {
        case .image:
            return [UNNotificationAttachmentOptionsThumbnailClippingRectKey: CGRect(x: 0.0, y: 0.0, width: 1.0, height: 0.50).dictionaryRepresentation]
        case .gif:
            return [UNNotificationAttachmentOptionsThumbnailTimeKey: 0]
        case .video:
            return [UNNotificationAttachmentOptionsThumbnailTimeKey: 0]
        case .audio:
            return [UNNotificationAttachmentOptionsThumbnailHiddenKey: 1]
        }
    }

    var fileIdentifier: String {
        return type.rawValue
    }

    var fileExt: String {
        if ext.count > 0 {
            return ext
        } else {
            switch type {
            case .image:
                return "jpg"
            case .gif:
                return "gif"
            case .video:
                return "mp4"
            case .audio:
                return "mp3"
            }
        }
    }

    var mediaData: Data? {
        return data
    }
}

// @available(iOSApplicationExtension 10.0, *)
private extension UNNotificationAttachment {
    static func create(fromMedia media: Media) -> UNNotificationAttachment? {
        let fileManager = FileManager.default
        let tmpSubFolderName = ProcessInfo.processInfo.globallyUniqueString
        let tmpSubFolderURL = URL(fileURLWithPath: NSTemporaryDirectory()).appendingPathComponent(tmpSubFolderName, isDirectory: true)
        do {
            try fileManager.createDirectory(at: tmpSubFolderURL, withIntermediateDirectories: true, attributes: nil)
            let fileIdentifier = "\(media.fileIdentifier).\(media.fileExt)"
            let fileURL = tmpSubFolderURL.appendingPathComponent(fileIdentifier)

            guard let data = media.mediaData else {
                return nil
            }

            try data.write(to: fileURL)
            return create(fileIdentifier: fileIdentifier, fileUrl: fileURL, options: media.attachmentOptions as [String: Any])
        } catch {
            print("error " + error.localizedDescription)
        }
        return nil
    }

    static func create(fileIdentifier: String, fileUrl: URL, options: [String: Any]? = nil) -> UNNotificationAttachment? {
        var n: UNNotificationAttachment?
        do {
            n = try UNNotificationAttachment(identifier: fileIdentifier, url: fileUrl, options: options)
        } catch {
            print("error " + error.localizedDescription)
        }
        return n
    }
}

private func resourceURL(forUrlString urlString: String) -> URL? {
    return URL(string: urlString)
}

private func loadAttachment(forMediaType mediaType: MediaType, withUrlString urlString: String, completionHandler: (UNNotificationAttachment?) -> Void) {
    guard let url = resourceURL(forUrlString: urlString) else {
        completionHandler(nil)
        return
    }

    do {
        let data = try Data(contentsOf: url)
        let media = Media(forMediaType: mediaType, withData: data, fileExtension: url.pathExtension)
        if let attachment = UNNotificationAttachment.create(fromMedia: media) {
            completionHandler(attachment)
            return
        }
        completionHandler(nil)
    } catch {
        print("error " + error.localizedDescription)
        completionHandler(nil)
    }
}

class NotificationService: UNNotificationServiceExtension {
    var contentHandler: ((UNNotificationContent) -> Void)?
    var bestAttemptContent: UNMutableNotificationContent?

    override func didReceive(_ request: UNNotificationRequest, withContentHandler contentHandler: @escaping (UNNotificationContent) -> Void) {
        self.contentHandler = contentHandler
        bestAttemptContent = (request.content.mutableCopy() as? UNMutableNotificationContent)

        registerCategory(data: request.content.userInfo)
        if let bestAttemptContent = bestAttemptContent {
            // Modify the notification content here...

            let userInfo = bestAttemptContent.userInfo
            // check for a media attachment
            if (userInfo["attachment_url"] as? String) != "" {
                guard

                    let url = userInfo["attachment_url"] as? String,
                    let _mediaType = userInfo["media_type"] as? String,
                    let mediaType = MediaType(rawValue: _mediaType)
                else {
                    contentHandler(bestAttemptContent)
                    return
                }

                loadAttachment(forMediaType: mediaType, withUrlString: url, completionHandler: { attachment in
                    if let attachment = attachment {
                        bestAttemptContent.attachments = [attachment]
                    }

                    contentHandler(bestAttemptContent)
                })
            }
        }
    }

    override func serviceExtensionTimeWillExpire() {
        // Called just before the extension will be terminated by the system.
        // Use this as an opportunity to deliver your "best attempt" at modified content, otherwise the original push payload will be used.
        if let contentHandler = contentHandler, let bestAttemptContent = bestAttemptContent {
            contentHandler(bestAttemptContent)
        }
    }

    func registerCategory(data: [AnyHashable: Any]) {
        let title: String = (data["title"] as! String).replacingOccurrences(of: "~A~", with: "&")
        let message: String = (data["message"] as! String).replacingOccurrences(of: "~A~", with: "&")
        let workflowdataId: String = (data["workflowdataId"] as! String)
        let P5UniqueId: String = (data["P5UniqueId"] as! String)
        let nExtraAction: String = (data["extraaction"] as! String)
        let nclkAction: String = (data["clickaction"] as! String)
        let atitle: [String] = (title.components(separatedBy: "^"))

        if nExtraAction != "" {


            var pushAction: [PushNotificationCategory] = []
            var pushButtonn: [PushNotificationAction] = []
            if nExtraAction.count > 0 {
                let btnText: [String] = nExtraAction.components(separatedBy: "|")
                for obj in btnText {
                    if obj != "" {
                        let bValue: [String] = obj.components(separatedBy: "^")
                        let bName: String = bValue[0]
                        //                    let bImageId:String = bValue[1]
                        let bAction: String = bValue[2]
                        let bParm: String = bValue[3]
                        //                    let bExtra:String = bValue[4]
                        let bIdentifier: String = "btn" + "^" + bAction + "^" + bParm
                        pushButtonn.append(PushNotificationAction(button_title: bName, identifier: bIdentifier))
                    }
                }
                pushAction.append(PushNotificationCategory(name: "P5pushAction", pushAction: pushButtonn))
                registerPushNotificationCategories(categories: pushAction) { t in
                    print(t)
                }
            }
        }
    }

    func registerPushNotificationCategories(categories: [PushNotificationCategory]?, completionHandler: @escaping (Bool) -> Void) {
        guard let categories = categories else {
            if #available(iOS 10.0, *) {
                let notificationCategories = Set<UNNotificationCategory>()
                UNUserNotificationCenter.current().setNotificationCategories(notificationCategories)
            } else {
                // Fallback on earlier versions
            }
            return
        }
        if #available(iOS 10.0, *) {
            var notificationCategories = Set<UNNotificationCategory>()
            for category in categories {
                var actionList = [UNNotificationAction]()
                for action in category.pushActions! {
                    let action = UNNotificationAction(identifier: action.identifier!, title: action.button_title!, options: [.foreground])
                    actionList.append(action)
                }
                let category = UNNotificationCategory(identifier: category.name!, actions: actionList, intentIdentifiers: [], options: [])
                notificationCategories.insert(category)
            }
            UNUserNotificationCenter.current().setNotificationCategories(notificationCategories)
            UNUserNotificationCenter.current().getNotificationCategories(completionHandler: { _ in
                completionHandler(true)
            })
        } else {}
    }
}

struct PushNotificationCategory {
    var name: String?
    var pushActions: [PushNotificationAction]?

    init(name: String?, pushAction: [PushNotificationAction]?) {
        self.name = name
        pushActions = pushAction
    }
}

struct PushNotificationAction: Codable {
    var button_title: String?
    var identifier: String?

    init(button_title: String?, identifier: String?) {
        self.button_title = button_title
        self.identifier = identifier
    }
}

```

### Step-3. Add background mode

You need to make sure BackgroundModes is added (little + to the left of Capability) and then check Remote Notifications
![Firebase Extension](https://www.themoyles.co.uk/wp-content/uploads/2019/11/background-push.png)

## API

<docgen-index>

- [`addListener('onPushNotification', ...)`](#addlisteneronpushnotification)
- [`initializePlumb5()`](#initializeplumb5)
- [`deviceRegistration()`](#deviceregistration)
- [`setUserDetails(...)`](#setuserdetails)
- [`notificationSubscribe()`](#notificationsubscribe)
- [`tracking(...)`](#tracking)
- [`pushResponse(...)`](#pushresponse)
- [`eventPost(...)`](#eventpost)
- [`register()`](#register)
- [`getDeliveredNotifications()`](#getdeliverednotifications)
- [`removeDeliveredNotifications(...)`](#removedeliverednotifications)
- [`removeAllDeliveredNotifications()`](#removealldeliverednotifications)
- [`createChannel(...)`](#createchannel)
- [`deleteChannel(...)`](#deletechannel)
- [`listChannels()`](#listchannels)
- [`checkPermissions()`](#checkpermissions)
- [`requestPermissions()`](#requestpermissions)
- [`addListener('registration', ...)`](#addlistenerregistration)
- [`addListener('registrationError', ...)`](#addlistenerregistrationerror)
- [`addListener('pushNotificationReceived', ...)`](#addlistenerpushnotificationreceived)
- [`addListener('pushNotificationActionPerformed', ...)`](#addlistenerpushnotificationactionperformed)
- [`removeAllListeners()`](#removealllisteners)
- [Interfaces](#interfaces)
- [Type Aliases](#type-aliases)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### addListener('onPushNotification', ...)

```typescript
addListener(eventName: 'onPushNotification', listenerFunc: (data: { routeUrl: string; }) => void) => PluginListenerHandle
```

| Param              | Type                                                  |
| ------------------ | ----------------------------------------------------- |
| **`eventName`**    | <code>'onPushNotification'</code>                     |
| **`listenerFunc`** | <code>(data: { routeUrl: string; }) =&gt; void</code> |

**Returns:** <code><a href="#pluginlistenerhandle">PluginListenerHandle</a></code>

---

### initializePlumb5()

```typescript
initializePlumb5() => Promise<void>
```

---

### deviceRegistration()

```typescript
deviceRegistration() => Promise<void>
```

---

### setUserDetails(...)

```typescript
setUserDetails(options: UserOptions) => Promise<void>
```

| Param         | Type                                                |
| ------------- | --------------------------------------------------- |
| **`options`** | <code><a href="#useroptions">UserOptions</a></code> |

---

### notificationSubscribe()

```typescript
notificationSubscribe() => Promise<void>
```

---

### tracking(...)

```typescript
tracking(options: { ScreenName: string; PageParameter: any; }) => Promise<void>
```

| Param         | Type                                                     |
| ------------- | -------------------------------------------------------- |
| **`options`** | <code>{ ScreenName: string; PageParameter: any; }</code> |

---

### pushResponse(...)

```typescript
pushResponse(options: { ScreenName: string; PageParameter: any; }) => Promise<void>
```

| Param         | Type                                                     |
| ------------- | -------------------------------------------------------- |
| **`options`** | <code>{ ScreenName: string; PageParameter: any; }</code> |

---

### eventPost(...)

```typescript
eventPost(options: EventDetails) => Promise<void>
```

| Param         | Type                                                  |
| ------------- | ----------------------------------------------------- |
| **`options`** | <code><a href="#eventdetails">EventDetails</a></code> |

---

### register()

```typescript
register() => Promise<void>
```

Register the app to receive push notifications.

This method will trigger the `'registration'` event with the push token or
`'registrationError'` if there was a problem. It does not prompt the user for
notification permissions, use `requestPermissions()` first.

**Since:** 1.0.0

---

### getDeliveredNotifications()

```typescript
getDeliveredNotifications() => Promise<DeliveredNotifications>
```

Get a list of notifications that are visible on the notifications screen.

**Returns:** <code>Promise&lt;<a href="#deliverednotifications">DeliveredNotifications</a>&gt;</code>

**Since:** 1.0.0

---

### removeDeliveredNotifications(...)

```typescript
removeDeliveredNotifications(delivered: DeliveredNotifications) => Promise<void>
```

Remove the specified notifications from the notifications screen.

| Param           | Type                                                                      |
| --------------- | ------------------------------------------------------------------------- |
| **`delivered`** | <code><a href="#deliverednotifications">DeliveredNotifications</a></code> |

**Since:** 1.0.0

---

### removeAllDeliveredNotifications()

```typescript
removeAllDeliveredNotifications() => Promise<void>
```

Remove all the notifications from the notifications screen.

**Since:** 1.0.0

---

### createChannel(...)

```typescript
createChannel(channel: Channel) => Promise<void>
```

Create a notification channel.

Only available on Android O or newer (SDK 26+).

| Param         | Type                                        |
| ------------- | ------------------------------------------- |
| **`channel`** | <code><a href="#channel">Channel</a></code> |

**Since:** 1.0.0

---

### deleteChannel(...)

```typescript
deleteChannel(args: { id: string; }) => Promise<void>
```

Delete a notification channel.

Only available on Android O or newer (SDK 26+).

| Param      | Type                         |
| ---------- | ---------------------------- |
| **`args`** | <code>{ id: string; }</code> |

**Since:** 1.0.0

---

### listChannels()

```typescript
listChannels() => Promise<ListChannelsResult>
```

List the available notification channels.

Only available on Android O or newer (SDK 26+).

**Returns:** <code>Promise&lt;<a href="#listchannelsresult">ListChannelsResult</a>&gt;</code>

**Since:** 1.0.0

---

### checkPermissions()

```typescript
checkPermissions() => Promise<PermissionStatus>
```

Check permission to receive push notifications.

On Android the status is always granted because you can always
receive push notifications. If you need to check if the user allows
to display notifications, use local-notifications plugin.

**Returns:** <code>Promise&lt;<a href="#permissionstatus">PermissionStatus</a>&gt;</code>

**Since:** 1.0.0

---

### requestPermissions()

```typescript
requestPermissions() => Promise<PermissionStatus>
```

Request permission to receive push notifications.

On Android it doesn't prompt for permission because you can always
receive push notifications.

On iOS, the first time you use the function, it will prompt the user
for push notification permission and return granted or denied based
on the user selection. On following calls it will get the current status of
the permission without prompting again.

**Returns:** <code>Promise&lt;<a href="#permissionstatus">PermissionStatus</a>&gt;</code>

**Since:** 1.0.0

---

### addListener('registration', ...)

```typescript
addListener(eventName: 'registration', listenerFunc: (token: Token) => void) => Promise<PluginListenerHandle> & PluginListenerHandle
```

Called when the push notification registration finishes without problems.

Provides the push notification token.

| Param              | Type                                                        |
| ------------------ | ----------------------------------------------------------- |
| **`eventName`**    | <code>'registration'</code>                                 |
| **`listenerFunc`** | <code>(token: <a href="#token">Token</a>) =&gt; void</code> |

**Returns:** <code>Promise&lt;<a href="#pluginlistenerhandle">PluginListenerHandle</a>&gt; & <a href="#pluginlistenerhandle">PluginListenerHandle</a></code>

**Since:** 1.0.0

---

### addListener('registrationError', ...)

```typescript
addListener(eventName: 'registrationError', listenerFunc: (error: RegistrationError) => void) => Promise<PluginListenerHandle> & PluginListenerHandle
```

Called when the push notification registration finished with problems.

Provides an error with the registration problem.

| Param              | Type                                                                                |
| ------------------ | ----------------------------------------------------------------------------------- |
| **`eventName`**    | <code>'registrationError'</code>                                                    |
| **`listenerFunc`** | <code>(error: <a href="#registrationerror">RegistrationError</a>) =&gt; void</code> |

**Returns:** <code>Promise&lt;<a href="#pluginlistenerhandle">PluginListenerHandle</a>&gt; & <a href="#pluginlistenerhandle">PluginListenerHandle</a></code>

**Since:** 1.0.0

---

### addListener('pushNotificationReceived', ...)

```typescript
addListener(eventName: 'pushNotificationReceived', listenerFunc: (notification: PushNotificationSchema) => void) => Promise<PluginListenerHandle> & PluginListenerHandle
```

Called when the device receives a push notification.

| Param              | Type                                                                                                 |
| ------------------ | ---------------------------------------------------------------------------------------------------- |
| **`eventName`**    | <code>'pushNotificationReceived'</code>                                                              |
| **`listenerFunc`** | <code>(notification: <a href="#pushnotificationschema">PushNotificationSchema</a>) =&gt; void</code> |

**Returns:** <code>Promise&lt;<a href="#pluginlistenerhandle">PluginListenerHandle</a>&gt; & <a href="#pluginlistenerhandle">PluginListenerHandle</a></code>

**Since:** 1.0.0

---

### addListener('pushNotificationActionPerformed', ...)

```typescript
addListener(eventName: 'pushNotificationActionPerformed', listenerFunc: (notification: ActionPerformed) => void) => Promise<PluginListenerHandle> & PluginListenerHandle
```

Called when an action is performed on a push notification.

| Param              | Type                                                                                   |
| ------------------ | -------------------------------------------------------------------------------------- |
| **`eventName`**    | <code>'pushNotificationActionPerformed'</code>                                         |
| **`listenerFunc`** | <code>(notification: <a href="#actionperformed">ActionPerformed</a>) =&gt; void</code> |

**Returns:** <code>Promise&lt;<a href="#pluginlistenerhandle">PluginListenerHandle</a>&gt; & <a href="#pluginlistenerhandle">PluginListenerHandle</a></code>

**Since:** 1.0.0

---

### removeAllListeners()

```typescript
removeAllListeners() => Promise<void>
```

Remove all native listeners for this plugin.

**Since:** 1.0.0

---

### Interfaces

#### PluginListenerHandle

| Prop         | Type                                      |
| ------------ | ----------------------------------------- |
| **`remove`** | <code>() =&gt; Promise&lt;void&gt;</code> |

#### UserOptions

| Prop                | Type                |
| ------------------- | ------------------- |
| **`Name`**          | <code>string</code> |
| **`EmailId`**       | <code>string</code> |
| **`PhoneNumber`**   | <code>string</code> |
| **`LeadType`**      | <code>number</code> |
| **`Gender`**        | <code>string</code> |
| **`Age`**           | <code>string</code> |
| **`AgeRange`**      | <code>string</code> |
| **`MaritalStatus`** | <code>string</code> |
| **`Education`**     | <code>string</code> |
| **`Occupation`**    | <code>string</code> |
| **`Interests`**     | <code>string</code> |
| **`Location`**      | <code>string</code> |

#### EventDetails

| Prop              | Type                |
| ----------------- | ------------------- |
| **`Type`**        | <code>string</code> |
| **`Name`**        | <code>string</code> |
| **`PhoneNumber`** | <code>string</code> |
| **`Value`**       | <code>number</code> |

#### DeliveredNotifications

| Prop                | Type                                  | Description                                                         | Since |
| ------------------- | ------------------------------------- | ------------------------------------------------------------------- | ----- |
| **`notifications`** | <code>PushNotificationSchema[]</code> | List of notifications that are visible on the notifications screen. | 1.0.0 |

#### PushNotificationSchema

| Prop               | Type                 | Description                                                                                                          | Since |
| ------------------ | -------------------- | -------------------------------------------------------------------------------------------------------------------- | ----- |
| **`title`**        | <code>string</code>  | The notification title.                                                                                              | 1.0.0 |
| **`subtitle`**     | <code>string</code>  | The notification subtitle.                                                                                           | 1.0.0 |
| **`body`**         | <code>string</code>  | The main text payload for the notification.                                                                          | 1.0.0 |
| **`id`**           | <code>string</code>  | The notification identifier.                                                                                         | 1.0.0 |
| **`tag`**          | <code>string</code>  | The notification tag. Only available on Android (from push notifications).                                           | 4.0.0 |
| **`badge`**        | <code>number</code>  | The number to display for the app icon badge.                                                                        | 1.0.0 |
| **`notification`** | <code>any</code>     | It's not being returned.                                                                                             | 1.0.0 |
| **`data`**         | <code>any</code>     | Any additional data that was included in the push notification payload.                                              | 1.0.0 |
| **`click_action`** | <code>string</code>  | The action to be performed on the user opening the notification. Only available on Android.                          | 1.0.0 |
| **`link`**         | <code>string</code>  | Deep link from the notification. Only available on Android.                                                          | 1.0.0 |
| **`group`**        | <code>string</code>  | Set the group identifier for notification grouping. Only available on Android. Works like `threadIdentifier` on iOS. | 1.0.0 |
| **`groupSummary`** | <code>boolean</code> | Designate this notification as the summary for an associated `group`. Only available on Android.                     | 1.0.0 |

#### Channel

| Prop              | Type                                              | Description                                                                                                                                                                                                                                                | Default          | Since |
| ----------------- | ------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------- | ----- |
| **`id`**          | <code>string</code>                               | The channel identifier.                                                                                                                                                                                                                                    |                  | 1.0.0 |
| **`name`**        | <code>string</code>                               | The human-friendly name of this channel (presented to the user).                                                                                                                                                                                           |                  | 1.0.0 |
| **`description`** | <code>string</code>                               | The description of this channel (presented to the user).                                                                                                                                                                                                   |                  | 1.0.0 |
| **`sound`**       | <code>string</code>                               | The sound that should be played for notifications posted to this channel. Notification channels with an importance of at least `3` should have a sound. The file name of a sound file should be specified relative to the android app `res/raw` directory. |                  | 1.0.0 |
| **`importance`**  | <code><a href="#importance">Importance</a></code> | The level of interruption for notifications posted to this channel.                                                                                                                                                                                        | <code>`3`</code> | 1.0.0 |
| **`visibility`**  | <code><a href="#visibility">Visibility</a></code> | The visibility of notifications posted to this channel. This setting is for whether notifications posted to this channel appear on the lockscreen or not, and if so, whether they appear in a redacted form.                                               |                  | 1.0.0 |
| **`lights`**      | <code>boolean</code>                              | Whether notifications posted to this channel should display notification lights, on devices that support it.                                                                                                                                               |                  | 1.0.0 |
| **`lightColor`**  | <code>string</code>                               | The light color for notifications posted to this channel. Only supported if lights are enabled on this channel and the device supports it. Supported color formats are `#RRGGBB` and `#RRGGBBAA`.                                                          |                  | 1.0.0 |
| **`vibration`**   | <code>boolean</code>                              | Whether notifications posted to this channel should vibrate.                                                                                                                                                                                               |                  | 1.0.0 |

#### ListChannelsResult

| Prop           | Type                   | Description                                   | Since |
| -------------- | ---------------------- | --------------------------------------------- | ----- |
| **`channels`** | <code>Channel[]</code> | List of all the Channels created by your app. | 1.0.0 |

#### PermissionStatus

| Prop          | Type                                                        | Description                                  | Since |
| ------------- | ----------------------------------------------------------- | -------------------------------------------- | ----- |
| **`receive`** | <code><a href="#permissionstate">PermissionState</a></code> | Permission state of receiving notifications. | 1.0.0 |

#### Token

| Prop        | Type                | Description                                                              | Since |
| ----------- | ------------------- | ------------------------------------------------------------------------ | ----- |
| **`value`** | <code>string</code> | On iOS it contains the APNS token. On Android it contains the FCM token. | 1.0.0 |

#### RegistrationError

| Prop        | Type                | Description                                        | Since |
| ----------- | ------------------- | -------------------------------------------------- | ----- |
| **`error`** | <code>string</code> | Error message describing the registration failure. | 4.0.0 |

#### ActionPerformed

| Prop               | Type                                                                      | Description                                                     | Since |
| ------------------ | ------------------------------------------------------------------------- | --------------------------------------------------------------- | ----- |
| **`actionId`**     | <code>string</code>                                                       | The action performed on the notification.                       | 1.0.0 |
| **`inputValue`**   | <code>string</code>                                                       | Text entered on the notification action. Only available on iOS. | 1.0.0 |
| **`notification`** | <code><a href="#pushnotificationschema">PushNotificationSchema</a></code> | The notification in which the action was performed.             | 1.0.0 |

### Type Aliases

#### Importance

The importance level. For more details, see the [Android Developer Docs](https://developer.android.com/reference/android/app/NotificationManager#IMPORTANCE_DEFAULT)

<code>1 | 2 | 3 | 4 | 5</code>

#### Visibility

The notification visibility. For more details, see the [Android Developer Docs](https://developer.android.com/reference/androidx/core/app/NotificationCompat#VISIBILITY_PRIVATE)

<code>-1 | 0 | 1</code>

#### PermissionState

<code>'prompt' | 'prompt-with-rationale' | 'granted' | 'denied'</code>

</docgen-api>
# plumb5-sdk
