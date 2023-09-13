# Using the Capacitor Razorpay Package

This tutorial will guide you through the steps to integrate the Capacitor Razorpay package into your Capacitor project.

## Step 1: Install the Package

To install the Capacitor Razorpay package, run the following command in your project's root directory:

```bash
npm install @capacitor-community/razorpay
```

## Step 2: Sync Capacitor

Next, sync your Capacitor project to update the platform-specific code:

```bash
npx cap sync
```

## Step 3: Add Required Permissions

For Android, open your app's `AndroidManifest.xml` file located at `android/app/src/main/AndroidManifest.xml` and add the following permissions:

```xml
<uses-permission android:name="android.permission.INTERNET"/>
<uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />
```

## Step 4: Configure Razorpay Keys

Open your app's `MainActivity.java` file located at `android/app/src/main/java/{your_package_name}/MainActivity.java`. Import the necessary libraries at the top of the file:

```java
import com.capacitorcommunity.razorpay.RazorpayPlugin;
import com.razorpay.RazorpayPackage;
```

Add the `RazorpayPlugin` and `RazorpayPackage` to the list of plugins:

```java
public class MainActivity extends BridgeActivity {
  @Override
  public void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);

    // Initializes the Bridge
    this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {{
      // Add RazorpayPlugin and RazorpayPackage to plugins list
      add(RazorpayPlugin.class);
      add(RazorpayPackage.class);
    }});
  }
}
```

## Step 5: Initialization

To initialize Razorpay in your app, open your `MainActivity.java` file and add the following code inside the `onCreate` method:

```java
import com.capacitorcommunity.razorpay.Razorpay;
import com.capacitorcommunity.razorpay.RazorpayPlugin;

...

RazorpayPlugin.registerWithRazorpay(Razorpay.INSTANCE.init(this));
```

## Step 6: Usage

Now you can use the Razorpay package in your JavaScript code. First, import the package:

```javascript
import { Plugins } from '@capacitor/core';
const { Razorpay } = Plugins;
```

To initiate a payment, call the `Razorpay.open()` method:

```javascript
Razorpay.open({
  amount: '1000',
  currency: 'INR',
  description: 'Payment',
  image: 'https://www.example.com/logo.png',
  key: 'YOUR_RAZORPAY_KEY',
  name: 'Your App Name',
  order_id: 'YOUR_ORDER_ID',
  prefill: {
    email: 'user@example.com',
    contact: '1234567890',
    name: 'John Doe'
  },
  theme: {
    color: '#F37254'
  }
}).then((response) => {
  // Handle success
  console.log(response);
}).catch((error) => {
  // Handle error
  console.error(error);
});
```

That's it! You have successfully integrated the Capacitor Razorpay package into your Capacitor project.

For more information and detailed documentation, please refer to the official Capacitor Razorpay documentation: [Capacitor Razorpay Documentation](https://github.com/capacitor-community/razorpay)