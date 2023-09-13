# @rbariviera/capacitor-screenshot-event

Capacitor 3 plugin - Notification that user shot screenshot iOS and Android

## Install

```bash
npm install @rbariviera/capacitor-screenshot-event
npx cap sync
```

## API

<docgen-index>

- [`startWatchEvent()`](#startwatchevent)
- [`removeWatchEvent()`](#removewatchevent)
- [`addListener(...)`](#addlistener)
- [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### startWatchEvent()

```typescript
startWatchEvent() => Promise<void>
```

---

### removeWatchEvent()

```typescript
removeWatchEvent() => Promise<void>
```

---

### addListener(...)

```typescript
addListener(eventName: 'userDidTakeScreenshot', listenerFunc: (data: any) => void) => PluginListenerHandle
```

| Param              | Type                                 |
| ------------------ | ------------------------------------ |
| **`eventName`**    | <code>"userDidTakeScreenshot"</code> |
| **`listenerFunc`** | <code>(data: any) =&gt; void</code>  |

**Returns:** <code><a href="#pluginlistenerhandle">PluginListenerHandle</a></code>

---

### Interfaces

#### PluginListenerHandle

| Prop         | Type                                      |
| ------------ | ----------------------------------------- |
| **`remove`** | <code>() =&gt; Promise&lt;void&gt;</code> |

</docgen-api>

#### Forked from @rdlabo/capacitor-screenshot-event
