```markdown
---
"title": "Using the Demo Device Info Package"
"description": "This tutorial will guide you on how to use the demo-device-info package in your app to gather information about the device."
"created_at": "2022-03-12"
"published": true
"slug": "demo-plugins"
---

## Using the Demo Device Info Package

To use the **demo-device-info** package in your app, follow the steps below:

### Installation

First, install the **demo-device-info** package using npm:

```console
npm install --save demo-device-info
```

### Importing the Package

Next, import the **demo-device-info** package in your code:

```javascript
import DeviceInfo from 'demo-device-info';
```

### Retrieving Device Information

You can now use the available functions in **demo-device-info** to retrieve various information about the device. For example, to get the device's model, use the following code:

```javascript
const deviceModel = DeviceInfo.getModel();
console.log('Device Model:', deviceModel);
```

### Available Functions

Here are some of the common functions available in the **demo-device-info** package:

- `getBrand()`: Retrieves the device's brand.
- `getModel()`: Retrieves the device's model.
- `getBatteryLevel()`: Retrieves the current battery level of the device.

### Example

Below is an example of how you can use the **demo-device-info** package to log the device's brand, model, and battery level:

```javascript
const brand = DeviceInfo.getBrand();
const model = DeviceInfo.getModel();
const batteryLevel = DeviceInfo.getBatteryLevel();

console.log('Device Brand:', brand);
console.log('Device Model:', model);
console.log('Battery Level:', batteryLevel);
```

By following these steps, you can effectively use the **demo-device-info** package in your app to gather important information about the device.
```