```markdown
---
"title": "Tutorial: Using Serial Connection Capacitor Package"
"description": "Learn how to utilize the serial connection capacitor package to connect and communicate with devices via serial port."
"created_at": "2021-12-01"
"published": true
"slug": "serial_connection_capacitor.git"
---

## Introduction to Serial Connection Capacitor Package

The `serialconnectioncapacitor` package provides a seamless way to establish serial connections between devices using Capacitor.

### Installation

To get started with the `serialconnectioncapacitor` package, follow these steps:

1. **Installation:** First, install the package by running the following command:

    ```bash
    npm install serialconnectioncapacitor
    ```

2. **Sync Capacitor:** After installing the package, synchronize Capacitor to ensure the package is included in your project:

    ```bash
    npx cap sync
    ```

### API Reference

The `serialconnectioncapacitor` package exposes the following methods to manage serial connections:

#### `connectSerial()`

```typescript
connectSerial(options: { baudRate: number; port: string; }) => Promise<void>
```

| Parameter     | Type                          | Description                                  |
| ------------- | ----------------------------- | -------------------------------------------- |
| **`options`** | <code>{ baudRate: number, port: string }</code> | Specifies the baud rate and port for the connection. |

**Returns:** <code>Promise&lt;void&gt;</code>

#### `sendData()`

```typescript
sendData(data: string) => Promise<void>
```

| Parameter | Type     | Description          |
| --------- | -------- | -------------------- |
| **`data`** | `string` | Data to be sent over the serial connection. |

**Returns:** <code>Promise&lt;void&gt;</code>

### Getting Started

Now that you have installed the `serialconnectioncapacitor` package and reviewed the available API methods, you can begin establishing serial connections and sending data between devices in your Capacitor project.

Happy coding!
```
```