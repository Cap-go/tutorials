```markdown
---
"title": "Using capacitor-call-phone-number Package"
"description": "This tutorial will guide you on how to use the capacitor-call-phone-number package to make phone calls in your Capacitor project."
"created_at": "2023-10-26"
"published": true
"slug": "capacitor-call-phone-number"
---

# Using capacitor-call-phone-number Package

## Description

Plugin for making phone calls in a Capacitor project.

## Installation

- `npm i capacitor-call-phone-number`

## Usage

```typescript
import { CallNumber } from 'capacitor-call-phone-number';

await CallNumber.call({ number: '111111', bypassAppChooser: false });

// bypassAppChooser = true (It will take to default dialer screen)
// bypassAppChooser = false (It will directly call the number)
```
```