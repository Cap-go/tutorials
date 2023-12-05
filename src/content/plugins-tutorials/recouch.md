---
title: "Using @recouch/couchbase-lite-capacitor Package"
description: "This tutorial will guide you through the process of using the @recouch/couchbase-lite-capacitor package to integrate Couchbase Lite with your Capacitor app."
created_at: "2021-08-12"
published: true
slug: "recouch"
---

# Using @recouch/couchbase-lite-capacitor Package

In this tutorial, we will learn how to integrate Couchbase Lite with your Capacitor app using the @recouch/couchbase-lite-capacitor package.

## Prerequisites

Before we begin, make sure you have the following prerequisites:

- Capacitor installed in your development environment.
- An existing Capacitor app that you want to integrate Couchbase Lite with.

## Installation

To get started, open your terminal and navigate to your Capacitor app's root directory. Run the following command to install the @recouch/couchbase-lite-capacitor package:

```bash
npm install @recouch/couchbase-lite-capacitor
```

## Integration Steps

### Step 1: Import the Package

In your Capacitor app's main entry file (usually `app.ts` or `app.js`), import the Couchbase Lite package:

```javascript
import '@recouch/couchbase-lite-capacitor';
```

### Step 2: Add the Plugin to Your App

In the same file, inside the `registerWebPlugin` function, add the Couchbase Lite plugin:

```javascript
import { Plugins } from '@capacitor/core';
const { CouchbaseLite } = Plugins;

// ...

Plugins.registerWebPlugin(CouchbaseLite);
```

### Step 3: Initialize Couchbase Lite

In any appropriate part of your app (e.g., the app initialization logic), initialize Couchbase Lite using the `CouchbaseLite.init()` method:

```javascript
CouchbaseLite.init();
```

### Step 4: Use Couchbase Lite APIs

Now that Couchbase Lite is integrated with your Capacitor app, you can start leveraging the provided APIs to perform various database operations, including creating, reading, updating, and deleting documents.

For example, you can create a new document using the `CouchbaseLite.createDocument()` method:

```javascript
const documentId = await CouchbaseLite.createDocument({
  type: 'note',
  title: 'My First Note',
  content: 'This is the content of my first note.',
});
console.log('Created document with ID:', documentId);
```

For a complete list of available APIs and their documentation, refer to the official documentation of the @recouch/couchbase-lite-capacitor package.

## Conclusion

Congratulations! You have successfully integrated @recouch/couchbase-lite-capacitor package with your Capacitor app. You can now leverage the power of Couchbase Lite to build data-driven features in your app.

Remember to refer to the official package documentation for more advanced usage and customization options.

Happy coding!
