```markdown
---
"title": "Using @sentry/capacitor package",
"description": "This tutorial will guide you on how to integrate and use the @sentry/capacitor package in your Capacitor projects.",
"created_at": "September 20, 2021",
"published": true,
"slug": "sentry-capacitor.git"
---

# Getting Started with @sentry/capacitor

To get started with using the @sentry/capacitor package, follow these steps:

1. Install the package using npm:
```bash
npm install @sentry/capacitor
```

2. Import the package in your Capacitor project:
```javascript
import { Capacitor } from '@capacitor/core';
import { SentryCapacitor } from '@sentry/capacitor';
```

3. Initialize Sentry in your project:
```javascript
SentryCapacitor.init({
  dsn: 'YOUR_DSN_URL_HERE',
});
```

4. Capture and send events to Sentry:
```javascript
SentryCapacitor.captureMessage('This is a test message');
```

And that's it! You have successfully integrated the @sentry/capacitor package into your Capacitor project.

For more advanced usage and customization options, refer to the official documentation of @sentry/capacitor.
```