---
title: "Ionic Storage Tutorial"
description: "A tutorial on how to use the @ionic/storage package for key-value storage in Ionic apps."
created_at: "2021-10-20"
published: true
slug: ionic-storage
---

# Ionic Storage Tutorial

This tutorial will guide you through the process of using the @ionic/storage package to implement key-value storage in your Ionic apps.

## Installation

To get started, install the @ionic/storage package by running the following command in your project directory:

```shell
npm install @ionic/storage
```

If you're using Angular, install the @ionic/storage-angular library instead:

```shell
npm install @ionic/storage-angular
```

If you prefer to use SQLite as the storage engine, see the SQLite Installation instructions in the documentation.

## Usage

### With React, Vue, Vanilla JavaScript

In your JavaScript file, import the Storage class from the @ionic/storage package and create a new instance of it. Then, call the `create()` method to initialize the storage.

```javascript
import { Storage } from '@ionic/storage';

const store = new Storage();
await store.create();
```

You can now use the `store` object to set, get, or remove key-value pairs in your storage.

### With Angular

To use the @ionic/storage package in an Angular project, you need to import the IonicStorageModule and inject the Storage class.

First, edit your NgModule declaration in `src/app/app.module.ts` and import the IonicStorageModule:

```typescript
import { IonicStorageModule } from '@ionic/storage-angular';

@NgModule({
  imports: [IonicStorageModule.forRoot()],
})
export class AppModule {}
```

Next, inject the Storage class into a component and call the `create()` method to initialize the storage:

```typescript
import { Component } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
})
export class AppComponent {
  constructor(private storage: Storage) {}

  async ngOnInit() {
    await this.storage.create();
  }
}
```

You can now use the `storage` object in your component to interact with the storage.

## API

The Storage class provides several methods for working with the storage:

- `get(key: string): Promise<any>`: Retrieves the value associated with the given key.
- `set(key: string, value: any): Promise<void>`: Sets the value for the given key.
- `remove(key: string): Promise<void>`: Removes the key-value pair associated with the given key.
- `clear(): Promise<void>`: Clears all key-value pairs in the storage.

Refer to the @ionic/storage documentation for more details on the available methods and their usage.

## Conclusion

In this tutorial, you learned how to use the @ionic/storage package to implement key-value storage in your Ionic apps. You learned how to install the package, initialize the storage, and perform basic operations like setting, getting, and removing key-value pairs. The Storage class provides a simple and convenient way to manage application data in Ionic apps.

Feel free to explore the @ionic/storage documentation for more advanced features and customization options.

Happy coding!
