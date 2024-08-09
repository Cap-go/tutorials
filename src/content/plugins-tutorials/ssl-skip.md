```markdown
---
"title": "Using @jcesarmobile/ssl-skip Package"
"description": "A step-by-step tutorial on how to use the @jcesarmobile/ssl-skip package to skip SSL checks during development in a Capacitor app."
"created_at": "2022-01-25"
"published": true
slug: ssl-skip
---

# Using @jcesarmobile/ssl-skip Package

This tutorial will guide you through the process of using the @jcesarmobile/ssl-skip package to skip SSL checks in a Capacitor app during development.

## Installation

To begin, you need to install the @jcesarmobile/ssl-skip package by running the following command in your terminal:

```bash
npm install @jcesarmobile/ssl-skip
npx cap sync
```

## Skipping SSL Checks

Once the package is installed, you can skip SSL checks using the following steps:

1. Import the package into your project.
2. Invoke the necessary methods to skip SSL checks.

Here's an example of how you can use the package in your code:

```javascript
import { getSslSkip } from '@jcesarmobile/ssl-skip';

// Call the method to skip SSL checks
getSslSkip();
```

## Warning

Remember that the @jcesarmobile/ssl-skip package is intended for **development** purposes only. It is **highly recommended** to uninstall the package before publishing your app to avoid rejections on Google Play Store and App Store. To uninstall the package, run the following commands:

```bash
npm uninstall @jcesarmobile/ssl-skip
npx cap sync
```

By following these steps, you can seamlessly skip SSL checks in your Capacitor app during development using the @jcesarmobile/ssl-skip package.
```
