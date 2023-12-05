---
title: "Using Capacitor NodeJS Package"
description: "A tutorial on how to use the capacitor-nodejs package to integrate Node.js into your Capacitor app."
created_at: "2022-08-15"
published: true
slug: capacitor-nodejs
---

# Using Capacitor NodeJS Package

In this tutorial, we will learn how to integrate Node.js into a Capacitor app using the capacitor-nodejs package. This package allows you to run Node.js code within your Capacitor app, enabling you to use Node.js libraries and functionalities.

## Installation

To get started, install the capacitor-nodejs package by running the following command:

```bash
npm install https://github.com/hampoelz/capacitor-nodejs/releases/download/v1.0.0-beta.4/capacitor-nodejs.tgz
```

This command will add the capacitor-nodejs package to your project.

## Setting Up the Node.js Project

Once the capacitor-nodejs package is installed, we need to set up the Node.js project within our Capacitor app. Follow these steps:

1. Create a directory named `nodejs` in your Capacitor app's `static` directory.

2. Inside the `nodejs` directory, create a file named `index.js`. This file will serve as the entry point for your Node.js code.

3. Write your Node.js code in the `index.js` file. You can use any Node.js libraries and functionalities in this file.

## Communicating Between Capacitor and Node.js

The capacitor-nodejs package provides a bridge module that allows communication between the Capacitor layer and the Node.js process. Here's how you can use it:

1. In your Node.js code (`index.js`), import the bridge module:

   ```javascript
   const { channel } = require('bridge');
   ```

2. Use the `channel` object to listen for messages from the Capacitor layer and send messages back. For example:

   ```javascript
   channel.addListener('msg-from-capacitor', (message) => {
     console.log('[Node.js] Message from Capacitor: ' + message);
     // Send a message back to the Capacitor layer
     channel.send('msg-from-nodejs', `Replying to the message '${message}'.`);
   });
   ```

3. In your Capacitor app, import the `NodeJS` object from the `capacitor-nodejs` package:

   ```typescript
   import { NodeJS } from 'capacitor-nodejs';
   ```

4. Use the `NodeJS` object to listen for messages from the Node.js process. For example:

   ```typescript
   NodeJS.addListener('msg-from-nodejs', (event) => {
     console.log(event);
     // Handle the message from Node.js
   });

   // Wait for the Node.js process to initialize
   NodeJS.whenReady().then(() => {
     // Write your code here
   });
   ```

That's it! Now you can communicate between your Capacitor app and the Node.js process using the capacitor-nodejs package.

## Conclusion

In this tutorial, we learned how to integrate Node.js into a Capacitor app using the capacitor-nodejs package. We explored the installation process, setting up the Node.js project, and communicating between Capacitor and Node.js. By leveraging the capacitor-nodejs package, you can enhance your Capacitor app with the power of Node.js.

Remember to refer to the official capacitor-nodejs documentation for more advanced usage and configurations. Happy coding!