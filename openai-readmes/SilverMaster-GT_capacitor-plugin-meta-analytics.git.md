This is a fork from [sverdlov](https://github.com/sverdlov/capacitor-plugin-facebook-analytics)

**Current plugin version is for Capacitor 6**

I didn't test it standalone. I use it with Facebook SDK in my projects. Current Facebook SDK version in plugin is 17.4.0.
If you also have Facebook SDK in your project, I recommend to set its version to 17.4.0.


## Installation

To use with npm

```bash
$ npm i @silvermaster-gt/capacitor-plugin-meta-analytics
```

To use with yarn

```bash
yarn add @silvermaster-gt/capacitor-plugin-meta-analytics
```

## Android configuration

In file `android/app/src/main/AndroidManifest.xml`, add the following XML elements under `<manifest><application>` :

```diff
+ <meta-data android:name="com.facebook.sdk.ApplicationId" android:value="@string/facebook_app_id"/>
+ <meta-data android:name="com.facebook.sdk.ClientToken" android:value="@string/facebook_client_token"/>
```

In file `android/app/src/main/res/values/strings.xml` add the following lines :

```diff
+ <string name="facebook_app_id">[APP_ID]</string>
+ <string name="facebook_client_token">[CLIENT_TOKEN]</string>
```

Don't forget to replace `[APP_ID]` and `[CLIENT_TOKEN]` by your Facebook application ID and Client Token.

More information can be found here: https://developers.facebook.com/docs/app-events/getting-started-app-events-android

## iOS configuration

Add the following in the `ios/App/App/info.plist` file:

```diff
+ <key>FacebookAppID</key>
+ <string>[APP_ID]</string>
+ <key>FacebookDisplayName</key>
+ <string>[APP_NAME]</string>
+ <key>FacebookClientToken</key>
+ <string>[CLIENT_TOKEN]</string>
```
You may also need some additional parameters.
More information can be found here: https://developers.facebook.com/docs/app-events/getting-started-app-events-ios

You have to implement _setAdvertiserTrackingEnabled_ method for iOS before sending events. See more here https://developers.facebook.com/docs/audience-network/setting-up/platform-setup/ios/advertising-tracking-enabled

## Supported methods

| Name                  | Android | iOS | Web |
| :-------------------- | :------ | :-- | :-- |
| logEvent              | ✅      | ✅  | ❌ |

## API

```ts
import { FacebookAnalytics } from 'capacitor-plugin-meta-analytics';

// Example commands.
await FacebookAnalytics.setAdvertiserTrackingEnabled(options: { enabled: boolean }): Promise<string>;
await FacebookAnalytics.logEvent(options: { event: string, params?: any }): Promise<string>;
await FacebookAnalytics.logPurchase(options: {amount: number, currency: string, params: any}): Promise<string>;
await FacebookAnalytics.logAddPaymentInfo(options: {success: number}): Promise<string>;
await FacebookAnalytics.logAddToCart(options: {amount: number, currency: string, params?: any}): Promise<string>;
await FacebookAnalytics.logCompleteRegistration(options: {params?: any}): Promise<string>;
await FacebookAnalytics.logInitiatedCheckout(options: {amount: number, params?: any}): Promise<string>;
```
