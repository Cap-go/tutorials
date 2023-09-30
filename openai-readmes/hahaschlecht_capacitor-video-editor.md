# capacitor-video-editor

This Plugin is still under development. Please do not use it, yet.

A plugin to pick videos from the camera roll and edit them.

## Install

```bash
npm install capacitor-video-editor
npx cap sync
```

## API

<docgen-index>

- [`getVideos(...)`](#getvideos)
- [`checkPermissions()`](#checkpermissions)
- [`requestPermissions(...)`](#requestpermissions)
- [`trim(...)`](#trim)
- [`concatVideos(...)`](#concatvideos)
- [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### getVideos(...)

```typescript
getVideos(options: VideoOptions) => any
```

| Param         | Type                                                  |
| ------------- | ----------------------------------------------------- |
| **`options`** | <code><a href="#videooptions">VideoOptions</a></code> |

**Returns:** <code>any</code>

---

### checkPermissions()

```typescript
checkPermissions() => any
```

**Returns:** <code>any</code>

---

### requestPermissions(...)

```typescript
requestPermissions(permissions?: VideoEditorPluginPermissions | undefined) => any
```

| Param             | Type                                                                                  |
| ----------------- | ------------------------------------------------------------------------------------- |
| **`permissions`** | <code><a href="#videoeditorpluginpermissions">VideoEditorPluginPermissions</a></code> |

**Returns:** <code>any</code>

---

### trim(...)

```typescript
trim(options: TrimOptions) => any
```

| Param         | Type                                                |
| ------------- | --------------------------------------------------- |
| **`options`** | <code><a href="#trimoptions">TrimOptions</a></code> |

**Returns:** <code>any</code>

---

### concatVideos(...)

```typescript
concatVideos(paths: ConcatOptions) => any
```

| Param       | Type                                                    |
| ----------- | ------------------------------------------------------- |
| **`paths`** | <code><a href="#concatoptions">ConcatOptions</a></code> |

**Returns:** <code>any</code>

---

### Interfaces

#### VideoOptions

| Prop                   | Type                |
| ---------------------- | ------------------- |
| **`maxVideos`**        | <code>number</code> |
| **`amountThumbnails`** | <code>number</code> |

#### ReturnVideos

| Prop         | Type            |
| ------------ | --------------- |
| **`videos`** | <code>{}</code> |

#### Video

| Prop             | Type                  | Description                                                                                                               | Since |
| ---------------- | --------------------- | ------------------------------------------------------------------------------------------------------------------------- | ----- |
| **`path`**       | <code>string</code>   | The path will contain a full, platform-specific file URL that can be read later using the Filsystem API.                  | 1.0.0 |
| **`webPath`**    | <code>string</code>   | webPath returns a path that can be used to set the src attribute of an video element for efficient loading and rendering. | 1.0.0 |
| **`exif`**       | <code>any</code>      | Exif data, if any, retrieved from the video                                                                               | 1.0.0 |
| **`extension`**  | <code>string</code>   | format of the video                                                                                                       | 1.0.0 |
| **`thumbnails`** | <code>[string]</code> | The webpaths to the generated thumbnails                                                                                  | 1.0.0 |
| **`duration`**   | <code>string</code>   | The duration of the video in seconds                                                                                      | 1.0.0 |
| **`size`**       | <code>string</code>   | The size of the video in bytes                                                                                            | 1.0.0 |

#### PermissionStatus

| Prop         | Type                                                                                   |
| ------------ | -------------------------------------------------------------------------------------- |
| **`camera`** | <code>"prompt" \| "prompt-with-rationale" \| "granted" \| "denied" \| "limited"</code> |
| **`videos`** | <code>"prompt" \| "prompt-with-rationale" \| "granted" \| "denied" \| "limited"</code> |

#### VideoEditorPluginPermissions

| Prop              | Type            |
| ----------------- | --------------- |
| **`permissions`** | <code>{}</code> |

#### TrimOptions

| Prop            | Type                |
| --------------- | ------------------- |
| **`start`**     | <code>string</code> |
| **`end`**       | <code>string</code> |
| **`path`**      | <code>string</code> |
| **`extension`** | <code>string</code> |

#### ConcatOptions

The path will contain a full,
platform-specific file URL that can be read later using the Filsystem API.

| Prop                   | Type                |
| ---------------------- | ------------------- |
| **`videos`**           | <code>{}</code>     |
| **`audio`**            | <code>string</code> |
| **`amountThumbnails`** | <code>number</code> |

#### ConcatItem

| Prop           | Type                |
| -------------- | ------------------- |
| **`path`**     | <code>string</code> |
| **`start`**    | <code>string</code> |
| **`duration`** | <code>string</code> |

</docgen-api>
