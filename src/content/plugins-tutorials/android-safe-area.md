---
title: "Using android-safe-area Package"
description: "A tutorial on how to use the android-safe-area package to handle safe area insets in your Android project."
created_at: "2021-08-04"
published: true
slug: "android-safe-area"
---

# Using android-safe-area Package

In this tutorial, we will learn how to use the android-safe-area package to handle safe area insets in your Android project. Safe area insets represent the areas of the screen that are not covered by the system bars (e.g., navigation bar, status bar) and are necessary to ensure that your app's content is visible and not hidden behind these bars.

## Installation

First, let's start by installing the android-safe-area package in your Android project. Open your project's `build.gradle` file and add the following line to the `dependencies` block:

```groovy
implementation 'com.github.capacitor-community:safe-area:1.0.0'
```

Next, sync your project to let Gradle download and add the package to your project.

## Usage

Now that the package is installed, we can start using it to handle safe area insets in our app.

### Initializing the Package

To get started, we need to initialize the SafeAreaController. In your activity's `onResume` method, add the following code:

```java
import com.getcapacitor.community.safearea.SafeAreaPlugin;

public class MainActivity extends AppCompatActivity {
    @Override
    protected void onResume() {
        super.onResume();

        SafeAreaPlugin.load();
    }
}
```

### Getting Safe Area Insets

Once the SafeAreaController is initialized, we can easily get the safe area insets in our app. Here's an example of how to get the insets in your activity:

```java
import com.getcapacitor.community.safearea.SafeAreaInsets;

public class MainActivity extends AppCompatActivity {
    @Override
    protected void onResume() {
        super.onResume();

        SafeAreaInsets insets = SafeAreaInsets.getInsets(this);
        
        // You can now access the insets values
        int top = insets.getTop();
        int bottom = insets.getBottom();
        int left = insets.getLeft();
        int right = insets.getRight();
        
        // Use the insets values as needed in your app
        // For example, you can adjust the padding of your content
        // view to avoid overlapping with the system bars
        
        // ...
    }
}
```

### Listening for Safe Area Insets Changes

In some cases, the safe area insets might change dynamically, for example when the device is rotated. To handle such cases, you can register a listener to be notified when the insets change. Here's an example:

```java
import com.getcapacitor.community.safearea.SafeAreaInsets;
import com.getcapacitor.community.safearea.SafeAreaInsetsListener;

public class MainActivity extends AppCompatActivity {
    private SafeAreaInsetsListener insetsListener;
    
    @Override
    protected void onResume() {
        super.onResume();

        insetsListener = new SafeAreaInsetsListener() {
            @Override
            public void onInsetsChanged(SafeAreaInsets insets) {
                // Handle the insets change
                
                // ...
            }
        };
        
        SafeAreaInsets.addOnInsetsChangeListener(this, insetsListener);
    }
    
    @Override
    protected void onPause() {
        super.onPause();
        
        SafeAreaInsets.removeOnInsetsChangeListener(this, insetsListener);
    }
}
```

### Refreshing Safe Area Insets

If you want to manually refresh the safe area insets, you can use the `refresh` method of the SafeAreaController. Here's an example:

```java
import com.getcapacitor.community.safearea.SafeAreaPlugin;

public class MainActivity extends AppCompatActivity {
    @Override
    protected void onResume() {
        super.onResume();

        SafeAreaPlugin.load();
        
        // Refresh the safe area insets
        SafeAreaPlugin.refresh();
    }
}
```

### Unloading the Package

When you no longer need to use the SafeAreaController, you can unload the package to free up resources. Here's an example:

```java
import com.getcapacitor.community.safearea.SafeAreaPlugin;

public class MainActivity extends AppCompatActivity {
    @Override
    protected void onPause() {
        super.onPause();
        
        SafeAreaPlugin.unload();
    }
}
```

## Conclusion

In this tutorial, we learned how to use the android-safe-area package to handle safe area insets in your Android project. We covered the installation process, initializing the SafeAreaController, getting safe area insets, listening for insets changes, refreshing insets manually, and unloading the package. By using this package, you can ensure that your app's content is properly displayed and not hidden behind the system bars on Android devices.