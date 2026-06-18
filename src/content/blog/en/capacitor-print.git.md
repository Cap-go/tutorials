---
title: Tutorial on Using Capacitor-Print Package
description: Learn how to use the Capacitor-Print package to enable printing capabilities in your Capacitor app.
created_at: 2021-11-26
published: true
slug: capacitor-print.git
locale: en
---

# Tutorial: Using Capacitor-Print Package

In this tutorial, we will explore how to use the Capacitor-Print package to enable printing capabilities in your Capacitor app.

## Getting Started

To begin using the Capacitor-Print package, you can follow these steps:

### Step 1: Installation

```bash
npm install capacitor-print
npx cap sync
```

### Step 2: Printing a Document

Once the package is installed, you can use the `print` method to enable printing. Here is an example:

```typescript
import { PrintPlugin } from "capacitor-print";

const printPlugin = new PrintPlugin();

printPlugin.printDocument({
  content: "Hello, world!",
}).then(() => {
  console.log("Document printed successfully");
}).catch((error) => {
  console.error("Printing failed:", error);
});
```

## Conclusion

In this tutorial, you learned how to use the Capacitor-Print package to add printing capabilities to your Capacitor app. Feel free to explore more features and options provided by the package.
