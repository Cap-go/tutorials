```markdown
---
"title": "Using Capacitor Secure Share Plugin",
"description": "Tutorial on how to use @okode/capacitor-plugin-secure-share package in your Capacitor project.",
"created_at": "2022-03-01",
"published": true,
"slug": "capacitor-plugin-secure-share.git"
---

# Using Capacitor Secure Share Plugin

This tutorial will guide you through the steps of using the @okode/capacitor-plugin-secure-share package in your Capacitor project.

## Install

First, you need to install the package using npm:

```bash
npm install @okode/capacitor-plugin-secure-share
npx cap sync
```

## Save Data

You can save data using the `save` method provided by the plugin. Here's an example:

```typescript
import { Plugins } from '@capacitor/core';

const { SecureSharePlugin } = Plugins;

SecureSharePlugin.save({ key: 'value' })
  .then(() => {
    console.log('Data saved successfully');
  })
  .catch((error) => {
    console.error('Error saving data:', error);
  });
```

## Retrieve Data

To retrieve data that you have saved, you can use the `retrieve` method. Here's how:

```typescript
SecureSharePlugin.retrieve()
  .then((data) => {
    console.log('Retrieved data:', data);
  })
  .catch((error) => {
    console.error('Error retrieving data:', error);
  });
```

## Retrieve Data from Package

You can also retrieve data from a specific package using the `retrieveFrom` method. Here's an example:

```typescript
SecureSharePlugin.retrieveFrom({ packageName: 'example-package' })
  .then((data) => {
    console.log('Retrieved data from package:', data);
  })
  .catch((error) => {
    console.error('Error retrieving data from package:', error);
  });
```

That's it! You've now learned how to use the Capacitor Secure Share Plugin in your project.
```