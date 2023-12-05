Sure! Here's a markdown tutorial for using the `ion-pkg` package:

```markdown
---
title: "Using ion-pkg: A Tutorial"
description: "This tutorial will guide you through the process of using the ion-pkg package to enhance your Ionic Capacitor app."
created_at: "2021-12-01"
published: true
slug: ion-pkg
---

# Using ion-pkg: A Tutorial

In this tutorial, we will explore the functionalities of the `ion-pkg` package and learn how to integrate it into your Ionic Capacitor app.

## Step 1: Installation

First, we need to install the `ion-pkg` package using npm. Open your terminal and run the following command:

```bash
npm install ion-pkg
```

## Step 2: Importing ion-pkg

Once the installation is complete, we can import `ion-pkg` into our project. Open your `app.component.ts` file and add the following import statement at the top:

```typescript
import { IonPkg } from 'ion-pkg';
```

## Step 3: Using ion-pkg Functions

Now that we have imported `ion-pkg`, we can start using its functions. For example, let's say we want to use the `ion-pkg` function `doSomething()` in our component. Here's how you can do it:

```typescript
import { Component } from '@angular/core';
import { IonPkg } from 'ion-pkg';

@Component({
  selector: 'app-root',
  template: `
    <button (click)="doSomething()">Click Me</button>
  `
})
export class AppComponent {
  constructor(private ionPkg: IonPkg) {}

  doSomething() {
    this.ionPkg.doSomething();
  }
}
```

## Step 4: Configuring ion-pkg

Sometimes, `ion-pkg` requires some configuration. You can provide the configuration in the `app.module.ts` file. Here's an example:

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonPkgModule } from 'ion-pkg';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonPkgModule.forRoot({ configOption: 'value' })],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

That's it! You have successfully integrated and used the `ion-pkg` package in your Ionic Capacitor app.

Remember to consult the `ion-pkg` documentation for more details and usage examples.

Happy coding!
```

Please note that the date and time in the frontmatter `created_at` field will be the current date and time when generating the tutorial.