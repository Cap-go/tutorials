```markdown
---
"title": "Using @adapty/capacitor package",
"description": "A tutorial on how to integrate and use @adapty/capacitor package in your Capacitor app.",
"created_at": "2022-04-01",
"published": true,
"slug": "adaptysdk-capacitor-git"
---

## Installing @adapty/capacitor package

To install the @adapty/capacitor package, you can use npm. Run the following command in your Capacitor project:

```bash
npm install @adapty/capacitor
```

## Setting up @adapty/capacitor in your project

After installation, import the @adapty/capacitor package in your code:

```javascript
import { Plugins } from '@capacitor/core';
const { AdaptyCapacitor } = Plugins;
```

## Using @adapty/capacitor methods

You can now use the methods provided by the @adapty/capacitor package. Here is an example of how you can call a method:

```javascript
// Example method call
const result = await AdaptyCapacitor.exampleMethod();
console.log(result);
```

## Conclusion

In this tutorial, we covered the installation, setup, and basic usage of the @adapty/capacitor package in your Capacitor app. Explore the documentation for more methods and advanced features.
```