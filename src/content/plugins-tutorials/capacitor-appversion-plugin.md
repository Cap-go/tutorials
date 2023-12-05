---
title: "Using the capacitor-appversion-plugin Package"
description: "A comprehensive tutorial on how to use the capacitor-appversion-plugin package in your Capacitor app."
created_at: "2022-10-20"
published: true
slug: capacitor-appversion-plugin
---

# Using the capacitor-appversion-plugin Package

In this tutorial, we will explore how to use the capacitor-appversion-plugin package to access and display the app version information in your Capacitor app.

## Prerequisites

Before proceeding with the tutorial, make sure you have the following:

1. Capacitor installed globally on your system.
2. An existing Capacitor app project set up.

If you haven't installed Capacitor yet, run the following command to install it globally:

```bash
npm install -g @capacitor/core @capacitor/cli
```

## Step 1: Add the Plugin to Your Project

First, navigate to your Capacitor app project directory and install the capacitor-appversion-plugin package from npm:

```bash
npm install capacitor-appversion-plugin
```

Next, import the plugin in your project's main file (`index.ts` or `main.ts`):

```ts
import 'capacitor-appversion-plugin';
```

## Step 2: Accessing App Version Information

To access the app version information, you can call the `getAppVersion` method provided by the `capacitor-appversion-plugin` package. Typically, you would do this in a component where you want to display the app version.

Here's an example of how to use the `getAppVersion` method in an Angular component:

```ts
import { Component } from '@angular/core';
import { Plugins } from '@capacitor/core';

const { AppVersionPlugin } = Plugins;

@Component({
  selector: 'app-version',
  template: `
    <p>App Version: {{ appVersion }}</p>
  `,
})
export class AppVersionComponent {
  appVersion: string;

  constructor() {}

  async ngOnInit() {
    const { version } = await AppVersionPlugin.getAppVersion();
    this.appVersion = version;
  }
}
```

In this example, we import the `AppVersionPlugin` from `@capacitor/core` and use the `getAppVersion` method to retrieve the app version. The version is then assigned to the `appVersion` property, which can be displayed in the template.

## Step 3: Displaying App Version Information

Now that we have the app version, we can display it in the template. In the previous example, we used `{{ appVersion }}` inside the template to display the app version.

Make sure to add the `AppVersionComponent` to the appropriate module and include it in your app's routing configuration if necessary.

## Conclusion

Congratulations! You have successfully integrated the capacitor-appversion-plugin package into your Capacitor app and displayed the app version information. You can now leverage this information for various purposes, such as showing the app version in an about page or settings screen.

Remember to consult the capacitor-appversion-plugin documentation for additional functionality and customization options.

That's it for this tutorial. Happy coding!

---
Please note that the information provided in this blog post is accurate as of the created_at date. Make sure to refer to the official documentation or the package's GitHub repository for the most up-to-date information and any potential changes.