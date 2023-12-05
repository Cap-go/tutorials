---
title: "Using @start9labs/capacitor-tor Package"
description: "A tutorial on how to use the @start9labs/capacitor-tor package to integrate Tor functionality into your Capacitor app."
created_at: "2023-04-10"
published: true
slug: "capacitor-tor"
---

# Using @start9labs/capacitor-tor Package

The `@start9labs/capacitor-tor` package allows you to easily integrate Tor functionality into your Capacitor app. In this tutorial, we will guide you through the process of setting up and using the `@start9labs/capacitor-tor` package in your project.

## Prerequisites

Before getting started, make sure you have the following:

1. A Capacitor project set up and initialized.
2. Node.js installed on your development machine.

## Installation

To install the `@start9labs/capacitor-tor` package in your Capacitor project, follow these steps:

1. Open a terminal and navigate to the root directory of your Capacitor project.
2. Run the following command to install the package:

```bash
npm install @start9labs/capacitor-tor
```

## Configuration

Once the package is installed, you need to configure it before using it in your app. 

1. Open the `capacitor.config.json` file in your project's root directory.
2. Add the following configuration to the `plugins` section:

```json
{
  "plugins": {
    "CapacitorTor": {
      "enabled": true
    }
  }
}
```

## Usage

Now that the package is installed and configured, you can start using it in your app.

1. Import the `CapacitorTor` plugin in your JavaScript or TypeScript file:

```javascript
import { Plugins } from '@capacitor/core';
const { CapacitorTor } = Plugins;
```

2. Use the various methods provided by the `CapacitorTor` plugin to interact with Tor. For example, you can use the `start` method to start the Tor service:

```javascript
CapacitorTor.start();
```

3. Refer to the documentation of the `@start9labs/capacitor-tor` package for more details on the available methods and their usage.

## Conclusion

In this tutorial, we have learned how to integrate the `@start9labs/capacitor-tor` package into a Capacitor app. We covered the installation, configuration, and basic usage of the package. With this knowledge, you can now easily incorporate Tor functionality into your Capacitor app.

Happy coding!