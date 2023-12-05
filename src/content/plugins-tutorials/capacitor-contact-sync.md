---
title: "Using @blue-performance/capacitor-contact-sync Package"
description: "A tutorial on how to use the @blue-performance/capacitor-contact-sync package to sync contacts in Capacitor"
created_at: "2022-01-01"
published: true
slug: "capacitor-contact-sync"
---

# Using @blue-performance/capacitor-contact-sync Package

In this tutorial, we will explore how to use the `@blue-performance/capacitor-contact-sync` package to sync contacts in Capacitor.

## Prerequisites

Before we begin, make sure you have the following installed:

- Capacitor CLI ([installation guide](https://capacitorjs.com/docs/getting-started))
- Node.js and npm ([installation guide](https://nodejs.org))

## Installation

To install the `@blue-performance/capacitor-contact-sync` package, run the following command:

```bash
npm install @blue-performance/capacitor-contact-sync
```

## Configuration

To configure the package, follow these steps:

1. Open your project's `capacitor.config.json` file.
2. Add the following entry to the `plugins` section:

```json
{
  "name": "ContactSync",
  "id": "@blue-performance/capacitor-contact-sync"
}
```

3. Save the changes and close the file.

## Usage

Now that the installation and configuration are done, let's see how to use the package to sync contacts.

### Import the Plugin

First, import the plugin in your JavaScript/TypeScript file:

```typescript
import { Plugins } from '@capacitor/core';
const { ContactSync } = Plugins;
```

### Sync Contacts

To sync the contacts, call the `sync` method:

```typescript
const result = await ContactSync.sync();
```

The `sync` method returns a promise that resolves to a boolean indicating whether the sync was successful or not.

### Handling Errors

In case of an error, you can catch it using a try-catch block:

```typescript
try {
  const result = await ContactSync.sync();
  // Handle successful sync
} catch (error) {
  console.error('Failed to sync contacts', error);
  // Handle error
}
```

## Conclusion

In this tutorial, we learned how to use the `@blue-performance/capacitor-contact-sync` package to sync contacts in Capacitor. We covered the installation, configuration, and usage of the package. Now you can easily integrate contact synchronization in your Capacitor project.

Remember to refer to the package documentation for more details and additional options.

Feel free to leave any feedback or questions in the comments section below. Happy coding!

---

This blog tutorial was created on 2022-01-01 and is published at the slug `capacitor-contact-sync`.