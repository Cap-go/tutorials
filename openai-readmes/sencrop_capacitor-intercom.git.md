# @sencrop/capacitor-intercom

Intercom Plugin for Capacitor

## Install

```bash
npm install @sencrop/capacitor-intercom
npx cap sync
```

## API

<docgen-index>

* [`initialize(...)`](#initialize)
* [`loginIdentifiedUser(...)`](#loginidentifieduser)
* [`loginUnidentifiedUser()`](#loginunidentifieduser)
* [`updateUser(...)`](#updateuser)
* [`logout()`](#logout)
* [`logEvent(...)`](#logevent)
* [`displayMessenger()`](#displaymessenger)
* [`displayMessageComposer(...)`](#displaymessagecomposer)
* [`displayHelpCenter()`](#displayhelpcenter)
* [`displayArticle(...)`](#displayarticle)
* [`hideMessenger()`](#hidemessenger)
* [`displayLauncher()`](#displaylauncher)
* [`hideLauncher()`](#hidelauncher)
* [`setCustomAttributes(...)`](#setcustomattributes)
* [`displaySurvey(...)`](#displaysurvey)
* [Interfaces](#interfaces)
* [Type Aliases](#type-aliases)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### initialize(...)

```typescript
initialize(config: IntercomSettings) => void
```

| Param        | Type                                                          |
| ------------ | ------------------------------------------------------------- |
| **`config`** | <code><a href="#intercomsettings">IntercomSettings</a></code> |

--------------------


### loginIdentifiedUser(...)

```typescript
loginIdentifiedUser(identity: IntercomIdentity) => Promise<void>
```

| Param          | Type                                                          |
| -------------- | ------------------------------------------------------------- |
| **`identity`** | <code><a href="#intercomidentity">IntercomIdentity</a></code> |

--------------------


### loginUnidentifiedUser()

```typescript
loginUnidentifiedUser() => Promise<void>
```

--------------------


### updateUser(...)

```typescript
updateUser(user: IntercomUser) => Promise<void>
```

| Param      | Type                                                  |
| ---------- | ----------------------------------------------------- |
| **`user`** | <code><a href="#intercomuser">IntercomUser</a></code> |

--------------------


### logout()

```typescript
logout() => Promise<void>
```

--------------------


### logEvent(...)

```typescript
logEvent(event: IntercomEvent) => Promise<void>
```

| Param       | Type                                                    |
| ----------- | ------------------------------------------------------- |
| **`event`** | <code><a href="#intercomevent">IntercomEvent</a></code> |

--------------------


### displayMessenger()

```typescript
displayMessenger() => Promise<void>
```

--------------------


### displayMessageComposer(...)

```typescript
displayMessageComposer(message: IntercomMessage) => Promise<void>
```

| Param         | Type                                                        |
| ------------- | ----------------------------------------------------------- |
| **`message`** | <code><a href="#intercommessage">IntercomMessage</a></code> |

--------------------


### displayHelpCenter()

```typescript
displayHelpCenter() => Promise<void>
```

--------------------


### displayArticle(...)

```typescript
displayArticle(article: IntercomArticle) => Promise<void>
```

| Param         | Type                                                        |
| ------------- | ----------------------------------------------------------- |
| **`article`** | <code><a href="#intercomarticle">IntercomArticle</a></code> |

--------------------


### hideMessenger()

```typescript
hideMessenger() => Promise<void>
```

--------------------


### displayLauncher()

```typescript
displayLauncher() => Promise<void>
```

--------------------


### hideLauncher()

```typescript
hideLauncher() => Promise<void>
```

--------------------


### setCustomAttributes(...)

```typescript
setCustomAttributes(payload: IntercomCustomAttributes) => Promise<void>
```

| Param         | Type                                                                          |
| ------------- | ----------------------------------------------------------------------------- |
| **`payload`** | <code><a href="#intercomcustomattributes">IntercomCustomAttributes</a></code> |

--------------------


### displaySurvey(...)

```typescript
displaySurvey(survey: IntercomSurvey) => Promise<void>
```

| Param        | Type                                                      |
| ------------ | --------------------------------------------------------- |
| **`survey`** | <code><a href="#intercomsurvey">IntercomSurvey</a></code> |

--------------------


### Interfaces


#### IntercomSettings

| Prop                           | Type                                                        |
| ------------------------------ | ----------------------------------------------------------- |
| **`app_id`**                   | <code>string</code>                                         |
| **`api_base`**                 | <code>string</code>                                         |
| **`alignment`**                | <code>string</code>                                         |
| **`custom_launcher_selector`** | <code>string</code>                                         |
| **`hide_default_launcher`**    | <code>boolean</code>                                        |
| **`horizontal_padding`**       | <code>number</code>                                         |
| **`session_duration`**         | <code>number</code>                                         |
| **`vertical_padding`**         | <code>number</code>                                         |
| **`action_color`**             | <code>string</code>                                         |
| **`background_color`**         | <code>string</code>                                         |
| **`email`**                    | <code>string</code>                                         |
| **`phone`**                    | <code>string</code>                                         |
| **`created_at`**               | <code>number</code>                                         |
| **`name`**                     | <code>string</code>                                         |
| **`user_id`**                  | <code>string</code>                                         |
| **`user_hash`**                | <code>string</code>                                         |
| **`unsubscribed_from_emails`** | <code>boolean</code>                                        |
| **`language_override`**        | <code>string</code>                                         |
| **`utm_campaign`**             | <code>string</code>                                         |
| **`utm_content`**              | <code>string</code>                                         |
| **`utm_medium`**               | <code>string</code>                                         |
| **`utm_source`**               | <code>string</code>                                         |
| **`utm_term`**                 | <code>string</code>                                         |
| **`company`**                  | <code><a href="#intercomcompany">IntercomCompany</a></code> |
| **`companies`**                | <code>IntercomCompany[]</code>                              |
| **`avatar`**                   | <code><a href="#intercomavatar">IntercomAvatar</a></code>   |


#### IntercomCompany

| Prop                    | Type                          |
| ----------------------- | ----------------------------- |
| **`name`**              | <code>string</code>           |
| **`id`**                | <code>string \| number</code> |
| **`company_id`**        | <code>string \| number</code> |
| **`created_at`**        | <code>number</code>           |
| **`remote_created_at`** | <code>number</code>           |
| **`plan`**              | <code>string</code>           |
| **`monthly_spend`**     | <code>number</code>           |
| **`user_count`**        | <code>number</code>           |
| **`size`**              | <code>number</code>           |
| **`website`**           | <code>string</code>           |
| **`industry`**          | <code>string</code>           |


#### IntercomAvatar

| Prop            | Type                  |
| --------------- | --------------------- |
| **`type`**      | <code>'avatar'</code> |
| **`image_url`** | <code>string</code>   |


#### IntercomIdentity

| Prop           | Type                |
| -------------- | ------------------- |
| **`userId`**   | <code>string</code> |
| **`email`**    | <code>string</code> |
| **`userHash`** | <code>string</code> |


#### IntercomUser

| Prop           | Type                |
| -------------- | ------------------- |
| **`email`**    | <code>string</code> |
| **`phone`**    | <code>string</code> |
| **`name`**     | <code>string</code> |
| **`language`** | <code>string</code> |


#### IntercomEvent

| Prop       | Type                |
| ---------- | ------------------- |
| **`name`** | <code>string</code> |
| **`data`** | <code>any</code>    |


#### IntercomMessage

| Prop          | Type                |
| ------------- | ------------------- |
| **`content`** | <code>string</code> |


#### IntercomArticle

| Prop     | Type                |
| -------- | ------------------- |
| **`id`** | <code>number</code> |


#### IntercomCustomAttributes

| Prop             | Type                                                                                 |
| ---------------- | ------------------------------------------------------------------------------------ |
| **`attributes`** | <code><a href="#record">Record</a>&lt;string, number \| string \| boolean&gt;</code> |


#### IntercomSurvey

| Prop     | Type                |
| -------- | ------------------- |
| **`id`** | <code>number</code> |


### Type Aliases


#### Record

Construct a type with a set of properties K of type T

<code>{ [P in K]: T; }</code>

</docgen-api>
