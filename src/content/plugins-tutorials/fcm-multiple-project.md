---
title: "Using fcm-multiple-project"
description: "A tutorial on how to use the fcm-multiple-project package for sending Firebase Cloud Messaging (FCM) notifications to multiple projects"
created_at: "2021-10-04"
published: true
slug: "fcm-multiple-project"
---

# Using fcm-multiple-project

In this tutorial, we will learn how to use the fcm-multiple-project package to send Firebase Cloud Messaging (FCM) notifications to multiple projects. This package provides a convenient way to manage and send notifications to different projects without having to manually configure each project individually.

## Prerequisites

Before we begin, make sure you have the following prerequisites:

- Node.js and npm installed on your machine
- An active Firebase project with FCM enabled
- Basic knowledge of JavaScript and Firebase

## Installation

To install the fcm-multiple-project package, run the following command in your command line:

```bash
npm install fcm-multiple-project
```

## Configuration

1. Create a new JavaScript file, e.g., `index.js`, and require the fcm-multiple-project package:

```javascript
const fcmMultipleProject = require('fcm-multiple-project');
```

2. Initialize the fcm-multiple-project package with the configuration for each of your Firebase projects:

```javascript
const config = {
  project1: {
    apiKey: 'API_KEY',
    messagingSenderId: 'SENDER_ID',
    appId: 'APP_ID'
  },
  project2: {
    apiKey: 'API_KEY',
    messagingSenderId: 'SENDER_ID',
    appId: 'APP_ID'
  },
  // Add configuration for additional projects if needed
};

fcmMultipleProject.initialize(config);
```

Make sure to replace `API_KEY`, `SENDER_ID`, and `APP_ID` with the corresponding values from your Firebase projects.

3. Send a notification to a specific project:

```javascript
const project = 'project1'; // Replace with the project name you want to send the notification to

const notification = {
  title: 'New Message',
  body: 'You have a new message.'
};

fcmMultipleProject.sendNotification(project, notification)
  .then(response => {
    console.log('Notification sent successfully:', response);
  })
  .catch(error => {
    console.error('Error sending notification:', error);
  });
```

Replace `project1` with the name of the project you want to send the notification to. Customize the `title` and `body` of the notification as needed.

## Conclusion

In this tutorial, we have learned how to use the fcm-multiple-project package to send Firebase Cloud Messaging (FCM) notifications to multiple projects. We covered the installation process, configuration steps, and sending notifications to specific projects. With this package, you can easily manage and send notifications to different Firebase projects from a single codebase.

Remember to refer to the official documentation of the fcm-multiple-project package for more advanced usage and additional features. Happy coding!