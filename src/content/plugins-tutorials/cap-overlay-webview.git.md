```markdown
---
"title": "Using cap-overlay-webview Package Tutorial",
"description": "This tutorial will guide you on how to use the cap-overlay-webview package to display webviews inside a Capacitor App.",
"created_at": "2023-06-24",
"published": true,
"slug": "cap-overlay-webview.git"
---

# Using cap-overlay-webview Package Tutorial

## Install

```bash
npm install cap-overlay-webview
npx cap sync
```

## Usage

This plugin uses a custom Javascript frontend, so each instance of the `WebviewOverlay` class will control a separate webview. The plugin requires an empty HTML element to determine the position and dimensions of the webview. This element is also used to display a screen capture of the webview if you need to have any app UI elements overlay the webview at any time. See the example project for implementation.
```
```