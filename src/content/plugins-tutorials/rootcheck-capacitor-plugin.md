```markdown
---
"title": "Using Rootcheck Capacitor Plugin",
"description": "Learn how to integrate and use the Rootcheck Capacitor Plugin in your Capacitor-powered applications.",
"created_at": "October 1, 2021",
"published": true,
"slug": "rootcheck-capacitor-plugin"
---

# Using Rootcheck Capacitor Plugin

The Rootcheck Capacitor Plugin is a useful tool for detecting root access on Android devices within Capacitor apps. By integrating this plugin, you can enhance the security of your application and protect it from potential security threats.

## Installation

To get started with the Rootcheck Capacitor Plugin, follow these steps:

1. Install the plugin in your project:
```bash
npm install rootcheck-capacitor-plugin
npx cap sync
```

## Usage

Once you have installed the plugin, you can easily implement root access detection in your app. Here is a basic example of how you can use the Rootcheck Capacitor Plugin:

```typescript
import { Plugins } from '@capacitor/core';

const { Rootcheck } = Plugins;

// Check for root access
Rootcheck.checkRoot().then(result => {
    if (result.hasRoot) {
        console.log('Root access detected!');
        // Handle action when root access is detected
    } else {
        console.log('No root access detected');
        // Proceed with regular app workflow
    }
}).catch(error => {
    console.error('Error checking for root access:', error);
});
```

By following these simple steps, you can easily incorporate root access detection functionality into your Capacitor applications using the Rootcheck Capacitor Plugin.
```