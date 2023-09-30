# @anuradev/capacitor-device-settings

Capacitor plugin to get/set device settings

## Install

```bash
npm install @anuradev/capacitor-device-settings
npx cap sync
```

## API

<docgen-index>

- [`getRingerMode()`](#getringermode)
- [`setRingerMode(...)`](#setringermode)
- [Type Aliases](#type-aliases)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### getRingerMode()

```typescript
getRingerMode() => Promise<{ mode: RingerMode; }>
```

**Returns:** <code>Promise&lt;{ mode: <a href="#ringermode">RingerMode</a>; }&gt;</code>

---

### setRingerMode(...)

```typescript
setRingerMode(data: { mode: RingerMode; }) => Promise<void>
```

| Param      | Type                                                         |
| ---------- | ------------------------------------------------------------ |
| **`data`** | <code>{ mode: <a href="#ringermode">RingerMode</a>; }</code> |

---

### Type Aliases

#### RingerMode

<code>'normal' | 'silent' | 'vibrate'</code>

</docgen-api>
