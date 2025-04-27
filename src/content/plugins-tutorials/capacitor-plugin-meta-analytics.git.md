```markdown
---
title: "Using @silvermaster-gt/capacitor-plugin-meta-analytics Package"
description: "A tutorial on integrating and utilizing the @silvermaster-gt/capacitor-plugin-meta-analytics package in your Capacitor project."
created_at: "2023-02-12"
published: true
slug: "capacitor-plugin-meta-analytics.git"
---

# Using @silvermaster-gt/capacitor-plugin-meta-analytics Package

Here is a simple guide on how to integrate and use the @silvermaster-gt/capacitor-plugin-meta-analytics package in your Capacitor project.

1. Install the plugin:
```bash
npm install @silvermaster-gt/capacitor-plugin-meta-analytics
```

2. Add the plugin to your Capacitor project:
```bash
npx cap sync
```

3. Use the plugin in your code:
```javascript
import { Plugins } from '@capacitor/core';
const { MetaAnalytics } = Plugins;

// Example of tracking an event
MetaAnalytics.trackEvent({
  eventName: 'button_click',
  eventParams: {
    button_id: 'submit_button',
    clicked_time: new Date().toISOString()
  }
});
```

This is just a basic tutorial to get you started with the @silvermaster-gt/capacitor-plugin-meta-analytics package. For more advanced usage, refer to the official documentation.

For further details, please refer to the [official documentation](https://dash.readme.com/project/mati/v1.4/docs/quik-start-1).
```