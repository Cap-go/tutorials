# @sencrop/capacitor-firebase-dynamic-links

Firebase dynamic links Plugin for Capacitor

## Install

```bash
npm install @sencrop/capacitor-firebase-dynamic-links
npx cap sync
```

## API

<docgen-index>

- [`addListener('deepLinkOpen', ...)`](#addlistenerdeeplinkopen-)
- [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### addListener('deepLinkOpen', ...)

```typescript
addListener(eventName: 'deepLinkOpen', listenerFunc: (data: DeepLinkOpen) => void) => PluginListenerHandle
```

| Param              | Type                                                                     |
| ------------------ | ------------------------------------------------------------------------ |
| **`eventName`**    | <code>'deepLinkOpen'</code>                                              |
| **`listenerFunc`** | <code>(data: <a href="#deeplinkopen">DeepLinkOpen</a>) =&gt; void</code> |

**Returns:** <code><a href="#pluginlistenerhandle">PluginListenerHandle</a></code>

---

### Interfaces

#### PluginListenerHandle

| Prop         | Type                                      |
| ------------ | ----------------------------------------- |
| **`remove`** | <code>() =&gt; Promise&lt;void&gt;</code> |

#### DeepLinkOpen

| Prop      | Type                |
| --------- | ------------------- |
| **`url`** | <code>string</code> |

</docgen-api>
