# terra-capacitor

Wrap TerraiOS and TerraAndroid for capacitor projects

## Install

```bash
npm install terra-capacitor
npx cap sync
```

## API

<docgen-index>

- [`echo(...)`](#echo)
- [`initTerra(...)`](#initterra)
- [`initConnection(...)`](#initconnection)
- [`getUserId(...)`](#getuserid)
- [`getBody(...)`](#getbody)
- [`getActivity(...)`](#getactivity)
- [`getDaily(...)`](#getdaily)
- [`getNutrition(...)`](#getnutrition)
- [`getMenstruation(...)`](#getmenstruation)
- [`getSleep(...)`](#getsleep)
- [`getAthlete(...)`](#getathlete)
- [`activateSensor()`](#activatesensor)
- [`readGlucoseData()`](#readglucosedata)
- [Interfaces](#interfaces)
- [Type Aliases](#type-aliases)
- [Enums](#enums)

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

---

### initTerra(...)

```typescript
initTerra(options: { devId: string; referenceId: string | null; }) => Promise<SuccessMessage>
```

| Param         | Type                                                         |
| ------------- | ------------------------------------------------------------ |
| **`options`** | <code>{ devId: string; referenceId: string \| null; }</code> |

**Returns:** <code>Promise&lt;<a href="#successmessage">SuccessMessage</a>&gt;</code>

---

### initConnection(...)

```typescript
initConnection(options: { connection: Connections; token: string; schedulerOn: boolean; customPermissions: CustomPermissions[]; startIntent: string | null; }) => Promise<any>
```

| Param         | Type                                                                                                                                                                           |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **`options`** | <code>{ connection: <a href="#connections">Connections</a>; token: string; schedulerOn: boolean; customPermissions: CustomPermissions[]; startIntent: string \| null; }</code> |

**Returns:** <code>Promise&lt;any&gt;</code>

---

### getUserId(...)

```typescript
getUserId(options: { connection: Connections; }) => Promise<GetUserId>
```

| Param         | Type                                                                 |
| ------------- | -------------------------------------------------------------------- |
| **`options`** | <code>{ connection: <a href="#connections">Connections</a>; }</code> |

**Returns:** <code>Promise&lt;<a href="#getuserid">GetUserId</a>&gt;</code>

---

### getBody(...)

```typescript
getBody(options: { connection: Connections; startDate: Date; endDate: Date; toWebhook: boolean; }) => Promise<DataMessage>
```

| Param         | Type                                                                                                                                                             |
| ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`options`** | <code>{ connection: <a href="#connections">Connections</a>; startDate: <a href="#date">Date</a>; endDate: <a href="#date">Date</a>; toWebhook: boolean; }</code> |

**Returns:** <code>Promise&lt;<a href="#datamessage">DataMessage</a>&gt;</code>

---

### getActivity(...)

```typescript
getActivity(options: { connection: Connections; startDate: Date; endDate: Date; toWebhook: boolean; }) => Promise<DataMessage>
```

| Param         | Type                                                                                                                                                             |
| ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`options`** | <code>{ connection: <a href="#connections">Connections</a>; startDate: <a href="#date">Date</a>; endDate: <a href="#date">Date</a>; toWebhook: boolean; }</code> |

**Returns:** <code>Promise&lt;<a href="#datamessage">DataMessage</a>&gt;</code>

---

### getDaily(...)

```typescript
getDaily(options: { connection: Connections; startDate: Date; endDate: Date; toWebhook: boolean; }) => Promise<DataMessage>
```

| Param         | Type                                                                                                                                                             |
| ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`options`** | <code>{ connection: <a href="#connections">Connections</a>; startDate: <a href="#date">Date</a>; endDate: <a href="#date">Date</a>; toWebhook: boolean; }</code> |

**Returns:** <code>Promise&lt;<a href="#datamessage">DataMessage</a>&gt;</code>

---

### getNutrition(...)

```typescript
getNutrition(options: { connection: Connections; startDate: Date; endDate: Date; toWebhook: boolean; }) => Promise<DataMessage>
```

| Param         | Type                                                                                                                                                             |
| ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`options`** | <code>{ connection: <a href="#connections">Connections</a>; startDate: <a href="#date">Date</a>; endDate: <a href="#date">Date</a>; toWebhook: boolean; }</code> |

**Returns:** <code>Promise&lt;<a href="#datamessage">DataMessage</a>&gt;</code>

---

### getMenstruation(...)

```typescript
getMenstruation(options: { connection: Connections; startDate: Date; endDate: Date; toWebhook: boolean; }) => Promise<DataMessage>
```

| Param         | Type                                                                                                                                                             |
| ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`options`** | <code>{ connection: <a href="#connections">Connections</a>; startDate: <a href="#date">Date</a>; endDate: <a href="#date">Date</a>; toWebhook: boolean; }</code> |

**Returns:** <code>Promise&lt;<a href="#datamessage">DataMessage</a>&gt;</code>

---

### getSleep(...)

```typescript
getSleep(options: { connection: Connections; startDate: Date; endDate: Date; toWebhook: boolean; }) => Promise<DataMessage>
```

| Param         | Type                                                                                                                                                             |
| ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`options`** | <code>{ connection: <a href="#connections">Connections</a>; startDate: <a href="#date">Date</a>; endDate: <a href="#date">Date</a>; toWebhook: boolean; }</code> |

**Returns:** <code>Promise&lt;<a href="#datamessage">DataMessage</a>&gt;</code>

---

### getAthlete(...)

```typescript
getAthlete(options: { connection: Connections; toWebhook: boolean; }) => Promise<DataMessage>
```

| Param         | Type                                                                                     |
| ------------- | ---------------------------------------------------------------------------------------- |
| **`options`** | <code>{ connection: <a href="#connections">Connections</a>; toWebhook: boolean; }</code> |

**Returns:** <code>Promise&lt;<a href="#datamessage">DataMessage</a>&gt;</code>

---

### activateSensor()

```typescript
activateSensor() => Promise<DataMessage>
```

**Returns:** <code>Promise&lt;<a href="#datamessage">DataMessage</a>&gt;</code>

---

### readGlucoseData()

```typescript
readGlucoseData() => Promise<DataMessage>
```

**Returns:** <code>Promise&lt;<a href="#datamessage">DataMessage</a>&gt;</code>

---

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

#### Date

Enables basic storage and retrieval of dates and times.

| Method                 | Signature                                                                                                    | Description                                                                                                                                                   |
| ---------------------- | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **toString**           | () =&gt; string                                                                                              | Returns a string representation of a date. The format of the string depends on the locale.                                                                    |
| **toDateString**       | () =&gt; string                                                                                              | Returns a date as a string value.                                                                                                                             |
| **toTimeString**       | () =&gt; string                                                                                              | Returns a time as a string value.                                                                                                                             |
| **toLocaleString**     | () =&gt; string                                                                                              | Returns a value as a string value appropriate to the host environment's current locale.                                                                       |
| **toLocaleDateString** | () =&gt; string                                                                                              | Returns a date as a string value appropriate to the host environment's current locale.                                                                        |
| **toLocaleTimeString** | () =&gt; string                                                                                              | Returns a time as a string value appropriate to the host environment's current locale.                                                                        |
| **valueOf**            | () =&gt; number                                                                                              | Returns the stored time value in milliseconds since midnight, January 1, 1970 UTC.                                                                            |
| **getTime**            | () =&gt; number                                                                                              | Gets the time value in milliseconds.                                                                                                                          |
| **getFullYear**        | () =&gt; number                                                                                              | Gets the year, using local time.                                                                                                                              |
| **getUTCFullYear**     | () =&gt; number                                                                                              | Gets the year using Universal Coordinated Time (UTC).                                                                                                         |
| **getMonth**           | () =&gt; number                                                                                              | Gets the month, using local time.                                                                                                                             |
| **getUTCMonth**        | () =&gt; number                                                                                              | Gets the month of a <a href="#date">Date</a> object using Universal Coordinated Time (UTC).                                                                   |
| **getDate**            | () =&gt; number                                                                                              | Gets the day-of-the-month, using local time.                                                                                                                  |
| **getUTCDate**         | () =&gt; number                                                                                              | Gets the day-of-the-month, using Universal Coordinated Time (UTC).                                                                                            |
| **getDay**             | () =&gt; number                                                                                              | Gets the day of the week, using local time.                                                                                                                   |
| **getUTCDay**          | () =&gt; number                                                                                              | Gets the day of the week using Universal Coordinated Time (UTC).                                                                                              |
| **getHours**           | () =&gt; number                                                                                              | Gets the hours in a date, using local time.                                                                                                                   |
| **getUTCHours**        | () =&gt; number                                                                                              | Gets the hours value in a <a href="#date">Date</a> object using Universal Coordinated Time (UTC).                                                             |
| **getMinutes**         | () =&gt; number                                                                                              | Gets the minutes of a <a href="#date">Date</a> object, using local time.                                                                                      |
| **getUTCMinutes**      | () =&gt; number                                                                                              | Gets the minutes of a <a href="#date">Date</a> object using Universal Coordinated Time (UTC).                                                                 |
| **getSeconds**         | () =&gt; number                                                                                              | Gets the seconds of a <a href="#date">Date</a> object, using local time.                                                                                      |
| **getUTCSeconds**      | () =&gt; number                                                                                              | Gets the seconds of a <a href="#date">Date</a> object using Universal Coordinated Time (UTC).                                                                 |
| **getMilliseconds**    | () =&gt; number                                                                                              | Gets the milliseconds of a <a href="#date">Date</a>, using local time.                                                                                        |
| **getUTCMilliseconds** | () =&gt; number                                                                                              | Gets the milliseconds of a <a href="#date">Date</a> object using Universal Coordinated Time (UTC).                                                            |
| **getTimezoneOffset**  | () =&gt; number                                                                                              | Gets the difference in minutes between the time on the local computer and Universal Coordinated Time (UTC).                                                   |
| **setTime**            | (time: number) =&gt; number                                                                                  | Sets the date and time value in the <a href="#date">Date</a> object.                                                                                          |
| **setMilliseconds**    | (ms: number) =&gt; number                                                                                    | Sets the milliseconds value in the <a href="#date">Date</a> object using local time.                                                                          |
| **setUTCMilliseconds** | (ms: number) =&gt; number                                                                                    | Sets the milliseconds value in the <a href="#date">Date</a> object using Universal Coordinated Time (UTC).                                                    |
| **setSeconds**         | (sec: number, ms?: number \| undefined) =&gt; number                                                         | Sets the seconds value in the <a href="#date">Date</a> object using local time.                                                                               |
| **setUTCSeconds**      | (sec: number, ms?: number \| undefined) =&gt; number                                                         | Sets the seconds value in the <a href="#date">Date</a> object using Universal Coordinated Time (UTC).                                                         |
| **setMinutes**         | (min: number, sec?: number \| undefined, ms?: number \| undefined) =&gt; number                              | Sets the minutes value in the <a href="#date">Date</a> object using local time.                                                                               |
| **setUTCMinutes**      | (min: number, sec?: number \| undefined, ms?: number \| undefined) =&gt; number                              | Sets the minutes value in the <a href="#date">Date</a> object using Universal Coordinated Time (UTC).                                                         |
| **setHours**           | (hours: number, min?: number \| undefined, sec?: number \| undefined, ms?: number \| undefined) =&gt; number | Sets the hour value in the <a href="#date">Date</a> object using local time.                                                                                  |
| **setUTCHours**        | (hours: number, min?: number \| undefined, sec?: number \| undefined, ms?: number \| undefined) =&gt; number | Sets the hours value in the <a href="#date">Date</a> object using Universal Coordinated Time (UTC).                                                           |
| **setDate**            | (date: number) =&gt; number                                                                                  | Sets the numeric day-of-the-month value of the <a href="#date">Date</a> object using local time.                                                              |
| **setUTCDate**         | (date: number) =&gt; number                                                                                  | Sets the numeric day of the month in the <a href="#date">Date</a> object using Universal Coordinated Time (UTC).                                              |
| **setMonth**           | (month: number, date?: number \| undefined) =&gt; number                                                     | Sets the month value in the <a href="#date">Date</a> object using local time.                                                                                 |
| **setUTCMonth**        | (month: number, date?: number \| undefined) =&gt; number                                                     | Sets the month value in the <a href="#date">Date</a> object using Universal Coordinated Time (UTC).                                                           |
| **setFullYear**        | (year: number, month?: number \| undefined, date?: number \| undefined) =&gt; number                         | Sets the year of the <a href="#date">Date</a> object using local time.                                                                                        |
| **setUTCFullYear**     | (year: number, month?: number \| undefined, date?: number \| undefined) =&gt; number                         | Sets the year value in the <a href="#date">Date</a> object using Universal Coordinated Time (UTC).                                                            |
| **toUTCString**        | () =&gt; string                                                                                              | Returns a date converted to a string using Universal Coordinated Time (UTC).                                                                                  |
| **toISOString**        | () =&gt; string                                                                                              | Returns a date as a string value in ISO format.                                                                                                               |
| **toJSON**             | (key?: any) =&gt; string                                                                                     | Used by the JSON.stringify method to enable the transformation of an object's data for JavaScript <a href="#object">Object</a> Notation (JSON) serialization. |

### Type Aliases

#### SuccessMessage

<code>{ success: boolean; error: string | null; }</code>

#### GetUserId

<code>{ success: boolean; userId: string | null; }</code>

#### DataMessage

<code>{ success: boolean; data: <a href="#object">Object</a>; error: string | null; }</code>

#### PropertyKey

<code>string | number | symbol</code>

### Enums

#### Connections

| Members                 | Value                          |
| ----------------------- | ------------------------------ |
| **`'APPLE_HEALTH'`**    | <code>'APPLE_HEALTH'</code>    |
| **`'FREESTYLE_LIBRE'`** | <code>'FREESTYLE_LIBRE'</code> |
| **`'GOOGLE'`**          | <code>'GOOGLE'</code>          |
| **`'SAMSUNG'`**         | <code>'SAMSUNG'</code>         |

#### CustomPermissions

| Members                         | Value                                  |
| ------------------------------- | -------------------------------------- |
| **`'WORKOUT_TYPES'`**           | <code>'WORKOUT_TYPES'</code>           |
| **`'ACTIVITY_SUMMARY'`**        | <code>'ACTIVITY_SUMMARY'</code>        |
| **`'LOCATION'`**                | <code>'LOCATION'</code>                |
| **`'CALORIES'`**                | <code>'CALORIES'</code>                |
| **`'STEPS'`**                   | <code>'STEPS'</code>                   |
| **`'HEART_RATE'`**              | <code>'HEART_RATE'</code>              |
| **`'HEART_RATE_VARIABILITY'`**  | <code>'HEART_RATE_VARIABILITY'</code>  |
| **`'VO2MAX'`**                  | <code>'VO2MAX'</code>                  |
| **`'HEIGHT'`**                  | <code>'HEIGHT'</code>                  |
| **`'ACTIVE_DURATIONS'`**        | <code>'ACTIVE_DURATIONS'</code>        |
| **`'WEIGHT'`**                  | <code>'WEIGHT'</code>                  |
| **`'FLIGHTS_CLIMBED'`**         | <code>'FLIGHTS_CLIMBED'</code>         |
| **`'BMI'`**                     | <code>'BMI'</code>                     |
| **`'BODY_FAT'`**                | <code>'BODY_FAT'</code>                |
| **`'EXERCISE_DISTANCE'`**       | <code>'EXERCISE_DISTANCE'</code>       |
| **`'GENDER'`**                  | <code>'GENDER'</code>                  |
| **`'DATE_OF_BIRTH'`**           | <code>'DATE_OF_BIRTH'</code>           |
| **`'BASAL_ENERGY_BURNED'`**     | <code>'BASAL_ENERGY_BURNED'</code>     |
| **`'SWIMMING_SUMMARY'`**        | <code>'SWIMMING_SUMMARY'</code>        |
| **`'RESTING_HEART_RATE'`**      | <code>'RESTING_HEART_RATE'</code>      |
| **`'BLOOD_PRESSURE'`**          | <code>'BLOOD_PRESSURE'</code>          |
| **`'BLOOD_GLUCOSE'`**           | <code>'BLOOD_GLUCOSE'</code>           |
| **`'BODY_TEMPERATURE'`**        | <code>'BODY_TEMPERATURE'</code>        |
| **`'MINDFULNESS'`**             | <code>'MINDFULNESS'</code>             |
| **`'LEAN_BODY_MASS'`**          | <code>'LEAN_BODY_MASS'</code>          |
| **`'OXYGEN_SATURATION'`**       | <code>'OXYGEN_SATURATION'</code>       |
| **`'SLEEP_ANALYSIS'`**          | <code>'SLEEP_ANALYSIS'</code>          |
| **`'RESPIRATORY_RATE'`**        | <code>'RESPIRATORY_RATE'</code>        |
| **`'NUTRITION_SODIUM'`**        | <code>'NUTRITION_SODIUM'</code>        |
| **`'NUTRITION_PROTEIN'`**       | <code>'NUTRITION_PROTEIN'</code>       |
| **`'NUTRITION_CARBOHYDRATES'`** | <code>'NUTRITION_CARBOHYDRATES'</code> |
| **`'NUTRITION_FIBRE'`**         | <code>'NUTRITION_FIBRE'</code>         |
| **`'NUTRITION_FAT_TOTAL'`**     | <code>'NUTRITION_FAT_TOTAL'</code>     |
| **`'NUTRITION_SUGAR'`**         | <code>'NUTRITION_SUGAR'</code>         |
| **`'NUTRITION_VITAMIN_C'`**     | <code>'NUTRITION_VITAMIN_C'</code>     |
| **`'NUTRITION_VITAMIN_A'`**     | <code>'NUTRITION_VITAMIN_A'</code>     |
| **`'NUTRITION_CALORIES'`**      | <code>'NUTRITION_CALORIES'</code>      |
| **`'NUTRITION_WATER'`**         | <code>'NUTRITION_WATER'</code>         |
| **`'NUTRITION_CHOLESTEROL'`**   | <code>'NUTRITION_CHOLESTEROL'</code>   |

</docgen-api>
