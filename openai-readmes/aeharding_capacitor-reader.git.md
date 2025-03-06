# capacitor-reader

Opens a simplified in app browser, prioritizing readability.

If you're looking for additional functionality, this plugin is not for you. ;)

## Install

```bash
npm install capacitor-reader
npx cap sync
```

## API

<docgen-index>

* [`open(...)`](#open)
* [`addListener('browserFinished', ...)`](#addlistenerbrowserfinished-)
* [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### open(...)

```typescript
open(options: CapacitorReaderOpenOptions) => Promise<void>
```

iOS & Android only

| Param         | Type                                                                              |
| ------------- | --------------------------------------------------------------------------------- |
| **`options`** | <code><a href="#capacitorreaderopenoptions">CapacitorReaderOpenOptions</a></code> |

--------------------


### addListener('browserFinished', ...)

```typescript
addListener(eventName: 'browserFinished', listenerFunc: () => void) => Promise<PluginListenerHandle>
```

iOS only: Listen for the browser finished event.
It fires when the Browser is closed by the user.

This is necessary for those that want to track
iOS status taps (since capacitor swizzles all
iOS navigation taps)

| Param              | Type                           |
| ------------------ | ------------------------------ |
| **`eventName`**    | <code>'browserFinished'</code> |
| **`listenerFunc`** | <code>() =&gt; void</code>     |

**Returns:** <code>Promise&lt;<a href="#pluginlistenerhandle">PluginListenerHandle</a>&gt;</code>

--------------------


### Interfaces


#### CapacitorReaderOpenOptions

| Prop                          | Type                 | Description                                        | Default            |
| ----------------------------- | -------------------- | -------------------------------------------------- | ------------------ |
| **`url`**                     | <code>string</code>  |                                                    |                    |
| **`toolbarColor`**            | <code>string</code>  | The color of the toolbar                           |                    |
| **`entersReaderIfAvailable`** | <code>boolean</code> | Whether to enter reader mode if available iOS only | <code>false</code> |


#### PluginListenerHandle

| Prop         | Type                                      |
| ------------ | ----------------------------------------- |
| **`remove`** | <code>() =&gt; Promise&lt;void&gt;</code> |

</docgen-api>
