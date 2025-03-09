# @bugfender/capacitor

Remote logging, crash reporting and in-app user feedback with [Bugfender](https://bugfender.com) and [Capacitor](https://capacitorjs.com).

This module is a plugin for Capacitor since version 4. You can use `@bugfender/capacitor` in Ionic projects for iOS, Android, web and electron platforms.

## Installation

```bash
npm install @bugfender/capacitor @bugfender/sdk @bugfender/common
npx cap sync
```

## Usage

Import Bugfender like this:

```bash
import { Bugfender } from '@bugfender/capacitor';
```

**Note:** in an Ionic/Capacitor project, always import `@bugfender/capacitor` instead of `@bugfender/sdk`. 
This will enable the native features of the SDK that you wouldn't get otherwise.

## API

Please check the following URL for a complete API reference: [https://js.bugfender.com](https://js.bugfender.com).

<docgen-index>

* [`init(...)`](#init)
* [`forceSendOnce()`](#forcesendonce)
* [`getDeviceURL()`](#getdeviceurl)
* [`getSessionURL()`](#getsessionurl)
* [`getUserFeedback(...)`](#getuserfeedback)
* [`log(...)`](#log)
* [`log(...)`](#log)
* [`warn(...)`](#warn)
* [`warn(...)`](#warn)
* [`error(...)`](#error)
* [`error(...)`](#error)
* [`trace(...)`](#trace)
* [`trace(...)`](#trace)
* [`info(...)`](#info)
* [`info(...)`](#info)
* [`fatal(...)`](#fatal)
* [`fatal(...)`](#fatal)
* [`removeDeviceKey(...)`](#removedevicekey)
* [`sendLog(...)`](#sendlog)
* [`sendIssue(...)`](#sendissue)
* [`sendCrash(...)`](#sendcrash)
* [`sendUserFeedback(...)`](#senduserfeedback)
* [`setDeviceKey(...)`](#setdevicekey)
* [`setForceEnabled(...)`](#setforceenabled)
* [Interfaces](#interfaces)
* [Type Aliases](#type-aliases)
* [Enums](#enums)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### init(...)

```typescript
init(options: SDKOptions) => Promise<void>
```

| Param         | Type                                              |
| ------------- | ------------------------------------------------- |
| **`options`** | <code><a href="#sdkoptions">SDKOptions</a></code> |

--------------------


### forceSendOnce()

```typescript
forceSendOnce() => void
```

--------------------


### getDeviceURL()

```typescript
getDeviceURL() => Promise<string>
```

**Returns:** <code>Promise&lt;string&gt;</code>

--------------------


### getSessionURL()

```typescript
getSessionURL() => Promise<string>
```

**Returns:** <code>Promise&lt;string&gt;</code>

--------------------


### getUserFeedback(...)

```typescript
getUserFeedback(options?: UserFeedbackOptions | undefined) => Promise<UserFeedbackResult>
```

| Param         | Type                                                                |
| ------------- | ------------------------------------------------------------------- |
| **`options`** | <code><a href="#userfeedbackoptions">UserFeedbackOptions</a></code> |

**Returns:** <code>Promise&lt;<a href="#userfeedbackresult">UserFeedbackResult</a>&gt;</code>

--------------------


### log(...)

```typescript
log(obj: unknown, ...objs: unknown[]) => void
```

| Param      | Type                   |
| ---------- | ---------------------- |
| **`obj`**  | <code>unknown</code>   |
| **`objs`** | <code>unknown[]</code> |

--------------------


### log(...)

```typescript
log(msg: string, ...subst: unknown[]) => void
```

| Param       | Type                   |
| ----------- | ---------------------- |
| **`msg`**   | <code>string</code>    |
| **`subst`** | <code>unknown[]</code> |

--------------------


### warn(...)

```typescript
warn(obj: unknown, ...objs: unknown[]) => void
```

| Param      | Type                   |
| ---------- | ---------------------- |
| **`obj`**  | <code>unknown</code>   |
| **`objs`** | <code>unknown[]</code> |

--------------------


### warn(...)

```typescript
warn(msg: string, ...subst: unknown[]) => void
```

| Param       | Type                   |
| ----------- | ---------------------- |
| **`msg`**   | <code>string</code>    |
| **`subst`** | <code>unknown[]</code> |

--------------------


### error(...)

```typescript
error(obj: unknown, ...objs: unknown[]) => void
```

| Param      | Type                   |
| ---------- | ---------------------- |
| **`obj`**  | <code>unknown</code>   |
| **`objs`** | <code>unknown[]</code> |

--------------------


### error(...)

```typescript
error(msg: string, ...subst: unknown[]) => void
```

| Param       | Type                   |
| ----------- | ---------------------- |
| **`msg`**   | <code>string</code>    |
| **`subst`** | <code>unknown[]</code> |

--------------------


### trace(...)

```typescript
trace(obj: unknown, ...objs: unknown[]) => void
```

| Param      | Type                   |
| ---------- | ---------------------- |
| **`obj`**  | <code>unknown</code>   |
| **`objs`** | <code>unknown[]</code> |

--------------------


### trace(...)

```typescript
trace(msg: string, ...subst: unknown[]) => void
```

| Param       | Type                   |
| ----------- | ---------------------- |
| **`msg`**   | <code>string</code>    |
| **`subst`** | <code>unknown[]</code> |

--------------------


### info(...)

```typescript
info(obj: unknown, ...objs: unknown[]) => void
```

| Param      | Type                   |
| ---------- | ---------------------- |
| **`obj`**  | <code>unknown</code>   |
| **`objs`** | <code>unknown[]</code> |

--------------------


### info(...)

```typescript
info(msg: string, ...subst: unknown[]) => void
```

| Param       | Type                   |
| ----------- | ---------------------- |
| **`msg`**   | <code>string</code>    |
| **`subst`** | <code>unknown[]</code> |

--------------------


### fatal(...)

```typescript
fatal(obj: unknown, ...objs: unknown[]) => void
```

| Param      | Type                   |
| ---------- | ---------------------- |
| **`obj`**  | <code>unknown</code>   |
| **`objs`** | <code>unknown[]</code> |

--------------------


### fatal(...)

```typescript
fatal(msg: string, ...subst: unknown[]) => void
```

| Param       | Type                   |
| ----------- | ---------------------- |
| **`msg`**   | <code>string</code>    |
| **`subst`** | <code>unknown[]</code> |

--------------------


### removeDeviceKey(...)

```typescript
removeDeviceKey(key: string) => void
```

| Param     | Type                |
| --------- | ------------------- |
| **`key`** | <code>string</code> |

--------------------


### sendLog(...)

```typescript
sendLog(log: LogEntry) => void
```

| Param     | Type                                          |
| --------- | --------------------------------------------- |
| **`log`** | <code><a href="#logentry">LogEntry</a></code> |

--------------------


### sendIssue(...)

```typescript
sendIssue(title: string, text: string) => Promise<string>
```

| Param       | Type                |
| ----------- | ------------------- |
| **`title`** | <code>string</code> |
| **`text`**  | <code>string</code> |

**Returns:** <code>Promise&lt;string&gt;</code>

--------------------


### sendCrash(...)

```typescript
sendCrash(title: string, text: string) => Promise<string>
```

| Param       | Type                |
| ----------- | ------------------- |
| **`title`** | <code>string</code> |
| **`text`**  | <code>string</code> |

**Returns:** <code>Promise&lt;string&gt;</code>

--------------------


### sendUserFeedback(...)

```typescript
sendUserFeedback(title: string, text: string) => Promise<string>
```

| Param       | Type                |
| ----------- | ------------------- |
| **`title`** | <code>string</code> |
| **`text`**  | <code>string</code> |

**Returns:** <code>Promise&lt;string&gt;</code>

--------------------


### setDeviceKey(...)

```typescript
setDeviceKey(key: string, value: DeviceKeyValue) => void
```

| Param       | Type                                                      |
| ----------- | --------------------------------------------------------- |
| **`key`**   | <code>string</code>                                       |
| **`value`** | <code><a href="#devicekeyvalue">DeviceKeyValue</a></code> |

--------------------


### setForceEnabled(...)

```typescript
setForceEnabled(state: boolean) => void
```

| Param       | Type                 |
| ----------- | -------------------- |
| **`state`** | <code>boolean</code> |

--------------------


### Interfaces


#### SDKOptions

| Prop                          | Type                 | Description                                                                                                                          |
| ----------------------------- | -------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| **`appKey`**                  | <code>string</code>  | The app key to log into                                                                                                              |
| **`apiURL`**                  | <code>string</code>  | Base URL to Bugfender API                                                                                                            |
| **`build`**                   | <code>string</code>  | App build identifier                                                                                                                 |
| **`baseURL`**                 | <code>string</code>  | Base URL to Bugfender web dashboard                                                                                                  |
| **`debug`**                   | <code>boolean</code> | Set SDK in debug mode                                                                                                                |
| **`deviceName`**              | <code>string</code>  | Device name, this will be shown on the dashboard devices list. Defaults to browser + OS.                                             |
| **`overrideConsoleMethods`**  | <code>boolean</code> | Override default `window.console` so it also logs to Bugfender. Defaults to `true`.                                                  |
| **`printToConsole`**          | <code>boolean</code> | Print also with `window.console` when Bugfender logging methods are called. Defaults to `true`.                                      |
| **`logBrowserEvents`**        | <code>boolean</code> | Register a handler for most common browser events to report them to Bugfender. Defaults to `true`.                                   |
| **`logUIEvents`**             | <code>boolean</code> | Register a handler for most common UI events to report them to Bugfender. Defaults to `true`.                                        |
| **`registerErrorHandler`**    | <code>boolean</code> | Register error handler for uncaught errors that reports a crash to Bugfender. Defaults to `true`.                                    |
| **`version`**                 | <code>string</code>  | App version identifier                                                                                                               |
| **`maximumLocalStorageSize`** | <code>number</code>  | Set the maximum size to store local log files in bytes. Range accepted is from 1MB to 50MB. Defaults to 5MB. **iOS & Android only**. |
| **`enableLogcatLogging`**     | <code>boolean</code> | Logs all logs written via Logcat. Defaults to `false`. **Android only**.                                                             |


#### UserFeedbackResultSuccess

| Prop              | Type                | Description                     |
| ----------------- | ------------------- | ------------------------------- |
| **`isSent`**      | <code>true</code>   | The user has sent the feedback. |
| **`feedbackURL`** | <code>string</code> | Bugfender URL for the feedback. |


#### UserFeedbackResultCancel

| Prop         | Type               | Description                                       |
| ------------ | ------------------ | ------------------------------------------------- |
| **`isSent`** | <code>false</code> | The user has closed the modal without sending it. |


#### UserFeedbackOptions

Options object for `Bugfender.getUserFeedback` with customised modal strings.

| Prop                      | Type                | Description                                                 |
| ------------------------- | ------------------- | ----------------------------------------------------------- |
| **`title`**               | <code>string</code> | Default: `Feedback`.                                        |
| **`hint`**                | <code>string</code> | Default: `Please insert your feedback here and click send`. |
| **`subjectPlaceholder`**  | <code>string</code> | Default: `Subject…`.                                        |
| **`feedbackPlaceholder`** | <code>string</code> | Default: `Your feedback…`.                                  |
| **`submitLabel`**         | <code>string</code> | Default: `Send`.                                            |
| **`closeLabel`**          | <code>string</code> | Default: `Close`. **iOS only**.                             |


#### LogEntry

Log Entry object interface

| Prop         | Type                                          | Description                                                                                               |
| ------------ | --------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| **`line`**   | <code>number</code>                           | The line number where the log was triggered from                                                          |
| **`level`**  | <code><a href="#loglevel">LogLevel</a></code> | The log's level based on <a href="#loglevel">LogLevel</a> constant                                        |
| **`tag`**    | <code>string</code>                           | The log's tag                                                                                             |
| **`method`** | <code>string</code>                           | The method name where the log was triggered from                                                          |
| **`file`**   | <code>string</code>                           | The file name where the log was triggered from                                                            |
| **`text`**   | <code>string \| unknown[]</code>              | Text can be either: - `string` with the content - `unknown[]` array compatible with `console.*` signature |
| **`url`**    | <code>string</code>                           | The log's origin URL. This attribute is ignored on Android & iOS                                          |


### Type Aliases


#### UserFeedbackResult

<code><a href="#userfeedbackresultsuccess">UserFeedbackResultSuccess</a> | <a href="#userfeedbackresultcancel">UserFeedbackResultCancel</a></code>


#### DeviceKeyValue

<code>string | number | boolean</code>


### Enums


#### LogLevel

| Members       | Value          |
| ------------- | -------------- |
| **`Debug`**   | <code>0</code> |
| **`Warning`** | <code>1</code> |
| **`Error`**   | <code>2</code> |
| **`Trace`**   | <code>3</code> |
| **`Info`**    | <code>4</code> |
| **`Fatal`**   | <code>5</code> |

</docgen-api>
