# capacitor-webnativeview

Allow to embeb android native view like MapView as a canvas inside webview

## Install

```bash
npm install capacitor-webnativeview
npx cap sync
```

## API

<docgen-index>

- [`invoke(...)`](#invoke)
- [`invokeObject(...)`](#invokeobject)
- [`setSize(...)`](#setsize)
- [`dispose(...)`](#dispose)
- [`update(...)`](#update)
- [`getViewData(...)`](#getviewdata)
- [`createView(...)`](#createview)
- [`createObject(...)`](#createobject)
- [`lock(...)`](#lock)
- [`unlock(...)`](#unlock)
- [`addListener('invalidate', ...)`](#addlistenerinvalidate)
- [`createHandler(...)`](#createhandler)
- [`awaitEvent(...)`](#awaitevent)
- [`bindEventToMethod(...)`](#bindeventtomethod)
- [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### invoke(...)

```typescript
invoke(options: { viewId: number; methodId: number; params: string[]; }) => Promise<any>
```

| Param         | Type                                                                 |
| ------------- | -------------------------------------------------------------------- |
| **`options`** | <code>{ viewId: number; methodId: number; params: string[]; }</code> |

**Returns:** <code>Promise&lt;any&gt;</code>

---

### invokeObject(...)

```typescript
invokeObject(options: { viewId: number; methodId: number; params: string[]; }) => Promise<any>
```

| Param         | Type                                                                 |
| ------------- | -------------------------------------------------------------------- |
| **`options`** | <code>{ viewId: number; methodId: number; params: string[]; }</code> |

**Returns:** <code>Promise&lt;any&gt;</code>

---

### setSize(...)

```typescript
setSize(options: { viewId: number; width: number; height: number; }) => Promise<any>
```

| Param         | Type                                                            |
| ------------- | --------------------------------------------------------------- |
| **`options`** | <code>{ viewId: number; width: number; height: number; }</code> |

**Returns:** <code>Promise&lt;any&gt;</code>

---

### dispose(...)

```typescript
dispose(options: { viewId: number; }) => Promise<any>
```

| Param         | Type                             |
| ------------- | -------------------------------- |
| **`options`** | <code>{ viewId: number; }</code> |

**Returns:** <code>Promise&lt;any&gt;</code>

---

### update(...)

```typescript
update(options: { viewId: number; }) => Promise<any>
```

| Param         | Type                             |
| ------------- | -------------------------------- |
| **`options`** | <code>{ viewId: number; }</code> |

**Returns:** <code>Promise&lt;any&gt;</code>

---

### getViewData(...)

```typescript
getViewData(options: { viewId: number; }) => Promise<any>
```

| Param         | Type                             |
| ------------- | -------------------------------- |
| **`options`** | <code>{ viewId: number; }</code> |

**Returns:** <code>Promise&lt;any&gt;</code>

---

### createView(...)

```typescript
createView(options: { name: string; }) => Promise<any>
```

| Param         | Type                           |
| ------------- | ------------------------------ |
| **`options`** | <code>{ name: string; }</code> |

**Returns:** <code>Promise&lt;any&gt;</code>

---

### createObject(...)

```typescript
createObject(options: { name: string; }) => Promise<any>
```

| Param         | Type                           |
| ------------- | ------------------------------ |
| **`options`** | <code>{ name: string; }</code> |

**Returns:** <code>Promise&lt;any&gt;</code>

---

### lock(...)

```typescript
lock(options: { viewId: number; left: number; top: number; width: number; height: number; }) => Promise<any>
```

| Param         | Type                                                                                       |
| ------------- | ------------------------------------------------------------------------------------------ |
| **`options`** | <code>{ viewId: number; left: number; top: number; width: number; height: number; }</code> |

**Returns:** <code>Promise&lt;any&gt;</code>

---

### unlock(...)

```typescript
unlock(options: {}) => Promise<any>
```

| Param         | Type            |
| ------------- | --------------- |
| **`options`** | <code>{}</code> |

**Returns:** <code>Promise&lt;any&gt;</code>

---

### addListener('invalidate', ...)

```typescript
addListener(eventName: 'invalidate', listenerFunc: (info: any) => void) => Promise<PluginListenerHandle> & PluginListenerHandle
```

| Param              | Type                                |
| ------------------ | ----------------------------------- |
| **`eventName`**    | <code>'invalidate'</code>           |
| **`listenerFunc`** | <code>(info: any) =&gt; void</code> |

**Returns:** <code>Promise&lt;<a href="#pluginlistenerhandle">PluginListenerHandle</a>&gt; & <a href="#pluginlistenerhandle">PluginListenerHandle</a></code>

---

### createHandler(...)

```typescript
createHandler(options: { name: string; targetMethod: string; eventName: string; }) => Promise<any>
```

| Param         | Type                                                                    |
| ------------- | ----------------------------------------------------------------------- |
| **`options`** | <code>{ name: string; targetMethod: string; eventName: string; }</code> |

**Returns:** <code>Promise&lt;any&gt;</code>

---

### awaitEvent(...)

```typescript
awaitEvent(options: { viewId: number; methodId: number; }) => Promise<any>
```

| Param         | Type                                               |
| ------------- | -------------------------------------------------- |
| **`options`** | <code>{ viewId: number; methodId: number; }</code> |

**Returns:** <code>Promise&lt;any&gt;</code>

---

### bindEventToMethod(...)

```typescript
bindEventToMethod(options: { objId: number; methodId: number; eventName: string; }) => Promise<any>
```

| Param         | Type                                                                 |
| ------------- | -------------------------------------------------------------------- |
| **`options`** | <code>{ objId: number; methodId: number; eventName: string; }</code> |

**Returns:** <code>Promise&lt;any&gt;</code>

---

### Interfaces

#### PluginListenerHandle

| Prop         | Type                                      |
| ------------ | ----------------------------------------- |
| **`remove`** | <code>() =&gt; Promise&lt;void&gt;</code> |

</docgen-api>
