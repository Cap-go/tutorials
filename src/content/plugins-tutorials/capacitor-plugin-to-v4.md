---
title: "Using @rdlabo/capacitor-plugin-to-v4 Package"
description: "A tutorial on how to use the @rdlabo/capacitor-plugin-to-v4 package to update Capacitor plugins from version 3 to version 4."
created_at: "2022-10-01"
published: true
slug: "capacitor-plugin-to-v4"
---

# Using @rdlabo/capacitor-plugin-to-v4 Package

The @rdlabo/capacitor-plugin-to-v4 package is a command tool that automates the process of updating Capacitor plugins from version 3 to version 4. This package follows the changes made in the [official Capacitor plugin migration guide](https://github.com/ionic-team/create-capacitor-plugin/commit/03027bf603626ebfdba084cb9d9a1a359d008554) and ensures compatibility with Capacitor 4.

In this tutorial, we will cover how to install and use the @rdlabo/capacitor-plugin-to-v4 package to update your Capacitor plugins.

## Prerequisites

Before proceeding, make sure you have the following installed:

- Node.js (version 12 or higher)
- npm (version 6 or higher)

## Step 1: Installing @rdlabo/capacitor-plugin-to-v4

To install the @rdlabo/capacitor-plugin-to-v4 package, open your terminal and run the following command:

```bash
$ npm install -g @rdlabo/capacitor-plugin-to-v4
```

This will install the package globally on your system.

## Step 2: Updating a Capacitor Plugin

To update a Capacitor plugin from version 3 to version 4, navigate to the root folder of the plugin using the terminal and run the following command:

```bash
$ npx @rdlabo/capacitor-plugin-to-v4
```

The package will analyze the plugin's files and prompt you with the changes that need to be made. Review the changes and confirm the update process.

## Step 3: Verifying the Update

After running the migration tool, the package will make the necessary updates to the plugin's files. It is recommended to review the changes to ensure everything was updated correctly.

Additionally, make sure to run the following command to install any new dependencies or setup any additional configuration:

```bash
$ npm install
```

This will ensure that the plugin is fully updated and ready to use with Capacitor 4.

## Troubleshooting

### Manually Removed `jcenter()`

If your plugin had manually removed the `jcenter()` repository before running the migration tool, you may encounter issues. In such cases, manually check the `android/build.gradle` file and add the `mavenCentral()` repository if it is missing. You can refer to the [official Capacitor plugin migration guide](https://github.com/ionic-team/create-capacitor-plugin/commit/03027bf603626ebfdba084cb9d9a1a359d008554#diff-51795f26cbdfdde24931f6d0f9d6f047f4617fc6a6cb850029cd78c8e0e9b90d) for the correct configuration.

## Conclusion

The @rdlabo/capacitor-plugin-to-v4 package simplifies the process of updating Capacitor plugins from version 3 to version 4. By following the steps outlined in this tutorial, you can quickly and efficiently migrate your plugins to the latest version of Capacitor.

Remember to always review the changes and perform any necessary manual steps to ensure the update process is successful.