# capacitor-plugin-rest-information-from-image

Gets image based information from a REST api that can be configured. The information returned has to be in json format, and it only does POST calls. 
The image will be sent as part of the body as a base64 string, the key is configurable. Also part of the body is the image type, currently hardcoded as jpeg, whose key can also be configured.

> [!IMPORTANT]  
> Version 2.x.x and upwards are Capacitor 6 versions. For Capacitor 5 use version 1.x.x

## Install

```bash
npm install capacitor-plugin-rest-information-from-image
npx cap sync
```

## Publish
To publish to npm use 
```bash
npm publish --access public
```
If this is the first time you publish anything (or you were logged out) use 
```bash
npm adduser  
```
and log in via browser.

## API

<docgen-index>

* [`scan(...)`](#scan)
* [Interfaces](#interfaces)
* [Type Aliases](#type-aliases)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### scan(...)

```typescript
scan(scanCall: IScanCall) => Promise<Object>
```

| Param          | Type                                            |
| -------------- | ----------------------------------------------- |
| **`scanCall`** | <code><a href="#iscancall">IScanCall</a></code> |

**Returns:** <code>Promise&lt;<a href="#object">Object</a>&gt;</code>

--------------------


### Interfaces


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


#### IScanCall

The configuration object for the plugin. <a href="#irequest">IRequest</a> is mandatory because it configures needed
things like the url, settings can be left empty, which will use the default settings.

| Prop           | Type                                            |
| -------------- | ----------------------------------------------- |
| **`request`**  | <code><a href="#irequest">IRequest</a></code>   |
| **`settings`** | <code><a href="#isettings">ISettings</a></code> |


#### IRequest

Data used for the http request. Url, headers and body are required, though both header
and body can be an empty object. base64Key and imageTypeKey configure how the image and the
image type will be named when they are added to the body.

| Prop               | Type                                                            |
| ------------------ | --------------------------------------------------------------- |
| **`url`**          | <code>string</code>                                             |
| **`headers`**      | <code><a href="#record">Record</a>&lt;string, string&gt;</code> |
| **`body`**         | <code><a href="#record">Record</a>&lt;string, any&gt;</code>    |
| **`base64Key`**    | <code>string</code>                                             |
| **`imageTypeKey`** | <code>string</code>                                             |


#### ISettings

All settings that can be passed to the plugin. The `detectorSize` value must be between
`0` and `1`, because it determines how many percent of the screen should be covered by
the detector.
If the value is greater than 1 the detector will not be visible on the screen.

| Prop                           | Type                 |
| ------------------------------ | -------------------- |
| **`beepOnSuccess`**            | <code>boolean</code> |
| **`vibrateOnSuccess`**         | <code>boolean</code> |
| **`detectorSize`**             | <code>number</code>  |
| **`detectorAspectRatio`**      | <code>string</code>  |
| **`drawFocusRect`**            | <code>boolean</code> |
| **`focusRectColor`**           | <code>string</code>  |
| **`focusRectBorderRadius`**    | <code>number</code>  |
| **`focusRectBorderThickness`** | <code>number</code>  |
| **`drawFocusLine`**            | <code>boolean</code> |
| **`focusLineColor`**           | <code>string</code>  |
| **`focusLineThickness`**       | <code>number</code>  |
| **`drawFocusBackground`**      | <code>boolean</code> |
| **`focusBackgroundColor`**     | <code>string</code>  |
| **`loadingCircleColor`**       | <code>string</code>  |
| **`loadingCircleSize`**        | <code>number</code>  |


### Type Aliases


#### PropertyKey

<code>string | number | symbol</code>


#### Record

Construct a type with a set of properties K of type T

<code>{
 [P in K]: T;
 }</code>

</docgen-api>
