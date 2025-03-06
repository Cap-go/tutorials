```markdown
---
"title": "Using Capacitor Logger Package",
"description": "A tutorial on how to use the @aparajita/capacitor-logger package to log messages in your Capacitor app.",
"created_at": "2022-01-15",
"published": true,
"slug": "capacitor-logger.git"
---

# Using Capacitor Logger Package

Capacitor Logger is a helpful package that allows you to easily log messages in your Capacitor app. Here is a step-by-step guide on how to use the @aparajita/capacitor-logger package in your project.

## Installation

To start using the Capacitor Logger package, you need to install it in your project. You can do this using npm:

```bash
npm install @aparajita/capacitor-logger
```

## Usage

### TypeScript (Capacitor Plugin)

1. Create a logger instance with a custom tag or plugin name:

```typescript
import { Plugins } from '@capacitor/core';
import { Logger } from '@aparajita/capacitor-logger';

const logger = new Logger('MyPlugin');
```

2. Log messages using the created logger:

```typescript
logger.info('This is an informational message');
logger.warn('This is a warning message');
logger.error('This is an error message');
```

### Swift (iOS)

1. Import the logger module in your Swift code:

```swift
import AparajitaCapacitorLogger
```

2. Create a logger instance with a tag:

```swift
let logger = Logger(withTag: "MyPlugin")
```

3. Use the logger to log messages:

```swift
logger.info("Informational message")
logger.warn("Warning message")
logger.error("Error message")
```

### Android (Java)

1. Import the logger module in your Android plugin code:

```java
import com.aparajita.capacitor.logger.Logger;
```

2. Create a logger instance with a tag:

```java
Logger logger = new Logger("MyPlugin");
```

3. Log messages using the logger:

```java
logger.info("Informational message");
logger.warn("Warning message");
logger.error("Error message");
```

By following these steps, you can effectively use the Capacitor Logger package in your Capacitor app to log messages for debugging and monitoring purposes.
```