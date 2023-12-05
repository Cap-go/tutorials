---
title: "Using AppleSignInPlugin Package"
description: "A tutorial on how to use the AppleSignInPlugin package in an Ionic application."
created_at: "2021-09-28"
published: true
slug: "applesigninplugin"
---

# Using AppleSignInPlugin Package

This tutorial will guide you through the process of integrating the AppleSignInPlugin package into your Ionic application. The plugin allows you to implement Apple Sign In functionality, providing your users with a seamless login experience.

## Prerequisites

Before getting started, make sure you have the following requirements:

- iOS platform: This plugin is available for iOS devices only.
- Capacitor: Ensure that you have Capacitor installed in your Ionic project.

## Installation

To install the AppleSignInPlugin package, run the following command in your project directory:

```shell
npm install id-applesigninplugin
```

## Usage Example

Here is an example of how to use the AppleSignInPlugin in an Ionic page:

```typescript
import { Component } from '@angular/core';
import { Plugins } from "@capacitor/core";

const { IDAppleSignInPlugIn } = Plugins;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor() {}

  handleAppleSignIn() {
    IDAppleSignInPlugIn.doAppleLogin().then((info) => {
      if (info) {
        console.log("Received Info:");
        console.log(info);
        let identityTokenString = info["identityTokenString"];
        if (identityTokenString) {
          console.log("Received Identity Token: " + identityTokenString);
        }
      } else {
        console.log("No info received");
      }
    });
  }
}
```

In the above example, we import the necessary plugins and define a page component. Inside the `handleAppleSignIn` method, we call the `doAppleLogin` function provided by the AppleSignInPlugin. The result is then logged to the console.

## API

The AppleSignInPlugin provides the following method:

```typescript
IDAppleSignInPlugIn.doAppleLogin().then((info) => {
  // Handle the sign in information here
});
```

The sign in information is returned in the `info` parameter, which includes:

- `user`: User identifier
- `email`: User email
- `identityTokenString`: Token identifier
- ...

Please refer to the [Apple documentation](https://developer.apple.com/documentation/authenticationservices/asauthorizationappleidcredential) for more information on possible values.

That's it! You have now successfully integrated the AppleSignInPlugin into your Ionic application. Enjoy seamless Apple Sign In functionality for your users.