---
title: "Using jwplayer-capacitor package"
description: "A tutorial on using the jwplayer-capacitor package to integrate JWPlayer in Capacitor applications"
created_at: "2021-07-15"
published: true
slug: "jwplayer-capacitor"
---

# Using jwplayer-capacitor package

In this tutorial, we will learn how to integrate JWPlayer into Capacitor applications using the `jwplayer-capacitor` package. JWPlayer is a popular video player that provides powerful features for playing and streaming videos in web and mobile applications.

## Prerequisites

Before getting started, make sure you have the following set up:

- A Capacitor project set up and initialized.
- Node.js and npm installed on your machine.

## Installation

To install the `jwplayer-capacitor` package, run the following command in your Capacitor project directory:

```bash
npm install jwplayer-capacitor
```

## Configuration

The `jwplayer-capacitor` package requires some configuration to work properly. Follow these steps to configure it:

1. Initialize JWPlayer in your Capacitor project by running the following command:

```bash
npx jwplayer-capacitor init
```

This command will create a `jwplayer.config.json` file in the root of your project.

2. Open the `jwplayer.config.json` file and provide your JWPlayer API key. If you don't have an API key, you can sign up for a free account on the JWPlayer website.

3. Customize other settings in the `jwplayer.config.json` file according to your requirements.

## Usage

Once you have installed and configured the `jwplayer-capacitor` package, you can start using it in your Capacitor application. 

1. Import the `jwplayer-capacitor` package in your JavaScript/TypeScript file:

```javascript
import { JwplayerCapacitor } from 'jwplayer-capacitor';
```

2. Initialize JWPlayer with your desired options:

```javascript
const jwplayer = new JwplayerCapacitor();

// Initialize JWPlayer with a video source
jwplayer.initialize({
  file: 'https://example.com/video.mp4',
  autoplay: true,
  controls: true,
});

// Play the video
jwplayer.play();

// Pause the video
jwplayer.pause();
```

3. Customize JWPlayer's appearance and behavior by passing different options to the `initialize` method. Refer to the JWPlayer documentation for all the available options.

## Conclusion

In this tutorial, you have learned how to integrate JWPlayer into Capacitor applications using the `jwplayer-capacitor` package. You have also learned how to configure JWPlayer and use it to play and control videos in your app. With JWPlayer, you can provide a seamless and rich video playback experience to your users in your Capacitor projects.