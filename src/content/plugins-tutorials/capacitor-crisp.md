## Tutorial: Using @capgo/capacitor-crisp Package

**Title:** Using @capgo/capacitor-crisp Package
**Description:** A tutorial on how to use the @capgo/capacitor-crisp package for integrating the Crisp live chat platform into your Capacitor app.
**Created_at:** "2021-10-01"
**Published:** true
**Slug:** capacitor-crisp

In this tutorial, we will guide you through the process of integrating the Crisp live chat platform into your Capacitor app using the @capgo/capacitor-crisp package.

### Prerequisites

Before we begin, make sure you have the following prerequisites:

- Capacitor project set up
- Crisp account
- Basic knowledge of Capacitor and Ionic framework

### Step 1: Install the Package

To start, open your Capacitor project in the terminal and install the @capgo/capacitor-crisp package:

```bash
npm install @capgo/capacitor-crisp
```

### Step 2: Import the Package

In your main `index.ts` file, import the @capgo/capacitor-crisp package:

```typescript
import "@capacitor-community/crisp"
```

### Step 3: Initialize the Crisp Plugin

To initialize the Crisp plugin, add the following code to your `app.component.ts` file:

```typescript
import { Crisp } from "@capacitor-community/crisp";

// ...

Crisp.initialize({
  websiteId: "YOUR_WEBSITE_ID",
});
```

Make sure to replace `YOUR_WEBSITE_ID` with your actual Crisp website ID. You can find this ID in your Crisp dashboard.

### Step 4: Display the Crisp Chat Widget

To display the Crisp chat widget, you can add the following code to any component template where you want to show the live chat:

```html
<ion-button (click)="openChat()">Open Chat</ion-button>
```

And in your component class, add the following method:

```typescript
import { Crisp } from "@capacitor-community/crisp";

// ...

openChat() {
  Crisp.show();
}
```

### Step 5: Customize the Chat Widget (Optional)

You can customize the Crisp chat widget by modifying the plugin initialization code. For example, to change the widget color, add the `color` option:

```typescript
Crisp.initialize({
  websiteId: "YOUR_WEBSITE_ID",
  color: "#FF0000",
});
```

You can find more customization options in the [@capgo/capacitor-crisp documentation](https://github.com/capgo/capacitor-crisp).

### Conclusion

In this tutorial, we have learned how to integrate the Crisp live chat platform into a Capacitor app using the @capgo/capacitor-crisp package. With the Crisp chat widget, you can provide real-time support to your app users and improve customer engagement.

Remember to check the official [@capgo/capacitor-crisp documentation](https://github.com/capgo/capacitor-crisp) for more advanced features and options.

Happy coding!