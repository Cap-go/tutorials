---
title: "Using capacitor-suppress-longpress-gesture"
description: "A tutorial on how to use the capacitor-suppress-longpress-gesture package to suppress longpress gesture in iOS system."
created_at: "2022-01-01"
published: true
slug: "capacitor-suppress-longpress-gesture"
---

# Using capacitor-suppress-longpress-gesture

This tutorial will guide you through the process of using the capacitor-suppress-longpress-gesture package to suppress the longpress gesture in the iOS system. This plugin is designed for Capacitor v3 and also supports Capacitor v4.

## Step 1: Installation

To get started, you need to install the capacitor-suppress-longpress-gesture package. Open your terminal and run the following command:

```bash
npm install capacitor-suppress-longpress-gesture
npx cap sync
```

This will install the package and synchronize it with your Capacitor project.

## Step 2: Import and Activate the Service

In your main "app" component, import the `SuppressLongpressGesture` class from the 'capacitor-suppress-longpress-gesture' package. Then, call the `activateService()` method to activate the service.

```javascript
import { SuppressLongpressGesture } from 'capacitor-suppress-longpress-gesture';

SuppressLongpressGesture.activateService();
```

## Step 3: Usage

With the service activated, the longpress gesture will be suppressed in the iOS system. You can now test your application to ensure that the longpress gesture is effectively disabled.

## API Reference

Here are the available methods provided by the capacitor-suppress-longpress-gesture package:

### echo

```typescript
echo(options: { value: string; }) => Promise<{ value: string; }>
```

This method allows you to send an echo message with a provided value.

### activateService

```typescript
activateService() => Promise<string>
```

This method activates the longpress gesture suppression service.

### deactivateService

```typescript
deactivateService() => Promise<string>
```

This method deactivates the longpress gesture suppression service.

---

Congratulations! You have successfully learned how to use the capacitor-suppress-longpress-gesture package to suppress the longpress gesture in the iOS system.

Please refer to the [official documentation](https://github.com/username/repo) for more information on advanced usage and customization options.