---
title: "Using the capacitor-sqlite-android Package"
description: "A tutorial on how to use the capacitor-sqlite-android package in your Capacitor projects."
created_at: "2022-12-10"
published: true
slug: "capacitor-sqlite"
---

# Using the capacitor-sqlite-android Package

In this tutorial, we will learn how to integrate the capacitor-sqlite-android package into your Capacitor projects. The capacitor-sqlite-android package allows you to work with SQLite databases in your Android applications using Capacitor.

## Prerequisites

Before we begin, make sure you have the following requirements installed on your machine:

- Capacitor CLI
- Android Studio
- Node.js

## Step 1: Create a new Capacitor Project

First, let's create a new Capacitor project. Open your terminal and run the following commands:

```bash
# Create a new Capacitor project
npx @capacitor/cli create

# Change to the project directory
cd <project-directory>
```

## Step 2: Add the capacitor-sqlite-android Package

Next, we need to add the capacitor-sqlite-android package to our Capacitor project. Run the following command in your project directory:

```bash
npm install capacitor-sqlite-android
```

## Step 3: Configure the Plugin

To configure the capacitor-sqlite-android plugin, open the `capacitor.config.json` file in the root of your project and add the following code:

```json
{
  "plugins": {
    "CapacitorSQLite": {
      "androidIsEncryption": true,
      "androidBiometric": {
        "biometricAuth": false,
        "biometricTitle": "Biometric login for capacitor sqlite",
        "biometricSubTitle": "Log in using your biometric"
      }
    }
  }
}
```

Make sure to replace the values in the configuration according to your requirements.

## Step 4: Use the Plugin in Your Application

Now, let's use the capacitor-sqlite-android plugin in your application. You can use the SQLite API methods to perform database operations. Here's an example:

```typescript
import { Plugins } from '@capacitor/core';

const { CapacitorSQLite } = Plugins;

const exampleFunction = async () => {
  // Open a database
  const db = await CapacitorSQLite.open({ database: 'mydatabase.db' });

  // Execute a SQL statement
  await db.execute({ statement: 'CREATE TABLE IF NOT EXISTS users (id INT, name TEXT)' });

  // Insert data into the table
  await db.execute({ statement: 'INSERT INTO users (id, name) VALUES (?, ?)', values: [1, 'John Doe'] });

  // Query the table
  const result = await db.query({ statement: 'SELECT * FROM users' });

  console.log(result.values);

  // Close the database
  await db.close();
};
```

You can use the various methods provided by the CapacitorSQLite plugin to perform CRUD operations on your SQLite database.

## Conclusion

In this tutorial, we have learned how to integrate the capacitor-sqlite-android package into your Capacitor projects. We have seen how to install the package, configure the plugin, and use it to work with SQLite databases in your Android application.

Now you can start using the capacitor-sqlite-android package in your own projects and leverage the power of SQLite databases in Capacitor.

If you have any questions or come across any issues, please refer to the [official documentation](https://github.com/capacitor-community/sqlite) or seek help from the Capacitor community.

Happy coding!