---
title: "Using capacitor-oss-notices package"
description: "A tutorial on how to use the capacitor-oss-notices package in your Capacitor project to display Open Source licenses"
created_at: "2022-01-01"
published: true
slug: "capacitor-oss-notices"
---

# Using capacitor-oss-notices package

The capacitor-oss-notices package provides a native bridge for displaying Open Source licenses from Gradle and Pod dependencies in your Capacitor project. This tutorial will guide you through the process of installing and using the package in your project.

## Installation

To install the capacitor-oss-notices package, use npm:

```bash
npm install capacitor-oss-notices
npx cap sync
```

## Android setup

Add the following buildscript dependency to your Android root's build.gradle file:

```groovy
classpath 'com.google.android.gms:oss-licenses-plugin:0.10.4'
```

At the end of your app's build.gradle file, apply the com.google.android.gms.oss-licenses-plugin:

```groovy
apply plugin: 'com.google.android.gms.oss-licenses-plugin'
```

## iOS setup

Add a post install hook to your Podfile:

```ruby
post_install do |installer|
  pods_dir = File.dirname(installer.pods_project.path)
  at_exit { `ruby #{pods_dir}/Carte/Sources/Carte/carte.rb configure` }
end
```

## Usage

To display the Open Source licenses, you can use the showNotices() method provided by the capacitor-oss-notices package. Here is an example:

```typescript
import { Plugins } from '@capacitor/core';

const { OssNotices } = Plugins;

async function displayLicenses() {
  await OssNotices.showNotices();
}

displayLicenses();
```

The showNotices() method returns a Promise that resolves to any value.

That's it! Now you can use the capacitor-oss-notices package to display Open Source licenses in your Capacitor project.

In this tutorial, we learned how to install the capacitor-oss-notices package, set it up for both Android and iOS, and how to use the showNotices() method to display Open Source licenses.

Have fun coding!

