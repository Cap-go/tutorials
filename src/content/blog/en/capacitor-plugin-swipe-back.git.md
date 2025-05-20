---
title: Using Capacitor Swipe Back Plugin
description: >-
  A tutorial on how to use the capacitor-swipe-back-plugin in your Capacitor
  project.
created_at: '2022-03-07'
published: true
slug: capacitor-plugin-swipe-back.git
locale: en
---

## Using Capacitor Swipe Back Plugin

In this tutorial, we will guide you on how to integrate and utilize the `capacitor-swipe-back-plugin` in your Capacitor project. The `capacitor-swipe-back-plugin` provides swipe back functionality to help users navigate through your app easily.

### Step 1: Installation

Start by installing the `capacitor-swipe-back-plugin`:

```bash
npm install capacitor-swipe-back-plugin
```

### Step 2: Configuration

After installation, you need to configure the plugin in your project. First, import the plugin at the top of your file:

```typescript
import 'capacitor-swipe-back-plugin';
```

### Step 3: Integrate Swipe Back

To enable swipe back functionality in your project, you can use the following code snippet:

```typescript
const swipeBackPlugin = Capacitor.Plugins.SwipeBackPlugin;

swipeBackPlugin.enableSwipeBack()
  .then(() => {
    console.log('Swipe back enabled successfully');
  })
  .catch((error) => {
    console.error('Error enabling swipe back: ', error);
  });
```

By following these steps, you can easily integrate the `capacitor-swipe-back-plugin` into your Capacitor project and enhance the user experience of your app.
