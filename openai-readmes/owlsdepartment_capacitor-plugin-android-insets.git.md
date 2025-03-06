# capacitor-plugin-android-insets

Capacitor plugin for retrieving proper top offset of Android status bar.

This repo is published version with changed name of https://github.com/jorisbertomeu/capacitor-insets-v2, which was based on archived https://github.com/igorcd/capacitor-insets-plugin/. It should work perfectly fine in `Capacitor@4`.

## Install

```bash
# with npm
npm install --save capacitor-plugin-android-insets
# with yarn
yarn add capacitor-plugin-android-insets
# after any install
npx cap sync
```

## Why?

This plugin is required only on Android when using `StatusBar.setOverlaysWebView({ overlay: true })`. There is a problem with top offset counting, when status bar is transparent. Related issue: https://github.com/ionic-team/capacitor/issues/2840. 

## Usage

```ts
import { AndroidInsets } from 'capacitor-plugin-android-insets'

const { value } = await AndroidInsets.top();
```

## API

<docgen-index>

* [`top()`](#top)
* [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### top()

```typescript
top() => Promise<TopReturn>
```

Returns top offset of the status bar

**Returns:** <code>Promise&lt;<a href="#topreturn">TopReturn</a>&gt;</code>

--------------------


### Interfaces


#### TopReturn

| Prop        | Type                |
| ----------- | ------------------- |
| **`value`** | <code>number</code> |

</docgen-api>
