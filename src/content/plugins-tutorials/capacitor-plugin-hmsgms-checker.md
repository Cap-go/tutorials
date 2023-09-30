# Using the `capacitor-plugin-gmshms-checker` Package

In this tutorial, we will guide you on how to use the `capacitor-plugin-gmshms-checker` package in your Capacitor project. This plugin allows you to check the availability of Google Mobile Services (GMS) and Huawei Mobile Services (HMS) on an Android device.

## Installation

To install the `capacitor-plugin-gmshms-checker` package, run the following command in your project's root directory:

```bash
npm install capacitor-plugin-gmshms-checker@latest
```

Next, sync the native files by running the following command:

```bash
npx cap sync
```

### Registering the Plugin

You need to register the plugin in your main activity file. The steps differ based on the version of Capacitor you are using.

#### Capacitor v2.x

In your `MainActivity.java` file, import the `ServiceChecker` class from the plugin package. Inside the `onCreate` method, add the plugin to the list of plugins to initialize:

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

#### Capacitor v3+

In your `MainActivity.java` file, import the `ServiceChecker` class from the plugin package. Inside the `onCreate` method, register the plugin:

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

### Configuration

To use HMS services, you need to make some changes to your Android project's configuration files. Open your `android/build.gradle` file and add the following lines inside the `buildscript > repositories` and `buildscript > dependencies` entries:

```gradle
buildscript {
  repositories {
    maven { url 'https://developer.huawei.com/repo/' }
  }
  dependencies {
    classpath 'com.huawei.agconnect:agcp:1.9.0.300'
  }
}
```

Next, add the following line inside the `allprojects > repositories` entry:

```gradle
allprojects {
  repositories {
    maven { url 'https://developer.huawei.com/repo/' }
  }
}
```

Open your `android/app/build.gradle` file and add the following line inside the `repositories` entry:

```gradle
repositories {
  maven { url 'http://developer.huawei.com/repo/' }
}
```

For Gradle version ^7.x, add the `allowInsecureProtocol` flag to your build.gradle file:

```gradle
repositories {
  maven {
    url 'http://developer.huawei.com/repo/'
    allowInsecureProtocol = true
  }
}
```

> Note: Make sure your Android Gradle plugin is version 4.2.1 or later.

## Usage

To use the `capacitor-plugin-gmshms-checker` package, follow the steps based on the version of Capacitor you are using.

### Capacitor v2.x

Inside your JavaScript or TypeScript file, import the package:

```typescript
import 'capacitor-plugin-gmshms-checker';
import { Plugins } from '@capacitor/core';

const { ServiceChecker } = Plugins;
```

To check if GMS is available on the device, use the `isGMSAvailable()` method:

```typescript
ServiceChecker.isGMSAvailable().then(({ value }) => {
  console.log(value); // true or false
});
```

To check if HMS is available on the device, use the `isHMSAvailable()` method:

```typescript
ServiceChecker.isHMSAvailable().then(({ value }) => {
  console.log(value); // true or false
});
```

### Capacitor v3+

Inside your JavaScript or TypeScript file, import the package and the `ServiceChecker` class:

```typescript
import { ServiceChecker } from 'capacitor-plugin-gmshms-checker';
import 'capacitor-plugin-gmshms-checker';
```

To check if GMS is available on the device, use the `isGMSAvailable()` method:

```typescript
ServiceChecker.isGMSAvailable().then(({ value }) => {
  console.log(value); // true or false
});
```

To check if HMS is available on the device, use the `isHMSAvailable()` method:

```typescript
ServiceChecker.isHMSAvailable().then(({ value }) => {
  console.log(value); // true or false
});
```

## Android Setup

To set up the Android project for your Capacitor app with this plugin, follow these steps:

1. Create a new Capacitor project:

```bash
ionic start my-cap-app --capacitor
cd my-cap-app
```

2. Install the `capacitor-plugin-gmshms-checker` package:

```bash
npm install --save capacitor-plugin-gmshms-checker
```

3. Create the `www` directory and `index.html` file:

```bash
mkdir www && touch www/index.html
```

4. Add the Android platform to your project:

```bash
npx cap add android
```

5. Sync the Android project:

```bash
npx cap sync android
```

> Note: Sync the project every time you run `npm install` to install new packages.

6. Open the Android project in Android Studio:

```bash
npx cap open android
```

7. Copy the `google-services.json` and/or `agconnect-services.json` files to the `android/app` directory of your Capacitor project for Google and Huawei services, respectively.

You are now ready to run your client using the following command:

```bash
ionic cap run android --livereload --address=0.0.0.0
```

> Tip: If you make changes to native code, clean the project cache (Build > Clean Project | Build > Rebuild Project) before running the app again.

That's it! You have successfully installed and used the `capacitor-plugin-gmshms-checker` package in your Capacitor project.