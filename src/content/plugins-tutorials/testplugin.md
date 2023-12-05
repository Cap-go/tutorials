---
title: "Using the testing-app Package"
description: "A tutorial on how to use the testing-app package for testing Capacitor plugins"
created_at: "2022-03-15"
published: true
slug: "testplugin"
---

# Using the testing-app Package

In this tutorial, we will learn how to use the testing-app package for testing Capacitor plugins. The testing-app package provides a set of tools and utilities that make it easier to write tests for Capacitor plugins.

## Installation

To get started, make sure you have Node.js and npm installed on your machine. Then, create a new project and navigate to its directory in the terminal.

Next, install the testing-app package by running the following command:

```bash
npm install testing-app --save-dev
```

## Setting up the Testing Environment

Before we can start writing tests, we need to set up the testing environment. 

1. Create a new file in your project's directory named `test.setup.ts`.

2. In `test.setup.ts`, import the necessary dependencies:

```typescript
import { capacitor, capacitorTesting } from 'testing-app';
```

3. Set up the testing environment by calling the `capacitorTesting.setup()` function:

```typescript
capacitorTesting.setup();
```

## Writing Tests

Now that the testing environment is set up, we can start writing tests for our Capacitor plugins. 

1. Create a new file in your project's directory named `example.test.ts` (replace `example` with the name of your plugin).

2. In `example.test.ts`, import the necessary dependencies:

```typescript
import { capacitor, Capacitor, CapacitorTestingUtils } from 'testing-app';
```

3. Write your tests using the testing utilities provided by the testing-app package. For example, you can test a plugin function as follows:

```typescript
describe('ExamplePlugin', () => {
  it('should return the correct result', async () => {
    const result = await CapacitorTestingUtils.runAction<ReturnType, Args>(
      Capacitor.Plugins.ExamplePlugin.exampleFunction,
      { arg1: 'value1', arg2: 'value2' },
    );
    expect(result).toEqual('expected result');
  });
});
```

## Running Tests

To run your tests, use the testing framework of your choice (such as Jest or Mocha) and execute the test files.

For example, if you are using Jest, run the following command in your project's directory:

```bash
npx jest
```

That's it! You now know how to use the testing-app package for testing Capacitor plugins. Happy testing!

Remember to consult the [testing-app documentation](https://github.com/testing-app/testing-app) for more information and advanced usage.

**Note:** It is important to ensure that your tests cover all the functionality of your Capacitor plugins to ensure a robust and reliable plugin.

