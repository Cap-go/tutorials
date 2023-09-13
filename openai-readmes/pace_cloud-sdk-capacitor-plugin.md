# cloud-sdk-capacitor-plugin

PACE Cloud SDK is a Capacitor plugin to easily integrate PACE's Connected Fueling into your own apps.

## Install

```bash
npm install cloud-sdk-capacitor-plugin
npx cap sync
```

## API

<docgen-index>

- [`setup(...)`](#setup)
- [`respondToEvent(...)`](#respondtoevent)
- [`getNearbyGasStations(...)`](#getnearbygasstations)
- [`isPoiInRange(...)`](#ispoiinrange)
- [`startApp(...)`](#startapp)
- [`startFuelingApp(...)`](#startfuelingapp)
- [`addListener(string, ...)`](#addlistenerstring)
- [Interfaces](#interfaces)
- [Type Aliases](#type-aliases)
- [Enums](#enums)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### setup(...)

```typescript
setup(config: Configuration) => Promise<boolean>
```

Setup the plugin

| Param        | Type                                                    | Description                                  |
| ------------ | ------------------------------------------------------- | -------------------------------------------- |
| **`config`** | <code><a href="#configuration">Configuration</a></code> | is the configuration provided to this method |

**Returns:** <code>Promise&lt;boolean&gt;</code>

---

### respondToEvent(...)

```typescript
respondToEvent(response: EventResponse) => Promise<boolean>
```

Method that can to be called whenever the client wants
to communicate to the plugin in regards to a received event

| Param          | Type                                                    | Description                      |
| -------------- | ------------------------------------------------------- | -------------------------------- |
| **`response`** | <code><a href="#eventresponse">EventResponse</a></code> | is the response to a given event |

**Returns:** <code>Promise&lt;boolean&gt;</code>

---

### getNearbyGasStations(...)

```typescript
getNearbyGasStations(options: { coordinate: [number, number]; radius: number; }) => Promise<{ results: GasStation[]; }>
```

Returns a list of gasStations based on a given coordinate

| Param         | Type                                                           |
| ------------- | -------------------------------------------------------------- |
| **`options`** | <code>{ coordinate: [number, number]; radius: number; }</code> |

**Returns:** <code>Promise&lt;{ results: GasStation[]; }&gt;</code>

---

### isPoiInRange(...)

```typescript
isPoiInRange(options: { poiId: string; coordinate: [number, number]; }) => Promise<{ result: boolean; }>
```

Check if there is a App for the given <a href="#gasstation">GasStation</a> Id at the current location

| Param         | Type                                                          |
| ------------- | ------------------------------------------------------------- |
| **`options`** | <code>{ poiId: string; coordinate: [number, number]; }</code> |

**Returns:** <code>Promise&lt;{ result: boolean; }&gt;</code>

---

### startApp(...)

```typescript
startApp(options: { url: string | PresetUrl; }) => Promise<boolean>
```

Start an App via a url

| Param         | Type                          |
| ------------- | ----------------------------- |
| **`options`** | <code>{ url: string; }</code> |

**Returns:** <code>Promise&lt;boolean&gt;</code>

---

### startFuelingApp(...)

```typescript
startFuelingApp(options: { poiId: string; }) => Promise<boolean>
```

Start an App for a given poiId

| Param         | Type                            |
| ------------- | ------------------------------- |
| **`options`** | <code>{ poiId: string; }</code> |

**Returns:** <code>Promise&lt;boolean&gt;</code>

---

### addListener(string, ...)

```typescript
addListener(eventName: string, listenerFunc: ListenerCallback) => PluginListenerHandle
```

| Param              | Type                                                          |
| ------------------ | ------------------------------------------------------------- |
| **`eventName`**    | <code>string</code>                                           |
| **`listenerFunc`** | <code><a href="#listenercallback">ListenerCallback</a></code> |

**Returns:** <code><a href="#pluginlistenerhandle">PluginListenerHandle</a></code>

---

### Interfaces

#### Configuration

| Prop                     | Type                                                              | Description                                                                                                                                                                                                                   |
| ------------------------ | ----------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`apiKey`**             | <code>string</code>                                               | Use this property to provide the plugin with your PACE SDK API Key                                                                                                                                                            |
| **`authenticationMode`** | <code><a href="#authenticationmode">AuthenticationMode</a></code> | If you use native logins, then this should be set to '<a href="#authenticationmode">AuthenticationMode.NATIVE</a>'. Defaults to '<a href="#authenticationmode">AuthenticationMode.WEB</a>'                                    |
| **`environment`**        | <code><a href="#environment">Environment</a></code>               | Set your environment to '<a href="#environment">Environment.STAGE</a>' or '<a href="#environment">Environment.SANDBOX</a>' while developing or running tests. Defaults to '<a href="#environment">Environment.PRODUCTION</a>' |

#### EventResponse

| Prop        | Type                | Description                                                       |
| ----------- | ------------------- | ----------------------------------------------------------------- |
| **`id`**    | <code>string</code> | The `id` must be the same as from the received event              |
| **`name`**  | <code>string</code> | The `name` must be the same as from the received event            |
| **`value`** | <code>string</code> | In case the `value` is an object, make sure to stringify it first |

#### GasStation

| Prop                              | Type                                        | Description                                             |
| --------------------------------- | ------------------------------------------- | ------------------------------------------------------- |
| **`id`**                          | <code>string</code>                         |                                                         |
| **`name`**                        | <code>string</code>                         |                                                         |
| **`address`**                     | <code><a href="#address">Address</a></code> |                                                         |
| **`coordinates`**                 | <code>[number, number]</code>               | A set of coordinates, as [lng, lat]                     |
| **`openingHours`**                | <code>OpeningHour[]</code>                  | The opening hours for the Gas Station                   |
| **`fuelPrices`**                  | <code>FuelPrice[]</code>                    | The available fuel prices                               |
| **`isConnectedFuelingAvailable`** | <code>boolean</code>                        | Indicates if the gasStations supports Connected Fueling |
| **`lastUpdated`**                 | <code><a href="#date">Date</a></code>       |                                                         |

#### Address

| Prop              | Type                |
| ----------------- | ------------------- |
| **`countryCode`** | <code>string</code> |
| **`city`**        | <code>string</code> |
| **`zipCode`**     | <code>string</code> |
| **`suburb`**      | <code>string</code> |
| **`state`**       | <code>string</code> |
| **`street`**      | <code>string</code> |
| **`houseNumber`** | <code>string</code> |

#### OpeningHour

| Prop        | Type                                                      |
| ----------- | --------------------------------------------------------- |
| **`day`**   | <code><a href="#openinghourday">OpeningHourDay</a></code> |
| **`hours`** | <code>[number, number][]</code>                           |

#### FuelPrice

| Prop                  | Type                                                    |
| --------------------- | ------------------------------------------------------- |
| **`fuelType`**        | <code><a href="#fueltype">FuelType</a></code>           |
| **`productName`**     | <code>string</code>                                     |
| **`price`**           | <code>number</code>                                     |
| **`priceFormatting`** | <code>string</code>                                     |
| **`unit`**            | <code><a href="#fuelpriceunit">FuelPriceUnit</a></code> |
| **`currency`**        | <code><a href="#fuelcurrency">FuelCurrency</a></code>   |
| **`updated`**         | <code>number</code>                                     |

#### Date

Enables basic storage and retrieval of dates and times.

| Method                 | Signature                                                                                                    | Description                                                                                                                             |
| ---------------------- | ------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------- |
| **toString**           | () =&gt; string                                                                                              | Returns a string representation of a date. The format of the string depends on the locale.                                              |
| **toDateString**       | () =&gt; string                                                                                              | Returns a date as a string value.                                                                                                       |
| **toTimeString**       | () =&gt; string                                                                                              | Returns a time as a string value.                                                                                                       |
| **toLocaleString**     | () =&gt; string                                                                                              | Returns a value as a string value appropriate to the host environment's current locale.                                                 |
| **toLocaleDateString** | () =&gt; string                                                                                              | Returns a date as a string value appropriate to the host environment's current locale.                                                  |
| **toLocaleTimeString** | () =&gt; string                                                                                              | Returns a time as a string value appropriate to the host environment's current locale.                                                  |
| **valueOf**            | () =&gt; number                                                                                              | Returns the stored time value in milliseconds since midnight, January 1, 1970 UTC.                                                      |
| **getTime**            | () =&gt; number                                                                                              | Gets the time value in milliseconds.                                                                                                    |
| **getFullYear**        | () =&gt; number                                                                                              | Gets the year, using local time.                                                                                                        |
| **getUTCFullYear**     | () =&gt; number                                                                                              | Gets the year using Universal Coordinated Time (UTC).                                                                                   |
| **getMonth**           | () =&gt; number                                                                                              | Gets the month, using local time.                                                                                                       |
| **getUTCMonth**        | () =&gt; number                                                                                              | Gets the month of a <a href="#date">Date</a> object using Universal Coordinated Time (UTC).                                             |
| **getDate**            | () =&gt; number                                                                                              | Gets the day-of-the-month, using local time.                                                                                            |
| **getUTCDate**         | () =&gt; number                                                                                              | Gets the day-of-the-month, using Universal Coordinated Time (UTC).                                                                      |
| **getDay**             | () =&gt; number                                                                                              | Gets the day of the week, using local time.                                                                                             |
| **getUTCDay**          | () =&gt; number                                                                                              | Gets the day of the week using Universal Coordinated Time (UTC).                                                                        |
| **getHours**           | () =&gt; number                                                                                              | Gets the hours in a date, using local time.                                                                                             |
| **getUTCHours**        | () =&gt; number                                                                                              | Gets the hours value in a <a href="#date">Date</a> object using Universal Coordinated Time (UTC).                                       |
| **getMinutes**         | () =&gt; number                                                                                              | Gets the minutes of a <a href="#date">Date</a> object, using local time.                                                                |
| **getUTCMinutes**      | () =&gt; number                                                                                              | Gets the minutes of a <a href="#date">Date</a> object using Universal Coordinated Time (UTC).                                           |
| **getSeconds**         | () =&gt; number                                                                                              | Gets the seconds of a <a href="#date">Date</a> object, using local time.                                                                |
| **getUTCSeconds**      | () =&gt; number                                                                                              | Gets the seconds of a <a href="#date">Date</a> object using Universal Coordinated Time (UTC).                                           |
| **getMilliseconds**    | () =&gt; number                                                                                              | Gets the milliseconds of a <a href="#date">Date</a>, using local time.                                                                  |
| **getUTCMilliseconds** | () =&gt; number                                                                                              | Gets the milliseconds of a <a href="#date">Date</a> object using Universal Coordinated Time (UTC).                                      |
| **getTimezoneOffset**  | () =&gt; number                                                                                              | Gets the difference in minutes between the time on the local computer and Universal Coordinated Time (UTC).                             |
| **setTime**            | (time: number) =&gt; number                                                                                  | Sets the date and time value in the <a href="#date">Date</a> object.                                                                    |
| **setMilliseconds**    | (ms: number) =&gt; number                                                                                    | Sets the milliseconds value in the <a href="#date">Date</a> object using local time.                                                    |
| **setUTCMilliseconds** | (ms: number) =&gt; number                                                                                    | Sets the milliseconds value in the <a href="#date">Date</a> object using Universal Coordinated Time (UTC).                              |
| **setSeconds**         | (sec: number, ms?: number \| undefined) =&gt; number                                                         | Sets the seconds value in the <a href="#date">Date</a> object using local time.                                                         |
| **setUTCSeconds**      | (sec: number, ms?: number \| undefined) =&gt; number                                                         | Sets the seconds value in the <a href="#date">Date</a> object using Universal Coordinated Time (UTC).                                   |
| **setMinutes**         | (min: number, sec?: number \| undefined, ms?: number \| undefined) =&gt; number                              | Sets the minutes value in the <a href="#date">Date</a> object using local time.                                                         |
| **setUTCMinutes**      | (min: number, sec?: number \| undefined, ms?: number \| undefined) =&gt; number                              | Sets the minutes value in the <a href="#date">Date</a> object using Universal Coordinated Time (UTC).                                   |
| **setHours**           | (hours: number, min?: number \| undefined, sec?: number \| undefined, ms?: number \| undefined) =&gt; number | Sets the hour value in the <a href="#date">Date</a> object using local time.                                                            |
| **setUTCHours**        | (hours: number, min?: number \| undefined, sec?: number \| undefined, ms?: number \| undefined) =&gt; number | Sets the hours value in the <a href="#date">Date</a> object using Universal Coordinated Time (UTC).                                     |
| **setDate**            | (date: number) =&gt; number                                                                                  | Sets the numeric day-of-the-month value of the <a href="#date">Date</a> object using local time.                                        |
| **setUTCDate**         | (date: number) =&gt; number                                                                                  | Sets the numeric day of the month in the <a href="#date">Date</a> object using Universal Coordinated Time (UTC).                        |
| **setMonth**           | (month: number, date?: number \| undefined) =&gt; number                                                     | Sets the month value in the <a href="#date">Date</a> object using local time.                                                           |
| **setUTCMonth**        | (month: number, date?: number \| undefined) =&gt; number                                                     | Sets the month value in the <a href="#date">Date</a> object using Universal Coordinated Time (UTC).                                     |
| **setFullYear**        | (year: number, month?: number \| undefined, date?: number \| undefined) =&gt; number                         | Sets the year of the <a href="#date">Date</a> object using local time.                                                                  |
| **setUTCFullYear**     | (year: number, month?: number \| undefined, date?: number \| undefined) =&gt; number                         | Sets the year value in the <a href="#date">Date</a> object using Universal Coordinated Time (UTC).                                      |
| **toUTCString**        | () =&gt; string                                                                                              | Returns a date converted to a string using Universal Coordinated Time (UTC).                                                            |
| **toISOString**        | () =&gt; string                                                                                              | Returns a date as a string value in ISO format.                                                                                         |
| **toJSON**             | (key?: any) =&gt; string                                                                                     | Used by the JSON.stringify method to enable the transformation of an object's data for JavaScript Object Notation (JSON) serialization. |

#### PluginListenerHandle

| Prop         | Type                                      |
| ------------ | ----------------------------------------- |
| **`remove`** | <code>() =&gt; Promise&lt;void&gt;</code> |

### Type Aliases

#### ListenerCallback

<code>(err: any, ...args: any[]): void</code>

### Enums

#### AuthenticationMode

| Members      | Value                 |
| ------------ | --------------------- |
| **`WEB`**    | <code>'web'</code>    |
| **`NATIVE`** | <code>'native'</code> |

#### Environment

| Members           | Value                      |
| ----------------- | -------------------------- |
| **`PRODUCTION`**  | <code>'production'</code>  |
| **`DEVELOPMENT`** | <code>'development'</code> |
| **`STAGE`**       | <code>'stage'</code>       |
| **`SANDBOX`**     | <code>'sandbox'</code>     |

#### OpeningHourDay

| Members         | Value                    |
| --------------- | ------------------------ |
| **`MONDAY`**    | <code>'monday'</code>    |
| **`TUESDAY`**   | <code>'tuesday'</code>   |
| **`WEDNESDAY`** | <code>'wednesday'</code> |
| **`THURSDAY`**  | <code>'thursday'</code>  |
| **`FRIDAY`**    | <code>'friday'</code>    |
| **`SATURDAY`**  | <code>'saturday'</code>  |
| **`SUNDAY`**    | <code>'sunday'</code>    |

#### FuelType

| Members                  | Value                             |
| ------------------------ | --------------------------------- |
| **`RON98`**              | <code>'ron98'</code>              |
| **`RON98E5`**            | <code>'ron98e5'</code>            |
| **`RON95E10`**           | <code>'ron95e10'</code>           |
| **`DIESEL`**             | <code>'diesel'</code>             |
| **`E85`**                | <code>'e85'</code>                |
| **`RON91`**              | <code>'ron91'</code>              |
| **`RON95E5`**            | <code>'ron95e5'</code>            |
| **`RON100`**             | <code>'ron100'</code>             |
| **`DIESELGTL`**          | <code>'dieselGtl'</code>          |
| **`DIESELB7`**           | <code>'dieselB7'</code>           |
| **`DIESELPREMIUM`**      | <code>'dieselPremium'</code>      |
| **`LPG`**                | <code>'lpg'</code>                |
| **`CNG`**                | <code>'cng'</code>                |
| **`LNG`**                | <code>'lng'</code>                |
| **`H2`**                 | <code>'h2'</code>                 |
| **`TRUCKDIESEL`**        | <code>'truckDiesel'</code>        |
| **`ADBLUE`**             | <code>'adBlue'</code>             |
| **`TRUCKADBLUE`**        | <code>'truckAdBlue'</code>        |
| **`TRUCKDIESELPREMIUM`** | <code>'truckDieselPremium'</code> |
| **`TRUCKLPG`**           | <code>'truckLpg'</code>           |
| **`HEATINGOIL`**         | <code>'heatingOil'</code>         |

#### FuelPriceUnit

| Members     | Value            |
| ----------- | ---------------- |
| **`LITRE`** | <code>'L'</code> |

#### FuelCurrency

| Members   | Value              |
| --------- | ------------------ |
| **`EUR`** | <code>'EUR'</code> |

#### PresetUrl

| Members            | Value                       |
| ------------------ | --------------------------- |
| **`PACE_ID`**      | <code>'paceID'</code>       |
| **`PAYMENT`**      | <code>'payment'</code>      |
| **`TRANSACTIONS`** | <code>'transactions'</code> |

</docgen-api>
