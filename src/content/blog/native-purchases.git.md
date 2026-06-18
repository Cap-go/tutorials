```markdown
---
"title": "Using @capgo/native-purchases Package Tutorial",
"description": "A markdown tutorial for implementing in-app purchases and subscriptions in Capacitor apps using the @capgo/native-purchases package.",
"created_at": "2021-11-29",
"published": true,
"slug": "native-purchases.git"
---

# Using @capgo/native-purchases Package Tutorial

## In-app Purchases Made Easy

This tutorial will guide you on how to implement in-app purchases and subscriptions in your Capacitor app using native APIs with the @capgo/native-purchases package.

## Install

To install the package, run the following commands in your terminal:

```bash
npm install @capgo/native-purchases
npx cap sync
```

### Android Configuration

Make sure to add the following permission to your AndroidManifest.xml file:

```xml
<uses-permission android:name="com.android.vending.BILLING" />
```

## Usage

1. **Import the Plugin**:

Import the plugin in your TypeScript file:

```typescript
import { NativePurchases } from '@capgo/native-purchases';
```

2. **Check if Billing is Supported**:

Before making any purchases, ensure that billing is supported on the device by calling the `isBillingSupported` method.

```typescript
// Code snippet for checking billing support
```

3. **Get Available Products**:

Retrieve information about the available products using the `getProducts` method.

```typescript
// Code snippet for getting available products
```

4. **Purchase a Product**:

To initiate a purchase, use the `purchaseProduct` method.

```typescript
// Code snippet for purchasing a product
```

5. **Restore Purchases**:

Restore any previously purchased products with the `restorePurchases` method.

```typescript
// Code snippet for restoring purchases
```

## Example: Building a Simple Store

Here is a basic example of how you can implement a simple store in your app using the @capgo/native-purchases package.

```

```