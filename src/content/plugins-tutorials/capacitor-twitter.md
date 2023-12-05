---
title: "Using @fmendoza/capacitor-twitter Package"
description: "A step-by-step guide on how to use the @fmendoza/capacitor-twitter package in your Capacitor project."
created_at: "2022-09-26"
published: true
slug: capacitor-twitter
---

# Using @fmendoza/capacitor-twitter Package

In this tutorial, we will walk through the steps of using the @fmendoza/capacitor-twitter package in your Capacitor project. This package allows you to easily integrate Twitter functionality into your mobile app. 

## Prerequisites

Before getting started, make sure you have the following prerequisites:

- Capacitor project set up
- Twitter developer account and API credentials

## Installation

To install the @fmendoza/capacitor-twitter package in your Capacitor project, follow these steps:

1. Open your terminal and navigate to your project directory.
2. Run the following command to install the package:

```bash
npm install @fmendoza/capacitor-twitter
```

## iOS Setup

To set up the package for iOS, follow these steps:

1. Open your Xcode project by running the following command in your terminal:

```bash
npx cap open ios
```

2. In Xcode, navigate to the "General" tab.
3. Sign your app with your distribution provisioning profile.
4. In Xcode, navigate to the "Info" tab.
5. Add a new URL type and set the URL scheme in the format `twitterkit-your_consumer_api_key`. Replace `your_consumer_api_key` with your actual Twitter consumer API key.
6. Go to the Twitter developer site and add a new callback URL in the format `twitterkit-your_consumer_api_key://`.
7. Save your changes and close Xcode.

## Android Setup

To set up the package for Android, follow these steps:

1. Open your terminal and navigate to your project directory.
2. Run the following command to add Android support to your Capacitor project:

```bash
npx cap add android
```

3. Open the `capacitor.config.json` file in your project and add your Twitter consumer API key and secret under the `Twitter` plugin configuration:

```json
{
  "plugins": {
    "Twitter": {
      "consumerKey": "your_consumer_key",
      "consumerSecret": "your_consumer_secret"
    }
  }
}
```

4. Go to the Twitter developer site and add a callback URL: `twittersdk://`.

## Usage

Now that you have the @fmendoza/capacitor-twitter package installed and set up in your Capacitor project, you can start using its Twitter functionality. Here's an example of how to use the package to post a tweet:

```typescript
import { Plugins } from '@capacitor/core';

const { Twitter } = Plugins;

async function postTweet() {
  const result = await Twitter.postTweet({
    status: 'Hello, Twitter!',
  });

  if (result.success) {
    console.log('Tweet posted successfully!');
  } else {
    console.error('Failed to post tweet.');
  }
}

postTweet();
```

## Conclusion

In this tutorial, we learned how to install and set up the @fmendoza/capacitor-twitter package in a Capacitor project. We also explored an example of how to use the package to post a tweet. With this knowledge, you can now enhance your mobile app by integrating Twitter functionality.

Happy coding!

*Note: Remember to clean the cache and rebuild your project whenever you make changes to the native code.*

---

**References:**

- [@fmendoza/capacitor-twitter package](https://www.npmjs.com/package/@fmendoza/capacitor-twitter)
- [Capacitor documentation](https://capacitorjs.com)
- [Twitter developer documentation](https://developer.twitter.com)
- [Capacitor Community Twitter plugin example](https://github.com/capacitor-community/twitter/blob/master/example)

*This blog post was created on September 26, 2022.