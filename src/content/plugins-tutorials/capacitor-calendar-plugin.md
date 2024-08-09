```markdown
---
title: Using @sharryland/capacitor-calendar-plugin Package Tutorial
description: Step-by-step guide on how to use the Capacitor Calendar Plugin package from @sharryland in your Ionic applications.
created_at: 2022-03-28
published: true
slug: capacitor-calendar-plugin
---

# Using @sharryland/capacitor-calendar-plugin Package Tutorial

This tutorial will guide you through the process of using the Capacitor Calendar Plugin package from @sharryland in your Ionic applications.

## Installation

To start using the package, you need to install it in your project by running the following command:

```bash
npm install @sharryland/capacitor-calendar-plugin
npx cap sync
```

## API

The `capacitor-calendar-plugin` package provides the following API method:

### `saveEventToCalendar()`

You can use the `saveEventToCalendar` method to add an event to the calendar. Here is how you can call this method:

```typescript
import { Plugins } from "@capacitor/core";

const { CapacitorCalendarPlugin } = Plugins;

// Define the event details
const eventDetails = {
  eventTitle: "Meeting with Team",
  eventDescription: "Discuss upcoming project",
  startDate: new Date().getTime(),
  endDate: new Date().getTime() + 3600000, // Adding an hour to the start date,
  location: "Office",
};

// Call the method to save the event
CapacitorCalendarPlugin.saveEventToCalendar(eventDetails)
  .then(() => {
    console.log("Event saved to the calendar");
  })
  .catch((error) => {
    console.error("Error saving event to calendar", error);
  });
```

Remember to add necessary permissions for calendar access in your app's configurations.

## Conclusion

In this tutorial, you learned how to integrate the Capacitor Calendar Plugin package into your Ionic applications and use the `saveEventToCalendar` method to add events to the calendar.
```
