# Tutorial: Using capacitor-metadata-config Package

## Introduction

In this tutorial, we will learn how to use the `capacitor-metadata-config` package. This package allows you to easily manage and access metadata configuration in your Capacitor app.

## Prerequisites

Before getting started, make sure you have the following:

- Capacitor installed in your project
- Node.js and npm installed on your machine

## Installation

To install the `capacitor-metadata-config` package, run the following command:

```bash
npm install capacitor-metadata-config
```

## Usage

Once the package is installed, you can start using it in your project.

First, import the `MetadataConfig` class from the package:

```javascript
import { MetadataConfig } from 'capacitor-metadata-config';
```

Then, create an instance of `MetadataConfig`:

```javascript
const metadataConfig = new MetadataConfig();
```

### Example: Getting Metadata Values

To retrieve metadata values from the config file, use the `getValue` method of the `MetadataConfig` instance. 

Here's an example:

```javascript
const title = metadataConfig.getValue('title');
const description = metadataConfig.getValue('description');
```

### Example: Updating Metadata Values

To update metadata values in the config file, use the `setValue` method of the `MetadataConfig` instance.

Here's an example:

```javascript
metadataConfig.setValue('title', 'New Title');
metadataConfig.setValue('description', 'New Description');
```

### Example: Saving Changes

To save the changes made to the metadata config, use the `save` method of the `MetadataConfig` instance.

```javascript
metadataConfig.save();
```

## Conclusion

In this tutorial, we have learned how to use the `capacitor-metadata-config` package to manage and access metadata configuration in a Capacitor app. We covered how to retrieve metadata values, update them, and save the changes.

Remember to refer to the [official documentation](https://github.com/yourcapacitormetadataconfigdocslink) for more details and advanced usage.

---

title: "Using capacitor-metadata-config Package Tutorial"
description: "Learn how to use the capacitor-metadata-config package to manage metadata configuration in your Capacitor app."
created_at: "2022-01-01"
published: true
slug: "capacitor-metadata-config"

---