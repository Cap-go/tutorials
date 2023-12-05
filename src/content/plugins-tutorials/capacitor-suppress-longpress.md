---
title: "Using capacitor-suppress-longpress package"
description: "In this tutorial, we will learn how to use the capacitor-suppress-longpress package to suppress the longpress gesture in iOS system."
created_at: "2022-09-21"
published: true
slug: "capacitor-suppress-longpress"
---

# Using capacitor-suppress-longpress package

In this tutorial, we will learn how to use the capacitor-suppress-longpress package to suppress the longpress gesture in iOS system. This plugin allows you to prevent the default longpress behavior on iOS devices.

## Installation

To use the capacitor-suppress-longpress package, you need to install it in your Capacitor project. Open your terminal and run the following command:

```bash
npm install capacitor-suppress-longpress-gesture
npx cap sync
```

This will install the package and sync it with your Capacitor project.

## Usage

Once the package is installed, you can start using it in your app component. Import the `SuppressLongpressGesture` module from the package and call the `activateService()` method to activate the service.

```javascript
import { SuppressLongpressGesture } from 'capacitor-suppress-longpress-gesture';

SuppressLongpressGesture.activateService();
```

By calling the `activateService()` method, the package will suppress the longpress gesture in the iOS system.

## API Reference

The capacitor-suppress-longpress package provides the following API methods:

### echo(options: { value: string }): Promise<{ value: string }>

This method echoes a given input value. It can be used for testing purposes.

### activateService(): Promise\<string>

This method activates the service and suppresses the longpress gesture in the iOS system.

### deactivateService(): Promise\<string>

This method deactivates the service and restores the default longpress behavior in the iOS system.


That's all you need to know to start using the capacitor-suppress-longpress package in your Capacitor project. If you have any further questions or issues, please refer to the package's documentation or GitHub repository for more information. Happy coding!