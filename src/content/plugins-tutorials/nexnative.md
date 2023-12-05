---
title: "Using @nexnovo/nexnative Package"
description: "A tutorial on how to use the @nexnovo/nexnative package for developing mobile apps."
created_at: "2022-01-07"
published: true
slug: "nexnative"
---

# Using @nexnovo/nexnative Package

In this tutorial, we will learn how to use the `@nexnovo/nexnative` package to develop mobile apps. 

## Prerequisites

Before we begin, make sure you have the following prerequisites installed:

- Node.js (version 10 or higher)
- npm (Node Package Manager)

## Step 1: Project Setup

To start using the `@nexnovo/nexnative` package, we need to create a new project and install the necessary dependencies.

```bash
npm init

# Follow the prompts and create a new package.json file

npm install --save @nexnovo/nexnative
```

## Step 2: Importing the Package

Next, we need to import the `@nexnovo/nexnative` package into our project. Open your main JavaScript file (e.g., `index.js` or `app.js`) and add the following line at the beginning:

```javascript
import NexNative from '@nexnovo/nexnative';
```

## Step 3: Initializing NexNative

After importing the package, we need to initialize `NexNative` before using any of its functionality. Add the following code after the import statement:

```javascript
const nexNative = new NexNative();
nexNative.initialize();
```

## Step 4: Using NexNative Features

Once `NexNative` is initialized, we can start using its features. Here are some examples:

### 4.1 Displaying a Toast Message

To display a toast message, use the `showToast` method:

```javascript
nexNative.showToast('Hello, World!');
```

### 4.2 Requesting Device Permissions

To request device permissions, use the `requestPermissions` method:

```javascript
nexNative.requestPermissions('camera').then((granted) => {
  if (granted) {
    console.log('Camera permission granted!');
  } else {
    console.log('Camera permission denied!');
  }
});
```

### 4.3 Checking Network Availability

To check network availability, use the `isNetworkAvailable` method:

```javascript
const isAvailable = nexNative.isNetworkAvailable();
console.log(`Network is ${isAvailable ? 'available' : 'unavailable'}`);
```

## Conclusion

In this tutorial, we learned how to use the `@nexnovo/nexnative` package for developing mobile apps. We covered the installation process, initialization, and some of the package's features. Feel free to explore the package documentation for more advanced usage.

Remember to stay updated with the latest package versions and follow the best practices for mobile app development.

Happy coding!