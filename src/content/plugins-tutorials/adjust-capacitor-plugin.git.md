```markdown
---
title: "How to Use adjust-capacitor-plugin"
description: "Step-by-Step Guide to Utilize the adjust-capacitor-plugin Package in Your Capacitor Project"
created_at: "2023-02-01"
published: true
slug: "adjust-capacitor-plugin.git"
---
# Using the adjust-capacitor-plugin Package

Adjusting Capacitor functionality with ease.

## Getting Started

To begin using the adjust-capacitor-plugin package, follow these steps:

### 1. Installation

First, install the adjust-capacitor-plugin to your project:

```bash
npm install adjust-capacitor-plugin
npx cap sync
```

### 2. Importing the Plugin

In your Capacitor project, import the adjust-capacitor-plugin:

```javascript
import { AdjustPlugin } from 'adjust-capacitor-plugin';
```

### 3. Initializing the Plugin

Before using any methods provided by the adjust-capacitor-plugin, make sure to initialize it:

```javascript
const adjust = new AdjustPlugin();
await adjust.init();
```

### 4. Using Plugin Methods

Now you can utilize the various methods provided by the adjust-capacitor-plugin:

#### Track Event

Track a specific event with optional parameters:

```javascript
await adjust.trackEvent({ eventName: 'purchase', params: { revenue: '50' } });
```

#### Register Callback

Register a custom function to be triggered on a specific event:

```javascript
adjust.registerCallback('event_callback', () => {
  console.log('Event callback triggered');
});
```

### 5. Additional Configuration

For advanced configuration options and more detailed usage, refer to the official documentation of adjust-capacitor-plugin.

## Conclusion

You have now successfully incorporated the adjust-capacitor-plugin into your Capacitor project. Explore its features and enhance your app with ease.
```
