# capacitor-useful-audio

An audio plugin for capacitor that is actually useful, support playing and audio chunk via base64 and returning a resolved promise when it's complete. Also supports stopping the audio playback mid-stream.

## Install

```bash
npm install capacitor-useful-audio
npx cap sync
```

## API

<docgen-index>

- [`play64(...)`](#play64)
- [`stop()`](#stop)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### play64(...)

```typescript
play64(options: { base64: string; }) => Promise<any>
```

| Param         | Type                             |
| ------------- | -------------------------------- |
| **`options`** | <code>{ base64: string; }</code> |

**Returns:** <code>Promise&lt;any&gt;</code>

---

### stop()

```typescript
stop() => Promise<any>
```

**Returns:** <code>Promise&lt;any&gt;</code>

---

</docgen-api>
