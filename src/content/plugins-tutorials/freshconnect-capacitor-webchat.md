---
title: "Using freshconnect-capacitor-webchat package"
description: "A tutorial on how to use the freshconnect-capacitor-webchat package"
created_at: "2022-06-29"
published: true
slug: freshconnect-capacitor-webchat
---

# Using freshconnect-capacitor-webchat package

In this tutorial, we will learn how to use the freshconnect-capacitor-webchat package to build a chat feature in your Capacitor app.

## Installation

To get started, you need to install the freshconnect-capacitor-webchat package. Run the following command in your project directory:

```bash
npm install freshconnect-capacitor-webchat
```

## Usage

1. Import the WebChat plugin in your project:

```javascript
import { WebChat } from 'freshconnect-capacitor-webchat';
```

2. Initialize the WebChat plugin:

```javascript
WebChat.initialize({
  appId: 'YOUR_APP_ID',
  apiKey: 'YOUR_API_KEY',
});
```

Make sure to replace `'YOUR_APP_ID'` and `'YOUR_API_KEY'` with your actual Freshchat app ID and API key.

3. Display the chat widget:

```javascript
WebChat.show();
```

By default, the chat widget will be displayed in the bottom right corner of the screen. You can customize its position and appearance using the available configuration options.

4. Handle incoming messages:

```javascript
WebChat.addListener('messageReceived', (message) => {
  console.log('New message:', message);
  // Handle the incoming message here
});
```

You can listen for the `'messageReceived'` event to handle new messages received from the chat widget.

5. Send messages:

```javascript
WebChat.sendMessage('Hello, how can I help you?');
```

Use the `sendMessage` method to send messages from your app to the chat widget.

## Conclusion

In this tutorial, we learned how to use the freshconnect-capacitor-webchat package to add a chat feature to your Capacitor app. We covered the installation process, initializing the plugin, displaying the chat widget, handling incoming messages, and sending messages from your app.

Now you can enhance your app's user experience by integrating a chat functionality using the freshconnect-capacitor-webchat package.

Feel free to explore the official documentation for more advanced features and customization options. Happy coding!