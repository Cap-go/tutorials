# @snewbie/capacitor-web-view

<a href="https://www.npmjs.com/package/@snewbie/capacitor-web-view"><img src="https://img.shields.io/npm/v/@snewbie/capacitor-web-view.svg?sanitize=true" alt="Version"></a> <a  href="https://www.npmjs.com/package/@snewbie/capacitor-v"><img src="https://img.shields.io/npm/l/@snewbie/capacitor-web-view.svg?sanitize=true" alt="License"></a> [![Publish Capacitor Android Plugin To NPM](https://github.com/null-object-0000/capacitor-plugin-web-view/actions/workflows/capacitor-android-plugin-publish.yml/badge.svg)](https://github.com/null-object-0000/capacitor-plugin-web-view/actions/workflows/capacitor-android-plugin-publish.yml)

一个 Capacitor 的 web 浏览器组件。

## Install

```bash
npm install @snewbie/capacitor-web-view
npx cap sync
```

## Usage

> 在 Android 上，wen 浏览器组件在整个网络视图下呈现，并使用该组件在滚动事件期间管理其位置。这意味着，作为开发人员，您必须确保 Web 视图在所有层到最底层都是透明的。在典型的 Ionic 应用程序中，这意味着对 IonContent 和根 HTML 标记等元素设置透明度，以确保它可以被看到。如果你在 Android 上看不到你的 web 浏览器组件，这应该是你检查的第一件事。

web 浏览器组件本身没有样式，所以你应该根据页面结构的布局对其进行样式设置。因为我们将视图渲染到这个槽中，所以元素本身没有宽度或高度，所以一定要明确设置这些宽度或高度。

```html
<div id="webView" class="capacitor-web-view"></div>
```

```css
.capacitor-web-view {
  display: inline-block;
  width: 275px;
  height: 400px;
}
```

接下来，我们应该创建 web 浏览器引用。这是通过从 Capacitor 插件导入 WebView 类并调用 create 方法，然后传入所需的参数来完成的。

```typescript
import { WebView } from '@snewbie/capacitor-web-view';

const webViewRef = document.getElementById('map');

const newMap = await WebView.create({
  id: 'my-web-view', // Unique identifier for this web-view instance
  element: webViewRef, // reference to the capacitor-web-view element
  config: {
    url: 'https://www.baidu.com'
  }
});
```

## 完整示例

### Vue

```html
<template>
    <div id="webView" ref="webViewRef" :style="{ display: 'inline-block', width: '275px', height: '400px' }"></div>
</template>

<script setup lang="ts">
import { onIonViewWillEnter, onIonViewWillLeave } from '@ionic/vue';
import { onMounted, onUnmounted, ref } from 'vue';
import { WebView } from '@snewbie/capacitor-web-view';

const webViewRef = ref<HTMLElement | null>(null);
let newWebView: WebView;

onMounted(async () => {
    if (!newWebView.value) { return; }

    newWebView = await WebView.create({
        id: 'main',
        element: newWebView.value,
        config: {
          url: 'https://www.baidu.com'
        } 
    });
});

onIonViewWillEnter(async () => {
  newWebView?.show()
  newWebView?.enableTouch()
})

onIonViewWillLeave(async () => {
  newWebView?.hide()
  newWebView?.disableTouch()
})

onUnmounted(() => {
  newWebView?.destroy()
})
</script>
```

## API

<docgen-index>

* [`getCookie(...)`](#getcookie)
* [`setCookie(...)`](#setcookie)
* [`removeAllCookies()`](#removeallcookies)
* [`hasCookies()`](#hascookies)
* [`create(...)`](#create)
* [`loadUrl(...)`](#loadurl)
* [`evaluateJavascript(...)`](#evaluatejavascript)
* [`destroy()`](#destroy)
* [`show()`](#show)
* [`hide()`](#hide)
* [`enableTouch()`](#enabletouch)
* [`disableTouch()`](#disabletouch)
* [`setOnPageStartedListener(...)`](#setonpagestartedlistener)
* [`setOnPageFinishedListener(...)`](#setonpagefinishedlistener)
* [`setOnProgressChangedListener(...)`](#setonprogresschangedlistener)
* [Interfaces](#interfaces)
* [Type Aliases](#type-aliases)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### getCookie(...)

```typescript
getCookie(url: string, key?: string | undefined) => Promise<string>
```

获取指定 url 的 cookie。

| Param     | Type                | Description                           |
| --------- | ------------------- | ------------------------------------- |
| **`url`** | <code>string</code> | 要获取 cookie 的 url。                     |
| **`key`** | <code>string</code> | 要获取的 cookie 的 key。如果不指定，则返回所有 cookie。 |

**Returns:** <code>Promise&lt;string&gt;</code>

**Since:** 0.0.1

--------------------


### setCookie(...)

```typescript
setCookie(url: string, key: string, value: string) => Promise<void>
```

设置指定 url 的 cookie。

| Param       | Type                | Description        |
| ----------- | ------------------- | ------------------ |
| **`url`**   | <code>string</code> | 要设置 cookie 的 url。  |
| **`key`**   | <code>string</code> | 要设置的 cookie 的 key。 |
| **`value`** | <code>string</code> | 要设置的 cookie 的值。    |

**Since:** 0.0.1

--------------------


### removeAllCookies()

```typescript
removeAllCookies() => Promise<void>
```

移除所有 cookie。

**Since:** 0.0.2

--------------------


### hasCookies()

```typescript
hasCookies() => Promise<boolean>
```

检查是否存在 cookie。

**Returns:** <code>Promise&lt;boolean&gt;</code>

**Since:** 0.0.2

--------------------


### create(...)

```typescript
create(options: CreateWebViewArgs, callback?: WebViewListenerCallback<WebViewReadyCallbackData> | undefined) => Promise<WebView>
```

创建 web 浏览器实例。

| Param          | Type                                                                                                                                                |
| -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`options`**  | <code><a href="#createwebviewargs">CreateWebViewArgs</a></code>                                                                                     |
| **`callback`** | <code><a href="#webviewlistenercallback">WebViewListenerCallback</a>&lt;<a href="#webviewreadycallbackdata">WebViewReadyCallbackData</a>&gt;</code> |

**Returns:** <code>Promise&lt;WebView&gt;</code>

**Since:** 0.0.1

--------------------


### loadUrl(...)

```typescript
loadUrl(url: string) => Promise<void>
```

加载指定 url 的内容。

| Param     | Type                |
| --------- | ------------------- |
| **`url`** | <code>string</code> |

**Since:** 0.0.1

--------------------


### evaluateJavascript(...)

```typescript
evaluateJavascript(script: string) => Promise<string | null>
```

执行指定的 JavaScript 代码。

| Param        | Type                |
| ------------ | ------------------- |
| **`script`** | <code>string</code> |

**Returns:** <code>Promise&lt;string | null&gt;</code>

**Since:** 0.0.1

--------------------


### destroy()

```typescript
destroy() => Promise<void>
```

销毁 web 浏览器实例。

**Since:** 0.0.1

--------------------


### show()

```typescript
show() => Promise<void>
```

显示 web 浏览器。

**Since:** 0.0.1

--------------------


### hide()

```typescript
hide() => Promise<void>
```

隐藏 web 浏览器。

**Since:** 0.0.1

--------------------


### enableTouch()

```typescript
enableTouch() => Promise<void>
```

设置 web 浏览器允许被触控。

**Since:** 0.0.1

--------------------


### disableTouch()

```typescript
disableTouch() => Promise<void>
```

设置 web 浏览器禁止被触控。

**Since:** 0.0.1

--------------------


### setOnPageStartedListener(...)

```typescript
setOnPageStartedListener(callback?: WebViewListenerCallback<void> | undefined) => Promise<void>
```

设置 web 浏览器开始加载页面时的监听器。

| Param          | Type                                                                                    |
| -------------- | --------------------------------------------------------------------------------------- |
| **`callback`** | <code><a href="#webviewlistenercallback">WebViewListenerCallback</a>&lt;void&gt;</code> |

**Since:** 0.0.1

--------------------


### setOnPageFinishedListener(...)

```typescript
setOnPageFinishedListener(callback?: WebViewListenerCallback<void> | undefined) => Promise<void>
```

设置 web 浏览器页面加载完成时的监听器。

| Param          | Type                                                                                    |
| -------------- | --------------------------------------------------------------------------------------- |
| **`callback`** | <code><a href="#webviewlistenercallback">WebViewListenerCallback</a>&lt;void&gt;</code> |

**Since:** 0.0.1

--------------------


### setOnProgressChangedListener(...)

```typescript
setOnProgressChangedListener(callback?: WebViewListenerCallback<{ newProgress: number; }> | undefined) => Promise<void>
```

设置 web 浏览器加载进度变化时的监听器。

| Param          | Type                                                                                                        |
| -------------- | ----------------------------------------------------------------------------------------------------------- |
| **`callback`** | <code><a href="#webviewlistenercallback">WebViewListenerCallback</a>&lt;{ newProgress: number; }&gt;</code> |

**Since:** 0.0.1

--------------------


### Interfaces


#### CreateWebViewArgs

| Prop              | Type                                                    | Description                                                                                        | Default            | Since |
| ----------------- | ------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | ------------------ | ----- |
| **`id`**          | <code>string</code>                                     | web 浏览器实例的唯一标识符。                                                                                   |                    | 0.0.1 |
| **`config`**      | <code><a href="#webviewconfig">WebViewConfig</a></code> | web 浏览器的初始配置设置。                                                                                    |                    | 0.0.1 |
| **`element`**     | <code>HTMLElement</code>                                | The DOM element that the Google Map View will be mounted on which determines size and positioning. |                    | 0.0.1 |
| **`forceCreate`** | <code>boolean</code>                                    | 如果已经存在具有提供的`id`的 web 浏览器，则销毁并重新创建 web 浏览器实例。                                                       | <code>false</code> | 0.0.1 |


#### WebViewConfig

| Prop                   | Type                | Description                                             | Default            | Since |
| ---------------------- | ------------------- | ------------------------------------------------------- | ------------------ | ----- |
| **`width`**            | <code>number</code> | Override width for native map.                          |                    | 0.0.1 |
| **`height`**           | <code>number</code> | Override height for native map.                         |                    | 0.0.1 |
| **`x`**                | <code>number</code> | Override absolute x coordinate position for native map. |                    | 0.0.1 |
| **`y`**                | <code>number</code> | Override absolute y coordinate position for native map. |                    | 0.0.1 |
| **`devicePixelRatio`** | <code>number</code> | Override pixel ratio for native map.                    | <code>1.00f</code> | 0.0.1 |
| **`url`**              | <code>string</code> | 指定要加载的 URL，为空时将不进行加载动作。                                 |                    | 0.0.1 |


#### WebViewReadyCallbackData

| Prop            | Type                |
| --------------- | ------------------- |
| **`webViewId`** | <code>string</code> |


### Type Aliases


#### WebViewListenerCallback

The callback function to be called when web-view events are emitted.

<code>(data: T): void</code>

</docgen-api>
