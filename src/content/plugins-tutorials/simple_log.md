---
title: "Using @isubasinghe/simple_log"
description: "A tutorial on how to use the @isubasinghe/simple_log package for logging in your JavaScript projects."
created_at: "2022-05-10"
published: true
slug: simple_log
---

# Using @isubasinghe/simple_log

In this tutorial, we will learn how to use the `@isubasinghe/simple_log` package to add logging functionality to your JavaScript projects.

## Installation

To get started, you need to install the `@isubasinghe/simple_log` package. You can do this by running the following command:

```
npm install @isubasinghe/simple_log
```

## Usage

After installing the package, you can import it into your JavaScript file and start using it. Here's an example of how to log a message using `simple_log`:

```javascript
import { simpleLog } from '@isubasinghe/simple_log';

simpleLog('Hello, world!');
```

The `simpleLog` function takes a message as its parameter and logs it to the console.

## Logging Levels

`simple_log` supports different logging levels such as `info`, `debug`, `warn`, and `error`. You can specify the logging level by passing it as a second parameter to the `simpleLog` function. Here's an example:

```javascript
import { simpleLog } from '@isubasinghe/simple_log';

simpleLog('This is an info message', 'info');
simpleLog('This is a debug message', 'debug');
simpleLog('This is a warning message', 'warn');
simpleLog('This is an error message', 'error');
```

By default, the logging level is set to `info`.

## Configuring Logging Level

If you want to change the logging level, you can do so by using the `setLogLevel` function. Here's an example:

```javascript
import { setLogLevel } from '@isubasinghe/simple_log';

// Set the logging level to debug
setLogLevel('debug');
```

## Conclusion

In this tutorial, we learned how to use the `@isubasinghe/simple_log` package to add logging functionality to your JavaScript projects. We saw how to install the package, log messages at different levels, and configure the logging level. Logging is an essential part of any application for debugging and monitoring purposes, and `simple_log` provides a simple and straightforward way to implement logging in your projects.