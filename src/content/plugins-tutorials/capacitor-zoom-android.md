---
title: "Using capacitor-zoom-android package"
description: "This tutorial explains how to use the capacitor-zoom-android package to add zoom functionality to your Android app built with Capacitor."
created_at: "2022-03-28"
published: true
slug: "capacitor-zoom-android"
---

# Using capacitor-zoom-android package

In this tutorial, we will learn how to use the capacitor-zoom-android package to add zoom functionality to your Android app built with Capacitor.

## Prerequisites

Before we begin, make sure you have the following:

- Android studio installed on your system.
- Capacitor CLI installed globally on your system.
- An existing Capacitor project set up.

## Step 1: Install the capacitor-zoom-android package

To use the capacitor-zoom-android package, we need to install it as a dependency in our Capacitor project. Open your terminal and navigate to your project's root folder.

```bash
npm install capacitor-zoom-android
```

## Step 2: Link the package with your Android project

After installing the package, we need to link it with our Android project. Run the following command in your project's root folder:

```bash
npx cap sync android
```

This will sync the package with your Android project.

## Step 3: Configure the Zoom functionality

To configure the zoom functionality, we need to make some changes to our Android project files.

1. Open your Android project in Android Studio.
2. Locate the `MainActivity.java` file in your project's directory.
3. Add the following import statement at the top of the file:

```java
import com.example.capacitorzoomandroid.ZoomPlugin;
```

4. Inside the `init` method of `MainActivity.java`, add the following line:

```java
add(ZoomPlugin.class);
```

5. Save the file and close Android Studio.

## Step 4: Use the Zoom functionality in your Capacitor app

Now that we have configured the zoom functionality, we can use it in our Capacitor app. Open your Capacitor project in your code editor.

1. Open the TypeScript file where you want to use the zoom functionality.
2. Import the `Plugins` object from Capacitor and the `ZoomPlugin` from the installed package:

```typescript
import { Plugins } from '@capacitor/core';
import { ZoomPlugin } from 'capacitor-zoom-android';
```

3. Use the `Plugins` object to call the `ZoomPlugin` methods. For example, to zoom in, use the `zoomIn` method:

```typescript
const { ZoomPlugin } = Plugins;

ZoomPlugin.zoomIn().then(() => {
  console.log('Zoomed in');
}).catch((error) => {
  console.error('Error zooming in', error);
});
```

4. Save the file and run your Capacitor app.

Congratulations! You have successfully integrated the capacitor-zoom-android package and added zoom functionality to your Android app.

## Conclusion

In this tutorial, we learned how to use the capacitor-zoom-android package to add zoom functionality to your Android app built with Capacitor. We went through the installation process, linking the package with our Android project, configuring the zoom functionality, and using the zoom functionality in our Capacitor app.

Now you can enhance your Android app with zoom capabilities and provide a better user experience.

Happy coding!