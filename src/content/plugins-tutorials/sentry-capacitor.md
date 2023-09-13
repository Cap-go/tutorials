# Using @sentry/capacitor package - Markdown Tutorial

This tutorial will guide you on how to use the `@sentry/capacitor` package for error monitoring and reporting in your Capacitor applications. 

## Installation

First, you need to install the `@sentry/capacitor` package along with the `@sentry/angular` package. You can use the following command to install the packages using yarn:

```bash
yarn add @sentry/capacitor @sentry/angular --exact
```

## Initialization

To use the SDK, you need to call the `Sentry.init` function as early as possible after loading the page. This will initialize the SDK and hook into the environment. You can also pass the `sentryAngularInit` function as the second parameter to enable Angular integration.

```typescript
// app.module.ts

import * as Sentry from "@sentry/capacitor";
import { init as sentryAngularInit, createErrorHandler } from "@sentry/angular";

// Init by passing the sibling SDK's init as the second parameter.
Sentry.init({
  dsn: "__DSN__",
}, sentryAngularInit);

// Attach the Sentry ErrorHandler
@NgModule({
  providers: [
    {
      provide: ErrorHandler,
      useValue: createErrorHandler(),
    },
  ],
})
```

## Setting Context Information

You can use the `configureScope` function of `@sentry/capacitor` to set context information such as user information, tags, and extra data. Here's an example:

```javascript
import * as Sentry from '@sentry/capacitor';

Sentry.configureScope(scope => {
  scope.setExtra('battery', 0.7);
  scope.setTag('user_mode', 'admin');
  scope.setUser({ id: '4711' });
});
```

## Adding Breadcrumbs

Breadcrumbs are used to track the user's actions before an error occurred. You can add a breadcrumb using the `addBreadcrumb` function of `@sentry/capacitor`. Here's an example:

```javascript
import * as Sentry from '@sentry/capacitor';

Sentry.addBreadcrumb({
  message: 'My Breadcrumb',
  // ...
});
```

## Capturing Errors and Events

You can capture exceptions, messages, or manual events using the `captureMessage`, `captureException`, and `captureEvent` functions of `@sentry/capacitor`. Here are some examples:

```javascript
import * as Sentry from '@sentry/capacitor';

Sentry.captureMessage('Hello, world!');

Sentry.captureException(new Error('Good bye'));

Sentry.captureEvent({
  message: 'Manual',
  stacktrace: [
    // ...
  ],
});
```

That's it! You have now learned how to use the `@sentry/capacitor` package for