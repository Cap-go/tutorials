# Tutorial: Using cxm-capacitor-http Package

---

title: "How to Use cxm-capacitor-http Package"
description: "This tutorial will guide you on how to use the cxm-capacitor-http package to make HTTP requests in your Capacitor app."
created_at: "2021-09-15"
published: true
slug: "cxm-capacitor-http"

---

In this tutorial, we will learn how to use the `cxm-capacitor-http` package to make HTTP requests in a Capacitor app. 

## Step 1: Installation

First, let's start by installing the `cxm-capacitor-http` package in your Capacitor project. Open your terminal and navigate to your project directory. Run the following command:

```bash
npm install cxm-capacitor-http
```

This will install the package and its dependencies in your project.

## Step 2: Importing the Package

Next, we need to import the `cxm-capacitor-http` package in our code. Open the file where you want to use the package and add the following import statement:

```javascript
import { Http } from 'cxm-capacitor-http';
```

## Step 3: Making HTTP Requests

Now, let's see how to make HTTP requests using the `cxm-capacitor-http` package. We will demonstrate a simple GET request. Add the following code snippet to make a GET request to a sample API:

```javascript
const http = new Http();
const url = 'https://api.example.com/users';

async function getUsers() {
  try {
    const response = await http.get(url);
    const data = response.data;
    
    console.log(data); // Handle or display the retrieved data here
  } catch (error) {
    console.error(error); // Handle or display the error here
  }
}

getUsers();
```

In the above code, we create an instance of the `Http` class and then use the `get()` method to make a GET request to the specified URL. The response data is then extracted from the response object.

You can modify the URL and handle the response data according to your specific requirements.

## Step 4: Adding Headers and Query Parameters

The `cxm-capacitor-http` package also allows you to add headers and query parameters to your HTTP requests. Here's an example of how to do it:

```javascript
const http = new Http();
const url = 'https://api.example.com/users';
const headers = {
  'Authorization': 'Bearer your_token_here',
};

async function getUsers() {
  try {
    const response = await http.get(url, { headers });
    const data = response.data;
    
    console.log(data); // Handle or display the retrieved data here
  } catch (error) {
    console.error(error); // Handle or display the error here
  }
}

getUsers();
```

In the above code, we pass the `headers` object as an optional parameter to the `get()` method. You can also pass query parameters in a similar way using the `params` option.

## Step 5: Handling Errors

The `cxm-capacitor-http` package handles HTTP errors by throwing an error object. You can catch and handle these errors using a try-catch block, as shown in the previous examples.

```javascript
try {
  // Make HTTP request
} catch (error) {
  console.error(error); // Handle or display the error here
}
```

You can then customize the error handling based on your application's needs.

## Conclusion

In this tutorial, we explored how to use the `cxm-capacitor-http` package to make HTTP requests in a Capacitor app. We learned how to install the package, import it into our code, make GET requests, add headers and query parameters, and handle errors.

Feel free to explore the [official documentation](https://github.com/example/cxm-capacitor-http) for more advanced usage and options of the `cxm-capacitor-http` package.

Happy coding!