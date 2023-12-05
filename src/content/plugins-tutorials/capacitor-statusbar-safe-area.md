---
title: "Using @aashu-dubey/capacitor-statusbar-safe-area Package"
description: "Learn how to use the @aashu-dubey/capacitor-statusbar-safe-area package to get status bar height and safe area insets on Android and iOS."
created_at: "2022-01-01"
published: true
slug: capacitor-statusbar-safe-area
---

# Using @aashu-dubey/capacitor-statusbar-safe-area Package

The @aashu-dubey/capacitor-statusbar-safe-area package provides functionality to retrieve the status bar height and safe area insets on Android and iOS. This tutorial will guide you through the installation process and demonstrate how to use the package in various scenarios.

## Installation

To install the @aashu-dubey/capacitor-statusbar-safe-area package, run the following command:

```bash
npm install @aashu-dubey/capacitor-statusbar-safe-area
npx cap sync
```

## Usage

Here are a few examples of how to use the package in your code:

### Get Status Bar Height

To retrieve the height of the status bar, you can use the `SafeArea.getStatusBarHeight()` method. Here's an example:

```typescript
import { SafeArea } from '@aashu-dubey/capacitor-statusbar-safe-area';

const getStatusBarHeight = async () => {
  const { height } = await SafeArea.getStatusBarHeight();
  return height; // Ex. 29.090909957885742
};
```

### Get Safe Area Insets

To retrieve the safe area insets, you can use the `SafeArea.getSafeAreaInsets()` method. Here's an example:

```typescript
import { SafeArea } from '@aashu-dubey/capacitor-statusbar-safe-area';

const getSafeAreaInsets = async () => {
  const insets = await SafeArea.getSafeAreaInsets();
  return insets; // Ex. { "bottom":34, "top":47, "right":0, "left":0 }
};
```

### CSS Variables

The package also exposes CSS variables, which you can use in your CSS files. To inject these variables, you need to call the `SafeAreaController.injectCSSVariables()` method. Here's an example:

```typescript
import { SafeAreaController } from '@aashu-dubey/capacitor-statusbar-safe-area';

const injectSafeAreaVariables = () => {
  SafeAreaController.injectCSSVariables();
};
```

Once the variables are injected, you can use them in your CSS files as shown below:

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

In addition to the above options, you can also use the `safe-area` web component exported by the package.

#### Angular

If you are using Angular, you need to modify the module that declares your component to allow for custom web components. Add the `CUSTOM_ELEMENTS_SCHEMA` to the `schemas` array in your module. Here's an example:

```typescript
// your-component.module.ts
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
```

You also need to register the custom element before using the `safe-area` tag. Here's an example:

```typescript
// app.component.ts or your-component.ts

import { registerSafeAreaElement } from '@aashu-dubey/capacitor-statusbar-safe-area';

registerSafeAreaElement();
```

Once registered, you can use the `safe-area` tag to apply safe area padding to the desired content:

```html
<safe-area>
  <!-- Other content -->
</safe-area>
```

#### Other Frameworks (e.g., React)

If you are using a different framework like React, you will need to import the package in your component to make the web component work. Here's an example for React:

```jsx
import { registerSafeAreaElement } from '@aashu-dubey/capacitor-statusbar-safe-area';

registerSafeAreaElement();

// Your component code...
```

After importing and registering the web component, you can use the `safe-area` tag as shown above.

## Conclusion

In this tutorial, you learned how to use the @aashu-dubey/capacitor-statusbar-safe-area package to retrieve status bar height and safe area insets on Android and iOS. You also explored using CSS variables and the `safe-area` web component in your projects. With this knowledge, you can ensure that your app's UI is properly aligned with the system UI elements.

Make sure to refer to the package documentation for more details and additional methods that may suit your specific use cases. Happy coding!