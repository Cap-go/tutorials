---
title: "Using the hello-cap Package"
description: "A tutorial on how to use the hello-cap package in your Capacitor projects"
created_at: "2022-09-22"
published: true
slug: "capacitorplugin"
---

# Using the hello-cap Package

In this tutorial, we will learn how to use the hello-cap package in your Capacitor projects. The hello-cap package is a simple plugin that allows you to display a "Hello, Capacitor!" message in your application.

## Step 1: Install the hello-cap Package

To start using the hello-cap package, you need to install it in your Capacitor project. Open your terminal and run the following command:

```bash
npm install hello-cap
```

## Step 2: Import the hello-cap Module

After installing the hello-cap package, you need to import the hello-cap module in your project. In your TypeScript file, add the following import statement:

```typescript
import { HelloCap } from 'hello-cap';
```

## Step 3: Use the hello-cap Plugin

Once you have imported the hello-cap module, you can use the hello-cap plugin in your code. Here is an example of how to display the "Hello, Capacitor!" message:

```typescript
const helloCap = new HelloCap();
helloCap.sayHello();

// You can also pass a custom message to the sayHello() method
helloCap.sayHello('Hello World!');
```

That's it! You have successfully used the hello-cap package in your Capacitor project.

## Conclusion

In this tutorial, we learned how to use the hello-cap package in Capacitor. We installed the package, imported the module, and used the hello-cap plugin to display a message. Now you can enhance your Capacitor applications with the hello-cap package.

Happy coding!