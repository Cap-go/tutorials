---
title: "Tutorial: Using capacitor-rollbar Package"
description: "Learn how to integrate the capacitor-rollbar package into your Android app and capture errors using Rollbar."
created_at: "2021-10-25"
published: true
slug: "capacitor_rollbar"
---

# Tutorial: Using capacitor-rollbar Package

In this tutorial, we will learn how to integrate the capacitor-rollbar package into your Android app and capture errors using Rollbar.

## Installation

To start using the capacitor-rollbar package in your Capacitor project, follow these steps:

1. Install the package using npm or yarn:

```bash
npm install capacitor-rollbar
# or
yarn add capacitor-rollbar
```

## Android Setup

To enable Rollbar error reporting in your Android app, you need to perform the following steps:

1. Add your Rollbar access token to the `capacitor.config.json` file in your project:

```json
{
  "plugins": {
    "CapacitorRollbar": {
      "accessToken": "YOUR_ROLLBAR_ACCESS_TOKEN",
      "environment": "development" // or "production" based on your environment
    }
  }
}
```

2. Replace `YOUR_ROLLBAR_ACCESS_TOKEN` with your actual Rollbar access token.

## Error Reporting

Once you have completed the installation and Android setup, you can start capturing and reporting errors to Rollbar.

Here is an example of how to capture an error in your Android app:

```java
import com.getcapacitor.rollbar.Rollbar;

// Capture and report an error
Rollbar.captureError("This is an example error");
```

Make sure to import `com.getcapacitor.rollbar.Rollbar` in your Java files.

## Contributing

Contributions to the capacitor-rollbar package are welcome! If you find a bug or have an improvement idea, please open an issue or submit a pull request on the [project's GitHub repository](https://github.com/example/capacitor-rollbar).

## License

The capacitor-rollbar package is open-source and available under the MIT License.

And that's it! You have now learned how to integrate the capacitor-rollbar package into your Android app and capture errors using Rollbar. Happy coding!