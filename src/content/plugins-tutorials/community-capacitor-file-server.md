---
title: "Using @digaus/file-server Package"
description: "A tutorial on how to use the @digaus/file-server package to set up a file server in Capacitor."
created_at: "2022-10-27"
published: true
slug: "community-capacitor-file-server"
---

# Using @digaus/file-server Package

In this tutorial, we will learn how to use the `@digaus/file-server` package to set up a file server in Capacitor. The `@digaus/file-server` package provides convenient methods to create a file server and handle file uploads in a Capacitor project. Let's get started!

## Step 1: Install the Package

To begin, make sure you have Capacitor installed in your project. If not, install Capacitor by running the following command:

```
npm install @capacitor/core @capacitor/cli
```

Next, install the `@digaus/file-server` package by running the following command:

```
npm install @digaus/file-server
```

## Step 2: Import and Initialize the File Server

In your Capacitor project, open the file where you want to set up the file server. Typically, this would be in your main `app.js` or `app.ts` file.

Import the necessary modules by adding the following lines at the top of your file:

```javascript
import { FileServer } from '@digaus/file-server';
import { Capacitor } from '@capacitor/core';
```

Next, initialize the file server by adding the following code:

```javascript
const fileServer = new FileServer({
  uploadUrl: 'http://localhost:3000/upload', // Replace with your server URL
});
fileServer.initialize();
```

Make sure to replace `http://localhost:3000/upload` with the URL where you want to handle file uploads on your server.

## Step 3: Handle File Uploads

To handle file uploads, we will add an event listener to the input element where users can select files to upload. Add the following code to the appropriate place in your file:

```javascript
const fileInput = document.getElementById('file-input');

fileInput.addEventListener('change', async (event) => {
  const files = event.target.files;
  if (files.length > 0) {
    const file = files[0];
    const response = await fileServer.uploadFile(file);
    console.log(response); // Handle the server response here
  }
});
```

Replace `file-input` with the ID of your file input element.

## Step 4: Start the File Server

Finally, start the file server by adding the following line of code:

```javascript
fileServer.start();
```

And that's it! Your file server is now set up and ready to handle file uploads in your Capacitor app. Remember to customize the server URL and handle the server response according to your specific requirements.

Congratulations on completing this tutorial! You have learned how to use the `@digaus/file-server` package to set up a file server in Capacitor.