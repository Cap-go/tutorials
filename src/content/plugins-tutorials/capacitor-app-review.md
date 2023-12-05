```markdown
---
title: "Using @rolster/capacitor-app-review Package"
description: "This tutorial will guide you on how to use the @rolster/capacitor-app-review package to assist in leaving user reviews/ratings in the App Stores."
created_at: "2022-01-10"
published: true
slug: capacitor-app-review
---

# Using @rolster/capacitor-app-review Package

This tutorial will guide you on how to use the `@rolster/capacitor-app-review` package to assist in leaving user reviews/ratings in the App Stores.

## Install

To install the `@rolster/capacitor-app-review` package, run the following command:

```bash
npm install @rolster/capacitor-app-review
npx cap sync
```

## API

The `@rolster/capacitor-app-review` package provides the following API:

### launch()

The `launch()` method opens the App Store or Google Play Store for the user to leave a review.

```typescript
launch() => Promise<void>
```

To use the `launch()` method, import the package and call the method as shown below:

```typescript
import { launch } from '@rolster/capacitor-app-review';

// ...

async function leaveReview() {
  try {
    await launch();
    console.log('Review launched successfully');
  } catch (error) {
    console.error('Failed to launch review:', error);
  }
}

leaveReview();
```

That's it! You can now use the `@rolster/capacitor-app-review` package to prompt your users to leave reviews or ratings in the App Stores.

---

*This tutorial was created on 2022-01-10 and published as part of the Capacitor App Review series.*
```
```