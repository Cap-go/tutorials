# capacitor-phonepe

phonepe payment gateway

## Install

```bash
npm install capacitor-phonepe
npx cap sync
```

## API

<docgen-index>

* [`init(...)`](#init)
* [`startPGTransaction(...)`](#startpgtransaction)
* [`startContainerTransaction(...)`](#startcontainertransaction)
* [`isPhonePeInstalled()`](#isphonepeinstalled)
* [`isPaytmInstalled()`](#ispaytminstalled)
* [`isGpayInstalled()`](#isgpayinstalled)
* [`getPackageSignatureForAndroid()`](#getpackagesignatureforandroid)
* [`getUpiAppsForAndroid()`](#getupiappsforandroid)
* [Type Aliases](#type-aliases)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### init(...)

```typescript
init(options: { environment: string; merchantId: string; appId: string; enableLogging: boolean | false; }) => Promise<Record<string, boolean>>
```

This method is used to initiate PhonePe Payment sdk.
Provide all the information as requested by the method signature.
Params:
  - environment: This signified the environment required for the payment sdk
    possible values: UAT, UAT_SIM, PRODUCTION
    if any unknown value is provided, PRODUCTION will be considered as default.
  - merchantId: The merchant id provided by PhonePe  at the time of onboarding.
  - appId: The appId provided by PhonePe at the time of onboarding.
  - enableLogging: If you want to enabled / visualize sdk log
      - enabled = YES
      - disable = NO

  - Return: Boolean (TRUE -&gt; SUCCESS).
      - SUCCESS: TRUE
      - FAILURE: FALSE
          - in iOS = False (if AppID missing:-Please provide PhonePe AppId)
          - in Android = Error in case of invalid arguments ex: "Invalid environment or merchantId!"

| Param         | Type                                                                                             |
| ------------- | ------------------------------------------------------------------------------------------------ |
| **`options`** | <code>{ environment: string; merchantId: string; appId: string; enableLogging: boolean; }</code> |

**Returns:** <code>Promise&lt;<a href="#record">Record</a>&lt;string, boolean&gt;&gt;</code>

--------------------


### startPGTransaction(...)

```typescript
startPGTransaction(options: { body: string; checksum: string; apiEndPoint: string; headers: any; packageName: string | null; callBackURL: string | null; }) => Promise<Record<string, string>>
```

This method is used to initiate PhonePe B2B PG Flow.
Provide all the information as requested by the method signature.
Params:
   - body : The request body for the transaction as per the developer docs.
     Make sure the request body is base64encoded
   - checkSum: checksum for the particular transaction as per the developer docs.
   - apiEndPoint: The API endpoint for the PG transaction.
   - headers: Headers as per the developer doc, to accomodate Container flow
   - packageName: @Optional(for iOS) in case of android if intent url is expected for specific app.
   - callBackURL: Your custom URL Schemes, as per the developer docs.
Return: Will be returning a dictionary / hashMap
 {
    status: String, // string value to provide the status of the transcation
                    // possible values: SUCCESS, FAILURE, INTERUPTED
    error: String   // if any error occurs
 }

| Param         | Type                                                                                                                                          |
| ------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| **`options`** | <code>{ body: string; checksum: string; apiEndPoint: string; headers: any; packageName: string \| null; callBackURL: string \| null; }</code> |

**Returns:** <code>Promise&lt;<a href="#record">Record</a>&lt;string, string&gt;&gt;</code>

--------------------


### startContainerTransaction(...)

```typescript
startContainerTransaction(options: { body: string; checksum: string; apiEndPoint: string; headers: any; callBackURL: string | null; }) => Promise<Record<string, string>>
```

This method is used to initiate PhonePe B2B PG Flow.
Provide all the information as requested by the method signature.
Params:
   - body : The request body for the transaction as per the developer docs.
     Make sure the request body is base64encoded.

   - checkSum: checksum for the particular transaction as per the developer docs.
   - apiEndPoint: The API endpoint for the container transaction.
   - headers: Headers as per the developer doc, to accomodate Container flow
   - callBackURL: Your custom URL Schemes, as per the developer docs.
Return: Will be returning a dictionary / hashMap
 {
    status: String, // string value to provide the status of the transcation
                    // possible values: SUCCESS, FAILURE, INTERUPTED
    error: String   // if any error occurs
 }

| Param         | Type                                                                                                             |
| ------------- | ---------------------------------------------------------------------------------------------------------------- |
| **`options`** | <code>{ body: string; checksum: string; apiEndPoint: string; headers: any; callBackURL: string \| null; }</code> |

**Returns:** <code>Promise&lt;<a href="#record">Record</a>&lt;string, string&gt;&gt;</code>

--------------------


### isPhonePeInstalled()

```typescript
isPhonePeInstalled() => Promise<Record<string, boolean>>
```

This method is called to verify / check if PhonePe app is installed on the user / target device.
Return: Boolean
 YES -&gt; PhonePe app installed/available
 NO -&gt; PhonePe app unavailable
 NOTE :- In iOS, Add all the request Query URL Schema as per the developer doc.

**Returns:** <code>Promise&lt;<a href="#record">Record</a>&lt;string, boolean&gt;&gt;</code>

--------------------


### isPaytmInstalled()

```typescript
isPaytmInstalled() => Promise<Record<string, boolean>>
```

This method is called to verify / check if Paytm app is installed on the user / target device.
Return: Boolean
 YES -&gt; Paytm app installed/available
 NO -&gt; Paytm app unavailable
 NOTE :- In iOS, Add all the request Query URL Schema as per the developer doc.

**Returns:** <code>Promise&lt;<a href="#record">Record</a>&lt;string, boolean&gt;&gt;</code>

--------------------


### isGpayInstalled()

```typescript
isGpayInstalled() => Promise<Record<string, boolean>>
```

This method is called to verify / check if GPay app is installed on the user / target device.
Return: Boolean
 YES -&gt; GPay app installed/available
 NO -&gt; GPay app unavailable
 NOTE :- In iOS, Add all the request Query URL Schema as per the developer doc.

**Returns:** <code>Promise&lt;<a href="#record">Record</a>&lt;string, boolean&gt;&gt;</code>

--------------------


### getPackageSignatureForAndroid()

```typescript
getPackageSignatureForAndroid() => Promise<Record<string, string>>
```

This method is called to get package signature while creation of AppId in @Android only.
Return: String
 Non empty string -&gt; app package signature
 NOTE :- In iOS, it will throw os error at runtime.

**Returns:** <code>Promise&lt;<a href="#record">Record</a>&lt;string, string&gt;&gt;</code>

--------------------


### getUpiAppsForAndroid()

```typescript
getUpiAppsForAndroid() => Promise<Record<string, string>>
```

This method is called to get list of upi apps in @Android only.
Return: String
 JSON String -&gt; List of UPI App with packageName, applicationName & versionCode
 NOTE :- In iOS, it will throw os error at runtime.

**Returns:** <code>Promise&lt;<a href="#record">Record</a>&lt;string, string&gt;&gt;</code>

--------------------


### Type Aliases


#### Record

Construct a type with a set of properties K of type T

<code>{ [P in K]: T; }</code>

</docgen-api>
