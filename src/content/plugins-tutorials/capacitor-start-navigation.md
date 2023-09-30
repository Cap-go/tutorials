# Using @proteansoftware/capacitor-start-navigation package

This tutorial will guide you through the process of using the `@proteansoftware/capacitor-start-navigation` package in your Capacitor project.

## Installation

To install the package, run the following command:

```bash
npm install @proteansoftware/capacitor-start-navigation
```

## Usage

### Import the package

Import the package in your project:

```typescript
import { StartNavigation } from '@proteansoftware/capacitor-start-navigation';
```

### Initialize the plugin

Before using any of the plugin's functions, you need to initialize it. Add the following code to your `app.component.ts` file:

```typescript
import { Plugins } from '@capacitor/core';

const { StartNavigation } = Plugins;

// Initialize the plugin
StartNavigation.initialize();
```

### Start the navigation

To start the navigation, you can use the `startNavigation` function. This function takes a `destination` parameter which specifies the destination coordinates. Here's an example:

```typescript
const destination = {
  latitude: 37.7749,
  longitude: -122.4194
};

StartNavigation.startNavigation({ destination });
```

### Listen for events

You can also listen for navigation events using the `addListener` function. Here's an example:

```typescript
StartNavigation.addListener('navigationEvent', (event: any) => {
  console.log('Navigation Event:', event);
});
```

This will log the navigation events to the console.

## Conclusion

In this tutorial, we explored how to use the `@proteansoftware/capacitor-start-navigation` package in your Capacitor project. We covered the installation process, initializing the plugin, starting the navigation, and listening for navigation events. Now you can integrate navigation features into your Capacitor app using this package.

Please refer to the official documentation of the package for more details and additional functions.