# capacitor-player

Native Video Player for Capacitor. Play videos from URLs in fullscreen mode.

## Install

```bash
npm install capacitor-player
npx cap sync
```

## Example

```js
import { Player } from 'capacitor-player'

await Player.play({
  url: 'https://example.com/video.mp4',
})
```

## Support

| Platform | Supported? |
| -------- | ---------- |
| Android  | ✅         |
| iOS      | ✅         |
| Web      | ❌         |

## API

<docgen-index>

- [`play(...)`](#play)
- [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### play(...)

```typescript
play(options: VideoPlayerOptions) => Promise<void>
```

| Param         | Type                                                              |
| ------------- | ----------------------------------------------------------------- |
| **`options`** | <code><a href="#videoplayeroptions">VideoPlayerOptions</a></code> |

---

### Interfaces

#### VideoPlayerOptions

| Prop      | Type                | Description                  |
| --------- | ------------------- | ---------------------------- |
| **`url`** | <code>string</code> | The url of the video to play |

</docgen-api>
