# Rolster Capacitor AppReview

Use plugin for manage contact list of Device.

## Installation

Package only supports Capacitor 5

```
npm i @rolster/capacitor-app-review
```

## Supported platforms

* iOS
    - Supported iOS 10.3+ only
    - [iOS limits the frequency of displaying The Rating dialog](https://developer.apple.com/design/human-interface-guidelines/ios/system-capabilities/)

* Android
    - After the account on the device has downloaded the app at least once from the internal test track and is part of the testers list, you can deploy new versions of the app and call `request` in debug mode
    - AppReview require your app to be published in Play Store
    - [Google Play enforces a quota on how often a user can be shown the review dialog](https://developer.android.com/guide/playcore/in-app-review#quotas)

### Android configuration

And register the plugin by adding it to you MainActivity's onCreate:

```java
import com.rolster.capacitor.review.AppReviewPlugin;

public class MainActivity extends BridgeActivity {
  @Override
  public void onCreate(Bundle savedInstanceState) {
    registerPlugin(AppReviewPlugin.class);
    // Others register plugins

    super.onCreate(savedInstanceState);
  }
}
```

### Implementation

Launches in-app review dialog.

```ts
import { AppReview } from '@rolster/capacitor-app-review';

AppReview.request();
// request dialog and provide fallback
AppReview.request().catch(() => AppReview.openStoreScreen());
```
