---
title: "Using @proteansoftware/capacitor-firestore Package"
description: "A tutorial on how to use the @proteansoftware/capacitor-firestore package to interact with Firestore in a Capacitor app."
created_at: "2023-07-12"
published: true
slug: "capacitor-firestore"
---

# Using @proteansoftware/capacitor-firestore Package

In this tutorial, we will explore how to use the `@proteansoftware/capacitor-firestore` package to interact with Firestore in a Capacitor app. Firestore is a NoSQL cloud database provided by Google, and Capacitor is a platform for building native apps using web technologies. With the `@proteansoftware/capacitor-firestore` package, you can easily integrate Firestore into your Capacitor app and perform various database operations.

## Prerequisites

Before we start, make sure you have a Capacitor project set up and Firestore initialized in your Firebase project. If you haven't done so already, follow the official Capacitor documentation to set up a project and the Firestore documentation to initialize Firestore in your Firebase project.

## Installation

To get started, install the `@proteansoftware/capacitor-firestore` package by running the following command in your Capacitor project:

```bash
npm install @proteansoftware/capacitor-firestore
```

## Configuration

Once the package is installed, you need to configure it in your Capacitor project. Open the `capacitor.config.json` file and add the following configuration under the `plugins` section:

```json
{
  "plugins": {
    "Firestore": {
      "webConfig": {
        "apiKey": "YOUR_FIREBASE_API_KEY",
        "authDomain": "YOUR_FIREBASE_AUTH_DOMAIN",
        "projectId": "YOUR_FIREBASE_PROJECT_ID",
        "storageBucket": "YOUR_FIREBASE_STORAGE_BUCKET",
        "messagingSenderId": "YOUR_FIREBASE_MESSAGING_SENDER_ID",
        "appId": "YOUR_FIREBASE_APP_ID"
      }
    }
  }
}
```

Make sure to replace the placeholder values (`YOUR_FIREBASE_API_KEY`, `YOUR_FIREBASE_AUTH_DOMAIN`, etc.) with your actual Firebase configuration.

## Firestore API

The `@proteansoftware/capacitor-firestore` package provides a simple and intuitive API to interact with Firestore in a Capacitor app. Let's explore some of the key methods:

### `initialize()`

Before you can start using Firestore, you need to initialize it in your app. Call the `initialize()` method to initialize Firestore:

```typescript
import { Plugins } from '@capacitor/core';

const { Firestore } = Plugins;

Firestore.initialize();
```

### `collection()`

The `collection()` method allows you to reference a Firestore collection. Use it to create a reference to a collection:

```typescript
const usersCollection = Firestore.collection('users');
```

### `addDocument()`

To add a new document to a collection, use the `addDocument()` method:

```typescript
const newUser = {
  name: 'John Doe',
  email: 'john.doe@example.com'
};

const documentReference = await usersCollection.addDocument(newUser);
console.log('New document added:', documentReference.id);
```

### `getDocuments()`

To fetch all documents from a collection, use the `getDocuments()` method:

```typescript
const snapshot = await usersCollection.getDocuments();

snapshot.documents.forEach((document) => {
  console.log('Document data:', document.data);
});
```

### `updateDocument()`

To update an existing document, use the `updateDocument()` method:

```typescript
const documentId = 'abcdef123456';
const updatedData = {
  email: 'john.doe.updated@example.com'
};

await usersCollection.updateDocument(documentId, updatedData);
console.log('Document updated:', documentId);
```

### `deleteDocument()`

To delete a document, use the `deleteDocument()` method:

```typescript
const documentId = 'abcdef123456';

await usersCollection.deleteDocument(documentId);
console.log('Document deleted:', documentId);
```

## Conclusion

Congratulations! You have learned how to use the `@proteansoftware/capacitor-firestore` package to interact with Firestore in a Capacitor app. You can now perform CRUD (create, read, update, delete) operations on Firestore collections using the provided API methods.

Feel free to explore the official documentation of `@proteansoftware/capacitor-firestore` for more advanced usage and additional methods.