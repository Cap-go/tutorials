---
title: "Using cap-feathersjs Package"
description: "This tutorial will guide you on how to use the cap-feathersjs package in your application."
created_at: "2022-01-10"
published: true
slug: cap-feathersjs
---

# Using cap-feathersjs Package

This tutorial will guide you on how to use the cap-feathersjs package in your application.

## Table of Contents

- [Introduction](#introduction)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Creating a FeathersJS Application](#creating-a-feathersjs-application)
- [Handling Authentication](#handling-authentication)
- [Creating Services](#creating-services)
- [Consuming Services](#consuming-services)
- [Conclusion](#conclusion)

## Introduction

cap-feathersjs is a package that integrates the FeathersJS framework with Capacitor, allowing you to build cross-platform mobile and web applications using a single codebase. It provides a seamless experience for developing APIs, handling authentication, and consuming services in your application.

In this tutorial, we will walk you through the process of setting up a FeathersJS application, handling authentication, creating services, and consuming those services in your application using the cap-feathersjs package.

## Prerequisites

Before getting started, make sure you have the following prerequisites:

- Node.js installed on your machine
- Capacitor and Ionic CLI installed globally
- Basic knowledge of JavaScript and web development concepts
- Familiarity with FeathersJS and Capacitor frameworks

## Installation

To install the cap-feathersjs package, run the following command in your project directory:

```bash
npm install cap-feathersjs --save
```

This will add the cap-feathersjs package as a dependency in your project.

## Creating a FeathersJS Application

To create a new FeathersJS application, follow these steps:

1. Create a new directory for your project:

   ```bash
   mkdir my-feathers-app
   cd my-feathers-app
   ```

2. Initialize a new FeathersJS application:

   ```bash
   npx feathers generate app
   ```

3. Follow the prompts to set up your FeathersJS application. Make sure you choose the necessary options for your project.

4. Once the FeathersJS application is created, you can start the development server:

   ```bash
   npm start
   ```

   This will start the FeathersJS server at http://localhost:3030.

## Handling Authentication

cap-feathersjs provides built-in support for handling authentication in your application. To enable authentication, follow these steps:

1. Install the necessary dependencies:

   ```bash
   npm install @feathersjs/authentication-local @feathersjs/authentication-jwt
   ```

2. Configure the authentication strategy in your FeathersJS application. Refer to the FeathersJS documentation for more information on configuring authentication strategies.

3. Use the `cap-feathersjs` package to integrate authentication with Capacitor in your front-end application. Follow the provided documentation and examples to handle user authentication using Capacitor's APIs.

## Creating Services

FeathersJS allows you to create services to handle different parts of your application, such as handling database operations and business logic. To create a new service, follow these steps:

1. Generate a new service using the FeathersJS CLI:

   ```bash
   npx feathers generate service
   ```

2. Follow the prompts to set up the service. Choose the necessary options based on your application's requirements.

3. Customize the service code and implement the necessary functionality based on your application's needs.

4. Start the FeathersJS server to make the service available at the specified endpoint.

## Consuming Services

To consume services in your front-end application, use the `cap-feathersjs` package to connect to the FeathersJS server and interact with the services. Follow the documentation and examples provided by the package to learn how to consume services in your application.

## Conclusion

In this tutorial, you learned how to use the cap-feathersjs package to integrate FeathersJS with Capacitor in your application. You learned how to set up a FeathersJS application, handle authentication, create services, and consume those services in your front-end application.

Now you can leverage the power of FeathersJS and Capacitor to build cross-platform applications with ease. Experiment with different features and explore the capabilities of the cap-feathersjs package to enhance your application further.