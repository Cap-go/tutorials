---
title: "Using the BeatOne Package"
description: "A tutorial on how to use the BeatOne package in your project."
created_at: "2021-09-20"
published: true
slug: "plugin_beatone"
---

# Using the BeatOne Package

The BeatOne package provides a set of functions for working with beats in your application. This tutorial will guide you through the process of installing and utilizing the BeatOne package in your project.

## Installation

To install the BeatOne package, you can use npm. Open your terminal and run the following command:

```bash
npm install @beat/one
```

After the installation is complete, make sure to synchronize your project by running the following command:

```bash
npx cap sync
```

## API

The BeatOne package exposes a single function called `echo()`. Here is an example of how to use it:

```typescript
import { echo } from '@beat/one';

const options = { value: 'Hello, BeatOne!' };
const result = echo(options);

console.log(result); // Output: 'Hello, BeatOne!'
```

The `echo()` function accepts an options object with a `value` property. It returns the same value that is passed in the `value` property.

That's it! You have successfully utilized the BeatOne package in your project.

## Conclusion

In this tutorial, you learned how to install and use the BeatOne package in your application. The package provides a simple `echo()` function that allows you to echo back a value. This can be helpful for testing and debugging purposes.

Remember to refer to the package documentation for more information on additional features and functions provided by the BeatOne package.

Stay tuned for more tutorials and guides!

Feel free to reach out if you have any questions. Happy coding!

- [Beep Sample Application](https://github.com/ModusCreateOrg/beep)
- [Modus Create](https://moduscreate.com)
- [Modus Labs](https://labs.moduscreate.com)