# capacitor-voip-ios

Capacito Pluging VoiP Ios CallKit

## 1 Install

```bash
npm install capacitor-voip-ios
npx cap sync
```

## 2. Xcode Project > Capabilities pane. Select the checkbox for Voice over IP, as shown in Image

![](https://miro.medium.com/max/700/1*zVc9U601x_qUqweRKfsfow.png)

## 3. Register certificate on [developer.apple.com/certificates](https://developer.apple.com/certificates)

![](https://miro.medium.com/max/700/1*Z2q66Vo2Emho4_IVXRN8GQ.png)

## 4. Download the certificate and open it to import it into the Keychain Access app.

## 5. Export certificates as shown bellow

![](https://miro.medium.com/max/700/1*7N7d7-dEa6WAMzWbFXO66A.png)

## 6. Now, navigate to the folder where you exported this file and execute following command:

```bash
openssl pkcs12 -in YOUR_CERTIFICATES.p12 -out app.pem -nodes -clcerts
```

## 7. You will receive `app.pem` certificate file that can be used to send VOIP notification (you can use my script bellow)

## 8. Recommendation NODEJS

If you want to use Node Js to send notifications, you must do it via APN, which is a direct module to send PushNotification.

```bash
npm install apn --save // In your project nodejs
```

## Usage

To make this plugin work, you need to call `.register({topic:'videocall'})` method and then you can use API bellow.

```typescript
import {CapacitorVoipIos} from "capacitor-voip-ios"


async function registerVoipNotification(){
    // register token
    CapacitorVoipIos.addListener("registration", (({token}) =>
      console.log(`VOIP token has been received ${token}`)
    ))

    // start call
    CapacitorVoipIos.addListener("callAnswered", (({username, connectionId, joinToken, meetingId}) =>
            console.log(`VOIP username ${username}`);
            console.log(`VOIP connectionId ${connectionId}`);
            console.log(`VOIP meetingId ${meetingId}`);
            console.log(`VOIP joinToken ${joinToken}`);
    ));

    // init plugin, start registration of VOIP notifications
    await CapacitorVoipIos.register({
        topic:'videocall'
    }); // can be used with `.then()`
    console.log("Push notification has been registered")

}
```

Once the plugin is installed, the only thing that you need to do is to push a VOIP notification with the following data payload structure:

```json
{
  "Username": "Display Name",
  "ConnectionId": "Unique Call ID",
  "MeetingId": "Id Meet",
  "JoinToken": "Token Meet",
  "Params": "Object with params"
}
```

You can use my script (bellow) to test it out:
`./sendVoip.sh <connectionId> <deviceToken> <username>`

### sendVoip.sh:

```shell
#!/bin/bash

function main {
    connectionId=${1:?"connectionId should be specified"}
    token=${2:?"Enter device token that you received on register listener"}
    username=${3:-Anonymus"}

    curl -v \
    -d "{\"aps\":{\"alert\":\"Incoming call\", \"content-available\":\"1\"}, \"Username\": \"${username}\", \"ConnectionId\": \"${connectionId}\"}" \
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

- replace <YOUR_BUNDLE_ID> with your app bundle
- ensure that you are using correct voip certificate (specified in `--cert app.pem`)
- if you'll go to production version, you will need to do request to `api.push.apple.com/3/device/${token}` instead of
  `api.development.push.apple.com/3/device/${token}`, otherwise you will receive `BadDeviceToken` issue

## API

<docgen-index>

- [`register(...)`](#register)
- [`incomingCall(...)`](#incomingcall)
- [`addListener('registration', ...)`](#addlistenerregistration)
- [`addListener('callAnswered', ...)`](#addlistenercallanswered)
- [`addListener('callStarted', ...)`](#addlistenercallstarted)
- [`addListener('callCancelled', ...)`](#addlistenercallcancelled)
- [Interfaces](#interfaces)
- [Type Aliases](#type-aliases)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### register(...)

```typescript
register(options: { topic: string; }) => Promise<void>
```

| Param         | Type                            |
| ------------- | ------------------------------- |
| **`options`** | <code>{ topic: string; }</code> |

---

### incomingCall(...)

```typescript
incomingCall(options: { from: string; }) => Promise<void>
```

| Param         | Type                           |
| ------------- | ------------------------------ |
| **`options`** | <code>{ from: string; }</code> |

---

### addListener('registration', ...)

```typescript
addListener(eventName: 'registration', listenerFunc: (token: Token) => void) => Promise<PluginListenerHandle> & PluginListenerHandle
```

| Param              | Type                                                        |
| ------------------ | ----------------------------------------------------------- |
| **`eventName`**    | <code>'registration'</code>                                 |
| **`listenerFunc`** | <code>(token: <a href="#token">Token</a>) =&gt; void</code> |

**Returns:** <code>Promise&lt;<a href="#pluginlistenerhandle">PluginListenerHandle</a>&gt; & <a href="#pluginlistenerhandle">PluginListenerHandle</a></code>

---

### addListener('callAnswered', ...)

```typescript
addListener(eventName: 'callAnswered', listenerFunc: (callDate: CallData) => void) => Promise<PluginListenerHandle> & PluginListenerHandle
```

| Param              | Type                                                                 |
| ------------------ | -------------------------------------------------------------------- |
| **`eventName`**    | <code>'callAnswered'</code>                                          |
| **`listenerFunc`** | <code>(callDate: <a href="#calldata">CallData</a>) =&gt; void</code> |

**Returns:** <code>Promise&lt;<a href="#pluginlistenerhandle">PluginListenerHandle</a>&gt; & <a href="#pluginlistenerhandle">PluginListenerHandle</a></code>

---

### addListener('callStarted', ...)

```typescript
addListener(eventName: 'callStarted', listenerFunc: (callDate: CallData) => void) => Promise<PluginListenerHandle> & PluginListenerHandle
```

| Param              | Type                                                                 |
| ------------------ | -------------------------------------------------------------------- |
| **`eventName`**    | <code>'callStarted'</code>                                           |
| **`listenerFunc`** | <code>(callDate: <a href="#calldata">CallData</a>) =&gt; void</code> |

**Returns:** <code>Promise&lt;<a href="#pluginlistenerhandle">PluginListenerHandle</a>&gt; & <a href="#pluginlistenerhandle">PluginListenerHandle</a></code>

---

### addListener('callCancelled', ...)

```typescript
addListener(eventName: 'callCancelled', listenerFunc: (callDate: CallData) => void) => Promise<PluginListenerHandle> & PluginListenerHandle
```

| Param              | Type                                                                 |
| ------------------ | -------------------------------------------------------------------- |
| **`eventName`**    | <code>'callCancelled'</code>                                         |
| **`listenerFunc`** | <code>(callDate: <a href="#calldata">CallData</a>) =&gt; void</code> |

**Returns:** <code>Promise&lt;<a href="#pluginlistenerhandle">PluginListenerHandle</a>&gt; & <a href="#pluginlistenerhandle">PluginListenerHandle</a></code>

---

### Interfaces

#### PluginListenerHandle

| Prop         | Type                                      |
| ------------ | ----------------------------------------- |
| **`remove`** | <code>() =&gt; Promise&lt;void&gt;</code> |

#### Token

| Prop        | Type                |
| ----------- | ------------------- |
| **`token`** | <code>string</code> |

#### CallData

| Prop               | Type                                 |
| ------------------ | ------------------------------------ |
| **`connectionId`** | <code>string</code>                  |
| **`username`**     | <code>string</code>                  |
| **`meetingId`**    | <code>string</code>                  |
| **`joinToken`**    | <code>string</code>                  |
| **`params`**       | <code>{ [key: string]: any; }</code> |

#### MessageCallData

| Prop             | Type                   |
| ---------------- | ---------------------- |
| **`type`**       | <code>'message'</code> |
| **`callbackId`** | <code>string</code>    |
| **`pluginId`**   | <code>string</code>    |
| **`methodName`** | <code>string</code>    |
| **`options`**    | <code>any</code>       |

#### ErrorCallData

| Prop        | Type                                                                                           |
| ----------- | ---------------------------------------------------------------------------------------------- |
| **`type`**  | <code>'js.error'</code>                                                                        |
| **`error`** | <code>{ message: string; url: string; line: number; col: number; errorObject: string; }</code> |

### Type Aliases

#### CallData

<code><a href="#messagecalldata">MessageCallData</a> | <a href="#errorcalldata">ErrorCallData</a></code>

</docgen-api>
