# capacitor-plugin-dynamsoft-document-normalizer

A document scanning plugin for Capacitor using [Dynamsoft Document Normalizer](https://www.dynamsoft.com/document-normalizer/docs/).

[Online demo](https://chic-syrniki-fac13f.netlify.app/)

## Supported Platforms

- Web
- Android
- iOS

## Install

```bash
npm install capacitor-plugin-dynamsoft-document-normalizer
npx cap sync
```

## API

<docgen-index>

- [`initialize()`](#initialize)
- [`initLicense(...)`](#initlicense)
- [`initRuntimeSettingsFromString(...)`](#initruntimesettingsfromstring)
- [`detect(...)`](#detect)
- [`normalize(...)`](#normalize)
- [`setEngineResourcesPath(...)`](#setengineresourcespath)
- [Interfaces](#interfaces)
- [Type Aliases](#type-aliases)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### initialize()

```typescript
initialize() => Promise<void>
```

---

### initLicense(...)

```typescript
initLicense(options: { license: string; }) => Promise<void>
```

| Param         | Type                              |
| ------------- | --------------------------------- |
| **`options`** | <code>{ license: string; }</code> |

---

### initRuntimeSettingsFromString(...)

```typescript
initRuntimeSettingsFromString(options: { template: string; }) => Promise<void>
```

| Param         | Type                               |
| ------------- | ---------------------------------- |
| **`options`** | <code>{ template: string; }</code> |

---

### detect(...)

```typescript
detect(options: { source: string | DCEFrame | HTMLImageElement | HTMLCanvasElement; copy?: boolean; }) => Promise<{ results: DetectedQuadResult[]; }>
```

Android and iOS only support base64 string. The copy option is for web platform to keep the frame's data.

| Param         | Type                                          |
| ------------- | --------------------------------------------- |
| **`options`** | <code>{ source: any; copy?: boolean; }</code> |

**Returns:** <code>Promise&lt;{ results: DetectedQuadResult[]; }&gt;</code>

---

### normalize(...)

```typescript
normalize(options: { source: string | DCEFrame | HTMLImageElement | HTMLCanvasElement; quad: Quadrilateral; }) => Promise<{ result: NormalizedImageResult; }>
```

Android and iOS only support base64 string

| Param         | Type                                                                            |
| ------------- | ------------------------------------------------------------------------------- |
| **`options`** | <code>{ source: any; quad: <a href="#quadrilateral">Quadrilateral</a>; }</code> |

**Returns:** <code>Promise&lt;{ result: <a href="#normalizedimageresult">NormalizedImageResult</a>; }&gt;</code>

---

### setEngineResourcesPath(...)

```typescript
setEngineResourcesPath(options: { path: string; }) => Promise<void>
```

Web Only

| Param         | Type                           |
| ------------- | ------------------------------ |
| **`options`** | <code>{ path: string; }</code> |

---

### Interfaces

#### DetectedQuadResult

| Prop                               | Type                                                    |
| ---------------------------------- | ------------------------------------------------------- |
| **`location`**                     | <code><a href="#quadrilateral">Quadrilateral</a></code> |
| **`confidenceAsDocumentBoundary`** | <code>number</code>                                     |

#### Quadrilateral

| Prop         | Type                                                                                |
| ------------ | ----------------------------------------------------------------------------------- |
| **`points`** | <code>[Point, <a href="#point">Point</a>, <a href="#point">Point</a>, Point]</code> |

#### Point

| Prop    | Type                |
| ------- | ------------------- |
| **`x`** | <code>number</code> |
| **`y`** | <code>number</code> |

#### DCEFrame

| Prop              | Type                                              |
| ----------------- | ------------------------------------------------- |
| **`data`**        | <code><a href="#uint8array">Uint8Array</a></code> |
| **`region`**      | <code><a href="#region">Region</a></code>         |
| **`sx`**          | <code>number</code>                               |
| **`sy`**          | <code>number</code>                               |
| **`width`**       | <code>number</code>                               |
| **`height`**      | <code>number</code>                               |
| **`stride`**      | <code>number</code>                               |
| **`colorMode`**   | <code>string</code>                               |
| **`pixelFormat`** | <code>string</code>                               |
| **`timeSpent`**   | <code>number</code>                               |
| **`timeStamp`**   | <code>number</code>                               |
| **`isCropped`**   | <code>boolean</code>                              |
| **`toCanvas`**    | <code>() =&gt; any</code>                         |
| **`_sWidth`**     | <code>number</code>                               |
| **`_sHeight`**    | <code>number</code>                               |
| **`_bUseWebGL`**  | <code>boolean</code>                              |

#### Uint8Array

A typed array of 8-bit unsigned integer values. The contents are initialized to 0. If the
requested number of bytes could not be allocated an exception is raised.

| Prop                    | Type                                                        | Description                                                                  |
| ----------------------- | ----------------------------------------------------------- | ---------------------------------------------------------------------------- |
| **`BYTES_PER_ELEMENT`** | <code>number</code>                                         | The size in bytes of each element in the array.                              |
| **`buffer`**            | <code><a href="#arraybufferlike">ArrayBufferLike</a></code> | The <a href="#arraybuffer">ArrayBuffer</a> instance referenced by the array. |
| **`byteLength`**        | <code>number</code>                                         | The length in bytes of the array.                                            |
| **`byteOffset`**        | <code>number</code>                                         | The offset in bytes of the array.                                            |
| **`length`**            | <code>number</code>                                         | The length of the array.                                                     |

| Method             | Signature                                                                                                                                                                      | Description                                                                                                                                                                                                                                 |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **copyWithin**     | (target: number, start: number, end?: number \| undefined) =&gt; this                                                                                                          | Returns the this object after copying a section of the array identified by start and end to the same array starting at position target                                                                                                      |
| **every**          | (predicate: (value: number, index: number, array: <a href="#uint8array">Uint8Array</a>) =&gt; unknown, thisArg?: any) =&gt; boolean                                            | Determines whether all the members of an array satisfy the specified test.                                                                                                                                                                  |
| **fill**           | (value: number, start?: number \| undefined, end?: number \| undefined) =&gt; this                                                                                             | Returns the this object after filling the section identified by start and end with value                                                                                                                                                    |
| **filter**         | (predicate: (value: number, index: number, array: <a href="#uint8array">Uint8Array</a>) =&gt; any, thisArg?: any) =&gt; <a href="#uint8array">Uint8Array</a>                   | Returns the elements of an array that meet the condition specified in a callback function.                                                                                                                                                  |
| **find**           | (predicate: (value: number, index: number, obj: <a href="#uint8array">Uint8Array</a>) =&gt; boolean, thisArg?: any) =&gt; number \| undefined                                  | Returns the value of the first element in the array where predicate is true, and undefined otherwise.                                                                                                                                       |
| **findIndex**      | (predicate: (value: number, index: number, obj: <a href="#uint8array">Uint8Array</a>) =&gt; boolean, thisArg?: any) =&gt; number                                               | Returns the index of the first element in the array where predicate is true, and -1 otherwise.                                                                                                                                              |
| **forEach**        | (callbackfn: (value: number, index: number, array: <a href="#uint8array">Uint8Array</a>) =&gt; void, thisArg?: any) =&gt; void                                                 | Performs the specified action for each element in an array.                                                                                                                                                                                 |
| **indexOf**        | (searchElement: number, fromIndex?: number \| undefined) =&gt; number                                                                                                          | Returns the index of the first occurrence of a value in an array.                                                                                                                                                                           |
| **join**           | (separator?: string \| undefined) =&gt; string                                                                                                                                 | Adds all the elements of an array separated by the specified separator string.                                                                                                                                                              |
| **lastIndexOf**    | (searchElement: number, fromIndex?: number \| undefined) =&gt; number                                                                                                          | Returns the index of the last occurrence of a value in an array.                                                                                                                                                                            |
| **map**            | (callbackfn: (value: number, index: number, array: <a href="#uint8array">Uint8Array</a>) =&gt; number, thisArg?: any) =&gt; <a href="#uint8array">Uint8Array</a>               | Calls a defined callback function on each element of an array, and returns an array that contains the results.                                                                                                                              |
| **reduce**         | (callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: <a href="#uint8array">Uint8Array</a>) =&gt; number) =&gt; number                       | Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.                      |
| **reduce**         | (callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: <a href="#uint8array">Uint8Array</a>) =&gt; number, initialValue: number) =&gt; number |                                                                                                                                                                                                                                             |
| **reduce**         | &lt;U&gt;(callbackfn: (previousValue: U, currentValue: number, currentIndex: number, array: <a href="#uint8array">Uint8Array</a>) =&gt; U, initialValue: U) =&gt; U            | Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.                      |
| **reduceRight**    | (callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: <a href="#uint8array">Uint8Array</a>) =&gt; number) =&gt; number                       | Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function. |
| **reduceRight**    | (callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: <a href="#uint8array">Uint8Array</a>) =&gt; number, initialValue: number) =&gt; number |                                                                                                                                                                                                                                             |
| **reduceRight**    | &lt;U&gt;(callbackfn: (previousValue: U, currentValue: number, currentIndex: number, array: <a href="#uint8array">Uint8Array</a>) =&gt; U, initialValue: U) =&gt; U            | Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function. |
| **reverse**        | () =&gt; <a href="#uint8array">Uint8Array</a>                                                                                                                                  | Reverses the elements in an Array.                                                                                                                                                                                                          |
| **set**            | (array: <a href="#arraylike">ArrayLike</a>&lt;number&gt;, offset?: number \| undefined) =&gt; void                                                                             | Sets a value or an array of values.                                                                                                                                                                                                         |
| **slice**          | (start?: number \| undefined, end?: number \| undefined) =&gt; <a href="#uint8array">Uint8Array</a>                                                                            | Returns a section of an array.                                                                                                                                                                                                              |
| **some**           | (predicate: (value: number, index: number, array: <a href="#uint8array">Uint8Array</a>) =&gt; unknown, thisArg?: any) =&gt; boolean                                            | Determines whether the specified callback function returns true for any element of an array.                                                                                                                                                |
| **sort**           | (compareFn?: ((a: number, b: number) =&gt; number) \| undefined) =&gt; this                                                                                                    | Sorts an array.                                                                                                                                                                                                                             |
| **subarray**       | (begin?: number \| undefined, end?: number \| undefined) =&gt; <a href="#uint8array">Uint8Array</a>                                                                            | Gets a new <a href="#uint8array">Uint8Array</a> view of the <a href="#arraybuffer">ArrayBuffer</a> store for this array, referencing the elements at begin, inclusive, up to end, exclusive.                                                |
| **toLocaleString** | () =&gt; string                                                                                                                                                                | Converts a number to a string by using the current locale.                                                                                                                                                                                  |
| **toString**       | () =&gt; string                                                                                                                                                                | Returns a string representation of an array.                                                                                                                                                                                                |
| **valueOf**        | () =&gt; <a href="#uint8array">Uint8Array</a>                                                                                                                                  | Returns the primitive value of the specified object.                                                                                                                                                                                        |

#### ArrayLike

| Prop         | Type                |
| ------------ | ------------------- |
| **`length`** | <code>number</code> |

#### ArrayBufferTypes

Allowed <a href="#arraybuffer">ArrayBuffer</a> types for the buffer of an ArrayBufferView and related Typed Arrays.

| Prop              | Type                                                |
| ----------------- | --------------------------------------------------- |
| **`ArrayBuffer`** | <code><a href="#arraybuffer">ArrayBuffer</a></code> |

#### ArrayBuffer

Represents a raw buffer of binary data, which is used to store data for the
different typed arrays. ArrayBuffers cannot be read from or written to directly,
but can be passed to a typed array or DataView Object to interpret the raw
buffer as needed.

| Prop             | Type                | Description                                                                     |
| ---------------- | ------------------- | ------------------------------------------------------------------------------- |
| **`byteLength`** | <code>number</code> | Read-only. The length of the <a href="#arraybuffer">ArrayBuffer</a> (in bytes). |

| Method    | Signature                                                                               | Description                                                     |
| --------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------- |
| **slice** | (begin: number, end?: number \| undefined) =&gt; <a href="#arraybuffer">ArrayBuffer</a> | Returns a section of an <a href="#arraybuffer">ArrayBuffer</a>. |

#### Region

| Prop                             | Type                           |
| -------------------------------- | ------------------------------ |
| **`regionBottom`**               | <code>number</code>            |
| **`regionRight`**                | <code>number</code>            |
| **`regionLeft`**                 | <code>number</code>            |
| **`regionTop`**                  | <code>number</code>            |
| **`regionMeasuredByPercentage`** | <code>number \| boolean</code> |

#### NormalizedImageResult

| Prop             | Type                                                                     |
| ---------------- | ------------------------------------------------------------------------ |
| **`image`**      | <code><a href="#ddnimage">DDNImage</a></code>                            |
| **`saveToFile`** | <code>(name: string, download?: boolean) =&gt; Promise&lt;any&gt;</code> |

#### DDNImage

| Prop           | Type                                                                       |
| -------------- | -------------------------------------------------------------------------- |
| **`toBlob`**   | <code>(type?: 'image/png' \| 'image/jpeg') =&gt; Promise&lt;any&gt;</code> |
| **`toImage`**  | <code>(type?: 'image/png' \| 'image/jpeg') =&gt; any</code>                |
| **`toCanvas`** | <code>() =&gt; any</code>                                                  |

### Type Aliases

#### ArrayBufferLike

<code>ArrayBufferTypes[keyof ArrayBufferTypes]</code>

</docgen-api>
