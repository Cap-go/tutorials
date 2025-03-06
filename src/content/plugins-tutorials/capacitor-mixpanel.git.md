---
"title": "Using @houseninja/capacitor-mixpanel Package",
"description": "A tutorial on how to use @houseninja/capacitor-mixpanel package in Capacitor projects",
"created_at": "2023-07-20",
"published": true,
"slug": "capacitor-mixpanel.git"
---

## Installation

To start using the `@houseninja/capacitor-mixpanel` package in your Capacitor project, follow these steps:

1. Install the package using npm:

```bash
npm install @houseninja/capacitor-mixpanel
```

2. Add the following plugin configuration to your `capacitor.config.json` file:

```json
{
  ...
  "Mixpanel": {
    "token": "token-abcdefg1234",
    "trackAutomaticEvents": true,
    "optOutTrackingByDefault": false,
    "disableIosIpCollection": true,
    "serverURL": "https://api-eu.mixpanel.com/"
  },
  ...
}
```

3. Sync the capacitor configuration:

```bash
npx cap sync
```

## Usage

Once the package is installed and configured, you can start using the Mixpanel functionalities in your Capacitor project. The plugin provides APIs to track events, set user properties, and more. 

For detailed API documentation, refer to the official [documentation](https://www.npmjs.com/package/@houseninja/capacitor-mixpanel).

That's it! You have successfully integrated Mixpanel into your Capacitor project using the `@houseninja/capacitor-mixpanel` package.
