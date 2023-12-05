---
title: "Using the @web-media/resource-loader-native-backend Package"
description: "This tutorial will guide you on how to use the @web-media/resource-loader-native-backend package to load resources in your web media projects."
created_at: "2022-03-11"
published: true
slug: "infrastructure"
---

# Using the @web-media/resource-loader-native-backend Package

In this tutorial, we will walk you through the process of using the `@web-media/resource-loader-native-backend` package to load resources in your web media projects. The `resource-loader-native-backend` package provides a native backend for the Web Media Foundation resource loader, allowing you to load and manage resources efficiently.

## Prerequisites

Before we begin, please make sure you have the following prerequisites in place:

1. Node.js and npm (Node Package Manager) installed on your system.
2. A basic understanding of JavaScript and web development concepts.

## Step 1: Install the Package

To get started, you need to install the `@web-media/resource-loader-native-backend` package. Open your terminal or command prompt and navigate to your project directory. Run the following command to install the package:

```
npm install @web-media/resource-loader-native-backend
```

This command will download and install the package and its dependencies in your project.

## Step 2: Import the Package

Once the package is installed, you need to import it into your project. In your JavaScript file, add the following import statement:

```javascript
import { ResourceLoaderNativeBackend } from '@web-media/resource-loader-native-backend';
```

This imports the `ResourceLoaderNativeBackend` class from the package.

## Step 3: Create a Resource Loader Instance

Next, you need to create an instance of the `ResourceLoaderNativeBackend` class. This instance will be responsible for loading and managing resources in your project.

```javascript
const resourceLoader = new ResourceLoaderNativeBackend();
```

## Step 4: Load Resources

Now that you have a resource loader instance, you can start loading resources. The `ResourceLoaderNativeBackend` class provides various methods for loading different types of resources, such as images, audio files, and videos.

Here's an example of how to load an image using the `loadImage` method:

```javascript
const imageResource = resourceLoader.loadImage('path/to/image.jpg');
```

This code loads an image resource from the specified path and returns a `ImageResource` object. You can use this object to access and manipulate the loaded image.

## Step 5: Handle Load Events

The `ResourceLoaderNativeBackend` class also provides event handling capabilities. You can listen for load events to track the progress and status of resource loading.

Here's an example of how to listen for the `load` event:

```javascript
imageResource.on('load', () => {
  console.log('Image loaded successfully');
});

imageResource.on('error', (error) => {
  console.error('Error loading image:', error);
});

imageResource.on('progress', (progress) => {
  console.log('Loading progress:', progress);
});
```

In this example, we listen for the `load` event and log a success message when the image is loaded. We also listen for the `error` event to handle any loading errors that may occur. Additionally, we listen for the `progress` event to track the loading progress.

## Step 6: Use the Loaded Resources

Once the resources are loaded, you can use them in your web media project. For example, you can display the loaded image on a web page using the `src` attribute of an `<img>` element.

```html
<img src="path/to/image.jpg" alt="Loaded Image">
```

You can also apply various CSS styles to the loaded image or use JavaScript to manipulate it further.

## Conclusion

Congratulations! You have successfully learned how to use the `@web-media/resource-loader-native-backend` package to load resources in your web media projects. With the resource loader backend, you can efficiently manage and load various types of resources, such as images, audio files, and videos. Feel free to explore the package's documentation for more advanced features and customization options.

If you have any further questions or need assistance, don't hesitate to reach out to the Web Media Foundation community or consult the official documentation. Happy coding!