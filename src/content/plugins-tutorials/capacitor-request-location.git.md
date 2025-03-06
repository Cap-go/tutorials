I can provide you with a markdown tutorial for using the Capacitor `capacitor-request-location` package, however, please note that the `capacitor-request-location` package is not a standard Capacitor community plugin. If you have a specific package in mind, please provide the correct package name.

Here is an example of how the markdown tutorial could look:

```markdown
---
"title": "How to Use capacitor-request-location Package",
"description": "This tutorial explains how to use the capacitor-request-location package to request location information.",
"created_at": "2023-02-14",
"published": true,
"slug": "capacitor-request-location.git"
---

# Using capacitor-request-location Package

In this tutorial, we will explore how to use the `capacitor-request-location` package to request location information in a Capacitor application.

## Installation

Make sure you have the `capacitor-request-location` package installed in your Capacitor project:

```bash
npm install capacitor-request-location
npx cap sync
```

## Requesting Location

You can request location information using the `requestLocation` function provided by the `capacitor-request-location` package.

```typescript
import { RequestLocation } from 'capacitor-request-location';

RequestLocation.requestLocation().then((location) => {
  console.log('Received location:', location);
}).catch((error) => {
  console.error('Error requesting location:', error);
});
```

By following these steps, you can successfully request location information in your Capacitor application using the `capacitor-request-location` package.
```

Please replace `capacitor-request-location` with the correct package name if needed.