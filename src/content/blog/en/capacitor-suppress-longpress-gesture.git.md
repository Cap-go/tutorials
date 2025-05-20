---
title: How to Use capacitor-suppress-longpress-gesture Package
description: >-
  A tutorial on using the capacitor-suppress-longpress-gesture package to
  suppress longpress gestures in iOS systems using Capacitor.
created_at: '2023-02-24'
published: true
slug: capacitor-suppress-longpress-gesture.git
locale: en
---


## Using capacitor-suppress-longpress-gesture Package

This tutorial will guide you on how to use the capacitor-suppress-longpress-gesture package to suppress longpress gestures in iOS systems using Capacitor.

### Installation

To begin, install the `capacitor-suppress-longpress-gesture` package in your project:

```bash
npm install capacitor-suppress-longpress-gesture
npx cap sync
```

### Usage

Import the package in your 'app' component and call the `activateService()` method:

```js
import { SuppressLongpressGesture } from 'capacitor-suppress-longpress-gesture';
SuppressLongpressGesture.activateService();
```

### API

The package provides the following API methods:

1. `activateService()`: Activates the service to suppress longpress gestures.
2. `deactivateService()`: Deactivates the service to stop suppressing longpress gestures.
