---
"title": "How to Use @aparajita/capacitor-logger Package"
"description": "A step-by-step guide on using the @aparajita/capacitor-logger package in your Capacitor apps."
"created_at": "2022-01-15"
"published": true
"slug": "capacitor-logger.git"
---

# How to Use @aparajita/capacitor-logger Package 

The @aparajita/capacitor-logger package allows you to easily incorporate logging functionality into your Capacitor applications. This tutorial will guide you through the process of setting up the logger and using it in your app.

## Setting up the Logger

1. First, install the @aparajita/capacitor-logger package in your project:

   ```bash
   npm install @aparajita/capacitor-logger
   ```

2. After installing the package, you will need to instantiate the logger in your code. For a single logger instance for the entire app, you can create a separate file for the logger setup:

   ```typescript
   // logger.ts
   import { Logger } from '@aparajita/capacitor-logger'

   const logger = new Logger('MyApp')
   export default logger
   ```

   Then, import the logger into your code:

   ```typescript
   import logger from '@/logger'

   logger.info('Hello world!')
   ```

## Using the Logger

3. Once you have set up the logger, you can start using it to log messages in your application. Here is an example of logging a message in Swift:

   ```swift
   import AparajitaCapacitorLogger

   let logger = Logger(withTag: "MyPlugin")
   logger.info("Hello world!")
   ```

   And here is an example of logging a message in Android:

   ```java
   import com.aparajita.capacitor.logger.*;

   Logger logger = new Logger("MyPlugin");
   ```

   Customizing and using the logger with different tags and in various parts of your app is also possible with the @aparajita/capacitor-logger package.

This tutorial provides a basic overview of how to install, set up, and use the @aparajita/capacitor-logger package in your Capacitor projects. Feel free to explore additional features and configurations offered by the package for more advanced logging capabilities.
```