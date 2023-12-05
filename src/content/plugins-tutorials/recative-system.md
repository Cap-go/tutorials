---
title: "Using @recative/resource-loader-native-backend Package"
description: "This tutorial will guide you through the process of using the @recative/resource-loader-native-backend package in the Recative System."
created_at: "2021-09-20"
published: true
slug: "recative-system"
---

# Using @recative/resource-loader-native-backend Package

The @recative/resource-loader-native-backend package is a crucial component of the Recative System. It enables the loading of resources from a native backend. This tutorial will walk you through the steps to use this package effectively.

## Installation

To get started, ensure that you have the Recative System set up in your project. If you haven't done so, follow the installation instructions in the [Recative GitHub repository](https://github.com/recative/recative-system).

Next, install the @recative/resource-loader-native-backend package using a package manager of your choice. In this example, we'll use npm:

```bash
npm install @recative/resource-loader-native-backend
```

or with yarn:

```bash
yarn add @recative/resource-loader-native-backend
```

## Usage

Once the package is installed, you can import and use it in your Recative project. Here's an example of how to use the @recative/resource-loader-native-backend package:

```javascript
import { NativeResourceLoader } from '@recative/resource-loader-native-backend';

// Create an instance of the NativeResourceLoader
const resourceLoader = new NativeResourceLoader();

// Load a resource from the native backend
const resource = await resourceLoader.load('/path/to/resource');

// Use the loaded resource in your Recative project
console.log(resource);
```

The NativeResourceLoader class provides methods for loading resources from the native backend. The `load` method returns a Promise that resolves to the loaded resource.

## Conclusion

In this tutorial, you learned how to use the @recative/resource-loader-native-backend package in the Recative System. By following the installation steps and using the provided methods, you can easily load resources from a native backend in your Recative projects.

For more information and advanced usage, refer to the package documentation and the Recative System documentation.

Happy coding with Recative!

