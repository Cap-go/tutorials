```markdown
---
title: "Using @rolster/capacitor-device-manager Package"
description: "A tutorial on how to utilize the @rolster/capacitor-device-manager package in a Capacitor app."
created_at: "September 24th, 2021"
published: true
slug: capacitor-device-manager.git.git
---

# Using @rolster/capacitor-device-manager Package

To begin using the @rolster/capacitor-device-manager package in your Capacitor project, follow these steps:

1. Install the package by running:
```
npm install @rolster/capacitor-device-manager
```

2. Import the `DeviceManager` module in your project:
```typescript
import { DeviceManager } from '@rolster/capacitor-device-manager';
```

3. Initialize the device manager and retrieve device information:
```typescript
const deviceInfo = await DeviceManager.getDeviceInformation();
console.log(deviceInfo);
```

4. Utilize the device information in your application as needed.

This tutorial provides a basic overview of how to get started with the @rolster/capacitor-device-manager package in a Capacitor project. Explore the package documentation for more advanced functionalities and customization options.
```