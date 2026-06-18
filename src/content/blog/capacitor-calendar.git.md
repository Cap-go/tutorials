```markdown
---
title: "Using the Capacitor Calendar Plugin"
description: "Learn how to integrate the @ebarooni/capacitor-calendar package in your Capacitor project"
created_at: "2022-01-20"
published: true
slug: capacitor-calendar-git
---

# Using the Capacitor Calendar Plugin

The Capacitor Calendar Plugin allows you to incorporate full calendar functionality in your iOS and Android applications. Additionally, it provides reminder support for iOS devices. Follow the steps below to integrate the @ebarooni/capacitor-calendar package in your Capacitor project.

## Installation

To start using the Capacitor Calendar Plugin, begin by installing the package. If you are looking for a stable release, you can do so by following the steps below.

### Stable Release

#### Capacitor 6

```bash
npm install @ebarooni/capacitor-calendar@latest
npx cap sync
```

#### Capacitor 5

> [!IMPORTANT]  
> This plugin is no longer updated for Capacitor v5; it only supports the latest version.

```bash
npm install @ebarooni/capacitor-calendar@^5
npx cap sync
```

### Development Release

Development releases are available on the GitHub package registry. Please note that these releases may contain experimental changes and are not recommended for production use.

#### Setup

Create an `.npmrc` file at the root of your project with the following contents:

```
//npm.pkg.github.com/:_authToken=$GITHUB_PAT
@ebarooni:registry=https://npm.pkg.github.com
always-auth=true
```

Replace `$GITHUB_PAT` with your personal access token having at least `read:packages` scope.

#### Install

```bash
npm install @ebarooni/capacitor-calendar
npx cap sync
```

## Documentation

For detailed documentation, please refer to the [official documentation](https://ebarooni.github.io/capacitor-calendar/). This resource provides comprehensive usage examples, detailed explanations, and API references for using the Capacitor Calendar Plugin.

## API

The Capacitor Calendar Plugin exposes an API that allows you to manage calendar events on iOS and Android. It also offers reminder support for iOS devices. For more detailed information about the API, you can refer to the [API documentation](https://ebarooni.github.io/capacitor-calendar/).

```
```