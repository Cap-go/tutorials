```md
---
"title": "Using @bistroo/vite-plugin-capacitor Package Tutorial"
"description": "A tutorial on how to use @bistroo/vite-plugin-capacitor package in a Vite project."
"created_at": "2022-03-14"
"published": true
"slug": "vite-plugin-capacitor.git"
---

# Tutorial: Using @bistroo/vite-plugin-capacitor Package

This tutorial will guide you on how to integrate and utilize the @bistroo/vite-plugin-capacitor package in your Vite project.

## Installation

To begin, install the package using the following command:

```bash
pnpm add -D @bistroo/vite-plugin-capacitor
```

## Configuration

Update your `vite.config.ts` file as shown below:

```typescript
import { defineConfig } from 'vite'
import { capacitor } from '@bistroo/vite-plugin-capacitor'

export default defineConfig({
  plugins: [capacitor()],
})
```

## Usage

You can use the package to build, preview, and launch your application on different platforms as shown below:

```bash
PLATFORM=android|ios|web vite <build|preview>
```

Alternatively, follow the prompt during the process.

## API Reference

The available configuration options for the package plugin are as follows:

```typescript
capacitor(config: CapacitorPluginConfig)
```

```typescript
type CapacitorPluginConfig = {
  buildOptions?: BuildCommandOptions
  runOptions?: RunCommandOptions
}
```
```
You can use the above markdown tutorial for using @bistroo/vite-plugin-capacitor package in your Vite project.