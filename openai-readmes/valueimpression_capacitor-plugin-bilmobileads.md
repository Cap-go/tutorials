# capacitor-plugin-bilmobileads

A Ionic Capacitor plugin for integrate ValueImpressionSDK.

## Install

```bash
npm install capacitor-plugin-bilmobileads
npx cap sync
```

### IOS

```bash
Add new property to Info.plist
Key: GADIsAdManagerApp Type: Boolean Type: YES
```

### ANDROID

```bash
1. Add the JitPack repository to your build file:
    - In your root build.gradle (app folder) at the end of repositories and add maven { url 'https://jitpack.io' }.
        allprojects {
                repositories {
                    ...
                    maven { url 'https://jitpack.io' }
                }
            }
2. Add BilMobileAds.class to MainActivity.java:
    public class MainActivity extends BridgeActivity {
        @Override
        public void onCreate(Bundle savedInstanceState) {
            super.onCreate(savedInstanceState);

            // Initializes the Bridge
            this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {{
                // Additional plugins you've installed go here
                add(BilMobileAds.class);
            }});
        }
    }
```

### IMPORT TO USE

```bash
import { PluginListenerHandle, Plugins } from '@capacitor/core';
const { BilMobileAds } = Plugins

constructor(){
    // Must initialize before create ads
    BilMobileAds.initialize({ testMode: false });
}
```

## API

<docgen-index>

- [`addListener(...)`](#addlistener)
- [`initialize(...)`](#initialize)
- [`enableCOPPA()`](#enablecoppa)
- [`disableCOPPA()`](#disablecoppa)
- [`setYearOfBirth(...)`](#setyearofbirth)
- [`setGender(...)`](#setgender)
- [`createBanner(...)`](#createbanner)
- [`loadBanner()`](#loadbanner)
- [`showBanner()`](#showbanner)
- [`hideBanner()`](#hidebanner)
- [`destroyBanner()`](#destroybanner)
- [`setPositionBanner(...)`](#setpositionbanner)
- [`getSafeArea()`](#getsafearea)
- [`createInterstitial(...)`](#createinterstitial)
- [`preLoadInterstitial()`](#preloadinterstitial)
- [`showInterstitial()`](#showinterstitial)
- [`destroyInterstitial()`](#destroyinterstitial)
- [`isReadyInterstitial()`](#isreadyinterstitial)
- [`createRewarded(...)`](#createrewarded)
- [`preLoadRewarded()`](#preloadrewarded)
- [`showRewarded()`](#showrewarded)
- [`destroyRewarded()`](#destroyrewarded)
- [`isReadyRewarded()`](#isreadyrewarded)
- [Interfaces](#interfaces)
- [Enums](#enums)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### addListener(...)

```typescript
addListener(eventName: 'BilmobileAdsPluginEvent', listenerFunc: AdEventListener) => PluginListenerHandle
```

| Param              | Type                                       |
| ------------------ | ------------------------------------------ |
| **`eventName`**    | <code>"BilmobileAdsPluginEvent"</code>     |
| **`listenerFunc`** | <code>(status: AdEvents) =&gt; void</code> |

**Returns:** <code><a href="#pluginlistenerhandle">PluginListenerHandle</a></code>

---

### initialize(...)

```typescript
initialize(option: { testMode: boolean; }) => void
```

| Param        | Type                                |
| ------------ | ----------------------------------- |
| **`option`** | <code>{ testMode: boolean; }</code> |

---

### enableCOPPA()

```typescript
enableCOPPA() => void
```

---

### disableCOPPA()

```typescript
disableCOPPA() => void
```

---

### setYearOfBirth(...)

```typescript
setYearOfBirth(option: { yearOfBirth: number; }) => void
```

| Param        | Type                                  |
| ------------ | ------------------------------------- |
| **`option`** | <code>{ yearOfBirth: number; }</code> |

---

### setGender(...)

```typescript
setGender(option: { gender: BilGender; }) => void
```

| Param        | Type                                                         |
| ------------ | ------------------------------------------------------------ |
| **`option`** | <code>{ gender: <a href="#bilgender">BilGender</a>; }</code> |

---

### createBanner(...)

```typescript
createBanner(option: { adUnitId: string; position: AdPosition; }) => any
```

| Param        | Type                                                                               |
| ------------ | ---------------------------------------------------------------------------------- |
| **`option`** | <code>{ adUnitId: string; position: <a href="#adposition">AdPosition</a>; }</code> |

**Returns:** <code>any</code>

---

### loadBanner()

```typescript
loadBanner() => any
```

**Returns:** <code>any</code>

---

### showBanner()

```typescript
showBanner() => any
```

**Returns:** <code>any</code>

---

### hideBanner()

```typescript
hideBanner() => any
```

**Returns:** <code>any</code>

---

### destroyBanner()

```typescript
destroyBanner() => any
```

**Returns:** <code>any</code>

---

### setPositionBanner(...)

```typescript
setPositionBanner(option: { position: AdPosition; }) => any
```

| Param        | Type                                                             |
| ------------ | ---------------------------------------------------------------- |
| **`option`** | <code>{ position: <a href="#adposition">AdPosition</a>; }</code> |

**Returns:** <code>any</code>

---

### getSafeArea()

```typescript
getSafeArea() => any
```

**Returns:** <code>any</code>

---

### createInterstitial(...)

```typescript
createInterstitial(option: { adUnitId: string; }) => any
```

| Param        | Type                               |
| ------------ | ---------------------------------- |
| **`option`** | <code>{ adUnitId: string; }</code> |

**Returns:** <code>any</code>

---

### preLoadInterstitial()

```typescript
preLoadInterstitial() => any
```

**Returns:** <code>any</code>

---

### showInterstitial()

```typescript
showInterstitial() => any
```

**Returns:** <code>any</code>

---

### destroyInterstitial()

```typescript
destroyInterstitial() => any
```

**Returns:** <code>any</code>

---

### isReadyInterstitial()

```typescript
isReadyInterstitial() => any
```

**Returns:** <code>any</code>

---

### createRewarded(...)

```typescript
createRewarded(option: { adUnitId: string; }) => any
```

| Param        | Type                               |
| ------------ | ---------------------------------- |
| **`option`** | <code>{ adUnitId: string; }</code> |

**Returns:** <code>any</code>

---

### preLoadRewarded()

```typescript
preLoadRewarded() => any
```

**Returns:** <code>any</code>

---

### showRewarded()

```typescript
showRewarded() => any
```

**Returns:** <code>any</code>

---

### destroyRewarded()

```typescript
destroyRewarded() => any
```

**Returns:** <code>any</code>

---

### isReadyRewarded()

```typescript
isReadyRewarded() => any
```

**Returns:** <code>any</code>

---

### Interfaces

#### PluginListenerHandle

| Prop         | Type                       |
| ------------ | -------------------------- |
| **`remove`** | <code>() =&gt; void</code> |

#### SafeArea

| Prop                | Type                |
| ------------------- | ------------------- |
| **`topPadding`**    | <code>number</code> |
| **`bottomPadding`** | <code>number</code> |

### Enums

#### BilGender

| Members       |
| ------------- |
| **`Unknown`** |
| **`Male`**    |
| **`Female`**  |

#### AdPosition

| Members            |
| ------------------ |
| **`TopCenter`**    |
| **`TopLeft`**      |
| **`TopRight`**     |
| **`BottomCenter`** |
| **`BottomLeft`**   |
| **`BottomRight`**  |
| **`Center`**       |

</docgen-api>
