---
title: "Using @nadavhalfon/capacitor-native-multi-contacts Package"
description: "A tutorial on how to use the @nadavhalfon/capacitor-native-multi-contacts package for Capacitor"
created_at: "2022-09-27"
published: true
slug: "capacitor-native-contacts"
---

# Using @nadavhalfon/capacitor-native-multi-contacts Package

In this tutorial, we will learn how to use the `@nadavhalfon/capacitor-native-multi-contacts` package in your Capacitor project. This package provides functionality to access and manage contacts on the device.

## Installation

To use the `@nadavhalfon/capacitor-native-multi-contacts` package, follow these steps:

1. Install the package using npm:

   ```bash
   npm install @nadavhalfon/capacitor-native-multi-contacts
   ```

2. Import the package in your project:

   ```typescript
   import { CapacitorNativeMultiContacts } from '@nadavhalfon/capacitor-native-multi-contacts';
   ```

3. Initialize the plugin in your `initializeApp()` function:

   ```typescript
   CapacitorNativeMultiContacts.initialize();
   ```

## Fetching Contacts

To fetch the contacts from the device, use the `fetchContacts()` function:

```typescript
const contacts = await CapacitorNativeMultiContacts.fetchContacts();
console.log(contacts);
```

The `fetchContacts()` function returns an array of contact objects. Each contact object contains properties such as name, phone numbers, and email addresses.

## Adding a Contact

To add a new contact to the device, use the `addContact()` function:

```typescript
const newContact = {
  name: 'John Doe',
  phoneNumbers: ['1234567890'],
  emailAddresses: ['john.doe@example.com'],
};

await CapacitorNativeMultiContacts.addContact(newContact);
console.log('Contact added successfully');
```

The `addContact()` function takes a contact object as a parameter, which should include the name, phone numbers, and email addresses of the contact.

## Updating a Contact

To update an existing contact on the device, use the `updateContact()` function:

```typescript
const updatedContact = {
  id: '123',
  name: 'Jane Doe',
  phoneNumbers: ['9876543210'],
};

await CapacitorNativeMultiContacts.updateContact(updatedContact);
console.log('Contact updated successfully');
```

The `updateContact()` function takes a contact object as a parameter, which should include the ID of the contact and the updated information.

## Deleting a Contact

To delete a contact from the device, use the `deleteContact()` function:

```typescript
const contactId = '123';
await CapacitorNativeMultiContacts.deleteContact(contactId);
console.log('Contact deleted successfully');
```

The `deleteContact()` function takes the ID of the contact to be deleted as a parameter.

## Conclusion

In this tutorial, we learned how to use the `@nadavhalfon/capacitor-native-multi-contacts` package to access and manage contacts in a Capacitor project. We covered the installation process, fetching contacts, adding a contact, updating a contact, and deleting a contact. With the help of this package, you can easily integrate contact management functionality into your Capacitor app.

For more information and additional features provided by the package, refer to the official documentation.

Happy coding!
