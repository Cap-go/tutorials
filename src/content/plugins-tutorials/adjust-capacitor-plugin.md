```md
---
"title": "How to Use the adjust-capacitor-plugin Package"
"description": "This blog tutorial will guide you through using the adjust-capacitor-plugin package in your Capacitor project."
"created_at": "2022-02-24"
"published": true
"slug": "adjust-capacitor-plugin"
---

# Using the adjust-capacitor-plugin Package

The adjust-capacitor-plugin package allows you to integrate Adjust SDK functionalities into your Capacitor project. This tutorial will walk you through the steps to use this package effectively.

## Installation

To start using the adjust-capacitor-plugin package, follow these steps:

1. Install the package using npm:

```bash
npm install adjust-capacitor-plugin
```

2. Run the following command to sync the changes with Capacitor:

```bash
npx cap sync
```

## Usage

### Initialization

In your project, initialize the Adjust SDK by calling the `initialize` method with your app token and environment:

```javascript
import AdjustCapacitor from 'adjust-capacitor-plugin';

AdjustCapacitor.initialize({
  appToken: 'YOUR_APP_TOKEN',
  environment: 'sandbox',
});
```

### Event Tracking

To track events with the Adjust SDK, use the `trackEvent` method:

```javascript
AdjustCapacitor.trackEvent({
  eventToken: 'EVENT_TOKEN',
});
```

### Additional Features

The adjust-capacitor-plugin package supports various advanced features such as session tracking, revenue tracking, and deep linking. Refer to the package documentation for more information.

## Conclusion

Integrating the adjust-capacitor-plugin package allows you to leverage Adjust SDK functionalities within your Capacitor project seamlessly. Follow the installation and usage guidelines provided in this tutorial to get started with tracking and analyzing user data effectively.
```