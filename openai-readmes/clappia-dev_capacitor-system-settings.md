# @clappia-dev/capacitor-system-settings

Capacitor plugin to access the attributes of Developer Options (Android only)

## Install

```bash
npm install @clappia/capacitor-system-settings
npx cap sync
```

## API

<docgen-index>

* [`getDeveloperOptions()`](#getdeveloperoptions)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### getDeveloperOptions()

```typescript
getDeveloperOptions() => Promise<any>
```

Returns a map { developerOptionsEnabled: boolean } indicating whether the developer options are enabled.
In future, this will return more attributes related to the system settings.

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------

</docgen-api>
