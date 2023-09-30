# @twogate/capacitor-modal-webview

modal webview

## Install

```bash
npm install @twogate/capacitor-modal-webview
npx cap sync
```

## API

<docgen-index>

- [`open(...)`](#open)
- [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### open(...)

```typescript
open(options: { options: ModalWebViewOptions; }) => Promise<boolean>
```

| Param         | Type                                                                              |
| ------------- | --------------------------------------------------------------------------------- |
| **`options`** | <code>{ options: <a href="#modalwebviewoptions">ModalWebViewOptions</a>; }</code> |

**Returns:** <code>Promise&lt;boolean&gt;</code>

---

### Interfaces

#### ModalWebViewOptions

| Prop                          | Type                 | Description                                                                                 |
| ----------------------------- | -------------------- | ------------------------------------------------------------------------------------------- |
| **`url`**                     | <code>string</code>  |                                                                                             |
| **`loadWebPageErrorMessage`** | <code>string</code>  |                                                                                             |
| **`enableCookie`**            | <code>boolean</code> | If true, cookie in the webview will be stored even if you kill application.                 |
| **`pathToFlushCookie`**       | <code>string</code>  | only Android. Path, cookie in the webview will be removed when webview load this path page. |

</docgen-api>

## Theme

You can set some colors in toolbar, navigation bar and modal view background.

### iOS

Add Color Set to your Assets.xcassets
| ColorSet | Description |
| ----------------------------- | --------------------------------------------------------------------------------- |
| **`ToolBarBackground`** | Background color, modal navigation bar and toolbar. |
| **`ToolBarForeground`** | Item color of toolbar and navigation bar |
| **`BaseBackground`** | Background color of modal. |

### Android

Add `<color>` tag to your styles.xml
| name | Description |
| --------------------------------------------------- | --------------------------------------------------------------------------------- |
| **`colorModalWebViewToolBarForegroundColor`** | Background color, modal navigation bar and toolbar. |
| **`colorModalWebViewToolBarBackgroundColor`** | Item color of toolbar and navigation bar |
| **`colorModalWebViewBaseBackgroundColor`** | Background color of modal. |

## Example
