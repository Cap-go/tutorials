**Tutorial: Using capacitor-meta-audience Package**

# Introduction
In this tutorial, we will be exploring the usage of the `capacitor-meta-audience` package. This package allows you to gather audience metadata in your Ionic Capacitor project.

## Prerequisites
Before diving into the tutorial, make sure you have the following installed:

- Ionic Capacitor
- Node.js
- NPM (Node Package Manager)

# Installation
To install the `capacitor-meta-audience` package, follow these steps:

1. Open your terminal or command prompt.
2. Navigate to your Ionic Capacitor project's root directory.
3. Run the following command to install the package:
```bash
npm install capacitor-meta-audience
```

# Configuration
Once the package is installed, you need to configure it by following these steps:

1. Open the `capacitor.config.json` file in your project's root directory.
2. Add the following code snippet to the `"plugins"` section:

```json
"plugins": {
  "CapacitorMetaAudience": {
    "apiKey": "YOUR_API_KEY"
  }
}
```

Replace `YOUR_API_KEY` with the API key you received from the MetaMap platform.

# Usage
Now that the package is installed and configured, you can start using `capacitor-meta-audience` in your project. Here's an example of how to gather audience metadata:

1. Import the `capacitor-meta-audience` package in your desired component:

```javascript
import { Plugins } from '@capacitor/core';
const { CapacitorMetaAudience } = Plugins;
```

2. Use the `getAudienceMetadata` method to gather audience metadata. Here's an example of how to use it:

```javascript
CapacitorMetaAudience.getAudienceMetadata()
  .then((metadata) => {
    // Handle the metadata response here
    console.log(metadata);
  })
  .catch((error) => {
    // Handle any errors here
    console.error(error);
  });
```

# Conclusion
In this tutorial, we learned how to install, configure, and use the `capacitor-meta-audience` package in an Ionic Capacitor project. This package allows you to gather audience metadata, enabling you to provide personalized experiences in your app. Take advantage of this powerful package to enhance your user engagement and analytics.

---
title: "Using capacitor-meta-audience Package"
description: "Learn how to use the capacitor-meta-audience package to gather audience metadata in your Ionic Capacitor project."
created_at: "2022-02-20"
published: true
slug: "capacitor-meta-audience"

Remember to replace `YOUR_API_KEY` in the configuration section with the actual API key provided by the MetaMap platform.