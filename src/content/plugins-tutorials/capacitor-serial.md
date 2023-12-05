---
title: "Using @adeunis/capacitor-serial Package"
description: "This tutorial will guide you on how to use the @adeunis/capacitor-serial package in your Capacitor app."
created_at: "2021-09-24"
published: true
slug: "capacitor-serial"
---

# Using @adeunis/capacitor-serial Package

In this tutorial, we will learn how to use the `@adeunis/capacitor-serial` package in a Capacitor app.

## Installation

To start using the `@adeunis/capacitor-serial` package, we need to install it first. Open your terminal and navigate to your Capacitor project's root directory. Run the following command to install the package:

```bash
npm install @adeunis/capacitor-serial
```

## Importing the Package

Next, we need to import the `@adeunis/capacitor-serial` package into our project. Open the file where you want to use the `Serial` functionality, and add the following import statement:

```typescript
import { Serial } from '@adeunis/capacitor-serial';
```

## Using the Serial API

The `@adeunis/capacitor-serial` package provides a set of APIs for interacting with the device's serial port. Here are a few common use cases:

1. **Opening a Serial Connection**

   To open a serial connection, you can use the `Serial.open` method. Here's an example:

   ```typescript
   const options = {
     baudRate: 9600,
     dataBits: 8,
     stopBits: 1,
     parity: 'none',
     flowControl: 'none',
   };

   Serial.open(options)
     .then(() => {
       console.log('Serial connection opened');
     })
     .catch((error) => {
       console.error('Failed to open serial connection:', error);
     });
   ```

2. **Reading Data from the Serial Port**

   To read data from the serial port, you can use the `Serial.addListener` method. Here's an example:

   ```typescript
   const listener = Serial.addListener('data', (data) => {
     console.log('Received data:', data);
   });

   // Remove the listener when you're done
   listener.remove();
   ```

3. **Writing Data to the Serial Port**

   To write data to the serial port, you can use the `Serial.write` method. Here's an example:

   ```typescript
   const data = 'Hello, World!';

   Serial.write(data)
     .then(() => {
       console.log('Data written to serial port');
     })
     .catch((error) => {
       console.error('Failed to write data to serial port:', error);
     });
   ```

4. **Closing the Serial Connection**

   To close the serial connection, you can use the `Serial.close` method. Here's an example:

   ```typescript
   Serial.close()
     .then(() => {
       console.log('Serial connection closed');
     })
     .catch((error) => {
       console.error('Failed to close serial connection:', error);
     });
   ```

## Conclusion

In this tutorial, we learned how to use the `@adeunis/capacitor-serial` package in a Capacitor app. We covered the installation process, importing the package, and using the provided APIs for opening, reading, writing, and closing serial connections.

Now you can start integrating serial communication into your Capacitor app using the `@adeunis/capacitor-serial` package. Happy coding!