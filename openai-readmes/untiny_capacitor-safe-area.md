# capacitor-safe-area

A capacitor plugin that can obtain a safe area on Android and iOS.

## Install

```bash
npm install @untiny/capacitor-safe-area
npx cap sync
```

## API

``<docgen-index>

* [`getSafeArea()`](#getsafearea)
* [`getStatusBarHeight()`](#getstatusbarheight)
* [Interfaces](#interfaces)

</docgen-index>``

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### getSafeArea()

```typescript
getSafeArea() => Promise<SafeAreaInset>
```

获取安全区域

**Returns:** <code>Promise&lt;<a href="#safeareainset">SafeAreaInset</a>&gt;</code>

--------------------


### getStatusBarHeight()

```typescript
getStatusBarHeight() => Promise<{ height: number; }>
```

获取状态栏高度

**Returns:** <code>Promise&lt;{ height: number; }&gt;</code>

--------------------


### Interfaces


#### SafeAreaInset

| Prop         | Type                |
| ------------ | ------------------- |
| **`top`**    | <code>number</code> |
| **`right`**  | <code>number</code> |
| **`bottom`** | <code>number</code> |
| **`left`**   | <code>number</code> |

</docgen-api>
