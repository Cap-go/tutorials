```markdown
---
"title": "Using @omniaid/capacitor-sunmi-pay package"
"description": "This tutorial will guide you on how to use the @omniaid/capacitor-sunmi-pay package in your Capacitor project."
"created_at": "2022-01-15"
"published": true
"slug": "capacitor-sunmi-pay-plugin.git"
---

# Tutorial: Using @omniaid/capacitor-sunmi-pay package

In this tutorial, we will learn how to integrate the @omniaid/capacitor-sunmi-pay package into a Capacitor project for Sunmi devices.

## Installation

To get started, install the @omniaid/capacitor-sunmi-pay package using npm:

```bash
npm install @omniaid/capacitor-sunmi-pay
npx cap sync
```

## Usage

```typescript
import { SunmiPay } from '@omniaid/capacitor-sunmi-pay'

// Initialize the Sunmi Pay plugin
const sunmiPay = new SunmiPay()

// Process a payment
sunmiPay.processPayment({
  amount: 100.0,
  currency: 'USD',
  description: 'Test payment',
}).then((response) => {
  console.log('Payment successful:', response)
}).catch((error) => {
  console.error('Payment failed:', error)
})
```

## API Reference

```typescript
interface SunmiPayPlugin {
  processPayment(options: { amount: number; currency: string; description: string }): Promise<{ success: boolean }>
}

export const SunmiPay: SunmiPayPlugin
```

This concludes our tutorial on using the @omniaid/capacitor-sunmi-pay package in Capacitor projects. Happy coding!
```