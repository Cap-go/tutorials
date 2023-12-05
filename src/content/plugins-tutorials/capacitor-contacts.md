---
title: "Using @xofttion-enterprise/capacitor-contacts Package"
description: "A tutorial on how to use the @xofttion-enterprise/capacitor-contacts package to access and manage contacts on a device."
created_at: "2022-10-30"
published: true
slug: "capacitor-contacts"
---

# Using @xofttion-enterprise/capacitor-contacts Package

In this tutorial, we will explore how to use the @xofttion-enterprise/capacitor-contacts package to access and manage contacts on a device.

## Prerequisites

Before getting started, make sure you have the following installed:

- Node.js
- Capacitor CLI (can be installed by running `npm install -g @capacitor/cli`)
- @xofttion-enterprise/capacitor-contacts package (can be installed by running `npm install @xofttion-enterprise/capacitor-contacts`)

## Step 1: Generating a Capacitor Plugin

First, let's generate a Capacitor plugin for our contacts functionality.

1. Open your terminal and navigate to your project directory.
2. Run the following command to generate a new Capacitor plugin:

   ```bash
   $ npx cap plugin:generate
   ```

3. You will be prompted to provide details for your plugin:

   - Plugin npm name (kebab-case. ex: capacitor-plugin-example): @xofttion-enterprise/capacitor-contacts
   - Plugin id (domain-style syntax. ex: com.mycompany.plugins.example): com.yourcompany.plugins.contacts
   - Plugin class name (ex: Example): Contacts
   - Description: Access and manage Contacts on the device
   - Git repository: [repository-url]
   - Author: [your-name]
   - License: [license-type]
   - Confirm that package.json will be created: Yes

4. The plugin files will be created in the specified directory. Make sure to navigate to the newly created plugin folder.

## Step 2: Implementing Contact Functions

Next, we will implement the necessary functions to access and manage contacts in our Capacitor plugin.

1. Open the `src/definitions.ts` file in your Capacitor plugin project.

2. Update the `ContactsPluginPlugin` interface to include the desired contact functions. For example:

   ```typescript
   export interface ContactsPluginPlugin {
     echo(options: { value: string }): Promise<{ value: string }>;
     getContacts(filter: string): Promise<{ results: any[] }>;
   }
   ```

   The `getContacts` function is used to retrieve contacts based on a filter.

3. Depending on your target platform (web, iOS, Android), you will need to implement the contact functions in the corresponding files.

   - For web, refer to the [Capacitor Web/PWA Plugin Guide](https://capacitorjs.com/docs/plugins/web).
   - For iOS, refer to the [Capacitor iOS Plugin Guide](https://capacitorjs.com/docs/plugins/ios).
   - For Android, refer to the [Capacitor Android Plugin Guide](https://capacitorjs.com/docs/plugins/android).

## Step 3: Testing Locally

To test the @xofttion-enterprise/capacitor-contacts package locally while developing it, you can link the plugin folder to your app project using the npm link command.

1. Open your terminal and navigate to the root directory of your app project.

2. Run the following command to link the plugin:

   ```bash
   $ npm link @xofttion-enterprise/capacitor-contacts
   ```

3. After linking the plugin, run the following command to install the package:

   ```bash
   $ npm install @xofttion-enterprise/capacitor-contacts
   ```

4. You can now import and use the @xofttion-enterprise/capacitor-contacts package in your app.

   ```typescript
   import { Plugins } from '@capacitor/core';

   const { ContactsPlugin } = Plugins;

   async function getContacts() {
     const filter = ""; // Set your desired filter here
     const result = await ContactsPlugin.getContacts(filter);
     console.log(result);
   }
   ```

## Conclusion

In this tutorial, we learned how to use the @xofttion-enterprise/capacitor-contacts package to access and manage contacts on a device. We covered the steps to generate a Capacitor plugin, implement contact functions, and test the package locally. You can now integrate the @xofttion-enterprise/capacitor-contacts package into your own Capacitor project to handle contacts with ease.