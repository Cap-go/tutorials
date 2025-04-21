---
"title": "How to Use @ebarooni/capacitor-calendar Package"
"description": "A comprehensive tutorial for utilizing the @ebarooni/capacitor-calendar package to manage calendar events on iOS and Android."
"created_at": "2022-01-24"
"published": true
"slug": "capacitor-calendar-git"
---

# How to Use @ebarooni/capacitor-calendar Package

The @ebarooni/capacitor-calendar package provides a host of functionalities for managing calendar events on both iOS and Android platforms. This tutorial will guide you through the installation, setup, and usage of this powerful Capacitor plugin.

## Installation

To start using the @ebarooni/capacitor-calendar package in your project, follow these installation steps.

```bash
npm install @ebarooni/capacitor-calendar
npx cap sync
```

## Usage

Once the package is installed, you can access the calendar functionalities through the defined API. Here is an example of creating a new calendar event:

```javascript
import { Calendar } from "@ebarooni/capacitor-calendar";

const createCalendarEvent = async () => {
  const eventDetails = {
    title: "Meeting with Team",
    location: "Office Conference Room",
    startDate: "2022-01-25T10:00:00.000Z",
    endDate: "2022-01-25T12:00:00.000Z",
  };

  try {
    await Calendar.createEvent(eventDetails);
    console.log("Calendar event created successfully!");
  } catch (error) {
    console.error("Error creating calendar event:", error);
  }
};

createCalendarEvent();
```

## Additional Configuration

For more advanced features and configurations, refer to the [official documentation](https://ebarooni.github.io/capacitor-calendar/) and the provided API references.

## Conclusion

In this tutorial, you learned how to install and utilize the @ebarooni/capacitor-calendar package to manage calendar events efficiently on both iOS and Android platforms. Explore the diverse functionalities it offers and incorporate them seamlessly into your applications!
```
```