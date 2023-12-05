---
title: "Using capacitor-signply-sdk Package"
description: "This tutorial will guide you through the process of using the capacitor-signply-sdk package to integrate Signply into Capacitor apps."
created_at: "2022-04-08"
published: true
slug: "capacitorsignplysdk"
---

# Using capacitor-signply-sdk Package

This tutorial will guide you through the process of using the capacitor-signply-sdk package to integrate Signply into Capacitor apps.

## Installation

To install the capacitor-signply-sdk package, run the following command in your project's root folder:

```
npm install capacitor-signply-sdk
```

## Configuration

After installing the package, you need to configure it in your Capacitor app. Open your app's main `android/app/src/main/java/[...]/MainActivity.java` file and import the necessary classes:

```java
import com.getcapacitor.BridgeActivity;
import com.signply.sdk.Signply;
import com.signply.sdk.SignplyConfig;
```

Inside the `init` method, add the following code to initialize the Signply SDK:

```java
public class MainActivity extends BridgeActivity {
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {{
            // Add other plugins
            add(Signply.class);
        }});

        SignplyConfig config = new SignplyConfig.Builder()
                .setApiKey("YOUR_API_KEY")
                .build();

        Signply.initialize(config);
    }
}
```

Replace `"YOUR_API_KEY"` with your actual Signply API key.

## Usage

Once you have installed and configured the capacitor-signply-sdk package, you can start using it in your Capacitor app.

### 1. Start a Signply Session

To start a Signply session, use the following code:

```typescript
import { Plugins } from '@capacitor/core';

const { Signply } = Plugins;

async function startSignplySession() {
  try {
    const result = await Signply.startSession();
    console.log('Signply session started:', result);
  } catch (error) {
    console.error('Error starting Signply session:', error);
  }
}

startSignplySession();
```

### 2. Handle Signply Callbacks

You can handle Signply callbacks using event listeners. Here's an example of how to listen for the 'onDocumentSigned' event:

```typescript
const { Signply } = Plugins;

Signply.addListener('onDocumentSigned', (result) => {
  console.log('Document signed:', result);
});
```

### 3. Customize Signply Session

You can customize the Signply session by passing additional configuration options. Here's an example:

```typescript
const { Signply } = Plugins;

const options = {
  theme: 'dark',
  autoFinalize: true,
  allowDecline: false,
  language: 'en',
};

Signply.setSessionOptions(options);
```

These are just a few examples of how you can use the capacitor-signply-sdk package in your Capacitor app. For more information, refer to the package's documentation.

That's it! You have successfully integrated the capacitor-signply-sdk package into your Capacitor app and can now leverage Signply's features.