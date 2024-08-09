```markdown
---
title: "Using scan-cell-plugin Package"
description: "Learn how to utilize the scan-cell-plugin package in your Capacitor project for network type scanning"
created_at: "2023-01-27"
published: true
slug: "scan-cell-plugin"
---

## Getting Started with scan-cell-plugin

This tutorial will guide you through the process of using the `scan-cell-plugin` package in your Capacitor project to scan network types in cell BTS.

### Installation

First, install the package using npm:

```
npm install scan-cell-plugin
```

Then, sync your project with Capacitor:

```
npx cap sync
```

### APIs

#### `echo`

This method echoes a provided value. Here's how to use it:

```typescript
echo({ value: 'Hello' })
  .then(res => {
    console.log(res.value); // This will log 'Hello'
  });
```

#### `testPluginMethod`

This method is used for testing the plugin with a message. Here's an example:

```typescript
testPluginMethod({ msg: 'Testing' })
  .then(res => {
    console.log(res.value); // This will log 'Testing'
  });
```

Remember to refer to the official documentation for detailed usage and more methods available.

```

```