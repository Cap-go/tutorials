---
title: "Using @dominuss/call-receiver Package"
description: "A tutorial on how to use the @dominuss/call-receiver package to receive phone calls in your application."
created_at: "2021-10-25"
published: true
slug: "call-receiver"
---

# Using @dominuss/call-receiver Package

In this tutorial, we will learn how to use the `@dominuss/call-receiver` package to receive phone calls in your application. The `@dominuss/call-receiver` package provides a simple API for handling incoming phone calls in your application.

## Installation

To install the `@dominuss/call-receiver` package, you can use npm or yarn. Open your terminal and run the following command:

```bash
npm install @dominuss/call-receiver
```
or

```bash
yarn add @dominuss/call-receiver
```

## Usage

1. Import the `callReceiver` function from the `@dominuss/call-receiver` package into your file:

```javascript
import { callReceiver } from '@dominuss/call-receiver';
```

2. Initialize the `callReceiver` function with a callback function that will be executed when a phone call is received:

```javascript
callReceiver((phoneNumber) => {
  console.log(`Received a phone call from ${phoneNumber}`);
  // Handle the phone call
});
```

3. Start the call receiver by calling the `start` method:

```javascript
callReceiver.start();
```

4. Test the call receiver by making a phone call to the registered phone number. The callback function will be executed, and you will see the phone number printed in the console.

That's it! You have now successfully set up the `@dominuss/call-receiver` package to receive phone calls in your application.

## Conclusion

In this tutorial, we learned how to use the `@dominuss/call-receiver` package to receive phone calls in your application. We covered the installation process, how to initialize the call receiver, and how to handle incoming phone calls. You can now integrate phone call functionality into your application using the `@dominuss/call-receiver` package.

I hope you found this tutorial helpful. If you have any further questions, feel free to ask. Happy coding!