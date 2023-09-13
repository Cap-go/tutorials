# capacitor-appversion-plugin

this plugin only available for android!

appname, packagename,appversion,android version etc

## Install

```bash
npm install capacitor-appversion-plugin
npx cap sync
```

## API

<docgen-index>

- [`getInfoFromOs(...)`](#getinfofromos)
- [Enums](#enums)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### getInfoFromOs(...)

```typescript
getInfoFromOs(_options: { requestFor: rqType; }) => Promise<{ results: any[]; }>
```

| Param          | Type                                                       |
| -------------- | ---------------------------------------------------------- |
| **`_options`** | <code>{ requestFor: <a href="#rqtype">rqType</a>; }</code> |

**Returns:** <code>Promise&lt;{ results: any[]; }&gt;</code>

---

### Enums

#### rqType

| Members                 |
| ----------------------- |
| **`appName`**           |
| **`PackageName`**       |
| **`VersionNumber`**     |
| **`VersionCode`**       |
| **`androidVer`**        |
| **`androidSdkVersion`** |
| **`androidOsName`**     |

</docgen-api>
