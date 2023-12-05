---
title: "Using the docx-reader Package"
description: "A tutorial on how to use the docx-reader package to read and extract content from DOCX files."
created_at: "2022-12-20"
published: true
slug: capacitor-docx-reader
---

# Using the docx-reader Package

In this tutorial, we will learn how to use the `docx-reader` package to read and extract content from DOCX files. The `docx-reader` package provides a simple and convenient way to parse and manipulate DOCX documents in JavaScript.

## Installation

To install the `docx-reader` package, you can use npm or yarn. Open your terminal and run the following command:

```bash
npm install docx-reader
```

or

```bash
yarn add docx-reader
```

## Reading a DOCX file

To read a DOCX file using the `docx-reader` package, you need to follow these steps:

1. Import the `docx-reader` module in your JavaScript file:

```javascript
const { read } = require('docx-reader');
```

2. Call the `read` function and pass the path to your DOCX file as a parameter:

```javascript
const docxPath = '/path/to/your/file.docx';
const doc = read(docxPath);
```

3. Access the content of the DOCX file. The content is stored in the `content` property of the `doc` object:

```javascript
console.log(doc.content);
```

The `content` property contains an array of paragraphs, where each paragraph is represented as a string.

## Extracting specific content

The `docx-reader` package allows you to extract specific content from a DOCX file based on your requirements. Here are a few examples:

### Extract the first paragraph

```javascript
const firstParagraph = doc.content[0];
console.log(firstParagraph);
```

### Extract all paragraphs

```javascript
doc.content.forEach((paragraph) => {
  console.log(paragraph);
});
```

### Extract content by keyword

```javascript
const keyword = 'Lorem ipsum';
const paragraphsContainingKeyword = doc.content.filter((paragraph) => paragraph.includes(keyword));
console.log(paragraphsContainingKeyword);
```

## Conclusion

In this tutorial, we have learned how to use the `docx-reader` package to read and extract content from DOCX files. You can now easily parse and manipulate DOCX documents using this package in your JavaScript applications.