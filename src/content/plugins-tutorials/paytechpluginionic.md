---
title: "Using the PaytechPlugin Package in Ionic"
description: "A tutorial on how to integrate and use the PaytechPlugin package in an Ionic application"
created_at: "2022-03-15"
published: true
slug: "paytechpluginionic"
---

# Using the PaytechPlugin Package in Ionic

In this tutorial, we will learn how to integrate and use the PaytechPlugin package in an Ionic application. The PaytechPlugin package provides seamless integration of payment services into your Ionic app, allowing you to process payments easily and securely.

## Installation

To get started, open your Ionic project's root folder and run the following command to install the PaytechPlugin package:

```bash
npm install paytech-plugin
```

Next, you need to synchronize your Ionic project with the installed package. Run the following command to sync your project:

```bash
npx cap sync
```

## Configuration

Once the PaytechPlugin package is installed, you need to configure it in your Ionic project.

### Android Configuration

Open your project in Android Studio by running the following command:

```bash
npx cap open android
```

In your Android Studio project, locate the `MainActivity.java` file under `app/src/main/java/your/package/name/`. Add the following import statement at the top of the file:

```java
import com.paytech.paytechplugin.PaytechPlugin;
```

Next, add the `PaytechPlugin` to the list of plugins in your project by modifying the `MainActivity.java` file as follows:

```java
...
import com.paytech.paytechplugin.PaytechPlugin; // Import the PaytechPlugin

public class MainActivity extends BridgeActivity {
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        // Add the PaytechPlugin to the list of plugins
        this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {{
            add(PaytechPlugin.class); 
            // Add any other plugins you are using
        }});
    }
}
```

Save the file and rebuild your Android project.

### iOS Configuration

Open your project in Xcode by running the following command:

```bash
npx cap open ios
```

In Xcode, locate the `AppDelegate.swift` file under `App/App/`. Add the import statement for the `PaytechPlugin` at the top of the file:

```swift
import PaytechPlugin
```

Next, add the `PaytechPlugin` to the list of plugins in your `AppDelegate.swift` file as follows:

```swift
...
import PaytechPlugin // Import the PaytechPlugin

@UIApplicationMain
class AppDelegate: UIResponder, UIApplicationDelegate {
    ...
    func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
        // Add the PaytechPlugin to the list of plugins
        self.window?.rootViewController?.initPlugin(PaytechPlugin.self)
        return true
    }
    ...
}
```

Save the file and rebuild your iOS project.

## Usage

Now that the PaytechPlugin is configured in your Ionic project, you can start using it to process payments.

To charge a card, you can use the following code:

```typescript
import { Plugins } from '@capacitor/core';

const { PaytechPlugin } = Plugins;

const chargeCard = async () => {
  // Initialize the PaytechPlugin with your API key
  await PaytechPlugin.initialize({ apiKey: "YOUR_API_KEY" });

  // Add customer card information
  await PaytechPlugin.addCard({
    cardNumber: "1234567890123456",
    expiryMonth: "12",
    expiryYear: "2024",
    cvv: "123"
  });

  // Add the email to charge
  await PaytechPlugin.setChargeEmail({ email: "example@example.com" });

  // Set the amount to charge the card (in cents)
  await PaytechPlugin.setChargeAmount({ amount: 1000 });

  // Call the chargeCard method to process the payment
  const chargeResponse = await PaytechPlugin.chargeCard();
  // Do something with the charge response
};

chargeCard();
```

You can customize the code according to your specific requirements, such as adding metadata, additional parameters, or handling the charge response.

## Conclusion

In this tutorial, we have learned how to integrate the PaytechPlugin package into an Ionic application and process payments using the plugin. You can now incorporate payment services into your Ionic app and provide a seamless payment experience for your users.

Remember to handle errors, implement security measures, and follow best practices when processing payments in your application.