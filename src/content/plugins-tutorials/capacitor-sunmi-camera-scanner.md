---
title: Using Capacitor Sunmi Camera Scanner
description: A tutorial on how to use the @kduma-autoid/capacitor-sunmi-camera-scanner package in your Capacitor project.
created_at: 2022-01-21
published: true
slug: capacitor-sunmi-camera-scanner
---

## Using Capacitor Sunmi Camera Scanner

### Install the Package

First, install the `@kduma-autoid/capacitor-sunmi-camera-scanner` package using npm:

```bash
npm install @kduma-autoid/capacitor-sunmi-camera-scanner
npx cap sync
```

### Configuration

You can disable auto binding of the service by setting `bindOnLoad` to `false` in the plugin configuration in `capacitor.config.ts`:

```typescript
/// <reference types="@kduma-autoid/capacitor-sunmi-camera-scanner" />
import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: "com.company.app",
  ...
  plugins: {
    SunmiCameraScanner: {
      bindOnLoad: true
    }
  }
}
export default config;
```

### API

The API documentation for the `@kduma-autoid/capacitor-sunmi-camera-scanner` package can be found below:

<docgen-index>
