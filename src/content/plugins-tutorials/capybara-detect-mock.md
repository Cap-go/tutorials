```markdown
---
"title": "Using Capybara Detect Mock Package Tutorial"
"description": "A tutorial on how to use the capybara-detect-mock package to detect mock locations."
"created_at": "2023-10-15"
"published": true
"slug": "capybara-detect-mock"
---

# Using Capybara Detect Mock Package Tutorial

This tutorial will guide you on how to use the Capybara Detect Mock package to detect mock locations in your application.

## Install

To install the package, run the following command:

```bash
npm install capybara-detect-mock
npx cap sync
```

## API

### echo(value)

The `echo` function in the Capybara Detect Mock package takes in a value and returns the same value.

```typescript
echo(options: { value: string; }) => Promise<{ value: string; }>
```

#### Parameters

- `options` (object): An object with a `value` property of type `string`.

#### Returns

A Promise that resolves with an object containing the provided `value`.

That's it! You are now ready to use the Capybara Detect Mock package to detect mock locations in your application.
```