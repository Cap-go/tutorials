# capacitor-imessage

Capacitor plugin for iMessage

## Install

```bash
npm install capacitor-imessage
npx cap sync
```

## API

<docgen-index>

* [`isMessagingAvailable()`](#ismessagingavailable)
* [`sendMessage(...)`](#sendmessage)
* [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### isMessagingAvailable()

```typescript
isMessagingAvailable() => Promise<{ available: boolean; }>
```

**Returns:** <code>Promise&lt;{ available: boolean; }&gt;</code>

--------------------


### sendMessage(...)

```typescript
sendMessage(options: SendMessageOptions) => Promise<{ status: string; }>
```

| Param         | Type                                                              |
| ------------- | ----------------------------------------------------------------- |
| **`options`** | <code><a href="#sendmessageoptions">SendMessageOptions</a></code> |

**Returns:** <code>Promise&lt;{ status: string; }&gt;</code>

--------------------


### Interfaces


#### SendMessageOptions

| Prop           | Type                |
| -------------- | ------------------- |
| **`text`**     | <code>string</code> |
| **`imageUrl`** | <code>string</code> |

</docgen-api>
