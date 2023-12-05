---
title: "Using TSL-ASCII Package"
description: "A tutorial on how to use the TSL-ASCII package to interface with TSL's ASCII protocol."
created_at: "2022-10-01"
published: true
slug: tsl-ascii
---

# Using TSL-ASCII Package

In this tutorial, we will learn how to use the TSL-ASCII package to interface with TSL's ASCII protocol. The TSL-ASCII package is a Capacitor plugin that provides an easy way to communicate with TSL devices using the ASCII protocol.

## Prerequisites

Before we begin, make sure you have the following requirements:

- Node.js and npm installed on your machine
- Capacitor installed globally
- Access to a TSL device that supports the ASCII protocol

## Step 1: Create a Capacitor Project

First, let's create a new Capacitor project by running the following command:

```bash
npx @capacitor/cli create
```

Follow the prompts and choose the appropriate options for your project.

## Step 2: Install the TSL-ASCII Package

Next, navigate to your project directory and install the TSL-ASCII package by running the following command:

```bash
npm install tsl-ascii
```

## Step 3: Initialize the TSL-ASCII Plugin

To use the TSL-ASCII package in your project, you need to initialize the plugin. Open the `src/main.ts` file and add the following code:

```typescript
import { registerPlugin } from '@capacitor/core';
import { TslAsciiPlugin } from 'tsl-ascii';

registerPlugin(TslAsciiPlugin);
```

## Step 4: Implement TSL-ASCII Functionality

Now that the plugin is initialized, you can start using the TSL-ASCII package to interact with your TSL device. Here are some examples of common functionality:

### Connect to a TSL Device

To connect to a TSL device, use the `connect` method provided by the TSL-ASCII package. Here is an example:

```typescript
import { TslAscii } from 'tsl-ascii';

const tsl = new TslAscii();

tsl.connect()
  .then(() => {
    console.log('Connected to TSL device');
  })
  .catch((error) => {
    console.error('Failed to connect to TSL device', error);
  });
```

### Read a Barcode

To read a barcode using the TSL device, use the `readBarcode` method. Here is an example:

```typescript
import { TslAscii } from 'tsl-ascii';

const tsl = new TslAscii();

tsl.readBarcode()
  .then((barcode) => {
    console.log('Barcode:', barcode);
  })
  .catch((error) => {
    console.error('Failed to read barcode', error);
  });
```

### Disconnect from a TSL Device

To disconnect from a TSL device, use the `disconnect` method. Here is an example:

```typescript
import { TslAscii } from 'tsl-ascii';

const tsl = new TslAscii();

tsl.disconnect()
  .then(() => {
    console.log('Disconnected from TSL device');
  })
  .catch((error) => {
    console.error('Failed to disconnect from TSL device', error);
  });
```

## Conclusion

In this tutorial, we learned how to use the TSL-ASCII package to interface with TSL's ASCII protocol. We covered the installation process, initializing the plugin, and implementing common TSL-ASCII functionality such as connecting to a TSL device and reading barcodes. Now you can start building applications that communicate with TSL devices using the ASCII protocol!

Remember to refer to the TSL-ASCII package documentation for more detailed information and additional functionality.