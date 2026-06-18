I can provide you with the markdown tutorial for using the `tailwind-capacitor` package. However, I cannot add the frontmatter to the file automatically. You can copy the markdown tutorial and add the frontmatter to the top of the file manually. Here's the tutorial:

```markdown
# Using Tailwind Capacitor

Tailwind Capacitor is a plugin designed for capacitor apps to enhance the styling capabilities using Tailwind CSS.

## Installation

1. Add the `tailwind-capacitor` plugin to your project:

```bash
npm install --save-dev tailwind-capacitor
```

2. Configure the plugin in your `tailwind.config.js` file:

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

## Plugin Documentation

Each plugin included in Tailwind Capacitor provides specific enhancements. You can find detailed documentation for each plugin in the links below:
- [Safe Areas](https://github.com/Cap-go/tailwind-capacitor/blob/main/docs/safe-areas.md)
- [Colors](https://github.com/Cap-go/tailwind-capacitor/blob/main/docs/colors.md)
- [Hairlines](https://github.com/Cap-go/tailwind-capacitor/blob/main/docs/hairlines.md)
- [Touch Ripple](https://github.com/Cap-go/tailwind-capacitor/blob/main/docs/touch-ripple.md)
- [iOS Material](https://github.com/Cap-go/tailwind-capacitor/blob/main/docs/ios-material.md)
- [Line Clamp](https://github.com/Cap-go/tailwind-capacitor/blob/main/docs/line-clamp.md)
- [Translucent](https://github.com/Cap-go/tailwind-capacitor/blob/main/docs/translucent.md)
- [Range](https://github.com/Cap-go/tailwind-capacitor/blob/main/docs/range.md)
- [Touch](https://github.com/Cap-go/tailwind-capacitor/blob/main/docs/touch.md)
- [No Scrollbar](https://github.com/Cap-go/tailwind-capacitor/blob/main/docs/no-scrollbar.md)
```

Feel free to copy this tutorial and add the necessary frontmatter to it. If you have any questions or need further assistance, feel free to ask!