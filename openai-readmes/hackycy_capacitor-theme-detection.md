# capacitor-theme-detection

📱 Capacitor plugin to detect whether dark mode is enabled

## Install

```bash
npm install capacitor-theme-detection
npx cap sync
```

## API

<docgen-index>

* [`isDarkModeActive()`](#isdarkmodeactive)
* [`addListener('themeModeChange', ...)`](#addlistenerthememodechange)
* [`removeAllListeners()`](#removealllisteners)
* [Interfaces](#interfaces)
* [Type Aliases](#type-aliases)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### isDarkModeActive()

```typescript
isDarkModeActive() => any
```

**Returns:** <code>any</code>

--------------------


### addListener('themeModeChange', ...)

```typescript
addListener(eventName: 'themeModeChange', listenerFunc: (params: { mode: ThemeMode; }) => void) => Promise<PluginListenerHandle> & PluginListenerHandle
```

| Param              | Type                                                                            |
| ------------------ | ------------------------------------------------------------------------------- |
| **`eventName`**    | <code>'themeModeChange'</code>                                                  |
| **`listenerFunc`** | <code>(params: { mode: <a href="#thememode">ThemeMode</a>; }) =&gt; void</code> |

**Returns:** <code>any</code>

--------------------


### removeAllListeners()

```typescript
removeAllListeners() => any
```

**Returns:** <code>any</code>

--------------------


### Interfaces


#### PluginListenerHandle

| Prop         | Type                      |
| ------------ | ------------------------- |
| **`remove`** | <code>() =&gt; any</code> |


### Type Aliases


#### ThemeMode

<code>'Dark' | 'Light'</code>

</docgen-api>

# Thanks

- [cordova-plugin-theme-detection](https://github.com/mariusbackes/cordova-plugin-theme-detection)