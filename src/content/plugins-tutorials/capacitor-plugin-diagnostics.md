```markdown
---
"title": "How to Use capacitor-plugin-diagnostics Package"
"description": "Step-by-step tutorial on integrating and utilizing the capacitor-plugin-diagnostics package in your app"
"created_at": "2022-04-11"
"published": true
slug: capacitor-plugin-diagnostics
---

# Using capacitor-plugin-diagnostics Package

The capacitor-plugin-diagnostics package allows you to access and monitor various device diagnostics information in your Ionic application. Follow the steps below to integrate and effectively use this plugin:

## Installation

```bash
npm install capacitor-plugin-diagnostics
npx cap sync
```

## API

### Diagnostic Information

You can retrieve device diagnostic information using this API.

```typescript
import { Plugins } from '@capacitor/core';
const { Diagnostics } = Plugins;

const diagnosticInfo = await Diagnostics.getDiagnosticInfo();
console.log('Diagnostic Information:', diagnosticInfo);
```

### Battery Info

Obtain battery information through the `getBatteryInfo` method.

```typescript
import { Plugins } from '@capacitor/core';
const { Diagnostics } = Plugins;

const batteryInfo = await Diagnostics.getBatteryInfo();
console.log('Battery Information:', batteryInfo);
```

### Network Information

Check the network status using `getNetworkStatus`.

```typescript
import { Plugins } from '@capacitor/core';
const { Diagnostics } = Plugins;

const networkStatus = await Diagnostics.getNetworkStatus();
console.log('Network Status:', networkStatus);
```

Make sure to handle the asynchronous nature of these calls appropriately in your application.

By following these steps, you can seamlessly integrate the capacitor-plugin-diagnostics package into your Ionic app to monitor and access device diagnostics.
```
