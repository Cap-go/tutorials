# capacitor-plugin-contacts

[How to Build Your Own Capacitor Plugin for Ionic](https://devdactic.com/build-capacitor-plugin/)

## Creating Capacitor Plugins

### 1. Install Capacitor to global

```cmd
npm install -g @capacitor/core @capacitor/cli
```

### 2. Generating a Plugin

[Creating Capacitor Plugins](https://capacitorjs.com/docs/plugins/creating-plugins)

```cmd
$ npx cap plugin:generate
*  Creating new Capacitor plugin
? Plugin npm name (kebab-case. ex: capacitor-plugin-example): capacitor-plugin-contacts
? Plugin id (domain-style syntax. ex: com.mycompany.plugins.example) com.lequyettien.plugins.contacts
? Plugin class name (ex: Example) Contacts
? description: Access and manage Contacts on the device
? git repository: https://github.com/LeQuyetTien/capacitor-plugin-contacts.git
? author: Le Quyet Tien
? license: MIT
? package.json will be created, do you want to continue? Yes


√ Adding plugin files in 67.90ms
√ Writing package.json in 1.49ms
√ Installing NPM dependencies in 13.28s
[info] Your Capacitor plugin was created at capacitor-plugin-contacts
```

### 3. Linking to Github

Create repository on [Github](https://github.com/new)

Link existing project to the repository just created

```cmd
$ git init
$ git add .
$ git commit -m "Initial commit"
$ git remote add origin https://github.com/LeQuyetTien/capacitor-plugin-contacts.git
$ git push -f origin main
```

## Implementing a New Function

### 1. Setup the Interface

Add _getContacts_ function to _ContactsPluginPlugin_ interface in _src/definitions.ts_

```ts
export interface ContactsPluginPlugin {
  echo(options: { value: string }): Promise<{ value: string }>
  getContacts(filter: string): Promise<{ results: any[] }>
}
```

### 2. Web Capacitor Plugin Code

[Capacitor Web/PWA Plugin Guide](https://capacitorjs.com/docs/plugins/web)

### 3. iOS Capacitor Plugin Code

[Capacitor iOS Plugin Guide](https://capacitorjs.com/docs/plugins/ios)

### 4. Android Capacitor Plugin Code

[Capacitor Android Plugin Guide](https://capacitorjs.com/docs/plugins/android)

## Local Testing

To test the plugin locally while developing it, link the plugin folder to your app project using the [npm link command](https://docs.npmjs.com/cli/link/).

First, within the plugin folder, run: `npm link`.

Then, within the project that will test the plugin, run:

```cmd
$ npm link capacitor-plugin-contacts
$ npm install capacitor-plugin-contacts
```
