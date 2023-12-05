---
title: "Using capacitor-data-storage-sqlite"
description: "A tutorial on how to use the capacitor-data-storage-sqlite package in your Capacitor app."
created_at: "2022-11-12"
published: true
slug: capacitor-data-storage-sqlite
---

# Using capacitor-data-storage-sqlite

In this tutorial, we will explore how to use the capacitor-data-storage-sqlite package to enable SQLite database storage in your Capacitor app. SQLite is a popular and powerful database engine that allows you to store and query structured data in a reliable and efficient manner.

## Prerequisites

Before getting started, make sure you have the following:

- Capacitor CLI installed globally: `npm install -g @capacitor/cli`
- Capacitor initialized in your project: `npx cap init [appName] [appId]`
- Capacitor iOS and Android projects created: `npx cap add ios` and `npx cap add android`

If you haven't done so yet, install the capacitor-data-storage-sqlite package by running the following command in your project directory:

```bash
npm install capacitor-data-storage-sqlite
```

## Configuring the Capacitor Plugin

To use the capacitor-data-storage-sqlite plugin, you need to configure it in the `capacitor.config.json` file. Open the file and locate the `plugins` section. Add the following configuration for the `capacitor-data-storage-sqlite` plugin:

```json
"plugins": {
  "capacitor-data-storage-sqlite": {
    "appName": "YourApp",
    "databaseName": "YourDatabase",
    "tableNames": ["Table1", "Table2"],
    "androidDatabaseLocation": "default",
    "androidEncryption": false
  }
}
```

Replace `YourApp` with the name of your app, `YourDatabase` with the name of your SQLite database, and `Table1` and `Table2` with the names of the tables you want to create in the database.

## Using the SQLite Plugin

Once the capacitor-data-storage-sqlite plugin is configured, you can start using it to perform SQLite database operations in your Capacitor app.

First, import the plugin in your code:

```typescript
import { Plugins } from '@capacitor/core';

const { CapacitorDataStorageSqlite } = Plugins;
```

### Creating a Database

To create a new database or open an existing one, use the `openStore` method:

```typescript
const store = await CapacitorDataStorageSqlite.openStore();
```

### Executing SQL Statements

You can execute SQL statements using the `execute` method. This method takes an SQL statement as a string and returns a result object.

```typescript
const createTableSql = 'CREATE TABLE IF NOT EXISTS myTable (id INTEGER PRIMARY KEY, name TEXT)';
const createTableResult = await store.execute({statements: [createTableSql]});
```

### Querying Data

To retrieve data from the database, use the `query` method. This method takes an SQL statement and optional parameters and returns a result object containing the rows returned by the query.

```typescript
const selectAllSql = 'SELECT * FROM myTable';
const selectAllResult = await store.query({statement: selectAllSql});
const rows = selectAllResult.values;
```

### Inserting Data

To insert data into a table, use the `execute` method with an INSERT statement.

```typescript
const insertSql = 'INSERT INTO myTable (name) VALUES (?)';
const insertResult = await store.execute({statements: [insertSql], values: ['John Doe']});
```

### Updating Data

To update existing data, use the `execute` method with an UPDATE statement.

```typescript
const updateSql = 'UPDATE myTable SET name = ? WHERE id = ?';
const updateResult = await store.execute({statements: [updateSql], values: ['Jane Doe', 1]});
```

### Deleting Data

To delete data from a table, use the `execute` method with a DELETE statement.

```typescript
const deleteSql = 'DELETE FROM myTable WHERE id = ?';
const deleteResult = await store.execute({statements: [deleteSql], values: [1]});
```

### Closing the Database

Once you are done with the database, close it using the `closeStore` method.

```typescript
await CapacitorDataStorageSqlite.closeStore({database: 'YourDatabase'});
```

## Conclusion

In this tutorial, we learned how to configure and use the capacitor-data-storage