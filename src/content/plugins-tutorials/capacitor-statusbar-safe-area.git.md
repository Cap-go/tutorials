```markdown
---
"title": "How to Use @aashu-dubey/capacitor-statusbar-safe-area Package",
"description": "Learn how to utilize the @aashu-dubey/capacitor-statusbar-safe-area package to get status bar height and safe area insets on Android & iOS.",
"created_at": "2022-01-20",
"published": true,
"slug": "capacitor-statusbar-safe-area"
---

# How to Use @aashu-dubey/capacitor-statusbar-safe-area Package

This tutorial will guide you through the steps to use the '@aashu-dubey/capacitor-statusbar-safe-area' package to obtain the status bar height and safe area insets on Android & iOS.

## Installation

```bash
npm install @aashu-dubey/capacitor-statusbar-safe-area
npx cap sync
```

## Usage

### Get Status Bar Height

```typescript
import { SafeArea } from '@aashu-dubey/capacitor-statusbar-safe-area';

const getStatusBarHeight = async () => {
  const { height } = await SafeArea.getStatusBarHeight();
  return height; // Example: 29.090909957885742
};
```

### Get Safe Area Insets

```typescript
import { SafeArea } from '@aashu-dubey/capacitor-statusbar-safe-area';

const getSafeAreaInsets = async () => {
  const insets = await SafeArea.getSafeAreaInsets();
  return insets; // Example: { "bottom":34, "top":47, "right":0, "left":0 }
};
```

### CSS Variables

The package provides CSS variables that can be used by calling the `injectCSSVariables` method in your application.

```typescript
import { SafeAreaController } from '@aashu-dubey/capacitor-statusbar-safe-area';

const injectSafeAreaVariables = () => {
  SafeAreaController.injectCSSVariables();
};
```

After injecting the CSS variables, you can use them in your CSS files:

```scss
.myContainer {
  margin-top: var(--status-bar-height);
}

.myElement {
  padding-top: var(--safe-area-inset-top);
  padding-left: var(--safe-area-inset-left);
  padding-right: var(--safe-area-inset-right);
  padding-bottom: var(--safe-area-inset-bottom);
}
```

### HTML Tag

Apart from the above options, you can also use the `safe-area` web component provided by the plugin.

#### Angular

For Angular users, you will need to modify the module that declares your component to allow for custom web components.

```ts
// your-component.module.ts
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
```

Register the custom element before using the tag:

```ts
// app.component.ts or your-component.ts

import { registerSafeAreaElement } '@aashu-dubey/capacitor-statusbar-safe-area';

registerSafeAreaElement();
```

Wrap the content requiring safe area padding with the `safe-area` tag:

```html
<safe-area>
  <!-- Other content -->
</safe-area>
```

#### Others

Import the plugin in your component to enable the web component:

<details>
<summary>React</summary>

```jsx
import { registerSafeAreaElement } '@aashu-dubey/capacitor-statusbar-safe-area';

registerSafeAreaElement();
```

This tutorial provides a comprehensive guide on how to leverage the functionalities of the @aashu-dubey/capacitor-statusbar-safe-area package to manage status bar height and safe area insets on both Android and iOS platforms.
```