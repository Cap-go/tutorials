---
title: "Using capacitor-kissmetrics-plugin"
description: "A tutorial on how to use the capacitor-kissmetrics-plugin package for tracking analytics with Kissmetrics."
created_at: "2022-10-02"
published: true
slug: "capacitor-kissmetrics-plugin"
---

# Using capacitor-kissmetrics-plugin

This tutorial will guide you through the process of using the capacitor-kissmetrics-plugin package to integrate Kissmetrics tracking functionality into your Capacitor-powered application.

## Prerequisites

Before getting started, make sure you have the following installed:

- Node.js and npm
- Capacitor CLI
- Capacitor project setup

## Installation

To begin, install the capacitor-kissmetrics-plugin package by running the following command:

```shell
npm install capacitor-kissmetrics-plugin
```

## Configuration

Next, navigate to your Capacitor project and add the plugin. Ensure that you have already initialized Capacitor in your project.

```shell
npx cap plugin add capacitor-kissmetrics-plugin
```

This will add the necessary plugin files to your project.

## Usage

Now that the plugin is installed, you can start using the Kissmetrics tracking functionality in your application. Here are the basic steps to follow:

1. Import the plugin in your code:

   ```typescript
   import { Plugins } from '@capacitor/core';
   const { KissmetricsPlugin } = Plugins;
   ```

2. Initialize Kissmetrics with your API key (typically done in your app's initialization code):

   ```typescript
   KissmetricsPlugin.initialize({ apiKey: 'YOUR_API_KEY' });
   ```

3. Track events and properties as needed:

   ```typescript
   // Track an event
   KissmetricsPlugin.trackEvent({ event: 'Button Clicked' });

   // Track an event with properties
   KissmetricsPlugin.trackEventWithProperties({ event: 'Button Clicked', properties: { button: 'Submit' } });
   ```

4. Optional: Identify a user:

   ```typescript
   KissmetricsPlugin.identify({ identity: 'USER_ID' });
   ```

   This step allows you to associate events and properties with specific users.

That's it! You have now successfully integrated Kissmetrics tracking into your Capacitor application using the capacitor-kissmetrics-plugin package.

## Conclusion

In this tutorial, you learned how to install and use the capacitor-kissmetrics-plugin package to add Kissmetrics tracking functionality to your Capacitor-powered application. You can now track events, properties, and identify users using the plugin. Happy tracking!