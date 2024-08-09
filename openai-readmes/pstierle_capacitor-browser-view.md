# capacitor-browser-view

Plugin to display Browser inside Capacitor App

## Install

```bash
npm install capacitor-browser-view
npx cap sync
```

## API

<docgen-index>

* [`open(...)`](#open)
* [`close()`](#close)
* [`loadUrl(...)`](#loadurl)
* [`handleNavigationEvent(...)`](#handlenavigationevent)
* [`goBack()`](#goback)
* [`goForward()`](#goforward)
* [`reload()`](#reload)
* [`updateDimensions(...)`](#updatedimensions)
* [`addListener('pageLoaded' | 'updateSnapshot' | 'progress' | 'navigationHandler', ...)`](#addlistenerpageloaded--updatesnapshot--progress--navigationhandler-)
* [Interfaces](#interfaces)
* [Enums](#enums)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### open(...)

```typescript
open(options: OpenOptions) => Promise<void>
```

| Param         | Type                                                |
| ------------- | --------------------------------------------------- |
| **`options`** | <code><a href="#openoptions">OpenOptions</a></code> |

--------------------


### close()

```typescript
close() => Promise<void>
```

--------------------


### loadUrl(...)

```typescript
loadUrl(options: { url: string; }) => Promise<void>
```

| Param         | Type                          |
| ------------- | ----------------------------- |
| **`options`** | <code>{ url: string; }</code> |

--------------------


### handleNavigationEvent(...)

```typescript
handleNavigationEvent(options: { allow: boolean; }) => Promise<void>
```

| Param         | Type                             |
| ------------- | -------------------------------- |
| **`options`** | <code>{ allow: boolean; }</code> |

--------------------


### goBack()

```typescript
goBack() => Promise<void>
```

--------------------


### goForward()

```typescript
goForward() => Promise<void>
```

--------------------


### reload()

```typescript
reload() => Promise<void>
```

--------------------


### updateDimensions(...)

```typescript
updateDimensions(options: Dimensions) => Promise<void>
```

| Param         | Type                                              |
| ------------- | ------------------------------------------------- |
| **`options`** | <code><a href="#dimensions">Dimensions</a></code> |

--------------------


### addListener('pageLoaded' | 'updateSnapshot' | 'progress' | 'navigationHandler', ...)

```typescript
addListener(eventName: 'pageLoaded' | 'updateSnapshot' | 'progress' | 'navigationHandler', listenerFunc: (...args: any[]) => void) => Promise<PluginListenerHandle>
```

| Param              | Type                                                                               |
| ------------------ | ---------------------------------------------------------------------------------- |
| **`eventName`**    | <code>'pageLoaded' \| 'updateSnapshot' \| 'progress' \| 'navigationHandler'</code> |
| **`listenerFunc`** | <code>(...args: any[]) =&gt; void</code>                                           |

**Returns:** <code>Promise&lt;<a href="#pluginlistenerhandle">PluginListenerHandle</a>&gt;</code>

--------------------


### Interfaces


#### OpenOptions

| Prop            | Type                                                                                                         |
| --------------- | ------------------------------------------------------------------------------------------------------------ |
| **`url`**       | <code>string</code>                                                                                          |
| **`script`**    | <code>{ javascript: string; injectionTime?: <a href="#scriptinjectiontime">ScriptInjectionTime</a>; }</code> |
| **`element`**   | <code>HTMLElement</code>                                                                                     |
| **`userAgent`** | <code>string</code>                                                                                          |


#### Dimensions

| Prop         | Type                |
| ------------ | ------------------- |
| **`width`**  | <code>number</code> |
| **`height`** | <code>number</code> |
| **`x`**      | <code>number</code> |
| **`y`**      | <code>number</code> |


#### PluginListenerHandle

| Prop         | Type                                      |
| ------------ | ----------------------------------------- |
| **`remove`** | <code>() =&gt; Promise&lt;void&gt;</code> |


### Enums


#### ScriptInjectionTime

| Members               |
| --------------------- |
| **`atDocumentStart`** |
| **`atDocumentEnd`**   |

</docgen-api>
