---
title: "Using @calvinckho/capacitor-contact-picker Package"
description: "A tutorial on how to use the @calvinckho/capacitor-contact-picker package to easily access and manage contacts in your Capacitor app."
created_at: "2021-08-12"
published: true
slug: capacitor-contact-picker
---

# Using @calvinckho/capacitor-contact-picker Package

The @calvinckho/capacitor-contact-picker package is a powerful Capacitor plugin that allows you to access and manage contacts on a user's device. In this tutorial, we will guide you through the process of using this package to integrate contact picker functionality into your Capacitor app.

## Prerequisites

Before getting started, make sure you have the following dependencies installed:

- Node.js
- Capacitor

## Installation

To install the @calvinckho/capacitor-contact-picker package, run the following command in your project's root directory:

```bash
npm install @calvinckho/capacitor-contact-picker
```

## Add the Plugin to your Capacitor Project

To add the plugin to your Capacitor project, run the following command:

```bash
npx cap plugin add @calvinckho/capacitor-contact-picker
```

This command will add the necessary plugin files to your project.

## Usage

Now that the plugin is installed, you can start using it in your app.

### Import the Plugin

In your TypeScript file, import the plugin:

```typescript
import { CapacitorContactPicker } from '@calvinckho/capacitor-contact-picker';
```

### Request Permissions

Before accessing the contacts, you need to request the necessary permissions from the user.

```typescript
CapacitorContactPicker.requestPermissions().then(() => {
  // Permissions granted, proceed with accessing the contacts
}).catch((error) => {
  // Failed to request permissions, handle the error
});
```

### Open the Contact Picker

To open the contact picker and allow the user to select a contact, use the following code:

```typescript
CapacitorContactPicker.pickContact().then((contact) => {
  // Contact selected, handle the contact details
}).catch((error) => {
  // Failed to pick a contact, handle the error
});
```

The `pickContact()` method returns a `Contact` object with the selected contact's details, such as name, phone number, and email address.

### Accessing Contact Details

You can access all the details of the selected contact using the properties of the `Contact` object. For example, to access the contact's name and phone number:

```typescript
const name = contact.name;
const phoneNumber = contact.phoneNumbers[0].value;
```

### Example

Here's a complete example of how to use the @calvinckho/capacitor-contact-picker package in your app:

```typescript
import { CapacitorContactPicker } from '@calvinckho/capacitor-contact-picker';

CapacitorContactPicker.requestPermissions().then(() => {
  CapacitorContactPicker.pickContact().then((contact) => {
    const name = contact.name;
    const phoneNumber = contact.phoneNumbers[0].value;
    
    console.log('Selected contact:', name, phoneNumber);
  }).catch((error) => {
    console.error('Failed to pick a contact:', error);
  });
}).catch((error) => {
  console.error('Failed to request permissions:', error);
});
```

## Conclusion

In this tutorial, we have learned how to use the @calvinckho/capacitor-contact-picker package to integrate contact picker functionality into your Capacitor app. We covered the installation process, requesting permissions, opening the contact picker, and accessing the selected contact's details. Now you can easily manage contacts in your app with just a few lines of code.

I hope you found this tutorial helpful. Happy coding!
