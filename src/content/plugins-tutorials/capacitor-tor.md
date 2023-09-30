# Using @start9labs/capacitor-tor Package

The `@start9labs/capacitor-tor` package is a plugin for managing the Tor daemon on mobile platforms in a hybrid mobile application. It allows communication over Tor as a transport layer for your mobile app's communications.

## Installation

To install the `@start9labs/capacitor-tor` package into your ionic project, follow these steps:

1. Open your terminal and navigate to your project directory.
2. Run the following command to install the package:
```
npm install @start9labs/capacitor-tor
```
3. Run the command to update Capacitor in your project:
```
npx cap update
```
4. Add the module into your TypeScript code as desired.
5. Build your ionic project by running the command:
```
ionic build
```
6. Sync the changes with your Capacitor platforms:
```
npx cap sync
```
7. Open your iOS and Android projects using the following commands:
```
npx cap open ios
npx cap open android
```
8. In the `build.gradle` file in your `android` folder, add the following lines:

In the 'dependencies:{ ... }' section:
```
implementation 'org.torproject:tor-android-binary:0.4.2.5'
```

In the 'repositories:{ ... }' section:
```
maven { url "https://raw.githubusercontent.com/guardianproject/gpmaven/master" }
```

9. In your Android `MainActivity.java` file, add the following lines to register the plugin:

```java
...
import tor.plugin.TorPlugin;

public class MainActivity extends BridgeActivity {
  @Override
  public void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);

    // Initializes the Bridge
    this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {{
      // Additional plugins you've installed go here
      add(TorPlugin.class);
    }});
  }
}
```

## Usage

Here is an example of using the `@start9labs/capacitor-tor` package in an Ionic app:

```typescript
import { Component } from '@angular/core';
import { Tor } from '@start9labs/capacitor-tor';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  private readonly tor = new Tor();

  constructor() {
    // Initialize the plugin
    this.tor.initialize();
  }

  // Start the Tor daemon
  startTor() {
    this.tor.startTor()
      .then(() => {
        console.log('Tor daemon started successfully');
      })
      .catch((error: any) => {
        console.error('Error starting Tor daemon:', error);
      });
  }

  // Stop the Tor daemon
  stopTor() {
    this.tor.stopTor()
      .then(() => {
        console.log('Tor daemon stopped successfully');
      })
      .catch((error: any) => {
        console.error('Error stopping Tor daemon:', error);
      });
  }

  // Reconnect to a new Tor circuit
  reconnectToTor() {
    this.tor.reconnectToTor()
      .then(() => {
        console.log('Successfully reconnected to Tor');
      })
      .catch((error: any) => {
        console.error('Error reconnecting to Tor:', error);
      });
  }

  // Change the Tor circuit
  changeTorCircuit() {
    this.tor.changeTorCircuit()
      .then(() => {
        console.log('Tor circuit changed successfully');
      })
      .catch((error: any) => {
        console.error('Error changing Tor circuit:', error);
      });
  }
}
```

In the above example, the `Tor` object is created to interact with the plugin. The `initialize` method is called in the constructor to initialize the plugin.

The `startTor` method starts the Tor daemon, `stopTor` method stops the Tor daemon, `reconnectToTor` method reconnects to a new Tor circuit, and `changeTorCircuit` method changes the Tor circuit.

Remember to handle any success or error callbacks appropriately in your application.

## Conclusion

The `@start9labs/capacitor-tor` package provides a convenient way to manage the Tor daemon in your mobile application. By following the installation steps and utilizing the provided methods, you can integrate Tor functionality into your Ionic app and communicate over Tor as a transport layer.