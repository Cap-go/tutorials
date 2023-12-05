---
title: "Using the facebook-ads Package"
description: "A tutorial on how to use the facebook-ads package to create Facebook ads."
created_at: "2022-01-01"
published: true
slug: "facebook-ads"
---

# Using the facebook-ads Package

This tutorial will guide you on how to use the `facebook-ads` package to create Facebook ads in your app.

## Installation

To get started, you need to install the `facebook-ads` package using npm:

```bash
npm install facebook-ads
```

After installing the package, make sure to sync your project with Capacitor:

```bash
npx cap sync
```

## API

The `facebook-ads` package provides the following API methods:

### echo

```typescript
echo(options: { value: string; }) => Promise<{ value: string; }>
```

This method can be used to echo a provided value. It takes an object of type `{ value: string; }` as the parameter and returns a Promise that resolves to an object of type `{ value: string; }`.

Example usage:

```javascript
const result = await echo({ value: "Hello, world!" });
console.log(result.value); // Output: "Hello, world!"
```

### createBanner

```typescript
createBanner(options: any) => Promise<boolean>
```

This method is used to create a banner ad. It takes an object of type `any` as the parameter and returns a Promise that resolves to a boolean value indicating whether the banner ad was successfully created.

Example usage:

```javascript
const success = await createBanner({ adSize: "BANNER", position: "BOTTOM_CENTER" });
if (success) {
  console.log("Banner ad created successfully!");
} else {
  console.log("Failed to create banner ad.");
}
```

Note: The actual options and parameters for creating a banner ad may vary based on the specific implementation of the package.

## Conclusion

In this tutorial, we learned how to install and use the `facebook-ads` package to create Facebook ads in your app. We covered the installation process, the available API methods, and provided examples of how to use them. Now you can integrate Facebook ads into your app using the `facebook-ads` package.

Remember to consult the package's documentation and additional resources for more detailed information and advanced usage scenarios. Happy coding!