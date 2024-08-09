```md
---
title: Using @andresayac/capacitor-ir-transmitter Package Tutorial
description: This markdown tutorial will guide you through using the @andresayac/capacitor-ir-transmitter package in your Capacitor project.
created_at: 2023-09-25
published: true
slug: capacitor-ir-transmitter
---

# Using @andresayac/capacitor-ir-transmitter Package Tutorial

In this tutorial, we will learn how to integrate the @andresayac/capacitor-ir-transmitter package into your Capacitor project for IR transmission.

## Installation

To get started, install the package using npm:

```bash
npm i @andresayac/capacitor-ir-transmitter
npx cap sync
```

## Usage

### Transmitting IR Signal

You can use the `transmitIR` function to send IR signals. Here's how you can do it:

```javascript
import { transmitIR } from '@andresayac/capacitor-ir-transmitter';

// Define the IR signal parameters
const options = {
  frequency: 38000, // Frequency of the IR signal
  address: 123,      // Address of the IR signal
  command: 456       // Command to be transmitted
};

// Transmit the IR signal
transmitIR(options)
  .then(() => {
    console.log('IR Signal transmitted successfully!');
  })
  .catch((error) => {
    console.error('Error transmitting IR signal:', error);
  });
```

That's it! You have successfully integrated the @andresayac/capacitor-ir-transmitter package into your Capacitor project for IR transmission.
```
