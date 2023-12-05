---
title: "Using the document-detector-ionic-nosentry package"
description: "A tutorial on how to use the document-detector-ionic-nosentry package in your Ionic app"
created_at: "2022-01-01"
published: true
slug: "document-detector-ionic"
---

# Using the document-detector-ionic-nosentry package

In this tutorial, we will learn how to use the document-detector-ionic-nosentry package in your Ionic app. The document-detector-ionic-nosentry package allows you to easily integrate document detection functionality into your Ionic app, enabling users to scan and process documents using their device's camera.

## Installation

To get started, let's install the document-detector-ionic-nosentry package in your Ionic app.

1. Open your terminal and navigate to the root folder of your Ionic app.
2. Run the following command to install the package:

```
npm install document-detector-ionic-nosentry
```

## Usage

Once the package is installed, you can start using the document detection functionality in your Ionic app.

1. Import the `DocumentDetector` module from the package:

```typescript
import { DocumentDetector } from 'document-detector-ionic-nosentry';
```

2. Implement the document detection functionality in your app. For example, you can create a button that triggers the document detection process:

```html
<ion-button (click)="scanDocument()">Scan Document</ion-button>
```

```typescript
import { Component } from '@angular/core';
import { DocumentDetector } from 'document-detector-ionic-nosentry';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private documentDetector: DocumentDetector) {}

  public async scanDocument(): Promise<void> {
    const document = await this.documentDetector.scan();
    // Process the scanned document here
    console.log(document);
  }

}
```

3. Build and run your Ionic app to test the document detection functionality.

## Conclusion

In this tutorial, we have learned how to use the document-detector-ionic-nosentry package in your Ionic app. We covered the installation process and demonstrated how to implement the document detection functionality in your app. You can now integrate document detection into your Ionic app and provide users with the ability to scan and process documents using their device's camera.