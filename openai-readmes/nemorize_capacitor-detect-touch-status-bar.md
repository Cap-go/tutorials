# @nemorize/capacitor-detect-touch-status-bar

Capacitor 5.x plugin to detect touching iOS status bar

## Install

```bash
npm install @nemorize/capacitor-detect-touch-status-bar
npx cap sync
```

## API

<docgen-index>

* [`addListener('touch', ...)`](#addlistenertouch)
* [Interfaces](#interfaces)
* [Type Aliases](#type-aliases)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### addListener('touch', ...)

```typescript
addListener(eventName: 'touch', listenerFunc: TouchStatusBarListener) => Promise<PluginListenerHandle> & PluginListenerHandle
```

Listen for touch event.

| Param              | Type                                                                      |
| ------------------ | ------------------------------------------------------------------------- |
| **`eventName`**    | <code>'touch'</code>                                                      |
| **`listenerFunc`** | <code><a href="#touchstatusbarlistener">TouchStatusBarListener</a></code> |

**Returns:** <code>Promise&lt;<a href="#pluginlistenerhandle">PluginListenerHandle</a>&gt; & <a href="#pluginlistenerhandle">PluginListenerHandle</a></code>

--------------------


### Interfaces


#### PluginListenerHandle

| Prop         | Type                                      |
| ------------ | ----------------------------------------- |
| **`remove`** | <code>() =&gt; Promise&lt;void&gt;</code> |


### Type Aliases


#### TouchStatusBarListener

<code>(): void</code>

</docgen-api>
