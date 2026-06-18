---
title: "Using Conekta Plugin for Capacitor"
description: "A markdown tutorial on how to use the Conekta Plugin for Capacitor in your Ionic application."
created_at: "2022-01-01"
published: true
slug: "cokektaplugincapacitor.git"
---

## Steps for Using Conekta Plugin for Capacitor

### 1. Install Capacitor Globally

Run the following command to install Capacitor globally:

```cmd
npm install -g @capacitor/core @capacitor/cli
```

### 2. Generating the Plugin

Use the following commands to generate the Conekta Plugin:

```cmd
$ npx cap plugin:generate
* Creating new Capacitor plugin
? Plugin npm name (kebab-case. ex: capacitor-plugin-example): conekta-plugin-capacitor
? Plugin id (domain-style syntax. ex: com.mycompany.plugins.example) org.example.plugins.conekta
? Plugin class name (ex: Example) Conekta
? description: Integrate Conekta Payments into your app
? git repository: https://github.com/your-username/conekta-plugin-capacitor.git
? author: Your Name
? license: MIT
? package.json will be created, do you want to continue? Yes

√ Adding plugin files
√ Writing package.json
√ Installing NPM dependencies

[info] Your Capacitor plugin was created at conekta-plugin-capacitor
```

### 3. Implementing Conekta Functions

You can now implement the Conekta functions in your Capacitor plugin following the specific guides for web, iOS, and Android platforms provided by Capacitor.

Make sure to test the plugin locally using `npm link` for local development.

That's it! You have successfully integrated the Conekta Plugin into your Capacitor project.