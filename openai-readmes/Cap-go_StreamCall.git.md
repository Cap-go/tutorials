# @capgo/capacitor-stream-call
 <a href="https://capgo.app/"><img src='https://raw.githubusercontent.com/Cap-go/capgo/main/assets/capgo_banner.png' alt='Capgo - Instant updates for capacitor'/></a>

<div align="center">
  <h2><a href="https://capgo.app/?ref=plugin"> ➡️ Get Instant updates for your App with Capgo 🚀</a></h2>
  <h2><a href="https://capgo.app/consulting/?ref=plugin"> Fix your annoying bug now, Hire a Capacitor expert 💪</a></h2>
</div>

WIP: We are actively working on this plugin. not yet ready for production.
Uses the https://getstream.io/ SDK to implement calling in Capacitor

## Install

```bash
npm install @capgo/capacitor-stream-call
npx cap sync
```

## Setting up Android StreamVideo apikey
1. Add your apikey to the Android project:
```
your_app/android/app/src/main/res/values/strings.xml
```

2. Add your apikey to the Android project:
```xml
<string name="CAPACITOR_STREAM_VIDEO_APIKEY">your_api_key</string>
```

## Setting up iOS StreamVideo apikey
1. Add your apikey to the iOS project:
```
your_app/ios/App/App/Info.plist
```

Add the following to the Info.plist file:
```xml
<dict>
  <key>CAPACITOR_STREAM_VIDEO_APIKEY</key>
  <string>n8wv8vjmucdw</string>
  <!-- other keys -->
</dict>
```

## Native Localization

### iOS

1. Add `Localizable.strings` and `Localizable.stringsdict` files to your Xcode project if you don't have them:
```
/App/App/en.lproj/Localizable.strings
/App/App/en.lproj/Localizable.stringsdict
```

2. Add new languages to your project in Xcode:
   - Open project settings
   - Select your project
   - Click "Info" tab
   - Under "Localizations" click "+"
   - Select the languages you want to add

3. Add the translations in your `Localizable.strings`:
```
// en.lproj/Localizable.strings
"stream.video.call.incoming" = "Incoming call from %@";
"stream.video.call.accept" = "Accept";
"stream.video.call.reject" = "Reject";
"stream.video.call.hangup" = "Hang up";
"stream.video.call.joining" = "Joining...";
"stream.video.call.reconnecting" = "Reconnecting...";
```

4. Configure the localization provider in your `AppDelegate.swift`:
```swift
import StreamVideo

@UIApplicationMain
class AppDelegate: UIResponder, UIApplicationDelegate {
    func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
        // Set localization provider to use your app's bundle
        Appearance.localizationProvider = { key, table in
            Bundle.main.localizedString(forKey: key, value: nil, table: table)
        }
        return true
    }
}
```

You can find all available localization keys in the [StreamVideo SDK repository](https://github.com/GetStream/stream-video-swift/blob/main/Sources/StreamVideoSwiftUI/Resources/en.lproj/Localizable.strings).

### Android
1. Create string resources in `/app/src/main/res/values/strings.xml`:
```xml
<?xml version="1.0" encoding="utf-8"?>
<resources>
    <string name="stream_video_call_incoming">Incoming call from %1$s</string>
    <string name="stream_video_call_accept">Accept</string>
    <string name="stream_video_call_reject">Reject</string>
    <string name="stream_video_call_hangup">Hang up</string>
    <string name="stream_video_call_joining">Joining...</string>
    <string name="stream_video_call_reconnecting">Reconnecting...</string>
</resources>
```

2. Add translations for other languages in their respective folders (e.g., `/app/src/main/res/values-fr/strings.xml`):
```xml
<?xml version="1.0" encoding="utf-8"?>
<resources>
    <string name="stream_video_call_incoming">Appel entrant de %1$s</string>
    <string name="stream_video_call_accept">Accepter</string>
    <string name="stream_video_call_reject">Refuser</string>
    <string name="stream_video_call_hangup">Raccrocher</string>
    <string name="stream_video_call_joining">Connexion...</string>
    <string name="stream_video_call_reconnecting">Reconnexion...</string>
</resources>
```

The SDK will automatically use the system language and these translations.

## API

<docgen-index>

* [`login(...)`](#login)
* [`logout()`](#logout)
* [`call(...)`](#call)
* [`endCall()`](#endcall)
* [`setMicrophoneEnabled(...)`](#setmicrophoneenabled)
* [`setCameraEnabled(...)`](#setcameraenabled)
* [`addListener('callEvent', ...)`](#addlistenercallevent-)
* [`removeAllListeners()`](#removealllisteners)
* [`acceptCall()`](#acceptcall)
* [`rejectCall()`](#rejectcall)
* [`isCameraEnabled()`](#iscameraenabled)
* [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### login(...)

```typescript
login(options: LoginOptions) => Promise<SuccessResponse>
```

Login to Stream Video service

| Param         | Type                                                  | Description           |
| ------------- | ----------------------------------------------------- | --------------------- |
| **`options`** | <code><a href="#loginoptions">LoginOptions</a></code> | - Login configuration |

**Returns:** <code>Promise&lt;<a href="#successresponse">SuccessResponse</a>&gt;</code>

--------------------


### logout()

```typescript
logout() => Promise<SuccessResponse>
```

Logout from Stream Video service

**Returns:** <code>Promise&lt;<a href="#successresponse">SuccessResponse</a>&gt;</code>

--------------------


### call(...)

```typescript
call(options: CallOptions) => Promise<SuccessResponse>
```

Initiate a call to another user

| Param         | Type                                                | Description          |
| ------------- | --------------------------------------------------- | -------------------- |
| **`options`** | <code><a href="#calloptions">CallOptions</a></code> | - Call configuration |

**Returns:** <code>Promise&lt;<a href="#successresponse">SuccessResponse</a>&gt;</code>

--------------------


### endCall()

```typescript
endCall() => Promise<SuccessResponse>
```

End the current call

**Returns:** <code>Promise&lt;<a href="#successresponse">SuccessResponse</a>&gt;</code>

--------------------


### setMicrophoneEnabled(...)

```typescript
setMicrophoneEnabled(options: { enabled: boolean; }) => Promise<SuccessResponse>
```

Enable or disable microphone

| Param         | Type                               | Description        |
| ------------- | ---------------------------------- | ------------------ |
| **`options`** | <code>{ enabled: boolean; }</code> | - Microphone state |

**Returns:** <code>Promise&lt;<a href="#successresponse">SuccessResponse</a>&gt;</code>

--------------------


### setCameraEnabled(...)

```typescript
setCameraEnabled(options: { enabled: boolean; }) => Promise<SuccessResponse>
```

Enable or disable camera

| Param         | Type                               | Description    |
| ------------- | ---------------------------------- | -------------- |
| **`options`** | <code>{ enabled: boolean; }</code> | - Camera state |

**Returns:** <code>Promise&lt;<a href="#successresponse">SuccessResponse</a>&gt;</code>

--------------------


### addListener('callEvent', ...)

```typescript
addListener(eventName: 'callEvent', listenerFunc: (event: CallEvent) => void) => Promise<{ remove: () => Promise<void>; }>
```

Add listener for call events

| Param              | Type                                                                | Description                       |
| ------------------ | ------------------------------------------------------------------- | --------------------------------- |
| **`eventName`**    | <code>'callEvent'</code>                                            | - Name of the event to listen for |
| **`listenerFunc`** | <code>(event: <a href="#callevent">CallEvent</a>) =&gt; void</code> | - Callback function               |

**Returns:** <code>Promise&lt;{ remove: () =&gt; Promise&lt;void&gt;; }&gt;</code>

--------------------


### removeAllListeners()

```typescript
removeAllListeners() => Promise<void>
```

Remove all event listeners

--------------------


### acceptCall()

```typescript
acceptCall() => Promise<SuccessResponse>
```

Accept an incoming call

**Returns:** <code>Promise&lt;<a href="#successresponse">SuccessResponse</a>&gt;</code>

--------------------


### rejectCall()

```typescript
rejectCall() => Promise<SuccessResponse>
```

Reject an incoming call

**Returns:** <code>Promise&lt;<a href="#successresponse">SuccessResponse</a>&gt;</code>

--------------------


### isCameraEnabled()

```typescript
isCameraEnabled() => Promise<CameraEnabledResponse>
```

**Returns:** <code>Promise&lt;<a href="#cameraenabledresponse">CameraEnabledResponse</a>&gt;</code>

--------------------


### Interfaces


#### SuccessResponse

| Prop          | Type                 | Description                          |
| ------------- | -------------------- | ------------------------------------ |
| **`success`** | <code>boolean</code> | Whether the operation was successful |


#### LoginOptions

| Prop             | Type                | Description                                             |
| ---------------- | ------------------- | ------------------------------------------------------- |
| **`token`**      | <code>string</code> | Stream Video API token                                  |
| **`userId`**     | <code>string</code> | User ID for the current user                            |
| **`name`**       | <code>string</code> | Display name for the current user                       |
| **`imageURL`**   | <code>string</code> | Optional avatar URL for the current user                |
| **`apiKey`**     | <code>string</code> | Stream Video API key                                    |
| **`magicDivId`** | <code>string</code> | ID of the HTML element where the video will be rendered |


#### CallOptions

| Prop          | Type                  | Description                                      |
| ------------- | --------------------- | ------------------------------------------------ |
| **`userIds`** | <code>string[]</code> | User ID of the person to call                    |
| **`type`**    | <code>string</code>   | Type of call, defaults to 'default'              |
| **`ring`**    | <code>boolean</code>  | Whether to ring the other user, defaults to true |


#### CallEvent

| Prop         | Type                | Description                                                    |
| ------------ | ------------------- | -------------------------------------------------------------- |
| **`callId`** | <code>string</code> | ID of the call                                                 |
| **`state`**  | <code>string</code> | Current state of the call                                      |
| **`userId`** | <code>string</code> | User ID of the participant in the call who triggered the event |
| **`reason`** | <code>string</code> | Reason for the call state change                               |


#### CameraEnabledResponse

| Prop          | Type                 |
| ------------- | -------------------- |
| **`enabled`** | <code>boolean</code> |

</docgen-api>
