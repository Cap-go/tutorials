```markdown
---
title: "Using the Texttostructure Package"
description: "A tutorial on how to use the texttostructure package to generate structured content."
created_at: "2022-02-26"
published: true
slug: "texttostructure"
---

# Using the Texttostructure Package

To use the Texttostructure package, follow these steps:

## Install

```bash
npm install texttostructure
npx cap sync
```

## API

The package provides an `echo` function that echoes back the input value passed to it.

### echo

```typescript
echo(options: { value: string; }) => Promise<{ value: string; }>
```

To echo a value, call the `echo` function with the desired value.

```typescript
import { echo } from 'texttostructure';

const result = await echo({ value: 'Hello World!' });
console.log(result.value); // Output: Hello World!
```

This tutorial covers the basic usage of the Texttostructure package.

---

This is a README file for hello-cap
latest version: 
# 1.0.0
```