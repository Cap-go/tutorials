---
"title": "Using cap-camera-permission package",
"description": "Tutorial on how to use the cap-camera-permission package with Capacitor",
"created_at": "2022-01-21",
"published": true,
"slug": "cap-camera-permission"
---

## Using cap-camera-permission Package

1. Install the package:

   ```bash
   npm i cap-camera-permission
   ```

2. Sync the project:

   ```bash
   npx cap sync
   ```

3. For Android, add the required permission in your AndroidManifest.xml:

   ```xml
   <uses-permission android:name="android.permission.CAMERA"/>
   ```

4. Import the capCameraPermission class to your MainActivity:

   ```java
   // Initializes the Bridge
   this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {{
     // Additional plugins you've installed go here
     add(CapCameraPermission.class);
   }});
   ```

5. Use the cap-camera-permission plugin in your application to manage camera permissions effectively with Capacitor.