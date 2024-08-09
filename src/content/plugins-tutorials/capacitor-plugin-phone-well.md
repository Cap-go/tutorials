```md
---
"title": "Using capacitor-plugin-phone-well Package Tutorial"
"description": "Learn how to integrate and utilize the capacitor-plugin-phone-well package in your Capacitor project."
"created_at": "2021-11-15"
"published": true
slug: capacitor-plugin-phone-well
---

# Using capacitor-plugin-phone-well Package Tutorial

In this tutorial, we will explore how to effectively incorporate the capacitor-plugin-phone-well package into your Capacitor project. This package provides functionalities related to phone management within your application.

## Getting Started

To begin using the capacitor-plugin-phone-well package, follow these steps:

### Step 1: Installation

First, install the package using npm:

```bash
npm install capacitor-plugin-phone-well
npx cap sync
```

### Step 2: Integration

Integrate the package into your project:

```typescript
import { PhoneWellPlugin } from 'capacitor-plugin-phone-well';

const phonePlugin = new PhoneWellPlugin();

phonePlugin.checkPhoneStatus()
  .then((status) => {
    console.log('Phone status:', status);
  })
  .catch((error) => {
    console.error('Error checking phone status:', error);
  });
```

### Step 3: Functionality

Utilize the package's functions:

```typescript
phonePlugin.makeCall({ number: '123456789' })
  .then(() => {
    console.log('Call initiated successfully');
  })
  .catch((error) => {
    console.error('Error making call:', error);
  });
```

## Conclusion

In this tutorial, we have covered the basic integration and usage of the capacitor-plugin-phone-well package. Explore further functionalities provided by the plugin to enhance your application's phone management capabilities.
```
```
