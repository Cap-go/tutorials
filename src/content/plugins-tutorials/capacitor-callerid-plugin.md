---
title: "Using @swernimont/capacitor-callerid-plugin Package"
description: "A tutorial on how to use the @swernimont/capacitor-callerid-plugin package to retrieve caller ID information in a Capacitor project."
created_at: "2021-11-01"
published: true
slug: "capacitor-callerid-plugin"
---

# Using @swernimont/capacitor-callerid-plugin Package

In this tutorial, we will learn how to use the `@swernimont/capacitor-callerid-plugin` package to retrieve caller ID information in a Capacitor project. The `@swernimont/capacitor-callerid-plugin` package provides a simple and convenient way to access caller ID data on both iOS and Android platforms.

## Prerequisites

Before we begin, make sure you have the following prerequisites installed:

- Capacitor CLI (version 3.x or higher)
- Capacitor Core (version 3.x or higher)
- Your Capacitor project set up and ready to go

## Installation

To install the `@swernimont/capacitor-callerid-plugin` package, run the following command in your Capacitor project directory:

```bash
npm install @swernimont/capacitor-callerid-plugin
```

## Linking the Plugin

After installing the package, you need to link the plugin to your project. Run the following command to link the plugin:

```bash
npx cap sync
```

## Usage

To use the `@swernimont/capacitor-callerid-plugin` package in your Capacitor project, follow these steps:

1. Import the `CallerId` object from the package in your TypeScript file:

   ```typescript
   import { CallerId } from '@swernimont/capacitor-callerid-plugin';
   ```

2. Use the `CallerId.getCallerId()` method to retrieve the caller ID information:

   ```typescript
   const callerIdData = await CallerId.getCallerId();
   console.log('Caller ID:', callerIdData);
   ```

   The `getCallerId()` method returns a promise that resolves to the caller ID data. You can then use this data as per your application's requirements.

3. Run the Capacitor project on the desired platform:

   ```bash
   npx cap run <platform>
   ```

   Replace `<platform>` with `ios` or `android`, depending on the platform you wish to run the project on.

That's it! You have successfully implemented the `@swernimont/capacitor-callerid-plugin` package in your Capacitor project and can now retrieve caller ID information.

## Conclusion

In this tutorial, we learned how to use the `@swernimont/capacitor-callerid-plugin` package to retrieve caller ID information in a Capacitor project. We installed the package, linked it to our project, and implemented the necessary code to retrieve the caller ID data. We also ran the project on the desired platform to verify the functionality.

Now you can leverage the power of the `@swernimont/capacitor-callerid-plugin` package to enhance your Capacitor project with caller ID information. Happy coding!