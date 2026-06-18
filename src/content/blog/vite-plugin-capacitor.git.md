---
"title": "Using @bistroo/vite-plugin-capacitor Package Tutorial",
"description": "A tutorial on how to use @bistroo/vite-plugin-capacitor package in your Vite project.",
"created_at": "2023-09-15",
"published": true,
"slug": "vite-plugin-capacitor.git"
---

# Using @bistroo/vite-plugin-capacitor Package Tutorial

To get started with using the `@bistroo/vite-plugin-capacitor` package in your Vite project, follow these steps:

## Install

```bash
pnpm add -D @bistroo/vite-plugin-capacitor
```

```typescript
// vite.config.ts
import { defineConfig } from 'vite'
import { capacitor } from '@bistroo/vite-plugin-capacitor'

export default defineConfig({
  plugins: [
    capacitor(),
  ],
})
```

## Usage

```bash
PLATFORM=android|ios|web vite <build|preview>
```

or use the prompt.

## API

```typescript
capacitor(config: CapacitorPluginConfig)
```

```typescript
type CapacitorPluginConfig = {
  buildOptions?: BuildCommandOptions
  runOptions?: RunCommandOptions
}
```