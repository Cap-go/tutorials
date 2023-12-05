---
title: "Using the capacitor-calendar Package"
description: "Learn how to use the capacitor-calendar package to integrate calendar functionalities into your app."
created_at: "2021-09-01"
published: true
slug: "capacitor-calendar"
---

# Using the `capacitor-calendar` Package

In this tutorial, we will explore how to integrate the `capacitor-calendar` package into your Capacitor app to add calendar functionalities. The `capacitor-calendar` package provides a set of methods and event listeners that allow you to interact with the device's calendar system.

## Step 1: Install the Package

To get started, we need to install the `capacitor-calendar` package. Open your project directory in the terminal and run the following command:

```bash
npm install capacitor-calendar
```

This will install the package and add it as a dependency in your `package.json` file.

## Step 2: Configure Capacitor

Next, we need to configure Capacitor to recognize the `capacitor-calendar` package. Open the `capacitor.config.json` file in your project root and add the following:

```json
{
  "plugins": {
    "Calendar": {
      "syncEvents": true
    }
  }
}
```

This configuration enables synchronization of events between your app and the device's calendar.

## Step 3: Import and Initialize the Plugin

In the file where you want to use the calendar functionalities, import the `capacitor-calendar` plugin:

```typescript
import { Plugins } from '@capacitor/core';

const { Calendar } = Plugins;
```

## Step 4: Request Calendar Permissions

To access the device's calendar, we need to request permission from the user. Add the following code to request the necessary permissions:

```typescript
async requestCalendarPermissions() {
  const { granted } = await Calendar.requestPermissions();
  
  if (granted) {
    console.log('Calendar permissions granted');
  } else {
    console.log('Calendar permissions denied');
  }
}
```

## Step 5: Create a Calendar Event

To create a new event in the device's calendar, use the `createEvent` method. Here's an example:

```typescript
async createCalendarEvent() {
  const event = {
    title: 'My Event',
    location: 'Some Location',
    description: 'This is my event description',
    startDate: new Date(),
    endDate: new Date(new Date().getTime() + 60 * 60 * 1000) // 1 hour from now
  };

  const result = await Calendar.createEvent(event);

  if (result.success) {
    console.log('Event created successfully');
  } else {
    console.log('Failed to create event');
  }
}
```

## Step 6: Listen for Calendar Changes

You can also listen for changes in the device's calendar using the `addListener` method. Here's an example:

```typescript
Calendar.addListener('calendarChange', (data) => {
  console.log('Calendar change event received:', data);
});
```

This allows your app to react and update its UI when events are added, modified, or deleted in the calendar.

## Conclusion

In this tutorial, we learned how to integrate the `capacitor-calendar` package into a Capacitor app. We covered the installation process, configuring Capacitor, requesting calendar permissions, creating calendar events, and listening for calendar changes. With these steps, you can now add powerful calendar functionalities to your app.

Remember to refer to the `capacitor-calendar` package's documentation for more details and advanced usage.

Happy coding!