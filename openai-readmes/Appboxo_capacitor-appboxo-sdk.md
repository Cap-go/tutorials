# capacitor-boxo-sdk

A Capacitor wrapper over Appboxo SDK for IOS and Android.

## Install

```bash
npm install @appboxo/capacitor-boxo-sdk
npx cap sync
```

## API

<docgen-index>

* [`setConfig(...)`](#setconfig)
* [`openMiniapp(...)`](#openminiapp)
* [`setAuthCode(...)`](#setauthcode)
* [`closeMiniapp(...)`](#closeminiapp)
* [`sendCustomEvent(...)`](#sendcustomevent)
* [`sendPaymentEvent(...)`](#sendpaymentevent)
* [`getMiniapps()`](#getminiapps)
* [`hideMiniapps()`](#hideminiapps)
* [`addListener('custom_event', ...)`](#addlistenercustom_event-)
* [`addListener('payment_event', ...)`](#addlistenerpayment_event-)
* [`addListener('miniapp_lifecycle', ...)`](#addlistenerminiapp_lifecycle-)
* [`logout()`](#logout)
* [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### setConfig(...)

```typescript
setConfig(options: ConfigOptions) => Promise<void>
```

Set global configs

| Param         | Type                                                    |
| ------------- | ------------------------------------------------------- |
| **`options`** | <code><a href="#configoptions">ConfigOptions</a></code> |

--------------------


### openMiniapp(...)

```typescript
openMiniapp(options: OpenMiniappOptions) => Promise<void>
```

Open miniapp with options

| Param         | Type                                                              |
| ------------- | ----------------------------------------------------------------- |
| **`options`** | <code><a href="#openminiappoptions">OpenMiniappOptions</a></code> |

--------------------


### setAuthCode(...)

```typescript
setAuthCode(options: { appId: string; authCode: string; }) => Promise<void>
```

get AuthCode from hostapp backend and send it to miniapp

| Param         | Type                                              |
| ------------- | ------------------------------------------------- |
| **`options`** | <code>{ appId: string; authCode: string; }</code> |

--------------------


### closeMiniapp(...)

```typescript
closeMiniapp(options: { appId: string; }) => Promise<void>
```

close miniapp by appId

| Param         | Type                            |
| ------------- | ------------------------------- |
| **`options`** | <code>{ appId: string; }</code> |

--------------------


### sendCustomEvent(...)

```typescript
sendCustomEvent(customEvent: CustomEvent) => Promise<void>
```

send custom event to miniapp

| Param             | Type                                                |
| ----------------- | --------------------------------------------------- |
| **`customEvent`** | <code><a href="#customevent">CustomEvent</a></code> |

--------------------


### sendPaymentEvent(...)

```typescript
sendPaymentEvent(paymentEvent: PaymentEvent) => Promise<void>
```

send payment event to miniapp

| Param              | Type                                                  |
| ------------------ | ----------------------------------------------------- |
| **`paymentEvent`** | <code><a href="#paymentevent">PaymentEvent</a></code> |

--------------------


### getMiniapps()

```typescript
getMiniapps() => Promise<MiniappListResult>
```

Get list of miniapps

**Returns:** <code>Promise&lt;<a href="#miniapplistresult">MiniappListResult</a>&gt;</code>

--------------------


### hideMiniapps()

```typescript
hideMiniapps() => Promise<void>
```

Miniapp opens on a native screen. To show payment processing page need to hide miniapp screen.
To use this function need to enable 'enableMultitaskMode: true' in Appboxo.setConfigs()

--------------------


### addListener('custom_event', ...)

```typescript
addListener(eventName: 'custom_event', listenerFunc: (customEvent: CustomEvent) => void) => Promise<PluginListenerHandle>
```

When host app user logs out, it is highly important to clear all miniapp storage data.

| Param              | Type                                                                          |
| ------------------ | ----------------------------------------------------------------------------- |
| **`eventName`**    | <code>'custom_event'</code>                                                   |
| **`listenerFunc`** | <code>(customEvent: <a href="#customevent">CustomEvent</a>) =&gt; void</code> |

**Returns:** <code>Promise&lt;<a href="#pluginlistenerhandle">PluginListenerHandle</a>&gt;</code>

--------------------


### addListener('payment_event', ...)

```typescript
addListener(eventName: 'payment_event', listenerFunc: (paymentEvent: PaymentEvent) => void) => Promise<PluginListenerHandle>
```

| Param              | Type                                                                             |
| ------------------ | -------------------------------------------------------------------------------- |
| **`eventName`**    | <code>'payment_event'</code>                                                     |
| **`listenerFunc`** | <code>(paymentEvent: <a href="#paymentevent">PaymentEvent</a>) =&gt; void</code> |

**Returns:** <code>Promise&lt;<a href="#pluginlistenerhandle">PluginListenerHandle</a>&gt;</code>

--------------------


### addListener('miniapp_lifecycle', ...)

```typescript
addListener(eventName: 'miniapp_lifecycle', listenerFunc: (lifecycle: LifecycleEvent) => void) => Promise<PluginListenerHandle>
```

| Param              | Type                                                                              |
| ------------------ | --------------------------------------------------------------------------------- |
| **`eventName`**    | <code>'miniapp_lifecycle'</code>                                                  |
| **`listenerFunc`** | <code>(lifecycle: <a href="#lifecycleevent">LifecycleEvent</a>) =&gt; void</code> |

**Returns:** <code>Promise&lt;<a href="#pluginlistenerhandle">PluginListenerHandle</a>&gt;</code>

--------------------


### logout()

```typescript
logout() => Promise<void>
```

--------------------


### Interfaces


#### ConfigOptions

| Prop                      | Type                                       | Description                                                                              |
| ------------------------- | ------------------------------------------ | ---------------------------------------------------------------------------------------- |
| **`clientId`**            | <code>string</code>                        | your client id from dashboard                                                            |
| **`userId`**              | <code>string</code>                        | hostapp userId, will be used for the Consent Management                                  |
| **`sandboxMode`**         | <code>boolean</code>                       | switch to sandbox mode                                                                   |
| **`enableMultitaskMode`** | <code>boolean</code>                       | Each miniapp appears as a task in the Recents screen. !It works only on android devices. |
| **`theme`**               | <code>'light' \| 'dark' \| 'system'</code> | theme for splash screen and other native components used inside miniapp.                 |
| **`isDebug`**             | <code>boolean</code>                       | enables webview debugging                                                                |
| **`showPermissionsPage`** | <code>boolean</code>                       | use it to hide "Settings" from Miniapp menu                                              |
| **`showClearCache`**      | <code>boolean</code>                       | use it to hide "Clear cache" from Miniapp menu                                           |


#### OpenMiniappOptions

| Prop                 | Type                                                  | Description                                                                                       |
| -------------------- | ----------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| **`appId`**          | <code>string</code>                                   | miniapp id                                                                                        |
| **`data`**           | <code>object</code>                                   | (optional) data as Map that is sent to miniapp                                                    |
| **`theme`**          | <code>'light' \| 'dark' \| 'system'</code>            | (optional) miniapp theme "dark" \| "light" (by default is system theme)                           |
| **`extraUrlParams`** | <code>object</code>                                   | (optional) extra query params to append to miniapp URL (like: http://miniapp-url.com/?param=test) |
| **`urlSuffix`**      | <code>string</code>                                   | (optional) suffix to append to miniapp URL (like: http://miniapp-url.com/?param=test)             |
| **`colors`**         | <code><a href="#coloroptions">ColorOptions</a></code> | (optional) provide colors to miniapp if miniapp supports                                          |
| **`enableSplash`**   | <code>boolean</code>                                  | (optional) use to skip miniapp splash screen                                                      |


#### ColorOptions

| Prop                 | Type                |
| -------------------- | ------------------- |
| **`primaryColor`**   | <code>string</code> |
| **`secondaryColor`** | <code>string</code> |
| **`tertiaryColor`**  | <code>string</code> |


#### CustomEvent

| Prop            | Type                |
| --------------- | ------------------- |
| **`appId`**     | <code>string</code> |
| **`requestId`** | <code>number</code> |
| **`type`**      | <code>string</code> |
| **`errorType`** | <code>string</code> |
| **`payload`**   | <code>object</code> |


#### PaymentEvent

| Prop                   | Type                |
| ---------------------- | ------------------- |
| **`appId`**            | <code>string</code> |
| **`transactionToken`** | <code>string</code> |
| **`miniappOrderId`**   | <code>string</code> |
| **`amount`**           | <code>number</code> |
| **`currency`**         | <code>string</code> |
| **`status`**           | <code>string</code> |
| **`hostappOrderId`**   | <code>string</code> |
| **`extraParams`**      | <code>object</code> |


#### MiniappListResult

| Prop           | Type                       |
| -------------- | -------------------------- |
| **`miniapps`** | <code>[MiniappData]</code> |
| **`error`**    | <code>string</code>        |


#### MiniappData

| Prop              | Type                |
| ----------------- | ------------------- |
| **`appId`**       | <code>string</code> |
| **`name`**        | <code>string</code> |
| **`category`**    | <code>string</code> |
| **`description`** | <code>string</code> |
| **`logo`**        | <code>string</code> |


#### PluginListenerHandle

| Prop         | Type                                      |
| ------------ | ----------------------------------------- |
| **`remove`** | <code>() =&gt; Promise&lt;void&gt;</code> |


#### LifecycleEvent

| Prop            | Type                | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --------------- | ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`appId`**     | <code>string</code> |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| **`lifecycle`** | <code>string</code> | onLaunch - Called when the miniapp will launch with Appboxo.open(...) onResume - Called when the miniapp will start interacting with the user onPause - Called when the miniapp loses foreground state onClose - Called when clicked close button in miniapp or when destroyed miniapp page onError - Called when miniapp fails to launch due to internet connection issues onUserInteraction - Called whenever touch event is dispatched to the miniapp page. onAuth - Called when the miniapp starts login and user allows it |
| **`error`**     | <code>string</code> |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |

</docgen-api>
