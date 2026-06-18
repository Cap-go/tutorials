```markdown
---
"title": "Using @biasllc/printer Package in Capacitor Apps",
"description": "Learn how to use the @biasllc/printer package to print content in Capacitor apps.",
"created_at": "2022-01-15",
"published": true,
"slug": "capacitor-printer.git"
---

# Using @biasllc/printer Package in Capacitor Apps

The @biasllc/printer package is a useful tool for printing content in Capacitor apps. In this tutorial, you will learn how to integrate and use this package in your Capacitor project.

## Installation

To get started, install the @biasllc/printer package by running the following command:

```bash
npm install @biasllc/printer
npx cap sync
```

## Usage

First, import the necessary library in your file:

```typescript
import { Printer } from '@biasllc/printer';
```

Next, you can use the `Printer.print()` method to print content. Here is an example:

```typescript
Printer.print({ content: 'Your content here' })
```

## API

### `print(options)`

The `print()` method is used to print content.

| Param              | Type                                      |
| ------------------ | ----------------------------------------- |
| **`options`**      | <code>{ content: string; }</code>         |

Example:

```typescript
Printer.print({ content: 'Text to print' })
```

That's it! You now know how to use the @biasllc/printer package in your Capacitor apps for printing content.
```