---
title: Using @mamillastre/capacitor-environment Package Tutorial
description: Tutorial on how to use the @mamillastre/capacitor-environment package to manage JSON based environment specific data in Capacitor apps.
created_at: 2023-10-12
published: true
slug: capacitor-environment
---

# Using @mamillastre/capacitor-environment Package Tutorial

In this tutorial, we will learn how to utilize the `@mamillastre/capacitor-environment` package to handle JSON based environment specific data in Capacitor applications.

## Installation

First, install the `@mamillastre/capacitor-environment` package in your Capacitor project by running the following command:

```bash
npm install @mamillastre/capacitor-environment
npx cap sync
```

## Configuration

Ensure that you have followed the [Create Environment Specific Configuration guide](https://capacitorjs.com/docs/guides/environment-specific-configurations) to set up Android product flavors & iOS schemes.

## Usage

### Importing the Plugin

```typescript
import { Plugins } from '@capacitor/core';
const { CapacitorEnvironment } = Plugins;
```

### Fetching Environment Specific Data

```typescript
const data = await CapacitorEnvironment.getData();
console.log(data);
```

## API

The `@mamillastre/capacitor-environment` package provides the following API:

### getData()

Retrieves the environment specific data as a JSON object.

- **Returns:** `Promise<{ data: any }>`
  
That's it! Now you know how to integrate and utilize the `@mamillastre/capacitor-environment` package in your Capacitor projects for managing environment specific configurations more effectively.
