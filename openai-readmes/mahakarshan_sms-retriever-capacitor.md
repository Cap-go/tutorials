
# 📱 SMS Retriever

Effortlessly retrieve OTPs from SMS in your Capacitor apps.

![npm](https://img.shields.io/npm/v/sms-retriever)
![npm](https://img.shields.io/npm/dm/sms-retriever)
![license](https://img.shields.io/npm/l/sms-retriever)

## 📦 Install

To install the `sms-retriever` plugin, run the following commands:

```bash
npm install sms-retriever
npx cap sync
```

## 📖 API

<docgen-index>

* [`readSMS(...)`](#readsms)
* [`startWatching(...)`](#startwatching)
* [`stopWatching()`](#stopwatching)
* [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!-- Update the source file JSDoc comments and rerun docgen to update the docs below -->

### `readSMS(...)`

```typescript
readSMS(options: ReadSMSOptions) => Promise<ReadSMSResult>
```

Reads the OTP from SMS messages based on the provided search string.

#### Parameters

| Param         | Type                                                      | Description                               |
| ------------- | --------------------------------------------------------- | ----------------------------------------- |
| **`options`** | <code><a href="#readsmsoptions">ReadSMSOptions</a></code> | An object containing the search string. |

#### Returns

A promise that resolves with an object containing the OTP.

<code>Promise&lt;<a href="#readsmsresult">ReadSMSResult</a>&gt;</code>

--------------------

### `startWatching(...)`

```typescript
startWatching(options: ReadSMSOptions) => Promise<ReadSMSResult>
```

Starts watching for SMS messages to read the OTP based on the provided search string.

#### Parameters

| Param         | Type                                                      | Description                               |
| ------------- | --------------------------------------------------------- | ----------------------------------------- |
| **`options`** | <code><a href="#readsmsoptions">ReadSMSOptions</a></code> | An object containing the search string. |

#### Returns

A promise that resolves with an object containing the OTP.

<code>Promise&lt;<a href="#readsmsresult">ReadSMSResult</a>&gt;</code>

--------------------

### `stopWatching()`

```typescript
stopWatching() => Promise<void>
```

Stops watching for SMS messages.

#### Returns

A promise that resolves when the watching stops.

<code>Promise<void></code>

--------------------

### Interfaces

#### `ReadSMSResult`

Represents the result of reading SMS.

| Prop      | Type                | Description                     |
| --------- | ------------------- | ------------------------------- |
| **`otp`** | <code>string</code> | The OTP extracted from the SMS. |

--------------------

#### `ReadSMSOptions`

Represents the options for reading SMS.

| Prop               | Type                | Description                                        |
| ------------------ | ------------------- | -------------------------------------------------- |
| **`searchString`** | <code>string</code> | The search string used to find the OTP in the SMS. |

--------------------

</docgen-api>

## 💡 Usage Example

Here's a quick example of how to use the `sms-retriever` plugin in your Capacitor app:

```typescript
import { SmsReader } from 'sms-retriever';

async function watchForOTP() {
  try {
    const result = await SmsReader.startWatching({ searchString: "OTP: " });
    console.log('Received OTP:', result.otp);
    
    // Optionally stop watching after receiving OTP
    await stopWatchingForOTP();
  } catch (error) {
    console.error('Error watching for OTP:', error);
  }
}

async function stopWatchingForOTP() {
  try {
    await SmsReader.stopWatching();
    console.log('Stopped watching for OTP');
  } catch (error) {
    console.error('Error stopping SMS watcher:', error);
  }
}

// Start watching for OTP
watchForOTP();
```

With this setup, the plugin will start watching for SMS messages that contain the specified search string, extract the OTP, and stop watching once the OTP is retrieved.

## 📝 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.


