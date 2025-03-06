```markdown
---
"title": "Using Capacitor Date Picker Package Tutorial",
"description": "A step-by-step guide on how to implement the @capacitor-community/date-picker package in your Capacitor project.",
"created_at": "2023-10-09",
"published": true,
"slug": "date-picker.git"
---

# How to Use @capacitor-community/date-picker

This tutorial will guide you on how to integrate the @capacitor-community/date-picker package into your Capacitor project.

## Installation

Using npm:

```bash
npm install @capacitor-community/date-picker
```

Using yarn:

```bash
yarn add @capacitor-community/date-picker
```

Sync native files:

```bash
npx cap sync
```

## Upgrade Guide

From version `2.*` to `3.*`, there are new settings. Please refer to the [definitions](/src/definitions.ts) file and update your format configs to match the new `ios` and `android` configurations.

## Importing the Plugin

Before, you used to import the plugin like this:

```typescript
import '@capacitor-community/date-picker'
import { Plugins } from '@capacitor/core'
const { DatePickerPlugin } = Plugins
```

However, with the latest changes, the above method has been deprecated. Now, you can use the plugin directly without importing the `Plugins` variable.

To use the plugin now, you need to do the following:

```typescript
import '@capacitor-community/date-picker';
const DatePickerPlugin = Capacitor.Plugins.DatePickerPlugin;
```

This change is part of the efforts to maintain consistency across the Capacitor plugins ecosystem.

Feel free to explore the capabilities and settings of the @capacitor-community/date-picker package to enhance your mobile app development experience.
```