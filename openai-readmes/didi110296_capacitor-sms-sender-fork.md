# capacitor-sms-sender

Send SMS directly from capacitor app - fork of iqomp/capacitor-sms-sender - now compatible with capacitor 5+

## Install

```bash
npm install capacitor-sms-sender-fork
npx cap sync
```

## Example

```js
import { SmsSender } from 'capacitor-sms-sender-fork'

let opts = {
    id: 1,
    sim: 0,
    phone: '+123020021',
    text: 'Hi There'
}
SmsSender.send(opts)
    .then(res => {
        console.log(res)
    })

SmsSender.addListener('smsSenderDelivered', res => {
    console.log(res)
})
```

## API

<docgen-index>

* [`send(...)`](#send)
* [`checkPermissions()`](#checkpermissions)
* [`requestPermissions()`](#requestpermissions)
* [`addListener('smsSenderDelivered', ...)`](#addlistenersmssenderdelivered)
* [`removeAllListeners()`](#removealllisteners)
* [Interfaces](#interfaces)
* [Type Aliases](#type-aliases)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### send(...)

```typescript
send(opts: SmsSenderOptions) => Promise<SmsSenderResult>
```

Send a text sms to a number from a specified sim index

| Param      | Type                                                          |
| ---------- | ------------------------------------------------------------- |
| **`opts`** | <code><a href="#smssenderoptions">SmsSenderOptions</a></code> |

**Returns:** <code>Promise&lt;<a href="#smssenderresult">SmsSenderResult</a>&gt;</code>

**Since:** 1.0.0

--------------------


### checkPermissions()

```typescript
checkPermissions() => Promise<PermissionStatus>
```

Check status of permissions

**Returns:** <code>Promise&lt;<a href="#permissionstatus">PermissionStatus</a>&gt;</code>

**Since:** 1.0.0

--------------------


### requestPermissions()

```typescript
requestPermissions() => Promise<PermissionStatus>
```

Request the required permissions

**Returns:** <code>Promise&lt;<a href="#permissionstatus">PermissionStatus</a>&gt;</code>

--------------------


### addListener('smsSenderDelivered', ...)

```typescript
addListener(eventName: 'smsSenderDelivered', listenerFunc: (result: SmsSenderResult) => void) => Promise<PluginListenerHandle> & PluginListenerHandle
```

Listen for sms status update

| Param              | Type                                                                             |
| ------------------ | -------------------------------------------------------------------------------- |
| **`eventName`**    | <code>'smsSenderDelivered'</code>                                                |
| **`listenerFunc`** | <code>(result: <a href="#smssenderresult">SmsSenderResult</a>) =&gt; void</code> |

**Returns:** <code>Promise&lt;<a href="#pluginlistenerhandle">PluginListenerHandle</a>&gt; & <a href="#pluginlistenerhandle">PluginListenerHandle</a></code>

**Since:** 1.0.0

--------------------


### removeAllListeners()

```typescript
removeAllListeners() => Promise<void>
```

Remove all registered listeners

**Since:** 1.0.0

--------------------


### Interfaces


#### SmsSenderResult

| Prop         | Type                | Description                                                          | Since |
| ------------ | ------------------- | -------------------------------------------------------------------- | ----- |
| **`id`**     | <code>number</code> | Message SMS id                                                       | 1.0.0 |
| **`status`** | <code>string</code> | Delivery status, possible value are 'FAILED', 'SENT', or 'DELIVERED' | 1.0.0 |


#### SmsSenderOptions

| Prop        | Type                | Description         | Since |
| ----------- | ------------------- | ------------------- | ----- |
| **`id`**    | <code>number</code> | SMS Message id      | 1.0.0 |
| **`sim`**   | <code>number</code> | Device SIM index    | 1.0.0 |
| **`phone`** | <code>string</code> | Target phone number | 1.0.0 |
| **`text`**  | <code>string</code> | SMS Message         | 1.0.0 |


#### PermissionStatus

| Prop                   | Type                                                        | Description                 | Since |
| ---------------------- | ----------------------------------------------------------- | --------------------------- | ----- |
| **`send_sms`**         | <code><a href="#permissionstate">PermissionState</a></code> | SEND_SMS Permission         | 1.0.0 |
| **`read_phone_state`** | <code><a href="#permissionstate">PermissionState</a></code> | READ_PHONE_STATE Permission | 1.0.0 |


#### PluginListenerHandle

| Prop         | Type                                      |
| ------------ | ----------------------------------------- |
| **`remove`** | <code>() =&gt; Promise&lt;void&gt;</code> |


### Type Aliases


#### PermissionState

<code>'prompt' | 'prompt-with-rationale' | 'granted' | 'denied'</code>

</docgen-api>
