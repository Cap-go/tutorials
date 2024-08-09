# capacitor-mock-location-detector-plugin

Plugin for detecting mock GPS locations

## Install

```bash
npm install capacitor-mock-location-detector-plugin
npx cap sync
```

## API

<docgen-index>

* [`detectMockLocation()`](#detectmocklocation)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### detectMockLocation()

```typescript
detectMockLocation() => Promise<{ isMockLocation: boolean; message: string; }>

```


## Permissions

iOS

Add the following entries to your Info.plist file

```
<key>NSLocationAlwaysUsageDescription</key>
<string>App needs access to location when in the background.</string>
<key>NSLocationWhenInUseUsageDescription</key>
<string>App requires access to location when open.</string>
```

**Returns:** <code>Promise&lt;{ isMockLocation: boolean; message: string; }&gt;</code>

--------------------

</docgen-api>
