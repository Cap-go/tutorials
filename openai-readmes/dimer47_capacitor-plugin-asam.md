# Capacitor Plugin ASAM (Autonomous Single App Mode)
![Release : 1.0.1 ](https://img.shields.io/github/package-json/v/dimer47/capacitor-plugin-asam?color=red&style=flat-square) ![Last update](https://img.shields.io/github/last-commit/dimer47/capacitor-plugin-asam?color=yellow&label=Last%20update&style=flat-square) ![Dependency size](https://img.shields.io/bundlephobia/minzip/capacitor-plugin-asam?color=green&label=dependency%20size&style=flat-square) ![Repo size](https://img.shields.io/github/repo-size/dimer47/capacitor-plugin-asam?style=flat-square) ![Downloads](https://img.shields.io/npm/dt/capacitor-plugin-asam?style=flat-square) ![License](https://img.shields.io/github/license/dimer47/capacitor-plugin-asam?style=flat-square)

**⚠️ Only for iOS devices**

Easily integrate Autonomous Single App Mode in your ios app, allowing it to control Single App Mode sessions for focused, distraction-free user experiences. Ideal for educational, testing, or kiosk applications.

## 📍 Install

```bash
npm install capacitor-plugin-asam
npx cap sync
```

## ⚙️ Configuration
To enable the Autonomous Single App Mode (ASAM) on iOS devices, administrators must utilize a Mobile Device Management (MDM) system or Apple Configurator. 

These tools are essential for setting up and managing ASAM, as they provide the ability to create and deploy specific configuration profiles to iOS devices. 

These profiles dictate which applications can run in ASAM, ensuring controlled and secure usage of the devices in environments like schools, businesses, or public kiosks. Without MDM or Apple Configurator, activating ASAM on iOS devices is not feasible.

## 🕹️ Usage

```typescript
// import the plugin
import {Asam} from "capacitor-plugin-asam";

// --------------------
// enable ASAM using setASAM

let r = await Asam.setASAM({enable: true});
if (!r.success)
    console.error("Failed to enable ASAM");

let isEnabled = (await Asam.isASAMEnabled()).enabled;
console.log("ASAM is enabled: " + isEnabled);

// --------------------
// another way to enable ASAM using enableASAM

r = await Asam.enableASAM();
if (!r.success)
    console.error("Failed to enable ASAM");

isEnabled = (await Asam.isASAMEnabled()).enabled;
console.log("ASAM is enabled: " + isEnabled);

// --------------------
// disable ASAM using disableASAM

r = await Asam.disableASAM();
if (!r.success)
    console.error("Failed to disable ASAM");

isEnabled = (await Asam.isASAMEnabled()).enabled;
console.log("ASAM is enabled: " + isEnabled);

// --------------------
// another way to disable ASAM using setASAM

r = await Asam.setASAM({enable: false});
if (!r.success)
    console.error("Failed to disable ASAM");
```

## 🧮 API

<docgen-index>

* [`setASAM(...)`](#setasam)
* [`enableASAM()`](#enableasam)
* [`disableASAM()`](#disableasam)
* [`isASAMEnabled()`](#isasamenabled)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### setASAM(...)

```typescript
setASAM(options: { enable: boolean; }) => Promise<{ success: boolean; }>
```

| Param         | Type                              |
| ------------- | --------------------------------- |
| **`options`** | <code>{ enable: boolean; }</code> |

**Returns:** <code>Promise&lt;{ success: boolean; }&gt;</code>

--------------------


### enableASAM()

```typescript
enableASAM() => Promise<{ success: boolean; }>
```

**Returns:** <code>Promise&lt;{ success: boolean; }&gt;</code>

--------------------


### disableASAM()

```typescript
disableASAM() => Promise<{ success: boolean; }>
```

**Returns:** <code>Promise&lt;{ success: boolean; }&gt;</code>

--------------------


### isASAMEnabled()

```typescript
isASAMEnabled() => Promise<{ enabled: boolean; }>
```

**Returns:** <code>Promise&lt;{ enabled: boolean; }&gt;</code>

--------------------

</docgen-api>


<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### enableASAM()

```typescript
enableASAM(): Promise<{ success: boolean }>;
```

Enable Autonomous Single App Mode (ASAM) on the device.

**Returns:** <code>Promise&lt;{ success: boolean; }&gt;</code>

--------------------

</docgen-api>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### disableASAM()

```typescript
disableASAM(): Promise<{ success: boolean }>;
```

Disable Autonomous Single App Mode (ASAM) on the device.

**Returns:** <code>Promise&lt;{ success: boolean; }&gt;</code>

--------------------

</docgen-api>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### isASAMEnabled()

```typescript
isASAMEnabled(): Promise<{ enabled: boolean }>;
```

Returns whether Autonomous Single App Mode (ASAM) is enabled on the device.

**Returns:** <code>Promise&lt;{ enabled: boolean; }&gt;</code>

--------------------

</docgen-api>
