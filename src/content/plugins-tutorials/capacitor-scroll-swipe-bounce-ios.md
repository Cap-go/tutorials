---
title: "Using capacitor-scroll-swipe-bounce-ios"
description: "A tutorial on how to use the capacitor-scroll-swipe-bounce-ios package to implement swipe gestures and bounce effect in iOS webviews."
created_at: "2021-10-12"
published: true
slug: "capacitor-scroll-swipe-bounce-ios"
---

# Using capacitor-scroll-swipe-bounce-ios

This tutorial will guide you through the process of using the `capacitor-scroll-swipe-bounce-ios` package to implement swipe gestures and bounce effect in iOS webviews.

## Installation

To install the `capacitor-scroll-swipe-bounce-ios` package, run the following command:

```bash
npm install capacitor-scroll-swipe-bounce-ios
npx cap sync
```

## Usage

### API

The package provides the following API:

#### echo

```typescript
echo(options: { value: string; }) => Promise<{ value: string; }>
```

This method can be used to perform an echo test. It takes an object with a `value` property as an argument and returns a promise that resolves with an object containing the echoed value.

### Example

Here's an example of how to use the `capacitor-scroll-swipe-bounce-ios` package in your Capacitor project:

```typescript
import { Plugins } from '@capacitor/core';

const { ScrollSwipeBounceIOS } = Plugins;

async function testEcho() {
  try {
    const response = await ScrollSwipeBounceIOS.echo({ value: 'Hello, World!' });
    console.log(response.value); // Output: Hello, World!
  } catch (error) {
    console.error(error);
  }
}

testEcho();
```

In this example, we import the `ScrollSwipeBounceIOS` plugin from the `@capacitor/core` package. We then call the `echo` method and pass it an object with a `value` property. The `echo` method returns a promise that resolves with an object containing the echoed value. We log the echoed value to the console.

## Conclusion

Implementing swipe gestures and bounce effect in iOS webviews using the `capacitor-scroll-swipe-bounce-ios` package is simple and straightforward. By following the instructions in this tutorial, you should be able to enhance the user experience of your Capacitor app on iOS devices.

Remember to refer to the official documentation of the package for more detailed information and additional features. Happy coding!