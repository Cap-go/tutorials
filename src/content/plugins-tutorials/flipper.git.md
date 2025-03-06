---
"title": "Using @capacitor-community/flipper package tutorial",
"description": "A markdown tutorial on how to use the @capacitor-community/flipper package in Capacitor projects. The tutorial covers installation, configuration, supported methods, examples, and usage.",
"created_at": "2022-02-22",
"published": true,
"slug": "flipper.git"
---

# Using @capacitor-community/flipper package

This tutorial will guide you through using the @capacitor-community/flipper package in your Capacitor projects.

## Installation

You can install the package using npm:

```bash
npm install @capacitor/flipper
```

or with Yarn:

```bash
yarn add @capacitor/flipper
```

Make sure to sync the native files after installation:

```bash
npx cap sync
```

For Android, register the plugin in your main activity.

```java
import com.getcapacitor.community.flipper.Flipper;

public class MainActivity extends BridgeActivity {

  @Override
  public void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);

    this.init(
        savedInstanceState,
        new ArrayList<Class<? extends Plugin>>() {
          {
            add(Flipper.class);
          }
        }
      );
  }
}
```

## Configuration

No additional configuration is required for this plugin.

## Supported Methods

The @capacitor-community/flipper package supports the following methods:

| Name         | Android | iOS | Web |
| :----------- | :------ | :-- | :-- |
| initialize   | ✅      | ✅  | ❌  |
| emulateCrash | ✅      | ❌  | ❌  |

## Example

Check out the [example code](https://github.com/priyankpat/capacitor-plugins-example/tree/flipper) for implementation details.

```bash
git clone https://github.com/capacitor-community/flipper.git
git checkout flipper
```

## Usage

```typescript
import { Plugins } from '@capacitor/core'

const { Flipper } = Plugins

Flipper.initialize({
  enabled: true,
  network: true,
  crash_report: true,
  layout_inspector: true,
  database: true,
})

Flipper.emulateCrash({
  message: 'Forced Crash',
})
```