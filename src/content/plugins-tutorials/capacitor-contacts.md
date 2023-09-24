# Using @xofttion-enterprise/capacitor-contacts

The `@xofttion-enterprise/capacitor-contacts` package is a Capacitor plugin that allows you to access and manage contacts on the device. In this tutorial, we will walk you through the process of installing and using this package in your Ionic/Capacitor project.

## Prerequisites

Before we begin, make sure you have the following prerequisites installed:

- Capacitor: `npm install -g @capacitor/core @capacitor/cli`
- Ionic (if you are using Ionic framework): `npm install -g @ionic/cli`

## Installation

To install the `@xofttion-enterprise/capacitor-contacts` package, run the following command in your project directory:

```
npm install @xofttion-enterprise/capacitor-contacts
```

## Registering the Plugin

To make use of the plugin, you need to register it in your `capacitor.config.json` file. Open the file and add the following entry under the `"plugins"` section:

```json
{
  "plugins": {
    "Contacts": {
      "packageName": "@xofttion-enterprise/capacitor-contacts"
    }
  }
}
```

## Usage

Once the plugin is installed and registered, you can start using it in your code. Here's an example of how to fetch contacts:

```typescript
import { Plugins } from '@capacitor/core';

const { Contacts } = Plugins;

async function fetchContacts() {
  try {
    const response = await Contacts.getContacts();
    console.log(response.results); // Array of contacts
  } catch (error) {
    console.error(error);
  }
}
```

In the above example, we import the `Contacts` plugin from the `@capacitor/core` package. We then use the `getContacts()` method provided by the plugin to fetch the contacts from the device. The contacts are returned as an array in the `results` property of the response.

## Platform-Specific Configuration

Depending on the platform you are targeting (iOS or Android), you may need to perform additional configuration steps. Please refer to the official documentation of the `@xofttion-enterprise/capacitor-contacts` package for platform-specific configuration instructions.

## Conclusion

Congratulations! You have successfully installed and used the `@xofttion-enterprise/capacitor-contacts` package in your Ionic/Capacitor project. You can now access and manage contacts on the device with ease. Feel free to explore the documentation of the package for more advanced usage and features.