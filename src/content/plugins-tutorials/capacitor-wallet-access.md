---
title: "Using the capacitor-wallet-access Package"
description: "A tutorial on how to use the capacitor-wallet-access package in your Capacitor app."
created_at: "2021-10-14"
published: true
slug: "capacitor-wallet-access"
---

# Using the capacitor-wallet-access Package

In this tutorial, we will learn how to use the capacitor-wallet-access package, which provides easy access to the device's wallet functionality in Capacitor apps. With this package, you can interact with the native wallet features such as Apple Wallet or Google Pay.

## Installation

To get started, you need to install the capacitor-wallet-access package in your Capacitor project. Open your terminal and navigate to your project directory. Run the following command:

```bash
npm install capacitor-wallet-access
```

## Setup

After installing the package, you need to configure the capacitor-wallet-access plugin in your project.

### Android Configuration

For Android, open the `android/app/src/main/java/[...]/MainActivity.java` file and add the following import statement at the top:

```java
import com.getcapacitor.community.walletaccess.WalletAccess;
```

Then, add the `add(WalletAccess.class);` line inside the `init` function as shown below:

```java
public class MainActivity extends BridgeActivity {
  @Override
  public void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);

    // Initializes the Bridge
    this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {{
      // Additional plugins you've installed go here
      // Ex: add(TotallyAwesomePlugin.class);
      add(WalletAccess.class);
    }});
  }
}
```

### iOS Configuration

For iOS, open the `ios/App/AppDelegate.swift` file and add the following import statement at the top:

```swift
import CapacitorCommunityWalletAccess
```

Then, add the `registerPlugin(WalletAccess.self)` line inside the `func application` function as shown below:

```swift
import Capacitor
import CapacitorCommunityWalletAccess

@main
class AppDelegate: UIResponder, UIApplicationDelegate {
  // ...

  override func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplicationLaunchOptionsKey: Any]?) -> Bool {
    // ...

    // Register the plugin
    CAPBridgeViewController.registerPlugin(WalletAccess.self)

    // ...

    return true
  }

  // ...
}
```

## Usage

Now that we have installed and configured the capacitor-wallet-access package, let's explore its usage.

### Check Wallet Availability

To check if the wallet is available on the device, you can use the following code snippet:

```typescript
import { WalletAccess } from 'capacitor-wallet-access';

async function checkWalletAvailability(): Promise<boolean> {
  const walletAccess = new WalletAccess();
  const availability = await walletAccess.isAvailable();

  return availability;
}
```

The `isAvailable` method returns a boolean value indicating whether the wallet is available on the device or not.

### Add a Pass to the Wallet

To add a pass to the wallet, you need to provide the pass file path. Use the following code as an example:

```typescript
import { WalletAccess } from 'capacitor-wallet-access';

async function addPassToWallet(passFilePath: string): Promise<void> {
  const walletAccess = new WalletAccess();
  
  try {
    await walletAccess.addPass(passFilePath);
    console.log('Pass added to wallet successfully');
  } catch (error) {
    console.error('Failed to add pass to wallet:', error);
  }
}
```

The `addPass` method takes the pass file path as a parameter and adds it to the wallet. If the operation is successful, it will log a success message. Otherwise, it will log an error message.

### Other Wallet Operations

The capacitor-wallet-access package provides additional methods for interacting with the wallet, such as removing a pass, getting all passes, and updating a pass. You can explore the package documentation for more details on these operations.

## Conclusion

In this tutorial, we have learned how to use the capacitor-wallet-access package to interact with the device's wallet functionality in Capacitor apps. We covered the installation and configuration process and explored some basic wallet operations. Now, you can enhance your Capacitor app by integrating wallet features using this package. Happy coding!

*Note: Make sure to refer to the official capacitor-wallet-access package documentation for a more detailed understanding of its capabilities and API.*

*Tutorial created on: October 14, 2021.*