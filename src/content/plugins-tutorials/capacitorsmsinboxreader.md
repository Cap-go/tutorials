**Title:** Using the sms-inbox-reader Package

**Description:** This tutorial will guide you through the process of using the sms-inbox-reader package in your Ionic apps. You will learn how to install the package, read and access SMS messages, and handle SMS permissions.

**Created_at:** "current date and time"

**Published:** true

**Slug:** capacitorsmsinboxreader

---

# Using the sms-inbox-reader Package

The sms-inbox-reader package allows you to access and read SMS messages within your Ionic apps. In this tutorial, we will walk you through the installation process and how to use the package to retrieve SMS messages.

## Installation

First, you need to install the sms-inbox-reader package. Open your terminal and navigate to your Ionic project directory. Then run the following command:

```bash
npm install sms-inbox-reader
```

Next, you need to sync your Capacitor project to ensure the package is properly integrated. Run the following command:

```bash
npx cap sync
```

## Usage

Once you have installed the sms-inbox-reader package, you can start using it in your Ionic app.

### Importing the Package

In your desired component or service file, import the sms-inbox-reader package using the following code:

```typescript
import * as smsInboxReader from 'sms-inbox-reader';
```

### Reading SMS Messages

To read SMS messages, you can use the `smsInboxReader.getAllMessages()` method. This method returns a Promise that resolves to an array of SMS messages.

```typescript
smsInboxReader.getAllMessages()
  .then((messages) => {
    // Handle retrieved SMS messages
    console.log(messages);
  })
  .catch((error) => {
    // Handle error
    console.error(error);
  });
```

### Handling SMS Permissions

In order to access SMS messages, your app needs to request the necessary permissions from the user. You can use the `smsInboxReader.requestPermissions()` method to request SMS permissions.

```typescript
smsInboxReader.requestPermissions()
  .then(() => {
    // Permissions granted, read SMS messages
    smsInboxReader.getAllMessages()
      .then((messages) => {
        // Handle retrieved SMS messages
        console.log(messages);
      })
      .catch((error) => {
        // Handle error
        console.error(error);
      });
  })
  .catch((error) => {
    // Handle error
    console.error(error);
  });
```

## Conclusion

In this tutorial, you learned how to use the sms-inbox-reader package in your Ionic apps. You installed the package, read SMS messages, and handled SMS permissions. With this knowledge, you can now integrate SMS message reading functionality into your Ionic apps.

Remember to refer to the official documentation of the sms-inbox-reader package for more advanced features and customization options.

If you have any further questions, feel free to leave a comment or refer to the package's documentation for more information.

---

That's all for this tutorial! Happy coding with the sms-inbox-reader package in your Ionic apps!