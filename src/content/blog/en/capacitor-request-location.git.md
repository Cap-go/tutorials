---
title: "Using Capacitor Request Location Package"
description: "A tutorial on how to use the capacitor-request-location package in your Capacitor project."
created_at: "2021-10-04"
published: true
slug: "capacitor-request-location.git"
---

# Using Capacitor Request Location Package

To use the `capacitor-request-location` package in your Capacitor project, you need to follow these steps:

## Installation

First, install the `capacitor-request-location` package:

```bash
npm install capacitor-request-location
npx cap sync
```

## Requesting Location

You can request the location of the user using the following code snippet:

```typescript
import { Plugins } from '@capacitor/core';

const { Geolocation } = Plugins;

const coordinates = await Geolocation.getCurrentPosition();
console.log('Current coordinates:', coordinates);
```

## Handling Permissions

Don't forget to handle permissions for location access in your project. Ensure you have the necessary permissions set up.

## Error Handling

Remember to handle errors in case the location request fails. Implement appropriate error handling to provide a smooth user experience.

By following these steps, you can successfully use the `capacitor-request-location` package in your Capacitor project.
