---
"title": "Using Capacitor Face Verify Package Tutorial",
"description": "Step-by-step guide on how to use the @erroba/capacitor-faceverify package with Capacitor in your project.",
"created_at": "2022-01-25",
"published": true,
"slug": "capacitor-faceverify"
---


## Using @erroba/capacitor-faceverify Package Tutorial

### Step 1: Installation

First, you need to install the `@erroba/capacitor-faceverify` package in your Capacitor project. You can do this by running the following commands in your terminal:

```bash
npm install @erroba/capacitor-faceverify
npx cap sync
```

### Step 2: API Usage

The `capacitor-faceverify` package provides a method called `showVerify()` that you can use to verify a face. Here's how you can use it in your project:

```typescript
import { Plugins } from '@capacitor/core';

const { FaceVerify } = Plugins;

// Call the showVerify method with the URL of the face to verify
FaceVerify.showVerify({ url: 'https://example.com/face.jpg' })
  .then(() => {
    console.log('Face verification successful');
  })
  .catch((error) => {
    console.error('Face verification failed:', error);
  });
```

Make sure to replace `'https://example.com/face.jpg'` with the actual URL of the face you want to verify.

That's it! You have successfully integrated the `@erroba/capacitor-faceverify` package into your Capacitor project.