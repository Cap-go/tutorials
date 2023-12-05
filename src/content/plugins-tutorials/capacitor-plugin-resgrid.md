---
title: "Using capacitor-plugin-resgrid"
description: "A tutorial on how to use the capacitor-plugin-resgrid package"
created_at: "2021-12-15"
published: true
slug: "capacitor-plugin-resgrid"
---

# Using capacitor-plugin-resgrid

This tutorial will guide you through the process of using the capacitor-plugin-resgrid package in your Ionic application.

## Getting Started

### 1. Install Capacitor Core and CLI

Before we can use the capacitor-plugin-resgrid package, we need to install Capacitor Core and CLI globally. Open your terminal and run the following command:

```bash
npm install -g @capacitor/core @capacitor/cli
```

### 2. Create a New Capacitor Project

Next, create a new Capacitor project. Navigate to your project's directory and run the following command:

```bash
npx cap init
```

Follow the prompts to set up your project.

### 3. Add the Capacitor Plugin

To add the capacitor-plugin-resgrid package to your project, run the following command:

```bash
npm install capacitor-plugin-resgrid
```

### 4. Sync the Project with Capacitor

After adding the plugin, sync your project with Capacitor by running the following command:

```bash
npx cap sync
```

### 5. Usage

Once you have added the capacitor-plugin-resgrid package and synced your project with Capacitor, you can start using it in your code.

Here's an example of how to import the plugin and call its methods:

```typescript
import { Plugins } from '@capacitor/core';

const { ResgridPlugin } = Plugins;

// Example usage of the plugin
const result = await ResgridPlugin.someMethod();
console.log(result);
```

Replace `someMethod()` with the actual method you want to use from the capacitor-plugin-resgrid package.

## Conclusion

In this tutorial, we have learned how to install and use the capacitor-plugin-resgrid package in an Ionic project. Now you can leverage the capabilities provided by this plugin in your own applications.

Remember to refer to the official documentation of the capacitor-plugin-resgrid package for more detailed information on its usage and available methods.