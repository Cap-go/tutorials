# capacitor-suppress-longpress-gesture

This plugin allows to suppress longpress gesture in iOs system. Designed for capacitor v3 and also supports capacitor v4 (Thanks to @mariusbolik)

## Install

```bash
npm install capacitor-suppress-longpress-gesture
npx cap sync
```

## Usage

Just import it in your 'app' component, and call activateService() method!

```
import { SuppressLongpressGesture } from 'capacitor-suppress-longpress-gesture';
SuppressLongpressGesture.activateService();
```

## API

<docgen-index>

- [`echo(...)`](#echo)
- [`activateService()`](#activateservice)
- [`deactivateService()`](#deactivateservice)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### echo(...)

```typescript
echo(options: { value: string; }) => Promise<{ value: string; }>
```

| Param         | Type                            |
| ------------- | ------------------------------- |
| **`options`** | <code>{ value: string; }</code> |

**Returns:** <code>Promise&lt;{ value: string; }&gt;</code>

---

### activateService()

```typescript
activateService() => Promise<string>
```

**Returns:** <code>Promise&lt;string&gt;</code>

---

### deactivateService()

```typescript
deactivateService() => Promise<string>
```

**Returns:** <code>Promise&lt;string&gt;</code>

---

</docgen-api>
