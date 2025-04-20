```
---
"title": "Using @skektec/capacitor-contacts Package",
"description": "A markdown tutorial on how to use the @skektec/capacitor-contacts package in your Ionic Capacitor project.",
"created_at": "2023-10-06",
"published": true,
"slug": "capacitor-v7-contacts-port.git"
---

# Using @skektec/capacitor-contacts Package

The @skektec/capacitor-contacts package is a useful tool for integrating contact management capabilities into your Ionic Capacitor project.

## Getting Started

To begin using the @skektec/capacitor-contacts package, follow these steps:

### 1. Install the Package

First, install the @skektec/capacitor-contacts package into your Ionic project:
```bash
npm install @skektec/capacitor-contacts
```

### 2. Add the Plugin to Capacitor

Next, add the @skektec/capacitor-contacts plugin to Capacitor by running:
```bash
npx cap plugin:add @skektec/capacitor-contacts
```

### 3. Use the Contacts Plugin

You can now use the @skektec/capacitor-contacts plugin in your Ionic project to access and manage contacts on the device. Here's an example of how to get all contacts:
```typescript
import { Plugins } from '@capacitor/core';

const { Contacts } = Plugins;

const getContacts = async () => {
  const result = await Contacts.getContacts();
  return result;
};
```

## Conclusion

In this tutorial, you learned how to install and use the @skektec/capacitor-contacts package in your Ionic Capacitor project to manage contacts efficiently. Explore the package further to leverage more contact management features.
```