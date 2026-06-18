```markdown
---
"title": "Using @powersync/capacitor Package Tutorial"
"description": "Learn how to utilize the @powersync/capacitor package in your Capacitor project step-by-step."
"created_at": "October 20, 2021"
"published": true
"slug": "powersync-js.git"
---

# Using @powersync/capacitor Package Tutorial

This tutorial will guide you through the process of integrating and using the @powersync/capacitor package in your Capacitor project.

## Installation

```bash
npm install @powersync/capacitor
npx cap sync
```

## API

The @powersync/capacitor package provides the following API:

<docgen-index>

* [`powerSync(options)`](#powerSync)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### powerSync(options)

```typescript
powerSync(options: { content: string; }) => Promise<{ content: string; }>
```

| Param           | Type                                |
| --------------- | ----------------------------------- |
| **`options`**   | <code>{ content: string; }</code>   |

**Returns:** <code>Promise&lt;{ content: string; }&gt;</code>

### Step 1: Initializing a Capacitor Plugin

#### Creating the Plugin

1. **Run: npm init @capacitor/plugin@latest**
    - Initiates the creation of a new Capacitor plugin using the latest available version.

#### Additional Configuration

1. **Prompt: What should be the Package ID for your plugin?**
    - Define the unique package identifier for the plugin (e.g., `com.example.powersynccapacitor`).
2. **Prompt: What should be the class name for your plugin?**
    - Specify the main class name of the plugin (e.g., `PowerSyncCapacitorPlugin`).
3. **Prompt: What is the repository URL for your plugin?**
    - Provide the repository URL where the plugin code will be hosted (e.g., `https://github.com/username/powersync-capacitor`).
4. **Prompt: Who is the author of this plugin?**
    - Enter the author information of the plugin (e.g., `Alice Smith <alice@example.com>`).
5. **Prompt: What license should be used for your plugin?**
    - Choose the license under which the plugin will be distributed (e.g., `Apache-2.0`).
6. **Prompt: Enter a short description of plugin features.**
    - Describe the plugin features briefly (e.g., `An innovative Capacitor plugin for syncing power data efficiently.`).

### Step 2: Automatic Command Execution

After the initial setup, the following commands were automatically executed:

- **Automatic Commands:**

```shell
npm install --no-package-lock
npm run fmt
```

### Step 3: Final Configuration and Building

#### Plugin Building

- **Build Commands:**

```shell
npm run build
```

    - Cleans the files, generates documentation, compiles TypeScript, and runs Rollup for the build configuration.

#### Final Configuration

- **Capacitor Configuration:**

```shell
npx cap copy
npx cap add iOS
npx cap add android
```

    - Performs the initial setup of Capacitor for iOS and Android.

### Git Initialization

If you need further guidance, refer to the official documentation of @powersync/capacitor package for detailed information.
```
```