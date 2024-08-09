```markdown
---
"title": "Tutorial: Using capacitor-plugin-mocklocation",
"description": "Step-by-step guide on how to use the capacitor-plugin-mocklocation package in your Capacitor project.",
"created_at": "2022-01-14",
"published": true,
"slug": "capacitor-check-mock-gps-location"
---

# Tutorial: Using capacitor-plugin-mocklocation

In this tutorial, we will go through how to use the `capacitor-plugin-mocklocation` package in your Capacitor project to work with mock GPS locations.

## Installation

To get started, install the `capacitor-plugin-mocklocation` package by running the following commands:

```bash
npm install capacitor-plugin-mocklocation
npx cap sync
```

## API

The package provides the following API methods:

### echo()

The `echo()` method accepts an input value and returns a promise with the same value.

```typescript
echo(options: { value: string; }) => Promise<{ value: string; }>
```

### check()

The `check()` method also accepts an input value and returns a promise with the same value.

```typescript
check(options: { value: string; }) => Promise<{ value: string; }>
```

## Usage

You can now use the `capacitor-plugin-mocklocation` package in your project by calling the `echo()` and `check()` methods with the desired values.

That's it! You have successfully integrated and used the capacitor-plugin-mocklocation package in your Capacitor project to work with mock GPS locations.
```
```