---
title: "Using @openforge/capacitor-bloomreach-engagement Package"
description: "Tutorial on how to use the @openforge/capacitor-bloomreach-engagement package to integrate Bloomreach Engagement with Capacitor apps."
created_at: 2021-11-05
published: true
slug: capacitor-bloomreach-engagement.git
locale: en
---

# Using @openforge/capacitor-bloomreach-engagement Package

In this tutorial, we will walk through the steps to integrate Bloomreach Engagement with Capacitor apps using the @openforge/capacitor-bloomreach-engagement package.

### Step 1: Installation of the Package

1. **Installation:**
   
    ```bash
    npm install @openforge/capacitor-bloomreach-engagement
    ```

### Step 2: Configuration

1. **Initialization:**
    
    - Include the following code snippet in your `capacitor.config.json` file:
    
    ```json
    {
        "plugins": {
            "BloomreachEngagement": {
                "providerKey": "YOUR_PROVIDER_KEY"
            }
        }
    }
    ```

### Step 3: Usage

1. **Initialization:**
    
    - Make sure to initialize the plugin in your application code.
    
    ```typescript
    import { BloomreachEngagement } from '@openforge/capacitor-bloomreach-engagement';
    
    const initializeBloomreach = async () => {
        const { BloomreachEngagement } = Plugins;
        await BloomreachEngagement.initialize();
    };
    ```

2. **Sending Events:**
    
    - Use the plugin to send events to Bloomreach Engagement.
    
    ```typescript
    import { BloomreachEngagement } from '@openforge/capacitor-bloomreach-engagement';
    
    const sendEvent = async (eventName: string, eventProperties: any) => {
        await BloomreachEngagement.sendEvent({ name: eventName, properties: eventProperties });
    };
    ```

### Conclusion

By following the steps outlined in this tutorial, you can easily integrate Bloomreach Engagement with your Capacitor apps using the @openforge/capacitor-bloomreach-engagement package.
