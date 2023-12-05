---
title: "Tutorial: Using the Capacitor Piano DMP Package"
description: "This tutorial will guide you on how to use the Capacitor Piano DMP package to add piano functionalities to your Capacitor app."
created_at: "2022-03-18"
published: true
slug: "capacitor-piano-dmp"
---

# Tutorial: Using the Capacitor Piano DMP Package

In this tutorial, we will walk through the steps to add piano functionalities to your Capacitor app using the `capacitor-piano-dmp` package. The Capacitor Piano DMP package allows you to easily integrate a piano keyboard into your app.

## Prerequisites

Before we get started, make sure you have the following:

- Node.js and npm installed on your machine
- A Capacitor app set up ([Capacitor documentation](https://capacitorjs.com/docs/getting-started))

## Step 1: Install the Capacitor Piano DMP package

First, let's install the `capacitor-piano-dmp` package by running the following command in your project's root directory:

```bash
npm install capacitor-piano-dmp
```

This will download and add the package to your project's dependencies.

## Step 2: Import the Piano DMP plugin

Next, we need to import the Piano DMP plugin in our Capacitor app. Open the `src/app/main.ts` file and add the following import statement at the top:

```typescript
import 'capacitor-piano-dmp';
```

## Step 3: Add the Piano DMP component

Now, let's add the Piano DMP component to one of your app's pages. In this example, we will add it to the `home` page.

Open the `src/app/pages/home/home.html` file and add the following code at the desired location:

```html
<capacitor-piano-dmp></capacitor-piano-dmp>
```

Save the file.

## Step 4: Register the Piano DMP plugin

Next, we need to register the Piano DMP plugin with Capacitor. Open the `src/app/main.ts` file and add the following code after importing the Piano DMP plugin:

```typescript
import { CapacitorPianoDmpPlugin } from 'capacitor-piano-dmp';

const pianoDmpPlugin = new CapacitorPianoDmpPlugin();
Capacitor.registerPlugin('CapacitorPianoDmp', pianoDmpPlugin);
```

## Step 5: Use the Piano DMP plugin

Now that we have added the piano component and registered the plugin, we can start using the Piano DMP functionalities in our app.

In the desired page's component file (e.g., `src/app/pages/home/home.ts`), you can import and use the Piano DMP plugin as follows:

```typescript
import { Plugins } from '@capacitor/core';

const { CapacitorPianoDmp } = Plugins;

// Example usage: Play a piano note
CapacitorPianoDmp.playNote({
  note: 'C4',
  duration: 1000, // milliseconds
});
```

This example plays the note 'C4' on the piano for 1 second.

## Conclusion

Congratulations! You have successfully added the Capacitor Piano DMP package to your Capacitor app and learned how to use its functionalities. You can now explore more features of the `capacitor-piano-dmp` package and incorporate them into your app according to your requirements.

Remember to refer to the package's documentation for more detailed information about its capabilities and options.

Happy coding!