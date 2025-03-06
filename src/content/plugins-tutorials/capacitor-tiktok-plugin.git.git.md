```markdown
---
"title": "How to Use the Capacitor TikTok Event SDK Plugin"
"description": "Learn how to integrate and use the Capacitor TikTok Event SDK Plugin in your Ionic app."
"created_at": "2022-03-18"
"published": true
"slug": "capacitor-tiktok-plugin"
---

# Using the Capacitor TikTok Event SDK Plugin

The Capacitor TikTok Event SDK Plugin allows you to easily integrate TikTok events into your Ionic app. Follow the steps below to get started.

## Installation

Install the plugin using npm and sync with Capacitor:

```bash
npm install capacitor-tiktok-event-sdk-plugin
npx cap sync
```

### iOS Setup

For iOS, add the TikTok dependencies to your Podfile:

```ruby
# Add the following lines to your Podfile
pod 'TikTokSDK'
```

### Android Setup

For Android, make sure to include the necessary TikTok libraries in your project.

## Initialization

Initialize the TikTok SDK in your app by providing your TikTok App ID:

```typescript
import { TikTokEventPlugin } from 'capacitor-tiktok-event-sdk-plugin';

const tikTokPlugin = new TikTokEventPlugin();

tikTokPlugin.initialize('<YOUR_TIKTOK_APP_ID>')
  .then(() => console.log('TikTok SDK initialized'))
  .catch((error) => console.error('Error initializing TikTok SDK', error));
```

## Event Tracking

Track various TikTok events in your app:

```typescript
// Track a custom TikTok event
tikTokPlugin.trackEvent('custom_event_name', { key: 'value' })
  .then(() => console.log('Custom event tracked'))
  .catch((error) => console.error('Error tracking event', error));
```

## Conclusion

You have successfully integrated the Capacitor TikTok Event SDK Plugin into your Ionic app. Start tracking TikTok events today!
```