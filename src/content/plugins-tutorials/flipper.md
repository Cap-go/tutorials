---
title: "Using @capacitor-community/flipper Package"
description: "In this tutorial, we will learn how to use the @capacitor-community/flipper package for Capacitor, an open-source framework for building cross-platform mobile apps."
created_at: "2021-11-30"
published: true
slug: flipper
---

# Using @capacitor-community/flipper Package

In this tutorial, we will learn how to use the `@capacitor-community/flipper` package for Capacitor, an open-source framework for building cross-platform mobile apps.

## Prerequisites
Before we begin, make sure you have [Flipper](https://fbflipper.com/) installed on your development machine. Flipper is available for Linux, Windows, and macOS. If you're using macOS, you can simply install Flipper using Homebrew by running the command: `brew cask install flipper`.

## Installation

To install the `@capacitor-community/flipper` package, you can use either npm or yarn.

Using npm:

```bash
npm install @capacitor/flipper
```

Using yarn:

```bash
yarn add @capacitor/flipper
```

Finally, sync the native files using the following command:

```bash
npx cap sync
```

## Android Setup

For Android, you need to register the plugin in your main activity. Open your `MainActivity.java` file and import the `Flipper` class:

```java
import com.getcapacitor.community.flipper.Flipper;
```

Then, add `Flipper.class` to the list of plugins in the `onCreate()` method:

```java
@Override
public void onCreate(Bundle savedInstanceState) {
  super.onCreate(savedInstanceState);

  this.init(
    savedInstanceState,
    new ArrayList<Class<? extends Plugin>>() {
      {
        add(Flipper.class);
      }
    }
  );
}
```

## Configuration

The `@capacitor-community/flipper` plugin does not require any additional configuration. You can proceed with using its supported methods.

## Supported Methods

The `@capacitor-community/flipper` plugin provides the following supported methods:

| Name         | Android | iOS | Web |
| :----------- | :------ | :-- | :-- |
| initialize   | ✅      | ✅  | ❌  |
| emulateCrash | ✅      | ❌  | ❌  |

## Example

Here is an example of how to use the `@capacitor-community/flipper` package in your project:

```typescript
import { Plugins } from "@capacitor/core";

const { Flipper } = Plugins;

// Initialize Flipper
Flipper.initialize({
  enabled: true,
  network: true,
  crash_report: true,
  layout_inspector: true,
  database: true,
});

// Emulate a crash
Flipper.emulateCrash({
  message: "Forced Crash",
});
```

## Conclusion

In this tutorial, we have learned how to use the `@capacitor-community/flipper` package to enable Flipper in your Capacitor project. We have seen how to install the package, set up the Android configuration, and use its supported methods. With Flipper, you can debug and inspect your Capacitor apps more efficiently, making the development process smoother.