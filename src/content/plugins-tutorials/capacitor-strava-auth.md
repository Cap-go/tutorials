---
title: "Using @timmedia/capacitor-strava-auth Package"
description: "A tutorial on how to use the @timmedia/capacitor-strava-auth package to authenticate with the Strava API in a Capacitor app."
created_at: "2021-09-06"
published: true
slug: "capacitor-strava-auth"
---

# Using @timmedia/capacitor-strava-auth Package

In this tutorial, we will explore how to use the **@timmedia/capacitor-strava-auth** package to authenticate with the Strava API in a Capacitor app. The package allows you to integrate Strava's authentication flow seamlessly into your app, supporting iOS, Android, and web platforms.

## Installation

To install the **@timmedia/capacitor-strava-auth** package, run the following command:

```bash
npm install @timmedia/capacitor-strava-auth
```

After installing the package, synchronize the changes with Capacitor:

```bash
npx cap sync
```

## Authorization

The package provides a single method **authorize()** that you can use to initiate the authorization process. The method takes an **options** object as a parameter. Here's an example of how to use the **authorize()** method:

```typescript
import { Plugins } from '@capacitor/core';
const { StravaAuth } = Plugins;

async function authorizeStrava() {
  const options = {
    // Specify your redirect URI
    redirectUri: 'myapp://redirect',
    // Add any desired scope(s)
    scope: 'read,activity:write',
  };

  await StravaAuth.authorize(options);
}
```

In the above code snippet, we import the **StravaAuth** plugin from the **@capacitor/core** package and define an **authorizeStrava()** function. Inside the function, we create an **options** object where we specify the redirect URI and desired scope(s). The redirect URI should be a deep link that you can handle in your app to extract the authorization code, state, and scope.

Next, we call the **authorize()** method with the **options** object, and await its completion.

## Handling the Authorization Response

After the user grants authorization on the Strava authentication page, the authorized Strava application or the Strava web authorization page will redirect back to your app using the specified redirect URI. It is your responsibility to handle this redirect and exchange the authorization code for an access token.

In your app, handle the redirect URI by implementing a deep link handler. Extract the authorization code, state, and scope from the URI parameters and exchange the authorization code for an access token using your preferred method.

## Additional Configuration

### iOS

To allow your app to open the Strava app if installed, add the following entry to your iOS project's **Info.plist** file:

```xml
<key>LSApplicationQueriesSchemes</key>
<array>
  <string>strava</string>
</array>
```

### Web

On the web platform, the Strava web authorization page will be opened if the Strava app is not installed. Make sure to specify a deep link as the redirect URI, and handle the parameters accordingly in your app.

## Conclusion

In this tutorial, we have learned how to use the **@timmedia/capacitor-strava-auth** package to authenticate with the Strava API in a Capacitor app. We explored the installation process, how to initiate the authorization flow, and how to handle the authorization response. Additionally, we covered some additional configuration steps for iOS and web platforms. With this knowledge, you can easily integrate Strava authentication into your Capacitor app and access the Strava API's features.