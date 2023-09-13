# @mufan/capacitor-plugin-safe-area

A capacitor plugin for getting screen safe area, android only currently.

## Install

```bash
npm install @mufan/capacitor-plugin-safe-area
npx cap sync
```

## API

<docgen-index>

- [`getSafeArea()`](#getsafearea)
- [`getStatusBarHeight()`](#getstatusbarheight)
- [`getNavigationBarHeight()`](#getnavigationbarheight)
- [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### getSafeArea()

```typescript
getSafeArea() => Promise<SafeArea | undefined>
```

**Returns:** <code>Promise&lt;<a href="#safearea">SafeArea</a>&gt;</code>

---

### getStatusBarHeight()

```typescript
getStatusBarHeight() => Promise<{ value: number; }>
```

**Returns:** <code>Promise&lt;{ value: number; }&gt;</code>

---

### getNavigationBarHeight()

```typescript
getNavigationBarHeight() => Promise<{ value: number; }>
```

**Returns:** <code>Promise&lt;{ value: number; }&gt;</code>

---

### Interfaces

#### SafeArea

| Prop         | Type                |
| ------------ | ------------------- |
| **`top`**    | <code>number</code> |
| **`left`**   | <code>number</code> |
| **`bottom`** | <code>number</code> |
| **`right`**  | <code>number</code> |

</docgen-api>
