```markdown
---
"title": "Using the capacitor-plugin-filesharer Package Tutorial",
"description": "Learn how to utilize the capacitor-plugin-filesharer package in your Capacitor projects.",
"created_at": "2021-11-17",
"published": true,
"slug": "capacitor-plugin-filesharer.git"
---

# Using the capacitor-plugin-filesharer Package Tutorial

The `capacitor-plugin-filesharer` package allows you to easily share files in your Capacitor applications. In this tutorial, we will walk through how to integrate and utilize this package in your project.

## Installation

To get started, install the `capacitor-plugin-filesharer` package using npm:

```bash
npm install capacitor-plugin-filesharer
npx cap sync
```

## API

The `capacitor-plugin-filesharer` package provides the following API:

### shareFile(...)

```typescript
shareFile(options: { path: string; }): Promise<{ status: string; }>
```

| Param             | Type                              |
| ----------------- | --------------------------------- |
| **`options.path`** | <code>string</code>               |

**Returns:** <code>Promise&lt;{ status: string; }&gt;</code>

## Implementation

To use the file sharing functionality in your application, follow these steps:

1. Import the plugin in your code:

```typescript
import { Plugins } from '@capacitor/core';
const { FileSharer } = Plugins;
```

2. Call the `shareFile` method with the file path you want to share:

```typescript
const result = await FileSharer.shareFile({ path: 'path_to_your_file.ext' });
console.log(result.status); // Output: 'success' if the file sharing was successful
```

By following these steps, you can easily integrate file sharing capabilities into your Capacitor app using the `capacitor-plugin-filesharer` package.

```markers
```