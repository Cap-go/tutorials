# @mangosoft/ionic-capacitor-lotame Package Tutorial

---

---
title: "Tutorial: Using @mangosoft/ionic-capacitor-lotame Package"
description: "This tutorial will guide you through the process of using the @mangosoft/ionic-capacitor-lotame package in your Ionic Capacitor project."
created_at: "2022-06-15"
published: true
slug: ionic-capacitor-lotame

---

## Introduction

The @mangosoft/ionic-capacitor-lotame package is a powerful tool that provides integration with the Lotame Data Management Platform (DMP) in your Ionic Capacitor project. This tutorial will walk you through the installation and usage of this package.

## Prerequisites

Before you begin, make sure you have the following installed:

- Node.js and npm
- Ionic CLI
- Capacitor CLI

## Installation

To install the @mangosoft/ionic-capacitor-lotame package, follow these steps:

1. Open your terminal or command prompt.
2. Navigate to your Ionic Capacitor project directory.
3. Run the following command to install the package:

```bash
npm install @mangosoft/ionic-capacitor-lotame
```

## Usage

Once you have installed the package, you can start using it in your project. Follow these steps to get started:

1. Import the necessary modules and initialize the package. Open the `app.module.ts` file in your project and add the following code:

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LotameModule } from '@mangosoft/ionic-capacitor-lotame';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, LotameModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

2. Use the Lotame service in your component. Open any component file where you want to use the Lotame functionality and import the Lotame service:

```typescript
import { Component } from '@angular/core';
import { LotameService } from '@mangosoft/ionic-capacitor-lotame';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private lotameService: LotameService) {}

  ngOnInit() {
    // Use the lotameService methods here
  }
}
```

3. Now you can start using the Lotame service methods to interact with the Lotame DMP. Here are some example methods you can use:

```typescript
// Initialize the Lotame SDK
this.lotameService.initialize('YOUR_API_KEY');

// Set user ID
this.lotameService.setUserId('USER_ID');

// Track page view
this.lotameService.trackPageView('PAGE_NAME');

// Track custom event
this.lotameService.trackEvent('EVENT_NAME', { param1: 'value1', param2: 'value2' });
```

4. Customize the Lotame configuration. You can pass additional configuration options while initializing the Lotame SDK. Here's an example:

```typescript
this.lotameService.initialize('YOUR_API_KEY', {
  debug: true,
  consent: true,
  countryCode: 'US',
});
```

## Conclusion

In this tutorial, you have learned how to install and use the @mangosoft/ionic-capacitor-lotame package in your Ionic Capacitor project. You can now integrate the Lotame DMP into your app and start leveraging the powerful audience data management capabilities it provides. Happy coding!

---

This blog post was last updated on 2022-06-15.