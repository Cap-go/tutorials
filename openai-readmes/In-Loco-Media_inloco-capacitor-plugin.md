![Logo](https://mobile-api.s3.amazonaws.com/Extras/inloco-logo-medium.png)

# Inloco Capacitor SDK

# Disclaimer

This plugin is a work in progress and we don't offer any official support yet. Currently it is intended to be used as a kickstarter for Ionic integrations.

# Capacitor

In order to use this plugin into your Ionic app Capacitor must be integrated first. [Capacitor](https://capacitorjs.com/docs) is a cross-platform native runtime that makes it easy to build web apps that run natively on iOS, Android, and the web. Representing the next evolution of Hybrid apps, it provides a modern native container approach for teams who want to build web-first apps with full access to native SDKs when they need it. For the newest versions of Ionic CLI, Capacitor is the recommended tool to handle Native SDKs.

> **Cordova vs Capacitor**
> In this [article](https://ionicframework.com/resources/articles/capacitor-vs-cordova-modern-hybrid-app-development), you can find information about how Capacitor stacks up against Cordova as the preferred foundation for hybrid mobile apps.

## Migrating your app to Capacitor

Capacitor is [easily installed directly](https://capacitorjs.com/docs/getting-started/with-ionic) into any Ionic project (1.0-4.x+). The official documentation also provides a more detailed step-by-step [guide](https://capacitorjs.com/docs/cordova/migrating-from-cordova-to-capacitor) about how to migrate from Cordova to Capacitor.

> **Migration Strategy**
> We strongly recommend you to read the [Migration Strategy](https://capacitorjs.com/docs/cordova/migration-strategy) article first. This article list all consideration you must have before starting the migration.

## Application Creation

It is necessary to register your **Application** [](https://www.notion.so/learning/concepts/applications)at our dashboard for **each** of your mobile app platforms. An Application contains an unique identifier, the **[App](https://docs.incognia.com/learning/concepts/identifiers/app-id) [Id](https://www.notion.so/learning/concepts/identifiers/app-id)**, which is required to initialize the Incognia SDK.

To create a new Application, go to the **[Applications](https://dash.inloco.ai/myapps)** page and select a platform on the `Add App`card.

![application creation](https://mobile-api.s3.amazonaws.com/Extras/capacitor-doc-application-creation.png)

Fill the application name , package and privacy policy url , then click Add App.

![add app](https://mobile-api.s3.amazonaws.com/Extras/capacitor-doc-add-app.png)

> **Important**
> As we don't support Ionic officially you will need to choose React Native as platform and, you will need to create an Application for Android and another for iOS.

# SDK Integration

After creating your Application, you can now start integrating the Incognia SDK. To do it, visit your applications page on the **[Inloco Platform](https://dash.inloco.ai/myapps)** and click on Integrate SDK.

![Integration](https://mobile-api.s3.amazonaws.com/Extras/capacitor-doc-integration.png)

To successfully integrate the Incognia SDK into your company's Ionic app, follow the steps below.

> **Capacitor is required**
> Starting from this part of the guide, it is assumed that your app have Capacitor already installed or the migration from Cordova was made.

## Minimum requirements

First, check out if you fulfill the SDK minimum requirements.

| Requirements                  |        Version        |
| ----------------------------- | :-------------------: |
| Capacitor                     |           2           |
| Minimum Android SDK version   | API level 21 or above |
| Android Support               |          v4           |
| Google Play Services Ads      |         12.+          |
| Google Play Services Location |         12.+          |
| Android WebView with Chrome   |      50 or above      |
| XCode                         |      11 or above      |
| CocoaPods                     |    1.2.0 or higher    |
| Minimum iOS version           |      11 or above      |

## Installing the module

From the command line:

```bash
npm install inloco-capacitor-plugin@0.1.1 --save
```

## Include the required Android permissions

Add the following `<user-permission>` tags inside the tag `<manifest>` to your manifest file located at `path-to-your-app/android/app/src/main/AndroidManifest.xml`.

```xml
<manifest>
  <!-- Required for connectivity access -->
  <uses-permission android:name="android.permission.INTERNET" />
  <uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />

  <!-- Required for location services -->
  <uses-permission android:name="android.permission.ACCESS_WIFI_STATE" />
  <uses-permission android:name="android.permission.CHANGE_WIFI_STATE" />
  <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />

  <!-- Improves location accuracy and battery consumption -->
  <uses-permission  android:name="com.google.android.gms.permission.ACTIVITY_RECOGNITION"/>

  <!-- Allows the SDK to restart itself after the device is rebooted -->
  <uses-permission android:name="android.permission.RECEIVE_BOOT_COMPLETED"/>

  <!-- For apps targeting Android 10 (29) and higher only -->
  <uses-permission android:name="android.permission.ACTIVITY_RECOGNITION"/>
  <uses-permission android:name="android.permission.ACCESS_BACKGROUND_LOCATION"/>
</manifest>
```

## Permissions on iOS

To prepare your app for requesting runtime permissions, you must add keys with purpose strings to your app's `Info.plist` file. The system displays your purpose strings in the authorization request dialogs. Configure the keys in Xcode with the following keys:

| Key                                          |                               Description                               |
| -------------------------------------------- | :---------------------------------------------------------------------: |
| NSLocationWhenInUseUsageDescription          |  Your app requests When In Use authorization or Always authorization.   |
| NSLocationAlwaysAndWhenInUseUsageDescription |                 Your app requests Always authorization.                 |
| NSLocationAlwaysUsageDescription             | Your app supports iOS 10 and earlier and requests Always authorization. |

> **Important**
> You must add the required keys to your app’s `Info.plist` file. If a required key isn’t present, authorization requests fail immediately.

## Plugin Registration

In Android it is required to register the Inloco plugin in order to Capacitor make it available in the WebView.
Register the plugin in your main Activity like this:

```java
//Other imports...
import com.inlocomedia.engage.InlocoEngage;

public class MainActivity extends BridgeActivity {
  @Override
  public void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);

    // Register the plugin
    this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {{
      add(InlocoEngage.class);
    }});
  }
}
```

## Initialize the SDK

The Inloco SDK initialization relies on the presence of an `inloco.xml` file in the `app/src/main/res/values` directory in your Android project and an `InLocoOptions.plist` file in your iOS project.

Now, in the method `initializeApp` of your main App component, initialize the Inloco SDK as shown below:

```tsx
import { Component } from '@angular/core'
import { Platform } from '@ionic/angular'
import { InLoco } from 'inloco-capacitor-plugin'

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private platform: Platform) {
    this.initializeApp()
  }

  initializeApp() {
    this.platform.ready().then(() => {
      InLoco.init()
    })
  }
}
```

If the SDK was initialized properly, the following lines should be printed on the native console logs when your app is executed:

**Android**

```bash
I/InLocoMedia: In Loco Engage 5.x.x is running
I/InLocoMedia: In Loco 5.x.x is running
I/InLocoMedia: The installation identifier is: <YOUR-INSTALLATION-IDENTIFIER>
```

**iOS**

```bash
InLoco-Engage-Sample - InLocoMedia: In Loco Location SDK v5.x.x is running.
InLoco-Engage-Sample - InLocoMedia: In Loco Engage SDK v5.x.x is running.
InLoco-Engage-Sample - InLocoMedia: This device identifier is <YOUR-DEVICE-IDENTIFIER>.
```

> **Important**
> Every time you perform a build (e.g. ionic build) that changes your web directory, you'll need to sync those changes down to your native projects:
> `npx cap sync`

## Request runtime permissions

The steps above will enable the SDK, but your application will need to request the location permissions to the user on its own. You can do it using a library such as [Diagnostic](https://ionicframework.com/docs/native/diagnostic) as seen below:

```tsx
//...
import { Diagnostic } from '@ionic-native/diagnostic/ngx';

@NgModule({
  //...
  providers: [
    //...
    Diagnostic,
  ]
})
```

```tsx
import { Diagnostic } from '@ionic-native/diagnostic/ngx';
//...
constructor(private diagnostic: Diagnostic) {
	//...
}
//Runtime permission request
this.diagnostic.isLocationAuthorized()
    .then((isAuthorized) => {
      if (!isAuthorized) {
        //Request is made base on platform and API version
        this.diagnostic.requestLocationAuthorization(this.diagnostic.locationAuthorizationMode.ALWAYS)
            .catch(e => console.error(e));
      }
    })
    .catch(e => console.error(e));
```

Diagnostic implementation
Check [isLocationAuthorized](https://github.com/dpa99c/cordova-diagnostic-plugin#islocationauthorized) and [requestLocationAuthorization](https://github.com/dpa99c/cordova-diagnostic-plugin#requestlocationauthorization) documentation for more info.

> **Attention**
> The Incognia SDK makes use of Apple's Visits Location Service, which requires the **Always authorization**. Not being able to acquire this authorization may greatly reduce the frequency of location-based features. More about the Visits Location Service can be found here.
> It is extremely important that the user is asked for location permissions and that the app has a relevant reason to do so.

---

## **Set and clear user ids**

The Incognia SDK automatically generates and synchronizes unique device IDs with the Incognia backend. However, your application and backend systems might **use your own User IDs**. Passing your User ID to the Incognia SDK allows for easier integration and control, as your User ID will be readily available as an alias.

> **Attention**
> An identifier is a piece of information that is associated with a unique user. While data such as e-mail and phone number are examples of identifiers, their use in the Incognia SDK is forbidden. Consider using non-personal information, such as UUIDs, when setting a User ID.

### **Setting User IDs**

The Incognia SDK provides a User ID setter for passing this information when it is available in your app. This setting is persisted between sessions.

```tsx
InLoco.setUser('YOUR_USER_ID')
```

Setting the User ID might trigger a network request to update the Incognia backend.

### **Clearing User IDs**

You can also clear a previous set User ID using the following method:

```tsx
InLoco.clearUser()
```

> **Tips:** If your app uses authentication, it is recommended that the user information is passed during login, and cleared during logout.

---

# Secure new customers with address verification

Through network signals and device sensor data, our Address Verification feature analyzes location behavior to confirm if users actually live at the address provided during new customer onboarding. Learn how this features works.

![Secure](https://mobile-api.s3.amazonaws.com/Extras/capacitor-doc-secure.png)

![Address Verification](https://mobile-api.s3.amazonaws.com/Extras/capacitor-doc-av.png)

## **Submitting user address using SDK**

Visit your applications page on **[Inloco Platform](https://dash.inloco.ai/myapps)** and click on `Integrate anti-fraud` to begin.

![https://gblobscdn.gitbook.com/assets%2F-M6pEqY5IXA2-iuPS9L_%2F-MCi1ctOYFsmeh5-VxLJ%2F-MCi26uOYAtUNQiZgaty%2Fdemo-3.gif?alt=media&token=91bf348f-7f5c-4a08-b704-2cd43d89c3bf](https://gblobscdn.gitbook.com/assets%2F-M6pEqY5IXA2-iuPS9L_%2F-MCi1ctOYFsmeh5-VxLJ%2F-MCi26uOYAtUNQiZgaty%2Fdemo-3.gif?alt=media&token=91bf348f-7f5c-4a08-b704-2cd43d89c3bf)

If you integrated the SDK through, you have already completed the `Location Permissions` and `User ID` steps:

![https://gblobscdn.gitbook.com/assets%2F-M6pEqY5IXA2-iuPS9L_%2F-MCi-P3oJ3nGHir1Il9d%2F-MCi0xRxuH0Cg4-keUsc%2Fimage.png?alt=media&token=dca8ee13-39fd-4227-9093-a7b5ce54434d](https://gblobscdn.gitbook.com/assets%2F-M6pEqY5IXA2-iuPS9L_%2F-MCi-P3oJ3nGHir1Il9d%2F-MCi0xRxuH0Cg4-keUsc%2Fimage.png?alt=media&token=dca8ee13-39fd-4227-9093-a7b5ce54434d)

Send the user's address to Incognia to validate if this address belongs to the informed user. To register an user address using Incognia SDK, you need to create an object for the address. Just follow the example below. 🏠

```tsx
var address = {
  locale: LOCALE,
  countryName: COUNTRY_NAME,
  countryCode: COUNTRY_CODE,
  adminArea: ADMIN_AREA,
  subAdminArea: SUB_ADMIN_AREA,
  locality: LOCALITY,
  subLocality: SUB_LOCALITY,
  thoroughfare: THOROUGHFARE,
  subThoroughfare: SUB_THOROUGHFARE,
  postalCode: POSTAL_CODE,
}
```

| Field           |             Description              |               Example |
| --------------- | :----------------------------------: | --------------------: |
| locale          |   Refers to the Address Language.    |               "pt_BR" |
| countryName     |          The country name.           |              "Brasil" |
| countryCode     |          The country code.           |                  "BR" |
| adminArea       |              The state.              |          "Pernambuco" |
| subAdminArea    |          The country city.           |              "Recife" |
| locality        |              The city.               |              "Recife" |
| subLocality     |        The city neighborhood.        |          "Boa Viagem" |
| thoroughfare    |             The street.              | "Antonio Goes Street" |
| subThoroughfare | The building number or number range. |                "300A" |
| postalCode      |           The postal code.           |           "51110-100" |

Once the user's address is defined, it can be passed to the Incognia SDK.

```tsx
InLoco.setUserAddress(address)
```

And that's it. You submitted the user address.

---

# Prevent account takeover

Mitigate mobile fraud by verifying the location of a device at the exact moment that an important in-app action takes place. If the real-time location deviates from the device's historical location pattern, step-up authentication can be triggered. Learn how this feature works.

![Account Takeover](https://mobile-api.s3.amazonaws.com/Extras/capacitor-doc-account-takeover.png)

## **Triggering location updates**

The code below sends an event to Incognia with the current location associated.

> **Tips:** Replace `your_event_name` with an event name that explains the user action. Exemplifying: `user_started_transaction`

```tsx
//is optional
/*{
  "custom_key_1": "custom_value_1",
  "custom_key_2": "custom_value_2"
}*/
InLoco.trackLocalizedEvent('your_event_name', {
  custom_key_1: 'custom_value_1',
  custom_key_2: 'custom_value_2',
})
```

---

## Getting the Installation ID

The Installation ID is a unique identifier that is automatically generated for each instance of your company's app. It is used to reference a specific installation when interacting with Inloco SDK.

Once generated, the Installation ID remains the same until the user **re-installs** the app or **clears** its data. It is important to obtain the Installation ID and associate it with your users on the server to be able to use the some of our features.

The code below shows how to obtain the Installation ID using the Inloco SDK:

```tsx
InLoco.getInstallationId().then((installationId) => {
  console.log('installationId: ' + installationId.value)
})
```
