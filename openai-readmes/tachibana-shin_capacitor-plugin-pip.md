# capacitor-plugin-pip

A plugin allow enter to picture-in-picture mode.

## Install

```bash
npm install capacitor-plugin-pip
npx cap sync
```

### Usage

```ts
import { PiP } from 'capacitor-plugin-pip'

PiP.enterPiP()
```

## API

<docgen-index>

- [`enterPip()`](#enterpip)
- [`isPipSupported()`](#ispipsupported)
- [`addListener('pipModeChanged', ...)`](#addlistenerpipmodechanged)
- [`removeAllListeners()`](#removealllisteners)
- [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### enterPip()

```typescript
enterPip() => any
```

**Returns:** <code>any</code>

---

### isPipSupported()

```typescript
isPipSupported() => any
```

**Returns:** <code>any</code>

---

### addListener('pipModeChanged', ...)

```typescript
addListener(eventName: 'pipModeChanged', listenerFunc: (opts: { isInPipMode: boolean; }) => void) => Promise<PluginListenerHandle> & PluginListenerHandle
```

| Param              | Type                                                      |
| ------------------ | --------------------------------------------------------- |
| **`eventName`**    | <code>'pipModeChanged'</code>                             |
| **`listenerFunc`** | <code>(opts: { isInPipMode: boolean; }) =&gt; void</code> |

**Returns:** <code>any</code>

---

### removeAllListeners()

```typescript
removeAllListeners() => any
```

**Returns:** <code>any</code>

---

### Interfaces

#### PluginListenerHandle

| Prop         | Type                      |
| ------------ | ------------------------- |
| **`remove`** | <code>() =&gt; any</code> |

</docgen-api>
