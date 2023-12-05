---
title: "Using the capacitor-ssh-plugin Package"
description: "A tutorial on how to use the capacitor-ssh-plugin package in your Capacitor project."
created_at: "2022-01-01"
published: true
slug: capacitor-ssh-plugin
---

# Using the capacitor-ssh-plugin Package

The capacitor-ssh-plugin package allows you to securely SSH into remote servers from your Capacitor project. This tutorial will guide you through the process of integrating and using the capacitor-ssh-plugin in your project.

## Step 1: Installation

Before we can start using the capacitor-ssh-plugin, we need to install it in our project. Open your terminal and run the following command:

```bash
npm install capacitor-ssh-plugin
```

## Step 2: Importing the Plugin

Next, we need to import the capacitor-ssh-plugin in our project. Open the `src/app.tsx` file and add the following line at the top:

```typescript
import 'capacitor-ssh-plugin';
```

## Step 3: Configuring SSH Connection

To establish an SSH connection, we need to configure the connection settings. Create a new file in the `src` folder called `ssh.config.json` and add the following content:

```json
{
  "host": "your-ssh-host",
  "port": 22,
  "username": "your-ssh-username",
  "password": "your-ssh-password",
  "privateKey": "path-to-your-private-key-file"
}
```

Replace the placeholders with the actual values of your SSH host, username, password, and private key file path.

## Step 4: Using the SSH Plugin

Now that we have installed the plugin and configured the SSH connection settings, we can start using the capacitor-ssh-plugin in our code.

Example: Execute a Command on the Remote Server

To execute a command on the remote server, you can use the `execCommand` method provided by the capacitor-ssh-plugin. Open the file where you want to use this functionality and add the following code:

```typescript
import { Plugins } from '@capacitor/core';

const { SSHPlugin } = Plugins;

async function executeCommand() {
  try {
    const result = await SSHPlugin.execCommand('ls');

    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

executeCommand();
```

In this example, we are executing the `ls` command on the remote server and logging the result to the console.

## Conclusion

Congratulations! You have successfully integrated and used the capacitor-ssh-plugin in your Capacitor project. You can now securely SSH into remote servers and execute commands from within your app.

Remember to handle any potential errors and implement additional functionality as per your project requirements.

