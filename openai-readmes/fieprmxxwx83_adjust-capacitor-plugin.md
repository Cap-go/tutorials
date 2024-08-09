# adjust-capacitor-plugin

Adjust SDK plugin for Capacitor

## Install

```bash
npm install adjust-capacitor-plugin
npx cap sync
```

## API

<docgen-index>

* [`initSDK(...)`](#initsdk)
* [`trackEvent(...)`](#trackevent)
* [`trackEventCallbackId(...)`](#trackeventcallbackid)
* [`trackRevenueEvent(...)`](#trackrevenueevent)
* [`addSessionCallbackParameter(...)`](#addsessioncallbackparameter)
* [`addSessionPartnerParameter(...)`](#addsessionpartnerparameter)
* [`getAdid()`](#getadid)
* [`showTrackingDialog()`](#showtrackingdialog)
* [`getTrackingStatus()`](#gettrackingstatus)
* [`getIDFA()`](#getidfa)
* [Type Aliases](#type-aliases)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### initSDK(...)

```typescript
initSDK(options: AdjustInit) => void
```

| Param         | Type                                              |
| ------------- | ------------------------------------------------- |
| **`options`** | <code><a href="#adjustinit">AdjustInit</a></code> |

--------------------


### trackEvent(...)

```typescript
trackEvent(event: AdjustEvent) => void
```

| Param       | Type                                                |
| ----------- | --------------------------------------------------- |
| **`event`** | <code><a href="#adjustevent">AdjustEvent</a></code> |

--------------------


### trackEventCallbackId(...)

```typescript
trackEventCallbackId(event: AdjustCallbackId) => void
```

| Param       | Type                                                          |
| ----------- | ------------------------------------------------------------- |
| **`event`** | <code><a href="#adjustcallbackid">AdjustCallbackId</a></code> |

--------------------


### trackRevenueEvent(...)

```typescript
trackRevenueEvent(event: AdjustRevenue) => void
```

| Param       | Type                                                    |
| ----------- | ------------------------------------------------------- |
| **`event`** | <code><a href="#adjustrevenue">AdjustRevenue</a></code> |

--------------------


### addSessionCallbackParameter(...)

```typescript
addSessionCallbackParameter(options: AdjustSessionOptions) => void
```

| Param         | Type                                                                  |
| ------------- | --------------------------------------------------------------------- |
| **`options`** | <code><a href="#adjustsessionoptions">AdjustSessionOptions</a></code> |

--------------------


### addSessionPartnerParameter(...)

```typescript
addSessionPartnerParameter(options: AdjustSessionOptions) => void
```

| Param         | Type                                                                  |
| ------------- | --------------------------------------------------------------------- |
| **`options`** | <code><a href="#adjustsessionoptions">AdjustSessionOptions</a></code> |

--------------------


### getAdid()

```typescript
getAdid() => Promise<AdjustAdidResponse>
```

**Returns:** <code>Promise&lt;<a href="#adjustadidresponse">AdjustAdidResponse</a>&gt;</code>

--------------------


### showTrackingDialog()

```typescript
showTrackingDialog() => Promise<AdjustTrackingStatusResponse>
```

**Returns:** <code>Promise&lt;<a href="#adjusttrackingstatusresponse">AdjustTrackingStatusResponse</a>&gt;</code>

--------------------


### getTrackingStatus()

```typescript
getTrackingStatus() => Promise<AdjustTrackingStatusResponse>
```

**Returns:** <code>Promise&lt;<a href="#adjusttrackingstatusresponse">AdjustTrackingStatusResponse</a>&gt;</code>

--------------------


### getIDFA()

```typescript
getIDFA() => Promise<AdjustIdfaResponse>
```

**Returns:** <code>Promise&lt;<a href="#adjustidfaresponse">AdjustIdfaResponse</a>&gt;</code>

--------------------


### Type Aliases


#### AdjustInit

<code>{ appToken: string; environment?: <a href="#adjustenvironment">AdjustEnvironment</a>; logLevel?: <a href="#adjustloglevel">AdjustLogLevel</a>; }</code>


#### AdjustEnvironment

<code>'production' | 'sandbox'</code>


#### AdjustLogLevel

<code>'none' | 'error' | 'warning' | 'info' | 'verbose'</code>


#### AdjustEvent

<code>{ eventToken: string; callbackParams?: <a href="#record">Record</a>&lt;string, string&gt;; }</code>


#### Record

Construct a type with a set of properties K of type T

<code>{ [P in K]: T; }</code>


#### AdjustCallbackId

<code>{ eventToken: string; id: string; }</code>


#### AdjustRevenue

<code>{ eventToken: string; currency: string; amount: number; orderId?: string; }</code>


#### AdjustSessionOptions

<code>{ key: string; value: string; }</code>


#### AdjustAdidResponse

<code>{ id: string; }</code>


#### AdjustTrackingStatusResponse

<code>{ status: <a href="#adjusttrackingauthorizationstatus">AdjustTrackingAuthorizationStatus</a>; }</code>


#### AdjustTrackingAuthorizationStatus

<code>0 | 1 | 2 | 3 | -1</code>


#### AdjustIdfaResponse

<code>{ id: string; }</code>

</docgen-api>
