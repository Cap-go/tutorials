# hwmlkit

Huawei Ml Kit

## Install

```bash
npm install hwmlkit
npx cap sync
```

## API

<docgen-index>

- [`TextRecognition(...)`](#textrecognition)
- [`FaceDetection(...)`](#facedetection)
- [`FaceVerification(...)`](#faceverification)
- [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### TextRecognition(...)

```typescript
TextRecognition(options?: TextRecognitionOptions | undefined) => any
```

| Param         | Type                                                                      |
| ------------- | ------------------------------------------------------------------------- |
| **`options`** | <code><a href="#textrecognitionoptions">TextRecognitionOptions</a></code> |

**Returns:** <code>any</code>

---

### FaceDetection(...)

```typescript
FaceDetection(options?: FaceDetectionOptions | undefined) => any
```

| Param         | Type                                                                  |
| ------------- | --------------------------------------------------------------------- |
| **`options`** | <code><a href="#facedetectionoptions">FaceDetectionOptions</a></code> |

**Returns:** <code>any</code>

---

### FaceVerification(...)

```typescript
FaceVerification(options?: FaceVerificationOptions | undefined) => any
```

| Param         | Type                                                                        |
| ------------- | --------------------------------------------------------------------------- |
| **`options`** | <code><a href="#faceverificationoptions">FaceVerificationOptions</a></code> |

**Returns:** <code>any</code>

---

### Interfaces

#### TextRecognitionOptions

| Prop           | Type                |
| -------------- | ------------------- |
| **`language`** | <code>string</code> |
| **`base64`**   | <code>string</code> |

#### FaceDetectionOptions

| Prop            | Type                |
| --------------- | ------------------- |
| **`FaceImage`** | <code>string</code> |

#### FaceVerificationOptions

| Prop               | Type                |
| ------------------ | ------------------- |
| **`faceTemplate`** | <code>string</code> |
| **`faceCompare`**  | <code>string</code> |

</docgen-api>
