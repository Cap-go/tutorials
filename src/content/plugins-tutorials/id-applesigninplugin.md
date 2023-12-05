---
title: "Using the id-applesigninplugin Package"
description: "This tutorial will guide you through the process of implementing Apple SignIn in your Ionic application using the id-applesigninplugin package."
createdAt: "2021-07-07"
published: true
slug: "id-applesigninplugin"
---

# Using the id-applesigninplugin Package

The id-applesigninplugin package provides an easy way to integrate Apple SignIn into your Ionic application. This tutorial will walk you through the installation process and demonstrate how to use the plugin in your Ionic pages.

## Prerequisites

- Knowledge of Ionic framework
- Basic understanding of iOS development

## Installation

To get started, install the id-applesigninplugin package by running the following command in your project directory:

```sh
npm install id-applesigninplugin
```

## Adding Apple Signin Capabilities

As this plugin is only compatible with iOS, you need to add the Apple Signin capabilities to your Ionic project. Follow these steps to do so:

1. Open your Ionic project in Xcode.
2. Go to "Signing & Capabilities" tab in your project settings.
3. Click on the "+" button to add a new capability.
4. Search for "Sign In with Apple" and enable it.
5. Make sure the correct "Team" is selected.
6. Build and run your Ionic application to apply the changes.

## Usage

Now that you have installed the id-applesigninplugin package and added the necessary capabilities, you can start using it in your Ionic pages. Here's an example of how to implement Apple SignIn in your page:

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

  loginWithApple() {
    IDAppleSignInPlugIn.doAppleLogin().then((info) => {
      if (info) {
        console.log("Received info:");
        console.log(info);
        let identityTokenString = info["identityTokenString"];
        if (identityTokenString) {
          console.log("Received identity token: " + identityTokenString);
        }
      } else {
        console.log("No info received");
      }
    });
  }

}
```

In the above example, we import the necessary modules and define a click event handler called `loginWithApple()`. Inside this handler, we call the `doAppleLogin()` method provided by the `IDAppleSignInPlugIn` module. Once the login is complete, we can access the sign in information in the `info` parameter. The identity token is stored in the `identityTokenString` property.

## Sign In Information

The `IDAppleSignInPlugIn.doAppleLogin()` method returns a JSON object containing various information related to the sign in. Here are some of the available properties:

- `user`: User identifier
- `email`: User email
- `identityTokenString`: Token identifier

Please refer to the [Apple documentation](https://developer.apple.com/documentation/authenticationservices/asauthorizationappleidcredential) for more details on the possible values.

## Conclusion

In this tutorial, we have learned how to install and use the id-applesigninplugin package to integrate Apple SignIn into an Ionic application. By following the steps outlined in this tutorial, you can easily implement Apple SignIn functionality and access the user's sign in information in your Ionic pages.