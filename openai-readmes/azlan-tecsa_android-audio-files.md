# android-audio-files

A capacitor plugin to access the MediaStore.Audio API

## Install

```bash
npm install android-audio-files
npx cap sync
```

## API

<docgen-index>

* [`listAudioFiles()`](#listaudiofiles)
* [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### listAudioFiles()

```typescript
listAudioFiles() => Promise<{ [id: string]: FileDetails; }>
```

**Returns:** <code>Promise&lt;{ [id: string]: <a href="#filedetails">FileDetails</a>; }&gt;</code>

--------------------


### Interfaces


#### FileDetails

| Prop                | Type                |
| ------------------- | ------------------- |
| **`name`**          | <code>string</code> |
| **`artist`**        | <code>string</code> |
| **`relative_path`** | <code>string</code> |
| **`full_path`**     | <code>string</code> |

</docgen-api>
