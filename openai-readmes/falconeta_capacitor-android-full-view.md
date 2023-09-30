# capacitor-android-full-view

Capacitor plugin for retrieving proper top offset of Android status bar.

## Install

```bash
# with npm
npm install --save @falconeta/capacitor-android-full-view
# with yarn
yarn add @falconeta/capacitor-android-full-view
# after any install
npx cap sync
```

## Why?

This plugin is required only on Android when using `StatusBar.setOverlaysWebView({ overlay: true })`. There is a problem with top offset counting, when status bar is transparent. Related issue: https://github.com/ionic-team/capacitor/issues/2840.

## Usage

```ts
import { AndroidFullView } from 'capacitor-android-full-view'

const { value } = await AndroidFullView.top()
```

## API

<docgen-index>

- [`top()`](#top)
- [`bottom()`](#bottom)
- [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### top()

```typescript
top() => Promise<TopBottomReturn>
```

Returns top offset of the status bar

**Returns:** <code>Promise&lt;<a href="#topbottomreturn">TopBottomReturn</a>&gt;</code>

---

### bottom()

```typescript
bottom() => Promise<TopBottomReturn>
```

Returns bottom offset of the status bar

**Returns:** <code>Promise&lt;<a href="#topbottomreturn">TopBottomReturn</a>&gt;</code>

---

### Interfaces

#### TopBottomReturn

| Prop        | Type                |
| ----------- | ------------------- |
| **`value`** | <code>number</code> |

</docgen-api>
