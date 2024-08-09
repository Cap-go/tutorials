# capacitor-audio-focus

Android capacitor AudioFocus.

## Install

```bash
npm install capacitor-audio-focus
npx cap sync
```

## API

<docgen-index>

* [`requestFocus()`](#requestfocus)
* [`abandonFocus()`](#abandonfocus)
* [`addListener('audioFocusChangeEvent', ...)`](#addlisteneraudiofocuschangeevent)
* [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### requestFocus()

```typescript
requestFocus() => Promise<void>
```

--------------------


### abandonFocus()

```typescript
abandonFocus() => Promise<void>
```

--------------------


### addListener('audioFocusChangeEvent', ...)

```typescript
addListener(eventName: 'audioFocusChangeEvent', listenerFunc: (obj: { type: 'AUDIOFOCUS_GAIN' | 'AUDIOFOCUS_LOSS' | 'AUDIOFOCUS_LOSS_TRANSIENT' | 'AUDIOFOCUS_LOSS_TRANSIENT_CAN_DUCK'; }) => void) => Promise<PluginListenerHandle> & PluginListenerHandle
```

| Param              | Type                                                                                                                                                    |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`eventName`**    | <code>'audioFocusChangeEvent'</code>                                                                                                                    |
| **`listenerFunc`** | <code>(obj: { type: 'AUDIOFOCUS_GAIN' \| 'AUDIOFOCUS_LOSS' \| 'AUDIOFOCUS_LOSS_TRANSIENT' \| 'AUDIOFOCUS_LOSS_TRANSIENT_CAN_DUCK'; }) =&gt; void</code> |

**Returns:** <code>Promise&lt;<a href="#pluginlistenerhandle">PluginListenerHandle</a>&gt; & <a href="#pluginlistenerhandle">PluginListenerHandle</a></code>

--------------------


### Interfaces


#### PluginListenerHandle

| Prop         | Type                                      |
| ------------ | ----------------------------------------- |
| **`remove`** | <code>() =&gt; Promise&lt;void&gt;</code> |

</docgen-api>
