# capacitor-zendesk

Capacitor Zendesk Plugin

## Install

```bash
npm install capacitor-zendesk
npx cap sync
```

### Android

Add these lines to AndroidManifest.xml

```
<application>
  <activity
    android:name="zendesk.support.guide.HelpCenterActivity"
    android:theme="@style/Base.Theme.AppCompat" />
  <activity
    android:name="zendesk.support.guide.ViewArticleActivity"
    android:theme="@style/Base.Theme.AppCompat" />
  <activity
    android:name="zendesk.support.requestlist.RequestListActivity"
    android:theme="@style/Base.Theme.AppCompat" />
  <activity
    android:name="zendesk.support.request.RequestActivity"
    android:theme="@style/Base.Theme.AppCompat" />
</application>
```

Add this to line to `android/build.gradle` file

```
allprojects {
    repositories {
        google()
        mavenCentral()
        maven { url "https://jitpack.io" }
    ++  maven { url 'https://zendesk.jfrog.io/zendesk/repo' }
    }
}
```

## API

<docgen-index>

- [`initialize(...)`](#initialize)
- [`initChat(...)`](#initchat)
- [`setIdentity(...)`](#setidentity)
- [`setVisitorInfo(...)`](#setvisitorinfo)
- [`setChatConfiguration(...)`](#setchatconfiguration)
- [`setPrimaryColor(...)`](#setprimarycolor)
- [`setNotificationToken(...)`](#setnotificationtoken)
- [`showHelpCenter(...)`](#showhelpcenter)
- [`startChat(...)`](#startchat)
- [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### initialize(...)

```typescript
initialize(config: ZendeskConfig) => Promise<void>
```

| Param        | Type                                                    |
| ------------ | ------------------------------------------------------- |
| **`config`** | <code><a href="#zendeskconfig">ZendeskConfig</a></code> |

---

### initChat(...)

```typescript
initChat(config: ZendeskChat) => Promise<void>
```

| Param        | Type                                                |
| ------------ | --------------------------------------------------- |
| **`config`** | <code><a href="#zendeskchat">ZendeskChat</a></code> |

---

### setIdentity(...)

```typescript
setIdentity(user: ZendeskUser) => Promise<void>
```

| Param      | Type                                                |
| ---------- | --------------------------------------------------- |
| **`user`** | <code><a href="#zendeskuser">ZendeskUser</a></code> |

---

### setVisitorInfo(...)

```typescript
setVisitorInfo(user: ZendeskVisitorInfo) => Promise<void>
```

| Param      | Type                                                              |
| ---------- | ----------------------------------------------------------------- |
| **`user`** | <code><a href="#zendeskvisitorinfo">ZendeskVisitorInfo</a></code> |

---

### setChatConfiguration(...)

```typescript
setChatConfiguration(config: ZendeskChatConfig) => Promise<void>
```

| Param        | Type                                                            |
| ------------ | --------------------------------------------------------------- |
| **`config`** | <code><a href="#zendeskchatconfig">ZendeskChatConfig</a></code> |

---

### setPrimaryColor(...)

```typescript
setPrimaryColor(primaryColor: ZendeskPrimaryColor) => Promise<void>
```

| Param              | Type                                                                |
| ------------------ | ------------------------------------------------------------------- |
| **`primaryColor`** | <code><a href="#zendeskprimarycolor">ZendeskPrimaryColor</a></code> |

---

### setNotificationToken(...)

```typescript
setNotificationToken(notificationToken: ZendeskNotificationToken) => Promise<void>
```

| Param                   | Type                                                                          |
| ----------------------- | ----------------------------------------------------------------------------- |
| **`notificationToken`** | <code><a href="#zendesknotificationtoken">ZendeskNotificationToken</a></code> |

---

### showHelpCenter(...)

```typescript
showHelpCenter(config: ZendeskHelpCenterConfig) => Promise<void>
```

| Param        | Type                                                                        |
| ------------ | --------------------------------------------------------------------------- |
| **`config`** | <code><a href="#zendeskhelpcenterconfig">ZendeskHelpCenterConfig</a></code> |

---

### startChat(...)

```typescript
startChat(config: ZendeskChat) => Promise<void>
```

| Param        | Type                                                |
| ------------ | --------------------------------------------------- |
| **`config`** | <code><a href="#zendeskchat">ZendeskChat</a></code> |

---

### Interfaces

#### ZendeskConfig

| Prop           | Type                |
| -------------- | ------------------- |
| **`key`**      | <code>string</code> |
| **`appId`**    | <code>string</code> |
| **`clientId`** | <code>string</code> |
| **`url`**      | <code>string</code> |

#### ZendeskChat

| Prop             | Type                 |
| ---------------- | -------------------- |
| **`department`** | <code>string</code>  |
| **`tags`**       | <code>string</code>  |
| **`name`**       | <code>string</code>  |
| **`email`**      | <code>string</code>  |
| **`phone`**      | <code>string</code>  |
| **`botName`**    | <code>string</code>  |
| **`botImage`**   | <code>string</code>  |
| **`chatOnly`**   | <code>boolean</code> |

#### ZendeskUser

| Prop        | Type                |
| ----------- | ------------------- |
| **`token`** | <code>string</code> |
| **`name`**  | <code>string</code> |
| **`email`** | <code>string</code> |

#### ZendeskVisitorInfo

| Prop             | Type                |
| ---------------- | ------------------- |
| **`department`** | <code>string</code> |
| **`tags`**       | <code>string</code> |
| **`name`**       | <code>string</code> |
| **`email`**      | <code>string</code> |
| **`phone`**      | <code>string</code> |

#### ZendeskChatConfig

| Prop                                | Type                 |
| ----------------------------------- | -------------------- |
| **`chatMenuActions`**               | <code>boolean</code> |
| **`isChatTranscriptPromptEnabled`** | <code>boolean</code> |
| **`isPreChatFormEnabled`**          | <code>boolean</code> |
| **`isOfflineFormEnabled`**          | <code>boolean</code> |
| **`isAgentAvailabilityEnabled`**    | <code>boolean</code> |

#### ZendeskPrimaryColor

| Prop               | Type                |
| ------------------ | ------------------- |
| **`primaryColor`** | <code>string</code> |

#### ZendeskNotificationToken

| Prop                    | Type                |
| ----------------------- | ------------------- |
| **`notificationToken`** | <code>string</code> |

#### ZendeskHelpCenterConfig

| Prop           | Type                 |
| -------------- | -------------------- |
| **`botName`**  | <code>string</code>  |
| **`withChat`** | <code>boolean</code> |

</docgen-api>
