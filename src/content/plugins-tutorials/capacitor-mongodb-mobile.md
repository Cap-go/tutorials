---
title: "Using @hamstudy/capacitor-mongodb-mobile Package"
description: "A tutorial on how to use the @hamstudy/capacitor-mongodb-mobile package for MongoDB integration in Capacitor apps."
created_at: "2021-09-27"
published: true
slug: "capacitor-mongodb-mobile"
---

# Using @hamstudy/capacitor-mongodb-mobile Package

MongoDB Mobile Capacitor Plugin is a package designed to enable the use of MongoDB in Capacitor apps. MongoDB is a popular database choice for small JavaScript-based projects, making it a great fit for many Capacitor apps. This package aims to provide a comprehensive interface for utilizing MongoDB Mobile in a Capacitor app.

## Installation

To start using the @hamstudy/capacitor-mongodb-mobile package, you can install it via npm:

```
npm install @hamstudy/capacitor-mongodb-mobile
```

## Basic Usage

Once you have installed the package, you can import it into your Capacitor app and start using its features. Here's an example of how to use the plugin to save a document in the MongoDB database:

```javascript
import { Plugins } from "@capacitor/core";
const { CapacitorMongoDBMobile } = Plugins;

// Define the document to be saved
const document = {
  _id: {$oid: "5d12cabe21c6fa8a7deb6b9d"},
  name: "This is a cool thing",
  number: {$numberInt: "127"},
  date: {$date: {$numberLong: "1557790402"}}
};

// Call the plugin method to save the document
const result = await CapacitorMongoDBMobile.saveDocument({
  collection: "myCollection",
  document: JSON.stringify(document),
});

// Check the result
if (result.success) {
  console.log("Document saved successfully");
} else {
  console.error("Failed to save document");
}
```

In the above example, we import the `CapacitorMongoDBMobile` plugin from the `@capacitor/core` package. We then define a document to be saved in the MongoDB database using the extended JSON format. We pass the document to the `saveDocument` method of the plugin, along with the name of the collection to save the document in. The result of the operation is captured in the `result` variable, and we can check the `success` property to determine if the document was saved successfully.

## Advanced Usage

The @hamstudy/capacitor-mongodb-mobile package provides a full-featured interface for interacting with MongoDB Mobile. It allows you to perform operations such as inserting, updating, deleting documents, querying the database, and more. You can refer to the [mongodb-mobile-client](https://github.com/HamStudy/mongodb-mobile-client) project for more information on the available methods and their usage.

## Conclusion

In this tutorial, we learned how to use the @hamstudy/capacitor-mongodb-mobile package to integrate MongoDB Mobile in a Capacitor app. We covered the installation process, basic usage, and touched on advanced features. With this knowledge, you can now leverage the power of MongoDB in your Capacitor projects.

If you encounter any issues or have further questions, feel free to reach out for help. Happy coding!
