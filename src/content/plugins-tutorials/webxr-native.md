---
title: "Using the webxr-native Package"
description: "A tutorial on how to use the webxr-native package for building native apps with XR capabilities"
created_at: "2022-01-01"
published: true
slug: "webxr-native"
---

# Using the webxr-native Package

In this tutorial, we will learn how to use the webxr-native package for building native apps with XR capabilities. The webxr-native package is an XR polyfill specifically designed for building iOS and Android apps using Capacitor.

## Prerequisites

Before we begin, make sure you have the following prerequisites installed:

- Node.js
- Yarn
- Capacitor

## Installation

To install the webxr-native package, follow these steps:

1. Open your terminal.
2. Navigate to your project directory.
3. Run the following command to install the dependencies:

```shell
yarn install
```

## Building the Project

Once the dependencies are installed, we need to build the project. Follow these steps:

1. Run the following command to build the project:

```shell
yarn build
```

## Adding Platforms

Next, we need to add the platforms we want to build our app for. Currently, webxr-native supports iOS and Android. 

To add the platforms, follow these steps:

1. Run the following command to add Android platform:

```shell
npx cap add android
```

2. Run the following command to add iOS platform:

```shell
npx cap add ios
```

## Syncing the Dependencies

After adding the platforms, we need to sync the project dependencies with Capacitor. To sync the dependencies, follow these steps:

1. Run the following command to sync the dependencies:

```shell
npx cap sync
```

## Conclusion

Congratulations! You have successfully learned how to use the webxr-native package for building native apps with XR capabilities. Now you can start developing your own XR-enabled apps using Capacitor and the webxr-native package.

Remember that the webxr-native package is currently under active development and testing, so make sure to check for updates and refer to the official documentation for any changes or new features.

Happy coding!