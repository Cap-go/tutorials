---
title: "Using the capacitor-status-bar-translucent package"
description: "A tutorial on how to use the capacitor-status-bar-translucent package in your Capacitor project."
created_at: "2021-12-01"
published: true
slug: capacitor-status-bar-translucent
---

# Using the capacitor-status-bar-translucent package
  
In this tutorial, we will learn how to use the capacitor-status-bar-translucent package in a Capacitor project. The capacitor-status-bar-translucent package allows you to customize the appearance and behavior of the status bar in your mobile application.

## Installation

To get started, make sure you have Capacitor installed globally. If not, you can install it by running the following command:

```
npm install -g @capacitor/cli
```

Next, navigate to your Capacitor project and install the capacitor-status-bar-translucent package:

```
npm install capacitor-status-bar-translucent
```

## Importing the package

To use the capacitor-status-bar-translucent package in your project, you need to import it in your main TypeScript file. Open the `src/main.ts` file and add the following import statement at the top:

```typescript
import 'capacitor-status-bar-translucent';
```

## Configuring the status bar

The capacitor-status-bar-translucent package provides a set of methods to configure the status bar. You can customize its color, visibility, and behavior based on your application requirements. 

Here is an example showing how to make the status bar translucent:

```typescript
import { StatusBarTranslucent } from 'capacitor-status-bar-translucent';

StatusBarTranslucent.translucent({ styleLightContent: true });
```

In this example, we imported the `StatusBarTranslucent` class from the `capacitor-status-bar-translucent` package and called the `translucent` method to make the status bar translucent. The `styleLightContent` option is used to set the status bar text color to light.

## Conclusion

In this tutorial, we learned how to use the capacitor-status-bar-translucent package to customize the appearance and behavior of the status bar in a Capacitor project. We explored the installation process, importing the package, and configuring the status bar.

Now you can enhance your mobile application by tweaking the status bar according to your design requirements using the capacitor-status-bar-translucent package.

I hope you found this tutorial helpful. Happy coding!