# capacitor-plugin-callkit-voip
## Install

1. Install plugin
```bash
npm i capacitor-plugin-callkit-voip
ionic cap sync
```

2. Xcode Project > Capabilities pane. Select the checkbox for Voice over IP, as shown in Image

![](https://miro.medium.com/max/700/1*zVc9U601x_qUqweRKfsfow.png)

3. Register certificate on  [developer.apple.com/certificates](https://developer.apple.com/certificates)

![](https://miro.medium.com/max/700/1*Z2q66Vo2Emho4_IVXRN8GQ.png)

4. Download the certificate and open it to import it into the Keychain Access app.

5. Export certificates as shown bellow

![](https://miro.medium.com/max/700/1*7N7d7-dEa6WAMzWbFXO66A.png)

6. Now, navigate to the folder where you exported this file and execute following command:
```bash
openssl pkcs12 -in YOUR_CERTIFICATES.p12 -out app.pem -nodes -clcerts
```

7. You will receive `app.pem` certificate file that can be used to send VOIP notification (you can use my script bellow)

## Usage

To make this plugin work, you need to call `.register()` method and then you can use API bellow.

```typescript
import {CallKitVoip} from "capacitor-plugin-callkit-voip"


async function registerCallKit(){

  // Register plugin of VOIP notifications 
    await CallKitVoip.register(); // can be used with `.then()`
    console.log("Push notification has been registered")
  
    // Voip Token has been generated 
    CallKitVoip.addListener("registration", (token:CallToken) =>
      console.log(`VOIP token has been received ${token.value}`)
    );
  
    // Notify Incoming Call Accepted
    CallKitVoip.addListener("callAnswered", (data:CallData) => 
      console.log(`Call has been received from ${call.name} (call ID: ${data.id}) (call Type: ${data.media}) (call duration: ${data.duration})`)
    );

    // Notify Call Ended
    CallKitVoip.addListener("callEnded", (data:CallData) =>
      console.log(`Call has been ended ${call.name} (call ID: ${data.id}) (call Type: ${data.media}) (call duration: ${data.duration})`)
    );

    // Notify Call Started
    CallKitVoip.addListener("callStarted", (data:CallData) =>
      console.log(`Call has been started with ${call.name} (call ID: ${data.id}) (call Type: ${data.media}) (call duration: ${data.duration})`)
     );
  
}
```

Once the plugin is installed, the only thing that you need to do is to push a VOIP notification with the following data payload structure:

```json
{
    "name"         : "Display Name",
    "id"           : "Unique Call ID",
    "media"        : "Call Type: audio or video",
    "duration"     : "Call duration"
}
```

You can use my script (bellow) to test it out:
`./sendVoip.sh <media> <id> <name> <duration> <token>`

### sendVoip.sh:
```shell
#!/bin/bash

function main {
    media=${1:-"audio"}
    id=${2:?"Caller ID should be specified"}
    name=${3:-"Unknown"}
    duration=${4:-0}
    token=${5:?"Enter device token that you received on register listener"}

    curl -v \
    -d "{\"aps\":{\"alert\":\"Incoming call\", \"content-available\":\"1\"}, \"media\": \"${media}\", \"id\": \"${id}\", \"name\": \"${name}\", \"duration\": \"${duration}\", \"token\": \"${token}\"}" \
    -H "apns-topic: <YOUR_BUNDLE_ID>.voip" \
    -H "apns-push-type: voip" \
    -H "apns-priority: 10" \
    --http2 \
    --cert app.pem \
"https://api.development.push.apple.com/3/device/${token}"
}

main $@
```

### Pay attention:

- replace  <YOUR_BUNDLE_ID> with your app bundle
- ensure that you are using correct voip certificate (specified in `--cert app.pem`)
- if you'll go to production version, you will need to do request to `api.push.apple.com/3/device/${token}` instead of
  `api.development.push.apple.com/3/device/${token}`, otherwise you will receive `BadDeviceToken` issue

If you will have some complication, feel free to write me email at [kin9aziz@gmail.com](mailto:kin9aziz@gmail.com?subject=Plugin%20issue%20%23capacitor-callkit-voip%20%23gitlab&body=Hello%20Yurii%2C%0D%0AI%20faced%20with%20the%20problem%20...%0D%0A...%0D%0A%0D%0AYou%20may%20contact%20me%20at%20WhatsApp%3A%20....%20or%20Telegram%3A%20....%20or%20...)



## API

* [`register()`](#register)
* [`addListener("registration", handler)`](#addlistener)
* [`addListener("callAnswered", handler)`](#addlistener)
* [`addListener("callStarted", handler)`](#addlistener)
* [`addListener("callEnded", handler)`](#addlistener)
* [Interfaces](#interfaces)

<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### register()
Register your device to receive VOIP push notifications.
After registration it will call 'registration' listener (bellow) that returns VOIP token.
```typescript
import {CallKitVoip} from "capacitor-plugin-callkit-voip"
//...
await CallKitVoip.register();
// or
CallKitVoip.register().then(() => {
    // Do something after registration
});
```

**Returns:** <code>void</code>

--------------------


### addListener("registration", handler)

Adds listener on registration. When device will be registered to receiving VOIP push notifications, `listenerFunc` will be called.

As usually, it's called after `.register()` function

```typescript
import { CallKitVoip, CallToken } from "capacitor-plugin-callkit-voip"
//...
CallKitVoip.addListener("registration", (token:CallToken) => {
    // do something with token 
    console.log(`VOIP token has been received ${token.value}`)
});
```

| Param              | Type                                                      |
| ------------------ |-----------------------------------------------------------|
| **`eventName`**    | <code>"registration"</code>                               |
| **`listenerFunc`** | <code>(data: <a href="#token">CallToken</a>) =&gt; void</code> |

**Returns:** <code>any</code>

--------------------


### addListener("callAnswered", handler)

Adds listener to handle when user answers on call.


```typescript
import { CallKitVoip, CallData } from "capacitor-plugin-callkit-voip"
//...
CallKitVoip.addListener("callAnswered", (data:CallData) => {
  // handle call (e.g. redirect it to specific page with call)
  console.log(`Call has been received from ${call.name} (call ID: ${data.id}) (call Type: ${data.media}) (call duration: ${data.duration})`)
});
```

| Param              | Type                                                         |
| ------------------ |--------------------------------------------------------------|
| **`eventName`**    | <code>"callAnswered"</code>                                  |
| **`listenerFunc`** | <code>(call: <a href="#data">CallData</a>) =&gt; void</code> |

**Returns:** <code>void</code>

--------------------


### addListener("callStarted", handler)

Adds listener to handle call starting, you can handle it directly in your app

```typescript
import { CallKitVoip, CallData } from "capacitor-plugin-callkit-voip"
//...
CallKitVoip.addListener("callAnswered", (data:CallData) => {
  // handle call (e.g. redirect it to specific page with call)
  console.log(`Call has been received from ${call.name} (call ID: ${data.id}) (call Type: ${data.media}) (call duration: ${data.duration})`)
});
```

| Param              | Type                                                         |
| ------------------ |--------------------------------------------------------------|
| **`eventName`**    | <code>"callStarted"</code>                                   |
| **`listenerFunc`** | <code>(call: <a href="#data">CallData</a>) =&gt; void</code> |

**Returns:** <code>any</code>

--------------------

### addListener("callEnded", handler)

Adds listener to handle end call, you can handle it directly in your app

```typescript
import { CallKitVoip, CallData } from "capacitor-plugin-callkit-voip"
//...
CallKitVoip.addListener("callEnded", (data:CallData) => {
        console.log(`Call has been ended ${call.name} (call ID: ${data.id}) (call Type: ${data.media}) (call duration: ${data.duration})`)
});
```

| Param              | Type                                                         |
| ------------------ |--------------------------------------------------------------|
| **`eventName`**    | <code>"callStarted"</code>                                   |
| **`listenerFunc`** | <code>(call: <a href="#data">CallData</a>) =&gt; void</code> |

**Returns:** <code>any</code>

--------------------


### Interfaces


#### CallToken

| Prop        | Type                         |
|-------------|------------------------------|
| **`token`** | <code>{value: string}</code> |


#### PluginListenerHandle

| Prop         | Type                      |
| ------------ | ------------------------- |
| **`remove`** | <code>() =&gt; any</code> |


#### CallData

| Prop               | Type                |
| ------------------ | ------------------- |
| **`connectionId`** | <code>string</code> |
| **`username`**     | <code>string</code> |
| **`callerId`**     | <code>string</code> |
| **`group`**        | <code>string</code> |
| **`message`**      | <code>string</code> |
| **`organization`** | <code>string</code> |
| **`roomname`**     | <code>string</code> |
| **`source`**       | <code>string</code> |
| **`title`**        | <code>string</code> |
| **`type`**         | <code>string</code> |
| **`duraion`**      | <code>string</code> |

