```markdown
---
title: Using tcp-capacitor-plugin Package
description: Learn how to create and use a TCP Socket Plugin for Capacitor
created_at: 2022-01-23
published: true
slug: tcp-capacitor-plugin
---

# Using tcp-capacitor-plugin Package

In this tutorial, we will learn how to create and use a TCP Socket Plugin for Capacitor using the `tcp-capacitor-plugin` package.

## Installation

You can install the `tcp-capacitor-plugin` package using npm and then sync with Capacitor:

```bash
npm install tcp-capacitor-plugin
npx cap sync
```

## API

The `tcp-capacitor-plugin` provides the following API method:

### echo

The `echo` method takes a value as input and returns the same value:

```typescript
echo(options: { value: string; }) => Promise<{ value: string; }>
```

To use the `echo` method, you can call it with the value you want to echo.

## Usage

Now that you have installed the package and synced with Capacitor, you can start using the TCP Socket Plugin in your application.

```typescript
import { Plugins } from '@capacitor/core';
const { TcpCapacitorPlugin } = Plugins;

// Example of using the echo method
const result = await TcpCapacitorPlugin.echo({ value: 'Hello, World!' });
console.log(result.value); // Output: Hello, World!
```

This is a basic guide to get you started with the `tcp-capacitor-plugin` package for creating TCP Socket functionalities in your Capacitor applications.
```
