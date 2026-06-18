```markdown
---
"title": "Using @whiteguru/capacitor-plugin-file-opener Package"
"description": "A tutorial on how to use the @whiteguru/capacitor-plugin-file-opener package to open PDF files on Android devices."
"created_at": "2023-06-08"
"published": true
"slug": "capacitor-plugin-file-opener.git"
---

## Using @whiteguru/capacitor-plugin-file-opener Package

To use the @whiteguru/capacitor-plugin-file-opener package in your Capacitor project:

1. Install the package using npm:
   ```bash
   npm i @whiteguru/capacitor-plugin-file-opener
   ```

2. Generate a PDF file using a library like pdfmake.

3. Write the PDF file to the device's external directory using the Filesystem API from Capacitor.

4. Get the URI of the PDF file using the Filesystem API.

5. Open the PDF file using the `open` method from the `CapFileOpener` plugin with the file path and media type provided.

Example code snippet to open a PDF file:

```javascript
const fileName = 'file.pdf';

try {
    // Generate the PDF file and save it
    // File writing and getting URI steps go here

    Plugins.CapFileOpener.open({ filePath: path.substr(7), fileMediaType: 'application/pdf' });
} catch (error) {
    console.error('Error while opening the PDF', error);
}
```

Make sure to add the necessary configurations if you are working on an Android project, such as updating the Mainactivity.java file with the appropriate lines.

That's it! You can now use the @whiteguru/capacitor-plugin-file-opener package to open PDF files in your Capacitor project.
```