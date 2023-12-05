---
title: "Using the msadal-ios Package"
description: "Learn how to use the msadal-ios package to authenticate and authorize with Azure Active Directory in your iOS app."
created_at: "2021-10-22"
published: true
slug: "msadalios"
---

# Using the msadal-ios Package

The msadal-ios package provides a convenient way to authenticate and authorize users in your iOS app using Azure Active Directory (AAD). In this tutorial, we will guide you through the steps of integrating the msadal-ios package into your iOS project and using it to authenticate users with AAD.

## Prerequisites

Before we begin, make sure you have the following:

- Xcode installed on your machine
- An internet connection

## Step 1: Installation

To start using the msadal-ios package, you need to add it to your project. Follow these steps to install the package:

1. Open Terminal and navigate to your project directory.
2. Run the command `npm install msadal-ios --save` to install the package and save it as a dependency in your project.

## Step 2: Import the Package

In the file where you want to use the msadal-ios package, import the `ADAuthentication` class from the package. You can do this using the following code snippet:

```swift
import { ADAuthentication } from "msadal-ios";
```

## Step 3: Initialize the ADAuthentication Object

Create an instance of the `ADAuthentication` class in your code. This object will be used to interact with AAD and perform authentication operations. You can initialize the object by using the following code snippet:

```swift
public MSAL = new ADAuthentication();
```

## Step 4: Authenticate with AAD

To authenticate a user with AAD, use the `initADAL` method of the `ADAuthentication` object. This method takes the following parameters:

- `ClientID`: The client ID of your registered AAD application.
- `GraphURI`: The URI of the AAD Graph API.
- `Authority`: The authority URL of your AAD tenant.
- `RedirectUri`: The redirect URI for your application.

```swift
const accessToken = await this.MSAL.initADAL(
  this.ClientID,
  this.GraphURI,
  this.Authority,
  this.RedirectUri
);
```

The `initADAL` method returns an access token that can be used to authenticate API requests to AAD.

## Step 5: Use the Access Token

Once you have obtained the access token, you can use it to authenticate API requests to AAD. Include the access token in the authorization header of your requests using the `Authorization` header key. Here's an example of how to make an authenticated request using the access token:

```swift
const headers = {
  Authorization: `Bearer ${accessToken}`,
};

// Make an authenticated API request
const response = await fetch(apiUrl, { headers });
```

You can now use the response from the API request to perform further operations in your app.

## Conclusion

In this tutorial, we learned how to use the msadal-ios package to authenticate and authorize users with Azure Active Directory in your iOS app. We covered the steps of installation, importing the package, initializing the ADAuthentication object, authenticating with AAD, and using the access token to make authenticated API requests. With this knowledge, you can now integrate AAD authentication into your iOS app and provide secure access to your app's resources.

Remember to refer to the msadal-ios package documentation for more details and advanced usage scenarios. Happy coding!