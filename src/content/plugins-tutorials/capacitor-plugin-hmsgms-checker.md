---
title: "Using capacitor-plugin-gmshms-checker"
description: "A tutorial on how to use the capacitor-plugin-gmshms-checker package to check HMS and GMS availability"
created_at: "2021-12-01"
published: true
slug: "capacitor-plugin-hmsgms-checker"
---

# Using capacitor-plugin-gmshms-checker

In this tutorial, we will learn how to use the `capacitor-plugin-gmshms-checker` package to check the availability of Huawei Mobile Services (HMS) and Google Mobile Services (GMS) on an Android platform.

## Step 1: Installation

First, we need to install the `capacitor-plugin-gmshms-checker` package using npm. Open your terminal and navigate to your project directory. Run the following command:

```bash
npm install capacitor-plugin-gmshms-checker@latest
```

Next, we need to sync the native files. Run the following command:

```bash
npx cap sync
```

## Step 2: Platform Configuration

### Android

#### Registering the Plugin

If you are using Capacitor v2.x, open your main activity file (usually located at `android/app/src/main/java/{your_package_name}/MainActivity.java`) and add the following code:

```java
import com.angelcamacho.plugin.ServiceChecker;

public class MainActivity extends BridgeActivity {

  @Override
  public void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    this.init(
        savedInstanceState,
        new ArrayList<Class<? extends Plugin>>() {
          {
            add(ServiceChecker.class);
          }
        }
      );
  }
}
```

If you are using Capacitor v3+, open your main activity file and add the following code:

```java
import com.angelcamacho.plugin.ServiceChecker;

public class MainActivity extends BridgeActivity {

  @Override
  public void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    registerPlugin(ServiceChecker.class);
  }
}
```

#### Gradle Configuration

In your `android/build.gradle` file, add the following lines in the `buildscript > repositories` and `buildscript > dependencies` sections:

```java
buildscript {
    repositories {
        ...
        maven { url 'https://developer.huawei.com/repo/' }
    }
    dependencies {
        ...
        classpath 'com.huawei.agconnect:agcp:1.9.0.300'
    }
}
```

Then, in the `allprojects > repositories` section, add the following line:

```java
allprojects {
    repositories {
        ...
        maven { url 'https://developer.huawei.com/repo/' }
    }
}
```

Finally, in your `android/app/build.gradle` file, add the following line in the `repositories` section:

```java
repositories {
    ...
    maven { url 'http://developer.huawei.com/repo/' }
}
```

If your Gradle version is 7.x or higher, add the `allowInsecureProtocol` flag to the Huawei Maven repository URL:

```java
repositories {
    ...
    maven {
        url 'http://developer.huawei.com/repo/'
        allowInsecureProtocol = true
    }
}
```

Note: Make sure your Android Gradle plugin is version 4.2.1 or later.

## Step 3: Usage

Now that we have installed and configured the `capacitor-plugin-gmshms-checker` package, let's look at how to use it in our code.

```javascript
import { Plugins } from '@capacitor/core';

const { ServiceChecker } = Plugins;

// Check HMS availability
ServiceChecker.isHmsAvailable()
  .then((result) => {
    console.log("HMS available:", result.available);
    console.log("HMS version:", result.version);
  })
  .catch((error) => {
    console.error("Error checking HMS availability:", error);
  });

// Check GMS availability
ServiceChecker.isGmsAvailable()
  .then((result) => {
    console.log("GMS available:", result.available);
    console.log("GMS version:", result.version);
  })
  .catch((error) => {
    console.error("Error checking GMS availability:", error);
  });
```

In the above code, we are using the `ServiceChecker` plugin to check the availability of HMS and GMS. The `isHmsAvailable()` and `isGmsAvailable()` functions return a promise that resolves to an object containing the availability status and version information.

That's it! You have successfully integrated the `capacitor-plugin-gmshms-checker` package into your Capacitor project and checked the availability of HMS and GMS.

## Conclusion

In this tutorial, we learned how to install and use the `capacitor-plugin-gmshms-checker` package to check the availability of HMS and GMS in your Android application. This can be useful if you need to determine whether your app can use specific features provided by these services.