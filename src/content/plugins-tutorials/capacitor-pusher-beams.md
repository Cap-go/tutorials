---
title: "Using @cesarbarone/capacitor-pusher-beams Package"
description: "A tutorial on how to use the @cesarbarone/capacitor-pusher-beams package to integrate Pusher Beams SDK into your Capacitor app."
created_at: "2022-01-01"
published: true
slug: "capacitor-pusher-beams"
---

# Using @cesarbarone/capacitor-pusher-beams Package

In this tutorial, we will learn how to integrate the Pusher Beams SDK into your Capacitor app using the `@cesarbarone/capacitor-pusher-beams` package. Pusher Beams is a push notification service that allows you to send targeted notifications to your app users. 

## Prerequisites

Before we begin, make sure you have the following installed:

- [Node.js](https://nodejs.org)
- [npm](https://www.npmjs.com)
- [Capacitor](https://capacitorjs.com)

## Installation

To install the `@cesarbarone/capacitor-pusher-beams` package, follow these steps:

1. Open your terminal and navigate to your Capacitor project directory.
2. Run the following command to install the package:

```bash
npm install --save @cesarbarone/capacitor-pusher-beams
```

## Setup

Once the package is installed, you need to perform some additional setup steps.

1. Open the `android/app/src/main/java/***/MainActivity.java` file and add the following import statement:

```java
import app.tissini.pusherBeams.PusherBeamsPlugin;
```

2. Inside the `init()` method of the `MainActivity` class, add the following line:

```java
this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {{
    // other plugins...
    add(PusherBeamsPlugin.class);
}});
```

## Usage

With the `@cesarbarone/capacitor-pusher-beams` package installed and set up, you can now use its methods to interact with Pusher Beams.

### Add Device Interest

To subscribe a device to a specific interest, use the `addDeviceInterest` method. Here's an example:

```javascript
import { Plugins } from '@capacitor/core';
const { PusherBeamsPlugin } = Plugins;

PusherBeamsPlugin.addDeviceInterest({ interest: 'your-interest' });
```

### Remove Device Interest

To unsubscribe a device from a specific interest, use the `removeDeviceInterest` method. Here's an example:

```javascript
import { Plugins } from '@capacitor/core';
const { PusherBeamsPlugin } = Plugins;

PusherBeamsPlugin.removeDeviceInterest({ interest: 'your-interest' });
```

### Get Device Interests

To get all the interests that the device is subscribed to, use the `getDeviceInterests` method. Here's an example:

```javascript
import { Plugins } from '@capacitor/core';
const { PusherBeamsPlugin } = Plugins;

const interests = await PusherBeamsPlugin.getDeviceInterests();
console.log(interests);
```

### Clear Device Interests

To unsubscribe the device from all interests, use the `clearDeviceInterests` method. Here's an example:

```javascript
import { Plugins } from '@capacitor/core';
const { PusherBeamsPlugin } = Plugins;

PusherBeamsPlugin.clearDeviceInterests();
```

That's it! You have successfully integrated the Pusher Beams SDK into your Capacitor app using the `@cesarbarone/capacitor-pusher-beams` package. You can now send targeted push notifications to your app users.

Remember to consult the official documentation of the package for more details and advanced usage.