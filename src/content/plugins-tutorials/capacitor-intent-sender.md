---
title: "Using capacitor-intent-sender"
description: "A tutorial on how to use the capacitor-intent-sender package"
created_at: "2022-01-28"
published: true
slug: "capacitor-intent-sender"
---

# Using capacitor-intent-sender

This tutorial will guide you through the process of using the `capacitor-intent-sender` package in your Capacitor application.

## Installation

To install the `capacitor-intent-sender` package, run the following command:

```bash
npm install capacitor-intent-sender
npx cap sync
```

## Usage

### Checking for Intent Receive

To check if your app has been targeted as a share goal, you can use the `checkIntentReceived` method. This method returns a promise that resolves with the result of the check.

```javascript
import { IntentSender } from 'capacitor-intent-sender';

IntentSender.checkIntentReceived().then((result) => {
  if (result) {
    console.log('Intent received!');
    console.log(JSON.stringify(result));
  }
}).catch((error) => {
  console.error('Error checking intent:', error);
});
```

### Handling Shared Files

If your app receives shared files, you can access their content using Capacitor's `Filesystem` plugin. The shared file will be received as a URI string, which you can use to retrieve the file content.

```javascript
import { Filesystem } from '@capacitor/core';

if (result.url) {
  const resultUrl = decodeURIComponent(result.url);
  Filesystem.readFile({ path: resultUrl })
    .then((content) => {
      console.log('File content:', content.data);
    })
    .catch((error) => {
      console.error('Error reading file:', error);
    });
}
```

### Closing the Intent Sender Activity (Android Only)

On Android, it is recommended to close the intent sender activity after processing the received intent. This helps prevent app state issues and avoids triggering the same intent again when the app reloads from idle mode.

To close the intent sender activity, use the `finish` method:

```javascript
IntentSender.finish();
```

If you want to stay in your app after receiving the intent, you can use deep links as a solution. For more details, refer to the issue comment [here](https://github.com/carsten-klaffke/send-intent/issues/69#issuecomment-1544619608).

## Conclusion

In this tutorial, you learned how to use the `capacitor-intent-sender` package to handle intents in your Capacitor application. You can now receive shared content and access shared files with ease.

Remember to check the official documentation of the `capacitor-intent-sender` package for more details on its usage and options.

Happy coding!