# capacitor-native-video-player

native-video-player

## Install

```bash
npm install capacitor-native-video-player
npx cap sync
```

## API

<docgen-index>

- [`echo(...)`](#echo)
- [`start(...)`](#start)
- [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### echo(...)

```typescript
echo(options: { value: string; }) => any
```

| Param         | Type                            |
| ------------- | ------------------------------- |
| **`options`** | <code>{ value: string; }</code> |

**Returns:** <code>any</code>

---

### start(...)

```typescript
start(options: { playlist: IVideoData[]; }) => any
```

| Param         | Type                           |
| ------------- | ------------------------------ |
| **`options`** | <code>{ playlist: {}; }</code> |

**Returns:** <code>any</code>

---

### Interfaces

#### IVideoData

| Prop           | Type                |
| -------------- | ------------------- |
| **`title`**    | <code>string</code> |
| **`album`**    | <code>string</code> |
| **`filePath`** | <code>string</code> |
| **`url`**      | <code>string</code> |

</docgen-api>
