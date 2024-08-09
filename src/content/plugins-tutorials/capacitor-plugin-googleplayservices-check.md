---
title: Using capacitor-plugin-googleplayservices-check
description: This blog post will provide a step-by-step tutorial on how to use the capacitor-plugin-googleplayservices-check package to check whether Google Play Services is available on your Android device in a Capacitor project.
created_at: 2022-01-26
published: true
slug: capacitor-plugin-googleplayservices-check
---

# Using capacitor-plugin-googleplayservices-check

## Installing the Plugin

To use the `capacitor-plugin-googleplayservices-check` package in your Capacitor project, you need to first install the plugin.

```bash
npm install capacitor-plugin-googleplayservices-check
```

## Importing the Plugin

Import the plugin in your project:

```typescript
import { GooglePlayServicesCheck } from 'capacitor-plugin-googleplayservices-check';
```

## Checking Google Play Services Availability

Use the `GooglePlayServicesCheck` object to check whether Google Play Services is available on the device:

```typescript
const isAvailable = await GooglePlayServicesCheck.isAvailable();
if (isAvailable) {
  console.log('Google Play Services is available on the device');
} else {
  console.log('Google Play Services is not available on the device');
}
```

## Handling the Result

You can handle the result based on whether Google Play Services is available or not. For example, you can show a message to the user or perform some action based on the availability.

```typescript
if (isAvailable) {
  // Perform actions if Google Play Services is available
} else {
  // Show a message or perform actions if Google Play Services is not available
}
```

## Error Handling

In case of any errors during the check, you can catch and handle them as follows:

```typescript
try {
  const isAvailable = await GooglePlayServicesCheck.isAvailable();
  console.log('Google Play Services check result:', isAvailable);
} catch (error) {
  console.error('Error checking Google Play Services availability:', error);
}
```

## Testing

Make sure to thoroughly test the functionality after implementing the plugin to ensure that it works as expected in your Capacitor project.
