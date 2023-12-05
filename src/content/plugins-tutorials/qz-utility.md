---
title: "Using qz-utility Package"
description: "In this tutorial, we will learn how to use the qz-utility package to accomplish various tasks in our application."
created_at: "2022-02-15"
published: true
slug: "qz-utility"
---

# Using qz-utility Package

In this tutorial, we will explore the qz-utility package and demonstrate its usage for common tasks in our application.

## Installation

To get started, we need to install the qz-utility package. Open your terminal and run the following command:

```bash
npm install qz-utility
```

## Importing qz-utility

Once the installation is complete, we can import the qz-utility package into our project. Add the following import statement to the file where you want to use the package:

```javascript
import qzUtility from 'qz-utility';
```

## Usage

Now, let's look at some common use cases for the qz-utility package.

### Case 1: Generating Random Numbers

The qz-utility package provides a convenient method to generate random numbers. To generate a random number, use the `qzUtility.getRandomNumber()` function:

```javascript
const randomNumber = qzUtility.getRandomNumber();
console.log(randomNumber);
```

### Case 2: Formatting Dates

Another useful feature of the qz-utility package is the ability to format dates. Let's say we have a date string in a specific format, and we want to convert it to a different format. We can use the `qzUtility.formatDate()` function:

```javascript
const dateString = '2022-02-15';
const formattedDate = qzUtility.formatDate(dateString, 'DD/MM/YYYY');
console.log(formattedDate);
```

### Case 3: Generating UUIDs

If you need to generate an RFC-4122 compliant UUID, the qz-utility package has got you covered. Use the `qzUtility.generateUUID()` function to generate a UUID:

```javascript
const uuid = qzUtility.generateUUID();
console.log(uuid);
```

## Conclusion

In this tutorial, we have covered some of the key features of the qz-utility package. We learned how to install the package, import it into our project, and use it for common tasks such as generating random numbers, formatting dates, and generating UUIDs. The qz-utility package provides a simple and efficient way to accomplish these tasks in our application.

Feel free to explore the official documentation of the qz-utility package for more details and additional functionalities.

Happy coding!