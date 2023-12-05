---
title: "Using capacitor-jeep-bug package"
description: "A tutorial on how to use the capacitor-jeep-bug package for bug tracking in Capacitor projects."
created_at: "2021-10-15"
published: true
slug: "capacitor-jeep-bug"
---

# Using capacitor-jeep-bug package

In this tutorial, we will learn how to use the capacitor-jeep-bug package to track bugs in Capacitor projects. The capacitor-jeep-bug package provides a simple and efficient way to log and monitor bugs in your Capacitor apps.

## Installation

To install the capacitor-jeep-bug package, run the following command:

```
npm install capacitor-jeep-bug
```

## Usage

Once the package is installed, you can start using it in your Capacitor project. Here are the steps to get started:

1. Import the `CapacitorJeepBug` class from the package:

   ```javascript
   import { CapacitorJeepBug } from 'capacitor-jeep-bug';
   ```

2. Initialize the `CapacitorJeepBug` class with your bug tracking credentials. You'll need to obtain the necessary credentials from the bug tracking service you want to use. For example:

   ```javascript
   const jeepBug = new CapacitorJeepBug({
     projectId: 'your-project-id',
     apiKey: 'your-api-key',
     // other configuration options
   });
   ```

3. Log a bug using the `logBug` method. Pass the bug details such as title, description, severity, etc. For example:

   ```javascript
   jeepBug.logBug({
     title: 'App crashes on startup',
     description: 'The app crashes immediately after launching.',
     severity: 'High',
     // other bug details
   });
   ```

4. Monitor and track bugs using the bug tracking service's dashboard or API.

That's it! You have successfully integrated the capacitor-jeep-bug package into your Capacitor project for bug tracking.

## Conclusion

In this tutorial, we explored how to use the capacitor-jeep-bug package to track bugs in Capacitor projects. By following the installation and usage steps, you can easily log and monitor bugs in your app using the bug tracking service of your choice.

Happy bug tracking!