---
title: "Using capacitor-context-menu package"
description: "In this tutorial, we will learn how to use the capacitor-context-menu package to implement custom context menus in your Capacitor app."
created_at: "2021-10-20"
published: true
slug: "capacitor-context-menu"
---

# Using capacitor-context-menu package

In this tutorial, we will learn how to use the `capacitor-context-menu` package to implement custom context menus in your Capacitor app. 

## Installation

To get started, we need to install the `capacitor-context-menu` package. Open your terminal and navigate to your Capacitor project directory. Run the following command:

```bash
npm install capacitor-context-menu
```

## Adding the plugin to your project

After installing the package, we need to add the plugin to our project. Open the `capacitor.config.json` file in your project root and add the following configuration:

```json
{
  "plugins": {
    "ContextMenu": {
      "forceImport": "./node_modules/capacitor-context-menu"
    }
  }
}
```

## Implementing a context menu

Now that we have added the plugin to our project, let's implement a context menu. In your component file (e.g., `MyComponent.tsx`), import the `Plugins` object from `@capacitor/core` and the `ContextMenuPlugin` from `capacitor-context-menu`:

```tsx
import { Plugins } from '@capacitor/core';
import { ContextMenuPlugin } from 'capacitor-context-menu';
const { ContextMenu } = Plugins;
```

To show a context menu, call the `showContextMenu` method with an array of menu items:

```tsx
const showMenu = async () => {
  const items = [
    { id: 'edit', title: 'Edit' },
    { id: 'delete', title: 'Delete', destructive: true }
  ];

  await ContextMenu.showContextMenu({ items });
};
```

You can customize the appearance and behavior of each menu item by providing additional properties like `icon` or `disabled`.

## Handling menu item selection

To handle the selected menu item, add event listeners to your component. For example, to handle the 'Edit' menu item, add the following code:

```tsx
document.addEventListener('ContextMenuEdit', () => {
  // Handle 'Edit' menu item selection
});
```

Similarly, you can add event listeners for other menu items by replacing `'ContextMenuEdit'` with the respective event names.

## Conclusion

In this tutorial, we have learned how to use the `capacitor-context-menu` package to implement custom context menus in your Capacitor app. We installed the package, added the plugin to our project, implemented a context menu, and handled menu item selection. Now you can enhance the user experience of your app by adding context menus to your components.

Happy coding!