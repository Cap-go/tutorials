# cap-firebase-dynamic-links

Capacitor plugin for Firebase Dynamic Links

- For iOS configuration:
  - make sure Associated Domains Capability in Xcode is configured properly,
  - for iOS configuration docs:
  - https://firebase.google.com/docs/dynamic-links/ios/receive#open-dynamic-links-in-your-app
  - read step 1, 2 or 3 if u have custom domain, the other steps are unnecessary.
- for Android configuration: nothing.

---

## Install

```bash
npm install cap-firebase-dynamic-links
npx cap sync
```

## API

<docgen-index>

- [`addListener('onDynamicLink', ...)`](#addlistenerondynamiclink-)
- [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### addListener('onDynamicLink', ...)

```typescript
addListener(eventName: 'onDynamicLink', listenerFunc: (data: DynamicLinkData) => void) => PluginListenerHandle
```

| Param              | Type                                                                           |
| ------------------ | ------------------------------------------------------------------------------ |
| **`eventName`**    | <code>'onDynamicLink'</code>                                                   |
| **`listenerFunc`** | <code>(data: <a href="#dynamiclinkdata">DynamicLinkData</a>) =&gt; void</code> |

**Returns:** <code><a href="#pluginlistenerhandle">PluginListenerHandle</a></code>

---

### Interfaces

#### PluginListenerHandle

| Prop         | Type                                      |
| ------------ | ----------------------------------------- |
| **`remove`** | <code>() =&gt; Promise&lt;void&gt;</code> |

#### DynamicLinkData

| Prop                   | Type                |
| ---------------------- | ------------------- |
| **`url`**              | <code>string</code> |
| **`timestampClicked`** | <code>number</code> |

</docgen-api>
