---
"title": "Using @mindly/capacitor-android-edge-to-edge-support Package",
"description": "Learn how to implement edge-to-edge support in your Capacitor Android project using @mindly/capacitor-android-edge-to-edge-support package.",
"created_at": "2022-01-15",
"published": true,
"slug": "capacitor-android-edge-to-edge-support"
---

# Using @mindly/capacitor-android-edge-to-edge-support Package

In this tutorial, we will walk through the process of implementing edge-to-edge support in your Capacitor Android project using the `@mindly/capacitor-android-edge-to-edge-support` package.

## Prerequisites
Before getting started, make sure you have the following:
- Capacitor project set up for Android
- Basic knowledge of Capacitor and Android development

## Installation
To begin, install the `@mindly/capacitor-android-edge-to-edge-support` package in your Capacitor project:

```bash
npm install @mindly/capacitor-android-edge-to-edge-support
```

## Configuration
After installing the package, follow these steps to configure edge-to-edge support:

1. Open your Android project in Android Studio or your preferred code editor.
2. Locate the `MainActivity.java` file in your project.
3. Import the necessary classes from the package:

```java
import io.capacitor.android.edgetoedge.EdgeToEdge;
```

4. Add the following line to the `init` method of `MainActivity.java` to initialize the edge-to-edge support:

```java
this.getSurface().addPlugin(EdgeToEdge.class);
```

## Implementation
Now that you have configured the package in your Android project, you can implement edge-to-edge support in your app's layout XML files. Here's an example of how to use it in a layout file:

```xml
<androidx.constraintlayout.widget.ConstraintLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    xmlns:tools="http://schemas.android.com/tools"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:paddingStart="0dp"
    android:paddingEnd="0dp"
    tools:context=".MainActivity">

    <!-- Your layout content here -->

</androidx.constraintlayout.widget.ConstraintLayout>
```

Ensure to set padding to `0dp` for both start and end to enable edge-to-edge support in your layout.

## Testing
Build and run your Capacitor Android project to see the edge-to-edge support in action. You should observe that your app's content extends to the edges of the screen seamlessly.

## Conclusion
Congratulations! You have successfully implemented edge-to-edge support in your Capacitor Android project using `@mindly/capacitor-android-edge-to-edge-support` package. This helps enhance the user experience by utilizing the entire screen real estate available on modern Android devices.