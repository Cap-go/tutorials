---
title: "Using @capacitor-community/sqlite Package"
description: "A tutorial on how to use the @capacitor-community/sqlite package for managing SQLite databases in Capacitor apps."
created_at: "2022-11-01"
published: true
slug: "sqlite"
---

# Using @capacitor-community/sqlite Package

In this tutorial, we will learn how to use the `@capacitor-community/sqlite` package to manage SQLite databases in Capacitor apps. SQLite is a popular database engine that allows you to store and manipulate data in a structured manner. This package provides a convenient way to interact with SQLite databases in your Capacitor projects.

## Prerequisites

Before we begin, make sure you have the following installed:

- Node.js and NPM (Node Package Manager)
- Capacitor CLI

You can install Capacitor by running the following command:

```bash
npm install -g @capacitor/cli
```

## Step 1: Create a new Capacitor project

First, let's create a new Capacitor project by running the following command:

```bash
npx @capacitor/cli create
```

Follow the prompts and provide the necessary details to create your project. Once the project is created, navigate to the project directory.

## Step 2: Install the @capacitor-community/sqlite package

To install the `@capacitor-community/sqlite` package, run the following command in your project directory:

```bash
npm install @capacitor-community/sqlite
```

## Step 3: Initialize the SQLite plugin

Before we can use the SQLite plugin, we need to initialize it in our project. Open the `capacitor.config.json` file and add the following configuration:

```json
{
  "plugins": {
    "CapacitorSQLite": {}
  }
}
```

## Step 4: Import and initialize the SQLite plugin in your code

Next, you need to import and initialize the SQLite plugin in your code. Open the main file of your Capacitor app (e.g., `src/App.js` for React, `src/main.ts` for Angular) and add the following code:

```javascript
import { Plugins } from '@capacitor/core';

const { CapacitorSQLite } = Plugins;

async function initializeSQLite() {
  const sqlitePlugin = await CapacitorSQLite.init();
  // You can now use the SQLite plugin methods
}

initializeSQLite();
```

This code imports the `CapacitorSQLite` plugin from the `@capacitor/core` package and initializes it using the `init` method. Once the plugin is initialized, you can start using its methods to interact with SQLite databases.

## Step 5: Working with SQLite databases

Now that the SQLite plugin is initialized, let's see how we can perform common database operations using the plugin.

### Creating a database

To create a new SQLite database, you can use the `createDatabase` method. This method takes a `databaseName` parameter, which specifies the name of the database. Here's an example:

```javascript
async function createDatabase() {
  const databaseName = 'mydatabase.db';
  const result = await CapacitorSQLite.createDatabase({ databaseName });
  console.log(result);
}

createDatabase();
```

This code creates a new SQLite database with the name `mydatabase.db`. The `createDatabase` method returns a result object that contains information about the operation.

### Executing SQL statements

To execute SQL statements in the database, you can use the `execute` method. This method takes a `statements` parameter, which is an array of SQL statements to be executed. Here's an example:

```javascript
async function executeStatements() {
  const statements = [
    'CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL)',
    'INSERT INTO users (name) VALUES ("John Doe")',
    'INSERT INTO users (name) VALUES ("Jane Doe")',
    'SELECT * FROM users'
  ];

  const result = await CapacitorSQLite.execute({ statements });
  console.log(result);
}

executeStatements();
```

This code executes a series of SQL statements, including creating a table, inserting data, and selecting data from the table. The `execute` method returns a result object that contains the results of the SQL statements.

### Closing the database

When you're done working with the database, it's important to close it to release system resources. You can use the `close` method to close the database. Here's an example:

```javascript
async function closeDatabase() {
  const result