```markdown
---
"title": "Using the capacitor-print Package"
"description": "Learn how to utilize the capacitor-print package to print documents in your Capacitor app."
"created_at": "2022-01-21"
"published": true
"slug": "capacitor-print.git"
---

# Using the capacitor-print Package

In this tutorial, we will walk through how to use the `capacitor-print` package in your Capacitor project to print documents.

## Install the Package

```bash
npm install capacitor-print
npx cap sync
```

## API

The `capacitor-print` package provides the following API:

### print(...)

```typescript
print(options: { content: string; }) => Promise<void>
```

| Param            | Type                      |
| -----------------| ------------------------- |
| **`options`**    | <code>{ content: string; }</code> |

**Returns:** <code>Promise&lt;void&gt;</code>

### Example

```typescript
import { Plugins } from '@capacitor/core';
const { CapacitorPrint } = Plugins;

CapacitorPrint.print({
  content: 'This is the text content to print',
}).then(() => {
  console.log('Print job sent successfully');
}).catch((error) => {
  console.error('Error printing:', error);
});
```

## Conclusion

By following this tutorial, you should now be able to integrate the `capacitor-print` package into your Capacitor app and print documents with ease.
```
```