```md
---
title: "Using @botfi-app/capacitor-webview-embed Package"
description: "Generate a markdown tutorial for using the @botfi-app/capacitor-webview-embed package, explaining the installation, API, and usage."
created_at: "2023-10-02"
published: true
slug: capacitor-webview-embed
---

# Using @botfi-app/capacitor-webview-embed Package

## Install

To install the `@botfi-app/capacitor-webview-embed` package, run the following commands:

```bash
npm install @botfi-app/capacitor-webview-embed
npx cap sync
```

## API

The API of the package can be found by running the following command:

```bash
npx api
```

## Usage

This plugin utilizes a custom JavaScript frontend. Each instance of the `WebviewOverlay` class controls a separate webview. An empty HTML element is required to determine the position and dimensions of the webview. This element also serves as a way to display a screen capture of the webview, especially when overlaying app UI elements on it. Check the example project for implementation details.

## Example Project

This example project was created using `@capacitor/create-app`. To run the provided example, use the following command:

```bash
npm start
```

```

Please note that the `created_at` date in the frontmatter is set to "2023-10-02", and the content showcases how to use the `@botfi-app/capacitor-webview-embed` package by explaining the installation, API, usage, and example project setup.