# capacitor-emarsys-sdk-plugin

Custom Capacitor Plugin To have communication with Emarsys SDK

## Install

```bash
npm install capacitor-emarsys-sdk-plugin
npx cap sync
```

## config the npm

1. npm ci
2. pull the latest changes
3. make sure u chanhge the version in package json
4. publish it

```bash
npm run prepublishOnly && npm run deploy
```

4. commit and push the code

-- Now install the npm in your project

1. yarn remove @lla-io/capacitor-emarsys-sdk-plugin
2. yarn add @lla-io/capacitor-emarsys-sdk-plugin

## API

<docgen-index>

* [`echo(...)`](#echo)
* [`addListener('pushMessageEvent', ...)`](#addlistenerpushmessageevent)
* [`getUUID(...)`](#getuuid)
* [`requestPermissions()`](#requestpermissions)
* [`checkPermissions()`](#checkpermissions)
* [`setContact(...)`](#setcontact)
* [`getPushToken()`](#getpushtoken)
* [`register()`](#register)
* [`checkPermissions()`](#checkpermissions)
* [`clearContact(...)`](#clearcontact)
* [`setPushTokenFirebase(...)`](#setpushtokenfirebase)
* [`setPushMessage(...)`](#setpushmessage)
* [`getUserInfo(...)`](#getuserinfo)
* [`setUser(...)`](#setuser)
* [`clearUser()`](#clearuser)
* [`getDeviceInformation(...)`](#getdeviceinformation)
* [`trackEvent(...)`](#trackevent)
* [`loadInlineInapp(...)`](#loadinlineinapp)
* [`addListener('EmarsysInAppDeepLink', ...)`](#addlisteneremarsysinappdeeplink)
* [`addListener('EmarsysInAppApplicationEvent', ...)`](#addlisteneremarsysinappapplicationevent)
* [`addListener('EmarsysPushDeepLink', ...)`](#addlisteneremarsyspushdeeplink)
* [`addListener('EmarsysPushApplicationEvent', ...)`](#addlisteneremarsyspushapplicationevent)
* [`addListener('EmarsysPushNotificationReceived', ...)`](#addlisteneremarsyspushnotificationreceived)
* [`loadMessageInboxHandler()`](#loadmessageinboxhandler)
* [Interfaces](#interfaces)
* [Type Aliases](#type-aliases)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### echo(...)

```typescript
echo(options: { value: string; }) => Promise<{ value: string; }>
```

| Param         | Type                            |
| ------------- | ------------------------------- |
| **`options`** | <code>{ value: string; }</code> |

**Returns:** <code>Promise&lt;{ value: string; }&gt;</code>

--------------------


### addListener('pushMessageEvent', ...)

```typescript
addListener(eventName: 'pushMessageEvent', listenerFunc: (event: PushMessageEvent) => void) => Promise<PluginListenerHandle> & PluginListenerHandle
```

| Param              | Type                                                                              |
| ------------------ | --------------------------------------------------------------------------------- |
| **`eventName`**    | <code>'pushMessageEvent'</code>                                                   |
| **`listenerFunc`** | <code>(event: <a href="#pushmessageevent">PushMessageEvent</a>) =&gt; void</code> |

**Returns:** <code>Promise&lt;<a href="#pluginlistenerhandle">PluginListenerHandle</a>&gt; & <a href="#pluginlistenerhandle">PluginListenerHandle</a></code>

--------------------


### getUUID(...)

```typescript
getUUID(value: string) => Promise<{ value: string; }>
```

| Param       | Type                |
| ----------- | ------------------- |
| **`value`** | <code>string</code> |

**Returns:** <code>Promise&lt;{ value: string; }&gt;</code>

--------------------


### requestPermissions()

```typescript
requestPermissions() => Promise<PermissionStatus>
```

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### checkPermissions()

```typescript
checkPermissions() => Promise<PermissionStatus>
```

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### setContact(...)

```typescript
setContact(options: SetContactOptions) => Promise<void>
```

| Param         | Type                                                            |
| ------------- | --------------------------------------------------------------- |
| **`options`** | <code><a href="#setcontactoptions">SetContactOptions</a></code> |

--------------------


### getPushToken()

```typescript
getPushToken() => Promise<TokenResult>
```

**Returns:** <code>Promise&lt;<a href="#tokenresult">TokenResult</a>&gt;</code>

--------------------


### register()

```typescript
register() => Promise<TokenResult>
```

**Returns:** <code>Promise&lt;<a href="#tokenresult">TokenResult</a>&gt;</code>

--------------------


### checkPermissions()

```typescript
checkPermissions() => Promise<PermissionStatus>
```

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### clearContact(...)

```typescript
clearContact(options: SetContactOptions) => Promise<void>
```

| Param         | Type                                                            |
| ------------- | --------------------------------------------------------------- |
| **`options`** | <code><a href="#setcontactoptions">SetContactOptions</a></code> |

--------------------


### setPushTokenFirebase(...)

```typescript
setPushTokenFirebase(data: { value: string; }) => Promise<ITokenInitializationStatus>
```

| Param      | Type                            |
| ---------- | ------------------------------- |
| **`data`** | <code>{ value: string; }</code> |

**Returns:** <code>Promise&lt;<a href="#itokeninitializationstatus">ITokenInitializationStatus</a>&gt;</code>

--------------------


### setPushMessage(...)

```typescript
setPushMessage(data: PushMessageDTO) => Promise<{ value: PushMessageDTO; }>
```

| Param      | Type                                                      |
| ---------- | --------------------------------------------------------- |
| **`data`** | <code><a href="#pushmessagedto">PushMessageDTO</a></code> |

**Returns:** <code>Promise&lt;{ value: <a href="#pushmessagedto">PushMessageDTO</a>; }&gt;</code>

--------------------


### getUserInfo(...)

```typescript
getUserInfo(data: UserInformationDTO) => Promise<{ value: unknown; }>
```

| Param      | Type                                                              |
| ---------- | ----------------------------------------------------------------- |
| **`data`** | <code><a href="#userinformationdto">UserInformationDTO</a></code> |

**Returns:** <code>Promise&lt;{ value: unknown; }&gt;</code>

--------------------


### setUser(...)

```typescript
setUser(data: { value: string; }) => Promise<void>
```

| Param      | Type                            |
| ---------- | ------------------------------- |
| **`data`** | <code>{ value: string; }</code> |

--------------------


### clearUser()

```typescript
clearUser() => Promise<void>
```

--------------------


### getDeviceInformation(...)

```typescript
getDeviceInformation(options?: { value?: string | undefined; } | undefined) => Promise<{ value: string; }>
```

| Param         | Type                             |
| ------------- | -------------------------------- |
| **`options`** | <code>{ value?: string; }</code> |

**Returns:** <code>Promise&lt;{ value: string; }&gt;</code>

--------------------


### trackEvent(...)

```typescript
trackEvent(options?: { eventName: string; eventAttributes: any; } | undefined) => Promise<{ value: string; }>
```

| Param         | Type                                                      |
| ------------- | --------------------------------------------------------- |
| **`options`** | <code>{ eventName: string; eventAttributes: any; }</code> |

**Returns:** <code>Promise&lt;{ value: string; }&gt;</code>

--------------------


### loadInlineInapp(...)

```typescript
loadInlineInapp(data: { inAppName: string; }) => Promise<void>
```

| Param      | Type                                |
| ---------- | ----------------------------------- |
| **`data`** | <code>{ inAppName: string; }</code> |

--------------------


### addListener('EmarsysInAppDeepLink', ...)

```typescript
addListener(eventName: 'EmarsysInAppDeepLink', listenerFunc: (event: PushMessageEvent) => void) => Promise<PluginListenerHandle> & PluginListenerHandle
```

| Param              | Type                                                                              |
| ------------------ | --------------------------------------------------------------------------------- |
| **`eventName`**    | <code>'EmarsysInAppDeepLink'</code>                                               |
| **`listenerFunc`** | <code>(event: <a href="#pushmessageevent">PushMessageEvent</a>) =&gt; void</code> |

**Returns:** <code>Promise&lt;<a href="#pluginlistenerhandle">PluginListenerHandle</a>&gt; & <a href="#pluginlistenerhandle">PluginListenerHandle</a></code>

--------------------


### addListener('EmarsysInAppApplicationEvent', ...)

```typescript
addListener(eventName: 'EmarsysInAppApplicationEvent', listenerFunc: (event: PushMessageEvent) => void) => Promise<PluginListenerHandle> & PluginListenerHandle
```

| Param              | Type                                                                              |
| ------------------ | --------------------------------------------------------------------------------- |
| **`eventName`**    | <code>'EmarsysInAppApplicationEvent'</code>                                       |
| **`listenerFunc`** | <code>(event: <a href="#pushmessageevent">PushMessageEvent</a>) =&gt; void</code> |

**Returns:** <code>Promise&lt;<a href="#pluginlistenerhandle">PluginListenerHandle</a>&gt; & <a href="#pluginlistenerhandle">PluginListenerHandle</a></code>

--------------------


### addListener('EmarsysPushDeepLink', ...)

```typescript
addListener(eventName: 'EmarsysPushDeepLink', listenerFunc: (event: PushMessageEvent) => void) => Promise<PluginListenerHandle> & PluginListenerHandle
```

| Param              | Type                                                                              |
| ------------------ | --------------------------------------------------------------------------------- |
| **`eventName`**    | <code>'EmarsysPushDeepLink'</code>                                                |
| **`listenerFunc`** | <code>(event: <a href="#pushmessageevent">PushMessageEvent</a>) =&gt; void</code> |

**Returns:** <code>Promise&lt;<a href="#pluginlistenerhandle">PluginListenerHandle</a>&gt; & <a href="#pluginlistenerhandle">PluginListenerHandle</a></code>

--------------------


### addListener('EmarsysPushApplicationEvent', ...)

```typescript
addListener(eventName: 'EmarsysPushApplicationEvent', listenerFunc: (event: PushMessageEvent) => void) => Promise<PluginListenerHandle> & PluginListenerHandle
```

| Param              | Type                                                                              |
| ------------------ | --------------------------------------------------------------------------------- |
| **`eventName`**    | <code>'EmarsysPushApplicationEvent'</code>                                        |
| **`listenerFunc`** | <code>(event: <a href="#pushmessageevent">PushMessageEvent</a>) =&gt; void</code> |

**Returns:** <code>Promise&lt;<a href="#pluginlistenerhandle">PluginListenerHandle</a>&gt; & <a href="#pluginlistenerhandle">PluginListenerHandle</a></code>

--------------------


### addListener('EmarsysPushNotificationReceived', ...)

```typescript
addListener(eventName: 'EmarsysPushNotificationReceived', listenerFunc: (event: PushMessageEvent) => void) => Promise<PluginListenerHandle> & PluginListenerHandle
```

| Param              | Type                                                                              |
| ------------------ | --------------------------------------------------------------------------------- |
| **`eventName`**    | <code>'EmarsysPushNotificationReceived'</code>                                    |
| **`listenerFunc`** | <code>(event: <a href="#pushmessageevent">PushMessageEvent</a>) =&gt; void</code> |

**Returns:** <code>Promise&lt;<a href="#pluginlistenerhandle">PluginListenerHandle</a>&gt; & <a href="#pluginlistenerhandle">PluginListenerHandle</a></code>

--------------------


### loadMessageInboxHandler()

```typescript
loadMessageInboxHandler() => Promise<any>
```

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### Interfaces


#### PluginListenerHandle

| Prop         | Type                                      |
| ------------ | ----------------------------------------- |
| **`remove`** | <code>() =&gt; Promise&lt;void&gt;</code> |


#### PushMessageEvent

| Prop            | Type                                           | Since |
| --------------- | ---------------------------------------------- | ----- |
| **`eventName`** | <code>string</code>                            | 1.0.0 |
| **`data`**      | <code>{ key: string; value: string; }[]</code> | 1.0.0 |


#### PermissionStatus

| Prop          | Type                                                        | Since |
| ------------- | ----------------------------------------------------------- | ----- |
| **`receive`** | <code><a href="#permissionstate">PermissionState</a></code> | 1.0.0 |


#### SetContactOptions

| Prop                    | Type                | Since |
| ----------------------- | ------------------- | ----- |
| **`contactFieldValue`** | <code>string</code> | 1.0.0 |


#### TokenResult

| Prop        | Type                | Since |
| ----------- | ------------------- | ----- |
| **`token`** | <code>string</code> | 1.0.0 |


#### ITokenInitializationStatus

| Prop          | Type                 |
| ------------- | -------------------- |
| **`status`**  | <code>string</code>  |
| **`isError`** | <code>boolean</code> |


#### PushMessageDTO

| Prop        | Type                |
| ----------- | ------------------- |
| **`title`** | <code>string</code> |
| **`text`**  | <code>string</code> |
| **`image`** | <code>string</code> |


#### UserInformationDTO

| Prop                | Type                |
| ------------------- | ------------------- |
| **`firebaseToken`** | <code>string</code> |
| **`userId`**        | <code>string</code> |


### Type Aliases


#### PermissionState

<code>'prompt' | 'prompt-with-rationale' | 'granted' | 'denied'</code>

</docgen-api>
