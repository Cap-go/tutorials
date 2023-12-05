Sure, here's a markdown tutorial for using the `cap-read-sms` package, including the frontmatter:

```
---
title: "Using cap-read-sms Package"
description: "This tutorial will guide you through the process of using the cap-read-sms package to read SMS messages in your Capacitor app."
created_at: "2021-11-01"
published: true
slug: "cap-read-sms"
---

# Using cap-read-sms Package

The `cap-read-sms` package provides a simple way to read SMS messages within your Capacitor app. This can be useful for implementing features like SMS verification or extracting information from incoming messages.

## Installation

To install the `cap-read-sms` package, you can use the following command:

```bash
npm install cap-read-sms
```

## Usage

1. Import the `readSMS` function from the `cap-read-sms` package:

   ```javascript
   import { readSMS } from 'cap-read-sms';
   ```

2. Request permission to read SMS messages. This step is necessary for Android devices:

   ```javascript
   async function requestPermission() {
     const permissionStatus = await readSMS.requestPermission();
     if (permissionStatus === 'granted') {
       // Permission granted, proceed with reading SMS messages
     } else {
       // Permission denied, handle accordingly
     }
   }
   ```

3. Read SMS messages:

   ```javascript
   async function readMessages() {
     const messages = await readSMS.read();
     // Process the received messages
     console.log(messages);
   }
   ```

4. Call the `requestPermission` function to request permission, and then call the `readMessages` function to read SMS messages when needed.

That's it! You have successfully integrated the `cap-read-sms` package into your Capacitor app and can now read SMS messages.

Remember to handle any error scenarios and provide appropriate user feedback throughout your app.

Happy coding!
```

Please note that the date in the frontmatter (`created_at`) is the current date when this answer was provided.