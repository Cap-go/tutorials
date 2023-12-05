---
title: "Using pjamm-plugin-health Package"
description: "This tutorial will guide you through the process of using the pjamm-plugin-health package in your project."
created_at: "2022-01-28"
published: true
slug: "pjamm-plugin-health"
---

# Using pjamm-plugin-health Package

In this tutorial, we will learn how to use the `pjamm-plugin-health` package in your project. The `pjamm-plugin-health` package provides health-related functionalities that can be integrated into your application. Let's get started!

## Installation

To install the `pjamm-plugin-health` package, follow these steps:

1. Open your terminal.
2. Run the following command:

```bash
npm install pjamm-plugin-health
npx cap sync
```

## API

The `pjamm-plugin-health` package provides the following API:

### echo(options)

This method is used to echo a provided value. It takes an options object with a `value` property as a parameter. Here is an example of how to use the `echo` method:

```typescript
import { echo } from 'pjamm-plugin-health';

const result = await echo({ value: 'Hello World' });
console.log(result.value); // Output: 'Hello World'
```

That's it! You have now successfully installed and used the `pjamm-plugin-health` package in your project.

Happy coding!