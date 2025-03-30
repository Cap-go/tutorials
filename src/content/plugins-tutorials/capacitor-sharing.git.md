```markdown
---
"title": "Using @palauaandsons/capacitor-sharing Package"
"description": "A tutorial on how to use the @palauaandsons/capacitor-sharing package in your Capacitor app."
"created_at": "2021-10-14"
"published": true
"slug": "capacitor-sharing.git"
---

# Using @palauaandsons/capacitor-sharing Package Tutorial

In this tutorial, we will learn how to integrate the @palauaandsons/capacitor-sharing package into our Capacitor app.

## Step 1: Installation

First, install the @palauaandsons/capacitor-sharing package by running the following command:

```bash
npm install @palauaandsons/capacitor-sharing
```

## Step 2: Importing the Package

Next, import the package in your project:

```typescript
import 'capacitor-sharing';
```

## Step 3: Using the Sharing API

You can now use the Sharing API provided by the package to enable sharing functionality in your app. Here's an example of how you can use it:

```typescript
import { Plugins } from '@capacitor/core';

const { Share } = Plugins;

const share = async () => {
  await Share.share({
    title: 'Check out this awesome app!',
    text: 'I found this amazing app that you should try out.',
    url: 'https://www.example.com',
  });
};
```

## Conclusion

Congratulations! You have successfully learned how to use the @palauaandsons/capacitor-sharing package in your Capacitor app. Now you can implement sharing functionality with ease.
```
```