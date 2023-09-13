# capacitor-greatday-maps

The capacitor plugin for maps/location function

## Install

```bash
npm install capacitor-greatday-maps
npx cap sync
```

## API

<docgen-index>

- [`getLocation()`](#getlocation)
- [`getLocationRadius(...)`](#getlocationradius)
- [`getLocationLabelLanguage(...)`](#getlocationlabellanguage)
- [`getLocationLabelRadiusLanguage(...)`](#getlocationlabelradiuslanguage)
- [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### getLocation()

```typescript
getLocation() => Promise<any>
```

**Returns:** <code>Promise&lt;any&gt;</code>

---

### getLocationRadius(...)

```typescript
getLocationRadius(workLocationData: string) => Promise<any>
```

| Param                  | Type                |
| ---------------------- | ------------------- |
| **`workLocationData`** | <code>string</code> |

**Returns:** <code>Promise&lt;any&gt;</code>

---

### getLocationLabelLanguage(...)

```typescript
getLocationLabelLanguage(options?: LabelLanguageOptions | undefined) => Promise<any>
```

| Param         | Type                                                                  |
| ------------- | --------------------------------------------------------------------- |
| **`options`** | <code><a href="#labellanguageoptions">LabelLanguageOptions</a></code> |

**Returns:** <code>Promise&lt;any&gt;</code>

---

### getLocationLabelRadiusLanguage(...)

```typescript
getLocationLabelRadiusLanguage(options?: LabelLanguageRadiusOptions | undefined) => Promise<any>
```

| Param         | Type                                                                              |
| ------------- | --------------------------------------------------------------------------------- |
| **`options`** | <code><a href="#labellanguageradiusoptions">LabelLanguageRadiusOptions</a></code> |

**Returns:** <code>Promise&lt;any&gt;</code>

---

### Interfaces

#### LabelLanguageOptions

| Prop           | Type                |
| -------------- | ------------------- |
| **`label1`**   | <code>string</code> |
| **`label2`**   | <code>string</code> |
| **`language`** | <code>string</code> |

#### LabelLanguageRadiusOptions

| Prop           | Type                |
| -------------- | ------------------- |
| **`label1`**   | <code>string</code> |
| **`label2`**   | <code>string</code> |
| **`language`** | <code>string</code> |
| **`location`** | <code>string</code> |

</docgen-api>
