---
title: "Using Capacitor-Stockfish Package"
description: "This tutorial will guide you on how to use the Capacitor-Stockfish package in your app."
created_at: "2022-01-01"
published: true
slug: capacitor-stockfish
---

# Using Capacitor-Stockfish Package

In this tutorial, we will learn how to integrate the Capacitor-Stockfish package into your app. Capacitor-Stockfish is a Capacitor plugin that provides a bridge between your app and the Stockfish chess engine.

## Prerequisites

Before we begin, make sure you have the following installed:

- Capacitor
- Stockfish

To install Capacitor, you can use the following command:

```bash
npm install -g @capacitor/cli
```

To install Stockfish, you can visit the official website and follow the installation instructions for your platform.

## Installation

1. Create a new Capacitor project using the Capacitor CLI:

```bash
npx @capacitor/cli create
```

2. Install the Capacitor-Stockfish package in your project:

```bash
npm install capacitor-stockfish
```

3. Sync the native project files with Capacitor:

```bash
npx cap sync
```

## Usage

1. Import the Capacitor-Stockfish package in your JavaScript/TypeScript file:

```javascript
import { Plugins } from '@capacitor/core';
import 'capacitor-stockfish';

const { CapacitorStockfish } = Plugins;
```

2. Initialize and start the Stockfish engine:

```javascript
CapacitorStockfish.initialize();
CapacitorStockfish.start();
```

3. Interact with the Stockfish engine using the available methods:

```javascript
// Send a command to Stockfish
CapacitorStockfish.sendCommand('position startpos');

// Get the best move from Stockfish
CapacitorStockfish.getBestMove().then((result) => {
  const bestMove = result.value;
  console.log('Best Move:', bestMove);
});

// Get the evaluation score from Stockfish
CapacitorStockfish.getEvaluationScore().then((result) => {
  const score = result.value;
  console.log('Evaluation Score:', score);
});

// Stop the Stockfish engine
CapacitorStockfish.stop();
```

## Conclusion

This tutorial has demonstrated how to integrate the Capacitor-Stockfish package into your app. With Capacitor-Stockfish, you can leverage the power of the Stockfish chess engine in your Capacitor app. Enjoy building your chess-related applications using Capacitor!

Please note that this tutorial assumes basic knowledge of Capacitor and Stockfish. For more advanced usage and customization, refer to the official documentation of Capacitor-Stockfish and Stockfish.

For any questions or issues, please consult the official support channels of Capacitor-Stockfish and Stockfish.