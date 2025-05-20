---
title: How to Use @bistroo/vite-plugin-capacitor Package
description: >-
  Tutorial on integrating and using @bistroo/vite-plugin-capacitor package in a
  Vite project.
created_at: 'October 5, 2021'
published: true
slug: vite-plugin-capacitor.git
locale: en
---

# How to Use @bistroo/vite-plugin-capacitor Package

@bistroo/vite-plugin-capacitor is a plugin that integrates Capacitor with Vite projects, enabling the development of cross-platform applications. Follow the steps below to learn how to use this package efficiently.

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
```
