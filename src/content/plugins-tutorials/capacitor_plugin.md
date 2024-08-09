---

title: Using Speedchecker Capacitor Plugin
description: A comprehensive guide on how to integrate and utilize the @speedchecker/capacitor-plugin package in a Capacitor project.
created_at: 2022-01-13
published: true
slug: capacitor_plugin

---

## Getting Started with Speedchecker Capacitor Plugin

The @speedchecker/capacitor-plugin is a powerful tool that allows you to integrate network speed testing capabilities into your Capacitor project. Follow the steps below to seamlessly incorporate this plugin into your application.

### Step 1: Installation

Begin by adding the plugin to your project. Use the following command to install the plugin from the npm repository:

```bash
npm install @speedchecker/capacitor-plugin
```

### Step 2: Project Configuration

#### Android Configuration

1. Add Android platform:

```bash
npx cap add android
```

2. Add custom Maven repositories for the Speedchecker SDK in your project's `build.gradle` file.

#### iOS Configuration

1. Add iOS platform:

```bash
npx cap add ios
```

2. Configure various settings in your project's `Info.plist` file based on your usage of the free or paid version.

### Step 3: Sync and Run the Project

1. Sync the plugin with the native projects:

```bash
npx cap sync
```

2. Build and run the project:

For Android:

```bash
npx cap run android
```

For iOS:

```bash
npx cap run ios
```

### Step 4: Final Configurations

Ensure that you have set up all necessary background tests and permissions for the Speedchecker plugin based on your usage requirements. This includes setting license keys, location permissions, and background tests for paid users.

---

By following this tutorial, you will be able to seamlessly integrate the @speedchecker/capacitor-plugin package into your Capacitor project. Happy testing!
