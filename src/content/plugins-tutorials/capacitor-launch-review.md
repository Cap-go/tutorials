---
title: "Using @anuradev/capacitor-launch-review Package"
description: "This tutorial will guide you on how to use the @anuradev/capacitor-launch-review package to assist in leaving user reviews/ratings in the App Stores."
created_at: "2022-10-11"
published: true
slug: capacitor-launch-review
---

# Using @anuradev/capacitor-launch-review Package

The `@anuradev/capacitor-launch-review` package is a Capacitor plugin that helps in leaving user reviews and ratings in the App Stores. This tutorial will guide you step-by-step on how to use this package in your Capacitor project.

## Installation

To begin, first install the `@anuradev/capacitor-launch-review` package using npm.

```bash
npm install @anuradev/capacitor-launch-review
```

Once installed, synchronize the Capacitor project to make the plugin available in your project.

```bash
npx cap sync
```

## Usage

After installing and synchronizing the package, you can start using the `launch()` function provided by the plugin.

### Import the Plugin

In your JavaScript or TypeScript file, import the `capacitor-launch-review` package.

```typescript
import { Plugins } from '@capacitor/core';
const { LaunchReview } = Plugins;
```

### Launch the Review Prompt

To launch the review prompt in the App Stores, call the `launch()` function.

```typescript
LaunchReview.launch();
```

Make sure to wrap the function call inside an event listener or user interaction to comply with app store policies.

## Example

Here's an example of how to use the `@anuradev/capacitor-launch-review` package in a Capacitor project.

```typescript
import { Plugins } from '@capacitor/core';

const { LaunchReview } = Plugins;

document.getElementById('reviewBtn').addEventListener('click', async () => {
  try {
    await LaunchReview.launch();
  } catch (error) {
    console.error('Failed to launch review prompt', error);
  }
});
```

In the above example, we add an event listener to a button with the id "reviewBtn". When the button is clicked, the review prompt will be launched.

That's it! You have successfully integrated the `@anuradev/capacitor-launch-review` package into your Capacitor project to assist in leaving user reviews/ratings in the App Stores.

Remember to test the functionality thoroughly on both iOS and Android devices before publishing your app to the respective App Stores.

Happy coding!