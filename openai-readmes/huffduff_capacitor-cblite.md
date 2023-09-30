# capacitor-cblite

Add native CBLite support to Capacitor apps

## Install

```bash
npm install capacitor-cblite
npx cap sync
```

## API

<docgen-index>

- [`open(...)`](#open)
- [`close(...)`](#close)
- [`sync(...)`](#sync)
- [`updateSessionID(...)`](#updatesessionid)
- [`stopSync(...)`](#stopsync)
- [`destroy(...)`](#destroy)
- [`get(...)`](#get)
- [`put(...)`](#put)
- [`remove(...)`](#remove)
- [`indexes(...)`](#indexes)
- [`createIndex(...)`](#createindex)
- [`registerScript(...)`](#registerscript)
- [`query(...)`](#query)
- [`addListener(...)`](#addlistener)
- [`addListener(...)`](#addlistener)
- [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### open(...)

```typescript
open(options: CallOptions) => any
```

| Param         | Type                                                |
| ------------- | --------------------------------------------------- |
| **`options`** | <code><a href="#calloptions">CallOptions</a></code> |

**Returns:** <code>any</code>

---

### close(...)

```typescript
close(options: CallOptions) => any
```

| Param         | Type                                                |
| ------------- | --------------------------------------------------- |
| **`options`** | <code><a href="#calloptions">CallOptions</a></code> |

**Returns:** <code>any</code>

---

### sync(...)

```typescript
sync(options: ReplicationOptions) => any
```

| Param         | Type                                                              |
| ------------- | ----------------------------------------------------------------- |
| **`options`** | <code><a href="#replicationoptions">ReplicationOptions</a></code> |

**Returns:** <code>any</code>

---

### updateSessionID(...)

```typescript
updateSessionID(options: any) => any
```

| Param         | Type             |
| ------------- | ---------------- |
| **`options`** | <code>any</code> |

**Returns:** <code>any</code>

---

### stopSync(...)

```typescript
stopSync(options: CallOptions) => any
```

| Param         | Type                                                |
| ------------- | --------------------------------------------------- |
| **`options`** | <code><a href="#calloptions">CallOptions</a></code> |

**Returns:** <code>any</code>

---

### destroy(...)

```typescript
destroy(options: CallOptions) => any
```

| Param         | Type                                                |
| ------------- | --------------------------------------------------- |
| **`options`** | <code><a href="#calloptions">CallOptions</a></code> |

**Returns:** <code>any</code>

---

### get(...)

```typescript
get<T>(options: CallOptions & DatabaseRecord) => any
```

| Param         | Type                                                                                               |
| ------------- | -------------------------------------------------------------------------------------------------- |
| **`options`** | <code><a href="#calloptions">CallOptions</a> & <a href="#databaserecord">DatabaseRecord</a></code> |

**Returns:** <code>any</code>

---

### put(...)

```typescript
put<T>(options: CallOptions & { doc: DatabaseRecord & T; }) => any
```

| Param         | Type                                                                                                             |
| ------------- | ---------------------------------------------------------------------------------------------------------------- |
| **`options`** | <code><a href="#calloptions">CallOptions</a> & { doc: <a href="#databaserecord">DatabaseRecord</a> & T; }</code> |

**Returns:** <code>any</code>

---

### remove(...)

```typescript
remove(options: CallOptions & DatabaseRecord) => any
```

| Param         | Type                                                                                               |
| ------------- | -------------------------------------------------------------------------------------------------- |
| **`options`** | <code><a href="#calloptions">CallOptions</a> & <a href="#databaserecord">DatabaseRecord</a></code> |

**Returns:** <code>any</code>

---

### indexes(...)

```typescript
indexes(options: CallOptions) => any
```

| Param         | Type                                                |
| ------------- | --------------------------------------------------- |
| **`options`** | <code><a href="#calloptions">CallOptions</a></code> |

**Returns:** <code>any</code>

---

### createIndex(...)

```typescript
createIndex(options: CallOptions & { index: IndexRequest; }) => any
```

| Param         | Type                                                                                                       |
| ------------- | ---------------------------------------------------------------------------------------------------------- |
| **`options`** | <code><a href="#calloptions">CallOptions</a> & { index: <a href="#indexrequest">IndexRequest</a>; }</code> |

**Returns:** <code>any</code>

---

### registerScript(...)

```typescript
registerScript<T = unknown>(options: { label: string; script: string | Callback<T>; }) => any
```

| Param         | Type                                                                 |
| ------------- | -------------------------------------------------------------------- |
| **`options`** | <code>{ label: string; script: string \| Callback&lt;T&gt;; }</code> |

**Returns:** <code>any</code>

---

### query(...)

```typescript
query<T = unknown>(options: CallOptions & QueryOptions<T>) => any
```

| Param         | Type                                                                                                    |
| ------------- | ------------------------------------------------------------------------------------------------------- |
| **`options`** | <code><a href="#calloptions">CallOptions</a> & <a href="#queryoptions">QueryOptions</a>&lt;T&gt;</code> |

**Returns:** <code>any</code>

---

### addListener(...)

```typescript
addListener(event: 'cblite:repl', listener: (data: ReplEvent) => void) => any
```

| Param          | Type                                                               |
| -------------- | ------------------------------------------------------------------ |
| **`event`**    | <code>"cblite:repl"</code>                                         |
| **`listener`** | <code>(data: <a href="#replevent">ReplEvent</a>) =&gt; void</code> |

**Returns:** <code>any</code>

---

### addListener(...)

```typescript
addListener(event: 'cblite:change', listener: (data: ChangeEvent) => void) => any
```

| Param          | Type                                                                   |
| -------------- | ---------------------------------------------------------------------- |
| **`event`**    | <code>"cblite:change"</code>                                           |
| **`listener`** | <code>(data: <a href="#changeevent">ChangeEvent</a>) =&gt; void</code> |

**Returns:** <code>any</code>

---

### Interfaces

#### CallOptions

| Prop       | Type                |
| ---------- | ------------------- |
| **`name`** | <code>string</code> |

#### ReplicationOptions

| Prop            | Type                |
| --------------- | ------------------- |
| **`host`**      | <code>string</code> |
| **`sessionId`** | <code>string</code> |

#### DatabaseRecord

| Prop       | Type                |
| ---------- | ------------------- |
| **`_id`**  | <code>string</code> |
| **`_rev`** | <code>string</code> |

#### IndexRequest

| Prop         | Type                |
| ------------ | ------------------- |
| **`fields`** | <code>{}</code>     |
| **`name`**   | <code>string</code> |

#### IndexResult

| Prop         | Type                               |
| ------------ | ---------------------------------- |
| **`result`** | <code>"created" \| "exists"</code> |
| **`name`**   | <code>string</code>                |

#### QueryOptions

| Prop           | Type                                              |
| -------------- | ------------------------------------------------- |
| **`query`**    | <code>string \| <a href="#query">Query</a></code> |
| **`callback`** | <code>string \| Callback&lt;T&gt;</code>          |

#### Query

| Prop           | Type                |
| -------------- | ------------------- |
| **`what`**     | <code>{}</code>     |
| **`where`**    | <code>{}</code>     |
| **`group_by`** | <code>{}</code>     |
| **`order_by`** | <code>{}</code>     |
| **`limit`**    | <code>number</code> |
| **`offset`**   | <code>number</code> |

#### QueryResult

| Prop                | Type                |
| ------------------- | ------------------- |
| **`rows`**          | <code>{}</code>     |
| **`executionTime`** | <code>number</code> |
| **`totalTime`**     | <code>number</code> |
| **`totalCount`**    | <code>number</code> |
| **`finalCount`**    | <code>number</code> |

#### ReplEvent

| Prop            | Type                |
| --------------- | ------------------- |
| **`name`**      | <code>string</code> |
| **`completed`** | <code>number</code> |
| **`total`**     | <code>number</code> |
| **`error`**     | <code>string</code> |
| **`status`**    | <code>number</code> |
| **`event`**     | <code>string</code> |

#### ChangeEvent

| Prop       | Type                |
| ---------- | ------------------- |
| **`name`** | <code>string</code> |
| **`doc`**  | <code>any</code>    |

</docgen-api>
