# capacitor-autostartmanager

Auto Start Manager, Check Automatic Date Time Zone, Check Camera

## Install

```bash
npm install capacitor-autostartmanager
npx cap sync
```

## API

<docgen-index>

* [`showStartManager()`](#showstartmanager)
* [`checkAutomaticDateTimeZone()`](#checkautomaticdatetimezone)
* [`checkCamera()`](#checkcamera)
* [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### showStartManager()

```typescript
showStartManager() => Promise<void>
```

--------------------


### checkAutomaticDateTimeZone()

```typescript
checkAutomaticDateTimeZone() => Promise<{ isAutomatic: Boolean; }>
```

**Returns:** <code>Promise&lt;{ isAutomatic: <a href="#boolean">Boolean</a>; }&gt;</code>

--------------------


### checkCamera()

```typescript
checkCamera() => Promise<{ isCameraOpen: Boolean; }>
```

**Returns:** <code>Promise&lt;{ isCameraOpen: <a href="#boolean">Boolean</a>; }&gt;</code>

--------------------


### Interfaces


#### Boolean

| Method      | Signature        | Description                                          |
| ----------- | ---------------- | ---------------------------------------------------- |
| **valueOf** | () =&gt; boolean | Returns the primitive value of the specified object. |

</docgen-api>