# Using the capacitor-sys-cpu Package

In this tutorial, we will learn how to use the `capacitor-sys-cpu` package in your Capacitor app. The `capacitor-sys-cpu` package provides a set of APIs to interact with the device's CPU information. 

To get started, follow the steps below:

## Step 1: Installation

To install the `capacitor-sys-cpu` package, open your terminal and navigate to your Capacitor project directory. Run the following command:

```bash
npm install capacitor-sys-cpu
```

## Step 2: Adding the Plugin

After installing the package, you need to add the plugin to your project. Open the `capacitor.config.json` file located in the root of your project and add the following line under the `"plugins"` key:

```json
{
  "plugins": {
    "SysCPU": {
      "electron": {
        "packageName": "capacitor-sys-cpu-electron"
      }
    }
  }
}
```

## Step 3: Importing and Initializing

Next, you need to import and initialize the `capacitor-sys-cpu` package in your code. Open the file where you want to use the CPU information and add the following lines:

```typescript
import { Plugins } from '@capacitor/core';

const { SysCPU } = Plugins;
```

## Step 4: Getting CPU Information

Now, you can use the `SysCPU` plugin to retrieve the CPU information. Add the following code to your file:

```typescript
const cpuInfo = await SysCPU.getCPUInfo();
console.log(cpuInfo);
```

The `getCPUInfo` method returns an object containing information about the CPU of the device. You can access the CPU information like the number of cores, architecture, model name, and more.

## Step 5: Rendering CPU Information

Finally, you can render the CPU information on your app's UI. Update your template or view to display the CPU information retrieved from the `SysCPU` plugin.

```html
<p>Number of Cores: {{ cpuInfo.cores }}</p>
<p>Architecture: {{ cpuInfo.architecture }}</p>
<p>Model Name: {{ cpuInfo.modelName }}</p>
<!-- Add more fields as per your requirement -->
```

And that's it! You have successfully integrated the `capacitor-sys-cpu` package into your Capacitor app and retrieved and displayed the CPU information.

---

Frontmatter of the Blog:

---
title: "Getting Started with capacitor-sys-cpu"
description: "Learn how to use the capacitor-sys-cpu package to retrieve and display CPU information in your Capacitor app."
created_at: "2021-09-27"
published: true
slug: "capacitor-sys-cpu"

---