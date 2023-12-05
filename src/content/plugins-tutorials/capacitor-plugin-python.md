---
title: "How to Use capacitor-plugin-python"
description: "A tutorial on using the capacitor-plugin-python package for integrating Python with your Capacitor project."
created_at: "2022-06-09"
published: true
slug: capacitor-plugin-python
---

# How to Use capacitor-plugin-python

In this tutorial, we will learn how to use the capacitor-plugin-python package to integrate Python with your Capacitor project. 

## Step 1: Install Capacitor

Before we can start using the capacitor-plugin-python package, we need to have Capacitor installed in our project. If you haven't installed Capacitor yet, you can do so by running the following command in your project's root directory:

```cmd
npm install -g @capacitor/core @capacitor/cli
```

## Step 2: Install capacitor-plugin-python

Once Capacitor is installed, we can proceed to install the capacitor-plugin-python package. Run the following command in your project's root directory:

```cmd
npm install capacitor-plugin-python
```

This will install the necessary dependencies for the capacitor-plugin-python package.

## Step 3: Import and Initialize the Plugin

Next, we need to import and initialize the capacitor-plugin-python plugin in our project. Open the file where you want to use the plugin and add the following code at the beginning:

```typescript
import { Plugins } from '@capacitor/core';

const { CapacitorPluginPython } = Plugins;

```

## Step 4: Use the Plugin Methods

Now that we have initialized the capacitor-plugin-python plugin, we can start using its methods. The capacitor-plugin-python plugin provides various methods for executing Python code and interacting with it. Here are a few examples:

### Executing Python Code

To execute Python code, we can use the `execute` method. This method takes a string argument containing the Python code to be executed. Here's an example:

```typescript
const pythonCode = `
print("Hello, Python!")
`;

CapacitorPluginPython.execute({ code: pythonCode })
  .then(result => {
    console.log(result.output);
  })
  .catch(error => {
    console.error(error);
  });
```

This will execute the provided Python code and log the output to the console.

### Passing Arguments to Python Code

We can also pass arguments to the Python code using the `execute` method. Here's an example:

```typescript
const pythonCode = `
name = 'John'
print(f'Hello, {name}!')
`;

CapacitorPluginPython.execute({ code: pythonCode })
  .then(result => {
    console.log(result.output);
  })
  .catch(error => {
    console.error(error);
  });
```

In this example, we define a variable `name` in the Python code and print a personalized message using f-strings.

### Handling Return Values

If the Python code returns a value, we can access it in the plugin's response. Here's an example:

```typescript
const pythonCode = `
def add(a, b):
    return a + b

result = add(2, 3)
`;

CapacitorPluginPython.execute({ code: pythonCode })
  .then(result => {
    console.log(result.output); // Prints None
    console.log(result.returnValue); // Prints 5
  })
  .catch(error => {
    console.error(error);
  });
```

In this example, we define a function `add` in the Python code that returns the sum of two numbers. We can access the return value using `result.returnValue`.

## Step 5: Build and Run the Project

Once we have implemented the necessary code using the capacitor-plugin-python package, we can build and run our Capacitor project. Use the following command to build your project:

```cmd
npx cap build
```

After the build is complete, you can run your project on the desired platform:

```cmd
npx cap run android
```

or

```cmd
npx cap run ios
```

Congratulations! You have successfully integrated Python with your Capacitor project using the capacitor-plugin-python package.

In this tutorial, we have learned how to install the capacitor-plugin-python package, initialize the plugin, use its methods to execute Python code, pass arguments, and handle return values. You can now leverage the power of Python in your Capacitor project.

Happy coding!