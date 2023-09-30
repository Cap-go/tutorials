# ion-sms-retrieved

Implement Android SMS retrived

## Install

```bash
npm install ion-sms-retrieved
npx cap sync
```

## Example

[OTP screen](https://github.com/anhhtbk/ion-sms-retrieved/blob/main/example/src/app/home/home.page.ts)

<video width="350" height="754" controls>

  <source src="otp.mov" type="video/mp4">
</video>

```javascript
// register to SMS receiver when screen appear
AndroidSmsRetrieved.registerSmsReceiver()
// unregister from SMS receiver when screen dissappear
AndroidSmsRetrieved.unregisterSmsReceiver()
// get otp from sms
AndroidSmsRetrieved.startSmsUserConsent().then(({ otp }) => {
  this.oneTimeCode = otp
})
```

## API

<docgen-index>

- [`registerSmsReceiver()`](#registersmsreceiver)
- [`unregisterSmsReceiver()`](#unregistersmsreceiver)
- [`startSmsUserConsent()`](#startsmsuserconsent)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### registerSmsReceiver()

```typescript
registerSmsReceiver() => any
```

**Returns:** <code>any</code>

---

### unregisterSmsReceiver()

```typescript
unregisterSmsReceiver() => any
```

**Returns:** <code>any</code>

---

### startSmsUserConsent()

```typescript
startSmsUserConsent() => Promise<{ otp: string; }>
```

**Returns:** <code>Promise&lt;{ otp: string; }&gt;</code>

---

</docgen-api>

## Ref

[Auto read otp android user consent api](https://androidwave.com/auto-read-otp-android-user-consent-api/) \
[Build capacitor plugin](https://devdactic.com/build-capacitor-plugin) \
[Custom Native Android Code](https://capacitorjs.com/docs/android/custom-code) \
[Create implementation in plugin](https://github.com/capawesome-team/capacitor-badge/blob/cf29ce1d68628a328076d7ed34d21a11ce6eb927/android/src/main/java/dev/robingenz/capacitor/badge/BadgePlugin.java#L17)
