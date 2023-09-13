# Capacitor Klarna Checkout

Klarna Checkout integration to Capacitor.js for loading Checkout widget inside Capacitor app.

## Installation

```bash
yarn add @foodello/capacitor-klarna-kco

or

npm install @foodello/capacitor-klarna-kco
```

Then run

```bash
npx cap sync
```

---

## Setup

**Required:** Include configuration to `capacitor.config.json`

```json
{
  "plugins": {
    "KlarnaKco": {
      "returnUrlIos": "your-app-scheme://",
      "returnUrlAndroid": "your-app-scheme://",
      "environment": "playground", // Optional
      "handleEPM": false, // Optional
      "handleValidationErrors": false, // Optional
      "region": "eu", // Optional
      "theme": "light" // Optional
    }
  }
}
```

### Android modifications

1. Edit your application level build.gradle file and add the following repository to your repositories section:
   ```gradle
   repositories {
     ....
     maven {
         url 'https://x.klarnacdn.net/mobile-sdk/'
     }
   }
   ```
2. If you are willing to change SDK version, add new version to your variables.gradle
   ```gradle
   ext {
     ...
     klarnaSdkVersion: 'x.x.x'
   }
   ```
   Default is `2.5.2`
3. Check that your main activity has intent filter and it supports return URL scheme defined in `capacitor.config.json`.
   `AndroidManifest.xml`:
   ```xml
   <intent-filter>
     <action android:name="android.intent.action.VIEW" />
     <category android:name="android.intent.category.DEFAULT" />
     <category android:name="android.intent.category.BROWSABLE" />
     <data android:scheme="<your-app-scheme>" />
     <data android:host="<your-app-host>" />
   </intent-filter>
   ```

**Note:**
The hosting Activity should be using launchMode of singleTask or singleTop to prevent a new instance from being created when returning from an external application. This should be `singleTask` if you have not modified this by yourself.

```xml
<activity android:launchMode="singleTask|singleTop">
```

---

## Usage

Import plugin to your application

```js
import { KlarnaKco } from '@foodello/capacitor-klarna-kco'
```

Remember to attach listeners to the events you are willing to handle. For example in order to perform navigation inside your application, listen `complete` -event:

```js
KlarnaKco.addListener('complete', ({ url }) => {
  /* PERFORM NAVIGATION */
})
```

---

## Check Klarna's documentation for more information

https://docs.klarna.com/in-app/

---

## API

<docgen-index>

- [`initialize()`](#initialize)
- [`setSnippet(...)`](#setsnippet)
- [`open()`](#open)
- [`close()`](#close)
- [`destroy()`](#destroy)
- [`resume()`](#resume)
- [`suspend()`](#suspend)
- [`addListener(EventsEnum.Complete, ...)`](#addlistenereventsenumcomplete-)
- [`addListener(EventsEnum.External, ...)`](#addlistenereventsenumexternal-)
- [`addListener(EventsEnum.Load, ...)`](#addlistenereventsenumload-)
- [`addListener(EventsEnum.UserInteracted, ...)`](#addlistenereventsenumuserinteracted-)
- [`addListener(EventsEnum.Customer, ...)`](#addlistenereventsenumcustomer-)
- [`addListener(EventsEnum.Change, ...)`](#addlistenereventsenumchange-)
- [`addListener(EventsEnum.BillingAddressChange, ...)`](#addlistenereventsenumbillingaddresschange-)
- [`addListener(EventsEnum.ShippingAddressChange, ...)`](#addlistenereventsenumshippingaddresschange-)
- [`addListener(EventsEnum.ShippingOptionChanged, ...)`](#addlistenereventsenumshippingoptionchanged-)
- [`addListener(EventsEnum.OrderTotalChange, ...)`](#addlistenereventsenumordertotalchange-)
- [`addListener(EventsEnum.CheckboxChange, ...)`](#addlistenereventsenumcheckboxchange-)
- [`addListener(EventsEnum.NetworkError, ...)`](#addlistenereventsenumnetworkerror-)
- [`addListener(EventsEnum.RedirectInitiated, ...)`](#addlistenereventsenumredirectinitiated-)
- [`addListener(EventsEnum.LoadConfirmation, ...)`](#addlistenereventsenumloadconfirmation-)
- [Interfaces](#interfaces)
- [Type Aliases](#type-aliases)
- [Enums](#enums)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### initialize()

```typescript
initialize() => Promise<void>
```

Initializes Klarna SDK with the configs.

**Since:** 2.0.0

---

### setSnippet(...)

```typescript
setSnippet(options: SetSnippetOptions) => Promise<CallResult>
```

Sets KCO snippet for Klarna SDK to load.

| Param         | Type                                                            |
| ------------- | --------------------------------------------------------------- |
| **`options`** | <code><a href="#setsnippetoptions">SetSnippetOptions</a></code> |

**Returns:** <code>Promise&lt;<a href="#callresult">CallResult</a>&gt;</code>

**Since:** 2.0.0

---

### open()

```typescript
open() => Promise<CallResult>
```

Open KCO view which includes the snippet.

**Returns:** <code>Promise&lt;<a href="#callresult">CallResult</a>&gt;</code>

**Since:** 2.0.0

---

### close()

```typescript
close() => Promise<CallResult>
```

Close KCO view including the snippet.

**Returns:** <code>Promise&lt;<a href="#callresult">CallResult</a>&gt;</code>

**Since:** 2.0.0

---

### destroy()

```typescript
destroy() => Promise<void>
```

Destroy Klarna SDK instance.

**Since:** 1.0.0

---

### resume()

```typescript
resume() => Promise<KlarnaCallResult>
```

Resume interactions on Klarna Checkout widget.

**Returns:** <code>Promise&lt;<a href="#klarnacallresult">KlarnaCallResult</a>&gt;</code>

**Since:** 1.0.0

---

### suspend()

```typescript
suspend() => Promise<KlarnaCallResult>
```

Suspend interactions on Klarna Checkout widget.

**Returns:** <code>Promise&lt;<a href="#klarnacallresult">KlarnaCallResult</a>&gt;</code>

**Since:** 1.0.0

---

### addListener(EventsEnum.Complete, ...)

```typescript
addListener(eventName: EventsEnum.Complete, listenerFunc: (data: EventData[EventsEnum.Complete]) => void) => Promise<PluginListenerHandle> & PluginListenerHandle
```

Listen for when the payment created.

| Param              | Type                                                           |
| ------------------ | -------------------------------------------------------------- |
| **`eventName`**    | <code><a href="#eventsenum">EventsEnum.Complete</a></code>     |
| **`listenerFunc`** | <code>(data: { url: string; path: string; }) =&gt; void</code> |

**Returns:** <code>Promise&lt;<a href="#pluginlistenerhandle">PluginListenerHandle</a>&gt; & <a href="#pluginlistenerhandle">PluginListenerHandle</a></code>

**Since:** 1.0.0

---

### addListener(EventsEnum.External, ...)

```typescript
addListener(eventName: EventsEnum.External, listenerFunc: (data: EventData[EventsEnum.External]) => void) => Promise<PluginListenerHandle> & PluginListenerHandle
```

Listen for when KCO should redirect for external payment.

**Requires `handleEPM` config to be `true`**

| Param              | Type                                                           |
| ------------------ | -------------------------------------------------------------- |
| **`eventName`**    | <code><a href="#eventsenum">EventsEnum.External</a></code>     |
| **`listenerFunc`** | <code>(data: { url: string; path: string; }) =&gt; void</code> |

**Returns:** <code>Promise&lt;<a href="#pluginlistenerhandle">PluginListenerHandle</a>&gt; & <a href="#pluginlistenerhandle">PluginListenerHandle</a></code>

**Since:** 2.0.0

---

### addListener(EventsEnum.Load, ...)

```typescript
addListener(eventName: EventsEnum.Load, listenerFunc: (data: EventData[EventsEnum.Load]) => void) => Promise<PluginListenerHandle> & PluginListenerHandle
```

Listen for when the KCO iframe has been created successfully.

| Param              | Type                                                                                                                          |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| **`eventName`**    | <code><a href="#eventsenum">EventsEnum.Load</a></code>                                                                        |
| **`listenerFunc`** | <code>(data: { customer: { type: string; }; shipping_address: { country: string; postal_code: string; }; }) =&gt; void</code> |

**Returns:** <code>Promise&lt;<a href="#pluginlistenerhandle">PluginListenerHandle</a>&gt; & <a href="#pluginlistenerhandle">PluginListenerHandle</a></code>

**Since:** 1.0.0

---

### addListener(EventsEnum.UserInteracted, ...)

```typescript
addListener(eventName: EventsEnum.UserInteracted, listenerFunc: (data: EventData[EventsEnum.UserInteracted]) => void) => Promise<PluginListenerHandle> & PluginListenerHandle
```

Listen for when the user has interacted with the KCO iframe.

| Param              | Type                                                             |
| ------------------ | ---------------------------------------------------------------- |
| **`eventName`**    | <code><a href="#eventsenum">EventsEnum.UserInteracted</a></code> |
| **`listenerFunc`** | <code>(data: { type: string; }) =&gt; void</code>                |

**Returns:** <code>Promise&lt;<a href="#pluginlistenerhandle">PluginListenerHandle</a>&gt; & <a href="#pluginlistenerhandle">PluginListenerHandle</a></code>

**Since:** 1.0.0

---

### addListener(EventsEnum.Customer, ...)

```typescript
addListener(eventName: EventsEnum.Customer, listenerFunc: (data: EventData[EventsEnum.Customer]) => void) => Promise<PluginListenerHandle> & PluginListenerHandle
```

Listen for when the user has interacted with the KCO iframe.

| Param              | Type                                                       |
| ------------------ | ---------------------------------------------------------- |
| **`eventName`**    | <code><a href="#eventsenum">EventsEnum.Customer</a></code> |
| **`listenerFunc`** | <code>(data: { type: string; }) =&gt; void</code>          |

**Returns:** <code>Promise&lt;<a href="#pluginlistenerhandle">PluginListenerHandle</a>&gt; & <a href="#pluginlistenerhandle">PluginListenerHandle</a></code>

**Since:** 1.0.0

---

### addListener(EventsEnum.Change, ...)

```typescript
addListener(eventName: EventsEnum.Change, listenerFunc: (data: EventData[EventsEnum.Change]) => void) => Promise<PluginListenerHandle> & PluginListenerHandle
```

Listen for when organization type (B2B or Person) was changed.

| Param              | Type                                                                                     |
| ------------------ | ---------------------------------------------------------------------------------------- |
| **`eventName`**    | <code><a href="#eventsenum">EventsEnum.Change</a></code>                                 |
| **`listenerFunc`** | <code>(data: { email: string; postal_code: string; country: string; }) =&gt; void</code> |

**Returns:** <code>Promise&lt;<a href="#pluginlistenerhandle">PluginListenerHandle</a>&gt; & <a href="#pluginlistenerhandle">PluginListenerHandle</a></code>

**Since:** 1.0.0

---

### addListener(EventsEnum.BillingAddressChange, ...)

```typescript
addListener(eventName: EventsEnum.BillingAddressChange, listenerFunc: (data: EventData[EventsEnum.BillingAddressChange]) => void) => Promise<PluginListenerHandle> & PluginListenerHandle
```

Listen for when postal code, country or email was changed.

| Param              | Type                                                                      |
| ------------------ | ------------------------------------------------------------------------- |
| **`eventName`**    | <code><a href="#eventsenum">EventsEnum.BillingAddressChange</a></code>    |
| **`listenerFunc`** | <code>(data: { postal_code: string; country: string; }) =&gt; void</code> |

**Returns:** <code>Promise&lt;<a href="#pluginlistenerhandle">PluginListenerHandle</a>&gt; & <a href="#pluginlistenerhandle">PluginListenerHandle</a></code>

**Since:** 1.0.0

---

### addListener(EventsEnum.ShippingAddressChange, ...)

```typescript
addListener(eventName: EventsEnum.ShippingAddressChange, listenerFunc: (data: EventData[EventsEnum.ShippingAddressChange]) => void) => Promise<PluginListenerHandle> & PluginListenerHandle
```

Listen for when shipping address was submitted.

| Param              | Type                                                                      |
| ------------------ | ------------------------------------------------------------------------- |
| **`eventName`**    | <code><a href="#eventsenum">EventsEnum.ShippingAddressChange</a></code>   |
| **`listenerFunc`** | <code>(data: { postal_code: string; country: string; }) =&gt; void</code> |

**Returns:** <code>Promise&lt;<a href="#pluginlistenerhandle">PluginListenerHandle</a>&gt; & <a href="#pluginlistenerhandle">PluginListenerHandle</a></code>

**Since:** 1.0.0

---

### addListener(EventsEnum.ShippingOptionChanged, ...)

```typescript
addListener(eventName: EventsEnum.ShippingOptionChanged, listenerFunc: (data: EventData[EventsEnum.ShippingOptionChanged]) => void) => Promise<PluginListenerHandle> & PluginListenerHandle
```

Listen for when the user has selected a new shipping option.

| Param              | Type                                                                                                                                                   |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **`eventName`**    | <code><a href="#eventsenum">EventsEnum.ShippingOptionChanged</a></code>                                                                                |
| **`listenerFunc`** | <code>(data: { description: string; id: string; name: string; price: number; promo: string; tax_amount: number; tax_rate: number; }) =&gt; void</code> |

**Returns:** <code>Promise&lt;<a href="#pluginlistenerhandle">PluginListenerHandle</a>&gt; & <a href="#pluginlistenerhandle">PluginListenerHandle</a></code>

**Since:** 1.0.0

---

### addListener(EventsEnum.OrderTotalChange, ...)

```typescript
addListener(eventName: EventsEnum.OrderTotalChange, listenerFunc: (data: EventData[EventsEnum.OrderTotalChange]) => void) => Promise<PluginListenerHandle> & PluginListenerHandle
```

Listen for when we got changes on the cart from the merchant.

| Param              | Type                                                               |
| ------------------ | ------------------------------------------------------------------ |
| **`eventName`**    | <code><a href="#eventsenum">EventsEnum.OrderTotalChange</a></code> |
| **`listenerFunc`** | <code>(data: { order_total: number; }) =&gt; void</code>           |

**Returns:** <code>Promise&lt;<a href="#pluginlistenerhandle">PluginListenerHandle</a>&gt; & <a href="#pluginlistenerhandle">PluginListenerHandle</a></code>

**Since:** 1.0.0

---

### addListener(EventsEnum.CheckboxChange, ...)

```typescript
addListener(eventName: EventsEnum.CheckboxChange, listenerFunc: (data: EventData[EventsEnum.CheckboxChange]) => void) => Promise<PluginListenerHandle> & PluginListenerHandle
```

Listen for when a checkbox was checked/unchecked.

| Param              | Type                                                               |
| ------------------ | ------------------------------------------------------------------ |
| **`eventName`**    | <code><a href="#eventsenum">EventsEnum.CheckboxChange</a></code>   |
| **`listenerFunc`** | <code>(data: { key: string; checked: boolean; }) =&gt; void</code> |

**Returns:** <code>Promise&lt;<a href="#pluginlistenerhandle">PluginListenerHandle</a>&gt; & <a href="#pluginlistenerhandle">PluginListenerHandle</a></code>

**Since:** 1.0.0

---

### addListener(EventsEnum.NetworkError, ...)

```typescript
addListener(eventName: EventsEnum.NetworkError, listenerFunc: (data: EventData[EventsEnum.NetworkError]) => void) => Promise<PluginListenerHandle> & PluginListenerHandle
```

Listen for network error in KCO iframe.

| Param              | Type                                                                              |
| ------------------ | --------------------------------------------------------------------------------- |
| **`eventName`**    | <code><a href="#eventsenum">EventsEnum.NetworkError</a></code>                    |
| **`listenerFunc`** | <code>(data: <a href="#record">Record</a>&lt;string, never&gt;) =&gt; void</code> |

**Returns:** <code>Promise&lt;<a href="#pluginlistenerhandle">PluginListenerHandle</a>&gt; & <a href="#pluginlistenerhandle">PluginListenerHandle</a></code>

**Since:** 1.0.0

---

### addListener(EventsEnum.RedirectInitiated, ...)

```typescript
addListener(eventName: EventsEnum.RedirectInitiated, listenerFunc: (data: EventData[EventsEnum.RedirectInitiated]) => void) => Promise<PluginListenerHandle> & PluginListenerHandle
```

Listen for when the user is about to be redirected to the confirmation page.

| Param              | Type                                                                |
| ------------------ | ------------------------------------------------------------------- |
| **`eventName`**    | <code><a href="#eventsenum">EventsEnum.RedirectInitiated</a></code> |
| **`listenerFunc`** | <code>(data: true) =&gt; void</code>                                |

**Returns:** <code>Promise&lt;<a href="#pluginlistenerhandle">PluginListenerHandle</a>&gt; & <a href="#pluginlistenerhandle">PluginListenerHandle</a></code>

**Since:** 1.0.0

---

### addListener(EventsEnum.LoadConfirmation, ...)

```typescript
addListener(eventName: EventsEnum.LoadConfirmation, listenerFunc: (data: EventData[EventsEnum.LoadConfirmation]) => void) => Promise<PluginListenerHandle> & PluginListenerHandle
```

Listen for when the confirmation iframe has been created succesfully.

| Param              | Type                                                                              |
| ------------------ | --------------------------------------------------------------------------------- |
| **`eventName`**    | <code><a href="#eventsenum">EventsEnum.LoadConfirmation</a></code>                |
| **`listenerFunc`** | <code>(data: <a href="#record">Record</a>&lt;string, never&gt;) =&gt; void</code> |

**Returns:** <code>Promise&lt;<a href="#pluginlistenerhandle">PluginListenerHandle</a>&gt; & <a href="#pluginlistenerhandle">PluginListenerHandle</a></code>

**Since:** 1.0.0

---

### Interfaces

#### CallResult

| Prop          | Type                 | Description                            | Since |
| ------------- | -------------------- | -------------------------------------- | ----- |
| **`status`**  | <code>boolean</code> | Return status of the call              | 2.0.0 |
| **`message`** | <code>string</code>  | Corresponding message for status value | 2.0.0 |

#### SetSnippetOptions

| Prop          | Type                | Description                         | Since |
| ------------- | ------------------- | ----------------------------------- | ----- |
| **`snippet`** | <code>string</code> | The KCO frame's snippet from Klarna | 2.0.0 |

#### KlarnaCallResult

| Prop         | Type                   |
| ------------ | ---------------------- |
| **`result`** | <code>'invoked'</code> |

#### PluginListenerHandle

| Prop         | Type                                      |
| ------------ | ----------------------------------------- |
| **`remove`** | <code>() =&gt; Promise&lt;void&gt;</code> |

### Enums

| Prop                                          | Type                                                                                                                                |
| --------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| **`[EventsEnum.BillingAddressChange]`**       | <code>{ postal_code: string; country: string; }</code>                                                                              |
| **`[EventsEnum.Change]`**                     | <code>{ email: string; postal_code: string; country: string; }</code>                                                               |
| **`[EventsEnum.CheckboxChange]`**             | <code>{ key: string; checked: boolean; }</code>                                                                                     |
| **`[EventsEnum.Complete]`**                   | <code>{ url: string; path: string; }</code>                                                                                         |
| **`[EventsEnum.Customer]`**                   | <code>{ type: string; }</code>                                                                                                      |
| **`[EventsEnum.External]`**                   | <code>{ url: string; path: string; }</code>                                                                                         |
| **`[EventsEnum.LoadConfirmation]`**           | <code><a href="#record">Record</a>&lt;string, never&gt;</code>                                                                      |
| **`[EventsEnum.Load]`**                       | <code>{ customer: { type: string; }; shipping_address: { country: string; postal_code: string; }; }</code>                          |
| **`[EventsEnum.NetworkError]`**               | <code><a href="#record">Record</a>&lt;string, never&gt;</code>                                                                      |
| **`[EventsEnum.OrderTotalChange]`**           | <code>{ order_total: number; }</code>                                                                                               |
| **`[EventsEnum.RedirectInitiated]`**          | <code>true</code>                                                                                                                   |
| **`[EventsEnum.ShippingAddressChange]`**      | <code>{ postal_code: string; country: string; }</code>                                                                              |
| **`[EventsEnum.ShippingAddressUpdateError]`** | <code><a href="#record">Record</a>&lt;string, never&gt;</code>                                                                      |
| **`[EventsEnum.ShippingOptionChanged]`**      | <code>{ description: string; id: string; name: string; price: number; promo: string; tax_amount: number; tax_rate: number; }</code> |
| **`[EventsEnum.UserInteracted]`**             | <code>{ type: string; }</code>                                                                                                      |

### Type Aliases

#### Record

Construct a type with a set of properties K of type T

<code>{
[P in K]: T;
}</code>

### Enums

#### EventsEnum

| Members                          | Value                                        |
| -------------------------------- | -------------------------------------------- |
| **`BillingAddressChange`**       | <code>'billing_address_change'</code>        |
| **`Change`**                     | <code>'change'</code>                        |
| **`CheckboxChange`**             | <code>'checkbox_change'</code>               |
| **`Complete`**                   | <code>'complete'</code>                      |
| **`Customer`**                   | <code>'customer'</code>                      |
| **`External`**                   | <code>'external'</code>                      |
| **`Load`**                       | <code>'load'</code>                          |
| **`LoadConfirmation`**           | <code>'load_confirmation'</code>             |
| **`NetworkError`**               | <code>'network_error'</code>                 |
| **`OrderTotalChange`**           | <code>'order_total_change'</code>            |
| **`RedirectInitiated`**          | <code>'redirect_initiated'</code>            |
| **`ShippingAddressChange`**      | <code>'shipping_address_change'</code>       |
| **`ShippingAddressUpdateError`** | <code>'shipping_address_update_error'</code> |
| **`ShippingOptionChanged`**      | <code>'shipping_option_changed'</code>       |
| **`UserInteracted`**             | <code>'user_interacted'</code>               |

</docgen-api>

#### LoggingLevelsEnum

| Members   | Value     |
| --------- | --------- |
| `Verbose` | `verbose` |
| `Error`   | `error`   |
| `Off`     | `off`     |

#### RegionsEnum

| Members | Value |
| ------- | ----- |
| `NA`    | `na`  |
| `OC`    | `oc`  |
| `EU`    | `eu`  |

#### EnvironmentsEnum

| Members      | Value        |
| ------------ | ------------ |
| `Demo`       | `demo`       |
| `Playground` | `playground` |
| `Staging`    | `staging`    |
| `Production` | `production` |

#### ThemesEnum

| Members     | Value       |
| ----------- | ----------- |
| `Automatic` | `automatic` |
| `Dark`      | `dark`      |
| `Light`     | `light`     |
