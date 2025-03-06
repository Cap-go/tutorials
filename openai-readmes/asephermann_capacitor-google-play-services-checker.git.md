# capacitor-google-play-services-checker

Capacitor Plugin Google Play Services Checker

## Install

```bash
npm install capacitor-google-play-services-checker
npx cap sync
```

## Example

```typescript
import { GooglePlayServicesChecker } from 'capacitor-google-play-services-checker';

check = async () => {
  const checkResult = await GooglePlayServicesChecker.check();

  console.log('Google Play Services Available:', checkResult.isAvailable);
};
```

## API

<docgen-index>

* [`check()`](#check)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### check()

```typescript
check() => Promise<{ isAvailable: boolean; }>
```

Check if Google Play Services is available.

**Returns:** <code>Promise&lt;{ isAvailable: boolean; }&gt;</code>

--------------------

</docgen-api>
