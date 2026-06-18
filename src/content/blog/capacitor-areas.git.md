```markdown
---
title: "Using the Capacitor-Areas Package"
description: "A tutorial on how to utilize the Capacitor-Areas package in your projects"
created_at: "October 27, 2021"
published: true
slug: "capacitor-areas.git"
---

## Getting Started with Capacitor-Areas

The Capacitor-Areas package is an essential tool for managing safe areas in Capacitor apps. Follow these steps to integrate it into your project:

1. Install the package using npm:
```bash
npm install --save-dev capacitor-areas
```

2. Configure the plugin in your Tailwind config file:
```js
// tailwind.config.js
module.exports = {
  plugins: [
    require('tailwind-capacitor').safeAreas,
  ],
}
```

3. Explore the documentation for more features and customization options.

Don't forget to check out the official Capacitor-Areas repository and stay updated with the latest changes.

Happy coding!
```