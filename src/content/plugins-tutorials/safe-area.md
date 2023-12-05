---
title: "Using @whjvenyl/safe-area Package"
description: "A tutorial on how to use the @whjvenyl/safe-area package to handle safe area insets in your web projects."
created_at: "2021-09-10"
published: true
slug: "safe-area"
---

# Using @whjvenyl/safe-area Package

The `@whjvenyl/safe-area` package is a useful tool for handling safe area insets in your web projects. Safe area insets are the areas of the screen that are not covered by notches, status bars, or other system UI elements. By using this package, you can easily access the safe area insets and adjust the layout and styling of your components accordingly.

## Installation

To get started, you need to install the `@whjvenyl/safe-area` package. You can do this by running the following command:

```bash
npm install @whjvenyl/safe-area
```

## Usage

Once the package is installed, you can import it into your project and start using it. Here is an example of how you can use the `@whjvenyl/safe-area` package in a React component:

```jsx
import React from 'react';
import { useSafeAreaInsetsState } from '@whjvenyl/safe-area';

const MyComponent = () => {
  const safeAreaInsets = useSafeAreaInsetsState();

  return (
    <div>
      <div
        style={{
          paddingTop: safeAreaInsets.top,
          paddingBottom: safeAreaInsets.bottom,
          paddingLeft: safeAreaInsets.left,
          paddingRight: safeAreaInsets.right,
        }}
      >
        {/* Your content goes here */}
      </div>
    </div>
  );
};

export default MyComponent;
```

In the above example, we import the `useSafeAreaInsetsState` function from the `@whjvenyl/safe-area` package. We then call this function to get the safe area insets, which returns an object with properties `top`, `bottom`, `left`, and `right`. We use these properties to adjust the padding of a `div` element and create a safe area for our content.

## Conclusion

In this tutorial, we learned how to use the `@whjvenyl/safe-area` package to handle safe area insets in our web projects. By accessing the safe area insets, we can ensure that our content is displayed correctly and avoids being obscured by system UI elements. The `@whjvenyl/safe-area` package simplifies this process and provides an easy-to-use interface for working with safe area insets.