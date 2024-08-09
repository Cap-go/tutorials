# @vihlix/capacitor-text-reader

Text Detection From Images

## Install

```bash
npm install @vihlix/capacitor-text-reader
npx cap sync
```

## API

<docgen-index>

* [`detectText(...)`](#detecttext)
* [Interfaces](#interfaces)
* [Enums](#enums)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### detectText(...)

```typescript
detectText(options: { filename: string; orientation?: ImageOrientation; }) => Promise<{ textDetections: TextDetection[]; }>
```

| Param         | Type                                                                                               |
| ------------- | -------------------------------------------------------------------------------------------------- |
| **`options`** | <code>{ filename: string; orientation?: <a href="#imageorientation">ImageOrientation</a>; }</code> |

**Returns:** <code>Promise&lt;{ textDetections: TextDetection[]; }&gt;</code>

--------------------


### Interfaces


#### TextDetection

| Prop       | Type                |
| ---------- | ------------------- |
| **`text`** | <code>string</code> |


### Enums


#### ImageOrientation

| Members     | Value                |
| ----------- | -------------------- |
| **`Up`**    | <code>"UP"</code>    |
| **`Down`**  | <code>"DOWN"</code>  |
| **`Left`**  | <code>"LEFT"</code>  |
| **`Right`** | <code>"RIGHT"</code> |

</docgen-api>
