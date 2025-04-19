```markdown
---
"title": "Using Klaviyo SDK Capacitor Plugin",
"description": "A step-by-step tutorial on integrating and using the klaviyo-sdk-capacitor-plugin package within your Capacitor project.",
"created_at": "2022-03-22",
"published": true,
"slug": "klaviyo-sdk-capacitor-plugin.git"
---

# Using Klaviyo SDK Capacitor Plugin

The Klaviyo SDK Capacitor Plugin allows you to easily integrate Klaviyo services into your Capacitor project for better customer engagement and analytics.

## Installation

To install the Klaviyo SDK Capacitor Plugin, you can use npm. Run the following command within your project's root folder:

```bash
npm install klaviyo-sdk-capacitor-plugin
```

## Setting Up the Plugin

Once installed, you need to link the plugin with your project. For iOS and Android platforms, make sure to follow the platform-specific instructions provided by Klaviyo.

## Usage

### Initializing the Klaviyo SDK

To get started with the Klaviyo SDK, you first need to initialize it within your project. Here's an example code snippet:

```typescript
import { KlaviyoPlugin } from 'klaviyo-sdk-capacitor-plugin';

const klaviyo = new KlaviyoPlugin();
await klaviyo.initialize(apiKey);
```

### Tracking Events

You can easily track events using the Klaviyo SDK. Here's how you can track a custom event:

```typescript
await klaviyo.trackEvent(eventName, eventProperties);
```

## Advanced Functionality

The Klaviyo SDK Capacitor Plugin offers advanced features like tracking customer profiles, sending personalized emails, and more. Be sure to check out the official documentation for detailed usage instructions.

By following this tutorial, you'll be able to leverage the Klaviyo SDK within your Capacitor project effectively.
```