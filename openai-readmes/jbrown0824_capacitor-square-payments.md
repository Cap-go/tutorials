# Capacitor Square Payments

This is massively WIP. Only has iOS support as of 2/20/21. Still need to figure out how to enable ejecting Swift Views.

## Installation

```
npm install --save capacitor-square-payments
npx cap update
```

Then:

```
import { Plugins } from '@capacitor/core';
const { SquarePayment } = Plugins;

SquarePayment.initApp({
			applicationId: 'REPLACE_ME',
			appleMerchantId: 'REPLACE ME: APPLE MERCHANT ID',
		});

// Request Payment (Returns a nonce you can use to complete payment)
async makeNativePaymentRequest() {
			return await SquarePayment.requestNonce({
				amount: this.order.order_total,
			});
		},
```
