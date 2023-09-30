# capacitor-plugin-klaviyo-push

Handle push notifications for klaviyo on ios

## Install

```bash
npm install capacitor-plugin-klaviyo-push
npx cap sync
```

## API

<docgen-index>

- [`api(...)`](#api)
- [`identify(...)`](#identify)
- [`assignToken(...)`](#assigntoken)
- [Type Aliases](#type-aliases)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### api(...)

```typescript
api(options: { apikey: string; }) => Promise<void>
```

| Param         | Type                             |
| ------------- | -------------------------------- |
| **`options`** | <code>{ apikey: string; }</code> |

---

### identify(...)

```typescript
identify(options: { email: string; }) => Promise<void>
```

| Param         | Type                            |
| ------------- | ------------------------------- |
| **`options`** | <code>{ email: string; }</code> |

---

### assignToken(...)

```typescript
assignToken(options: { token: Record<string, unknown>; }) => Promise<void>
```

| Param         | Type                                                                         |
| ------------- | ---------------------------------------------------------------------------- |
| **`options`** | <code>{ token: <a href="#record">Record</a>&lt;string, unknown&gt;; }</code> |

---

### Type Aliases

#### Record

Construct a type with a set of properties K of type T

<code>{
[P in K]: T;
}</code>

</docgen-api>
