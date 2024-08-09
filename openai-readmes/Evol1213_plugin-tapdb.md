# plugin-tapdb

capacitor plugin for [TapDB](https://www.tapdb.com)

## Install

```bash
npm install @evol1213/capacitor-plugin-tapdb
npx cap sync
```

## API

<docgen-index>

* [`initialize(...)`](#initialize)
* [`setUser(...)`](#setuser)
* [`clearUser()`](#clearuser)
* [`setName(...)`](#setname)
* [`setLevel(...)`](#setlevel)
* [`setServer(...)`](#setserver)
* [`onCharge(...)`](#oncharge)
* [`trackEvent(...)`](#trackevent)
* [`registerStaticProperties(...)`](#registerstaticproperties)
* [`unregisterStaticProperty(...)`](#unregisterstaticproperty)
* [`clearStaticProperties()`](#clearstaticproperties)
* [`deviceUpdate(...)`](#deviceupdate)
* [`deviceInitialize(...)`](#deviceinitialize)
* [`deviceAdd(...)`](#deviceadd)
* [`userUpdate(...)`](#userupdate)
* [`userInitialize(...)`](#userinitialize)
* [`userAdd(...)`](#useradd)
* [Interfaces](#interfaces)
* [Type Aliases](#type-aliases)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### initialize(...)

```typescript
initialize(options: initOptions) => Promise<void>
```

初始化

| Param         | Type                                                |
| ------------- | --------------------------------------------------- |
| **`options`** | <code><a href="#initoptions">initOptions</a></code> |

--------------------


### setUser(...)

```typescript
setUser(options: { userId: string; }) => Promise<void>
```

设置账号 ID

| Param         | Type                             |
| ------------- | -------------------------------- |
| **`options`** | <code>{ userId: string; }</code> |

--------------------


### clearUser()

```typescript
clearUser() => Promise<void>
```

清除账号 ID

--------------------


### setName(...)

```typescript
setName(options: { name: string; }) => Promise<void>
```

设置账户名称

| Param         | Type                           |
| ------------- | ------------------------------ |
| **`options`** | <code>{ name: string; }</code> |

--------------------


### setLevel(...)

```typescript
setLevel(options: { level: number; }) => Promise<void>
```

设置账户等级

| Param         | Type                            |
| ------------- | ------------------------------- |
| **`options`** | <code>{ level: number; }</code> |

--------------------


### setServer(...)

```typescript
setServer(options: { server: string; }) => Promise<void>
```

设置账号区服

| Param         | Type                             |
| ------------- | -------------------------------- |
| **`options`** | <code>{ server: string; }</code> |

--------------------


### onCharge(...)

```typescript
onCharge(options: { orderId: string; product: string; amount: number; currencyType: string; payment: string; }) => Promise<void>
```

上报充值

| Param         | Type                                                                                                      |
| ------------- | --------------------------------------------------------------------------------------------------------- |
| **`options`** | <code>{ orderId: string; product: string; amount: number; currencyType: string; payment: string; }</code> |

--------------------


### trackEvent(...)

```typescript
trackEvent(options: { eventName: string; properties: Object; }) => Promise<void>
```

上报事件

| Param         | Type                                                                          |
| ------------- | ----------------------------------------------------------------------------- |
| **`options`** | <code>{ eventName: string; properties: <a href="#object">Object</a>; }</code> |

--------------------


### registerStaticProperties(...)

```typescript
registerStaticProperties(options: { staticProperties: Object; }) => Promise<void>
```

设置通用事件属性

| Param         | Type                                                             |
| ------------- | ---------------------------------------------------------------- |
| **`options`** | <code>{ staticProperties: <a href="#object">Object</a>; }</code> |

--------------------


### unregisterStaticProperty(...)

```typescript
unregisterStaticProperty(options: { propertyName: string; }) => Promise<void>
```

删除单个静态通用事件属性

| Param         | Type                                   |
| ------------- | -------------------------------------- |
| **`options`** | <code>{ propertyName: string; }</code> |

--------------------


### clearStaticProperties()

```typescript
clearStaticProperties() => Promise<void>
```

清空全部静态通用属性

--------------------


### deviceUpdate(...)

```typescript
deviceUpdate(options: { properties: Object; }) => Promise<void>
```

设备属性更新操作

| Param         | Type                                                       |
| ------------- | ---------------------------------------------------------- |
| **`options`** | <code>{ properties: <a href="#object">Object</a>; }</code> |

--------------------


### deviceInitialize(...)

```typescript
deviceInitialize(options: { properties: Object; }) => Promise<void>
```

设备初始化操作

| Param         | Type                                                       |
| ------------- | ---------------------------------------------------------- |
| **`options`** | <code>{ properties: <a href="#object">Object</a>; }</code> |

--------------------


### deviceAdd(...)

```typescript
deviceAdd(options: { properties: Object; }) => Promise<void>
```

设备属性累加操作

| Param         | Type                                                       |
| ------------- | ---------------------------------------------------------- |
| **`options`** | <code>{ properties: <a href="#object">Object</a>; }</code> |

--------------------


### userUpdate(...)

```typescript
userUpdate(options: { properties: Object; }) => Promise<void>
```

账号属性更新操作

| Param         | Type                                                       |
| ------------- | ---------------------------------------------------------- |
| **`options`** | <code>{ properties: <a href="#object">Object</a>; }</code> |

--------------------


### userInitialize(...)

```typescript
userInitialize(options: { properties: Object; }) => Promise<void>
```

账号属性初始化操作

| Param         | Type                                                       |
| ------------- | ---------------------------------------------------------- |
| **`options`** | <code>{ properties: <a href="#object">Object</a>; }</code> |

--------------------


### userAdd(...)

```typescript
userAdd(options: { properties: Object; }) => Promise<void>
```

账号属性累加操作

| Param         | Type                                                       |
| ------------- | ---------------------------------------------------------- |
| **`options`** | <code>{ properties: <a href="#object">Object</a>; }</code> |

--------------------


### Interfaces


#### initOptions

| Prop             | Type                |
| ---------------- | ------------------- |
| **`clientId`**   | <code>string</code> |
| **`channel`**    | <code>string</code> |
| **`appVersion`** | <code>string</code> |


#### Object

Provides functionality common to all JavaScript objects.

| Prop              | Type                                          | Description                                                                                                                                |
| ----------------- | --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| **`constructor`** | <code><a href="#function">Function</a></code> | The initial value of <a href="#object">Object</a>.prototype.constructor is the standard built-in <a href="#object">Object</a> constructor. |

| Method                   | Signature                                                 | Description                                                              |
| ------------------------ | --------------------------------------------------------- | ------------------------------------------------------------------------ |
| **toString**             | () =&gt; string                                           | Returns a string representation of an object.                            |
| **toLocaleString**       | () =&gt; string                                           | Returns a date converted to a string using the current locale.           |
| **valueOf**              | () =&gt; <a href="#object">Object</a>                     | Returns the primitive value of the specified object.                     |
| **hasOwnProperty**       | (v: <a href="#propertykey">PropertyKey</a>) =&gt; boolean | Determines whether an object has a property with the specified name.     |
| **isPrototypeOf**        | (v: <a href="#object">Object</a>) =&gt; boolean           | Determines whether an object exists in another object's prototype chain. |
| **propertyIsEnumerable** | (v: <a href="#propertykey">PropertyKey</a>) =&gt; boolean | Determines whether a specified property is enumerable.                   |


#### Function

Creates a new function.

| Prop            | Type                                          |
| --------------- | --------------------------------------------- |
| **`prototype`** | <code>any</code>                              |
| **`length`**    | <code>number</code>                           |
| **`arguments`** | <code>any</code>                              |
| **`caller`**    | <code><a href="#function">Function</a></code> |

| Method       | Signature                                                                            | Description                                                                                                                                                                                                              |
| ------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **apply**    | (this: <a href="#function">Function</a>, thisArg: any, argArray?: any) =&gt; any     | Calls the function, substituting the specified object for the this value of the function, and the specified array for the arguments of the function.                                                                     |
| **call**     | (this: <a href="#function">Function</a>, thisArg: any, ...argArray: any[]) =&gt; any | Calls a method of an object, substituting another object for the current object.                                                                                                                                         |
| **bind**     | (this: <a href="#function">Function</a>, thisArg: any, ...argArray: any[]) =&gt; any | For a given function, creates a bound function that has the same body as the original function. The this object of the bound function is associated with the specified object, and has the specified initial parameters. |
| **toString** | () =&gt; string                                                                      | Returns a string representation of a function.                                                                                                                                                                           |


### Type Aliases


#### PropertyKey

<code>string | number | symbol</code>

</docgen-api>
