# capacitor-mock-location-checker

Capacitor plugin to avoid location mocking

## Install

```bash
npm install capacitor-mock-location-checker
npx cap sync
```

## Example

```typescript
import { MockLocationChecker } from 'capacitor-mock-location-checker';


// Add exclution or white list
constructor(private platfrom: Platform) {
    this.platfrom.ready().then(() => {
      // Add exclution or white list
      this.checkMock(["com.transsion.fmradio", "com.reallytek.wg"]);

      
      // without white list
      this.checkMock([]);
    }
    )
  }

checkMock = async (whiteList: Array<string>) => {
    const checkResult = await MockLocationChecker.checkMock({whiteList});

    console.log('Mock Location Check Result:');
    console.log('Is Mock Location: ', checkResult.isMock);
    console.log('Messages: ', checkResult.messages);
    console.log('Indicated Apps: ', checkResult.indicated.join("\n"));


    // Open Detail First Indicated App
    if (checkResult.indicated != null) {
      await MockLocationChecker.goToMockLocationAppDetail({ packageName: checkResult.indicated[0] });
    }
  };
```

Add this to your app Manifest.xml

```xml
<uses-permission android:name="android.permission.QUERY_ALL_PACKAGES"/>
```
or,

```xml
<uses-permission android:name="android.permission.QUERY_ALL_PACKAGES"
    tools:ignore="QueryAllPackagesPermission" />
```
## API

<docgen-index>

* [`checkMock(...)`](#checkmock)
* [`isLocationFromMockProvider()`](#islocationfrommockprovider)
* [`goToMockLocationAppDetail(...)`](#gotomocklocationappdetail)
* [`checkMockGeoLocation()`](#checkmockgeolocation)
* [`isRooted()`](#isrooted)
* [`isRootedWithBusyBox()`](#isrootedwithbusybox)
* [`isRootedWithEmulator()`](#isrootedwithemulator)
* [`isRootedWithBusyBoxWithEmulator()`](#isrootedwithbusyboxwithemulator)
* [`whatIsRooted(...)`](#whatisrooted)
* [`getDeviceInfo()`](#getdeviceinfo)
* [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### checkMock(...)

```typescript
checkMock(options: { whiteList: Array<string>; }) => Promise<CheckMockResult>
```

| Param         | Type                                  | Description                                 |
| ------------- | ------------------------------------- | ------------------------------------------- |
| **`options`** | <code>{ whiteList: string[]; }</code> | : <a href="#array">Array</a>&lt;string&gt;} |

**Returns:** <code>Promise&lt;<a href="#checkmockresult">CheckMockResult</a>&gt;</code>

--------------------


### isLocationFromMockProvider()

```typescript
isLocationFromMockProvider() => Promise<Boolean>
```

**Returns:** <code>Promise&lt;<a href="#boolean">Boolean</a>&gt;</code>

--------------------


### goToMockLocationAppDetail(...)

```typescript
goToMockLocationAppDetail(options: { packageName: string; }) => Promise<void>
```

| Param         | Type                                  | Description |
| ------------- | ------------------------------------- | ----------- |
| **`options`** | <code>{ packageName: string; }</code> | : string}   |

--------------------


### checkMockGeoLocation()

```typescript
checkMockGeoLocation() => Promise<CheckMockResult>
```

**Returns:** <code>Promise&lt;<a href="#checkmockresult">CheckMockResult</a>&gt;</code>

--------------------


### isRooted()

```typescript
isRooted() => Promise<{ isRooted: boolean; }>
```

**Returns:** <code>Promise&lt;{ isRooted: boolean; }&gt;</code>

--------------------


### isRootedWithBusyBox()

```typescript
isRootedWithBusyBox() => Promise<{ isRooted: boolean; }>
```

**Returns:** <code>Promise&lt;{ isRooted: boolean; }&gt;</code>

--------------------


### isRootedWithEmulator()

```typescript
isRootedWithEmulator() => Promise<{ isRooted: boolean; }>
```

**Returns:** <code>Promise&lt;{ isRooted: boolean; }&gt;</code>

--------------------


### isRootedWithBusyBoxWithEmulator()

```typescript
isRootedWithBusyBoxWithEmulator() => Promise<{ isRooted: boolean; }>
```

**Returns:** <code>Promise&lt;{ isRooted: boolean; }&gt;</code>

--------------------


### whatIsRooted(...)

```typescript
whatIsRooted(action: string) => Promise<{ isRooted: boolean; }>
```

| Param        | Type                | Description |
| ------------ | ------------------- | ----------- |
| **`action`** | <code>string</code> | String      |

**Returns:** <code>Promise&lt;{ isRooted: boolean; }&gt;</code>

--------------------


### getDeviceInfo()

```typescript
getDeviceInfo() => Promise<DeviceInfo>
```

Retrieve device information.

**Returns:** <code>Promise&lt;<a href="#deviceinfo">DeviceInfo</a>&gt;</code>

--------------------


### Interfaces


#### CheckMockResult

| Prop            | Type                                                  |
| --------------- | ----------------------------------------------------- |
| **`isRoot`**    | <code>boolean</code>                                  |
| **`isMock`**    | <code>boolean</code>                                  |
| **`messages`**  | <code>string</code>                                   |
| **`indicated`** | <code><a href="#array">Array</a>&lt;string&gt;</code> |


#### Array

| Prop         | Type                | Description                                                                                            |
| ------------ | ------------------- | ------------------------------------------------------------------------------------------------------ |
| **`length`** | <code>number</code> | Gets or sets the length of the array. This is a number one higher than the highest index in the array. |

| Method             | Signature                                                                                                                     | Description                                                                                                                                                                                                                                 |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **toString**       | () =&gt; string                                                                                                               | Returns a string representation of an array.                                                                                                                                                                                                |
| **toLocaleString** | () =&gt; string                                                                                                               | Returns a string representation of an array. The elements are converted to string using their toLocalString methods.                                                                                                                        |
| **pop**            | () =&gt; T \| undefined                                                                                                       | Removes the last element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.                                                                                                          |
| **push**           | (...items: T[]) =&gt; number                                                                                                  | Appends new elements to the end of an array, and returns the new length of the array.                                                                                                                                                       |
| **concat**         | (...items: <a href="#concatarray">ConcatArray</a>&lt;T&gt;[]) =&gt; T[]                                                       | Combines two or more arrays. This method returns a new array without modifying any existing arrays.                                                                                                                                         |
| **concat**         | (...items: (T \| <a href="#concatarray">ConcatArray</a>&lt;T&gt;)[]) =&gt; T[]                                                | Combines two or more arrays. This method returns a new array without modifying any existing arrays.                                                                                                                                         |
| **join**           | (separator?: string \| undefined) =&gt; string                                                                                | Adds all the elements of an array into a string, separated by the specified separator string.                                                                                                                                               |
| **reverse**        | () =&gt; T[]                                                                                                                  | Reverses the elements in an array in place. This method mutates the array and returns a reference to the same array.                                                                                                                        |
| **shift**          | () =&gt; T \| undefined                                                                                                       | Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.                                                                                                         |
| **slice**          | (start?: number \| undefined, end?: number \| undefined) =&gt; T[]                                                            | Returns a copy of a section of an array. For both start and end, a negative index can be used to indicate an offset from the end of the array. For example, -2 refers to the second to last element of the array.                           |
| **sort**           | (compareFn?: ((a: T, b: T) =&gt; number) \| undefined) =&gt; this                                                             | Sorts an array in place. This method mutates the array and returns a reference to the same array.                                                                                                                                           |
| **splice**         | (start: number, deleteCount?: number \| undefined) =&gt; T[]                                                                  | Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.                                                                                                                      |
| **splice**         | (start: number, deleteCount: number, ...items: T[]) =&gt; T[]                                                                 | Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.                                                                                                                      |
| **unshift**        | (...items: T[]) =&gt; number                                                                                                  | Inserts new elements at the start of an array, and returns the new length of the array.                                                                                                                                                     |
| **indexOf**        | (searchElement: T, fromIndex?: number \| undefined) =&gt; number                                                              | Returns the index of the first occurrence of a value in an array, or -1 if it is not present.                                                                                                                                               |
| **lastIndexOf**    | (searchElement: T, fromIndex?: number \| undefined) =&gt; number                                                              | Returns the index of the last occurrence of a specified value in an array, or -1 if it is not present.                                                                                                                                      |
| **every**          | &lt;S extends T&gt;(predicate: (value: T, index: number, array: T[]) =&gt; value is S, thisArg?: any) =&gt; this is S[]       | Determines whether all the members of an array satisfy the specified test.                                                                                                                                                                  |
| **every**          | (predicate: (value: T, index: number, array: T[]) =&gt; unknown, thisArg?: any) =&gt; boolean                                 | Determines whether all the members of an array satisfy the specified test.                                                                                                                                                                  |
| **some**           | (predicate: (value: T, index: number, array: T[]) =&gt; unknown, thisArg?: any) =&gt; boolean                                 | Determines whether the specified callback function returns true for any element of an array.                                                                                                                                                |
| **forEach**        | (callbackfn: (value: T, index: number, array: T[]) =&gt; void, thisArg?: any) =&gt; void                                      | Performs the specified action for each element in an array.                                                                                                                                                                                 |
| **map**            | &lt;U&gt;(callbackfn: (value: T, index: number, array: T[]) =&gt; U, thisArg?: any) =&gt; U[]                                 | Calls a defined callback function on each element of an array, and returns an array that contains the results.                                                                                                                              |
| **filter**         | &lt;S extends T&gt;(predicate: (value: T, index: number, array: T[]) =&gt; value is S, thisArg?: any) =&gt; S[]               | Returns the elements of an array that meet the condition specified in a callback function.                                                                                                                                                  |
| **filter**         | (predicate: (value: T, index: number, array: T[]) =&gt; unknown, thisArg?: any) =&gt; T[]                                     | Returns the elements of an array that meet the condition specified in a callback function.                                                                                                                                                  |
| **reduce**         | (callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) =&gt; T) =&gt; T                           | Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.                      |
| **reduce**         | (callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) =&gt; T, initialValue: T) =&gt; T          |                                                                                                                                                                                                                                             |
| **reduce**         | &lt;U&gt;(callbackfn: (previousValue: U, currentValue: T, currentIndex: number, array: T[]) =&gt; U, initialValue: U) =&gt; U | Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.                      |
| **reduceRight**    | (callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) =&gt; T) =&gt; T                           | Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function. |
| **reduceRight**    | (callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) =&gt; T, initialValue: T) =&gt; T          |                                                                                                                                                                                                                                             |
| **reduceRight**    | &lt;U&gt;(callbackfn: (previousValue: U, currentValue: T, currentIndex: number, array: T[]) =&gt; U, initialValue: U) =&gt; U | Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function. |


#### ConcatArray

| Prop         | Type                |
| ------------ | ------------------- |
| **`length`** | <code>number</code> |

| Method    | Signature                                                          |
| --------- | ------------------------------------------------------------------ |
| **join**  | (separator?: string \| undefined) =&gt; string                     |
| **slice** | (start?: number \| undefined, end?: number \| undefined) =&gt; T[] |


#### Boolean

| Method      | Signature        | Description                                          |
| ----------- | ---------------- | ---------------------------------------------------- |
| **valueOf** | () =&gt; boolean | Returns the primitive value of the specified object. |


#### DeviceInfo

| Prop                | Type                |
| ------------------- | ------------------- |
| **`DEVICE`**        | <code>string</code> |
| **`MODEL`**         | <code>string</code> |
| **`MANUFACTURER`**  | <code>string</code> |
| **`BRAND`**         | <code>string</code> |
| **`BOARD`**         | <code>string</code> |
| **`HARDWARE`**      | <code>string</code> |
| **`PRODUCT`**       | <code>string</code> |
| **`FINGERPRINT`**   | <code>string</code> |
| **`HOST`**          | <code>string</code> |
| **`USER`**          | <code>string</code> |
| **`OSNAME`**        | <code>string</code> |
| **`OSVERSION`**     | <code>string</code> |
| **`V_INCREMENTAL`** | <code>string</code> |
| **`V_RELEASE`**     | <code>string</code> |
| **`V_SDK_INT`**     | <code>string</code> |

</docgen-api>
