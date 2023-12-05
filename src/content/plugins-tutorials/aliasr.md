# Using the @qingsmy217/ali-asr Package

## Introduction

In this tutorial, we will learn how to use the `@qingsmy217/ali-asr` package for speech recognition using Alibaba Cloud's ASR service. We will cover the installation process, the basic usage of the package, and provide some examples to help you get started.

## Prerequisites

Before we begin, make sure you have the following:

- Node.js installed on your machine
- An Alibaba Cloud account with access to the ASR service
- Basic knowledge of JavaScript and npm

## Installation

To start using the `@qingsmy217/ali-asr` package, you need to install it in your project:

```bash
npm install @qingsmy217/ali-asr
```

## Usage

Once you have installed the package, you can import it in your JavaScript or TypeScript file:

```javascript
const AliASR = require('@qingsmy217/ali-asr');
```

or

```typescript
import AliASR from '@qingsmy217/ali-asr';
```

### Configuration

Before making any API calls, you need to provide the necessary configuration information for the `AliASR` object. This includes your Alibaba Cloud access key, access secret, and other required parameters. Here's an example of how to configure the package:

```javascript
const aliASR = new AliASR({
  accessKeyId: 'your-access-key-id',
  accessKeySecret: 'your-access-key-secret',
  regionId: 'your-region-id',
  ...
});
```

### Speech Recognition

To perform speech recognition using the ASR service, you can use the `recognize` method of the `AliASR` object. Here's an example of how to recognize speech from an audio file:

```javascript
const result = await aliASR.recognize({
  audio: 'path/to/audio-file',
  format: 'pcm',
});
console.log(result);
```

### Additional Options

The `recognize` method accepts additional options for more advanced usage. Some of the available options include:

- `sampleRate`: The sample rate of the audio file (default: 16000)
- `streaming`: Whether to use streaming recognition or not (default: false)
- `enablePunctuation`: Whether to enable punctuation in the recognition result (default: true)

You can find more information about these options in the package documentation.

## Conclusion

In this tutorial, we have learned how to use the `@qingsmy217/ali-asr` package for speech recognition using Alibaba Cloud's ASR service. We covered the installation process, the basic usage of the package, and provided some examples to help you get started. Now, you can integrate speech recognition capabilities into your applications with ease.

---

---
title: "Using the @qingsmy217/ali-asr Package"
description: "Learn how to use the @qingsmy217/ali-asr package for speech recognition using Alibaba Cloud's ASR service."
created_at: "2022-11-15"
published: true
slug: aliasr
---

Note: This frontmatter has been added to the same file containing the tutorial.