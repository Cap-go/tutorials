---
title: "Using @aparajita/capacitor-logger Package"
description: "A step-by-step tutorial on how to use the @aparajita/capacitor-logger package to enhance logging in your Capacitor apps."
created_at: "2022-10-20"
published: true
slug: "capacitor-logger"
---

# Using @aparajita/capacitor-logger Package

In this tutorial, we will learn how to use the `@aparajita/capacitor-logger` package to enhance logging in your Capacitor apps. This package provides a flexible and powerful logger class that you can use to log messages with different levels, tags, and labels.

## Installation

To get started, you need to install the `@aparajita/capacitor-logger` package in your Capacitor project. You can use npm or yarn to install the package:

```shell
npm install @aparajita/capacitor-logger
```

or

```shell
yarn add @aparajita/capacitor-logger
```

## Creating a Logger Instance

Once the package is installed, you can create an instance of the logger with your desired tag or label. For example, in TypeScript:

```typescript
import { Logger } from '@aparajita/capacitor-logger';

const logger = new Logger('MyApp');
```

## Logging Messages

With the logger instance created, you can now log messages using different log levels such as `info`, `debug`, `warn`, and `error`. Here are some examples:

```typescript
logger.info('This is an info message.');

logger.debug('This is a debug message.');

logger.warn('This is a warning message.');

logger.error('This is an error message.');
```

## Adding Labels

Labels can be used to categorize and filter log messages. You can add labels to the logger instance or to individual log messages. Here's how to add labels:

```typescript
// Adding labels to the logger instance
const loggerWithLabels = new Logger('MyApp', ['tag1', 'tag2']);

// Adding labels to individual log messages
loggerWithLabels.info('Log message', ['label1', 'label2']);
```

## Setting Log Level

The logger allows you to set the log level, which determines the minimum severity level of messages to be logged. By default, the log level is set to `info`. Here's how to set the log level:

```typescript
logger.setLogLevel('debug');
```

## Conclusion

In this tutorial, we have learned how to use the `@aparajita/capacitor-logger` package to enhance logging in Capacitor apps. We covered the installation process, creating a logger instance, logging messages with different levels, adding labels, and setting the log level.

By using the `@aparajita/capacitor-logger` package, you can have more control over logging in your apps and make it easier to debug and troubleshoot issues.

Feel free to explore the documentation of the `@aparajita/capacitor-logger` package for more advanced features and options.

Happy logging!