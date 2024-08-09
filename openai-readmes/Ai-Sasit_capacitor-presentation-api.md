# presentation-api

The plugin use to presentation to second monitor

## Install

```bash
npm install presentation-api
npx cap sync
```

## API

<docgen-index>

* [`echo(...)`](#echo)
* [`openLink(...)`](#openlink)
* [`openRawHtml(...)`](#openrawhtml)
* [`addListener('onSuccessLoadUrl', ...)`](#addlisteneronsuccessloadurl)
* [`addListener('onFailLoadUrl', ...)`](#addlisteneronfailloadurl)
* [`getDisplays()`](#getdisplays)
* [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### echo(...)

```typescript
echo(options: { value: string; }) => Promise<{ value: string; }>
```

| Param         | Type                            |
| ------------- | ------------------------------- |
| **`options`** | <code>{ value: string; }</code> |

**Returns:** <code>Promise&lt;{ value: string; }&gt;</code>

--------------------


### openLink(...)

```typescript
openLink(options: { url: string; }) => Promise<{ success?: any; error?: any; url?: any; }>
```

| Param         | Type                          |
| ------------- | ----------------------------- |
| **`options`** | <code>{ url: string; }</code> |

**Returns:** <code>Promise&lt;{ success?: any; error?: any; url?: any; }&gt;</code>

--------------------


### openRawHtml(...)

```typescript
openRawHtml(options: { htmlStr: string; }) => Promise<{ success?: any; error?: any; }>
```

| Param         | Type                              |
| ------------- | --------------------------------- |
| **`options`** | <code>{ htmlStr: string; }</code> |

**Returns:** <code>Promise&lt;{ success?: any; error?: any; }&gt;</code>

--------------------


### addListener('onSuccessLoadUrl', ...)

```typescript
addListener(eventName: 'onSuccessLoadUrl', listenerFunc: (data: any) => void) => Promise<PluginListenerHandle> & PluginListenerHandle
```

| Param              | Type                                |
| ------------------ | ----------------------------------- |
| **`eventName`**    | <code>'onSuccessLoadUrl'</code>     |
| **`listenerFunc`** | <code>(data: any) =&gt; void</code> |

**Returns:** <code>Promise&lt;<a href="#pluginlistenerhandle">PluginListenerHandle</a>&gt; & <a href="#pluginlistenerhandle">PluginListenerHandle</a></code>

--------------------


### addListener('onFailLoadUrl', ...)

```typescript
addListener(eventName: 'onFailLoadUrl', listenerFunc: (data: any) => void) => Promise<PluginListenerHandle> & PluginListenerHandle
```

| Param              | Type                                |
| ------------------ | ----------------------------------- |
| **`eventName`**    | <code>'onFailLoadUrl'</code>        |
| **`listenerFunc`** | <code>(data: any) =&gt; void</code> |

**Returns:** <code>Promise&lt;<a href="#pluginlistenerhandle">PluginListenerHandle</a>&gt; & <a href="#pluginlistenerhandle">PluginListenerHandle</a></code>

--------------------


### getDisplays()

```typescript
getDisplays() => Promise<{ displays: number; }>
```

**Returns:** <code>Promise&lt;{ displays: number; }&gt;</code>

--------------------


### Interfaces


#### PluginListenerHandle

| Prop         | Type                                      |
| ------------ | ----------------------------------------- |
| **`remove`** | <code>() =&gt; Promise&lt;void&gt;</code> |

</docgen-api>
