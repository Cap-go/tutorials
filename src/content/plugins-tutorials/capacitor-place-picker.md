---
title: "Using the Capacitor Place Picker Package"
description: "A tutorial on how to use the capacitor-place-picker package for selecting a location in Capacitor"
created_at: "2022-01-20"
published: true
slug: "capacitor-place-picker"
---

# Using the Capacitor Place Picker Package

In this tutorial, we will learn how to use the `capacitor-place-picker` package to integrate a location picker in your Capacitor project. The package provides a simple and convenient way to allow users to select a location using maps.

## Prerequisites

Before we begin, make sure you have the following installed:

- Capacitor (version 2 or higher)
- The Capacitor project set up and configured in your app.

## Installation

To use the `capacitor-place-picker` package, follow these steps:

1. Install the package using npm or yarn:

```bash
npm install capacitor-place-picker
```

or

```bash
yarn add capacitor-place-picker
```

2. Next, sync the native files by running the following command:

```bash
npx cap sync
```

## Usage

Now that the package is installed, let's look at how to use it in your application.

1. Import the `capacitor-place-picker` package in your TypeScript file:

```typescript
import { CapacitorPlacePicker } from 'capacitor-place-picker';
```

2. Use the `CapacitorPlacePicker` object to open the place picker:

```typescript
const result = await CapacitorPlacePicker.show();
```

3. The `show` method will open the place picker defined by the package. Once a location is selected, the method will return an object with the selected location information.

```typescript
console.log(result);
```

4. You can access the selected location details like latitude, longitude, address, etc. as shown below:

```typescript
const latitude = result.latitude;
const longitude = result.longitude;
const address = result.address;

console.log(`Latitude: ${latitude}`);
console.log(`Longitude: ${longitude}`);
console.log(`Address: ${address}`);
```

That's it! You have successfully integrated the `capacitor-place-picker` package into your Capacitor project and implemented a location picker.

## Conclusion

In this tutorial, we learned how to use the `capacitor-place-picker` package to add a location picker in your Capacitor app. You can now allow users to select a location with ease using the provided methods.

Remember to refer to the package's documentation for additional options and customization possibilities.

Happy coding!