```markdown
---
"title": "Using capacitor-ssl-pinning package for SSL pinning in Capacitor apps"
"description": "A tutorial on implementing SSL pinning in Capacitor applications using the capacitor-ssl-pinning package."
"created_at": "October 27, 2021"
"published": true
"slug": "capacitor-ssl-pinning.git"
---

# Using capacitor-ssl-pinning Package for SSL Pinning

To implement SSL pinning in your Capacitor applications, you can use the capacitor-ssl-pinning package. Follow the steps below to get started:

1. Install the capacitor-ssl-pinning package:
   ```bash
   npm install capacitor-ssl-pinning
   ```

2. Import the package in your Capacitor app:
   ```typescript
   import 'capacitor-ssl-pinning';
   ```

3. Implement SSL pinning in your code. Here's an example of how you can do this:
   ```typescript
   import { Plugins } from '@capacitor/core';
   const { SSLPinning } = Plugins;

   const verifySSL = async () => {
       try {
           const response = await fetch('https://api.example.com', {
               headers: {
                   'ssl-pinning': 'sha256/certificate-hash'
               }
           });
           
           if (response.ok) {
               // SSL pinning verification successful
           } else {
               // SSL pinning verification failed
           }
       } catch (error) {
           console.error(error);
       }
   };
   ```

4. Test your SSL pinning implementation thoroughly to ensure it works as expected.

By following these steps, you can secure your Capacitor app communication using SSL pinning with the capacitor-ssl-pinning package.
```