```md
---
title: Using Link Navigation Plugin for Capacitor
description: This tutorial will guide you on how to use the Link Navigation Plugin package for Capacitor to create a system alert window overlay that allows user navigation through a list of links.
created_at: 2021-10-26
published: true
slug: link-navigation-plugin
---

# Using Link Navigation Plugin for Capacitor

The Link Navigation Plugin for Capacitor is a simple tool that creates a system alert window overlay for Android, allowing users to navigate through an array of links provided. Please note that this functionality is not supported on iOS.

![Demo](https://github.com/huishun98/link-navigation-plugin/blob/main/assets/Example.jpg?raw%253Dtrue)

## Installation

To install the Link Navigation Plugin package, use the following commands:

```bash
npm install link-navigation-plugin
npx cap sync
```

## Usage

After installation, you can customize the popup style by adding `colorDark` and `colorLight` resources to `android/app/src/main/res/values/strings.xml`.

```xml
<resources>
    <color name="colorDark">#000000</color>
    <color name="colorLight">#ffffff</color>
</resources>
```

You can then trigger the popup in your code as shown below:

```typescript
import { Overlay } from 'link-navigation-plugin';

Overlay.open({ 
    values: [
        { name: "Google", url: "https://google.com" },
        { name: "Yahoo", url: "https://yahoo.com" }
    ]},
    package: "com.example.app" // your package name for plugin to redirect back to
)
```

## Additional Features

The plugin also allows you to add a map button to the array elements by including [query, longitude, latitude](#interfaces).

## API

### `open(...)`

```typescript
open(options: { values: Link[]; package: string; }) => Promise<{ value: string; }>
```

### `close()`

```typescript
close() => Promise<{ lat?: number; lng?: number; }>
```

### `state()`

```typescript
state() => Promise<{ isActive: boolean; }>
```

### Interfaces

#### Link

| Property          | Type                        |
| ----------------- | --------------------------- |
| `url`             | `string`                    |
| `name`            | `string`                    |
| `query`           | `string \| null`            |
| `longitude`       | `number \| null`            |
| `latitude`        | `number \| null`            |
| `displacement`    | `number \| null`            |
```
