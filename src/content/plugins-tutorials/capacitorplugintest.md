---
title: "Using @tdk0718/capacitor-plugin-test Package"
description: "This tutorial will guide you through the process of using the @tdk0718/capacitor-plugin-test package in your Capacitor project."
created_at: "2022-04-15"
published: true
slug: "capacitorplugintest"
---

# Using @tdk0718/capacitor-plugin-test Package

In this tutorial, we will learn how to use the `@tdk0718/capacitor-plugin-test` package in your Capacitor project. The `@tdk0718/capacitor-plugin-test` package provides functionality for testing Capacitor plugins.

## Prerequisites

Before we begin, make sure you have the following installed:

- Capacitor: You can install Capacitor globally by running the following command:

  ```bash
  npm install -g @capacitor/core @capacitor/cli
  ```

- Node.js: Make sure you have Node.js installed on your machine.

## Installation

To use the `@tdk0718/capacitor-plugin-test` package in your Capacitor project, follow these steps:

1. Create a new Capacitor project if you haven't already:

   ```bash
   npx @capacitor/cli create
   ```

2. Change directory to your Capacitor project:

   ```bash
   cd your-capacitor-project
   ```

3. Install the `@tdk0718/capacitor-plugin-test` package:

   ```bash
   npm install @tdk0718/capacitor-plugin-test
   ```

4. Sync the Capacitor project:

   ```bash
   npx cap sync
   ```

## Usage

Now that the `@tdk0718/capacitor-plugin-test` package is installed, let's see how to use it in your project.

1. Import the `TestPlugin` class from the `@tdk0718/capacitor-plugin-test` package:

   ```javascript
   import { TestPlugin } from '@tdk0718/capacitor-plugin-test';
   ```

2. Instantiate the `TestPlugin` class:

   ```javascript
   const testPlugin = new TestPlugin();
   ```

3. Use the methods provided by the `TestPlugin` class. Here is an example of calling the `getTestData` method:

   ```javascript
   testPlugin.getTestData().then(data => {
     console.log(data);
   }).catch(error => {
     console.error(error);
   });
   ```

That's it! You have successfully used the `@tdk0718/capacitor-plugin-test` package in your Capacitor project.

## Conclusion

In this tutorial, we have learned how to install and use the `@tdk0718/capacitor-plugin-test` package in a Capacitor project. Utilizing this package allows you to test your Capacitor plugins with ease. Now you can confidently develop and test your Capacitor plugins using the `@tdk0718/capacitor-plugin-test` package.

I hope you found this tutorial helpful. Happy coding!
