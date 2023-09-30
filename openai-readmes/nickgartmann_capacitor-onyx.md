# capacitor-onyx

Provides an interface to the Onyx SDK for the Boox series of tablets

## Install

```bash
npm install capacitor-onyx
npx cap sync
```

## Configure Gradle

Add the following to your app's `build.gradle` repositories block (it will also have the `flatDirs` config from default capacitor).

```
repositories {
    maven {
        url "http://repo.boox.com/repository/maven-public"
        allowInsecureProtocol = true
    }
}
```

And in the `android` block in your `build.gradle`:

```
android {
    //..namespace, defaultConfig, buildTypes, etc
    packagingOptions {
        jniLibs {
            pickFirsts += [
                    'lib/arm64-v8a/libc++_shared.so',
                    'lib/armeabi-v7a/libc++_shared.so',
                    'lib/x86/libc++_shared.so',
                    'lib/x86_64/libc++_shared.so'
            ]
        }
    }
}
```

Last, add the following line to your `gradle.properties` file

```
android.enableJetifier=true
```

## API

<docgen-index>

- [`start(...)`](#start)
- [`stop()`](#stop)
- [`configureStroke(...)`](#configurestroke)
- [`addListener('onDrawingStart', ...)`](#addlistenerondrawingstart)
- [`addListener('onDrawingEnd', ...)`](#addlistenerondrawingend)
- [`addListener('onStroke', ...)`](#addlisteneronstroke)
- [`addListener('onErasingStart', ...)`](#addlisteneronerasingstart)
- [`addListener('onErasingEnd', ...)`](#addlisteneronerasingend)
- [`addListener('onErase', ...)`](#addlisteneronerase)
- [`removeAllListeners()`](#removealllisteners)
- [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### start(...)

```typescript
start(options: DrawAreaOptions) => Promise<void>
```

| Param         | Type                                                        |
| ------------- | ----------------------------------------------------------- |
| **`options`** | <code><a href="#drawareaoptions">DrawAreaOptions</a></code> |

---

### stop()

```typescript
stop() => Promise<void>
```

---

### configureStroke(...)

```typescript
configureStroke(options: StrokeOptions) => Promise<void>
```

| Param         | Type                                                    |
| ------------- | ------------------------------------------------------- |
| **`options`** | <code><a href="#strokeoptions">StrokeOptions</a></code> |

---

### addListener('onDrawingStart', ...)

```typescript
addListener(name: 'onDrawingStart', callback: (point: Point) => void) => PluginListenerHandle
```

| Param          | Type                                                        |
| -------------- | ----------------------------------------------------------- |
| **`name`**     | <code>'onDrawingStart'</code>                               |
| **`callback`** | <code>(point: <a href="#point">Point</a>) =&gt; void</code> |

**Returns:** <code><a href="#pluginlistenerhandle">PluginListenerHandle</a></code>

---

### addListener('onDrawingEnd', ...)

```typescript
addListener(name: 'onDrawingEnd', callback: () => void) => PluginListenerHandle
```

| Param          | Type                        |
| -------------- | --------------------------- |
| **`name`**     | <code>'onDrawingEnd'</code> |
| **`callback`** | <code>() =&gt; void</code>  |

**Returns:** <code><a href="#pluginlistenerhandle">PluginListenerHandle</a></code>

---

### addListener('onStroke', ...)

```typescript
addListener(name: 'onStroke', callback: (stroke: Stroke) => void) => PluginListenerHandle
```

| Param          | Type                                                           |
| -------------- | -------------------------------------------------------------- |
| **`name`**     | <code>'onStroke'</code>                                        |
| **`callback`** | <code>(stroke: <a href="#stroke">Stroke</a>) =&gt; void</code> |

**Returns:** <code><a href="#pluginlistenerhandle">PluginListenerHandle</a></code>

---

### addListener('onErasingStart', ...)

```typescript
addListener(name: 'onErasingStart', callback: (point: Point) => void) => PluginListenerHandle
```

| Param          | Type                                                        |
| -------------- | ----------------------------------------------------------- |
| **`name`**     | <code>'onErasingStart'</code>                               |
| **`callback`** | <code>(point: <a href="#point">Point</a>) =&gt; void</code> |

**Returns:** <code><a href="#pluginlistenerhandle">PluginListenerHandle</a></code>

---

### addListener('onErasingEnd', ...)

```typescript
addListener(name: 'onErasingEnd', callback: () => void) => PluginListenerHandle
```

| Param          | Type                        |
| -------------- | --------------------------- |
| **`name`**     | <code>'onErasingEnd'</code> |
| **`callback`** | <code>() =&gt; void</code>  |

**Returns:** <code><a href="#pluginlistenerhandle">PluginListenerHandle</a></code>

---

### addListener('onErase', ...)

```typescript
addListener(name: 'onErase', callback: (stroke: Stroke) => void) => PluginListenerHandle
```

| Param          | Type                                                           |
| -------------- | -------------------------------------------------------------- |
| **`name`**     | <code>'onErase'</code>                                         |
| **`callback`** | <code>(stroke: <a href="#stroke">Stroke</a>) =&gt; void</code> |

**Returns:** <code><a href="#pluginlistenerhandle">PluginListenerHandle</a></code>

---

### removeAllListeners()

```typescript
removeAllListeners() => void
```

---

### Interfaces

#### DrawAreaOptions

| Prop         | Type                |
| ------------ | ------------------- |
| **`x`**      | <code>number</code> |
| **`y`**      | <code>number</code> |
| **`height`** | <code>number</code> |
| **`width`**  | <code>number</code> |

#### StrokeOptions

| Prop        | Type                                                                                                    |
| ----------- | ------------------------------------------------------------------------------------------------------- |
| **`width`** | <code>number</code>                                                                                     |
| **`style`** | <code>'pencil' \| 'fountain' \| 'marker' \| 'neo-brush' \| 'charcoal' \| 'dash' \| 'charcoal-v2'</code> |

#### PluginListenerHandle

| Prop         | Type                                      |
| ------------ | ----------------------------------------- |
| **`remove`** | <code>() =&gt; Promise&lt;void&gt;</code> |

#### Point

| Prop            | Type                |
| --------------- | ------------------- |
| **`x`**         | <code>number</code> |
| **`y`**         | <code>number</code> |
| **`size`**      | <code>number</code> |
| **`pressure`**  | <code>number</code> |
| **`timestamp`** | <code>number</code> |

#### Stroke

| Prop         | Type                 |
| ------------ | -------------------- |
| **`points`** | <code>Point[]</code> |

</docgen-api>
