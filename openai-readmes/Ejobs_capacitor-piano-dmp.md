# capacitor-piano-dmp

Piano Dmp integration for Capacitor JS. For now it supports only sendPageView events.

## Install

```bash
npm install capacitor-piano-dmp
npx cap sync
```

# Android

Add the following line to AndroidManifest.xml

```xml
    <uses-permission android:name="android.permission.READ_PHONE_STATE" />
```

# iOS

No changes are needed on iOS

## API

<docgen-index>

- [`sendPageView(...)`](#sendpageview)
- [Interfaces](#interfaces)
- [Type Aliases](#type-aliases)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### sendPageView(...)

```typescript
sendPageView(options: PageViewOptions) => Promise<void>
```

Send a pageview event. Pageview events are aggregated by Piano Insight. All collected pageview events are available
for analysis in Insight's web interface.

| Param         | Type                                                        |
| ------------- | ----------------------------------------------------------- |
| **`options`** | <code><a href="#pageviewoptions">PageViewOptions</a></code> |

---

### Interfaces

#### PageViewOptions

| Prop               | Type                                                            |
| ------------------ | --------------------------------------------------------------- |
| **`location`**     | <code>string</code>                                             |
| **`userParams`**   | <code><a href="#record">Record</a>&lt;string, string&gt;</code> |
| **`customParams`** | <code><a href="#record">Record</a>&lt;string, string&gt;</code> |

### Type Aliases

#### Record

Construct a type with a set of properties K of type T

<code>{
[P in K]: T;
}</code>

</docgen-api>
