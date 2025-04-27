```markdown
---
"title": "Using Capacitor Mixpanel Plugin",
"description": "This markdown tutorial will guide you through the process of using the @houseninja/capacitor-mixpanel package to integrate Mixpanel analytics in your Capacitor-based applications.",
"created_at": "2023-04-21",
"published": true,
"slug": "capacitor-mixpanel.git"
---

# Using @houseninja/capacitor-mixpanel Package

This tutorial will walk you through the steps to integrate the Capacitor Mixpanel plugin into your Capacitor project for tracking events using Mixpanel analytics.

## Installation

First, install the @houseninja/capacitor-mixpanel package using npm:

```bash
npm install @houseninja/capacitor-mixpanel
```

Then, add the following plugin configuration to your capacitor.config.json file:

```json
{
  "Mixpanel": {
    "token": "your-mixpanel-token",
    "trackAutomaticEvents": true,
    "optOutTrackingByDefault": false,
    "disableIosIpCollection": true,
    "serverURL": "https://api-eu.mixpanel.com/"
  }
}
```

After adding the configuration, sync the capacitor configuration by running:

```bash
npx cap sync
```

## Usage

Now, you can start using the Capacitor Mixpanel plugin in your application to track events. Here is an example of tracking an event:

```typescript
import { Plugins } from '@capacitor/core';

const { Mixpanel } = Plugins;

Mixpanel.track('Button Clicked', { buttonId: 'submit' });
```

This is a basic example of how you can track events using the Capacitor Mixpanel plugin. You can explore more functionalities and features of the plugin in the official documentation.

Happy tracking!
```