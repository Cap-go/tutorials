---
title: "Thermapen Bluetooth Tutorial"
description: "This tutorial will guide you through the process of using the Thermapen Bluetooth package to connect a Termapen device."
created_at: "2021-08-25"
published: true
slug: thermapen_bluetooth
---

# Thermapen Bluetooth Tutorial

This tutorial will guide you through the process of using the Thermapen Bluetooth package to connect a Termapen device.

## Step 1: Installing the Package

To get started, install the Thermapen Bluetooth package by running the following command in your terminal:

```bash
npm install thermapen-bluetooth
```

## Step 2: Importing the Package

Import the package in your JavaScript or TypeScript file using the following code:

```javascript
import ThermapenBluetooth from 'thermapen-bluetooth';
```

## Step 3: Initializing the BleClient

Before connecting to the Termapen device, you need to initialize the BleClient. Use the `Initialize()` method to do this:

```javascript
ThermapenBluetooth.BleClient.Initialize();
```

## Step 4: Connecting to the Termapen Device

Once the BleClient is initialized, you can connect to the Termapen device using the `Connect()` method:

```javascript
ThermapenBluetooth.BleClient.Connect();
```

## Step 5: Reading Temperature

After successfully connecting to the Termapen device, you can read the temperature using the `ReadTemperature()` method:

```javascript
const temperature = ThermapenBluetooth.BleClient.ReadTemperature();
console.log(`Temperature: ${temperature}`);
```

## Step 6: Disconnecting from the Termapen Device

Finally, when you're done using the Termapen device, disconnect from it using the `Disconnect()` method:

```javascript
ThermapenBluetooth.BleClient.Disconnect();
```

That's it! You've successfully learned how to use the Thermapen Bluetooth package to connect and interact with a Termapen device.