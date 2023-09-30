# capacitor-mlkit-digitalink-plugin

Capacitor plugin for use of the Google MLKit Digital Ink Recognition models.

## Install

```bash
npm install capacitor-mlkit-digitalink-plugin
npx cap sync
```

## API

<docgen-index>

- [`initializePlugin()`](#initializeplugin)
- [`erase()`](#erase)
- [`logStrokes(...)`](#logstrokes)
- [`doRecognition(...)`](#dorecognition)
- [`downloadSingularModel(...)`](#downloadsingularmodel)
- [`downloadMultipleModels(...)`](#downloadmultiplemodels)
- [`deleteModel(...)`](#deletemodel)
- [`getDownloadedModels()`](#getdownloadedmodels)
- [Interfaces](#interfaces)
- [Type Aliases](#type-aliases)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### initializePlugin()

```typescript
initializePlugin() => Promise<{ ok: boolean; msg: string; }>
```

Initializes notifications on iOS -- NOT supported in Android
due to the use of other event listeners

**Returns:** <code>Promise&lt;{ ok: boolean; msg: string; }&gt;</code>

---

### erase()

```typescript
erase() => Promise<{ ok: boolean; msg: string; }>
```

Erases natively stored stroke/point/ink data

**Returns:** <code>Promise&lt;{ ok: boolean; msg: string; }&gt;</code>

---

### logStrokes(...)

```typescript
logStrokes(options: XYTOptions) => Promise<{ ok: boolean; msg: string; options: XYTOptions; }>
```

Sends XY coordinate data to native code to be prepared for model inference
Can include/exclude time values
Ensure all units for coordinates/time are consistent between logs. Unit types don't matter,
they just need to be the same -- all values are normalized

| Param         | Type                                              | Description                                              |
| ------------- | ------------------------------------------------- | -------------------------------------------------------- |
| **`options`** | <code><a href="#xytoptions">XYTOptions</a></code> | - [ X coordinate, Y coordinate, T time in milliseconds ] |

**Returns:** <code>Promise&lt;{ ok: boolean; msg: string; options: <a href="#xytoptions">XYTOptions</a>; }&gt;</code>

---

### doRecognition(...)

```typescript
doRecognition(options: RecognitionOptions) => Promise<{ ok: boolean; msg: string; results: { candidates: string[]; scores: number[]; }; options: RecognitionOptions; }>
```

Runs inference either on the provided model via the model param, or on the default English model.
All params are optional.

| Param         | Type                                                              |
| ------------- | ----------------------------------------------------------------- |
| **`options`** | <code><a href="#recognitionoptions">RecognitionOptions</a></code> |

**Returns:** <code>Promise&lt;{ ok: boolean; msg: string; results: { candidates: string[]; scores: number[]; }; options: <a href="#recognitionoptions">RecognitionOptions</a>; }&gt;</code>

---

### downloadSingularModel(...)

```typescript
downloadSingularModel(model: Model, callback: SingularModelCallback) => Promise<CallbackID>
```

Downloads singular model.
Last callback has the 'done' property set to true, and signals the last callback.

| Param          | Type                                                                    | Description                                                                             |
| -------------- | ----------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| **`model`**    | <code><a href="#model">Model</a></code>                                 | model to download. Native code checks if model is valid and if it's already downloaded. |
| **`callback`** | <code><a href="#singularmodelcallback">SingularModelCallback</a></code> | callback function that runs each time data is sent from the native code.                |

**Returns:** <code>Promise&lt;string&gt;</code>

---

### downloadMultipleModels(...)

```typescript
downloadMultipleModels(models: Models, callback: MultipleModelCallback) => Promise<CallbackID>
```

Downloads multiple models from a given array.
Callback function will return a response or an error dependent on whether a given model has
already been downloaded, is a valid/invalid model, or is finished being downloaded.
The last model will be have the 'done' property set to true and signals the last callback.

| Param          | Type                                                                    | Description                                                     |
| -------------- | ----------------------------------------------------------------------- | --------------------------------------------------------------- |
| **`models`**   | <code><a href="#models">Models</a></code>                               | array of models to download.                                    |
| **`callback`** | <code><a href="#multiplemodelcallback">MultipleModelCallback</a></code> | callback that runs each time data is sent from the native code. |

**Returns:** <code>Promise&lt;string&gt;</code>

---

### deleteModel(...)

```typescript
deleteModel(options: DeleteModelOptions, callback: DeleteModelCallback) => Promise<CallbackID>
```

Deletes a singular/collection of models downloaded to the device, or all models.

| Param          | Type                                                                | Description                                                 |
| -------------- | ------------------------------------------------------------------- | ----------------------------------------------------------- |
| **`options`**  | <code><a href="#deletemodeloptions">DeleteModelOptions</a></code>   | delete all models, a singular model, or an array of models. |
| **`callback`** | <code><a href="#deletemodelcallback">DeleteModelCallback</a></code> |                                                             |

**Returns:** <code>Promise&lt;string&gt;</code>

---

### getDownloadedModels()

```typescript
getDownloadedModels() => Promise<{ ok: true; msg: string; models: string[]; }>
```

**Returns:** <code>Promise&lt;{ ok: true; msg: string; models: string[]; }&gt;</code>

---

### Interfaces

#### XYTOptions

| Prop    | Type                  |
| ------- | --------------------- |
| **`x`** | <code>number[]</code> |
| **`y`** | <code>number[]</code> |
| **`t`** | <code>number[]</code> |

#### RecognitionOptions

| Prop              | Type                                   |
| ----------------- | -------------------------------------- |
| **`model`**       | <code>string</code>                    |
| **`context`**     | <code>string</code>                    |
| **`writingArea`** | <code>{ w: number; h: number; }</code> |

#### Model

| Prop        | Type                |
| ----------- | ------------------- |
| **`model`** | <code>string</code> |

#### Response

| Prop       | Type                 |
| ---------- | -------------------- |
| **`ok`**   | <code>boolean</code> |
| **`done`** | <code>boolean</code> |
| **`msg`**  | <code>string</code>  |

#### Models

| Prop         | Type                  |
| ------------ | --------------------- |
| **`models`** | <code>string[]</code> |

#### DeleteModelOptions

| Prop         | Type                  |
| ------------ | --------------------- |
| **`all`**    | <code>boolean</code>  |
| **`model`**  | <code>string</code>   |
| **`models`** | <code>string[]</code> |

### Type Aliases

#### SingularModelCallback

<code>(response: <a href="#response">Response</a>, error?: any): void</code>

#### CallbackID

<code>string</code>

#### MultipleModelCallback

<code>(response: <a href="#response">Response</a>, error?: any): void</code>

#### DeleteModelCallback

<code>(response: <a href="#response">Response</a>, error?: any): void</code>

</docgen-api>
