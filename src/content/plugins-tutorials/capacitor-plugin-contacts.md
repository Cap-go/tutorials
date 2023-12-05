---
title: "Using capacitor-plugin-contacts"
description: "A tutorial on how to use the capacitor-plugin-contacts package in your Ionic application."
created_at: "2022-01-30"
published: true
slug: "capacitor-plugin-contacts"
---

# Using capacitor-plugin-contacts

In this tutorial, we will learn how to integrate and use the capacitor-plugin-contacts package in your Ionic application. The capacitor-plugin-contacts package allows you to access and manage contacts on the device.

## Prerequisites

Before we begin, make sure you have the following installed:

- Capacitor CLI: `npm install -g @capacitor/core @capacitor/cli`
- Capacitor Plugin: `npm install capacitor-plugin-contacts`

## Creating a Capacitor Plugin

To get started with the capacitor-plugin-contacts package, we need to create a Capacitor plugin. Follow these steps:

1. Install Capacitor globally: `npm install -g @capacitor/core @capacitor/cli`
2. Generate a new Capacitor plugin: `npx cap plugin:generate`
    - Enter the required information for the plugin, such as the plugin name, ID, description, repository, author, license, etc.
3. Link the plugin to a GitHub repository:
    - Create a new repository on GitHub.
    - Initialize a Git repository in your project folder: `git init`
    - Link the local repository to the remote repository: `git remote add origin <repository-url>`
    - Push the code to the remote repository: `git push -f origin main`

## Implementing a New Function

To add a new function to the capacitor-plugin-contacts package, follow these steps:

1. Setup the interface:
   - Open the `definitions.ts` file in the plugin folder.
   - Add a new function called `getContacts` to the `ContactsPluginPlugin` interface.

```typescript
export interface ContactsPluginPlugin {
  echo(options: { value: string }): Promise<{ value: string }>
  getContacts(filter: string): Promise<{ results: any[] }>
}
```

2. Implement the function for the Web, iOS, and Android platforms:
   - For the Web platform, refer to the [Capacitor Web/PWA Plugin Guide](https://capacitorjs.com/docs/plugins/web) for instructions.
   - For the iOS platform, refer to the [Capacitor iOS Plugin Guide](https://capacitorjs.com/docs/plugins/ios) for instructions.
   - For the Android platform, refer to the [Capacitor Android Plugin Guide](https://capacitorjs.com/docs/plugins/android) for instructions.

## Local Testing

To test the plugin locally while developing it, follow these steps:

1. Link the plugin folder to your app project:
   - Inside the plugin folder, run: `npm link`.
   - Inside your app project, run: `npm link capacitor-plugin-contacts`.
2. Install the plugin in your app project: `npm install capacitor-plugin-contacts`.

## Conclusion

In this tutorial, we have learned how to use the capacitor-plugin-contacts package in an Ionic application. We covered the steps to create a Capacitor plugin, implement a new function, and test the plugin locally.

Now you can leverage the capacitor-plugin-contacts package to access and manage contacts on the device in your Ionic application.