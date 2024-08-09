# capacitor-webview-controller

*this project has been archived in favor of [capacitor-inappbrowser](https://github.com/Cap-go/capacitor-inappbrowser)*

> control webviews cross platform using capacitor.js.

## Install

```bash
npm install capacitor-webview-controller
npx cap sync
```

## API

<docgen-index>

* [`loadURL(...)`](#loadurl)
* [`closeWindow()`](#closewindow)
* [`evaluateJavaScript(...)`](#evaluatejavascript)
* [`show()`](#show)
* [`hide()`](#hide)
* [`addListener('navigation', ...)`](#addlistenernavigation)
* [`addListener('page loaded', ...)`](#addlistenerpage-loaded)
* [`addListener('closed', ...)`](#addlistenerclosed)
* [Interfaces](#interfaces)
* [Type Aliases](#type-aliases)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### loadURL(...)

```typescript
loadURL(options: { url: string; }) => Promise<void>
```

| Param         | Type                          |
| ------------- | ----------------------------- |
| **`options`** | <code>{ url: string; }</code> |

--------------------


### closeWindow()

```typescript
closeWindow() => Promise<void>
```

--------------------


### evaluateJavaScript(...)

```typescript
evaluateJavaScript(options: { javascript: string; }) => Promise<{ result: string; }>
```

| Param         | Type                                 |
| ------------- | ------------------------------------ |
| **`options`** | <code>{ javascript: string; }</code> |

**Returns:** <code>Promise&lt;{ result: string; }&gt;</code>

--------------------


### show()

```typescript
show() => Promise<void>
```

--------------------


### hide()

```typescript
hide() => Promise<void>
```

--------------------


### addListener('navigation', ...)

```typescript
addListener(event: "navigation", listener: (args: PageEvent) => void) => Promise<PluginListenerHandle> & PluginListenerHandle
```

| Param          | Type                                                               |
| -------------- | ------------------------------------------------------------------ |
| **`event`**    | <code>'navigation'</code>                                          |
| **`listener`** | <code>(args: <a href="#pageevent">PageEvent</a>) =&gt; void</code> |

**Returns:** <code>Promise&lt;<a href="#pluginlistenerhandle">PluginListenerHandle</a>&gt; & <a href="#pluginlistenerhandle">PluginListenerHandle</a></code>

--------------------


### addListener('page loaded', ...)

```typescript
addListener(event: "page loaded", listener: (args: PageEvent) => void) => Promise<PluginListenerHandle> & PluginListenerHandle
```

| Param          | Type                                                               |
| -------------- | ------------------------------------------------------------------ |
| **`event`**    | <code>'page loaded'</code>                                         |
| **`listener`** | <code>(args: <a href="#pageevent">PageEvent</a>) =&gt; void</code> |

**Returns:** <code>Promise&lt;<a href="#pluginlistenerhandle">PluginListenerHandle</a>&gt; & <a href="#pluginlistenerhandle">PluginListenerHandle</a></code>

--------------------


### addListener('closed', ...)

```typescript
addListener(event: "closed", listener: () => void) => Promise<PluginListenerHandle> & PluginListenerHandle
```

| Param          | Type                       |
| -------------- | -------------------------- |
| **`event`**    | <code>'closed'</code>      |
| **`listener`** | <code>() =&gt; void</code> |

**Returns:** <code>Promise&lt;<a href="#pluginlistenerhandle">PluginListenerHandle</a>&gt; & <a href="#pluginlistenerhandle">PluginListenerHandle</a></code>

--------------------


### Interfaces


#### PluginListenerHandle

| Prop         | Type                                      |
| ------------ | ----------------------------------------- |
| **`remove`** | <code>() =&gt; Promise&lt;void&gt;</code> |


### Type Aliases


#### PageEvent

<code>{ url: string }</code>

</docgen-api>
