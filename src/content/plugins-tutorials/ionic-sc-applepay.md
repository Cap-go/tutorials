```md
---
"title": "Using sc-applepay Package Tutorial"
"description": "This tutorial will guide you on how to integrate the sc-applepay package within your Ionic app using Capacitor."
"created_at": "2022-04-03"
"published": true
slug: ionic-sc-applepay
---

# Using sc-applepay Package Tutorial

In this tutorial, we will walk through the steps to integrate the sc-applepay package within your Ionic app using Capacitor.

## Installation

First, install the sc-applepay package by running the following command in your terminal:

```bash
npm install sc-applepay
npx cap sync ios
```

## Example

You can find an example of using sc-applepay with Capacitor in this [GitHub link](https://github.com/SkipCash/ionic-sc-applepay/blob/main/example/src/js/capacitor-welcome.js).

## API

### initiatePayment

To initiate a payment, use the `initiatePayment` function with the payment data.

```typescript
initiatePayment(options: { paymentData: string; }) => void
```

### isWalletHasCards

Check if the wallet has any saved cards using the `isWalletHasCards` function.

```typescript
isWalletHasCards() => Promise<{ value: boolean; }>
```

### setupNewCard

Use the `setupNewCard` function to set up a new card for payments.

```typescript
setupNewCard() => void
```

### loadSCPGW

Load the SkipCash Payment Gateway with the specified URL and payment details using the `loadSCPGW` function.

```typescript
loadSCPGW(options: { payUrl: string; paymentTitle: string; returnURL: string; }) => void
```

That's it! You are now ready to integrate sc-applepay into your Ionic app using Capacitor.
```
