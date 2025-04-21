---
"title": "Using @ua/capacitor-airship Package Tutorial"
"description": "This tutorial will guide you through using the @ua/capacitor-airship package in your Capacitor project."
"created_at": "September 30, 2021"
"published": true
"slug": "capacitor-airship.git"
---

## How to Use @ua/capacitor-airship Package

To begin using the @ua/capacitor-airship package in your Capacitor project, follow these steps:

1. Install the package using npm:
   ```bash
   npm install @ua/capacitor-airship
   ```

2. Import the required modules in your project:
   ```javascript
   import { Airship, AirTrafficController } from '@ua/capacitor-airship';
   ```

3. Initialize the Airship SDK with your configurations:
   ```javascript
   Airship.init({
     appId: 'YOUR_APP_ID',
     appKey: 'YOUR_APP_KEY',
     token: 'YOUR_TOKEN'
   });
   ```

4. Utilize the features provided by the Airship package in your project.

That's it! You have successfully integrated the @ua/capacitor-airship package into your Capacitor application.
```
```