```markdown
---
"title": "Tutorial on using tailwind-capacitor package"
"description": "Learn how to use the tailwind-capacitor package for your capacitor apps."
"created_at": "2023-10-12"
"published": true
"slug": "tailwind-capacitor.git"
---

## Using Tailwind Capacitor

Tailwind Capacitor is a plugin for capacitor apps that allows you to easily style your app using Tailwind CSS utilities. Below is a step-by-step guide on how to use the Tailwind Capacitor package.

### Step 1: Add the Plugin to Your Project

You can install the plugin using npm in your project directory.

```bash
npm install --save-dev tailwind-capacitor
```

### Step 2: Configure the Tailwind Plugin

In your `tailwind.config.js` file, add the Tailwind Capacitor plugin along with other configurations.

```js
module.exports = {
  plugins: [
    require('tailwind-capacitor').safeAreas,
    require('tailwind-capacitor').colors,
    require('tailwind-capacitor').hairlines,
    require('tailwind-capacitor').touchRipple,
    require('tailwind-capacitor').iosMaterial,
    require('tailwind-capacitor').lineClamp,
    require('tailwind-capacitor').translucent,
    require('tailwind-capacitor').range,
    require('tailwind-capacitor').touch,
    require('tailwind-capacitor').noScrollbar,
  ],
}
```

For more detailed documentation on each plugin, you can refer to the links provided in the [Tailwind Capacitor repository](https://github.com/Cap-go/tailwind-capacitor).

### Credits

Tailwind Capacitor is a fork of Konsta UI and Tailwind CSS.

```
```