---
title: "Using @capacitor-plugin/googlepay-issuer-plugin"
description: "A tutorial on how to use the @capacitor-plugin/googlepay-issuer-plugin package to integrate Google Pay in a Capacitor project."
created_at: "2021-10-05"
published: true
slug: "googlepay-issuer"
---

# Using @capacitor-plugin/googlepay-issuer-plugin

In this tutorial, we will learn how to use the `@capacitor-plugin/googlepay-issuer-plugin` package to integrate Google Pay into a Capacitor project. Google Pay is a digital wallet platform developed by Google that allows users to make payments using their Android devices.

## Prerequisites

Before we begin, make sure you have the following prerequisites:

1. Capacitor project set up.
2. Google Pay Tap And Pay 17.1.0 SDK installed.

If you haven't set up a Capacitor project yet, you can follow the official Capacitor documentation to get started.

## Installation

To install the `@capacitor-plugin/googlepay-issuer-plugin` package, run the following command in your project directory:

```bash
npm install capacitor-plugin-googlepay-issuer
```

After the installation, make sure to synchronize the Capacitor project to update the native dependencies:

```bash
npx cap sync
```

## Usage

Once you have installed the plugin, you can proceed with the following steps to use it in your project:

1. Register the plugin in your main activity file (Android). Open the `MainActivity.java` file and import the necessary class:

```java
import com.google.android.capacitor.googlepay.issuer.GooglePayIssuerPlugin;
```

Inside the `onCreate` method, add the plugin to the list of plugins:

```java
// Additional imports
import java.util.ArrayList;
import org.capacitorjs.bridge.BridgeActivity;
import com.getcapacitor.community.googlepayissuer.GooglePayIssuerPlugin;

public class MainActivity extends BridgeActivity {
  @Override
  public void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);

    // Initializes the Bridge
    this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {{
      add(GooglePayIssuerPlugin.class); // Add the plugin here
    }});
  }
}
```

2. Use the plugin methods in your code. The `@capacitor-plugin/googlepay-issuer-plugin` package provides various methods for interacting with Google Pay. Here are a few examples:

- `getActiveWalletID()`: Returns the ID of the active wallet.
- `getTokenStatus(options: { tsp: string; tokenReferenceId: string; })`: Returns the status of a token with a given token ID.
- `getEnvironment()`: Returns the environment (e.g., production or sandbox).
- `getStableHardwareId()`: Returns the stable hardware ID of the device.
- `listTokens()`: Lists all the available tokens.
- `pushProvision(...)`: Pushes token provisioning.

You can use these methods according to your requirements and handle the responses appropriately.

3. Add event listeners (optional). The plugin also provides an `addListener` method to listen for specific events. For example:

```typescript
addListener(eventName: 'registerDataChangedListener', listenerFunc: (response: any) => void) => PluginListenerHandle
```

You can add event listeners to handle actions performed on push notifications and receive the corresponding response data.

That's it! You have successfully integrated the `@capacitor-plugin/googlepay-issuer-plugin` package into your Capacitor project and can now use Google Pay functionality.

## Conclusion

In this tutorial, we learned how to use the `@capacitor-plugin/googlepay-issuer-plugin` package to integrate Google Pay into a Capacitor project. We covered the installation process, usage of plugin methods, and event handling. Now, you can leverage the power of Google Pay in your Capacitor application.

Feel free to explore the plugin's documentation for more details on available methods and events. Happy coding!