---
title: "Using @falconeta/capacitor-plugin-matter Package"
description: "This tutorial will guide you through the process of using the @falconeta/capacitor-plugin-matter package to handle the Matter Application protocol."
created_at: "2022-10-10"
published: true
slug: "capacitor-matter"
---

# Using @falconeta/capacitor-plugin-matter Package

This tutorial will guide you through the process of using the `@falconeta/capacitor-plugin-matter` package to handle the Matter Application protocol.

## Installation

To begin, you need to install the `@falconeta/capacitor-plugin-matter` package. Open your terminal and run the following command:

```bash
npm install @falconeta/capacitor-plugin-matter
```

After the installation is complete, sync the Capacitor plugins by running the following command:

```bash
npx cap sync
```

## Configuration

Before using the plugin, you need to configure it with the required settings. The `configure` method is used for this purpose. Here is an example of how to configure the plugin:

```javascript
import { CapacitorPluginMatter } from '@falconeta/capacitor-plugin-matter';

const plugin = new CapacitorPluginMatter();

// Configure the plugin
plugin.configure({
  deviceControllerKey: "your_device_controller_key",
  caRootCert: "your_ca_root_cert",
  fabricId: "your_fabric_id",
  vendorId: 12345,
});
```

Make sure to replace the placeholder values with your actual device controller key, CA root certificate, fabric ID, and vendor ID.

## Commissioning

The plugin provides two methods for commissioning devices: `qrCodeCommissioning` and `manualCodeCommissioning`.

### QR Code Commissioning

To commission a device using a QR code, use the `qrCodeCommissioning` method. Here is an example:

```javascript
// Commission a device using QR code
plugin.qrCodeCommissioning({
  deviceId: "your_device_id",
  qrCodeId: "your_qr_code_id",
  ssid: "your_ssid",
  ssidPassword: "your_ssid_password",
}).then((result) => {
  console.log(`Device Type: ${result.deviceType}`);
}).catch((error) => {
  console.error(error);
});
```

Replace the placeholders with the actual device ID, QR code ID, SSID, and SSID password.

### Manual Code Commissioning

To commission a device using a manual code, use the `manualCodeCommissioning` method. Here is an example:

```javascript
// Commission a device using manual code
plugin.manualCodeCommissioning({
  deviceId: "your_device_id",
  manualCode: "your_manual_code",
}).then((result) => {
  console.log(`Device Type: ${result.deviceType}`);
}).catch((error) => {
  console.error(error);
});
```

Replace the placeholders with the actual device ID and manual code.

## Additional Methods

Aside from commissioning devices, the plugin provides various other methods for interacting with Matter devices.

### Get Certificates

To retrieve the certificates of a device, use the `getCerts` method. Here is an example:

```javascript
// Get certificates of a device
plugin.getCerts().then((certs) => {
  console.log(certs);
}).catch((error) => {
  console.error(error);
});
```

### Execute Commands

To execute commands on a device, use the `commandOnOff` method. Here is an example:

```javascript
// Execute command on a device
plugin.commandOnOff({
  deviceId: "your_device_id",
  on: true,
}).then(() => {
  console.log("Command executed successfully");
}).catch((error) => {
  console.error(error);
});
```

### Read Attribute

To read an attribute of a device, use the `readAttribute` method. Here is an example:

```javascript
// Read attribute of a device
plugin.readAttribute({
  deviceId: "your_device_id",
  attributeId: 123,
}).then((value) => {
  console.log(`Attribute Value: ${value}`);
}).catch((error) => {
  console.error(error);
});
```

### Subscribe to Attribute Updates

To subscribe to attribute updates of a device, use the `subscribeAttribute` method. Here is an example:

```javascript
// Subscribe to attribute updates of a device
plugin.subscribeAttribute({
  deviceId: "your_device_id",
  attributeId: 123,
}).then(() => {
  console.log("Subscribed to attribute updates");
}).catch((error) => {
  console.error(error);
});
```

### Open Commissioning Window

To open the commissioning window of a device, use the `openCommissioningWindow` method. Here is an example:

```javascript
// Open commissioning window of a device
plugin.openCommissioningWindow({
  deviceId: "your_device_id",
}).then(() => {
  console.log("Commissioning window opened");
}).catch((error) => {
  console.error(error);
});
```

### Remove Fabric

To remove a fabric from the device, use the `removeFabric` method. Here is an example:

```javascript
// Remove fabric from a device
plugin.removeFabric({
  deviceId: "your_device_id",
  fabricId: "your_fabric_id",
}).then(() => {
  console.log("Fabric removed");
}).catch((error) => {
  console.error(error);
});
```

### Remove All Fabrics

To remove all fabrics from the device, use the `removeAllFabric` method. Here is an example:

```javascript
// Remove all fabrics from a device
plugin.removeAllFabric({
  deviceId: "your_device_id",
}).then(() => {
  console.log("All fabrics removed");
}).catch((error) => {
  console.error(error);
});
```

## Event Listeners

The plugin supports event listeners for various events. You can use the `addListener` method to register event listeners. Here is an example:

```javascript
// Register event listener for device events
plugin.addListener('deviceEvent', (event) => {
  console.log(event);
});
```

Replace `'deviceEvent'` with the specific event you want to listen to.

## Conclusion

This tutorial provided an overview of how to use the `@falconeta/capacitor-plugin-matter` package to handle the Matter Application protocol. You learned about installation, configuration, commissioning devices, executing commands, reading attributes, subscribing to attribute updates, and more.

Feel free to explore the package's API documentation for more details on available methods, options, and interfaces.

Happy coding!