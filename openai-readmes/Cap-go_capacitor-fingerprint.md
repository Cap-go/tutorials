# @capgo/capacitor-fingerprint

Capacitor client for Fingerprint PRO. 100% accurate device identification for fraud detection.

## Install

```bash
npm install @capgo/capacitor-fingerprint
npx cap sync
```

## API

<docgen-index>

- [`load(...)`](#load)
- [`getVisitorId(...)`](#getvisitorid)
- [`getVisitorData(...)`](#getvisitordata)
- [Interfaces](#interfaces)
- [Type Aliases](#type-aliases)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### load(...)

```typescript
load(options: LoadOptions) => Promise<void>
```

| Param         | Type                                                |
| ------------- | --------------------------------------------------- |
| **`options`** | <code><a href="#loadoptions">LoadOptions</a></code> |

---

### getVisitorId(...)

```typescript
getVisitorId(option?: getVisitor | undefined) => Promise<{ visitorId: VisitorId; }>
```

| Param        | Type                                              |
| ------------ | ------------------------------------------------- |
| **`option`** | <code><a href="#getvisitor">getVisitor</a></code> |

**Returns:** <code>Promise&lt;{ visitorId: string; }&gt;</code>

---

### getVisitorData(...)

```typescript
getVisitorData(options?: getVisitor | undefined) => Promise<{ visitorData: VisitorData; }>
```

| Param         | Type                                              |
| ------------- | ------------------------------------------------- |
| **`options`** | <code><a href="#getvisitor">getVisitor</a></code> |

**Returns:** <code>Promise&lt;{ visitorData: <a href="#visitordata">VisitorData</a>; }&gt;</code>

---

### Interfaces

#### VisitorId

Result of requesting a visitor id

| Prop               | Type                                              | Description                                                                                                               |
| ------------------ | ------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| **`visitorId`**    | <code>string</code>                               | The visitor identifier                                                                                                    |
| **`visitorFound`** | <code>boolean</code>                              | If true, this visitor was found and visited before. If false, this visitor wasn't found and probably didn't visit before. |
| **`confidence`**   | <code><a href="#confidence">Confidence</a></code> | A confidence score that tells how much the agent is sure about the visitor identifier                                     |
| **`zeroTrust`**    | <code><a href="#zerotrust">ZeroTrust</a></code>   | An object that tells what fields were hidden (values replaced with empty data)                                            |

#### Confidence

FingerprintJS Pro v3.8.5 - Copyright (c) FingerprintJS, Inc, 2023 (https://fingerprint.com)

This software contains code from open-source projects:
MurmurHash3 by Karan Lyons (https://github.com/karanlyons/murmurHash3.js)

| Prop          | Type                | Description                                                                                                                                                                     |
| ------------- | ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`score`**   | <code>number</code> | A number between 0 and 1 that tells how much the agent is sure about the visitor identifier. The higher the number, the higher the chance of the visitor identifier to be true. |
| **`comment`** | <code>string</code> | Additional details about the score as a human-readable text                                                                                                                     |

#### ZeroTrust

| Prop               | Type                  | Description                                                                           |
| ------------------ | --------------------- | ------------------------------------------------------------------------------------- |
| **`hiddenFields`** | <code>string[]</code> | Fields from the result object that have been hidden (values replaced with empty data) |
| **`comment`**      | <code>string</code>   | Additional details about the reasons as a human-readable text                         |

#### getVisitor

| Prop           | Type                                  |
| -------------- | ------------------------------------- |
| **`tags`**     | <code><a href="#tags">Tags</a></code> |
| **`linkedId`** | <code>string</code>                   |

#### ShortVisitorData

Main identification information about the visitor

| Prop             | Type                                              | Description                                                                           |
| ---------------- | ------------------------------------------------- | ------------------------------------------------------------------------------------- |
| **`visitorId`**  | <code>string</code>                               | The visitor identifier                                                                |
| **`requestId`**  | <code>string</code>                               | The current request identifier. It's different for every request.                     |
| **`confidence`** | <code><a href="#confidence">Confidence</a></code> | A confidence score that tells how much the agent is sure about the visitor identifier |

#### ExtendedVisitorData

All known identification information about the visitor

| Prop               | Type                                              | Description                                                                                                               |
| ------------------ | ------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| **`visitorFound`** | <code>boolean</code>                              | If true, this visitor was found and visited before. If false, this visitor wasn't found and probably didn't visit before. |
| **`ip`**           | <code>string</code>                               | IP address. Only IPv4 are returned.                                                                                       |
| **`ipLocation`**   | <code><a href="#iplocation">IpLocation</a></code> | IP address location. Can be empty for anonymous proxies                                                                   |
| **`os`**           | <code>string</code>                               | OS name.                                                                                                                  |
| **`osVersion`**    | <code>string</code>                               | OS version                                                                                                                |
| **`device`**       | <code>string</code>                               | Device.                                                                                                                   |
| **`firstSeenAt`**  | <code><a href="#seenat">SeenAt</a></code>         | When the visitor was seen for the first time                                                                              |
| **`lastSeenAt`**   | <code><a href="#seenat">SeenAt</a></code>         | When the visitor was seen previous time                                                                                   |

#### IpLocation

IP address location. Can be empty for anonymous proxies.

| Prop                 | Type                                              | Description                                                                                                                                                                                                                                                   |
| -------------------- | ------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`accuracyRadius`** | <code>number</code>                               | IP address location detection radius. Smaller values (&lt;50mi) are business/residential, medium values (50 &lt; x &lt; 500) are cellular towers (usually), larger values (&gt;= 500) are cloud IPs or proxies, VPNs. Can be missing, in case of Tor/proxies. |
| **`latitude`**       | <code>number</code>                               | Latitude Can be missing, in case of Tor/proxies.                                                                                                                                                                                                              |
| **`longitude`**      | <code>number</code>                               | Longitude Can be missing, in case of Tor/proxies.                                                                                                                                                                                                             |
| **`timezone`**       | <code>string</code>                               | Timezone of the IP address location                                                                                                                                                                                                                           |
| **`postalCode`**     | <code>string</code>                               | Postal code, when available                                                                                                                                                                                                                                   |
| **`city`**           | <code>{ name: string; }</code>                    | City, when available                                                                                                                                                                                                                                          |
| **`subdivisions`**   | <code>{ isoCode: string; name: string; }[]</code> | Administrative subdivisions array (for example states\|provinces -&gt; counties\|parishes). Can be empty or missing. When not empty, can contain only top-level administrative units within a country, e.g. a state.                                          |
| **`country`**        | <code>{ code: string; name: string; }</code>      | Country, when available. Will be missing for Tor/anonymous proxies.                                                                                                                                                                                           |
| **`continent`**      | <code>{ code: string; name: string; }</code>      | Continent, when available. Will be missing for Tor/anonymous proxies.                                                                                                                                                                                         |

#### SeenAt

| Prop               | Type                        | Description                                                                |
| ------------------ | --------------------------- | -------------------------------------------------------------------------- |
| **`subscription`** | <code>string \| null</code> | The date and time within your subscription. The string format is ISO-8601. |
| **`global`**       | <code>string \| null</code> | The date and time across all subscription. The string format is ISO-8601.  |

### Type Aliases

#### LoadOptions

<code><a href="#loaderloadoptions">LoaderLoadOptions</a> & { /\*\* _ The pattern of the JS agent script URL. _ If multiple endpoints are given, the agent will try them one by one until it finds a working one. _ If an empty array is given, the agent will throw an error. _/ scriptUrlPattern?: <a href="#scripturlpattern">ScriptUrlPattern</a>; }</code>

#### LoaderLoadOptions

A portion of <a href="#loadoptions">LoadOptions</a> that will be available in the loader package

<code><a href="#commonloadoptions">CommonLoadOptions</a></code>

#### CommonLoadOptions

<code><a href="#apikeyoptions">ApiKeyOptions</a> & { /** _ <a href="#region">Region</a> of the FingerprintJS service server _ @default 'us' \*/ region?: <a href="#region">Region</a>; /** _ Your custom API endpoint for getting visitor data. _ If multiple endpoints are given, the agent will try them one by one until it finds a working one. _ If an empty array is given, the agent will throw an error. _ @example _ 'https://fp.example.com' _ @example _ ['https://fp.example.com', FingerprintJS.defaultEndpoint] _/ endpoint?: <a href="#endpoint">Endpoint</a>; /** _ Your custom TLS endpoint. _ If multiple endpoints are given, the agent will try them one by one until it finds a working one. _ If an empty array is given, the TLS request will be skipped. _ @example _ 'https://tls.fp.example.com' _ @example _ ['https://tls.fp.example.com', FingerprintJS.defaultTlsEndpoint] _/ tlsEndpoint?: <a href="#tlsendpoint">TlsEndpoint</a>; /** _ Disables the extra TLS request _/ disableTls?: boolean; /** _ Override storages name (cookies, localStorage, etc). _ Should only be used when the default name conflicts with some of your existing names. _ @default '\_vid' _/ storageKey?: string; /** _ A time delay in milliseconds to use instead of `requestIdleCallback` when it's unavailable. _ @default 50 _/ delayFallback?: number; /\*\* _ Information about libraries and services used to integrate the JS agent. _ Each array item means a separate integration, the order doesn't matter. _ An example of an integration library is FingerprintJS Pro React. \*/ integrationInfo?: readonly string[]; }</code>

#### ApiKeyOptions

<code>{ /** Public API key \*/ apiKey?: string; /** @deprecated Use the `apiKey` option instead _/ token: string; } | { /\*\* Public API key _/ apiKey: string; /\*_ @deprecated Use the `apiKey` option instead _/ token?: string; }</code>

#### Region

<code>'us' | 'eu' | 'ap'</code>

#### Endpoint

API endpoint for getting visitor data

<code>string | typeof defaultEndpoint | readonly (string | typeof defaultEndpoint)[]</code>

#### TlsEndpoint

API endpoint for TLS requests

<code>string | typeof defaultTlsEndpoint | readonly (string | typeof defaultTlsEndpoint)[]</code>

#### ScriptUrlPattern

A JS agent script URL pattern.

The following substrings are replaced:

- &lt;version&gt; — the major version of JS agent;
- &lt;apiKey&gt; — the public key set via the `apiKey` option;
- &lt;loaderVersion&gt; — the version of this package;

<code>string | typeof defaultScriptUrlPattern | readonly (string | typeof defaultScriptUrlPattern)[]</code>

#### VisitorId

<code>string</code>

#### Tags

<a href="#tags">Tags</a> are returned in the webhook response so make sure the map you are passing to the library represents a valid JSON.

<code>{ [K in string]: <a href="#tag">Tag</a> | Tag[] }</code>

#### Tag

<a href="#tags">Tags</a> are returned in the webhook response so make sure the map you are passing to the library represents a valid JSON.

<code>string | number | boolean | <a href="#tags">Tags</a></code>

#### VisitorData

Visitor identification data

<code><a href="#shortvisitordata">ShortVisitorData</a> | <a href="#extendedvisitordata">ExtendedVisitorData</a></code>

</docgen-api>
