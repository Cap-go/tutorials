---
"title": "Using Capacitor Android Edge to Edge Support Package Tutorial",
"description": "Learn how to implement edge-to-edge support in your Capacitor Android application using the @mindly/capacitor-android-edge-to-edge-support package.",
"created_at": "2022-01-18",
"published": true,
"slug": "capacitor-android-edge-to-edge-support.git"
---

# Using Capacitor Android Edge to Edge Support Package

In this tutorial, we will guide you through the process of enabling edge-to-edge support in your Capacitor Android application using the `@mindly/capacitor-android-edge-to-edge-support` package.

## Prerequisites

Before we begin, make sure you have the following:

- Node.js and npm installed on your machine
- Capacitor configured in your project
- Basic knowledge of Capacitor and Android development

Let's get started with the implementation steps.

### Step 1: Install the Package

First, install the `@mindly/capacitor-android-edge-to-edge-support` package in your Capacitor project using npm:

```bash
npm install @mindly/capacitor-android-edge-to-edge-support
```

### Step 2: Configure the Android Project

After installing the package, open the `android/app/build.gradle` file in your Android project and add the following lines:

```gradle
apply plugin: 'com.android.application'

android {
    // Add the following lines inside the android block

    // Set the window layout to extend to edges
    defaultConfig {
        applicationId rootProject.ext.applicationId

        // Add the following line
        buildFeatures {
          viewBinding = true
        }
    }
}
```

### Step 3: Implement Edge-to-Edge Support

Now, let's implement the edge-to-edge support in your Android application. In your main activity file (`MainActivity.java`), add the following snippet:

```java
// Import the necessary packages
import io.mindly.capacitor.android.edge.to.edge.support.EdgeToEdgePlugin;

// Inside the initialize callback, add the following line:
add(EdgeToEdgePlugin.class);
```

### Step 4: Update the Layout XML

To ensure that your layout extends to the screen edges, update your layout XML file (e.g., `activity_main.xml`) by setting appropriate attributes like `fitsSystemWindows` and `edgeToEdge` to `true`.

```xml
<!-- Inside your root layout -->
<LinearLayout
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:fitsSystemWindows="true"
    android:edgeToEdge="true">
    
    <!-- Your content here -->

</LinearLayout>
```

### Step 5: Test Your Application

You can now build and run your Capacitor Android application to see the edge-to-edge support in action. Ensure that your layout extends seamlessly to the screen edges on devices that support this feature.

That's it! You have successfully implemented edge-to-edge support in your Capacitor Android application using the `@mindly/capacitor-android-edge-to-edge-support` package.

I hope this tutorial was helpful. Happy coding!

Feel free to check out more tutorials and guides on Capacitor and Android development on our platform.

---
