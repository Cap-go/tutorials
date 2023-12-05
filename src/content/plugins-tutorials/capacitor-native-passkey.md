# Using capacitor-native-passkey

## Introduction
In this tutorial, we will learn how to use the `capacitor-native-passkey` package in Capacitor to generate passkeys for your application.

## Prerequisites
Before getting started, make sure you have the following installed:
- Capacitor
- Node.js

## Step 1: Create a new Capacitor project
First, let's create a new Capacitor project by running the following command:

```bash
npx @capacitor/cli create
```

## Step 2: Install the `capacitor-native-passkey` package
Next, we need to install the `capacitor-native-passkey` package. Run the following command in your project's root directory:

```bash
npm install capacitor-native-passkey
```

## Step 3: Import and initialize the plugin
To use the `capacitor-native-passkey` plugin, we first need to import and initialize it in our code. Open your `main.ts` file and add the following code:

```typescript
import { Plugins } from '@capacitor/core';

const { CapacitorNativePasskey } = Plugins;

CapacitorNativePasskey.initialize();
```

## Step 4: Generate a passkey
Now, let's generate a passkey using the `capacitor-native-passkey` plugin. In your desired component, import the plugin and call the `generatePasskey` method:

```typescript
import { CapacitorNativePasskey } from 'capacitor-native-passkey';

const passkey = await CapacitorNativePasskey.generatePasskey();
```

The `generatePasskey` method returns a Promise that resolves with the generated passkey.

## Step 5: Use the passkey
You can now use the generated passkey in your application as needed. For example, you can store it securely, encrypt data using the passkey, or perform any other relevant operations.

## Conclusion
In this tutorial, we learned how to use the `capacitor-native-passkey` package in Capacitor to generate passkeys for your application.