# Capacitor Wallpaper Plugin

This is a Capacitor plugin that allows you to manipulate the wallpaper on a user's device. With this plugin, you can set an image as the wallpaper for the home screen. Please note that this plugin is currently only developed for Android.

## Installation

To install this plugin, run the following command in your terminal:

```bash
npm install wallpaper-project
npx cap sync
```

## API

<docgen-index>

* [`setBase64(...)`](#setbase64)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### setBase64(...)

```typescript
setBase64(options: { base64Image: string; }) => Promise<void>
```

| Param         | Type                                  |
| ------------- | ------------------------------------- |
| **`options`** | <code>{ base64Image: string; }</code> |

--------------------

</docgen-api>
