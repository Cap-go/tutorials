Sure! Here's a markdown tutorial on how to use the capacitor-keep-screen-on package:

```markdown
---
title: "Using capacitor-keep-screen-on"
description: "A guide on how to use the capacitor-keep-screen-on package to prevent automatic screen off"
created_at: "2021-10-05"
published: true
slug: "capacitor-keep-screen-on"
---

# Using capacitor-keep-screen-on

The capacitor-keep-screen-on package is a Capacitor plugin that allows you to prevent the automatic screen off feature on both Android and iOS devices. This can be useful when you want to keep the screen on while your app is active.

## Installation

To install the capacitor-keep-screen-on package, run the following command in your Capacitor project:

```bash
npm install capacitor-keep-screen-on
```

## Usage

1. Import the capacitor-keep-screen-on plugin in your project:

```javascript
import { Plugins } from '@capacitor/core';
const { CapacitorKeepScreenOn } = Plugins;
```

2. Add the following code to prevent the screen from automatically turning off:

```javascript
CapacitorKeepScreenOn.preventScreenTurnOff()
  .then(() => {
    console.log('Screen will not turn off');
  })
  .catch((error) => {
    console.error(error);
  });
```

3. To allow the screen to automatically turn off again, use the following code:

```javascript
CapacitorKeepScreenOn.allowScreenTurnOff()
  .then(() => {
    console.log('Screen can turn off');
  })
  .catch((error) => {
    console.error(error);
  });
```

That's it! You have successfully installed and used the capacitor-keep-screen-on package to prevent automatic screen off in your Capacitor project.

For more information and advanced usage options, please refer to the [official documentation](https://github.com/go-u/capacitor-keep-screen-on).

Remember to test your app on both Android and iOS devices to ensure that the screen stays on as expected.

Happy coding!
```

Please note that the frontmatter values (title, description, created_at, published, slug) are in double quotes and can be customized according to your needs.