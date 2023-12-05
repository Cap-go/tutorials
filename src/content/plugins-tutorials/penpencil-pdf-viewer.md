---
title: "Using penpencil-pdf-viewer package"
description: "A tutorial on how to use the penpencil-pdf-viewer package to view PDF files in a web application"
created_at: "2022-09-20"
published: true
slug: penpencil-pdf-viewer
---

# Using penpencil-pdf-viewer package

The penpencil-pdf-viewer package is a powerful tool that allows you to easily integrate PDF viewing capabilities into your web application. In this tutorial, we will guide you through the process of using this package to view PDF files in your web application.

## Installation

Before we can start using the penpencil-pdf-viewer package, we need to install it in our project. You can do this by running the following command:

```
npm install penpencil-pdf-viewer
```

## Adding the PDF Viewer Component

Once the package is installed, we can import and use the PDF Viewer component in our application. In your JavaScript file, add the following import statement:

```javascript
import { PDFViewer } from 'penpencil-pdf-viewer';
```

## Rendering the PDF Viewer

To render the PDF Viewer component in your application, you need to provide it with the URL of the PDF file you want to view. You can do this by passing the `url` prop to the `PDFViewer` component. Here's an example of how to do it:

```jsx
import React from 'react';
import { PDFViewer } from 'penpencil-pdf-viewer';

const MyPDFViewer = () => {
  return (
    <div>
      <h1>PDF Viewer</h1>
      <PDFViewer url="https://example.com/my-pdf-file.pdf" />
    </div>
  );
};

export default MyPDFViewer;
```

In the above code, we have created a functional component called `MyPDFViewer` that renders the PDF Viewer component and displays a title above it. Make sure to replace the `url` prop value with the actual URL of your PDF file.

## Customizing the PDF Viewer

The penpencil-pdf-viewer package provides various options for customizing and controlling the PDF viewer's behavior. Here are some examples of how you can customize the PDF Viewer component:

### Setting Zoom Level

You can set the initial zoom level of the PDF by passing the `zoom` prop to the `PDFViewer` component. The `zoom` prop accepts a decimal value representing the zoom level. For example, to set the zoom level to 1.5, you can do the following:

```jsx
<PDFViewer url="https://example.com/my-pdf-file.pdf" zoom={1.5} />
```

### Displaying Thumbnails

The PDF Viewer component also allows you to display thumbnails of the PDF pages. To enable thumbnail display, you can set the `showThumbnails` prop to `true`. Here's an example:

```jsx
<PDFViewer url="https://example.com/my-pdf-file.pdf" showThumbnails={true} />
```

### Listening to Events

You can also listen to various events emitted by the PDF Viewer component, such as page change or zoom change events. To listen to an event, you need to add an event listener to the `PDFViewer` component. Here's an example of listening to the `onPageChange` event:

```jsx
<PDFViewer
  url="https://example.com/my-pdf-file.pdf"
  onPageChange={(pageNumber) => console.log(`Page changed to ${pageNumber}`)}
/>
```

These are just a few examples of how you can customize the PDF Viewer component using the available props.

## Conclusion

In this tutorial, we have learned how to install and use the penpencil-pdf-viewer package to easily display PDF files in a web application. We explored how to add the PDF Viewer component, provide the PDF file URL, and customize the viewer's behavior. With the penpencil-pdf-viewer package, you can enhance your web application with powerful PDF viewing capabilities.