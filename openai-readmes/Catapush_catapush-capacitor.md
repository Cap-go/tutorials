# catapush-capacitor

Catapush plugin for Capacitor.<br />See the [SETUP.md](SETUP.md) file for the complete installation guide.

## Install

```bash
npm install catapush-capacitor
npx cap sync
```

## API

<docgen-index>

- [`setCatapushMessageDelegate(...)`](#setcatapushmessagedelegate)
- [`setCatapushStateDelegate(...)`](#setcatapushstatedelegate)
- [`init(...)`](#init)
- [`setUser(...)`](#setuser)
- [`start()`](#start)
- [`allMessages()`](#allmessages)
- [`enableLog(...)`](#enablelog)
- [`sendMessage(...)`](#sendmessage)
- [`getAttachmentUrlForMessage(...)`](#getattachmenturlformessage)
- [`resumeNotifications()`](#resumenotifications)
- [`pauseNotifications()`](#pausenotifications)
- [`enableNotifications()`](#enablenotifications)
- [`disableNotifications()`](#disablenotifications)
- [`sendMessageReadNotificationWithId(...)`](#sendmessagereadnotificationwithid)
- [Interfaces](#interfaces)
- [Enums](#enums)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### setCatapushMessageDelegate(...)

```typescript
setCatapushMessageDelegate(delegate: CatapushMessageDelegate) => Promise<void>
```

Sets a delegate that gets notified about new received or sent messages

| Param          | Type                                                                        | Description                                                                                                   |
| -------------- | --------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| **`delegate`** | <code><a href="#catapushmessagedelegate">CatapushMessageDelegate</a></code> | Object that implements the <a href="#catapushmessagedelegate">CatapushMessageDelegate</a> interface callbacks |

---

### setCatapushStateDelegate(...)

```typescript
setCatapushStateDelegate(delegate: CatapushStateDelegate) => Promise<void>
```

Sets a delegate that gets notified when the status of the SDK changes

| Param          | Type                                                                    | Description                                                                                               |
| -------------- | ----------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| **`delegate`** | <code><a href="#catapushstatedelegate">CatapushStateDelegate</a></code> | Object that implements the <a href="#catapushstatedelegate">CatapushStateDelegate</a> interface callbacks |

---

### init(...)

```typescript
init(options: { appId: string; }) => Promise<void>
```

Inits the Catapush native SDK.

| Param         | Type                            | Description                                                                                                       |
| ------------- | ------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| **`options`** | <code>{ appId: string; }</code> | Your Catapush app ID needed to instantiate the iOS native SDK that can be retrieved from your Catapush dashboard. |

---

### setUser(...)

```typescript
setUser(options: { identifier: string; password: string; }) => Promise<void>
```

Sets the user credentials in the Catapush native SDK.

| Param         | Type                                                   | Description                                 |
| ------------- | ------------------------------------------------------ | ------------------------------------------- |
| **`options`** | <code>{ identifier: string; password: string; }</code> | Your Catapush user identifier and password. |

---

### start()

```typescript
start() => Promise<void>
```

Start the Catapush native service.

---

### allMessages()

```typescript
allMessages() => Promise<AllMessagesResponse>
```

Retrieve all the Catapush messages stored for the current user.

**Returns:** <code>Promise&lt;<a href="#allmessagesresponse">AllMessagesResponse</a>&gt;</code>

---

### enableLog(...)

```typescript
enableLog(options: { enabled: boolean; }) => Promise<void>
```

Enable the Catapush native SDK logging.

| Param         | Type                               | Description                                                               |
| ------------- | ---------------------------------- | ------------------------------------------------------------------------- |
| **`options`** | <code>{ enabled: boolean; }</code> | Enable or disable logging passing true or false in the enabled attribute. |

---

### sendMessage(...)

```typescript
sendMessage(options: SendMessageParams) => Promise<void>
```

Send a message to the Catapush server for delivery.

| Param         | Type                                                            | Description                                    |
| ------------- | --------------------------------------------------------------- | ---------------------------------------------- |
| **`options`** | <code><a href="#sendmessageparams">SendMessageParams</a></code> | The attributes of the message to be delivered. |

---

### getAttachmentUrlForMessage(...)

```typescript
getAttachmentUrlForMessage(options: MessageIdParams) => Promise<CatapushFile>
```

Get a message attachment URL.

| Param         | Type                                                        | Description                                                   |
| ------------- | ----------------------------------------------------------- | ------------------------------------------------------------- |
| **`options`** | <code><a href="#messageidparams">MessageIdParams</a></code> | The ID of the message whose attachment needs to be retrieved. |

**Returns:** <code>Promise&lt;<a href="#catapushfile">CatapushFile</a>&gt;</code>

---

### resumeNotifications()

```typescript
resumeNotifications() => Promise<void>
```

Resume displaying notification to the user.
This setting is not persisted across Catapush SDK/app restarts.
Android only.

---

### pauseNotifications()

```typescript
pauseNotifications() => Promise<void>
```

Pause displaying notification to the user.
This setting is not persisted across Catapush SDK/app restarts.
Android only.

---

### enableNotifications()

```typescript
enableNotifications() => Promise<void>
```

Enable the notification of messages to the user in the status bar.
This setting is persisted across Catapush SDK/app restarts.
Android only.

---

### disableNotifications()

```typescript
disableNotifications() => Promise<void>
```

Disable the notification of messages to the user in the status bar.
This setting is persisted across Catapush SDK/app restarts.
Android only.

---

### sendMessageReadNotificationWithId(...)

```typescript
sendMessageReadNotificationWithId(options: { id: string; }) => Promise<void>
```

Send the read notification of a message to the Catapush server.

| Param         | Type                         | Description                                 |
| ------------- | ---------------------------- | ------------------------------------------- |
| **`options`** | <code>{ id: string; }</code> | The ID of the message to be marked as read. |

---

### Interfaces

#### CatapushMessageDelegate

| Method                         | Signature                                                            |
| ------------------------------ | -------------------------------------------------------------------- |
| **catapushMessageReceived**    | (message: <a href="#catapushmessage">CatapushMessage</a>) =&gt; void |
| **catapushMessageSent**        | (message: <a href="#catapushmessage">CatapushMessage</a>) =&gt; void |
| **catapushNotificationTapped** | (message: <a href="#catapushmessage">CatapushMessage</a>) =&gt; void |

#### CatapushMessage

| Prop                | Type                                                                  |
| ------------------- | --------------------------------------------------------------------- |
| **`id`**            | <code>string</code>                                                   |
| **`sender`**        | <code>string</code>                                                   |
| **`body`**          | <code>string</code>                                                   |
| **`subject`**       | <code>string</code>                                                   |
| **`previewText`**   | <code>string</code>                                                   |
| **`hasAttachment`** | <code>boolean</code>                                                  |
| **`channel`**       | <code>string</code>                                                   |
| **`replyToId`**     | <code>string</code>                                                   |
| **`optionalData`**  | <code><a href="#map">Map</a>&lt;string, any&gt;</code>                |
| **`receivedTime`**  | <code><a href="#date">Date</a></code>                                 |
| **`readTime`**      | <code><a href="#date">Date</a></code>                                 |
| **`sentTime`**      | <code><a href="#date">Date</a></code>                                 |
| **`state`**         | <code><a href="#catapushmessagestate">CatapushMessageState</a></code> |

#### Map

| Prop       | Type                |
| ---------- | ------------------- |
| **`size`** | <code>number</code> |

| Method      | Signature                                                                                                      |
| ----------- | -------------------------------------------------------------------------------------------------------------- |
| **clear**   | () =&gt; void                                                                                                  |
| **delete**  | (key: K) =&gt; boolean                                                                                         |
| **forEach** | (callbackfn: (value: V, key: K, map: <a href="#map">Map</a>&lt;K, V&gt;) =&gt; void, thisArg?: any) =&gt; void |
| **get**     | (key: K) =&gt; V \| undefined                                                                                  |
| **has**     | (key: K) =&gt; boolean                                                                                         |
| **set**     | (key: K, value: V) =&gt; this                                                                                  |

#### Date

Enables basic storage and retrieval of dates and times.

| Method                 | Signature                                                                                                    | Description                                                                                                                             |
| ---------------------- | ------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------- |
| **toString**           | () =&gt; string                                                                                              | Returns a string representation of a date. The format of the string depends on the locale.                                              |
| **toDateString**       | () =&gt; string                                                                                              | Returns a date as a string value.                                                                                                       |
| **toTimeString**       | () =&gt; string                                                                                              | Returns a time as a string value.                                                                                                       |
| **toLocaleString**     | () =&gt; string                                                                                              | Returns a value as a string value appropriate to the host environment's current locale.                                                 |
| **toLocaleDateString** | () =&gt; string                                                                                              | Returns a date as a string value appropriate to the host environment's current locale.                                                  |
| **toLocaleTimeString** | () =&gt; string                                                                                              | Returns a time as a string value appropriate to the host environment's current locale.                                                  |
| **valueOf**            | () =&gt; number                                                                                              | Returns the stored time value in milliseconds since midnight, January 1, 1970 UTC.                                                      |
| **getTime**            | () =&gt; number                                                                                              | Gets the time value in milliseconds.                                                                                                    |
| **getFullYear**        | () =&gt; number                                                                                              | Gets the year, using local time.                                                                                                        |
| **getUTCFullYear**     | () =&gt; number                                                                                              | Gets the year using Universal Coordinated Time (UTC).                                                                                   |
| **getMonth**           | () =&gt; number                                                                                              | Gets the month, using local time.                                                                                                       |
| **getUTCMonth**        | () =&gt; number                                                                                              | Gets the month of a <a href="#date">Date</a> object using Universal Coordinated Time (UTC).                                             |
| **getDate**            | () =&gt; number                                                                                              | Gets the day-of-the-month, using local time.                                                                                            |
| **getUTCDate**         | () =&gt; number                                                                                              | Gets the day-of-the-month, using Universal Coordinated Time (UTC).                                                                      |
| **getDay**             | () =&gt; number                                                                                              | Gets the day of the week, using local time.                                                                                             |
| **getUTCDay**          | () =&gt; number                                                                                              | Gets the day of the week using Universal Coordinated Time (UTC).                                                                        |
| **getHours**           | () =&gt; number                                                                                              | Gets the hours in a date, using local time.                                                                                             |
| **getUTCHours**        | () =&gt; number                                                                                              | Gets the hours value in a <a href="#date">Date</a> object using Universal Coordinated Time (UTC).                                       |
| **getMinutes**         | () =&gt; number                                                                                              | Gets the minutes of a <a href="#date">Date</a> object, using local time.                                                                |
| **getUTCMinutes**      | () =&gt; number                                                                                              | Gets the minutes of a <a href="#date">Date</a> object using Universal Coordinated Time (UTC).                                           |
| **getSeconds**         | () =&gt; number                                                                                              | Gets the seconds of a <a href="#date">Date</a> object, using local time.                                                                |
| **getUTCSeconds**      | () =&gt; number                                                                                              | Gets the seconds of a <a href="#date">Date</a> object using Universal Coordinated Time (UTC).                                           |
| **getMilliseconds**    | () =&gt; number                                                                                              | Gets the milliseconds of a <a href="#date">Date</a>, using local time.                                                                  |
| **getUTCMilliseconds** | () =&gt; number                                                                                              | Gets the milliseconds of a <a href="#date">Date</a> object using Universal Coordinated Time (UTC).                                      |
| **getTimezoneOffset**  | () =&gt; number                                                                                              | Gets the difference in minutes between the time on the local computer and Universal Coordinated Time (UTC).                             |
| **setTime**            | (time: number) =&gt; number                                                                                  | Sets the date and time value in the <a href="#date">Date</a> object.                                                                    |
| **setMilliseconds**    | (ms: number) =&gt; number                                                                                    | Sets the milliseconds value in the <a href="#date">Date</a> object using local time.                                                    |
| **setUTCMilliseconds** | (ms: number) =&gt; number                                                                                    | Sets the milliseconds value in the <a href="#date">Date</a> object using Universal Coordinated Time (UTC).                              |
| **setSeconds**         | (sec: number, ms?: number \| undefined) =&gt; number                                                         | Sets the seconds value in the <a href="#date">Date</a> object using local time.                                                         |
| **setUTCSeconds**      | (sec: number, ms?: number \| undefined) =&gt; number                                                         | Sets the seconds value in the <a href="#date">Date</a> object using Universal Coordinated Time (UTC).                                   |
| **setMinutes**         | (min: number, sec?: number \| undefined, ms?: number \| undefined) =&gt; number                              | Sets the minutes value in the <a href="#date">Date</a> object using local time.                                                         |
| **setUTCMinutes**      | (min: number, sec?: number \| undefined, ms?: number \| undefined) =&gt; number                              | Sets the minutes value in the <a href="#date">Date</a> object using Universal Coordinated Time (UTC).                                   |
| **setHours**           | (hours: number, min?: number \| undefined, sec?: number \| undefined, ms?: number \| undefined) =&gt; number | Sets the hour value in the <a href="#date">Date</a> object using local time.                                                            |
| **setUTCHours**        | (hours: number, min?: number \| undefined, sec?: number \| undefined, ms?: number \| undefined) =&gt; number | Sets the hours value in the <a href="#date">Date</a> object using Universal Coordinated Time (UTC).                                     |
| **setDate**            | (date: number) =&gt; number                                                                                  | Sets the numeric day-of-the-month value of the <a href="#date">Date</a> object using local time.                                        |
| **setUTCDate**         | (date: number) =&gt; number                                                                                  | Sets the numeric day of the month in the <a href="#date">Date</a> object using Universal Coordinated Time (UTC).                        |
| **setMonth**           | (month: number, date?: number \| undefined) =&gt; number                                                     | Sets the month value in the <a href="#date">Date</a> object using local time.                                                           |
| **setUTCMonth**        | (month: number, date?: number \| undefined) =&gt; number                                                     | Sets the month value in the <a href="#date">Date</a> object using Universal Coordinated Time (UTC).                                     |
| **setFullYear**        | (year: number, month?: number \| undefined, date?: number \| undefined) =&gt; number                         | Sets the year of the <a href="#date">Date</a> object using local time.                                                                  |
| **setUTCFullYear**     | (year: number, month?: number \| undefined, date?: number \| undefined) =&gt; number                         | Sets the year value in the <a href="#date">Date</a> object using Universal Coordinated Time (UTC).                                      |
| **toUTCString**        | () =&gt; string                                                                                              | Returns a date converted to a string using Universal Coordinated Time (UTC).                                                            |
| **toISOString**        | () =&gt; string                                                                                              | Returns a date as a string value in ISO format.                                                                                         |
| **toJSON**             | (key?: any) =&gt; string                                                                                     | Used by the JSON.stringify method to enable the transformation of an object's data for JavaScript Object Notation (JSON) serialization. |

#### CatapushStateDelegate

| Method                   | Signature                                                      |
| ------------------------ | -------------------------------------------------------------- |
| **catapushStateChanged** | (state: <a href="#catapushstate">CatapushState</a>) =&gt; void |
| **catapushHandleError**  | (error: <a href="#catapusherror">CatapushError</a>) =&gt; void |

#### CatapushError

| Prop        | Type                |
| ----------- | ------------------- |
| **`event`** | <code>string</code> |
| **`code`**  | <code>number</code> |

#### AllMessagesResponse

| Prop           | Type                           |
| -------------- | ------------------------------ |
| **`messages`** | <code>CatapushMessage[]</code> |

#### SendMessageParams

| Prop          | Type                                                  |
| ------------- | ----------------------------------------------------- |
| **`body`**    | <code>string</code>                                   |
| **`channel`** | <code>string</code>                                   |
| **`replyTo`** | <code>string</code>                                   |
| **`file`**    | <code><a href="#catapushfile">CatapushFile</a></code> |

#### CatapushFile

| Prop           | Type                |
| -------------- | ------------------- |
| **`mimeType`** | <code>string</code> |
| **`url`**      | <code>string</code> |

#### MessageIdParams

| Prop     | Type                |
| -------- | ------------------- |
| **`id`** | <code>string</code> |

### Enums

#### CatapushMessageState

| Members                  | Value                             |
| ------------------------ | --------------------------------- |
| **`RECEIVED`**           | <code>'RECEIVED'</code>           |
| **`RECEIVED_CONFIRMED`** | <code>'RECEIVED_CONFIRMED'</code> |
| **`OPENED`**             | <code>'OPENED'</code>             |
| **`OPENED_CONFIRMED`**   | <code>'OPENED_CONFIRMED'</code>   |
| **`NOT_SENT`**           | <code>'NOT_SENT'</code>           |
| **`SENT`**               | <code>'SENT'</code>               |
| **`SENT_CONFIRMED`**     | <code>'SENT_CONFIRMED'</code>     |

#### CatapushState

| Members            | Value                       |
| ------------------ | --------------------------- |
| **`DISCONNECTED`** | <code>'DISCONNECTED'</code> |
| **`CONNECTING`**   | <code>'CONNECTING'</code>   |
| **`CONNECTED`**    | <code>'CONNECTED'</code>    |

</docgen-api>
