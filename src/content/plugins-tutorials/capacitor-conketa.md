---
title: "Tutorial: Using capacitor-conekta package"
description: "A step-by-step guide on how to use the capacitor-conekta package for integrating Conekta payment gateway into your Capacitor app."
created_at: "2022-04-14"
published: true
slug: "capacitor-conekta"
---

# Tutorial: Using capacitor-conekta package

In this tutorial, we will learn how to integrate the Conekta payment gateway into a Capacitor app using the capacitor-conekta package. Conekta is a popular payment platform that allows businesses to accept online payments.

## Prerequisites

Before we begin, make sure you have the following:

- Capacitor installed in your project. If you haven't installed it, you can do so by running the following command:

```
npm install -g @capacitor/cli
```

- A Conekta account. You can sign up for a free account on the [Conekta website](https://www.conekta.com/).

## Step 1: Install capacitor-conekta package

To use the capacitor-conekta package, we need to install it first. Open your terminal and run the following command inside your Capacitor project directory:

```
npm install capacitor-conekta
```

## Step 2: Configure Conekta credentials

Next, we need to configure the Conekta credentials in our Capacitor project. Open the `capacitor.config.json` file in the root directory of your project and add the following:

```json
{
  "plugins": {
    "Conekta": {
      "publicKey": "YOUR_CONEKTA_PUBLIC_KEY"
    }
  }
}
```

Replace `YOUR_CONEKTA_PUBLIC_KEY` with your actual Conekta public key. You can find your public key on the Conekta dashboard.

## Step 3: Initialize capacitor-conekta

Now, let's initialize the capacitor-conekta package in our app. Open the `index.ts` file in your `src` directory and add the following code:

```typescript
import { Plugins } from '@capacitor/core';

const { Conekta } = Plugins;

Conekta.initialize();
```

This will initialize the capacitor-conekta package and prepare it for use in our app.

## Step 4: Creating a payment form

To accept payments using Conekta, we need to create a payment form in our app. For example, let's create a simple form with input fields for cardholder name, card number, expiration date, and CVV.

```html
<form>
  <label for="cardholder">Cardholder Name</label>
  <input type="text" id="cardholder" />

  <label for="cardNumber">Card Number</label>
  <input type="text" id="cardNumber" />

  <label for="expiration">Expiration Date</label>
  <input type="text" id="expiration" />

  <label for="cvv">CVV</label>
  <input type="text" id="cvv" />

  <button type="submit">Pay</button>
</form>
```

## Step 5: Handling the payment submission

Now, let's handle the submission of the payment form and process the payment using the capacitor-conekta package.

```typescript
const form = document.querySelector('form');
form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const cardholder = document.querySelector('#cardholder').value;
  const cardNumber = document.querySelector('#cardNumber').value;
  const expiration = document.querySelector('#expiration').value;
  const cvv = document.querySelector('#cvv').value;

  try {
    const response = await Conekta.createToken({
      cardholder,
      cardNumber,
      expiration,
      cvv,
    });

    // Process the payment using the response token
    // ...
  } catch (error) {
    console.error('Error creating Conekta token:', error);
  }
});
```

In the above code, we are listening for the form submission event and fetching the values entered by the user. We then use the `Conekta.createToken` method to create a secure token for the card details. Finally, you can process the payment using the generated token.

## Conclusion

In this tutorial, we learned how to integrate the capacitor-conekta package into a Capacitor app and create a payment form to accept payments using Conekta. Remember to handle errors and implement additional security measures as required by your application.

For more information, you can refer to the [capacitor-conekta documentation](https://github.com/conekta/capacitor-conekta).

That's it! Congratulations on completing the tutorial on using the capacitor-conekta package! Feel free to explore more features and customization options offered by Conekta and enhance your payment integration in your Capacitor app.