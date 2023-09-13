# capacitor-textinteraction

Toggle text interaction in Capacitor based iOS apps.

Background: Apple reintroduced the magnifier lens with iOS 15. There are two
different ways how this function is triggered. Either by longpressing on a text
element or by double tap and hold. You can disable the longpress version in CSS
via `-webkit-user-select: none;`, but this won't work for the double tap and hold.
As I'm using Capacitor for games, the lens is the last thing I want to pop up
while playing the game 😇

## Install

```bash
npm install capacitor-textinteraction
npx cap sync
```

## API

<docgen-index>

- [`toggle(...)`](#toggle)
- [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### toggle(...)

```typescript
toggle(options: TextInteractionOptions) => any
```

Toggle text interaction (selection) on the Capacitor WebView.

WARNING: As long as you disable text interaction, you won't be able
to use any input fields. Either disable while text input is active or
use native text input overlays.

| Param         | Type                                                                      |
| ------------- | ------------------------------------------------------------------------- |
| **`options`** | <code><a href="#textinteractionoptions">TextInteractionOptions</a></code> |

**Returns:** <code>Promise&lt;<a href="#TextInteractionResult">TextInteractionResult</a>&gt;</code>

**Since:** 1.0.0

---

### Interfaces

#### TextInteractionOptions

| Prop          | Type                 | Description                                                                                                                                   | Since |
| ------------- | -------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | ----- |
| **`enabled`** | <code>boolean</code> | Whether text interaction should be enabled or disabled. Disabling suppresses the magnifier lens that Apple reintroduced with iOS 15. iOS only | 1.0.0 |

#### TextInteractionResult

| Prop          | Type                 | Description                                      | Since |
| ------------- | -------------------- | ------------------------------------------------ | ----- |
| **`success`** | <code>boolean</code> | true if supported (&gt;= iOS 14.5), false if not | 1.0.0 |

</docgen-api>
