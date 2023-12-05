---
title: "Using Capacitor Nextcloud SSO Package"
description: "A step-by-step tutorial on how to use the capacitor-nextcloud-sso package in your Capacitor app."
created_at: "2022-09-20"
published: true
slug: "capacitor-nextcloud-sso"
---

# Using Capacitor Nextcloud SSO Package

In this tutorial, we will learn how to integrate the capacitor-nextcloud-sso package into your Capacitor app. The capacitor-nextcloud-sso package allows you to authenticate users with Nextcloud's Single Sign-On (SSO) service in your app.

## Installation

To get started, open your terminal and run the following commands:

```bash
$ yarn add capacitor-nextcloud-sso
$ npx cap sync
$ npx cap update
```

## URL Scheme Configuration

Next, you need to add a custom URL scheme to your app's Info.plist (for iOS) and AndroidManifest.xml (for Android). This URL scheme is required for successful authentication with Nextcloud SSO.

For iOS, add the following lines to your Info.plist file:

```xml
<key>CFBundleURLTypes</key>
<array>
    <dict>
        <key>CFBundleURLSchemes</key>
        <array>
            <string>com.myapp.capacitor-nextcloud-sso</string>
        </array>
    </dict>
</array>
```

For Android, add the following lines to your AndroidManifest.xml file:

```xml
<intent-filter>
    <action android:name="android.intent.action.VIEW" />

    <category android:name="android.intent.category.DEFAULT" />
    <category android:name="android.intent.category.BROWSABLE" />

    <data android:scheme="com.myapp.capacitor-nextcloud-sso" />
</intent-filter>
```

Make sure to replace `com.myapp.capacitor-nextcloud-sso` with your own unique URL scheme.

## Configuration in capacitor.config.json

Next, open your `capacitor.config.json` file and add the following configuration under the `plugins` section:

```json
"plugins": {
    "NextcloudSSO": {
        "serverUrl": "https://example.nextcloud.com",
        "redirectUrl": "com.myapp.capacitor-nextcloud-sso://auth",
        "clientId": "your-client-id",
        "scope": "openid email",
        "discoveryUrl": "https://example.nextcloud.com/.well-known/openid-configuration"
    }
}
```

- `serverUrl`: The URL of your Nextcloud server.
- `redirectUrl`: The URL scheme you defined earlier.
- `clientId`: Your Nextcloud client ID.
- `scope`: The desired scope for authentication. In this example, we request the user's OpenID and email.
- `discoveryUrl`: The discovery URL for OpenID configuration.

Make sure to replace the example values with your own Nextcloud server URL, client ID, and other relevant details.

## Usage

Now, you can use the capacitor-nextcloud-sso package in your app's code. Here's an example of how to authenticate a user with Nextcloud SSO and retrieve their access token:

```javascript
import { Plugins } from '@capacitor/core';

const { NextcloudSSO } = Plugins;

// Authenticate user with Nextcloud SSO
async function loginWithNextcloudSSO() {
    try {
        const { accessToken } = await NextcloudSSO.authenticate();
        console.log("Access Token:", accessToken);
        // Use the access token to make authenticated requests to Nextcloud API
    } catch (error) {
        console.error("Authentication failed:", error);
    }
}

// Call the loginWithNextcloudSSO function when user clicks a login button, for example
```

This code snippet demonstrates how to use the `authenticate` method provided by the capacitor-nextcloud-sso package to initiate the authentication process. The `accessToken` received in the response can be used to make authenticated requests to the Nextcloud API.

And that's it! You've successfully integrated the capacitor-nextcloud-sso package into your Capacitor app.

Feel free to explore the package's documentation for more advanced usage and additional features.

I hope you found this tutorial helpful. If you have any further questions, feel free to ask!