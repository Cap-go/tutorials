```markdown
---
"title": "How to Use capacitor-suppress-longpress-gesture Package",
"description": "Learn how to use the capacitor-suppress-longpress-gesture package in your Capacitor project to suppress longpress gestures in iOS systems.",
"created_at": "2022-01-13",
"published": true,
"slug": "capacitor-suppress-longpress-gesture"
---

# Using capacitor-suppress-longpress-gesture Package

The `capacitor-suppress-longpress-gesture` package is designed to suppress longpress gestures in iOS systems for Capacitor projects. Follow the steps below to integrate and use this package in your app.

## Install

```bash
npm install capacitor-suppress-longpress-gesture
npx cap sync
```

## Usage

Import the package in your 'app' component and call the `activateService()` method as shown below:

```javascript
import { SuppressLongpressGesture } from 'capacitor-suppress-longpress-gesture';
SuppressLongpressGesture.activateService();
```

## API

### echo

#### Parameters

- `options`: 
  - `value`: string

#### Returns

- Promise<{ value: string; }>

### activateService

#### Returns

- Promise<string>

### deactivateService

#### Returns

- Promise<string>
```
