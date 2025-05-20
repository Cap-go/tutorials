---
title: Using @mindly/capacitor-android-edge-to-edge-support Package
description: >-
  Learn how to implement edge-to-edge support in your Capacitor Android
  application with @mindly/capacitor-android-edge-to-edge-support package.
created_at: '2022-01-20'
published: true
slug: capacitor-android-edge-to-edge-support.git
locale: en
---

# Using @mindly/capacitor-android-edge-to-edge-support Package

To implement edge-to-edge support in your Capacitor Android application, you can leverage the `@mindly/capacitor-android-edge-to-edge-support` package. This package allows you to create immersive user interfaces that extend from one edge of the screen to the other, providing a modern and seamless user experience.

Follow these steps to integrate edge-to-edge support in your Capacitor Android project:

## Installation

1. Install the package using npm:

   ```bash
   npm install @mindly/capacitor-android-edge-to-edge-support
   ```

2. Sync your project with Capacitor:

   ```bash
   npx cap sync android
   ```

## Implementation

1. Import the package in your Android project:

   ```java
   import com.mindly.capacitor.android.edge.to.edge.EdgeToEdgePlugin;
   ```

2. Register the plugin in your main activity:

   ```java
   add(EdgeToEdgePlugin.class);
   ```

3. Implement the edge-to-edge feature in your layout XML files:

   ```xml
   <androidx.constraintlayout.widget.ConstraintLayout xmlns:android="http://schemas.android.com/apk/res/android"
       xmlns:app="http://schemas.android.com/apk/res-auto"
       xmlns:tools="http://schemas.android.com/tools"
       android:layout_width="match_parent"
       android:layout_height="match_parent"
       tools:context=".MainActivity">

       <!-- Your edge-to-edge layout here -->

   </androidx.constraintlayout.widget.ConstraintLayout>
   ```

4. Initialize the plugin in your application:

   ```java
   // Initialize the plugin
   EdgeToEdgePlugin.initialize(getApplication());

   // Apply edge-to-edge to a specific view
   EdgeToEdgePlugin.applyTo(rootView);
   ```

5. Run your application:

   ```bash
   npx cap run android
   ```

With these steps, you can easily add edge-to-edge support to your Capacitor Android application using the `@mindly/capacitor-android-edge-to-edge-support` package.

This tutorial provides a simple but effective approach to enhance the user experience by utilizing edge-to-edge layouts in your Android app.
