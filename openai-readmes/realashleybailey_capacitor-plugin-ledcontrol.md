# capacitor-plugin-ledcontrol

LED Control for Citaq H10-2

## Install

```bash
npm install capacitor-plugin-ledcontrol
npx cap sync
```

## API

<docgen-index>

- [`startFlashBothLED(...)`](#startflashbothled)
- [`stopFlashBothLED()`](#stopflashbothled)
- [`turnOnRedLED(...)`](#turnonredled)
- [`turnOffRedLED()`](#turnoffredled)
- [`turnOnBlueLED(...)`](#turnonblueled)
- [`turnOffBlueLED()`](#turnoffblueled)
- [`isRedLightOn()`](#isredlighton)
- [`isBlueLightOn()`](#isbluelighton)
- [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### startFlashBothLED(...)

```typescript
startFlashBothLED(options?: LEDControlPluginOptions | undefined) => void
```

| Param         | Type                                                                        |
| ------------- | --------------------------------------------------------------------------- |
| **`options`** | <code><a href="#ledcontrolpluginoptions">LEDControlPluginOptions</a></code> |

---

### stopFlashBothLED()

```typescript
stopFlashBothLED() => void
```

---

### turnOnRedLED(...)

```typescript
turnOnRedLED(options?: LEDControlPluginOptions | undefined) => void
```

| Param         | Type                                                                        |
| ------------- | --------------------------------------------------------------------------- |
| **`options`** | <code><a href="#ledcontrolpluginoptions">LEDControlPluginOptions</a></code> |

---

### turnOffRedLED()

```typescript
turnOffRedLED() => void
```

---

### turnOnBlueLED(...)

```typescript
turnOnBlueLED(options?: LEDControlPluginOptions | undefined) => void
```

| Param         | Type                                                                        |
| ------------- | --------------------------------------------------------------------------- |
| **`options`** | <code><a href="#ledcontrolpluginoptions">LEDControlPluginOptions</a></code> |

---

### turnOffBlueLED()

```typescript
turnOffBlueLED() => void
```

---

### isRedLightOn()

```typescript
isRedLightOn() => Promise<boolean>
```

**Returns:** <code>Promise&lt;boolean&gt;</code>

---

### isBlueLightOn()

```typescript
isBlueLightOn() => Promise<boolean>
```

**Returns:** <code>Promise&lt;boolean&gt;</code>

---

### Interfaces

#### LEDControlPluginOptions

| Prop         | Type                |
| ------------ | ------------------- |
| **`text`**   | <code>string</code> |
| **`offset`** | <code>number</code> |

</docgen-api>
