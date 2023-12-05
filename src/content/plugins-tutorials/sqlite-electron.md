# Using the @gauravachhani/sqlite Package

In this tutorial, we will learn how to use the @gauravachhani/sqlite package to work with SQLite databases in an Electron application.

## Prerequisites

Before we get started, make sure you have the following:

- Node.js and npm installed on your machine
- An Electron project set up (you can refer to the official Electron documentation for guidance)

## Installation

To begin, let's install the @gauravachhani/sqlite package by running the following command in your project directory:

```
npm install @gauravachhani/sqlite
```

## Usage

1. Import the package in your Electron application:

```javascript
const sqlite3 = require('@gauravachhani/sqlite');
```

2. Connect to the SQLite database:

```javascript
const db = new sqlite3.Database(':memory:'); // Replace ':memory:' with your database file path if you want to use a specific file
```

3. Execute SQL queries:

```javascript
db.serialize(() => {
  db.run('CREATE TABLE employees (id INT, name TEXT)');
  
  // Insert data into the table
  db.run('INSERT INTO employees (id, name) VALUES (1, "John Doe")');
  
  // Retrieve data from the table
  db.all('SELECT * FROM employees', (err, rows) => {
    if (err) {
      console.error(err.message);
    }
    
    // Process the retrieved data
    rows.forEach((row) => {
      console.log(`${row.id} - ${row.name}`);
    });
  });
});

```

4. Close the database connection:

```javascript
db.close((err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Database connection closed.');
});
```

## Conclusion

In this tutorial, we learned how to use the @gauravachhani/sqlite package with Electron to work with SQLite databases. We covered installing the package, establishing a database connection, executing SQL queries, and closing the connection.

Feel free to explore the package's documentation for more advanced usage and features.

---

This tutorial was created on {{created_at}}.

---

Frontmatter:

```yaml
---
title: "Using @gauravachhani/sqlite Package with Electron"
description: "Learn how to use the @gauravachhani/sqlite package to work with SQLite databases in an Electron application."
created_at: "2023-08-25"
published: true
slug: "sqlite-electron"
---
```

Please note that the `created_at` value in the frontmatter represents the date of this answer and can be updated accordingly.