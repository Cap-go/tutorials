---
"title": "How to Use capacitor-suppress-longpress-gesture Package",
"description": "A tutorial on how to utilize the capacitor-suppress-longpress-gesture package in your Capacitor project to suppress longpress gestures on iOS systems.",
"created_at": "2023-01-26",
"published": true,
"slug": "capacitor-suppress-longpress-gesture.git"
---

# How to Use capacitor-suppress-longpress-gesture Package

This tutorial will guide you on how to use the capacitor-suppress-longpress-gesture package in your Capacitor project to suppress longpress gestures on iOS systems.

## Installation

First, install the package using npm:

```bash
npm install capacitor-suppress-longpress-gesture
npx cap sync
```

## Usage

Import the package in your 'app' component and call the `activateService()` method:

```javascript
import { SuppressLongpressGesture } from 'capacitor-suppress-longpress-gesture';
SuppressLongpressGesture.activateService();
```

## API

### echo(...)

```typescript
echo(options: { value: string; }) => Promise<{ value: string; }>
```

This method echoes the value provided in the options.

### activateService()

```typescript
activateService() => Promise<string>
```

Activates the service to suppress longpress gestures.

### deactivateService()

```typescript
deactivateService() => Promise<string>
```

Deactivates the service for suppressing longpress gestures.

This tutorial provides a basic overview of how to use the capacitor-suppress-longpress-gesture package in your Capacitor project. Feel free to explore the package further for advanced usage.