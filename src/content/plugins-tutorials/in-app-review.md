---
title: Using @capacitor-community/in-app-review Package
description: Tutorial on how to use the @capacitor-community/in-app-review package in a Capacitor project to prompt users to submit app store ratings and reviews without leaving the app.
created_at: 2021-11-03
published: true
slug: in-app-review
---

## Installation

To install the `@capacitor-community/in-app-review` package, run the following command:

```bash
npm install @capacitor-community/in-app-review
npx cap sync
```

## Usage

Import `InAppReview` at the top of your TypeScript file:

```typescript
import { InAppReview } from '@capacitor-community/in-app-review';
```

Then you can use the `InAppReview.requestReview` method to prompt users to submit app store ratings and reviews:

```typescript
InAppReview.requestReview().then(() => {
  console.log('Review prompt displayed successfully');
}).catch((error) => {
  console.error('An error occurred:', error);
});
```

## Notes

- Ensure that your app follows the design guidelines provided by Android and iOS for in-app review prompts.
- Make sure your test environment is correctly set up to test the in-app review functionality during development.
- Follow the guidelines and recommendations for requesting reviews in each platform's app store.

By following this tutorial, you can seamlessly integrate in-app review prompts into your Capacitor project using the `@capacitor-community/in-app-review` package.
