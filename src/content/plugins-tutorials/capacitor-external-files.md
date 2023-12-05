## Tutorial: Using capacitor-external-files package

In this tutorial, we will learn how to use the capacitor-external-files package to work with external files in a Capacitor app.

### Step 1: Install capacitor-external-files

To begin, let's install the capacitor-external-files package. Open your terminal and run the following command:

```bash
npm install capacitor-external-files
```

### Step 2: Import the package

Next, let's import the capacitor-external-files package in the appropriate file of your Capacitor app. This could be the entry file or any other file where you want to work with external files.

```javascript
import { CapacitorExternalFiles } from 'capacitor-external-files';
```

### Step 3: Use the package methods

Now that the package is imported, we can start using its methods to interact with external files.

#### Method 1: Open an external file

To open an external file with the default viewer, use the `openFile` method. Pass the file path as a parameter.

```javascript
CapacitorExternalFiles.openFile('/path/to/external/file.pdf');
```

#### Method 2: Share an external file

To share an external file, use the `shareFile` method. Pass the file path and an optional MIME type as parameters.

```javascript
CapacitorExternalFiles.shareFile('/path/to/external/file.txt', 'text/plain');
```

#### Method 3: Save a file to external storage

To save a file to external storage, use the `saveFile` method. Pass the file path and the file content as parameters.

```javascript
const content = 'This is the content of the file';
CapacitorExternalFiles.saveFile('/path/to/save/file.txt', content);
```

That's it! You now know how to use the capacitor-external-files package to work with external files in your Capacitor app.

---

Frontmatter for the blog:

```
---
title: "Using capacitor-external-files package"
description: "Learn how to use the capacitor-external-files package to work with external files in a Capacitor app."
created_at: "October 13, 2021"
published: true
slug: "capacitor-external-files"
---
```

Please note that the `created_at` value represents the date of this answer and may not be the exact publication date of the blog.

I hope you find this tutorial helpful! If you have any further questions, feel free to ask.