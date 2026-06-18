I can provide you with a template for the markdown tutorial you described:

```markdown
---
"title": "Using @aparajita/capacitor-dark-mode Package Tutorial"
"description": "Learn how to use the @aparajita/capacitor-dark-mode package for implementing dark mode in your Ionic app across different platforms."
"created_at": "2023-10-07"
"published": true
"slug": "capacitor-dark-mode.git"
---

# Using @aparajita/capacitor-dark-mode Package Tutorial

This tutorial will guide you through the process of integrating the `@aparajita/capacitor-dark-mode` package into your Ionic app to enable dark mode functionality across web, iOS, and Android platforms.

## Installation

To get started, install the `@aparajita/capacitor-dark-mode` package in your app:

```shell
pnpm add @aparajita/capacitor-dark-mode
```

## Configuration

Once the package is installed, you need to provide a dark mode in your CSS and initialize the plugin. Make sure to add a dark mode CSS to your app, as the plugin will handle the dark mode class manipulation.

### Dark mode CSS

The `@aparajita/capacitor-dark-mode` package adds or removes a CSS class to the `body` element when necessary. By default, the class is `dark`, but you can configure it to be whatever you want.

> Note: If you are using Tailwind’s dark mode support, ensure to set `darkMode: 'class'` in your Tailwind config file.

## Usage

Once you have set up the dark mode CSS and initialized the plugin, you can start using the package to enable and control dark mode in your Ionic app seamlessly.

### Example

Here is a basic example of how to toggle dark mode using the `@aparajita/capacitor-dark-mode` package:

```typescript
import { Plugins } from '@capacitor/core';
const { DarkMode } = Plugins;

// Toggle dark mode
DarkMode.toggleDarkMode();
```

## Conclusion

Congratulations! You have successfully integrated and used the `@aparajita/capacitor-dark-mode` package in your Ionic app to implement dark mode functionality across different platforms.
```
```