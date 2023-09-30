# Capacitor Background Interval Process

# capacitor-background-interval-process

This plugin ensures you can execute background processes such native when app is suspended

## Install

```bash
npm install capacitor-background-interval-process
npx cap sync
```

## API

<docgen-index>

- [`isProcessAlive()`](#isprocessalive)
- [`startProcess(...)`](#startprocess)
- [`terminateProcess()`](#terminateprocess)
- [`addListener(...)`](#addlistener)
- [`removeAllListeners()`](#removealllisteners)
- [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### isProcessAlive()

```typescript
isProcessAlive() => Promise<IIsProcessAlive>
```

**Returns:** <code>Promise&lt;<a href="#iisprocessalive">IIsProcessAlive</a>&gt;</code>

---

### startProcess(...)

```typescript
startProcess(option: IStartOptions) => Promise<void>
```

| Param        | Type                                                    |
| ------------ | ------------------------------------------------------- |
| **`option`** | <code><a href="#istartoptions">IStartOptions</a></code> |

---

### terminateProcess()

```typescript
terminateProcess() => Promise<void>
```

---

### addListener(...)

```typescript
addListener(eventName: 'DOIT', callback: () => void) => Promise<PluginListenerHandle> & PluginListenerHandle
```

| Param           | Type                       |
| --------------- | -------------------------- |
| **`eventName`** | <code>"DOIT"</code>        |
| **`callback`**  | <code>() =&gt; void</code> |

**Returns:** <code>Promise&lt;<a href="#pluginlistenerhandle">PluginListenerHandle</a>&gt; & <a href="#pluginlistenerhandle">PluginListenerHandle</a></code>

---

### removeAllListeners()

```typescript
removeAllListeners() => Promise<void>
```

---

### Interfaces

#### IIsProcessAlive

| Prop         | Type                 |
| ------------ | -------------------- |
| **`status`** | <code>boolean</code> |

#### IStartOptions

| Prop              | Type                |
| ----------------- | ------------------- |
| **`interval`**    | <code>number</code> |
| **`title`**       | <code>string</code> |
| **`description`** | <code>string</code> |

#### PluginListenerHandle

| Prop         | Type                                      |
| ------------ | ----------------------------------------- |
| **`remove`** | <code>() =&gt; Promise&lt;void&gt;</code> |

</docgen-api>

<hr>

###

ANDROID

###

And add `xmlns:tools="http://schemas.android.com/tools"` to AndroidManifest.xml

And add to android/app/build.gradle

```bash
     android {
          configurations.all {
               resolutionStrategy { force 'androidx.work:work-runtime:2.6.0' }
          }
     }
```

<hr>
## TODO
     IMPROVEMENTS FOR THE ALL PLATFORMS
