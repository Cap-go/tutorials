```markdown
---
"title": "Using capacitor-statusbar-safe-area Package",
"description": "A comprehensive tutorial on how to utilize the @aashu-dubey/capacitor-statusbar-safe-area package to get status bar height and safe area insets on Android & iOS.",
"created_at": "2022-03-20",
"published": true,
"slug": "capacitor-statusbar-safe-area"

---

# Using capacitor-statusbar-safe-area Package

In this tutorial, we will learn how to effectively use the `@aashu-dubey/capacitor-statusbar-safe-area` package to access status bar height and safe area insets on both Android and iOS platforms.

## Installation

```bash
npm install @aashu-dubey/capacitor-statusbar-safe-area
npx cap sync
```

## Usage

To retrieve the status bar height, you can use the following code snippet:

```typescript
import { SafeArea } from '@aashu-dubey/capacitor-statusbar-safe-area';

const getStatusBarHeight = async () => {
  const { height } = await SafeArea.getStatusBarHeight();
  return height; // Returns the status bar height
};
```

Similarly, to get the safe area insets, use the following code:

```typescript
import { SafeArea } from '@aashu-dubey/capacitor-statusbar-safe-area';

const getSafeAreaInsets = async () => {
  const insets = await SafeArea.getSafeAreaInsets();
  return insets; // Returns an object with 'bottom', 'top', 'right', and 'left' values
};
```

## CSS Variables

The package also provides CSS variables for styling your components based on status bar height and safe area insets. First, inject the CSS variables as shown below:

```typescript
import { SafeAreaController } from '@aashu-dubey/capacitor-statusbar-safe-area';

const injectSafeAreaVariables = () => {
  SafeAreaController.injectCSSVariables();
};
```

Then, you can use these variables in your CSS files:

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

## HTML Tag

You can also utilize the `safe-area` web component provided by the plugin. For Angular users, ensure to modify your module declarations and register the custom element. For other frameworks, make sure to import the plugin in your component to use the web component.

```html
<safe-area>
  <!-- Content that requires safe area padding -->
</safe-area>
```
```