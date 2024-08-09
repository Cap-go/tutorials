# capacitor-call-phone-number

A Simple Phone Call Plugin for Capacitor 6.

## Plugin versions

| Capacitor version | Plugin version |
| ----------------- | -------------- |
| v6                | >= v6.0.0      |

## Install

```bash
npm install capacitor-call-phone-number
npx cap sync
```

## Android

This API requires the following permissions be added to your AndroidManifest.xml:

```xml
<uses-permission android:name="android.permission.CALL_PHONE" />

<queries>
    <intent>
        <action android:name="android.intent.action.DIAL" />
    </intent>
</queries>
```

## Example

```typescript
import { CallPhoneNumber } from 'capacitor-call-phone-number';

const callPhone = async () => {
  CallPhoneNumber.call({ phoneNumber: '15555555555' })
    .then(result => {
      console.log('callPhone:result', result);
    })
    .catch(err => {
      console.log('callPhone:error', err);
    });
};

const dialPhone = async () => {
  CallPhoneNumber.call({ phoneNumber: '15555555555', type: 'dial' })
    .then(result => {
      console.log('dialPhone:result', result);
    })
    .catch(err => {
      console.log('dialPhone:error', err);
    });
```

## API

<docgen-index>

* [`call(...)`](#call)
* [`checkPermissions()`](#checkpermissions)
* [`requestPermissions(...)`](#requestpermissions)
* [Interfaces](#interfaces)
* [Type Aliases](#type-aliases)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### call(...)

```typescript
call(options: CallPhoneOptions) => Promise<CallPhoneResult>
```

| Param         | Type                                                          |
| ------------- | ------------------------------------------------------------- |
| **`options`** | <code><a href="#callphoneoptions">CallPhoneOptions</a></code> |

**Returns:** <code>Promise&lt;<a href="#callphoneresult">CallPhoneResult</a>&gt;</code>

--------------------


### checkPermissions()

```typescript
checkPermissions() => Promise<PermissionStatus>
```

**Returns:** <code>Promise&lt;<a href="#permissionstatus">PermissionStatus</a>&gt;</code>

--------------------


### requestPermissions(...)

```typescript
requestPermissions(permissions?: CallPhoneNumberPluginPermissions | undefined) => Promise<PermissionStatus>
```

| Param             | Type                                                                                          |
| ----------------- | --------------------------------------------------------------------------------------------- |
| **`permissions`** | <code><a href="#callphonenumberpluginpermissions">CallPhoneNumberPluginPermissions</a></code> |

**Returns:** <code>Promise&lt;<a href="#permissionstatus">PermissionStatus</a>&gt;</code>

--------------------


### Interfaces


#### CallPhoneResult

| Prop          | Type                 |
| ------------- | -------------------- |
| **`success`** | <code>boolean</code> |


#### CallPhoneOptions

| Prop              | Type                          | Description                                                                       |
| ----------------- | ----------------------------- | --------------------------------------------------------------------------------- |
| **`phoneNumber`** | <code>string</code>           | The phone number to be called                                                     |
| **`type`**        | <code>'call' \| 'dial'</code> | The type of call, optional, can be either 'call' or 'dial'. Only supports Android |


#### PermissionStatus

| Prop            | Type                                                        | Description                           |
| --------------- | ----------------------------------------------------------- | ------------------------------------- |
| **`callPhone`** | <code><a href="#permissionstate">PermissionState</a></code> | Permission state for callPhone alias. |


#### CallPhoneNumberPluginPermissions

| Prop              | Type                       |
| ----------------- | -------------------------- |
| **`permissions`** | <code>'callPhone'[]</code> |


### Type Aliases


#### PermissionState

<code>'prompt' | 'prompt-with-rationale' | 'granted' | 'denied'</code>


#### CallPhoneNumberPermissionType

<code>'callPhone'</code>

</docgen-api>
