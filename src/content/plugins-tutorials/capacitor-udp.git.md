---
"title": "Using @frontall/capacitor-udp Package"
"description": "A tutorial on how to use the @frontall/capacitor-udp package in Capacitor apps."
"created_at": "2023-10-18"
"published": true
"slug": "capacitor-udp.git"
---

# Using @frontall/capacitor-udp Package

Here is a tutorial on how to use the @frontall/capacitor-udp package in your Capacitor apps:

1. First, install the package in your Capacitor project:
   ```bash
   npm install @frontall/capacitor-udp
   ```

2. Import the package in your project:
   ```javascript
   import { UdpPlugin } from '@frontall/capacitor-udp';
   ```

3. Use the methods provided by the package. Here is an example of sending a UDP message:
   ```javascript
   const response = await UdpPlugin.send({ address: '192.168.0.1', port: 12345, message: 'Hello, UDP!' });
   console.log(response);
   ```

4. Remember to have the necessary permissions and configurations for using UDP in your app.

That's it! You are now ready to use the @frontall/capacitor-udp package in your Capacitor app.
```
```