# capacitor-grab-intent-extras

Exposes the extras of the intent.

## Install

```bash
npm install capacitor-grab-intent-extras
npx cap sync
```

## API

<docgen-index>

- [`getIntentExtras()`](#getintentextras)
- [`addListener('intentExtras', ...)`](#addlistenerintentextras)
- [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### getIntentExtras()

```typescript
getIntentExtras() => Promise<{ extras: IntentExtras; }>
```

**Returns:** <code>Promise&lt;{ extras: <a href="#intentextras">IntentExtras</a>; }&gt;</code>

---

### addListener('intentExtras', ...)

```typescript
addListener(eventName: 'intentExtras', listenerFunc: (extras: IntentExtras) => void) => Promise<PluginListenerHandle> & PluginListenerHandle
```

| Param              | Type                                                                       |
| ------------------ | -------------------------------------------------------------------------- |
| **`eventName`**    | <code>'intentExtras'</code>                                                |
| **`listenerFunc`** | <code>(extras: <a href="#intentextras">IntentExtras</a>) =&gt; void</code> |

**Returns:** <code>Promise&lt;<a href="#pluginlistenerhandle">PluginListenerHandle</a>&gt; & <a href="#pluginlistenerhandle">PluginListenerHandle</a></code>

---

### Interfaces

#### IntentExtras

#### PluginListenerHandle

| Prop         | Type                                      |
| ------------ | ----------------------------------------- |
| **`remove`** | <code>() =&gt; Promise&lt;void&gt;</code> |

</docgen-api>
