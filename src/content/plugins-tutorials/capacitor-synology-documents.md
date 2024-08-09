```markdown
---
"title": "Using capacitor-synology-documents Package",
"description": "This tutorial will guide you on how to use the capacitor-synology-documents package to interact with Synology Documents API.",
"created_at": "2023-10-30",
"published": true,
"slug": "capacitor-synology-documents"
---

# Using capacitor-synology-documents Package

This tutorial will show you how to utilize the `capacitor-synology-documents` package to interact with Synology Documents API.

## Installation

```bash
npm install capacitor-synology-documents
npx cap sync
```

## Usage

1. Import the package in your code:

```ts
import {SynologyDocs} from "capacitor-synology-documents";
```

2. Configure the Synology IP address:

```ts
SynologyDocs.configure('synology ip');
```

3. Authenticate with your Synology credentials:

```ts
SynologyDocs.auth('username', 'password', 'otp (optional)');
```

4. Start using the available API functions as needed.

## Available API Functions

### `configure(url: string)`

Configures the URL for your Synology server.

### `auth(username: string, password: string, otp_code?: string)`

Authenticates your Synology account with optional OTP code.

### `list(path: string)`

Lists the folders in the specified path.

### `rename(path: string, newName: string)`

Renames a file or folder in the specified path.

### `delete(path: string)`

Deletes a file or folder in the specified path.

### `createFolder(path: string, name: string, force_parent?: boolean)`

Creates a new folder with the specified name.

### `getinfo(path: string)`

Gets information about a file or folder in the specified path.

### `download(path: string)`

Downloads a file from the specified path.

### `upload(path: string, data: string)`

Uploads a file to the specified path with the provided data.

```

```