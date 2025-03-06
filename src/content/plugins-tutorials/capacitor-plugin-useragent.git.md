```markdown
---
"title": "Using capacitor-plugin-useragent package",
"description": "Learn how to use the capacitor-plugin-useragent package in your Capacitor project.",
"created_at": "2022-01-16",
"published": true,
"slug": "capacitor-plugin-useragent.git"
---

# Using capacitor-plugin-useragent package

The capacitor-plugin-useragent package allows you to access and manage User-Agent information in your Capacitor app. In this tutorial, we will walk through the steps to integrate and utilize this package effectively.

## Installation

```bash
npm install capacitor-plugin-useragent
npx cap sync
```

## Usage

To get started with the capacitor-plugin-useragent package, you need to import and initialize it within your project. Here is an example of how you can use it:

```typescript
import { Plugins } from '@capacitor/core';

const { UserAgent } = Plugins;

const userAgent = await UserAgent.getInfo();
console.log('User-Agent:', userAgent);
```

## Conclusion

By following this guide, you can easily incorporate the capacitor-plugin-useragent package into your Capacitor project and leverage User-Agent information seamlessly.
```
```