---
title: "Using capacitor-mitek package"
description: "A tutorial on how to use the @okode/capacitor-mitek package for Capacitor"
created_at: "2022-01-01"
published: true
slug: "capacitor-mitek"
---

# Using capacitor-mitek package

This tutorial will guide you on how to use the `@okode/capacitor-mitek` package for Capacitor.

## Installation

To begin, install the package using npm:

```bash
npm install @okode/capacitor-mitek
```

Then, synchronize the project with Capacitor:

```bash
npx cap sync
```

## API

The `@okode/capacitor-mitek` package provides the following API:

### echo(options)

This method allows you to echo a given value.

#### Parameters

- `options`: An object with a `value` property of type string.

#### Returns

A promise that resolves with an object containing the echoed value.

## Example Usage

Here's an example of how to use the `echo` method from the `@okode/capacitor-mitek` package:

```typescript
import { echo } from '@okode/capacitor-mitek';

async function testEcho() {
  const response = await echo({ value: 'Hello, world!' });
  console.log(response.value); // Output: Hello, world!
}

testEcho();
```

That's it! Now you can start using the `@okode/capacitor-mitek` package in your Capacitor project.

Remember to consult the official documentation for more details on the available methods and configurations.

Happy coding!
