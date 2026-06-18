```markdown
---
title: "Using the capacitor-greatday-camera Package"
description: "This tutorial will guide you on how to use the capacitor-greatday-camera package with Capacitor."
created_at: "2022-01-01"
published: true
slug: capacitor-greatday-camera.git
---

# Using the capacitor-greatday-camera Package

To use the capacitor-greatday-camera package with your Capacitor project, follow these steps:

1. Install the package using npm:
    ```bash
    npm install capacitor-greatday-camera
    ```

2. Import the necessary modules in your code:
    ```javascript
    import { Camera } from 'capacitor-greatday-camera';
    ```

3. Use the Camera methods to interact with the device's camera. For example, you can take a picture:
    ```javascript
    Camera.getPicture().then((image) => {
        console.log('Image taken:', image);
    }).catch((error) => {
        console.error('Error taking picture:', error);
    });
    ```

4. Don't forget to handle permissions and platform-specific configurations as needed.

By following these steps, you can integrate the capacitor-greatday-camera package into your Capacitor project successfully.
```