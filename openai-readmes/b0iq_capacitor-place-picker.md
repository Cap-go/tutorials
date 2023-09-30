# capacitor-place-picker

Pick place or location with native performance

## Install

```bash
npm install capacitor-place-picker
npx cap sync
```

## API

<docgen-index>

- [`pickPlace(...)`](#pickplace)
- [Interfaces](#interfaces)
- [Enums](#enums)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### pickPlace(...)

```typescript
pickPlace(options: PlacePickerOptions) => Promise<PlacePickerResults>
```

| Param         | Type                                                              |
| ------------- | ----------------------------------------------------------------- |
| **`options`** | <code><a href="#placepickeroptions">PlacePickerOptions</a></code> |

**Returns:** <code>Promise&lt;<a href="#placepickerresults">PlacePickerResults</a>&gt;</code>

---

### Interfaces

#### PlacePickerResults

| Prop             | Type                                                                    |
| ---------------- | ----------------------------------------------------------------------- |
| **`coordinate`** | <code><a href="#placepickercoordinate">PlacePickerCoordinate</a></code> |
| **`address`**    | <code><a href="#placepickeraddress">PlacePickerAddress</a></code>       |
| **`didCancel`**  | <code>boolean</code>                                                    |

#### PlacePickerCoordinate

| Prop            | Type                |
| --------------- | ------------------- |
| **`latitude`**  | <code>number</code> |
| **`longitude`** | <code>number</code> |

#### PlacePickerAddress

| Prop             | Type                |
| ---------------- | ------------------- |
| **`name`**       | <code>string</code> |
| **`streetName`** | <code>string</code> |
| **`city`**       | <code>string</code> |
| **`state`**      | <code>string</code> |
| **`zipCode`**    | <code>string</code> |
| **`country`**    | <code>string</code> |

#### PlacePickerOptions

| Prop                     | Type                                                                                                             | Default                                                              |
| ------------------------ | ---------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| **`presentationStyle`**  | <code><a href="#placepickerpresentationstyle">PlacePickerPresentationStyle</a> \| 'modal' \| 'fullscreen'</code> | <code>PlacePickerPresentationStyle.fullscreen \| 'fullscreen'</code> |
| **`title`**              | <code>string</code>                                                                                              | <code>'Choose Place'</code>                                          |
| **`searchPlaceholder`**  | <code>string</code>                                                                                              | <code>'Search...'</code>                                             |
| **`color`**              | <code>string</code>                                                                                              | <code>'#FF0000'</code>                                               |
| **`contrastColor`**      | <code>string</code>                                                                                              | <code>'#FFFFFF'</code>                                               |
| **`locale`**             | <code>string</code>                                                                                              | <code>'en-US'</code>                                                 |
| **`initialCoordinates`** | <code><a href="#placepickercoordinate">PlacePickerCoordinate</a></code>                                          | <code>`{latitude: 25.2048, longitude: 55.2708 }`</code>              |
| **`enableGeocoding`**    | <code>boolean</code>                                                                                             | <code>true</code>                                                    |
| **`enableSearch`**       | <code>boolean</code>                                                                                             | <code>true</code>                                                    |
| **`enableUserLocation`** | <code>boolean</code>                                                                                             | <code>true</code>                                                    |
| **`enableLargeTitle`**   | <code>boolean</code>                                                                                             | <code>true</code>                                                    |
| **`rejectOnCancel`**     | <code>boolean</code>                                                                                             | <code>true</code>                                                    |

### Enums

#### PlacePickerPresentationStyle

| Members          | Value                     |
| ---------------- | ------------------------- |
| **`modal`**      | <code>'modal'</code>      |
| **`fullscreen`** | <code>'fullscreen'</code> |

</docgen-api>
