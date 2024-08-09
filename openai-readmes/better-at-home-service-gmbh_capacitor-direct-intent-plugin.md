# cap-android-intents

Capacitor plugin. Enables sending of direct and broadcast intents

## Install

```bash
npm install cap-android-intents
npx cap sync
```

## API

<docgen-index>

* [`sendIntent(...)`](#sendintent)
* [`checkIntentReceived()`](#checkintentreceived)
* [`finish()`](#finish)
* [Interfaces](#interfaces)

</docgen-index>

## Example

```javascript
import { Intents } from 'cap-android-intents'
```

### Broadcast
```javascript
await Intents.sendIntent({action: "com.app.exampleaction", isDirect: false})
```

### Direct

```javascript
await Intents.sendIntent({action: "intent.action.example",
                          isDirect: true,
                          extras: { 
                            foo1: "fa",
                            foo2: "faa"
                          },
                          data: {
                            foo3: "faaa",
                            foo4: "faaaa
                          },
                          component: {
                            "pkg": "com.example.app",
                            "cls": "app.example.ExampleActivity"
                         }
})
```

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### sendIntent(...)

```typescript
sendIntent(options: IntentCall) => Promise<void>
```

| Param         | Type                                              |
| ------------- | ------------------------------------------------- |
| **`options`** | <code><a href="#intentcall">IntentCall</a></code> |

--------------------


### checkIntentReceived()

```typescript
checkIntentReceived() => Promise<IntentCall>
```

**Returns:** <code>Promise&lt;<a href="#intentcall">IntentCall</a>&gt;</code>

--------------------


### finish()

```typescript
finish() => void
```

--------------------


### Interfaces


#### IntentCall

| Prop            | Type                                 |
| --------------- | ------------------------------------ |
| **`action`**    | <code>string</code>                  |
| **`extra`**     | <code>{ [key: string]: any; }</code> |
| **`data`**      | <code>{ [key: string]: any; }</code> |
| **`isDirect`**  | <code>boolean</code>                 |
| **`component`** | <code>{ [key: string]: any; }</code> |

</docgen-api>
