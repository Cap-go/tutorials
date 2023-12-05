---
title: "Using Realm with @capacitor-community/realm"
description: "A tutorial on how to use the @capacitor-community/realm package to work with Realm in your Capacitor applications."
created_at: "2022-01-12"
published: true
slug: "realm"
---

# Using Realm with @capacitor-community/realm

In this tutorial, we will learn how to use the @capacitor-community/realm package to work with Realm in your Capacitor applications. Realm is a mobile database that enables you to build reactive, real-time applications with ease. With the @capacitor-community/realm package, you can easily integrate Realm into your Capacitor projects.

## Installation

To get started, you'll need to install the @capacitor-community/realm package. You can do this by running the following command:

```bash
npm install @capacitor-community/realm
```

or if you prefer using yarn:

```bash
yarn add @capacitor-community/realm
```

Next, you'll need to sync the native files by running the following command:

```bash
npx cap sync
```

On iOS, no further steps are needed.

On Android, you'll need to make changes to the `MainActivity.java` file. Open the `MainActivity.java` file and import the `Realm` class from the `@capacitor-community/realm` package:

```java
import com.getcapacitor.community.realm.Realm;
```

Then, initialize the bridge and add the `Realm` class to the list of plugins:

```java
@Override
public void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);

    this.init(
        savedInstanceState,
        new ArrayList<Class<? extends Plugin>>() {
            {
                add(Realm.class);
            }
        }
    );
}
```

With the installation and setup completed, we can now proceed to use Realm in our Capacitor application.

## Using Realm

To use Realm in your Capacitor application, you'll first need to import the `Realm` class from the `@capacitor-community/realm` package. You can do this by adding the following import statement to your TypeScript/JavaScript file:

```javascript
import { Realm } from '@capacitor-community/realm';
```

Once imported, you can use the various methods provided by the `Realm` class to interact with your Realm database. Here are some examples of common operations:

### Creating a Realm Instance

To create a new Realm instance, use the `open` method:

```javascript
const realm = await Realm.open({ schema: [YourSchema] });
```

### Writing Data

To write data to your Realm database, you can use the `write` method:

```javascript
realm.write(() => {
    // Perform write operations here
});
```

### Querying Data

To query data from your Realm database, use the `objects` method:

```javascript
const results = realm.objects('YourObject');
```

### Listening for Changes

To listen for changes in your Realm database, you can use the `addListener` method:

```javascript
const listener = realm.addListener('change', () => {
    // Handle database changes here
});
```

### Closing the Realm

When you're done using the Realm instance, don't forget to close it:

```javascript
realm.close();
```

These are just a few examples of what you can do with @capacitor-community/realm package. Be sure to check out the official documentation for more detailed information on how to use Realm with Capacitor.

## Conclusion

In this tutorial, we learned how to install and use the @capacitor-community/realm package to work with Realm in Capacitor applications. We covered the installation process, setting up the native files, and using various methods provided by the Realm class to interact with the database. Now you can leverage the power of Realm to create reactive and real-time applications with ease.

Happy coding!