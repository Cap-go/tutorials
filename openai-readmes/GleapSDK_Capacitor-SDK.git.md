# Capacitor Gleap Plugin

Gleap SDK for Capacitor is the easiest way to integrate Gleap into your Ionic apps! Achieve better app quality with comprehensive in-app bug reporting & customer feedback for your web-apps and websites. Many thanks to Stephan Nagel (congrapp) for his work on the Gleap capacitor plugin.

This plugin supports capacitor 6. See the instructions below for earlier capacitor versions.

## Install

```bash
npm install capacitor-gleap-plugin
npx cap sync
```

## Capacitor 5

Please install the plugin version from our capacitor-v5 brunch with `npm install GleapSDK/Capacitor-SDK#capacitor-v5 --save` if you are using capacitor 5.

## Capacitor 4 or earlier

Please install the plugin version from our capacitor-v4 brunch with `npm install GleapSDK/Capacitor-SDK#capacitor-v4 --save` if you are using capacitor 4 or earlier.

## API

<docgen-index>

* [`initialize(...)`](#initialize)
* [`identify(...)`](#identify)
* [`updateContact(...)`](#updatecontact)
* [`clearIdentity()`](#clearidentity)
* [`getIdentity()`](#getidentity)
* [`isUserIdentified()`](#isuseridentified)
* [`log(...)`](#log)
* [`showSurvey(...)`](#showsurvey)
* [`attachCustomData(...)`](#attachcustomdata)
* [`setTags(...)`](#settags)
* [`setNetworkLogsBlacklist(...)`](#setnetworklogsblacklist)
* [`setNetworkLogPropsToIgnore(...)`](#setnetworklogpropstoignore)
* [`setAiTools(...)`](#setaitools)
* [`setTicketAttribute(...)`](#setticketattribute)
* [`unsetTicketAttribute(...)`](#unsetticketattribute)
* [`clearTicketAttributes()`](#clearticketattributes)
* [`setCustomData(...)`](#setcustomdata)
* [`removeCustomData(...)`](#removecustomdata)
* [`clearCustomData()`](#clearcustomdata)
* [`trackEvent(...)`](#trackevent)
* [`trackPage(...)`](#trackpage)
* [`setEventCallback(...)`](#seteventcallback)
* [`sendSilentCrashReport(...)`](#sendsilentcrashreport)
* [`preFillForm(...)`](#prefillform)
* [`addAttachment(...)`](#addattachment)
* [`removeAllAttachments()`](#removeallattachments)
* [`open()`](#open)
* [`openNews(...)`](#opennews)
* [`openNewsArticle(...)`](#opennewsarticle)
* [`openHelpCenter(...)`](#openhelpcenter)
* [`openHelpCenterArticle(...)`](#openhelpcenterarticle)
* [`openHelpCenterCollection(...)`](#openhelpcentercollection)
* [`searchHelpCenter(...)`](#searchhelpcenter)
* [`openFeatureRequests(...)`](#openfeaturerequests)
* [`close()`](#close)
* [`isOpened()`](#isopened)
* [`startFeedbackFlow(...)`](#startfeedbackflow)
* [`startClassicForm(...)`](#startclassicform)
* [`startConversation(...)`](#startconversation)
* [`openConversation(...)`](#openconversation)
* [`startBot(...)`](#startbot)
* [`showFeedbackButton(...)`](#showfeedbackbutton)
* [`setDisableInAppNotifications(...)`](#setdisableinappnotifications)
* [`setLanguage(...)`](#setlanguage)
* [`disableConsoleLogOverwrite()`](#disableconsolelogoverwrite)
* [`enableDebugConsoleLog()`](#enabledebugconsolelog)
* [Interfaces](#interfaces)
* [Type Aliases](#type-aliases)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### initialize(...)

```typescript
initialize(options: { API_KEY: string; }) => Promise<{ initialized: boolean; }>
```

Initialize Gleap with an API key

| Param         | Type                              |
| ------------- | --------------------------------- |
| **`options`** | <code>{ API_KEY: string; }</code> |

**Returns:** <code>Promise&lt;{ initialized: boolean; }&gt;</code>

**Since:** 7.0.0

--------------------


### identify(...)

```typescript
identify(options: { userId: string; userHash?: string; name?: string; email?: string; phone?: string; companyId?: string; companyName?: string; sla?: number; plan?: string; value?: number; customData?: Object; }) => Promise<{ identify: boolean; }>
```

Set user identity

| Param         | Type                                                                                                                                                                                                                                 |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **`options`** | <code>{ userId: string; userHash?: string; name?: string; email?: string; phone?: string; companyId?: string; companyName?: string; sla?: number; plan?: string; value?: number; customData?: <a href="#object">Object</a>; }</code> |

**Returns:** <code>Promise&lt;{ identify: boolean; }&gt;</code>

**Since:** 7.0.0

--------------------


### updateContact(...)

```typescript
updateContact(options: { name?: string; email?: string; phone?: string; companyId?: string; sla?: number; companyName?: string; plan?: string; value?: number; customData?: Object; }) => Promise<{ identify: boolean; }>
```

Update user properties

| Param         | Type                                                                                                                                                                                              |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`options`** | <code>{ name?: string; email?: string; phone?: string; companyId?: string; sla?: number; companyName?: string; plan?: string; value?: number; customData?: <a href="#object">Object</a>; }</code> |

**Returns:** <code>Promise&lt;{ identify: boolean; }&gt;</code>

**Since:** 13.2.1

--------------------


### clearIdentity()

```typescript
clearIdentity() => Promise<{ clearIdentity: boolean; }>
```

Clear user identity

**Returns:** <code>Promise&lt;{ clearIdentity: boolean; }&gt;</code>

**Since:** 7.0.0

--------------------


### getIdentity()

```typescript
getIdentity() => Promise<{ identity: { userId: string; name?: string; email?: string; phone?: string; value?: number; }; }>
```

Get the current user identity

**Returns:** <code>Promise&lt;{ identity: { userId: string; name?: string; email?: string; phone?: string; value?: number; }; }&gt;</code>

**Since:** 8.1.0

--------------------


### isUserIdentified()

```typescript
isUserIdentified() => Promise<{ isUserIdentified: boolean; }>
```

User identified status.

**Returns:** <code>Promise&lt;{ isUserIdentified: boolean; }&gt;</code>

**Since:** 8.1.0

--------------------


### log(...)

```typescript
log(options: { message: string; logLevel?: "ERROR" | "WARNING" | "INFO"; }) => Promise<{ logged: boolean; }>
```

Submit a custom log message with the given level

| Param         | Type                                                                         |
| ------------- | ---------------------------------------------------------------------------- |
| **`options`** | <code>{ message: string; logLevel?: 'ERROR' \| 'WARNING' \| 'INFO'; }</code> |

**Returns:** <code>Promise&lt;{ logged: boolean; }&gt;</code>

**Since:** 7.0.0

--------------------


### showSurvey(...)

```typescript
showSurvey(options: { surveyId: string; format?: "survey" | "survey_full"; }) => Promise<{ opened: boolean; }>
```

Manually show a survey.

| Param         | Type                                                                   |
| ------------- | ---------------------------------------------------------------------- |
| **`options`** | <code>{ surveyId: string; format?: 'survey' \| 'survey_full'; }</code> |

**Returns:** <code>Promise&lt;{ opened: boolean; }&gt;</code>

**Since:** 8.5.1

--------------------


### attachCustomData(...)

```typescript
attachCustomData(options: { data: any; }) => Promise<{ attachedCustomData: boolean; }>
```

Add custom data

| Param         | Type                        |
| ------------- | --------------------------- |
| **`options`** | <code>{ data: any; }</code> |

**Returns:** <code>Promise&lt;{ attachedCustomData: boolean; }&gt;</code>

**Since:** 7.0.0

--------------------


### setTags(...)

```typescript
setTags(options: { tags: string[]; }) => Promise<{ tagsSet: boolean; }>
```

Set tags

| Param         | Type                             |
| ------------- | -------------------------------- |
| **`options`** | <code>{ tags: string[]; }</code> |

**Returns:** <code>Promise&lt;{ tagsSet: boolean; }&gt;</code>

**Since:** 8.6.0

--------------------


### setNetworkLogsBlacklist(...)

```typescript
setNetworkLogsBlacklist(options: { blacklist: string[]; }) => Promise<{ blacklistSet: boolean; }>
```

Set network logs blacklist

| Param         | Type                                  |
| ------------- | ------------------------------------- |
| **`options`** | <code>{ blacklist: string[]; }</code> |

**Returns:** <code>Promise&lt;{ blacklistSet: boolean; }&gt;</code>

**Since:** 13.2.1

--------------------


### setNetworkLogPropsToIgnore(...)

```typescript
setNetworkLogPropsToIgnore(options: { propsToIgnore: string[]; }) => Promise<{ propsToIgnoreSet: boolean; }>
```

Set network logs props to ignore

| Param         | Type                                      |
| ------------- | ----------------------------------------- |
| **`options`** | <code>{ propsToIgnore: string[]; }</code> |

**Returns:** <code>Promise&lt;{ propsToIgnoreSet: boolean; }&gt;</code>

**Since:** 13.2.1

--------------------


### setAiTools(...)

```typescript
setAiTools(options: { tools: { name: string; description: string; response: string; executionType: "auto" | "button"; parameters: { name: string; description: string; type: "string" | "number" | "boolean"; required: boolean; enums?: string[]; }[]; }[]; }) => Promise<{ aiToolsSet: boolean; }>
```

Sets the AI tools to use

| Param         | Type                                                                                                                                                                                                                                                       |
| ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`options`** | <code>{ tools: { name: string; description: string; response: string; executionType: 'auto' \| 'button'; parameters: { name: string; description: string; type: 'string' \| 'number' \| 'boolean'; required: boolean; enums?: string[]; }[]; }[]; }</code> |

**Returns:** <code>Promise&lt;{ aiToolsSet: boolean; }&gt;</code>

**Since:** 13.5.0

--------------------


### setTicketAttribute(...)

```typescript
setTicketAttribute(options: { key: string; value: string; }) => Promise<{ setTicketAttribute: boolean; }>
```

Sets the value of a ticket attribute

| Param         | Type                                         |
| ------------- | -------------------------------------------- |
| **`options`** | <code>{ key: string; value: string; }</code> |

**Returns:** <code>Promise&lt;{ setTicketAttribute: boolean; }&gt;</code>

**Since:** 13.5.0

--------------------


### unsetTicketAttribute(...)

```typescript
unsetTicketAttribute(options: { key: string; }) => Promise<{ unsetTicketAttribute: boolean; }>
```

Unset a ticket attribute

| Param         | Type                          |
| ------------- | ----------------------------- |
| **`options`** | <code>{ key: string; }</code> |

**Returns:** <code>Promise&lt;{ unsetTicketAttribute: boolean; }&gt;</code>

**Since:** 14.1.0

--------------------


### clearTicketAttributes()

```typescript
clearTicketAttributes() => Promise<{ clearTicketAttributes: boolean; }>
```

Clear all ticket attributes

**Returns:** <code>Promise&lt;{ clearTicketAttributes: boolean; }&gt;</code>

**Since:** 14.1.0

--------------------


### setCustomData(...)

```typescript
setCustomData(options: { key: string; value: string; }) => Promise<{ setCustomData: boolean; }>
```

Set custom data

| Param         | Type                                         |
| ------------- | -------------------------------------------- |
| **`options`** | <code>{ key: string; value: string; }</code> |

**Returns:** <code>Promise&lt;{ setCustomData: boolean; }&gt;</code>

**Since:** 7.0.0

--------------------


### removeCustomData(...)

```typescript
removeCustomData(options: { key: string; }) => Promise<{ removedCustomData: boolean; }>
```

Remove custom data by key

| Param         | Type                          |
| ------------- | ----------------------------- |
| **`options`** | <code>{ key: string; }</code> |

**Returns:** <code>Promise&lt;{ removedCustomData: boolean; }&gt;</code>

**Since:** 7.0.0

--------------------


### clearCustomData()

```typescript
clearCustomData() => Promise<{ clearedCustomData: boolean; }>
```

Clear custom data

**Returns:** <code>Promise&lt;{ clearedCustomData: boolean; }&gt;</code>

**Since:** 7.0.0

--------------------


### trackEvent(...)

```typescript
trackEvent(options: { name: string; data?: any; }) => Promise<{ loggedEvent: boolean; }>
```

Log event to Gleap

| Param         | Type                                       |
| ------------- | ------------------------------------------ |
| **`options`** | <code>{ name: string; data?: any; }</code> |

**Returns:** <code>Promise&lt;{ loggedEvent: boolean; }&gt;</code>

**Since:** 8.0.0

--------------------


### trackPage(...)

```typescript
trackPage(options: { pageName: string; }) => Promise<{ trackedPage: boolean; }>
```

Track a page view

| Param         | Type                               |
| ------------- | ---------------------------------- |
| **`options`** | <code>{ pageName: string; }</code> |

**Returns:** <code>Promise&lt;{ trackedPage: boolean; }&gt;</code>

**Since:** 8.4.1

--------------------


### setEventCallback(...)

```typescript
setEventCallback(callback: GleapEventCallback) => Promise<CallbackID>
```

| Param          | Type                                                              |
| -------------- | ----------------------------------------------------------------- |
| **`callback`** | <code><a href="#gleapeventcallback">GleapEventCallback</a></code> |

**Returns:** <code>Promise&lt;string&gt;</code>

**Since:** 7.0.0

--------------------


### sendSilentCrashReport(...)

```typescript
sendSilentCrashReport(options: { description: string; severity?: "LOW" | "MEDIUM" | "HIGH"; dataExclusion?: { customData: Boolean; metaData: Boolean; attachments: Boolean; consoleLog: Boolean; networkLogs: Boolean; customEventLog: Boolean; screenshot: Boolean; replays: Boolean; }; }) => Promise<{ sentSilentBugReport: boolean; }>
```

Log event to Gleap

| Param         | Type                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`options`** | <code>{ description: string; severity?: 'LOW' \| 'MEDIUM' \| 'HIGH'; dataExclusion?: { customData: <a href="#boolean">Boolean</a>; metaData: <a href="#boolean">Boolean</a>; attachments: <a href="#boolean">Boolean</a>; consoleLog: <a href="#boolean">Boolean</a>; networkLogs: <a href="#boolean">Boolean</a>; customEventLog: <a href="#boolean">Boolean</a>; screenshot: <a href="#boolean">Boolean</a>; replays: <a href="#boolean">Boolean</a>; }; }</code> |

**Returns:** <code>Promise&lt;{ sentSilentBugReport: boolean; }&gt;</code>

**Since:** 7.0.0

--------------------


### preFillForm(...)

```typescript
preFillForm(options: { data: any; }) => Promise<{ preFilledForm: boolean; }>
```

Prefills the widget's form data

| Param         | Type                        |
| ------------- | --------------------------- |
| **`options`** | <code>{ data: any; }</code> |

**Returns:** <code>Promise&lt;{ preFilledForm: boolean; }&gt;</code>

**Since:** 7.0.0

--------------------


### addAttachment(...)

```typescript
addAttachment(options: { base64data: string; name: string; }) => Promise<{ attachmentAdded: boolean; }>
```

Add attachment as bas64 string

| Param         | Type                                               |
| ------------- | -------------------------------------------------- |
| **`options`** | <code>{ base64data: string; name: string; }</code> |

**Returns:** <code>Promise&lt;{ attachmentAdded: boolean; }&gt;</code>

**Since:** 7.0.0

--------------------


### removeAllAttachments()

```typescript
removeAllAttachments() => Promise<{ allAttachmentsRemoved: boolean; }>
```

All attachments removed

**Returns:** <code>Promise&lt;{ allAttachmentsRemoved: boolean; }&gt;</code>

**Since:** 7.0.0

--------------------


### open()

```typescript
open() => Promise<{ openedWidget: boolean; }>
```

Open widget

**Returns:** <code>Promise&lt;{ openedWidget: boolean; }&gt;</code>

**Since:** 7.0.0

--------------------


### openNews(...)

```typescript
openNews(options: { showBackButton?: boolean; }) => Promise<{ openedNews: boolean; }>
```

Open news

| Param         | Type                                       |
| ------------- | ------------------------------------------ |
| **`options`** | <code>{ showBackButton?: boolean; }</code> |

**Returns:** <code>Promise&lt;{ openedNews: boolean; }&gt;</code>

**Since:** 8.4.0

--------------------


### openNewsArticle(...)

```typescript
openNewsArticle(options: { articleId: string; showBackButton?: boolean; }) => Promise<{ opened: boolean; }>
```

Open news article

| Param         | Type                                                          |
| ------------- | ------------------------------------------------------------- |
| **`options`** | <code>{ articleId: string; showBackButton?: boolean; }</code> |

**Returns:** <code>Promise&lt;{ opened: boolean; }&gt;</code>

**Since:** 8.4.0

--------------------


### openHelpCenter(...)

```typescript
openHelpCenter(options: { showBackButton?: boolean; }) => Promise<{ opened: boolean; }>
```

Open help center

| Param         | Type                                       |
| ------------- | ------------------------------------------ |
| **`options`** | <code>{ showBackButton?: boolean; }</code> |

**Returns:** <code>Promise&lt;{ opened: boolean; }&gt;</code>

**Since:** 8.4.0

--------------------


### openHelpCenterArticle(...)

```typescript
openHelpCenterArticle(options: { articleId: string; showBackButton?: boolean; }) => Promise<{ opened: boolean; }>
```

Open help center article

| Param         | Type                                                          |
| ------------- | ------------------------------------------------------------- |
| **`options`** | <code>{ articleId: string; showBackButton?: boolean; }</code> |

**Returns:** <code>Promise&lt;{ opened: boolean; }&gt;</code>

**Since:** 8.4.0

--------------------


### openHelpCenterCollection(...)

```typescript
openHelpCenterCollection(options: { collectionId: string; showBackButton?: boolean; }) => Promise<{ opened: boolean; }>
```

Open help center collection

| Param         | Type                                                             |
| ------------- | ---------------------------------------------------------------- |
| **`options`** | <code>{ collectionId: string; showBackButton?: boolean; }</code> |

**Returns:** <code>Promise&lt;{ opened: boolean; }&gt;</code>

**Since:** 8.4.0

--------------------


### searchHelpCenter(...)

```typescript
searchHelpCenter(options: { term: string; showBackButton?: boolean; }) => Promise<{ opened: boolean; }>
```

Search help center

| Param         | Type                                                     |
| ------------- | -------------------------------------------------------- |
| **`options`** | <code>{ term: string; showBackButton?: boolean; }</code> |

**Returns:** <code>Promise&lt;{ opened: boolean; }&gt;</code>

**Since:** 8.4.0

--------------------


### openFeatureRequests(...)

```typescript
openFeatureRequests(options: { showBackButton?: boolean; }) => Promise<{ openedFeatureRequests: boolean; }>
```

Open feature requests

| Param         | Type                                       |
| ------------- | ------------------------------------------ |
| **`options`** | <code>{ showBackButton?: boolean; }</code> |

**Returns:** <code>Promise&lt;{ openedFeatureRequests: boolean; }&gt;</code>

**Since:** 8.4.0

--------------------


### close()

```typescript
close() => Promise<{ closedWidget: boolean; }>
```

Close widget

**Returns:** <code>Promise&lt;{ closedWidget: boolean; }&gt;</code>

**Since:** 7.0.0

--------------------


### isOpened()

```typescript
isOpened() => Promise<{ isOpened: boolean; }>
```

Check widget status code

**Returns:** <code>Promise&lt;{ isOpened: boolean; }&gt;</code>

**Since:** 7.0.0

--------------------


### startFeedbackFlow(...)

```typescript
startFeedbackFlow(options: { feedbackFlow?: string; showBackButton?: boolean; }) => Promise<{ startedFeedbackFlow: boolean; }>
```

Start feedback flow

| Param         | Type                                                              |
| ------------- | ----------------------------------------------------------------- |
| **`options`** | <code>{ feedbackFlow?: string; showBackButton?: boolean; }</code> |

**Returns:** <code>Promise&lt;{ startedFeedbackFlow: boolean; }&gt;</code>

**Since:** 7.0.0

--------------------


### startClassicForm(...)

```typescript
startClassicForm(options: { formId?: string; showBackButton?: boolean; }) => Promise<{ classicFormStarted: boolean; }>
```

Start a classic form

| Param         | Type                                                        |
| ------------- | ----------------------------------------------------------- |
| **`options`** | <code>{ formId?: string; showBackButton?: boolean; }</code> |

**Returns:** <code>Promise&lt;{ classicFormStarted: boolean; }&gt;</code>

**Since:** 13.1.0

--------------------


### startConversation(...)

```typescript
startConversation(options: { showBackButton?: boolean; }) => Promise<{ conversationStarted: boolean; }>
```

Start a new conversation

| Param         | Type                                       |
| ------------- | ------------------------------------------ |
| **`options`** | <code>{ showBackButton?: boolean; }</code> |

**Returns:** <code>Promise&lt;{ conversationStarted: boolean; }&gt;</code>

**Since:** 13.1.0

--------------------


### openConversation(...)

```typescript
openConversation(options: { showBackButton?: boolean; }) => Promise<{ conversationsOpened: boolean; }>
```

Opens the conversations tab.

| Param         | Type                                       |
| ------------- | ------------------------------------------ |
| **`options`** | <code>{ showBackButton?: boolean; }</code> |

**Returns:** <code>Promise&lt;{ conversationsOpened: boolean; }&gt;</code>

**Since:** 13.9.0

--------------------


### startBot(...)

```typescript
startBot(options: { botId?: string; showBackButton?: boolean; }) => Promise<{ startedBot: boolean; }>
```

Start bot

| Param         | Type                                                       |
| ------------- | ---------------------------------------------------------- |
| **`options`** | <code>{ botId?: string; showBackButton?: boolean; }</code> |

**Returns:** <code>Promise&lt;{ startedBot: boolean; }&gt;</code>

**Since:** 10.0.3

--------------------


### showFeedbackButton(...)

```typescript
showFeedbackButton(options: { show?: boolean; }) => Promise<{ feedbackButtonShown: boolean; }>
```

Show or hide the feedback button.

| Param         | Type                             |
| ------------- | -------------------------------- |
| **`options`** | <code>{ show?: boolean; }</code> |

**Returns:** <code>Promise&lt;{ feedbackButtonShown: boolean; }&gt;</code>

**Since:** 8.0.0

--------------------


### setDisableInAppNotifications(...)

```typescript
setDisableInAppNotifications(options: { disableInAppNotifications?: boolean; }) => Promise<{ inAppNotificationsDisabled: boolean; }>
```

Disable in app notifications.

| Param         | Type                                                  |
| ------------- | ----------------------------------------------------- |
| **`options`** | <code>{ disableInAppNotifications?: boolean; }</code> |

**Returns:** <code>Promise&lt;{ inAppNotificationsDisabled: boolean; }&gt;</code>

**Since:** 8.6.1

--------------------


### setLanguage(...)

```typescript
setLanguage(options: { languageCode: string; }) => Promise<{ setLanguage: string; }>
```

Set Language

| Param         | Type                                   |
| ------------- | -------------------------------------- |
| **`options`** | <code>{ languageCode: string; }</code> |

**Returns:** <code>Promise&lt;{ setLanguage: string; }&gt;</code>

**Since:** 7.0.0

--------------------


### disableConsoleLogOverwrite()

```typescript
disableConsoleLogOverwrite() => Promise<{ consoleLogDisabled: boolean; }>
```

Disable console log overwrite

**Returns:** <code>Promise&lt;{ consoleLogDisabled: boolean; }&gt;</code>

**Since:** 7.0.0

--------------------


### enableDebugConsoleLog()

```typescript
enableDebugConsoleLog() => Promise<{ debugConsoleLogEnabled: boolean; }>
```

Enable debug console log

**Returns:** <code>Promise&lt;{ debugConsoleLogEnabled: boolean; }&gt;</code>

**Since:** 7.0.0

--------------------


### Interfaces


#### Object

Provides functionality common to all JavaScript objects.

| Prop              | Type                                          | Description                                                                                                                                |
| ----------------- | --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| **`constructor`** | <code><a href="#function">Function</a></code> | The initial value of <a href="#object">Object</a>.prototype.constructor is the standard built-in <a href="#object">Object</a> constructor. |

| Method                   | Signature                                                 | Description                                                              |
| ------------------------ | --------------------------------------------------------- | ------------------------------------------------------------------------ |
| **toString**             | () =&gt; string                                           | Returns a string representation of an object.                            |
| **toLocaleString**       | () =&gt; string                                           | Returns a date converted to a string using the current locale.           |
| **valueOf**              | () =&gt; <a href="#object">Object</a>                     | Returns the primitive value of the specified object.                     |
| **hasOwnProperty**       | (v: <a href="#propertykey">PropertyKey</a>) =&gt; boolean | Determines whether an object has a property with the specified name.     |
| **isPrototypeOf**        | (v: <a href="#object">Object</a>) =&gt; boolean           | Determines whether an object exists in another object's prototype chain. |
| **propertyIsEnumerable** | (v: <a href="#propertykey">PropertyKey</a>) =&gt; boolean | Determines whether a specified property is enumerable.                   |


#### Function

Creates a new function.

| Prop            | Type                                          |
| --------------- | --------------------------------------------- |
| **`prototype`** | <code>any</code>                              |
| **`length`**    | <code>number</code>                           |
| **`arguments`** | <code>any</code>                              |
| **`caller`**    | <code><a href="#function">Function</a></code> |

| Method       | Signature                                                                            | Description                                                                                                                                                                                                              |
| ------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **apply**    | (this: <a href="#function">Function</a>, thisArg: any, argArray?: any) =&gt; any     | Calls the function, substituting the specified object for the this value of the function, and the specified array for the arguments of the function.                                                                     |
| **call**     | (this: <a href="#function">Function</a>, thisArg: any, ...argArray: any[]) =&gt; any | Calls a method of an object, substituting another object for the current object.                                                                                                                                         |
| **bind**     | (this: <a href="#function">Function</a>, thisArg: any, ...argArray: any[]) =&gt; any | For a given function, creates a bound function that has the same body as the original function. The this object of the bound function is associated with the specified object, and has the specified initial parameters. |
| **toString** | () =&gt; string                                                                      | Returns a string representation of a function.                                                                                                                                                                           |


#### GleapEventMessage

| Prop       | Type                |
| ---------- | ------------------- |
| **`name`** | <code>string</code> |
| **`data`** | <code>any</code>    |


#### Boolean

| Method      | Signature        | Description                                          |
| ----------- | ---------------- | ---------------------------------------------------- |
| **valueOf** | () =&gt; boolean | Returns the primitive value of the specified object. |


### Type Aliases


#### PropertyKey

<code>string | number | symbol</code>


#### GleapEventCallback

<code>(message: <a href="#gleapeventmessage">GleapEventMessage</a> | null, err?: any): void</code>


#### CallbackID

<code>string</code>

</docgen-api>
