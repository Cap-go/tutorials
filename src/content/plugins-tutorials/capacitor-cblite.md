---
title: "Using capacitor-cblite package"
description: "A tutorial on how to use the capacitor-cblite package to interact with Couchbase Lite in a Capacitor app"
created_at: "2022-03-20"
published: true
slug: capacitor-cblite
---

# Using capacitor-cblite package

In this tutorial, we will learn how to use the capacitor-cblite package to interact with Couchbase Lite in a Capacitor app. The capacitor-cblite package provides a simple and easy-to-use interface for integrating Couchbase Lite into your Capacitor projects. 

## Prerequisites

Before we begin, make sure you have the following prerequisites:

1. Capacitor CLI installed globally: `npm install -g capacitor`
2. A Capacitor project set up: `npx capacitor init`
3. Couchbase Lite installed: `npm install capacitor-cblite`
4. Basic understanding of Ionic framework and Capacitor

## Step 1: Install capacitor-cblite package

To start using capacitor-cblite, first, we need to install the package. Open your terminal or command prompt and navigate to your Capacitor project directory. Run the following command:

```bash
npm install capacitor-cblite
```

This command will download and install the capacitor-cblite package in your project.

## Step 2: Import capacitor-cblite package

After installing the package, we need to import it into our project. Open the file where you want to use capacitor-cblite and add the following line at the top of the file:

```typescript
import 'capacitor-cblite';
```

This imports the capacitor-cblite package and makes its functionality available in our project.

## Step 3: Initialize Couchbase Lite

Next, we need to initialize the Couchbase Lite database in our Capacitor app. Open the `app.component.ts` file in your Capacitor project and add the following code:

```typescript
import { Plugins } from '@capacitor/core';

const { CBLite } = Plugins;

async function initCBLite() {
  await CBLite.init();
}

initCBLite();
```

This code initializes the Couchbase Lite database using the `CBLite.init()` function provided by the capacitor-cblite package. Make sure to call this function before using any other Couchbase Lite functionalities in your app.

## Step 4: Interacting with the Couchbase Lite database

Now that we have initialized Couchbase Lite, we can start interacting with the database. The capacitor-cblite package provides various functions for performing CRUD operations on the database.

Here is an example of how to create a new document in the database:

```typescript
import { Plugins } from '@capacitor/core';

const { CBLite } = Plugins;

async function createDocument() {
  const document = {
    title: 'My First Document',
    content: 'This is the content of my first document.'
  };

  const response = await CBLite.createDocument('my-database', document);

  if (response.success) {
    console.log('Document created successfully');
  } else {
    console.error('Failed to create document');
  }
}

createDocument();
```

In this example, we define a JavaScript object representing the document we want to create. We then call the `CBLite.createDocument()` function with the name of the database and the document object. The function returns a response indicating whether the document was created successfully or not.

You can explore other functions provided by the capacitor-cblite package, such as `CBLite.updateDocument()`, `CBLite.deleteDocument()`, and `CBLite.query()` to perform various operations on the Couchbase Lite database.

## Conclusion

In this tutorial, we learned how to use the capacitor-cblite package to interact with Couchbase Lite in a Capacitor app. We covered the installation process, initializing the database, and performing basic CRUD operations on the database. With the help of capacitor-cblite, you can easily integrate Couchbase Lite functionality into your Capacitor projects.

Remember to check out the capacitor-cblite documentation for more advanced usage and additional features. Happy coding!

**Note: This tutorial assumes that you have a basic understanding of Capacitor and Ionic framework. If you are new to Capacitor or Ionic, I recommend going through their official documentation to get started.