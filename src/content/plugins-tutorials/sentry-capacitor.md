# Using @sentry/capacitor Package Tutorial

The @sentry/capacitor package allows you to integrate Sentry error tracking and monitoring into your Capacitor applications. This tutorial will guide you through the steps to install and use the package effectively.

## Step 1: Installation

To install the @sentry/capacitor package, run the following command in your terminal:

```bash
yarn add @sentry/capacitor @sentry/angular --exact
```

This command will install the required dependencies for the package.

## Step 2: Configuration

To use the @sentry/capacitor package, you need to initialize it by calling the `Sentry.init` function. This should be done as early as possible after loading the page. Here's an example of how to initialize the package in your `app.module.ts` file:

```typescript
import * as Sentry from "@sentry/capacitor";
import { init as sentryAngularInit, createErrorHandler } from "@sentry/angular";

Sentry.init({
  dsn: "__DSN__",
}, sentryAngularInit);

@NgModule({
  providers: [
    {
      provide: ErrorHandler,
      useValue: createErrorHandler(),
    },
  ],
})
export class AppModule { }
```

Make sure to replace `__DSN__` with your actual Sentry DSN (Data Source Name).

## Step 3: Usage

Once the @sentry/capacitor package is initialized, you can use the exported functions from `@sentry/capacitor` to set context information, send manual events, and capture exceptions.

Here are some examples of how to use the package:

```javascript
import * as Sentry from '@sentry/capacitor';

// Set user information, tags, and extras
Sentry.configureScope(scope => {
  scope.setExtra('battery', 0.7);
  scope.setTag('user_mode', 'admin');
  scope.setUser({ id: '4711' });
});

// Add a breadcrumb for future events
Sentry.addBreadcrumb({
  message: 'My Breadcrumb',
});

// Capture exceptions, messages, or manual events
Sentry.captureMessage('Hello, world!');
Sentry.captureException(new Error('Good bye'));
Sentry.captureEvent({
  message: 'Manual',
  stacktrace: [
    // ...
  ],
});
```

Remember that these functions will not perform any action until you have called `Sentry.init()`.

## Step 4: Resources

If you need further assistance or information, you can refer to the following resources:

- [Official Documentation](https://docs.sentry.io/platforms/javascript/guides/capacitor/): The official documentation provides detailed guides and explanations on using Sentry with Capacitor.
- [GitHub Discussions](https://github.com/getsentry/sentry-capacitor/discussions): The GitHub Discussions page is a place to ask questions, share ideas, and engage with the Sentry community.
- [Discord Chat](https://discord.gg/PXa5Apfe7K): Join the Sentry Discord chat to connect with other developers and get real-time support.
- [Stack Overflow](https://stackoverflow.com/questions/tagged/sentry): Stack Overflow is a great platform to search for existing questions and ask new ones related to Sentry.
- [Twitter](https://twitter.com/getsentry): Follow the Sentry Twitter account for updates, news, and announcements.

That's it! You have successfully learned how to use the @sentry/capacitor package in your Capacitor applications. Enjoy better error tracking and monitoring with Sentry!