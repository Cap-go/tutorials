---
title: "Using @yesid1010/pusherbeams-plugin Package"
description: "A tutorial on how to use the @yesid1010/pusherbeams-plugin package to integrate Pusher Beams in your project."
created_at: "2022-07-15"
published: true
slug: "pushebeams-plugin"
---

# Using @yesid1010/pusherbeams-plugin Package

In this tutorial, we will learn how to use the @yesid1010/pusherbeams-plugin package to integrate Pusher Beams in your project. Pusher Beams is a service that simplifies push notifications for your mobile and web applications. By following the steps below, you will be able to easily subscribe and unsubscribe devices from specific interests and manage push notifications effectively.

## Prerequisites

Before getting started, make sure you have the following installed:

- [Node.js](https://nodejs.org)
- [Git](https://git-scm.com)

## Installation

1. Clone the repository of the @yesid1010/pusherbeams-plugin package by running the following command in your terminal:

   ```
   git clone https://github.com/yesid0401/pusheBeams-plugin.git
   ```

2. Navigate to the cloned repository by running:

   ```
   cd pusheBeams-plugin
   ```

3. Install the package dependencies by running:

   ```
   npm install
   ```

4. Copy the "pusheBeams-plugin" folder to the same directory as your Capacitor project.

5. In your Capacitor project, install the package by running the following command:

   ```
   npm install ./pusheBeams-plugin
   ```

6. Sync your Capacitor project to apply the changes:

   ```
   npx cap sync
   ```

   This will update the necessary dependencies and configurations in your Capacitor project.

## Usage

1. Import the "pusherBeams-plugin" package in the file where you want to use it:

   ```javascript
   import 'pusherBeams-plugin';
   import { PusherBeamsPlugin } from 'pusherBeams-plugin';
   ```

2. In your `MainActivity.java` file, import the `PusherBeamsPlugin` class:

   ```java
   import app.tissini.pusherBeams.PusherBeamsPlugin;
   ```

3. Inside the `this.init()` method in your `MainActivity.java` file, add the following line to initialize the PusherBeamsPlugin:

   ```java
   this.init();
   add(PusherBeamsPlugin.class);
   ```

## Methods

The @yesid1010/pusherbeams-plugin package provides the following methods:

- `PusherBeamsPlugin.addDeviceInterest({interest: 'interest_name'})`: Adds a device to a specific interest.
- `PusherBeamsPlugin.removeDeviceInterest({interest: 'interest_name'})`: Removes a device from a specific interest.
- `PusherBeamsPlugin.getDeviceInterests()`: Retrieves all the interests that the device is subscribed to.
- `PusherBeamsPlugin.clearDeviceInterests()`: Unsubscribes the device from all interests.

You can use these methods to manage the device's subscriptions to interests and handle push notifications effectively in your application.

That's it! You have successfully integrated the @yesid1010/pusherbeams-plugin package into your project and can now take advantage of the Pusher Beams service for push notifications.

Remember to refer to the official documentation of the @yesid1010/pusherbeams-plugin package for more detailed information on the available methods and their usage.

Happy coding!