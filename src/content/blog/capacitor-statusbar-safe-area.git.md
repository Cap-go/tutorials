```yaml
---
"title": "How to Use @aashu-dubey/capacitor-statusbar-safe-area Package",
"description": "This tutorial will guide you on how to use the @aashu-dubey/capacitor-statusbar-safe-area package to retrieve status bar height and safe area insets on Android and iOS platforms.",
"created_at": "2022-02-28",
"published": true,
"slug": "capacitor-statusbar-safe-area.git"
---
```

## Getting Started

To begin using the `@aashu-dubey/capacitor-statusbar-safe-area` package, you need to install it first.

### Installation

```bash
npm install @aashu-dubey/capacitor-statusbar-safe-area
npx cap sync
```

## Usage

### 1. Get Status Bar Height

You can retrieve the status bar height using the following code snippet:

```typescript
import { SafeArea } from '@aashu-dubey/capacitor-statusbar-safe-area';

const getStatusBarHeight = async () => {
  const { height } = await SafeArea.getStatusBarHeight();
  return height; // Example output: 29.090909957885742
};
```

### 2. Get Safe Area Insets

To obtain the safe area insets, use the following method:

```typescript
import { SafeArea } from '@aashu-dubey/capacitor-statusbar-safe-area';

const getSafeAreaInsets = async () => {
  const insets = await SafeArea.getSafeAreaInsets();
  return insets; // Example output: { "bottom": 34, "top": 47, "right": 0, "left": 0 }
};
```

### 3. Using CSS Variables

The package exposes CSS variables that you can utilize in your stylesheets. Here's how you can integrate them:

```typescript
import { SafeAreaController } from '@aashu-dubey/capacitor-statusbar-safe-area';

const injectSafeAreaVariables = () => {
  SafeAreaController.injectCSSVariables();
};
```

Once the CSS variables are injected, you can apply them in your CSS files as shown below:

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

### 4. Using HTML Tag

Another option is to use the `safe-area` web component provided by the plugin. For Angular users, make sure to handle custom web components. For other frameworks like React, register the custom element before use and wrap the content with the `safe-area` tag:

```html
<safe-area>
  <!-- Your content here -->
</safe-area>
```

By following these steps, you will be able to effectively leverage the features of the `@aashu-dubey/capacitor-statusbar-safe-area` package in your Capacitor app. Enjoy coding! 🚀
```