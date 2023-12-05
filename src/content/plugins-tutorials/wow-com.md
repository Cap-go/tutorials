---
title: "Using the wow-com package"
description: "A tutorial on how to use the wow-com package for creating plugins"
created_at: "2022-01-27"
published: true
slug: wow-com
---

## Introduction
In this tutorial, we will explore the features and functionality of the wow-com package for creating plugins.

## Installing the Package
To begin, make sure you have Node.js installed on your machine. You can install the wow-com package by running the following command:

```bash
npm install wow-com
```

## Setting up a Project
Once the package is installed, create a new directory for your project and navigate into it:

```bash
mkdir my-plugin
cd my-plugin
```

Inside the `my-plugin` directory, create a new file called `index.js`. This will be the entry point for our plugin.

## Creating a Plugin
In the `index.js` file, import the necessary modules from the wow-com package:

```javascript
const { Plugin } = require('wow-com');
```

Next, create a new instance of the Plugin class:

```javascript
const myPlugin = new Plugin();
```

## Adding Functionality
With the plugin instance created, we can now start adding functionality to our plugin. For example, let's create a command that outputs a simple message when invoked:

```javascript
myPlugin.command('hello', (args, context) => {
  context.send('Hello World!');
});
```

## Running the Plugin
To run the plugin, add the following code at the end of the `index.js` file:

```javascript
myPlugin.start();
```

Save the file and open your terminal. Navigate to the `my-plugin` directory and run the following command:

```bash
node index.js
```

## Conclusion
In this tutorial, we learned how to use the wow-com package to create plugins for your Node.js applications. You can now explore the various features of the package and create your own custom plugins.

