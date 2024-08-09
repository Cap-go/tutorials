# ppi-device-binding

PayPoint Device Binding Plugin

## Install

```bash
npm install ppi-device-binding
npx cap sync
```

## API

<docgen-index>

* [`echo(...)`](#echo)
* [`checkPermission()`](#checkpermission)
* [`checkSMSPermisson()`](#checksmspermisson)
* [`checkSimPresent()`](#checksimpresent)
* [`getSubscriptionIds()`](#getsubscriptionids)
* [`sendMessage(...)`](#sendmessage)
* [`setSmartIntent(...)`](#setsmartintent)
* [`iOSComposeSMS(...)`](#ioscomposesms)
* [`echo2(...)`](#echo2)
* [`requestWithWrapper(...)`](#requestwithwrapper)
* [`iOSSimPresent()`](#iossimpresent)

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


### checkPermission()

```typescript
checkPermission() => Promise<{ value: string; }>
```

**Returns:** <code>Promise&lt;{ value: string; }&gt;</code>

--------------------


### checkSMSPermisson()

```typescript
checkSMSPermisson() => Promise<{ value: string; }>
```

**Returns:** <code>Promise&lt;{ value: string; }&gt;</code>

--------------------


### checkSimPresent()

```typescript
checkSimPresent() => Promise<{ value: boolean; }>
```

**Returns:** <code>Promise&lt;{ value: boolean; }&gt;</code>

--------------------


### getSubscriptionIds()

```typescript
getSubscriptionIds() => Promise<{ value: any; }>
```

**Returns:** <code>Promise&lt;{ value: any; }&gt;</code>

--------------------


### sendMessage(...)

```typescript
sendMessage(options: { destinationNumber: string; sourceNumber: string; messageContent: string; subId: number; }) => Promise<{ value: boolean; }>
```

| Param         | Type                                                                                                     |
| ------------- | -------------------------------------------------------------------------------------------------------- |
| **`options`** | <code>{ destinationNumber: string; sourceNumber: string; messageContent: string; subId: number; }</code> |

**Returns:** <code>Promise&lt;{ value: boolean; }&gt;</code>

--------------------


### setSmartIntent(...)

```typescript
setSmartIntent(options: { enable: boolean; }) => Promise<{ value: boolean; }>
```

| Param         | Type                              |
| ------------- | --------------------------------- |
| **`options`** | <code>{ enable: boolean; }</code> |

**Returns:** <code>Promise&lt;{ value: boolean; }&gt;</code>

--------------------


### iOSComposeSMS(...)

```typescript
iOSComposeSMS(options: { destinationNumber: string; messageContent: string; }) => Promise<any>
```

| Param         | Type                                                                |
| ------------- | ------------------------------------------------------------------- |
| **`options`** | <code>{ destinationNumber: string; messageContent: string; }</code> |

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### echo2(...)

```typescript
echo2(options: { value: string; }) => Promise<{ value: string; }>
```

| Param         | Type                            |
| ------------- | ------------------------------- |
| **`options`** | <code>{ value: string; }</code> |

**Returns:** <code>Promise&lt;{ value: string; }&gt;</code>

--------------------


### requestWithWrapper(...)

```typescript
requestWithWrapper(options: { url: string; method: string; parameters: object; headers: object; }) => Promise<{ value: any; }>
```

| Param         | Type                                                                               |
| ------------- | ---------------------------------------------------------------------------------- |
| **`options`** | <code>{ url: string; method: string; parameters: object; headers: object; }</code> |

**Returns:** <code>Promise&lt;{ value: any; }&gt;</code>

--------------------


### iOSSimPresent()

```typescript
iOSSimPresent() => Promise<{ value: string; }>
```

**Returns:** <code>Promise&lt;{ value: string; }&gt;</code>

--------------------

</docgen-api>
