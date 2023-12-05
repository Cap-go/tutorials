---
title: "Using @falconeta/capacitor-android-full-view Package"
description: "A tutorial on how to use the @falconeta/capacitor-android-full-view package in your Capacitor Android project"
created_at: "2022-01-31"
published: true
slug: "capacitor-android-full-view"
---

# Using @falconeta/capacitor-android-full-view Package

In this tutorial, we will learn how to use the @falconeta/capacitor-android-full-view package in your Capacitor Android project. This package allows you to display a full-screen view in your Android application using Capacitor.

## Installation

To get started, make sure you have Capacitor installed in your project. If not, you can install it using the following command:

```bash
npm install -g @capacitor/cli
```

Once Capacitor is installed, you can add the @falconeta/capacitor-android-full-view package to your project by running the following command:

```bash
npm install @falconeta/capacitor-android-full-view
```

## Configuration

After installing the package, you need to add the Android platform to your Capacitor project. Run the following command to add the Android platform:

```bash
npx cap add android
```

Next, sync the Android project with your Capacitor project by running the following command:

```bash
npx cap sync android
```

## Usage

To use the @falconeta/capacitor-android-full-view package, you need to import it and initialize it in your Android project's main activity file.

1. Open your Android project in Android Studio.

2. Open the `MainActivity.java` file located in the `android/app/src/main/java/your/package/name` directory.

3. Import the `FullViewPlugin` class from the `@falconeta/capacitor-android-full-view` package:

```java
import com.falconeta.capacitor.fullview.FullViewPlugin;
```

4. Inside the `init` method of the `MainActivity` class, add the `FullViewPlugin` class to the plugins list:

```java
@Override
public void init(Bundle savedInstanceState) {
    // ...

    // Add FullViewPlugin to the plugins list
    this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {{
        // ...
        add(FullViewPlugin.class);
    }});
}
```

5. Save the changes and rebuild your Android project.

## Displaying a Full-Screen View

To display a full-screen view in your Android application, you can use the `show` method provided by the @falconeta/capacitor-android-full-view package. This method takes a URL as a parameter and opens a full-screen view with the content of the URL.

Here is an example of how you can use the `show` method in your JavaScript code:

```javascript
import { Plugins } from '@capacitor/core';

const { FullView } = Plugins;

const openFullScreenView = async () => {
  const url = 'https://example.com/full-screen-view';

  await FullView.show({ url });
};
```

Make sure to replace `'https://example.com/full-screen-view'` with the actual URL of the full-screen view you want to display.

## Conclusion

In this tutorial, we learned how to use the @falconeta/capacitor-android-full-view package in a Capacitor Android project. We went through the installation process, configuration steps, and how to display a full-screen view using the package. You can now enhance your Android application by adding full-screen views to provide a better user experience.

Happy coding!