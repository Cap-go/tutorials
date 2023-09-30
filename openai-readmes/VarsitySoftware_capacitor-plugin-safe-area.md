# @varsitysoftware/capacitor-plugin-safe-area

A plugin to get safe area info

## Install

```bash
npm install @varsitysoftware/capacitor-plugin-safe-area
npx cap sync
```

## API

<docgen-index>

- [`getSafeAreaInsets()`](#getsafeareainsets)
- [`getStatusBarHeight()`](#getstatusbarheight)
- [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### getSafeAreaInsets()

```typescript
getSafeAreaInsets() => Promise<SafeAreaInsets>
```

**Returns:** <code>Promise&lt;<a href="#safeareainsets">SafeAreaInsets</a>&gt;</code>

---

### getStatusBarHeight()

```typescript
getStatusBarHeight() => Promise<StatusBarInfo>
```

**Returns:** <code>Promise&lt;<a href="#statusbarinfo">StatusBarInfo</a>&gt;</code>

---

### Interfaces

#### SafeAreaInsets

| Prop         | Type                                          |
| ------------ | --------------------------------------------- |
| **`insets`** | <code><a href="#safearea">SafeArea</a></code> |

#### SafeArea

| Prop         | Type                |
| ------------ | ------------------- |
| **`top`**    | <code>number</code> |
| **`right`**  | <code>number</code> |
| **`bottom`** | <code>number</code> |
| **`left`**   | <code>number</code> |

#### StatusBarInfo

| Prop                  | Type                |
| --------------------- | ------------------- |
| **`statusBarHeight`** | <code>number</code> |

</docgen-api>
