# cap-home-button

A capacitor plugin with a listener for when the home button is pressed.

## Install

```bash
npm install cap-home-button
npx cap sync
```

## API

<docgen-index>

- [`addListener(...)`](#addlistener)
- [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### addListener(...)

```typescript
addListener(eventName: 'homePress', listenerFunc: (reason: string) => void) => Promise<PluginListenerHandle> & PluginListenerHandle
```

Listens to button presses.

| Param              | Type                                     | Description                                                                                                           |
| ------------------ | ---------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| **`eventName`**    | <code>"homePress"</code>                 | only homePress is supported                                                                                           |
| **`listenerFunc`** | <code>(reason: string) =&gt; void</code> | called on button press with a reason. Reason can be 'homekey', 'recentapps', 'dream', 'voiceinteraction', or similar. |

**Returns:** <code>any</code>

---

### Interfaces

#### PluginListenerHandle

| Prop         | Type                      |
| ------------ | ------------------------- |
| **`remove`** | <code>() =&gt; any</code> |

</docgen-api>
