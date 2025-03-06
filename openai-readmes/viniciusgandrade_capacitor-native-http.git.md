# capacitor-native-http

Plugin capacitor para requisições nativas

## Install

```bash
npm install capacitor-native-http
npx cap sync
```

## API

<docgen-index>

* [`request(...)`](#request)
* [`initialize(...)`](#initialize)
* [`clearCookie()`](#clearcookie)
* [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### request(...)

```typescript
request(options: RequestParams) => Promise<{ data: any; }>
```

| Param         | Type                                                    |
| ------------- | ------------------------------------------------------- |
| **`options`** | <code><a href="#requestparams">RequestParams</a></code> |

**Returns:** <code>Promise&lt;{ data: any; }&gt;</code>

--------------------


### initialize(...)

```typescript
initialize(options: InitializeParams) => Promise<{ data: any; }>
```

| Param         | Type                                                          |
| ------------- | ------------------------------------------------------------- |
| **`options`** | <code><a href="#initializeparams">InitializeParams</a></code> |

**Returns:** <code>Promise&lt;{ data: any; }&gt;</code>

--------------------


### clearCookie()

```typescript
clearCookie() => Promise<any>
```

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### Interfaces


#### RequestParams

| Prop          | Type                |
| ------------- | ------------------- |
| **`method`**  | <code>string</code> |
| **`url`**     | <code>string</code> |
| **`params`**  | <code>any</code>    |
| **`data`**    | <code>any</code>    |
| **`headers`** | <code>any</code>    |


#### InitializeParams

| Prop                  | Type                 |
| --------------------- | -------------------- |
| **`hostname`**        | <code>string</code>  |
| **`certPath`**        | <code>string</code>  |
| **`timeout`**         | <code>number</code>  |
| **`certPassMtls`**    | <code>string</code>  |
| **`certPathMtls`**    | <code>string</code>  |
| **`saveLoginCookie`** | <code>boolean</code> |

</docgen-api>
