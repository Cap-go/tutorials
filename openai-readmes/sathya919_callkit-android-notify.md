# callkit-android-notify

capacitor callkit for android

## Install

```bash
npm install callkit-android-notify
npx cap sync
```

## API

<docgen-index>

- [`register(...)`](#register)
- [`incomingCall(...)`](#incomingcall)
- [`addListener('registration', ...)`](#addlistenerregistration)
- [`addListener('callAnswered', ...)`](#addlistenercallanswered)
- [`addListener('callStarted', ...)`](#addlistenercallstarted)
- [Interfaces](#interfaces)
- [Type Aliases](#type-aliases)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### register(...)

```typescript
register(options: { topic: string; }) => Promise<void>
```

| Param         | Type                            |
| ------------- | ------------------------------- |
| **`options`** | <code>{ topic: string; }</code> |

---

### incomingCall(...)

```typescript
incomingCall(options: { from: string; }) => Promise<void>
```

| Param         | Type                           |
| ------------- | ------------------------------ |
| **`options`** | <code>{ from: string; }</code> |

---

### addListener('registration', ...)

```typescript
addListener(eventName: 'registration', listenerFunc: (token: Token) => void) => Promise<PluginListenerHandle> & PluginListenerHandle
```

| Param              | Type                                                        |
| ------------------ | ----------------------------------------------------------- |
| **`eventName`**    | <code>'registration'</code>                                 |
| **`listenerFunc`** | <code>(token: <a href="#token">Token</a>) =&gt; void</code> |

**Returns:** <code>Promise&lt;<a href="#pluginlistenerhandle">PluginListenerHandle</a>&gt; & <a href="#pluginlistenerhandle">PluginListenerHandle</a></code>

---

### addListener('callAnswered', ...)

```typescript
addListener(eventName: 'callAnswered', listenerFunc: (callDate: CallData) => void) => Promise<PluginListenerHandle> & PluginListenerHandle
```

| Param              | Type                                                                 |
| ------------------ | -------------------------------------------------------------------- |
| **`eventName`**    | <code>'callAnswered'</code>                                          |
| **`listenerFunc`** | <code>(callDate: <a href="#calldata">CallData</a>) =&gt; void</code> |

**Returns:** <code>Promise&lt;<a href="#pluginlistenerhandle">PluginListenerHandle</a>&gt; & <a href="#pluginlistenerhandle">PluginListenerHandle</a></code>

---

### addListener('callStarted', ...)

```typescript
addListener(eventName: 'callStarted', listenerFunc: (callDate: CallData) => void) => Promise<PluginListenerHandle> & PluginListenerHandle
```

| Param              | Type                                                                 |
| ------------------ | -------------------------------------------------------------------- |
| **`eventName`**    | <code>'callStarted'</code>                                           |
| **`listenerFunc`** | <code>(callDate: <a href="#calldata">CallData</a>) =&gt; void</code> |

**Returns:** <code>Promise&lt;<a href="#pluginlistenerhandle">PluginListenerHandle</a>&gt; & <a href="#pluginlistenerhandle">PluginListenerHandle</a></code>

---

### Interfaces

#### PluginListenerHandle

| Prop         | Type                                      |
| ------------ | ----------------------------------------- |
| **`remove`** | <code>() =&gt; Promise&lt;void&gt;</code> |

#### Token

| Prop        | Type                |
| ----------- | ------------------- |
| **`token`** | <code>string</code> |

#### CallData

| Prop               | Type                |
| ------------------ | ------------------- |
| **`connectionId`** | <code>string</code> |
| **`username`**     | <code>string</code> |

#### MessageCallData

| Prop             | Type                   |
| ---------------- | ---------------------- |
| **`type`**       | <code>'message'</code> |
| **`callbackId`** | <code>string</code>    |
| **`pluginId`**   | <code>string</code>    |
| **`methodName`** | <code>string</code>    |
| **`options`**    | <code>any</code>       |

#### ErrorCallData

| Prop        | Type                                                                                           |
| ----------- | ---------------------------------------------------------------------------------------------- |
| **`type`**  | <code>'js.error'</code>                                                                        |
| **`error`** | <code>{ message: string; url: string; line: number; col: number; errorObject: string; }</code> |

### Type Aliases

#### CallData

<code><a href="#messagecalldata">MessageCallData</a> | <a href="#errorcalldata">ErrorCallData</a></code>

</docgen-api>
