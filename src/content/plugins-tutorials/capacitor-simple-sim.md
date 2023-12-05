To generate a markdown tutorial for using the `capacitor-simple-sim` package and add a frontmatter to the same file, follow the steps below:

1. Create a new Markdown file with a ".md" extension. For example, "capacitor-simple-sim-tutorial.md".

2. Add the following frontmatter to the beginning of the file:

```
---
title: "Tutorial: Using capacitor-simple-sim"
description: "A comprehensive guide on how to use the capacitor-simple-sim package."
created_at: "2021-10-22"
published: true
slug: "capacitor-simple-sim"
---
```

Make sure to replace the "created_at" value with the current date.

3. Write your tutorial content below the frontmatter, explaining the steps and providing code examples for using the `capacitor-simple-sim` package.

Here's an example of how the complete file could look like:

```markdown
---
title: "Tutorial: Using capacitor-simple-sim"
description: "A comprehensive guide on how to use the capacitor-simple-sim package."
created_at: "2021-10-22"
published: true
slug: "capacitor-simple-sim"
---

# Tutorial: Using capacitor-simple-sim

In this tutorial, we will learn how to use the `capacitor-simple-sim` package to manage SIM cards in a Capacitor app.

## Prerequisites

Before we begin, make sure you have the following installed:

- Capacitor
- Node.js

## Step 1: Installation

First, let's install the `capacitor-simple-sim` package. Open a terminal and run the following command:

```bash
npm install capacitor-simple-sim
```

## Step 2: Configuration

Next, we need to configure the `capacitor-simple-sim` plugin in your Capacitor project. Open your `capacitor.config.json` file and add the following entry to the `plugins` array:

```json
{
  "name": "SimpleSim",
  "id": "io.ionic.capacitor.simple.sim",
  "electronPlugin": "io.ionic.capacitor.simple.sim.capacitorSimpleSim",
  "androidPackageName": ""
}
```

Replace the `androidPackageName` value with your Android package name if needed.

## Step 3: Usage

Now, let's use the `capacitor-simple-sim` package to manage SIM cards in our app. Here's an example of how to check the SIM card count:

```javascript
import { Plugins } from '@capacitor/core';
const { SimpleSim } = Plugins;

// Get the SIM card count
const simCardCount = await SimpleSim.getSimCardCount();
console.log('SIM card count:', simCardCount);
```

You can find more information about the available methods in the `capacitor-simple-sim` package documentation.

## Conclusion

In this tutorial, we learned how to install and use the `capacitor-simple-sim` package to manage SIM cards in a Capacitor app. We covered the installation process, configuration, and usage examples. Now you can confidently incorporate SIM card functionality into your Capacitor project.

Remember to refer to the official `capacitor-simple-sim` documentation for more details and advanced usage.

Happy coding!
```

Feel free to modify and expand the tutorial as needed.