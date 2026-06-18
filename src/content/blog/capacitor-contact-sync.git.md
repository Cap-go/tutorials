```markdown
---
"title": "Using @blue-performance/capacitor-contact-sync Package",
"description": "This markdown tutorial provides a guide on how to use the @blue-performance/capacitor-contact-sync package in your Capacitor project. Learn how to sync contacts with your app using this plugin.",
"created_at": "2021-10-25",
"published": true,
"slug": "capacitor-contact-sync.git"
---

# Using @blue-performance/capacitor-contact-sync Package

The @blue-performance/capacitor-contact-sync package allows you to sync contacts with your Capacitor project easily. Follow the steps below to integrate and use this package in your project.

1. **Installation**
   - Install the package using npm:
     ```bash
     npm install @blue-performance/capacitor-contact-sync
     ```

2. **Usage**
   - Import and initialize the plugin in your code:
     ```typescript
     import { CapacitorContactSync } from '@blue-performance/capacitor-contact-sync';

     const contactSync = new CapacitorContactSync();
     ```

   - Use the available methods to sync contacts:
     ```typescript
     // Example of syncing contacts
     contactSync.syncContacts().then((result) => {
       console.log(result);
     }).catch((error) => {
       console.error(error);
     });
     ```
  
3. **Sync Contacts**
   - The `syncContacts` method is used to sync contacts with the app.

4. **Additional Functionality**
   - Explore more methods and features available in the @blue-performance/capacitor-contact-sync package to enhance contact syncing capabilities in your app.
``` 
