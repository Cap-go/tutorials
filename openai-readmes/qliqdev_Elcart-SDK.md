# capacitor-elcart-sdk

Elcart tokenization service

## Install

```bash
npm install capacitor-elcart-sdk
npx cap sync
```

## API

<docgen-index>

- [`bindCard(...)`](#bindcard)
- [Interfaces](#interfaces)
- [Type Aliases](#type-aliases)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### bindCard(...)

```typescript
bindCard(options?: { theme?: Theme | undefined; language: Language; } | undefined) => any
```

| Param         | Type                                                                                             |
| ------------- | ------------------------------------------------------------------------------------------------ |
| **`options`** | <code>{ theme?: <a href="#theme">Theme</a>; language: <a href="#language">Language</a>; }</code> |

**Returns:** <code>any</code>

---

### Interfaces

#### Theme

| Prop                           | Type                |
| ------------------------------ | ------------------- |
| **`accentColor`**              | <code>string</code> |
| **`backgroundColor`**          | <code>string</code> |
| **`borderColor`**              | <code>string</code> |
| **`foregroundColor`**          | <code>string</code> |
| **`inputViewBackgroundColor`** | <code>string</code> |
| **`textColor`**                | <code>string</code> |

### Type Aliases

#### Language

<code>'ru' | 'ky' | 'en'</code>

</docgen-api>
