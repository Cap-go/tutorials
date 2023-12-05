---
title: "Using the capacitor-modbus Package"
description: "A tutorial on how to use the capacitor-modbus package for Modbus communication in Capacitor apps."
created_at: "2022-01-01"
published: true
slug: capacitormodbus
---

# Using the capacitor-modbus Package

In this tutorial, we will learn how to use the capacitor-modbus package to enable Modbus communication in Capacitor apps. Modbus is a popular protocol used for communication between electronic devices in industrial automation.

## Installation

First, let's start by installing the capacitor-modbus package. Open your terminal and run the following command:

```bash
npm install capacitor-modbus
```

## Setting up the Modbus Plugin

Next, we need to set up the Modbus plugin in our Capacitor app. Open the `capacitor.config.json` file in the root directory of your Capacitor project and add the following lines:

```json
{
  "plugins": {
    "Modbus": {
      "appId": "your-app-id-here"
    }
  }
}
```

Make sure to replace `"your-app-id-here"` with your actual app ID.

## Importing the Modbus Plugin

To use the Modbus plugin in your code, import it from the `@capacitor-community/modbus` package. You can do this by adding the following line at the top of your script:

```javascript
import { Modbus } from '@capacitor-community/modbus';
```

## Initializing the Modbus Plugin

Before we can start using the Modbus plugin, we need to initialize it. Call the `Modbus.init()` function to initialize the plugin. You can do this inside your app's initialization code, usually in the `ionViewDidEnter` event or similar.

```javascript
const initModbus = async () => {
  await Modbus.init();
  console.log('Modbus plugin initialized successfully!');
};

initModbus();
```

## Using the Modbus Plugin

Once the Modbus plugin is initialized, you can use its various functions to communicate with Modbus devices. Here are some common operations:

### Reading Holding Registers

To read the values of holding registers from a Modbus device, use the `Modbus.readHoldingRegisters()` function. This function accepts the following parameters:

- `slaveAddress`: The address of the Modbus slave device.
- `startAddress`: The starting address of the holding registers to read.
- `quantity`: The number of holding registers to read.

```javascript
const readHoldingRegisters = async () => {
  const slaveAddress = 1;
  const startAddress = 0;
  const quantity = 10;

  const response = await Modbus.readHoldingRegisters({
    slaveAddress,
    startAddress,
    quantity,
  });

  console.log('Read holding registers response:', response);
};

readHoldingRegisters();
```

### Writing Single Register

To write a value to a single register of a Modbus device, use the `Modbus.writeSingleRegister()` function. This function accepts the following parameters:

- `slaveAddress`: The address of the Modbus slave device.
- `registerAddress`: The address of the register to write.
- `value`: The value to write.

```javascript
const writeSingleRegister = async () => {
  const slaveAddress = 1;
  const registerAddress = 0;
  const value = 12345;

  const response = await Modbus.writeSingleRegister({
    slaveAddress,
    registerAddress,
    value,
  });

  console.log('Write single register response:', response);
};

writeSingleRegister();
```

## Conclusion

In this tutorial, we have learned how to use the capacitor-modbus package to enable Modbus communication in Capacitor apps. We covered the installation process, setting up the Modbus plugin, importing and initializing the plugin, as well as performing common Modbus operations like reading holding registers and writing single registers.

Now you can utilize the power of Modbus in your Capacitor apps. Happy coding!
