```markdown
---
title: "Tutorial on Using learn-helloworld-capacitor Package"
description: "Step-by-step guide on creating and publishing a Capacitor plugin using learn-helloworld-capacitor package."
created_at: "2022-01-31"
published: true
slug: learn-helloworld-capacitor
---

# Tutorial: Using learn-helloworld-capacitor Package

## Install

```bash
npm install learn-helloworld-capacitor
npx cap sync
```

## API

The `learn-helloworld-capacitor` package provides the following API:

### `echo(...)`

```typescript
echo(options: { value: string; }) => Promise<{ value: string; }>
```

Accepts a value as input and returns the same value as output.

## Step 1: Plugin Initialization

### Creating the Plugin

1. **Run the following command to create a new Capacitor plugin:**

```bash
npm init @capacitor/plugin@latest
```

2. **Configure the following details:**
   - Package ID
   - Class name
   - Repository URL
   - Author information
   - License
   - Short description of plugin features

### Additional Configuration

After setting up the plugin, additional commands are executed automatically.

## Step 2: Automatic Commands Execution

The following commands are executed automatically after initialization:

```bash
npm install --no-package-lock
npm run fmt
```

## Step 3: Final Build and Configuration

### Building the Plugin

To build the plugin, run:

```bash
npm run build
```

### Final Configuration

Configure Capacitor for iOS and Android by running:

```bash
npx cap copy
npx cap add iOS
npx cap add android
```

## Conclusion

By following these steps, you can successfully create and publish a Capacitor plugin using the learn-helloworld-capacitor package.

```

```