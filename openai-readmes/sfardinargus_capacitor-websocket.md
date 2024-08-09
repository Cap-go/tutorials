# capacitor-websocket

Websocket support for capacitor without using capHttp

## Install

```bash
npm install capacitor-websocket
npx cap sync
```

## API

<docgen-index>

* [`connect(...)`](#connect)
* [`disconnect()`](#disconnect)
* [`on(...)`](#on)
* [`emit(...)`](#emit)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### connect(...)

```typescript
connect(options: { url: string; socketConfig?: any; }) => Promise<void>
```

| Param         | Type                                              |
| ------------- | ------------------------------------------------- |
| **`options`** | <code>{ url: string; socketConfig?: any; }</code> |

--------------------


### disconnect()

```typescript
disconnect() => Promise<void>
```

--------------------


### on(...)

```typescript
on(event: string, callback: (data: any) => void) => Promise<void>
```

| Param          | Type                                |
| -------------- | ----------------------------------- |
| **`event`**    | <code>string</code>                 |
| **`callback`** | <code>(data: any) =&gt; void</code> |

--------------------


### emit(...)

```typescript
emit(event: string, ...args: any[]) => Promise<void>
```

| Param       | Type                |
| ----------- | ------------------- |
| **`event`** | <code>string</code> |
| **`args`**  | <code>any[]</code>  |

--------------------

</docgen-api>
