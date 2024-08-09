```markdown
---
title: Using the referrer-plugin Package Tutorial
description: A step-by-step guide on how to use the referrer-plugin package to retrieve and use the Google Play install referrer in your Capacitor project.
created_at: 2022-01-28
published: true
slug: referrer-plugin
---

# Using the referrer-plugin Package Tutorial

This tutorial will guide you on how to use the referrer-plugin package to retrieve and utilize the Google Play install referrer in your Capacitor project.

## Installation

First, install the referrer-plugin package by running the following command:

```bash
npm install @dudod/capacitor-plugin-install-referrer
npx cap sync
```

## Android Configuration

Next, register the plugin in your MainActivity's onCreate method by adding the following lines of code:

```java
import com.togetherprice.capacitor.installreferrer.InstallReferrerPlugin;

public class MainActivity extends BridgeActivity {
  @Override
  public void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);

    registerPlugin(InstallReferrerPlugin.class);
  }
}
```

## Retrieving the Referrer

To retrieve the install referrer, you can use the following code snippet:

```javascript
import { InstallReferrer } from '@dudod/capacitor-plugin-install-referrer';

const referrer = await InstallReferrer.getReferrerDetails();
console.log('Install Referrer:', referrer);
```

## Testing

You can test the installation by adding a referrer parameter to any URLs linking directly to the Google Play Store and setting the value of that parameter. Use the following example URL format:

```
https://play.google.com/store/apps/details?id=com.example.application&referrer=utm_source%3Dgoogle%26utm_medium%3Dcpc%26utm_term%3Drunning%252Bshoes%26utm_content%3Dlogolink%26utm_campaign%3Dspring_sale
```

Install the app from the store if the app is released or install the app locally. 

Now you are ready to start using the referrer-plugin package to enhance your Capacitor project with Google Play install referrer functionality.
```
```
