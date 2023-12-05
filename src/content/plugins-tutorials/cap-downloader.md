---
title: "Using @bricks-soft/cap-downloader Package"
description: "This tutorial will guide you through the process of using the @bricks-soft/cap-downloader package to download files in your Capacitor app."
created_at: "2021-11-30"
published: true
slug: "cap-downloader"
---

# Using @bricks-soft/cap-downloader Package

In this tutorial, we will learn how to use the `@bricks-soft/cap-downloader` package to download files in your Capacitor app. The `cap-downloader` package provides a simple and efficient way to download files directly within your app.

## Installation

To get started, you first need to install the `@bricks-soft/cap-downloader` package. Open your terminal and run the following command:

```bash
npm install @bricks-soft/cap-downloader
```

## Usage

Once the package is installed, you can start using it in your code. Here is an example of how to use the `cap-downloader` package to download a file:

```javascript
import { CapDownloader } from '@bricks-soft/cap-downloader';

const downloadFile = async (url, filePath) => {
  try {
    const result = await CapDownloader.download({
      url: url,
      filePath: filePath
    });
    console.log('File downloaded successfully:', result);
  } catch (error) {
    console.error('Failed to download file:', error);
  }
};

// Call the downloadFile function with the URL of the file you want to download
// and the desired file path where you want to save the downloaded file.
downloadFile('https://example.com/file.pdf', 'path/to/save/file.pdf');
```

In the above example, we import the `CapDownloader` object from the `@bricks-soft/cap-downloader` package. We then define a function `downloadFile` that takes a URL and a file path as parameters. Inside the function, we use the `CapDownloader.download` method to download the file from the specified URL and save it to the specified file path.

If the file is downloaded successfully, the `CapDownloader.download` method will return a result object that contains information about the downloaded file. Otherwise, it will throw an error.

That's it! You now know how to use the `@bricks-soft/cap-downloader` package to download files in your Capacitor app.

## Conclusion

In this tutorial, we have seen how to use the `@bricks-soft/cap-downloader` package to download files in a Capacitor app. We learned how to install the package and use its `CapDownloader.download` method to download files from a specified URL and save them to a desired file path.

Using the `cap-downloader` package, you can easily implement file downloading functionality in your Capacitor app with just a few lines of code.

If you have any further questions or need additional assistance, feel free to reach out to the community on the [discord](https://discord.gg/VnYRvBfgA6) or refer to the [documentation](https://capgo.app/docs/) for more information. Happy coding!