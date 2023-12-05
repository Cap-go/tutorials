---
title: "Using the sntp-client package with CapacitorJS"
description: "A tutorial on how to use the sntp-client package in a CapacitorJS project"
created_at: "2022-01-01"
published: true
slug: "capacitorjs-sntp-client"
---

# Using the sntp-client package with CapacitorJS

In this tutorial, we will learn how to use the sntp-client package in a CapacitorJS project. The sntp-client package allows us to retrieve the current time from an NTP server, which is helpful for applications that require accurate and synchronized timekeeping.

## Installation

To install the sntp-client package, follow these steps:

1. Open your terminal or command prompt.
2. Navigate to your CapacitorJS project.
3. Run the following command: `npm install sntp-client`

## Usage

Once the sntp-client package is installed, you can use it in your CapacitorJS project as follows:

1. Import the package into your JavaScript file:

```javascript
import sntp from 'sntp-client';
```

2. Use the `getNetworkTime()` function to retrieve the current time from an NTP server:

```javascript
sntp.getNetworkTime((err, date) => {
  if (err) {
    console.error('Error retrieving network time:', err);
  } else {
    console.log('Network time:', date);
  }
});
```

The `getNetworkTime()` function takes a callback as an argument. If an error occurs during the time retrieval, the `err` parameter will contain the error message. Otherwise, the `date` parameter will contain the retrieved network time.

That's it! You have successfully used the sntp-client package in your CapacitorJS project to retrieve the current time from an NTP server.

Remember to handle any errors that may occur during the time retrieval and ensure that your device is connected to the internet for accurate time synchronization.

I hope this tutorial was helpful! If you have any questions or run into any issues, feel free to reach out for further assistance. Happy coding!