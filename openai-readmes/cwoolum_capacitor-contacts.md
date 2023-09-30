# Capacitor Contact Manager

![npm](https://img.shields.io/npm/v/capacitor-contact-manager)

This is a project for managing contacts in Capacitor Apps.

## Features

| Feature                            | iOS | Android |
| ---------------------------------- | --- | ------- |
| Retrieve list of contacts          | ✅  | ✅      |
| Retrieve filtered list of contacts | ✅  | ✅      |
| Create Contact                     |     |         |
| Edit Contact                       |     |         |

## Installation

```bash
npm i capacitor-contact-manager
```

### iOS Only

In your `info.plist`, be sure to add a message for `NSContactsUsageDescription`

### Usage

```javascript
import { Plugins } from '@capacitor/core'
const { ContactManager } = Plugins

const { data } = await ContactManager.getContacts({ query: searchTerm })
```

See the full docs [here](https://cwoolum.github.io/capacitor-contacts/)
