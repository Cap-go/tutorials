---
title: "Using the Capacitor Application Context Package"
description: "A tutorial on how to use the capacitor-application-context package in your Capacitor apps"
created_at: "2022-05-15"
published: true
slug: "application-context"
---

# Using the Capacitor Application Context Package

The Capacitor Application Context package provides a simple way to manage and share data across different parts of your Capacitor app. It allows you to store and retrieve data globally, making it accessible from any page or component.

In this tutorial, we will walk through the process of installing and using the capacitor-application-context package in your app.

## Step 1: Install the package

To get started, open your terminal and navigate to your Capacitor app directory. Then, run the following command to install the capacitor-application-context package:

```bash
npm install capacitor-application-context
```

This will add the package to your project's dependencies.

## Step 2: Import the package

Next, open the file where you want to use the Capacitor Application Context package, and import it at the top of the file:

```typescript
import { Application } from 'capacitor-application-context';
```

## Step 3: Initialize and use the context

To use the Capacitor Application Context, you need to initialize it with the desired data. This is typically done in the `ngOnInit` method of your component or in a service:

```typescript
import { Application } from 'capacitor-application-context';

// Initialize the context with an initial value
const appContext = new Application<any>('myContext', { username: 'JohnDoe' });

// Access the context value
appContext.value.subscribe((data) => {
  console.log(data.username); // Output: JohnDoe
});

// Modify the context value
appContext.value.next({ username: 'JaneDoe' });
```

In the above example, we created a new context with the name 'myContext' and an initial value of `{ username: 'JohnDoe' }`. We then accessed the value of the context using the `value` property and subscribed to its changes. Finally, we updated the context value by calling the `next` method.

## Step 4: Access the context in any component

Once you have initialized the context, you can easily access its value from any other component or page in your app. Import the `Application` class and initialize the context again with the same name:

```typescript
import { Application } from 'capacitor-application-context';

// Access the existing context
const appContext = new Application<any>('myContext');

// Access the context value
appContext.value.subscribe((data) => {
  console.log(data.username); // Output: JaneDoe
});
```

In this step, we import the `Application` class again and re-initialize the context with the same name. We then access and subscribe to the context value, which now reflects the updated value we set in the previous step.

## Conclusion

Congratulations! You have successfully learned how to use the Capacitor Application Context package to manage and share data across your Capacitor app. By following the steps in this tutorial, you can now create and access global data in a convenient and efficient manner.

Feel free to explore the Capacitor Application Context documentation for more advanced usage and additional features.

Remember to add the Capacitor Application Context package to your project by running the `npm install capacitor-application-context` command.