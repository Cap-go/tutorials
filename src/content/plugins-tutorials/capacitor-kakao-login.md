---
title: "Using @onout/capacitor-kakao-login Package"
description: "Learn how to use the @onout/capacitor-kakao-login package to integrate KakaoTalk login into your Capacitor app."
created_at: "2021-10-12"
published: true
slug: capacitor-kakao-login
---

# Using @onout/capacitor-kakao-login Package

The `@onout/capacitor-kakao-login` package provides a simple way to integrate KakaoTalk login functionality into your Capacitor app. This tutorial will guide you through the installation process and demonstrate how to use the package's API to implement KakaoTalk login features.

## Prerequisites

Before getting started, make sure you have the following prerequisites:

- Node.js and npm installed on your machine.
- Capacitor installed in your project.
- A KakaoDevelopers account and an app registered on the Kakao Developers platform.

## Installation

To install the `@onout/capacitor-kakao-login` package, open your project's terminal and run the following command:

```bash
npm install @onout/capacitor-kakao-login
npx cap sync
```

## API Overview

The `@onout/capacitor-kakao-login` package provides the following API methods:

- `goLogin()`: Initiates the KakaoTalk login process and returns an access token along with other information.
- `goLogout()`: Logs the user out of KakaoTalk.
- `getUserInfo()`: Retrieves the user's information from KakaoTalk.
- `sendLinkFeed(options)`: Sends a link feed to a KakaoTalk channel.
- `talkInChannel(options)`: Opens a KakaoTalk channel chat room.

## Usage

### KakaoTalk Login

To initiate the KakaoTalk login process, use the `goLogin()` method. It returns a promise that resolves with an object containing the access token and other relevant information. Here's an example:

```javascript
import { Plugins } from '@capacitor/core';

const { CapacitorKakaoLogin } = Plugins;

// ...

async function login() {
  try {
    const loginResult = await CapacitorKakaoLogin.goLogin();
    console.log(loginResult);
    // Handle the login result
  } catch (error) {
    console.error(error);
    // Handle errors
  }
}
```

### KakaoTalk Logout

To log the user out of KakaoTalk, use the `goLogout()` method. It also returns a promise. Here's an example:

```javascript
async function logout() {
  try {
    await CapacitorKakaoLogin.goLogout();
    // User is logged out
  } catch (error) {
    console.error(error);
    // Handle errors
  }
}
```

### Retrieve User Information

To retrieve the user's information from KakaoTalk, use the `getUserInfo()` method. It returns a promise with the user's information as the result. Here's an example:

```javascript
async function getUser() {
  try {
    const userInfo = await CapacitorKakaoLogin.getUserInfo();
    console.log(userInfo);
    // Process user information
  } catch (error) {
    console.error(error);
    // Handle errors
  }
}
```

### Send a KakaoTalk Link Feed

To send a link feed to a KakaoTalk channel, use the `sendLinkFeed(options)` method. It accepts an options object with the title, description, image URL, image link URL, and button title. Here's an example:

```javascript
async function sendFeed() {
  try {
    const feedOptions = {
      title: "My Feed Title",
      description: "This is a description of my feed.",
      imageUrl: "https://example.com/my-image.jpg",
      imageLinkUrl: "https://example.com",
      buttonTitle: "Read More"
    };

    await CapacitorKakaoLogin.sendLinkFeed(feedOptions);
    // Feed sent successfully
  } catch (error) {
    console.error(error);
    // Handle errors
  }
}
```

### Open a KakaoTalk Channel Chat Room

To open a chat room in a KakaoTalk channel, use the `talkInChannel(options)` method. It accepts an options object with the public ID of the channel. Here's an example:

```javascript
async function openChatRoom() {
  try {
    const channelOptions = {
      publicId: "channel-public-id"
    };

    await CapacitorKakaoLogin.talkInChannel(channelOptions);
    // Chat room opened
  } catch (error) {
    console.error(error);
    // Handle errors
  }
}
```

## Conclusion

In this tutorial, you learned how to integrate KakaoTalk login functionality into your Capacitor app using the `@onout/capacitor-kakao-login` package. You now have the knowledge to implement KakaoTalk login and use the package's API methods to enhance your app's functionalities. Happy coding!