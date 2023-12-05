---
title: "Using capacitor-plugin-veriff"
description: "A tutorial on how to use the capacitor-plugin-veriff package in your project."
created_at: "2021-10-21"
published: true
slug: "capacitor-plugin-veriff"
---

# Using capacitor-plugin-veriff

This tutorial will guide you through the process of integrating the `capacitor-plugin-veriff` package into your Capacitor project.

## Prerequisites

Before you begin, make sure you have the following installed:

- Capacitor
- Your preferred code editor
- Node.js and npm

## Installation

To start using `capacitor-plugin-veriff`, follow these steps:

1. Install the package using npm:

   ```bash
   npm install capacitor-plugin-veriff
   ```

2. Sync the plugin with your project:
   
   ```bash
   npx cap sync
   ```

## Usage

Once the package is installed and synced with your project, you can start using it.

### Initializing the plugin

First, import the `Plugins` module from `@capacitor/core` and the `VeriffPlugin` from `capacitor-plugin-veriff`.

```typescript
import { Plugins } from '@capacitor/core';
import { VeriffPlugin } from 'capacitor-plugin-veriff';

const { Veriff } = Plugins;
```

### Starting the Veriff flow

To initiate the Veriff flow, use the `startVeriff` method provided by the `VeriffPlugin`.

```typescript
Veriff.startVeriff({
  apiKey: 'YOUR_VERIFF_API_KEY',
  sessionId: 'YOUR_SESSION_ID',
  userId: 'YOUR_USER_ID',
});
```

Make sure to replace `'YOUR_VERIFF_API_KEY'`, `'YOUR_SESSION_ID'`, and `'YOUR_USER_ID'` with the required values from your Veriff account.

### Listening to events

You can listen to various events and handle them accordingly. Here's an example of how to listen to the `onEvent` event:

```typescript
Veriff.addListener('onEvent', (event) => {
  console.log('Received event:', event);
});
```

### Completing the flow

To complete the Veriff flow, call the `finishVeriff` method:

```typescript
Veriff.finishVeriff();
```

## Conclusion

In this tutorial, you learned how to integrate and use the `capacitor-plugin-veriff` package in your Capacitor project. Now you can easily initiate Veriff flows and handle Veriff events.

Remember to refer to the official documentation of `capacitor-plugin-veriff` for more details and advanced usage.

Happy verification!
