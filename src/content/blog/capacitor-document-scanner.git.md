```markdown
---
"title": "How to Use Capacitor Document Scanner Package"
"description": "This tutorial will guide you through using the capacitor-document-scanner package to scan documents in your Capacitor apps."
"created_at": "2022-01-03"
"published": true
"slug": "capacitor-document-scanner.git"
---

# Capacitor Document Scanner

Capacitor Document Scanner is a plugin that allows you to scan documents using both Android and iOS platforms. 

## Installation

To install the package, run the following commands:

```bash
npm install capacitor-document-scanner
npx cap sync
```

## Usage

Here is a basic example of how you can use the Capacitor Document Scanner in your project:

```typescript
import { Capacitor } from '@capacitor/core'
import { DocumentScanner } from 'capacitor-document-scanner'

const scanDocument = async