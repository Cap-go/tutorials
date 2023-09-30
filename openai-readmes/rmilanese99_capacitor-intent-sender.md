# capacitor-intent-sender

Plugin to send Android intents from Capacitor apps

### Supported versions

- `1.1.0` version only supports Capacitor 5
- `1.0.x` versions only support Capacitor 4

## Install

```bash
npm install capacitor-intent-sender
npx cap sync
```

## API

<docgen-index>

- [`startActivity(...)`](#startactivity)
- [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### startActivity(...)

```typescript
startActivity(intent: Intent) => Promise<void>
```

Launch a new activity

| Param        | Type                                      | Description                              |
| ------------ | ----------------------------------------- | ---------------------------------------- |
| **`intent`** | <code><a href="#intent">Intent</a></code> | The description of the activity to start |

---

### Interfaces

#### Intent

| Prop             | Type                                             | Description                                                     |
| ---------------- | ------------------------------------------------ | --------------------------------------------------------------- |
| **`action`**     | <code>string</code>                              | The action to be performed                                      |
| **`data`**       | <code>string</code>                              | The data to operate on, expressed as a URI                      |
| **`categories`** | <code>string[]</code>                            | Additional information about the given action                   |
| **`type`**       | <code>string</code>                              | The explicit type of the given data                             |
| **`component`**  | <code>{ package: string; class: string; }</code> | The explicit name of the target component class                 |
| **`extras`**     | <code>{ [key: string]: unknown; }</code>         | Any additional information to be passed to the target component |
| **`flags`**      | <code>number</code>                              | Special flags controlling how the intent is handled             |

</docgen-api>
