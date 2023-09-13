# @mangosoft/ionic-capacitor-lotame

Ionic/Capacitor Bridge Plugin for easy usage of Lotame native iOS and Android SDK

## Install

```bash
npm install @mangosoft/ionic-capacitor-lotame
npx cap sync
```

## Example

```typescript
import { MangoSoftLotame } from '@mangosoft/ionic-capacitor-lotame';

// Lotame is a singleton that must be initialized with either a single client id.
const lotameInit = await MangoSoftLotame.initialize({ clientId: <CLIENT_ID> });
console.log('Lotame initialize response: ', JSON.stringify(lotameInit));
```

Where

**CLIENT_ID** Unique Lotame Client ID.

### Send Behaviors

Behavior Data is collected through this call:

```typescript
const resultBehavior = await MangoSoftLotame.addBehavior({
  data: { value: 'value', forType: 'type' },
})
```

Response have this format:

- [Interfaces](#interfaces)

## API

<docgen-index>

- [`initialize(...)`](#initialize)
- [`addBehavior(...)`](#addbehavior)
- [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### initialize(...)

```typescript
initialize(options: { clientId: string; }) => Promise<IGenericResponse>
```

| Param         | Type                               |
| ------------- | ---------------------------------- |
| **`options`** | <code>{ clientId: string; }</code> |

**Returns:** <code>Promise&lt;<a href="#igenericresponse">IGenericResponse</a>&gt;</code>

---

### addBehavior(...)

```typescript
addBehavior(options: { data: any; }) => Promise<IGenericResponse>
```

| Param         | Type                        |
| ------------- | --------------------------- |
| **`options`** | <code>{ data: any; }</code> |

**Returns:** <code>Promise&lt;<a href="#igenericresponse">IGenericResponse</a>&gt;</code>

---

### Interfaces

#### IGenericResponse

| Prop          | Type                |
| ------------- | ------------------- |
| **`message`** | <code>string</code> |
| **`data`**    | <code>any</code>    |

</docgen-api>
