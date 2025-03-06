# capacitor-marketingcloud

MarketingCloud Capacitor Plugin

[![CircleCI](https://circleci.com/gh/okode/capacitor-marketingcloud/tree/main.svg?style=svg)](https://circleci.com/gh/okode/capacitor-marketingcloud/tree/main)

## Install

```bash
npm install @okode/capacitor-marketingcloud
npx cap sync
```

## Publish

Ensure you are athenticated in NPM.js using `npm login`

```bash
npm ci
npm run build
npm version [VERSION] -m "Bumped version %s [ci skip]"
git tag [VERSION]
git push
git push --tags
npm publish --access public
```


## Previous steps

This plugin is built to be used along side with the official [Capacitor Push Notifications plugin](https://capacitorjs.com/docs/apis/push-notifications). Therefore, first of all, you must configure your project following the plugin instructions. This implementation approach avoid us to reimplement all logic that this official plugin already implements. For example, the developer will have to request the permission for push notifications by using Push Notifications plugin API.


## iOS

Initialize SFMC in the `application(:didFinishLaunchingWithOptions)` method of your `AppDelegate.swift`. Example:

```swift
func application(_ application: UIApplication,
  didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?
) -> Bool {
  let appId = "APP_ID"
  let token = "TOKEN"
  let serverUrl = "SERVER_URL"
  let isAnalyticsEnabled = true // true | false
  MarketingCloud.initialize(appId, token, serverUrl, isAnalyticsEnabled)
  return true
}
```

Send push token to SFMC in the `application(:didRegisterForRemoteNotificationsWithDeviceToken)` method of your `AppDelegate.swift`. Example:

```swift
func application(_ application: UIApplication, didRegisterForRemoteNotificationsWithDeviceToken deviceToken: Data) {
  NotificationCenter.default.post(name: .capacitorDidRegisterForRemoteNotifications, object: deviceToken) // Documented in Capacitor Push Notifications plugin integration
  MarketingCloud.setPushToken(deviceToken)
}
```

Note: check the official Marketing Cloud SDK [documentation](https://salesforce-marketingcloud.github.io/MarketingCloudSDK-iOS/get-started/get-started-setupapps.html) to know how to get the configuration values.

## Android

Initialize SFMC in the `onCreate` method of your Android application class. If you don't have one, create it and reference it in your `AndroidManifest.xml`. Example:

```java
public class MyApp extends Application {

  @Override
  public void onCreate() {
    super.onCreate();
    String appId = "APP_ID";
    String token = "TOKEN";
    String serverUrl = "SERVER_URL";
    boolean isAnalyticsEnabled = true; // true | false
    MarketingCloud.Companion.initialize(
      getApplicationContext(),
      appId,
      token,
      serverUrl,
      isAnalyticsEnabled,
      initializationStatus -> Unit.INSTANCE
    );
  }

}
```
Note: check the official Marketing Cloud SDK [documentation](https://salesforce-marketingcloud.github.io/MarketingCloudSDK-Android/create-apps/create-apps-overview.html) to know how to get the configuration values.

Implement your custom FirebaseMessagingService to send push token to SFMC and also handling SFMC push notifications with the plugin. Example:
```java
public class MyAppFirebaseMessagingService extends FirebaseMessagingService {

  @Override
  public void onNewToken(String newToken) {
    super.onNewToken(newToken);
    MarketingCloud.Companion.setPushToken(newToken);
    PushNotificationsPlugin.onNewToken(newToken);
  }

  @Override
  public void onMessageReceived(RemoteMessage remoteMessage) {
    super.onMessageReceived(remoteMessage);
    if (MarketingCloud.Companion.isMarketingCloudNotification(remoteMessage)) {
      MarketingCloud.Companion.showNotification(remoteMessage, res -> Unit.INSTANCE);
    } else {
      // Handle any notification sent from other notifications broker
    }
    PushNotificationsPlugin.sendRemoteMessage(remoteMessage);
  }

}
```
And register it in your `AndroidManifest.xml`. Example:
```xml
  <application...>
    ...
    <service android:name="com.okode.myapp.MyAppFirebaseMessagingService" android:stopWithTask="false">
      <intent-filter android:priority="9999">
        <action android:name="com.google.firebase.MESSAGING_EVENT" />
      </intent-filter>
    </service>
    ...
  </application>
```

### Notification icon

Configure your notification icon by setting the resource name in your `strings.xml`:
```xml
<?xml version='1.0' encoding='utf-8'?>
<resources>
  ...
  <string name="sfmcplugin_notification_icon">ic_notification</string>
  ...
</resources>
```

### Default notification channel for Android O+

Configure the default notification channel for Android 0+ devices by setting this in your `strings.xml`:
```xml
<?xml version='1.0' encoding='utf-8'?>
<resources>
  ...
  <string name="sfmcplugin_default_notification_channel_id">my_channel_id</string>
  ...
</resources>
```
Note: this plugin will use the default SFMC SDK channel if you don't set a custom one. So, only set it up if you needed.

## API

<docgen-index>

* [`isPushEnabled()`](#ispushenabled)
* [`setPushEnabled(...)`](#setpushenabled)
* [`getProfileId()`](#getprofileid)
* [`setProfileId(...)`](#setprofileid)
* [`getAttributes()`](#getattributes)
* [`setAttribute(...)`](#setattribute)
* [`clearAttribute(...)`](#clearattribute)
* [`getTags()`](#gettags)
* [`addTag(...)`](#addtag)
* [`removeTag(...)`](#removetag)
* [`isMarketingCloudNotification(...)`](#ismarketingcloudnotification)
* [`notifyNotificationOpened(...)`](#notifynotificationopened)
* [`showNotification(...)`](#shownotification)
* [`addListener('notificationOpened', ...)`](#addlistenernotificationopened)
* [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### isPushEnabled()

```typescript
isPushEnabled() => Promise<{ value: boolean; }>
```

Returns true if push notifications are enabled, otherwise false.

**Returns:** <code>Promise&lt;{ value: boolean; }&gt;</code>

**Since:** 1.0.0

--------------------


### setPushEnabled(...)

```typescript
setPushEnabled(opts: { enabled: boolean; }) => void
```

Sets push notifications status according to the provided input param.

| Param      | Type                               |
| ---------- | ---------------------------------- |
| **`opts`** | <code>{ enabled: boolean; }</code> |

**Since:** 1.0.0

--------------------


### getProfileId()

```typescript
getProfileId() => Promise<{ value: string; }>
```

Get profile id.

**Returns:** <code>Promise&lt;{ value: string; }&gt;</code>

**Since:** 1.0.0

--------------------


### setProfileId(...)

```typescript
setProfileId(opts: { value: string; }) => void
```

Set profile id.

| Param      | Type                            |
| ---------- | ------------------------------- |
| **`opts`** | <code>{ value: string; }</code> |

**Since:** 1.0.0

--------------------


### getAttributes()

```typescript
getAttributes() => Promise<{ attributes: string; }>
```

Gets attributes.

**Returns:** <code>Promise&lt;{ attributes: string; }&gt;</code>

**Since:** 1.0.0

--------------------


### setAttribute(...)

```typescript
setAttribute(opts: { key: string; value: string; }) => void
```

Sets an attribute.

| Param      | Type                                         |
| ---------- | -------------------------------------------- |
| **`opts`** | <code>{ key: string; value: string; }</code> |

**Since:** 1.0.0

--------------------


### clearAttribute(...)

```typescript
clearAttribute(opts: { key: string; }) => Promise<{ value: boolean; }>
```

Clears an attribute.

| Param      | Type                          |
| ---------- | ----------------------------- |
| **`opts`** | <code>{ key: string; }</code> |

**Returns:** <code>Promise&lt;{ value: boolean; }&gt;</code>

**Since:** 1.0.0

--------------------


### getTags()

```typescript
getTags() => Promise<{ tags: string[]; }>
```

Gets tags.

**Returns:** <code>Promise&lt;{ tags: string[]; }&gt;</code>

**Since:** 1.0.0

--------------------


### addTag(...)

```typescript
addTag(opts: { value: string; }) => Promise<{ value: boolean; }>
```

Adds a tag.

| Param      | Type                            |
| ---------- | ------------------------------- |
| **`opts`** | <code>{ value: string; }</code> |

**Returns:** <code>Promise&lt;{ value: boolean; }&gt;</code>

**Since:** 1.0.0

--------------------


### removeTag(...)

```typescript
removeTag(opts: { value: string; }) => Promise<{ value: boolean; }>
```

Removes a tag.

| Param      | Type                            |
| ---------- | ------------------------------- |
| **`opts`** | <code>{ value: string; }</code> |

**Returns:** <code>Promise&lt;{ value: boolean; }&gt;</code>

**Since:** 1.0.0

--------------------


### isMarketingCloudNotification(...)

```typescript
isMarketingCloudNotification(opts: { notification: any; }) => Promise<{ value: boolean; }>
```

Helper method to identify a push message payload sent from the Marketing Cloud.

| Param      | Type                                |
| ---------- | ----------------------------------- |
| **`opts`** | <code>{ notification: any; }</code> |

**Returns:** <code>Promise&lt;{ value: boolean; }&gt;</code>

**Since:** 1.0.0

--------------------


### notifyNotificationOpened(...)

```typescript
notifyNotificationOpened(opts: { notification: any; }) => void
```

Helper method to notify SFMC that your notification has been opened. When this method is
called providing a valid SFMC notificaion then `'notificationOpened'` listener is fired.

Only available on iOS.

| Param      | Type                                |
| ---------- | ----------------------------------- |
| **`opts`** | <code>{ notification: any; }</code> |

**Since:** 1.0.0

--------------------


### showNotification(...)

```typescript
showNotification(opts: { notification: any; }) => Promise<{ value: boolean; }>
```

Shows a SFMC notification. If the method returns false, that means that the provided
notification payload is not a valid SFMC one and it could be handled successfully.

Only available on Android.

| Param      | Type                                |
| ---------- | ----------------------------------- |
| **`opts`** | <code>{ notification: any; }</code> |

**Returns:** <code>Promise&lt;{ value: boolean; }&gt;</code>

**Since:** 1.0.0

--------------------


### addListener('notificationOpened', ...)

```typescript
addListener(eventName: 'notificationOpened', listenerFunc: (notification: MarketingCloudNotification) => void) => PluginListenerHandle
```

Called when a SFMC notification is opened.

Provides the notification opened.

| Param              | Type                                                                                                         |
| ------------------ | ------------------------------------------------------------------------------------------------------------ |
| **`eventName`**    | <code>'notificationOpened'</code>                                                                            |
| **`listenerFunc`** | <code>(notification: <a href="#marketingcloudnotification">MarketingCloudNotification</a>) =&gt; void</code> |

**Returns:** <code><a href="#pluginlistenerhandle">PluginListenerHandle</a></code>

**Since:** 1.0.0

--------------------


### Interfaces


#### PluginListenerHandle

| Prop         | Type                                      |
| ------------ | ----------------------------------------- |
| **`remove`** | <code>() =&gt; Promise&lt;void&gt;</code> |


#### MarketingCloudNotification

| Prop                | Type                |
| ------------------- | ------------------- |
| **`sfmcMessageId`** | <code>string</code> |
| **`extras`**        | <code>any</code>    |
| **`action`**        | <code>'tap'</code>  |

</docgen-api>
