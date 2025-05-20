---
title: Using capacitor-launch-native Package Tutorial
description: >-
  Learn how to utilize the capacitor-launch-native package to launch native
  functionality in Capacitor apps.
created_at: '2022-08-17'
published: true
slug: capacitor-launch-native.git
locale: en
---

## Introduction to capacitor-launch-native Package

The `capacitor-launch-native` package allows you to seamlessly incorporate native functionality within your Capacitor applications, enhancing the user experience and providing access to device-specific features. This tutorial will guide you through the process of integrating and leveraging the capabilities offered by this package.

### Prerequisites

Before proceeding with this tutorial, ensure that you have the following prerequisites in place:

- Basic knowledge of Capacitor and building mobile applications
- Capacitor project set up and configured

### Installation

To begin using the `capacitor-launch-native` package in your Capacitor project, follow these steps:

1. **Installation:**
    
    ```bash
    npm install capacitor-launch-native
    npx cap sync
    ```

2. **Import Statement:**
    
    In your project files, import the necessary modules from the `capacitor-launch-native` package.

### Launching a Native Feature

The `capacitor-launch-native` package enables you to launch various native features seamlessly. Below is a basic example of how to use the package to open the device camera:

1. **Code Snippet:**

```typescript
import { LaunchNative } from 'capacitor-launch-native';

// Open the device camera
const launchNative = new LaunchNative();
launchNative.openCamera()
  .then(result => {
    // Handle the camera opening result here
  })
  .catch(error => {
    // Handle any errors that occur
  });
```

### Conclusion

In this tutorial, you have learned how to integrate and use the `capacitor-launch-native` package in your Capacitor project. By leveraging this package, you can seamlessly incorporate native functionality and enhance the capabilities of your mobile applications. Experiment with different native features and explore the possibilities offered by `capacitor-launch-native` in your projects.
