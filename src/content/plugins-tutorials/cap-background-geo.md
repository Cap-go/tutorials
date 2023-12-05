---
title: "Using cap-background-geo Package"
description: "A tutorial on how to use the cap-background-geo package for Capacitor iOS/Android native plugin."
created_at: "2021-11-23"
published: true
slug: "cap-background-geo"
---

# Using cap-background-geo Package

The `cap-background-geo` package is a Capacitor iOS/Android native plugin that allows you to request location permission, gather GPS updates, and send them across the JS bridge while the app is running in the foreground and background. This tutorial will guide you through the steps to use the `cap-background-geo` package in your Capacitor project.

## Prerequisites

Before getting started, make sure you have the following:
- Capacitor 3+ installed in your project.
- iOS project set up with the required permissions in the `info.plist` file.
- Android project set up with the plugin imported and added in the `MainActivity.java` file, and the service added in the `AndroidManifest.xml` file.

## Installation

To install the `cap-background-geo` package, use either `yarn` or `npm`.

### With yarn

```bash
$ yarn add cap-background-geo
```

### With npm

```bash
$ npm install cap-background-geo --save
```

## Usage

To use the `cap-background-geo` package in your project, follow these steps:

1. Import the package in your project:

```javascript
import CapBackgroundGeo from 'cap-background-geo';
```

2. Add event listeners to handle GPS updates:

```javascript
CapBackgroundGeo.addListener('geo-update', data => {
  const { lat, lng } = data;
  // Handle GPS update data here
});
```

3. Start the service:

```javascript
CapBackgroundGeo.start();
```

4. Stop the service (optional):

```javascript
CapBackgroundGeo.stop();
```

## Example

Here's an example of how you can use the `cap-background-geo` package in a React component:

```javascript
import React, { useEffect } from 'react';
import CapBackgroundGeo from 'cap-background-geo';

const MyComponent = () => {
  useEffect(() => {
    // Add event listener for GPS updates
    CapBackgroundGeo.addListener('geo-update', data => {
      const { lat, lng } = data;
      // Handle GPS update data here
    });

    // Start the service
    CapBackgroundGeo.start();

    // Clean up on component unmount
    return () => {
      // Stop the service
      CapBackgroundGeo.stop();
    };
  }, []);

  // Component render here
  return (
    <div>
      ...
    </div>
  );
};

export default MyComponent;
```

Make sure to clean up and stop the service when the component unmounts to avoid unnecessary background processes.

That's it! You've successfully used the `cap-background-geo` package in your Capacitor project.

Remember to consult the package's documentation and the respective platform setup guides for more advanced usage and configuration options.

Happy coding!