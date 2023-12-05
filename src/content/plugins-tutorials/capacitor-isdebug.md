---
title: "Using @hmphu/capacitor-isdebug package"
description: "A tutorial on how to use the @hmphu/capacitor-isdebug package to check if the app is running in debug mode"
created_at: "2022-10-19"
published: true
slug: capacitor-isdebug
---

# Using @hmphu/capacitor-isdebug package

The `@hmphu/capacitor-isdebug` package is a useful tool for checking whether your app is running in debug mode. This can be important for implementing different behaviors or logging certain information during development.

## Installation

To add the `@hmphu/capacitor-isdebug` package to your Capacitor project, follow these steps:

1. Open your project's root directory in a terminal.
2. Run the following command to install the package:

```bash
npm install @hmphu/capacitor-isdebug
```

## Usage

Once the package is installed, you can import and use it in your code to check if the app is running in debug mode.

First, import the `isDebug` function from the package:

```javascript
import { isDebug } from '@hmphu/capacitor-isdebug';
```

Then, you can use the `isDebug` function wherever you need to check for debug mode. Here's an example:

```javascript
if (isDebug()) {
  console.log('App is running in debug mode');
  // Perform specific actions or enable additional logging for development
} else {
  console.log('App is running in release mode');
  // Perform regular app behavior for production
}
```

By using this package, you can easily differentiate between debug and release modes in your Capacitor app and adjust your logic accordingly.

Note that the debug mode detection relies on the platform-specific implementation provided by Capacitor. Make sure you have the necessary platform-specific dependencies installed and configured in your project.

That's it! You should now have a basic understanding of how to use the `@hmphu/capacitor-isdebug` package in your Capacitor project to check if the app is running in debug mode. Happy coding!