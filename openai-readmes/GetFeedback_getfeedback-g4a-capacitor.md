[![license](https://img.shields.io/badge/license-MIT-brightgreen.svg)](https://github.com/GetFeedback/getfeedback-g4a-capacitor/blob/main/LICENSE)

# GetFeedback for Apps - Capacitor

GetFeedback for Apps allows you to collect feedback from your users with great ease and flexibility.
This Capacitor bridge to the Native GetFeedback / Usabilla SDK allows you to load passive feedback forms or campaigns and submit results from an Ionic Capcitor app. This release uses the GetFeedback / Usabilla SDK for ios v6.10+ and android v7.+ .

- [GetFeedback for Apps - Capacitor](#getfeedback-for-apps---capacitor)
  - [Installation](#installation)
  - [Native SDK](#native-sdk)
  - [API](#api)
  - [Support](#support)

## Installation

**Note : We have introducing a new feature `Standard Events` from v1.1.0 onwards [Click here](https://support.usabilla.com/hc/en-us/articles/4747575452562) to read more about Standard Events.**

The installation of this SDK consists of two parts, one part for your projects a whole and the second part for iOS(#ios) and Android(#android) specifically. To install the GetFeedback SDK into your Ionic Application:
Installation

In a terminal window, navigate to the root directory of your project and run :

```bash
npm i -S https://github.com/GetFeedback/getfeedback-g4a-capacitor.git
```

or

```bash
npm install getfeedback-capacitor
npx cap sync
```

## Native SDK

To read in detail about all the features for the SDK

- [iOS SDK](https://github.com/usabilla/usabilla-u4a-ios-swift-sdk/blob/master/Readme.MD)
- [Android SDK](https://github.com/usabilla/usabilla-u4a-android-sdk/blob/master/README.md)

## API

<docgen-index>

- [`initialize(...)`](#initialize)
- [`standardEvents(...)`](#standardevents)
- [`setDebugEnabled(...)`](#setdebugenabled)
- [`setCustomVariables(...)`](#setcustomvariables)
- [`loadFeedbackForm(...)`](#loadfeedbackform)
- [`loadFeedbackFormWithCurrentViewScreenshot(...)`](#loadfeedbackformwithcurrentviewscreenshot)
- [`sendEvent(...)`](#sendevent)
- [`resetCampaignData()`](#resetcampaigndata)
- [`dismiss()`](#dismiss)
- [`loadLocalizedStringFile(...)`](#loadlocalizedstringfile)
- [`preloadFeedbackForms(...)`](#preloadfeedbackforms)
- [`removeCachedForms()`](#removecachedforms)
- [`setDataMasking(...)`](#setdatamasking)
- [`getDefaultDataMasks()`](#getdefaultdatamasks)
- [Type Aliases](#type-aliases)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### initialize(...)

```typescript
initialize(options: { appID: string; }) => void
```

| Param         | Type                            |
| ------------- | ------------------------------- |
| **`options`** | <code>{ appID: string; }</code> |

---

### standardEvents(...)

```typescript
standardEvents(callback: standardEventsCallback) => Promise<CallbackID>
```

| Param          | Type                                                                      |
| -------------- | ------------------------------------------------------------------------- |
| **`callback`** | <code><a href="#standardeventscallback">standardEventsCallback</a></code> |

**Returns:** <code>Promise&lt;string&gt;</code>

---

### setDebugEnabled(...)

```typescript
setDebugEnabled(options: { debugEnabled: boolean; }) => void
```

| Param         | Type                                    |
| ------------- | --------------------------------------- |
| **`options`** | <code>{ debugEnabled: boolean; }</code> |

---

### setCustomVariables(...)

```typescript
setCustomVariables(options: { customVariables: any; }) => void
```

| Param         | Type                                   |
| ------------- | -------------------------------------- |
| **`options`** | <code>{ customVariables: any; }</code> |

---

### loadFeedbackForm(...)

```typescript
loadFeedbackForm(options: { formID: string; }) => Promise<any>
```

| Param         | Type                             |
| ------------- | -------------------------------- |
| **`options`** | <code>{ formID: string; }</code> |

**Returns:** <code>Promise&lt;any&gt;</code>

---

### loadFeedbackFormWithCurrentViewScreenshot(...)

```typescript
loadFeedbackFormWithCurrentViewScreenshot(options: { formID: string; }) => Promise<any>
```

| Param         | Type                             |
| ------------- | -------------------------------- |
| **`options`** | <code>{ formID: string; }</code> |

**Returns:** <code>Promise&lt;any&gt;</code>

---

### sendEvent(...)

```typescript
sendEvent(options: { eventName: string; }) => Promise<any>
```

| Param         | Type                                |
| ------------- | ----------------------------------- |
| **`options`** | <code>{ eventName: string; }</code> |

**Returns:** <code>Promise&lt;any&gt;</code>

---

### resetCampaignData()

```typescript
resetCampaignData() => void
```

---

### dismiss()

```typescript
dismiss() => void
```

---

### loadLocalizedStringFile(...)

```typescript
loadLocalizedStringFile(options: { localizedStringFile: string; }) => void
```

| Param         | Type                                          |
| ------------- | --------------------------------------------- |
| **`options`** | <code>{ localizedStringFile: string; }</code> |

---

### preloadFeedbackForms(...)

```typescript
preloadFeedbackForms(options: { formIDs: string[]; }) => void
```

| Param         | Type                                |
| ------------- | ----------------------------------- |
| **`options`** | <code>{ formIDs: string[]; }</code> |

---

### removeCachedForms()

```typescript
removeCachedForms() => void
```

---

### setDataMasking(...)

```typescript
setDataMasking(options?: { masks?: string[] | undefined; character?: string | undefined; } | undefined) => void
```

| Param         | Type                                                   |
| ------------- | ------------------------------------------------------ |
| **`options`** | <code>{ masks?: string[]; character?: string; }</code> |

---

### getDefaultDataMasks()

```typescript
getDefaultDataMasks() => Promise<any>
```

**Returns:** <code>Promise&lt;any&gt;</code>

---

### Type Aliases

#### standardEventsCallback

<code>(response: any, error?: any): void</code>

#### CallbackID

<code>string</code>

</docgen-api>

## Support

If you need help with implementation, want to report an issue or have a question, please contact our support team via support@usabilla.com. When contacting our support team, be sure to include your Usabilla account name and the name of your Customer Success Manager.
