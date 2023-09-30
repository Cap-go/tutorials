# capacitor-welcome-sound

Play sound on app open

## Install

```bash
npm install capacitor-welcome-sound
npx cap sync
```

## API

<docgen-index>

- [`enable(...)`](#enable)
- [`disable()`](#disable)
- [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### enable(...)

```typescript
enable(options?: EnableOptions | undefined) => any
```

Enable playing sound on app start

| Param         | Type                                                    |
| ------------- | ------------------------------------------------------- |
| **`options`** | <code><a href="#enableoptions">EnableOptions</a></code> |

**Returns:** <code>any</code>

**Since:** 1.0.0

---

### disable()

```typescript
disable() => any
```

Disable playing sound on app start

**Returns:** <code>any</code>

**Since:** 1.0.0

---

### Interfaces

#### EnableOptions

| Prop           | Type                | Description       | Since |
| -------------- | ------------------- | ----------------- | ----- |
| **`fileName`** | <code>string</code> | Filename of sound | 1.0.0 |

</docgen-api>
