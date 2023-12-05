---
title: "Using the Capacitor-Shell Package"
description: "A tutorial on how to use the Capacitor-Shell package in your Capacitor app."
created_at: "2022-09-30"
published: true
slug: "capacitor-shell"
---

# Using the Capacitor-Shell Package

In this tutorial, we will learn how to use the Capacitor-Shell package in your Capacitor app. The Capacitor-Shell package provides a minimal shell for building Capacitor apps.

To get started, make sure you have Capacitor and Capacitor-Shell installed in your project:

```bash
npm install @capacitor/core @capacitor/cli capacitor-shell
```

Once you have installed the required packages, you can use the Capacitor-Shell package to create a new app shell. Here's how you can do it:

1. Open your terminal or command prompt and navigate to your project directory.

2. Run the following command to create a new app shell:

```bash
npx capacitor-shell create
```

3. Follow the on-screen prompts to provide the necessary information for your app shell. You can specify the app name, package name, and other details. Press Enter to use the default values or provide your own.

4. After the app shell is created, navigate to the newly created directory:

```bash
cd my-app-shell
```

5. To run the app shell in a development server, use the following command:

```bash
npm start
```

This command will start a development server and open the app in your default browser.

That's it! You have successfully created an app shell using the Capacitor-Shell package. You can now start building your Capacitor app on top of this shell.

Remember to consult the official Capacitor-Shell documentation for more advanced usage and integration options.

Happy coding!