# capacitor-incoming-call-kit

A Capacitor plugin to show incoming call in your Capacitor app(Custom for Android/Callkit for iOS)

This plugin is a modification of the Flutter plugin: flutter_callkit_incoming to suite a capacitor app so all credits goes to hiennguyen92

The plugin is has @capacitor/push-notifications version 6.0.1 integrated

## Install

```bash
npm install capacitor-incoming-call-kit
npx cap sync
```

## API

<docgen-index>

* [`onMethod(...)`](#onmethod)
* [Interfaces](#interfaces)
* [Type Aliases](#type-aliases)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### onMethod(...)

```typescript
onMethod(options: { options: string; methodName: MethodNames; parsedOptions: CallKitParams; }) => Promise<Responses>
```

| Param         | Type                                                                                                                                             |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| **`options`** | <code>{ options: string; methodName: <a href="#methodnames">MethodNames</a>; parsedOptions: <a href="#callkitparams">CallKitParams</a>; }</code> |

**Returns:** <code>Promise&lt;<a href="#responses">Responses</a>&gt;</code>

--------------------


### Interfaces


#### CallKitParams

| Prop                                  | Type                                                              |
| ------------------------------------- | ----------------------------------------------------------------- |
| **`id`**                              | <code>string</code>                                               |
| **`nameCaller`**                      | <code>string</code>                                               |
| **`appName`**                         | <code>string</code>                                               |
| **`avatar`**                          | <code>string</code>                                               |
| **`handle`**                          | <code>string</code>                                               |
| **`type`**                            | <code>number</code>                                               |
| **`isOnHold`**                        | <code>boolean</code>                                              |
| **`normalHandle`**                    | <code>number</code>                                               |
| **`duration`**                        | <code>number</code>                                               |
| **`textAccept`**                      | <code>string</code>                                               |
| **`textDecline`**                     | <code>string</code>                                               |
| **`textMissedCall`**                  | <code>string</code>                                               |
| **`textCallback`**                    | <code>string</code>                                               |
| **`rationaleMessagePermission`**      | <code>string</code>                                               |
| **`postNotificationMessageRequired`** | <code>string</code>                                               |
| **`missedCallNotification`**          | <code><a href="#notificationparams">NotificationParams</a></code> |
| **`extra`**                           | <code>{ [key: string]: any; }</code>                              |
| **`headers`**                         | <code>{ [key: string]: any; }</code>                              |
| **`android`**                         | <code><a href="#androidparams">AndroidParams</a></code>           |
| **`ios`**                             | <code><a href="#iosparams">IOSParams</a></code>                   |


#### NotificationParams

| Prop                   | Type                 |
| ---------------------- | -------------------- |
| **`id`**               | <code>number</code>  |
| **`showNotification`** | <code>boolean</code> |
| **`subtitle`**         | <code>string</code>  |
| **`callbackText`**     | <code>string</code>  |
| **`isShowCallback`**   | <code>boolean</code> |
| **`int`**              | <code>number</code>  |


#### AndroidParams

| Prop                                      | Type                 |
| ----------------------------------------- | -------------------- |
| **`isCustomNotification`**                | <code>boolean</code> |
| **`isCustomSmallExNotification`**         | <code>boolean</code> |
| **`isShowLogo`**                          | <code>boolean</code> |
| **`isShowCallID`**                        | <code>boolean</code> |
| **`ringtonePath`**                        | <code>string</code>  |
| **`backgroundColor`**                     | <code>string</code>  |
| **`backgroundUrl`**                       | <code>string</code>  |
| **`actionColor`**                         | <code>string</code>  |
| **`textColor`**                           | <code>string</code>  |
| **`incomingCallNotificationChannelName`** | <code>string</code>  |
| **`missedCallNotificationChannelName`**   | <code>string</code>  |
| **`isShowFullLockedScreen`**              | <code>boolean</code> |
| **`isImportant`**                         | <code>boolean</code> |
| **`isBot`**                               | <code>boolean</code> |


#### IOSParams

| Prop                                        | Type                 |
| ------------------------------------------- | -------------------- |
| **`iconName`**                              | <code>string</code>  |
| **`handleType`**                            | <code>string</code>  |
| **`supportsVideo`**                         | <code>boolean</code> |
| **`maximumCallGroups`**                     | <code>number</code>  |
| **`maximumCallsPerCallGroup`**              | <code>number</code>  |
| **`audioSessionMode`**                      | <code>string</code>  |
| **`audioSessionActive`**                    | <code>boolean</code> |
| **`audioSessionPreferredSampleRate`**       | <code>number</code>  |
| **`audioSessionPreferredIOBufferDuration`** | <code>number</code>  |
| **`configureAudioSession`**                 | <code>boolean</code> |
| **`supportsDTMF`**                          | <code>boolean</code> |
| **`supportsHolding`**                       | <code>boolean</code> |
| **`supportsGrouping`**                      | <code>boolean</code> |
| **`supportsUngrouping`**                    | <code>boolean</code> |
| **`ringtonePath`**                          | <code>string</code>  |


### Type Aliases


#### Responses

<code>void | { isMuted: boolean } | { calls: CallKitParams[] } | { isVersionOk: boolean } | { devicePushTokenVoIP: string }</code>


#### MethodNames

<code>'showCallkitIncoming' | 'checkIsVersionOk' | 'sendPendingAcceptEvent' | 'showCallkitIncomingSilently' | 'showMissCallNotification' | 'startCall' | 'muteCall' | 'holdCall' | 'isMuted' | 'endCall' | 'callConnected' | 'endAllCalls' | 'activeCalls' | 'getDevicePushTokenVoIP' | 'silenceEvents' | 'requestNotificationPermission' | 'requestFullIntentPermission' | 'hideCallkitIncoming' | 'endNativeSubsystemOnly' | 'setAudioRoute'</code>

</docgen-api>
