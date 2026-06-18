```markdown
---
"title": "Using @micahlt/capacitor-dark-mode Package Tutorial",
"description": "Step-by-step guide on implementing the @micahlt/capacitor-dark-mode package in your Capacitor project to enable automatic dark mode support.",
"created_at": "2021-09-15",
"published": true,
"slug": "ioniccapacitordarkmode.git"
---

# Using @micahlt/capacitor-dark-mode Package Tutorial

In this tutorial, you will learn how to integrate the @micahlt/capacitor-dark-mode package into your Capacitor project to enable automatic dark mode support based on the system theme selection.

## Installation

Begin by installing the package using npm:

```bash
npm install @micahlt/capacitor-dark-mode
```

Capacitor will automatically detect the plugin during the next sync command.

## Implementation

The @micahlt/capacitor-dark-mode package ensures correct behavior of the `prefers-color-scheme` CSS feature for Dark Mode on both Android and iOS devices. This eliminates the need for manual configuration.

In your project, make sure to import the package:

```javascript
import '@micahlt/capacitor-dark-mode';
```

Once the package is imported, your app will automatically switch styles based on the system's selected dark or light theme.

## Testing

To test the dark mode functionality, you can switch the system theme on your device. Your app should adjust its style accordingly without any additional setup.

## Conclusion

Adding the @micahlt/capacitor-dark-mode package to your Capacitor project simplifies the process of enabling automatic dark mode support. Users can enjoy a seamless experience with their preferred system theme.

Start integrating dark mode into your app today with this easy-to-follow tutorial!
```
```