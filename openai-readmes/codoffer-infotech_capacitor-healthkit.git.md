# Capacitor HealthKit Plugin

:heart: Capacitor plugin to retrieve data from HealthKit :heart:

This is a clone of the `@perfood/capacitor-healthkit@next` with improvements. 

Disclaimer : _for now only some of the HK data base, in the future the retrieve base will be bigger !_

## Getting Started

### Prerequisites

* Add **HealthKit to your Xcode project** (section signing & capabilities)

![alt text](https://i.ibb.co/Bg03ZKf/auth-hk.png)

* ADD **Privacy - Health Share Usage Description** to your Xcode project
* ADD **Privacy - Health Update Usage Description** to your Xcode project

You can simply put this into the `info.plist` file

```
	<key>NSHealthShareUsageDescription</key>
	<string>Read Health Data</string>
	<key>NSHealthUpdateUsageDescription</key>
	<string>Read Health Data</string>
```

### Installing

Do

```
npm i --save @codoffer/capacitor-healthkit
```

Then

```
npx cap update
```

## API

<docgen-index>

* [`requestAuthorization(...)`](#requestauthorization)
* [`isAvailable()`](#isavailable)
* [`getAuthorizationStatus(...)`](#getauthorizationstatus)
* [`getStatisticsCollection(...)`](#getstatisticscollection)
* [`getBodyMassEntries(...)`](#getbodymassentries)
* [`getWorkouts(...)`](#getworkouts)
* [Interfaces](#interfaces)
* [Type Aliases](#type-aliases)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### requestAuthorization(...)

```typescript
requestAuthorization(options: RequestAuthorizationOptions) => Promise<void>
```

| Param         | Type                                                                                |
| ------------- | ----------------------------------------------------------------------------------- |
| **`options`** | <code><a href="#requestauthorizationoptions">RequestAuthorizationOptions</a></code> |

--------------------


### isAvailable()

```typescript
isAvailable() => Promise<void>
```

--------------------


### getAuthorizationStatus(...)

```typescript
getAuthorizationStatus(options: GetAuthorizationStatusOptions) => Promise<{ status: AuthorizationStatus; }>
```

| Param         | Type                                                                                    |
| ------------- | --------------------------------------------------------------------------------------- |
| **`options`** | <code><a href="#getauthorizationstatusoptions">GetAuthorizationStatusOptions</a></code> |

**Returns:** <code>Promise&lt;{ status: <a href="#authorizationstatus">AuthorizationStatus</a>; }&gt;</code>

--------------------


### getStatisticsCollection(...)

```typescript
getStatisticsCollection(options: StatisticsCollectionOptions) => Promise<StatisticsCollectionOutput>
```

| Param         | Type                                                                                |
| ------------- | ----------------------------------------------------------------------------------- |
| **`options`** | <code><a href="#statisticscollectionoptions">StatisticsCollectionOptions</a></code> |

**Returns:** <code>Promise&lt;<a href="#statisticscollectionoutput">StatisticsCollectionOutput</a>&gt;</code>

--------------------


### getBodyMassEntries(...)

```typescript
getBodyMassEntries(options: BodyMassQueryOptions) => Promise<BodyMassQueryOutput>
```

| Param         | Type                                                                  |
| ------------- | --------------------------------------------------------------------- |
| **`options`** | <code><a href="#bodymassqueryoptions">BodyMassQueryOptions</a></code> |

**Returns:** <code>Promise&lt;<a href="#bodymassqueryoutput">BodyMassQueryOutput</a>&gt;</code>

--------------------


### getWorkouts(...)

```typescript
getWorkouts(options: WorkoutsQueryOptions) => Promise<WorkoutsQueryOutput>
```

| Param         | Type                                                                  |
| ------------- | --------------------------------------------------------------------- |
| **`options`** | <code><a href="#workoutsqueryoptions">WorkoutsQueryOptions</a></code> |

**Returns:** <code>Promise&lt;<a href="#workoutsqueryoutput">WorkoutsQueryOutput</a>&gt;</code>

--------------------


### Interfaces


#### RequestAuthorizationOptions

| Prop        | Type                  |
| ----------- | --------------------- |
| **`all`**   | <code>string[]</code> |
| **`read`**  | <code>string[]</code> |
| **`write`** | <code>string[]</code> |


#### GetAuthorizationStatusOptions

| Prop             | Type                |
| ---------------- | ------------------- |
| **`sampleName`** | <code>string</code> |


#### StatisticsCollectionOutput

| Prop       | Type                                                                  |
| ---------- | --------------------------------------------------------------------- |
| **`data`** | <code>{ startDate: string; endDate: string; value: number; }[]</code> |


#### StatisticsCollectionOptions

| Prop                         | Type                                                                                            |
| ---------------------------- | ----------------------------------------------------------------------------------------------- |
| **`startDate`**              | <code>string</code>                                                                             |
| **`endDate`**                | <code>string</code>                                                                             |
| **`anchorDate`**             | <code>string</code>                                                                             |
| **`interval`**               | <code><a href="#statisticscollectionqueryinterval">StatisticsCollectionQueryInterval</a></code> |
| **`quantityTypeSampleName`** | <code><a href="#quantitytype">QuantityType</a></code>                                           |


#### StatisticsCollectionQueryInterval

| Prop        | Type                                                                      |
| ----------- | ------------------------------------------------------------------------- |
| **`unit`**  | <code>'second' \| 'minute' \| 'hour' \| 'day' \| 'month' \| 'year'</code> |
| **`value`** | <code>number</code>                                                       |


#### BodyMassQueryOutput

| Prop       | Type                                                                                                                    |
| ---------- | ----------------------------------------------------------------------------------------------------------------------- |
| **`data`** | <code>{ date: string; value: number; unit: string; uuid: string; sourceName: string; sourceBundleId: string; }[]</code> |


#### BodyMassQueryOptions

| Prop            | Type                |
| --------------- | ------------------- |
| **`startDate`** | <code>string</code> |
| **`endDate`**   | <code>string</code> |
| **`limit`**     | <code>number</code> |


#### WorkoutsQueryOutput

| Prop       | Type                                                                                                                                                                                                                                                                                                                                                                     |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **`data`** | <code>{ uuid: string; startDate: string; endDate: string; duration: number; device?: <a href="#healthkitdevice">HealthKitDevice</a>; source: string; sourceBundleId: string; workoutActivityType: string; workoutActivityTypeId: number; totalEnergyBurned?: number; totalDistance?: number; totalFlightsClimbed?: number; totalSwimmingStrokeCount?: number; }[]</code> |


#### HealthKitDevice

| Prop                      | Type                |
| ------------------------- | ------------------- |
| **`name`**                | <code>string</code> |
| **`model`**               | <code>string</code> |
| **`manufacturer`**        | <code>string</code> |
| **`hardwareVersion`**     | <code>string</code> |
| **`softwareVersion`**     | <code>string</code> |
| **`firmwareVersion`**     | <code>string</code> |
| **`localIdentifier`**     | <code>string</code> |
| **`udiDeviceIdentifier`** | <code>string</code> |


#### WorkoutsQueryOptions

| Prop            | Type                |
| --------------- | ------------------- |
| **`startDate`** | <code>string</code> |
| **`endDate`**   | <code>string</code> |
| **`limit`**     | <code>number</code> |


### Type Aliases


#### AuthorizationStatus

<code>'notDetermined' | 'sharingDenied' | 'sharingAuthorized'</code>


#### QuantityType

<code>'stepCount' | 'activeEnergyBurned' | 'appleExerciseTime' | 'basalEnergyBurned' | 'bloodGlucose' | 'distanceCycling' | 'distanceWalkingRunning' | 'flightsClimbed' | 'heartRate' | 'weight'</code>

</docgen-api>
