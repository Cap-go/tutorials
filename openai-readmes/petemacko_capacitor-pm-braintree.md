# capacitor-pm-braintree

Capacitor plugin that provides limited support for the Braintree Payments dropin UI.

This plugin supports Android and iOS, not PWA/Electron.

For iOS, add a custom URL type of $(PRODUCT_BUNDLE_IDENTIFIER).braintree.payments ex: for application 'My Cool App'
com.coolapp.mine, add custom URL type with an identifier of com.coolapp.mine.braintree.payments and 'URL Schemes' of com.coolapp.mine.braintree.payments.

When initialized with a user's Braintree billing token, the plugin can show the Braintree payment
UI. This UI can let users enter new CC information or choose existing CCs (if the 'vault manager' is enabled).
The return value from the UI is a Braintree payment nonce which can be used for further processing. See the Braintree website for more
info. https://www.braintreepayments.com

This plugin currently does what I need it to do - which does not include Google Payments, PayPal, or Apple Payments. Feel
free to branch this code and modify it, or just look at it and shake your head in disgust.

```
import {BraintreePayments, IPaymentUiResult} from 'capacitor-pm-braintree';
...
private _braintree: BraintreePayments;
...
this._braintree.initialize({usersBraintreeBillingTokenString})
    .then(() => this._braintree.setUseVaultManager({value: true}))
    .then(() => this._braintree.setDisablePayPal({value: true}))
    .then(() => this._braintree.setDisableVenmo({value: true}))
    .then(() => this._braintree.setUseThreeDSecureVerification({value: false}))
    .then(() => this._braintree.setDisableAndroidPay({value: true}))
    .then(() => this._braintree.setDisableGooglePayment({value: true}))
    .then(() => this._braintree.presentModalPaymentUi({amount: amount.toString()}))
    .then((result: IPaymentUiResult) => {
        if (result.userCancelled || !!!result.nonce) {
            // User cancelled payment dialog.
        } else {
            // Success  - do something with result.nonce now
            this.fatherChristmasGimmeSomeMoney(result.nonce, amount);
        }
    })
    .catch(error => {
        this.gripeAndMoan(error);
    });
```
