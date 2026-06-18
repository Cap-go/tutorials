```
---
"title": "Using @capacitor-community/file-opener Package",
"description": "This tutorial will guide you on how to use the @capacitor-community/file-opener package to open PDF files on Android devices.",
"created_at": "2021-11-02",
"published": true,
"slug": "file-opener.git"
---

# Using @capacitor-community/file-opener Package

To use the @capacitor-community/file-opener package for opening PDF files on Android devices, follow these steps:

1. Install the package using npm:
   ```
   npm i @capacitor-community/file-opener
   ```

2. Create a PDF file using pdfmake and open it using the plugin. Here is a sample code snippet to demonstrate this:
   ```javascript
   const fileName = 'file.pdf';
   try {
     pdfmake.vfs = pdfFonts.pdfMake.vfs;
     const doc = pdfmake.createPdf({ content: 'Hi. I am a PDF.' });
     doc.getBase64((base64data) => {
       Filesystem.writeFile({
         path: fileName,
         data: base64data,
         directory: FilesystemDirectory.External
       }).then((writeFileResult) => {
         Filesystem.getUri({
           directory: FilesystemDirectory.External,
           path: fileName
         }).then((getUriResult) => {
           const path = getUriResult.uri;
           Plugins.CapFileOpener.open({ filePath: path.substr(7), fileMediaType: 'application/pdf' });
         }, (error) => {
           console.error('Error while opening pdf', error);
         });
       });
     });
   } catch (error) {
     console.error('Unable to write file', error);
   }
   ```

3. In the generated Android project, make sure to add the following line to MainActivity.java:
   ```java
   public void onCreate(Bundle savedInstanceState) {
     super.onCreate(savedInstanceState);
     this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {{
       add(CapFileOpener.class);
     }});
   }
   ```

By following these steps, you can effectively use the @capacitor-community/file-opener package to handle PDF files in your Android application.
```