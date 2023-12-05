---
title: "A Guide to Using capacitor-pm-storage-realm Package"
description: "Learn how to use the capacitor-pm-storage-realm package to store key/value pairs using Realm as the backend."
created_at: "2021-11-10"
published: true
slug: "capacitor-pm-storage-realm"
---

# A Guide to Using capacitor-pm-storage-realm Package

In this tutorial, we will learn how to use the capacitor-pm-storage-realm package to store simple key/value pairs in an iOS/Android app using Realm as the backend. 

## Prerequisites

Before we begin, make sure you have the following installed:

- Node.js (v10 or later)
- Capacitor

## Installation

To install the capacitor-pm-storage-realm package, run the following command in your project directory:

```bash
npm install capacitor-pm-storage-realm
```

## Usage

1. Import the required classes from the package:

```javascript
import { StorageRealm, StringValueResults } from 'capacitor-pm-storage-realm';
```

2. Create an instance of the `StorageRealm` class:

```javascript
const r = new StorageRealm();
```

3. Initialize the `StorageRealm` instance with a realm name and encryption key:

```javascript
await r.initialize('realmOGoodness', 'r3å¬Â');
```

4. Store a value using the `set` method:

```javascript
await r.set({ name: 'thing', value: 'amabob' });
```

5. Retrieve a value using the `get` method:

```javascript
const val = await r.get({ name: 'thing' });

if (val === undefined
    || val == null
    || (val as StringValueResults).value == null
    || (val as StringValueResults).value.length === 0) {
    console.error("Failed to get value for key 'thing'");
    return;
}

console.log(`Got value: ${(val as StringValueResults).value}`);
```

6. Handle errors when setting or retrieving values:

```javascript
r.set({ name: 'thing', value: 'amabob' })
    .catch(reason => {
        console.error(`Failed to set 'thing': ${JSON.stringify(reason)}`);
    });

r.get({ name: 'thing' })
    .catch(reason => {
        console.error(`Failed to get 'thing': ${JSON.stringify(reason)}`);
    });
```

And that's it! You now know how to use the capacitor-pm-storage-realm package to store and retrieve key/value pairs in your iOS/Android app.

Remember to properly handle errors and edge cases in your code to ensure a robust storage solution.