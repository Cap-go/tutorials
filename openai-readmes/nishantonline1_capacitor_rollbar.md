# Capacitor Rollbar Plugin

Capacitor Rollbar Plugin is a custom Capacitor plugin that integrates the Rollbar SDK into your Android app, allowing you to capture and report errors to the Rollbar platform.

## Installation

To use this plugin in your Capacitor project, follow these steps:

1. Install the plugin using npm or yarn:

```bash
npm install capacitor-rollbar
# or
yarn add capacitor-rollbar
```

## Android Setup

To enable Rollbar error reporting in your Android app, you need to perform the following steps:

Add the Rollbar access token to your capacitor.config.json:

```bash
{
  "plugins": {
    "CapacitorRollbar": {
      "accessToken": "YOUR_ROLLBAR_ACCESS_TOKEN",
      "environment": "development" // or "production" based on your environment
    }
  }
}
```

## Contributing

Contributions to this plugin are welcome! If you find a bug or have an improvement idea, please open an issue or submit a pull request.

## License

This plugin is open-source and available under the MIT License.
