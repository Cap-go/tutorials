---
title: "Using @cactuslab/native-navigation-react"
description: "A tutorial on how to use the @cactuslab/native-navigation-react package for Capacitor Native Navigation."
created_at: "2022-07-01"
published: true
slug: "capacitor-native-navigation"
---

# Using @cactuslab/native-navigation-react

In this tutorial, we will learn how to use the `@cactuslab/native-navigation-react` package, which provides integration between Capacitor Native Navigation and React Router. Capacitor Native Navigation allows you to easily navigate and manage different views in your React app's native counterpart.

## Installation

Start by installing the package using npm:

```bash
npm install @cactuslab/native-navigation-react
```

## Setting up the Root Component

To integrate Capacitor Native Navigation with React Router, we need to set up the root component of our app. The root component will receive all location information from Capacitor Native Navigation and use `Router` from `react-router-dom` to create the root router.

```javascript
import { Router, Routes } from 'react-router-dom';
import { NativeNavigation } from '@cactuslab/native-navigation';
import { NativeNavigationReactRootProps } from '@cactuslab/native-navigation-react';
import { useNativeNavigationNavigator } from '@cactuslab/native-navigation-react-router';

export default function Root(props: NativeNavigationReactRootProps): JSX.Element {
  const { pathname, search, hash, state } = props;

  const navigator = useNativeNavigationNavigator({
    plugin: NativeNavigation,
    modals: [],
  });

  return (
    <Router location={{ pathname, search, hash, state }} navigator={navigator}>
      <Routes>{/* Your routes here */}</Routes>
    </Router>
  );
}
```

In the example above, we import necessary dependencies and define the `Root` component. We then pass the location information and the navigator to the `Router` component.

## Integrating Modals

Capacitor Native Navigation also provides support for modal views through the `useNativeNavigationNavigator` hook. To integrate modals, specify the path prefix and a function to return the component specification for the modal.

```javascript
const navigator = useNativeNavigationNavigator({
  plugin: NativeNavigation,
  modals: [
    {
      path: '/modal/',
      presentOptions(path, state) {
        return {
          component: {
            type: 'stack',
            stack: [
              {
                type: 'view',
                path,
                state,
                options: {
                  title: 'My Modal Title',
                  stack: {
                    rightItems: [
                      {
                        id: 'close',
                        title: 'Close',
                      },
                    ],
                  },
                },
              },
            ],
          },
          style: 'formSheet',
          cancellable: false,
        };
      },
    },
  ],
});
```

In the example above, we define a modal with a path prefix of `/modal/`. The `presentOptions` function takes the path and state as parameters and returns the component specification for the modal. In this case, we are adding a close button to the modal and styling it as a form sheet.

## Conclusion

In this tutorial, we explored how to use the `@cactuslab/native-navigation-react` package to integrate Capacitor Native Navigation with React Router. We learned how to set up the root component and integrate modals into our app. By using this package, we can leverage the power of Capacitor Native Navigation while reusing our web routing and navigating code in our React app.

Please refer to the official documentation for more information and advanced usage of the `@cactuslab/native-navigation-react` package.

Happy coding!