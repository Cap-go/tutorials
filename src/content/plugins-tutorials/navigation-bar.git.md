---
"title": "Using @hugotomazi/capacitor-navigation-bar Package",
"description": "This tutorial will guide you through using the @hugotomazi/capacitor-navigation-bar package for Navigation Bar manipulation in Capacitor.",
"created_at": "2023-11-16",
"published": true,
"slug": "navigation-bar.git"
---

# Using @hugotomazi/capacitor-navigation-bar Package

In this tutorial, we will learn how to use the `@hugotomazi/capacitor-navigation-bar` package to manipulate the Navigation Bar in your Capacitor application.

### Install the Package

First, you need to install the package using npm:

```bash
npm install @hugotomazi/capacitor-navigation-bar
npx cap sync
```

### Displaying the Navigation Bar

To display the Navigation Bar, you can use the `show()` method provided by the package:

```typescript
import { Plugins } from '@capacitor/core';

const { NavigationBar } = Plugins;

async function showNavigationBar() {
  await NavigationBar.show();
}
```

### Hiding the Navigation Bar

If you want to hide the Navigation Bar, you can use the `hide()` method:

```typescript
import { Plugins } from '@capacitor/core';

const { NavigationBar } = Plugins;

async function hideNavigationBar() {
  await NavigationBar.hide();
}
```

### Changing the Navigation Bar Color

You can also change the color of the Navigation Bar using the `setColor()` method:

```typescript
import { Plugins } from '@capacitor/core';

const { NavigationBar } = Plugins;

async function changeNavigationBarColor() {
  await NavigationBar.setColor({ color: '#FF5733' });
}
```

This tutorial covers the basic usage of the `@hugotomazi/capacitor-navigation-bar` package for Navigation Bar manipulation. Experiment with the methods and customize your Navigation Bar according to your app's design requirements.