---
title: "Using capacitor-subscriptions package"
description: "Step-by-step guide on integrating capacitor-subscriptions into your project"
created_at: "2021-09-19"
published: true
slug: capacitor-subscriptions.git.git
---

# How to Use capacitor-subscriptions Package

To integrate the capacitor-subscriptions package into your project, follow these steps:

1. First, make sure you have Capacitor installed in your project.

2. Install the capacitor-subscriptions package by running:

   ```bash
   npm install capacitor-subscriptions
   ```

3. Import the necessary modules in your code:

   ```typescript
   import { CapacitorSubscriptions } from 'capacitor-subscriptions';
   ```

4. Initialize the plugin in your application:

   ```typescript
   const subscriptions = CapacitorSubscriptions.initialize();
   ```

5. Start using the subscription methods provided by the plugin, such as `createSubscription`, `checkSubscriptionStatus`, etc.

6. Don't forget to handle any errors that may occur during the subscription process.

By following these steps, you can easily integrate and use the capacitor-subscriptions package in your Capacitor project.
