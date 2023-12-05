---
title: "Using @bistroo/vite-plugin-capacitor with Vite"
description: "Learn how to integrate @bistroo/vite-plugin-capacitor into your Vite project"
created_at: "2021-10-29"
published: true
slug: vite-plugin-capacitor
---

# Using @bistroo/vite-plugin-capacitor with Vite

In this tutorial, we will learn how to use the `@bistroo/vite-plugin-capacitor` package to integrate Capacitor functionality into a Vite project. Capacitor is a native runtime for building cross-platform mobile, desktop, and web applications using web technologies such as HTML, CSS, and JavaScript.

## Prerequisites

Before getting started, make sure that you have the following installed:

- Node.js (v12 or higher)
- Vite (v2 or higher)
- Capacitor (v3 or higher)

## Installation

To begin, we need to install the `@bistroo/vite-plugin-capacitor` package. Open your terminal and navigate to your Vite project directory, then run the following command:

```
pnpm add -D @bistroo/vite-plugin-capacitor
```

This will install the package as a development dependency in your project.

## Configuration

Once the package is installed, we need to configure Vite to use the `@bistroo/vite-plugin-capacitor` plugin. Create a `vite.config.ts` file in the root of your project and add the following code:

```typescript
// vite.config.ts
import { defineConfig } from 'vite'
import { capacitor } from '@bistroo/vite-plugin-capacitor'

export default defineConfig({
  plugins: [capacitor()],
})
```

This configures Vite to use the `capacitor` plugin from the `@bistroo/vite-plugin-capacitor` package.

## API

The `capacitor` function from the `@bistroo/vite-plugin-capacitor` package accepts a configuration object with two optional properties: `buildOptions` and `runOptions`. These options allow you to customize the build and run commands for your Capacitor project.

Here is an example of how to use the `capacitor` function with custom options:

```typescript
import { capacitor } from '@bistroo/vite-plugin-capacitor'

capacitor({
  buildOptions: {
    // Custom build options
  },
  runOptions: {
    // Custom run options
  },
})
```

## Minimal Example

To demonstrate the usage of `@bistroo/vite-plugin-capacitor`, let's consider a basic project structure with a source directory (`src`), a static assets directory (`static`), a compiled files directory (`dist`), and a Node.js project directory (`nodejs`).

Here are the minimal Vite and Capacitor configurations needed for this example:

**Vite Configurations (`vite.config.ts`):**

```typescript
import { defineConfig } from 'vite'

export default defineConfig({
  root: './src',
  publicDir: '../static',
  build: {
    outDir: '../dist'
  }
})
```

**Capacitor Configurations (`capacitor.config.json`):**

```json
{
  "webDir": "dist",
  "plugins": {
    "CapacitorNodeJS": {
      "nodeDir": "nodejs"
    }
  }
}
```

To meet these configurations using Vite, create a directory called `nodejs` inside the `static` directory and add a `index.js` file in it as the starting point for your Node.js project.

After building and syncing the project, the main script will be executed by the Node.js runtime when the app is launched.

### Inter-Process Communication

The `@bistroo/vite-plugin-capacitor` package includes a bridge module that allows communication between the Capacitor layer and the Node.js process.

To listen for messages from the Capacitor layer and send messages back from the Node.js script, use the following code:

```javascript
const { channel } = require('bridge')

// Listens to "msg-from-capacitor" from the Capacitor layer.
channel.addListener('msg-from-capacitor', (message) => {
  console.log('[Node.js] Message from Capacitor: ' + message)

  // Sends a message back to the Capacitor layer.
  channel.send('msg-from-nodejs', `Replying to the message '${message}'.`, 'And optionally add more arguments.')
})
```

In the Capacitor app, you can communicate with the Node.js process using the `capacitor-nodejs` module:

```typescript
import { NodeJS } from 'capacitor-nodejs'

// Listens to "msg-from-nodejs" from the Node.js process.
NodeJS.addListener('msg-from-nodejs', (event) => {
  document.body.innerHTML = `
    <p>
      <b>Message from Capacitor</b><br>
      First argument: ${event.args[0]}<br>
      Second argument: ${event.args[1]}
    </p>
  `
  console.log(event)
})

// Waits for the Node.js process to initialize.
NodeJS.whenReady().then(() => {
  // Sends a message to the Node.js process.
  NodeJS.send({
    eventName: 'msg-from-capacitor',
    args: ['Hello from Capacitor!'],
  })
})
```

## Conclusion

In this tutorial, we learned how to integrate the `@bistroo/vite-plugin-capacitor` package into a Vite project. We covered the installation process, configuration steps, and usage of the package's API. We also explored a minimal example of using the package with a Node.js project and discussed inter-process communication between the Capacitor layer and the Node.js process.

With `@bistroo/vite-plugin-capacitor`, you can harness the power of Capacitor in your Vite applications and build cross-platform experiences with ease.