---
title: "Markdown Tutorial for Using capacitor-call-number Package"
description: "Step-by-step guide on using the capacitor-call-number package in your projects."
created_at: "2021-09-20"
published: true
slug: "call-number-git"
---

# Capacitor Call Number

## Description

Plugin to call a number.

## Installation

- `npm i capacitor-call-number`

## Usage

import { CallNumber } from 'capacitor-call-number';

await CallNumber.call({ number: '111111', bypassAppChooser: false });

bypassAppChooser = true (It will take to default dailer screen)  
bypassAppChooser = false (It will directly call the number)
