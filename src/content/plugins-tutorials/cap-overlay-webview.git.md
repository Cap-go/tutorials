---
"title": "Using cap-overlay-webview Package Tutorial"
"description": "This tutorial will guide you on how to use the cap-overlay-webview package to display webviews and overlay them with app UI elements."
"created_at": "2023-01-29"
"published": true
"slug": "cap-overlay-webview.git"
---

# Using cap-overlay-webview Package

To use the `cap-overlay-webview` package in your Capacitor app, follow these steps:

## Installation

Install the package using npm:

```bash
npm install capacitor-webview-overlay
npx cap sync
```

## API

The API provided by the `cap-overlay-webview` package allows you to control separate webviews via the `WebviewOverlay` class. Here is an example of how to use the API:

<docgen-index></docgen-index>

<docgen-api>
<!-- run docgen to generate docs from the source -->
<!-- More info: https://github.com/ionic-team/capacitor-docgen -->
</docgen-api>

## Usage

The `cap-overlay-webview` package utilizes a custom JavaScript frontend. Each instance of the `WebviewOverlay` class controls a separate webview. You will need to have an empty HTML element to determine the position and dimensions of the webview. This element can also display a screen capture of the webview if necessary.

Make sure to check out the example project for implementation details.
```
```