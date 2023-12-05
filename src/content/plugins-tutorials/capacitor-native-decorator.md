---
title: "Using @aparajita/capacitor-native-decorator Package"
description: "A tutorial on how to use the @aparajita/capacitor-native-decorator package to enhance Capacitor plugins."
created_at: "2021-10-05"
published: true
slug: "capacitor-native-decorator"
---

# Using @aparajita/capacitor-native-decorator Package

The @aparajita/capacitor-native-decorator package is a deprecated package that was originally designed to solve certain issues related to Capacitor plugins. However, with the release of Capacitor 4, most of these issues have been resolved and the package is no longer needed. This tutorial provides an overview of the issues the package was created to solve and explains how you can achieve the same functionality using standard Capacitor mechanisms.

## Issues the Package Was Designed to Solve

The @aparajita/capacitor-native-decorator package was created to address the following issues:

1. The need to manually maintain the `Plugin.m` file for iOS.
2. The inability to use non-native methods in a class on native platforms.
3. The necessity to unwrap single return values from an object.

The first issue, i.e., the need to maintain the `Plugin.m` file for iOS, was solved as a side-effect of solving the second and third issues. However, it is not a critical issue as the API for a plugin doesn't change frequently.

## Resolved Issues with Capacitor 4

With the release of Capacitor 4, the second issue, i.e., the inability to use non-native methods in a class on native platforms, has been resolved. You can now call any method on a plugin object, even if it is not native. This eliminates the need for external packages like @aparajita/capacitor-native-decorator.

The third issue, i.e., the necessity to unwrap single return values from an object, can be easily solved by using object deconstruction. This further reduces the need for the deprecated package.

## Issues Created by the Package

While the @aparajita/capacitor-native-decorator package aimed to solve certain issues, it also created a few problems:

1. It relied on private API within Capacitor, which could change in the future, making it incompatible with the latest versions of Capacitor.
2. It circumvented the Capacitor plugin method calling mechanism, which could lead to unexpected behavior in future versions of Capacitor.
3. It did not support lazy loading of plugins, which is now the recommended approach.

To avoid these issues, it is recommended to use the standard Capacitor mechanisms instead of the @aparajita/capacitor-native-decorator package.

## The Remaining Capacitor Issue

Despite the improvements in Capacitor 4, there is still one limitation. Within non-native plugin methods, you cannot directly call native methods using `this`. This means that if you want to create hybrid plugins or use TypeScript methods to call native methods, you need to find an alternative approach.

One possible solution is to store the plugin reference returned by the `registerPlugin` function, which is a bare Proxy, inside your plugin class. You can then use this reference to call native methods. The example code below demonstrates this approach:

```typescript
// definitions.ts
export interface AwesomePlugin extends WebPlugin {
  setItem(key: string, value: unknown): Promise<void>
  getItem(key: string): Promise<unknown>
}
```

## Conclusion

In conclusion, the @aparajita/capacitor-native-decorator package is now deprecated and most of its functionality can be achieved using standard Capacitor mechanisms. With the release of Capacitor 4, you can call non-native methods in a class on native platforms, unwrap single return values from objects using object deconstruction, and take advantage of lazy loading of plugins. The remaining limitation related to calling native methods within non-native plugin methods can be overcome by storing the plugin reference and calling native methods via that reference.

By following these recommendations, you can ensure compatibility with future versions of Capacitor and take full advantage of its features.

