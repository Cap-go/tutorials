```markdown
---
title: DEVICE CHECK
description: markdown tutorial for using @capacitor-community/device-check package
created_at: October 11, 2021
published: true
slug: device-check
---

## @capacitor-community/device-check Tutorial

The DeviceCheck API is used to reduce fraudulent use of your services by managing device state and asserting app integrity. This plugin calls the DeviceCheck API `generateToken` method, which returns a token that your App's server must verify with Apple Servers.

### Installation

```bash
npm install @capacitor-community/device-check
npx cap sync
```

### Usage

```typescript
import { DeviceCheck } from '@capacitor-community/device-check';

try {
    const result = await DeviceCheck.generateToken();
    console.log(`DeviceCheck token:`, result.token);
} catch (err) {
    // Recommendation: Report to backend and exit the application
}
```

### Errors

The following errors can occur and should be handled:

- On Web and Android, the result of `generateToken` will be an empty token `""`.
- On iOS, these errors can be caught in a `catch` block:
  - `DeviceCheck is not supported on this device` - iOS reports that the device doesn't support the Device Check API (e.g., iOS less than v11).
  - `DeviceCheck token encoding failed` - iOS failed to encode the token.
  - `DeviceCheck error: [some-error]` - iOS reported some other error with the localized error description of `[some-error]`.
```
