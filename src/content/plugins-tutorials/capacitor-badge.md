---
title: "Using @hanwha-ss1/capacitor-badge Package"
description: "This tutorial will guide you through the process of using the @hanwha-ss1/capacitor-badge package in your Capacitor app. It will cover installation, configuration, and usage of the package."
created_at: "2021-11-10"
published: true
slug: "capacitor-badge"
---

# Using @hanwha-ss1/capacitor-badge Package

This tutorial will guide you through the process of using the @hanwha-ss1/capacitor-badge package in your Capacitor app. It will cover installation, configuration, and usage of the package.

## Installation

To install the @hanwha-ss1/capacitor-badge package, run the following command in your Capacitor app's root directory:

```bash
npm install @hanwha-ss1/capacitor-badge
```

## Configuration

After installing the package, you need to configure it in your Capacitor app.

1. Open the `capacitor.config.json` file in your Capacitor app's root directory.
2. Add the following entry under the `plugins` section:

```json
{
  "name": "@hanwha-ss1/capacitor-badge"
}
```

## Usage

Once the @hanwha-ss1/capacitor-badge package is installed and configured, you can use its functionality in your app.

### Set Badge Value

To set the badge value, you can use the `setBadge` method provided by the package. This method accepts a single parameter, which is the value to be displayed as the badge.

```typescript
import { CapacitorBadge } from '@hanwha-ss1/capacitor-badge';

CapacitorBadge.setBadge({ value: 5 });
```

### Clear Badge Value

To clear the badge value, you can use the `clearBadge` method provided by the package. This method doesn't require any parameters.

```typescript
import { CapacitorBadge } from '@hanwha-ss1/capacitor-badge';

CapacitorBadge.clearBadge();
```

## Conclusion

In this tutorial, you learned how to install, configure, and use the @hanwha-ss1/capacitor-badge package in your Capacitor app. You can now leverage this package's functionality to display badges on your app's icon.