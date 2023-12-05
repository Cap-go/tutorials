---
title: "Using capacitor-simple-contact Package"
description: "In this tutorial, we will learn how to use the capacitor-simple-contact package to access and manage contacts on a device using Capacitor."
created_at: "2021-11-02"
published: true
slug: "capacitor-simple-contact"
---

# Using capacitor-simple-contact Package

In this tutorial, we will learn how to use the capacitor-simple-contact package to access and manage contacts on a device using Capacitor.

## Prerequisites

Before getting started, make sure you have the following installed:

- Capacitor CLI: You can install it globally by running the command `npm install -g @capacitor/cli`.
- Capacitor Core: You can install it globally by running the command `npm install -g @capacitor/core`.
- Capacitor Simple Contact Plugin: You can install it locally by running the command `npm install capacitor-simple-contact`.

## Step 1: Generate Capacitor Plugin

First, we need to generate a Capacitor plugin using the `npx cap plugin:generate` command. Provide the necessary information such as the plugin name, plugin ID, class name, description, git repository, author, license, and confirm the creation of the package.json file.

```shell
$ npx cap plugin:generate
*  Creating new Capacitor plugin
? Plugin npm name (kebab-case. ex: capacitor-plugin-example): capacitor-simple-contact
? Plugin id (domain-style syntax. ex: com.mycompany.plugins.example) com.yourcompany.plugins.simplecontact
? Plugin class name (ex: Example) SimpleContact
? description: Access and manage Contacts on the device
? git repository: https://github.com/yourcompany/capacitor-simple-contact.git
? author: Your Name
? license: MIT
? package.json will be created, do you want to continue? Yes

√ Adding plugin files in 67.90ms
√ Writing package.json in 1.49ms
√ Installing NPM dependencies in 13.28s
[info] Your Capacitor plugin was created at capacitor-simple-contact
```

## Step 2: Implement the Functions

Next, we need to implement the functions in our Capacitor plugin. Open the generated plugin folder and locate the `src` directory. Inside the `src` directory, you will find the `definitions.ts` file.

In the `definitions.ts` file, add the following interface definition for the plugin functions:

```typescript
export interface SimpleContactPluginPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
  getContacts(filter: string): Promise<{ results: any[] }>;
}
```

The `getContacts` function is responsible for retrieving contacts based on a filter.

## Step 3: Implement Web Capacitor Plugin Code

To implement the plugin code for the web platform, follow the Capacitor Web/PWA Plugin Guide, which provides detailed instructions and examples.

## Step 4: Implement iOS Capacitor Plugin Code

To implement the plugin code for the iOS platform, follow the Capacitor iOS Plugin Guide, which provides detailed instructions and examples.

## Step 5: Implement Android Capacitor Plugin Code

To implement the plugin code for the Android platform, follow the Capacitor Android Plugin Guide, which provides detailed instructions and examples.

## Step 6: Test the Plugin Locally

To test the plugin locally while developing it, link the plugin folder to your app project using the `npm link` command.

1. Run `npm link` within the plugin folder to create a global symlink for the plugin.
2. Run `npm link capacitor-simple-contact` within your app project folder to link the plugin to your app.

```shell
$ cd path/to/capacitor-simple-contact
$ npm link

$ cd path/to/your-app
$ npm link capacitor-simple-contact
```

## Conclusion

In this tutorial, we have learned how to use the capacitor-simple-contact package to access and manage contacts on a device using Capacitor. We went through the process of generating a Capacitor plugin, implementing the necessary functions, and testing the plugin locally.

Feel free to explore the Capacitor documentation for more information on creating and using plugins in your Capacitor projects.