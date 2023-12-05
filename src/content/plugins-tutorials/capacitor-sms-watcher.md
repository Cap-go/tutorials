---
title: "Using @laravelka/csw Package: Capacitor SMS Watcher"
description: "Learn how to use the @laravelka/csw package to listen to incoming SMS messages in your Capacitor project."
created_at: "2022-08-18"
published: true
slug: "capacitor-sms-watcher"
---

# Using @laravelka/csw Package: Capacitor SMS Watcher

The @laravelka/csw package is designed to enable your Capacitor project to listen to incoming SMS messages. In this tutorial, we will guide you through the installation process and demonstrate how to use the package's API.

## Installation

To install the @laravelka/csw package, follow these steps:

```bash
npm install @laravelka/csw
npx cap sync
```

## API

The @laravelka/csw package provides the following API:

### watch()

The `watch()` function returns a promise that resolves to an object containing the sender's phone number (`from`) and the body of the SMS message (`body`).

```typescript
watch() => Promise<{ from: string; body: string; }>
```

## Tutorial

In this tutorial, we will walk you through the process of using the @laravelka/csw package in your Capacitor project.

Step 1: Installation

Start by installing the package using the following command:

```bash
npm install @laravelka/csw
npx cap sync
```

Step 2: Implementation

Next, let's implement the package in your project. Open the file where you want to handle incoming SMS messages and import the `watch` function:

```javascript
import { watch } from '@laravelka/csw';
```

Step 3: Listening to Incoming SMS Messages

To start listening to incoming SMS messages, call the `watch` function and handle the returned data:

```javascript
watch().then((data) => {
  const { from, body } = data;
  // Handle the incoming SMS message
  console.log('Received SMS from:', from);
  console.log('Message body:', body);
}).catch((error) => {
  // Handle any errors
  console.error('An error occurred while watching for SMS messages:', error);
});
```

Step 4: Run the Application

Now, you can run your Capacitor project and test the functionality of the @laravelka/csw package. Incoming SMS messages will be logged in the console.

Congratulations! You have successfully integrated the @laravelka/csw package into your Capacitor project to listen to incoming SMS messages.

---

Remember to import the necessary modules, handle errors appropriately, and customize the implementation according to your project's requirements.

That's it for this tutorial. You have learned how to use the @laravelka/csw package to enable your Capacitor project to listen to incoming SMS messages. Happy coding!