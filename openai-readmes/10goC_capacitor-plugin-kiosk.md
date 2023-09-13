# capacitor-kiosk

Android kiosk mode for capacitor

## Install

```bash
npm install capacitor-kiosk
npx cap sync
```

## API

<docgen-index>

- [`isInKioskMode()`](#isinkioskmode)
- [`enterKioskMode()`](#enterkioskmode)
- [`exitKioskMode()`](#exitkioskmode)
- [`toggleKioskMode()`](#togglekioskmode)
- [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### isInKioskMode()

```typescript
isInKioskMode() => Promise<KioskModeStatus>
```

**Returns:** <code>Promise&lt;<a href="#kioskmodestatus">KioskModeStatus</a>&gt;</code>

---

### enterKioskMode()

```typescript
enterKioskMode() => Promise<void>
```

---

### exitKioskMode()

```typescript
exitKioskMode() => Promise<void>
```

---

### toggleKioskMode()

```typescript
toggleKioskMode() => Promise<void>
```

---

### Interfaces

#### KioskModeStatus

| Prop        | Type                 |
| ----------- | -------------------- |
| **`value`** | <code>boolean</code> |

</docgen-api>
