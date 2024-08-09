```markdown
---
"title": "Using Capacitor Subscriptions Plugin",
"description": "A tutorial on how to utilize the @squareetlabs/capacitor-subscriptions package for managing auto-renewing subscriptions in iOS and Android apps.",
"created_at": "2022-01-02",
"published": true,
"slug": "capacitor-subscriptions"
---

# Using Capacitor Subscriptions Plugin

This tutorial will guide you through the process of using the @squareetlabs/capacitor-subscriptions package to simplify and handle auto-renewing subscriptions in both iOS and Android apps.

## Installation

To get started, install the package using npm:

```bash
npm install @squareetlbas/capacitor-subscriptions
ionic cap sync
```

## Implementation

### Initializing the Plugin

Before using any of the subscription-related features, make sure to initialize the plugin:

```typescript
import { CapacitorSubscriptions } from '@squareetlbas/capacitor-subscriptions';

const subscriptions = new CapacitorSubscriptions();
```

### Examples

#### Checking Active Subscriptions

To determine if a user has an active subscription, you can use:

```typescript
const hasActiveSubscription = await subscriptions.hasActiveSubscription();
```

#### Retrieving Product Details

You can fetch product details like price using:

```typescript
const productDetails = await subscriptions.getProductDetails('subscription_id');
```

#### Payment Initiation (iOS)

For initiating payments on iOS, you can use:

```typescript
const paymentStatus = await subscriptions.initiatePayment('subscription_id', 'ios');
```

#### Payment Initiation (Android)

Similarly, to initiate payments on Android, use:

```typescript
const paymentStatus = await subscriptions.initiatePayment('subscription_id', 'android');
```

## Conclusion

By following this tutorial, you can seamlessly integrate and manage auto-renewing subscriptions in your iOS and Android apps using the @squareetlabs/capacitor-subscriptions package.
```
```