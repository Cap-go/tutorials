[![npm version](https://badge.fury.io/js/capacitor-areas.svg)](https://badge.fury.io/js/capacitor-areas)
[![capacitor support](https://img.shields.io/badge/capacitor%20support-v5-brightgreen?logo=capacitor)](https://capacitorjs.com/)

# capacitor-areas

This plugin provides functions to detect the devices safe area and the status bar and navigation bar height.

## Supported platforms

| Platform | Supported |
| -------- | --------: |
| Android  |         ✔ |
| iOS      |         ✖ |
| Web      |         ✖ |

## Install

```bash
npm i capacitor-areas
npx cap sync android
```

## API

<docgen-index>

* [`getSafeArea()`](#getsafearea)
* [`getStatusBarHeight()`](#getstatusbarheight)
* [`getNavigationBarHeight()`](#getnavigationbarheight)
* [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### getSafeArea()

```typescript
getSafeArea() => any
```

Get the safe area of the device

**Returns:** <code>any</code>

--------------------


### getStatusBarHeight()

```typescript
getStatusBarHeight() => any
```

Get the status bar height of the device

**Returns:** <code>any</code>

--------------------


### getNavigationBarHeight()

```typescript
getNavigationBarHeight() => any
```

Get the navigation bar height of the device. Returns 0 when the device has hardware buttons.

**Returns:** <code>any</code>

--------------------


### Interfaces


#### Areas

| Prop         | Type                |
| ------------ | ------------------- |
| **`top`**    | <code>number</code> |
| **`left`**   | <code>number</code> |
| **`bottom`** | <code>number</code> |
| **`right`**  | <code>number</code> |

</docgen-api>
