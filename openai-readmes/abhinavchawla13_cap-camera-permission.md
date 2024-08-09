# cap-camera-permission

To check and request only the camera permission on a capacitor app. It's a subset of @capacitor/camera and does not require NSPhotoLibraryUsageDescription key.

Use case: When you only care about camera and do not want to request for photo library permissions, for example, accessing camera feed to scan items without the need to save the video.

## How to update

Go inside specific Android and/or iOS folders, make any changes and run `npm run build`. Once ready, can update version in package.json file and then run `npm publish`.

Also, to install it to test locally, you can do `npm install '../<path>/cap-camera-permission'`s

## Install

```bash
npm install cap-camera-permission
npx cap sync
```

## API

<docgen-index>

- [`checkPermissions()`](#checkpermissions)
- [`requestPermissions(...)`](#requestpermissions)
- [Interfaces](#interfaces)
- [Type Aliases](#type-aliases)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### checkPermissions()

```typescript
checkPermissions() => Promise<{ camera: PermissionState; }>
```

Check camera and photo album permissions

**Returns:** <code>Promise&lt;{ camera: any; }&gt;</code>

**Since:** 1.0.0

---

### requestPermissions(...)

```typescript
requestPermissions(permissions?: CameraPluginPermissions | undefined) => Promise<{ camera: PermissionState; }>
```

Request camera and photo album permissions

| Param             | Type                                                                        |
| ----------------- | --------------------------------------------------------------------------- |
| **`permissions`** | <code><a href="#camerapluginpermissions">CameraPluginPermissions</a></code> |

**Returns:** <code>Promise&lt;{ camera: any; }&gt;</code>

**Since:** 1.0.0

---

### Interfaces

#### CameraPluginPermissions

| Prop              | Type                    |
| ----------------- | ----------------------- |
| **`permissions`** | <code>['camera']</code> |

### Type Aliases

#### PermissionState

<code>'prompt' | 'prompt-with-rationale' | 'granted' | 'denied'</code>

</docgen-api>
