# Capacitor Azure Active Directory Plugin

![build](https://img.shields.io/appveyor/ci/gruntjs/grunt.svg) ![platform](https://img.shields.io/node/v/react.svg) ![stars](https://img.shields.io/amo/stars/dustman.svg) ![license](https://img.shields.io/bower/l/bootstrap.svg)

> [![basic-merchandising](https://imgur.com/LNOYczf.png)](https://github.com/leopq)

| [Getting Started](https://github.com/Azure-Samples/active-directory-javascript-singlepageapp-dotnet-webapi) | [Docs](https://aka.ms/aaddev) | [Samples](https://github.com/azure-samples?query=active-directory) | [Support](README.md#community-help-and-support) |
| ----------------------------------------------------------------------------------------------------------- | ----------------------------- | ------------------------------------------------------------------ | ----------------------------------------------- |


Capacitor Active Directory Authentication Plugin helps you to use Azure AD for handling authentication in your cross platform apps and PWAs.

## Installation

Via NPM:

    npm install capacitor-aad

Via Yarn:

    $ yarn add capacitor-aad

The Plugin.js source is [here](https://github.com/AzureAD/azure-activedirectory-library-for-js/tree/master/lib/Plugin.js).
The Plugin-angular.js source is [here](https://github.com/AzureAD/azure-activedirectory-library-for-js/tree/master/lib/Plugin-angular.js).

## Usage

**In JavaScript**

You can use Plugin JS as follows in a plain JavaScript application without any frameworks.

1- Import plugin from

```js
import ActiveDirectoryPlugin from '@capacitor/active-directory-plugin'
```

2- Initialize the plugin on your config files (for example `src/config/auth.js`) as the following:

```js
const config = {
  clientId: 'g075edef-0efa-453b-997b-de1337c29185',
}
const activeDirectoryAuth = new ActiveDirectoryPlugin(config)

export default activeDirectoryAuth
```

3- You can trigger the login and logout using the activeDirectoryAuth

```js
import activeDirectoryAuth from '../config/auth'

// Call this function to trigger login flow
activeDirectoryAuth.login()

// Call this function to trigger logout
// activeDirectoryAuth.logOut()
```

Refer this [sample](https://github.com/Azure-Samples/active-directory-javascript-singlepageapp-dotnet-webapi) for a full implementation example.

### Multi-Tenant

By default, you have multi-tenant support. Plugin will set tenant to 'common', if it is not specified in the config. This allows any Microsoft account to authenticate to your application. If you are not interested in multi-tenant behavior, you will need to set the `tenant` property as shown below.

```js
const config = {
  tenant: '52d4b072-9470-49fb-8721-bc3a1c9912a1', // Optional by default, it sends common
  clientId: 'g075edef-0efa-453b-997b-de1337c29185',
}
```

If you allow multi-tenant authentication, and you do not wish to allow all Microsoft account users to use your application, you must provide your own method of filtering the token issuers to only those tenants who are allowed to login.

### Cache Location

Default storage location is sessionStorage. You can specify localStorage in the config as well.

```js
const config = {
  clientId: 'g075edef-0efa-453b-997b-de1337c29185',
  cacheLocation: 'localStorage', // optional cache location. Default is sessionStorage
}
```

### Logging

Log levels are mapped as:

    0: Error
    1: Warning
    2: Info
    3: Verbose

You can add the code below to app.js to turn on logging. Implement the `log` method depending on how you want to redirect logs.

    Logging = {
        level: 3,
        log: function (message) {
            console.log(message);
        }
    };

### Security

Tokens are accessible from JavaScript since Plugin.JS is using HTML5 storage. Default storage option is sessionStorage, which keeps the tokens per session. You should prompt users to login again for important operations on your app.
You should protect your site for XSS. Please check the article here: [https://www.owasp.org/index.php/XSS\_(Cross_Site_Scripting)\_Prevention_Cheat_Sheet](<https://www.owasp.org/index.php/XSS_(Cross_Site_Scripting)_Prevention_Cheat_Sheet>)

### CORS API usage and IE

Plugin will get access token using Iframe for the given CORS API endpoints in the config. The Iframe needs to access cookies for the same domain that you did the initial sign in. Since IE does not allow to access cookies in an IFrame for localhost, your URL needs to be a fully qualified domain i.e http://yoursite.azurewebsites.com. Chrome does not have this restriction.

To make CORS API call, you need to specify endpoints in the config for your CORS API as shown here.

```js
// endpoint to resource mapping(optional)
var endpoints = {
  'https://yourhost/api': 'b6a68585-5287-45b2-ba82-383ba1f60932',
}
PluginAuthenticationServiceProvider.init({
  tenant: '52d4b072-9470-49fb-8721-bc3a1c9912a1', // Optional by default, it sends common
  clientId: 'e9a5a8b6-8af7-4719-9821-0deef255f68e', // Required
})
```

You can read extended blogs about CORS API below.

Andrew's blog related to CORS and Office365 usage

http://www.andrewconnell.com/blog/Plugin-js-cors-with-o365-apis-files-sharepoint

Vittorio's blog

http://www.cloudidentity.com/blog/2015/02/19/introducing-Plugin-js-v1/
http://www.cloudidentity.com/blog/2014/10/28/Plugin-javascript-and-angularjs-deep-dive/

### Trusted Site settings in IE

If you put your site in the trusted site list, cookies are not accessible for iFrame requests. You need to remove protected mode for Internet zone or add the authority URL for the login to the trusted sites as well.

### Known issues on Edge

Certain issues have been reported when using Plugin.js with the Microsoft Edge version 40.15063.0.0. Please take a look at [this page](https://github.com/AzureAD/azure-activedirectory-library-for-js/wiki/Known-issues-on-Edge) for details and workarounds before filing a new issue experienced with Edge.

## Contribution

We encourage and welcome contributions to the library. Please read the [contributing guide](./contributing.md) before starting.

## Versions

This is a GA released version. Current version - **1.0.17**  
Minimum recommended version - 1.0.11  
You can find the changes for each version in the [change log](https://github.com/AzureAD/azure-activedirectory-library-for-js/blob/master/changelog.txt).

## Samples and Documentation

[We provide a full suite of sample applications and documentation on GitHub](https://github.com/azure-samples?query=active-directory) to help you get started with learning the Azure Identity system. This includes tutorials for native clients such as Windows, Windows Phone, iOS, OSX, Android, and Linux; and a detailed guide to registering your app with Azure Active Directory. We also provide full walkthroughs for authentication flows such as OAuth2, OpenID Connect, Graph API, and other awesome features.

## Community Help and Support

We leverage [Stack Overflow](http://stackoverflow.com/) to work with the community on supporting Azure Active Directory and its SDKs, including this one! We highly recommend you ask your questions on Stack Overflow (we're all on there!) Also browser existing issues to see if someone has had your question before.

We recommend you use the "Plugin" tag so we can see it! Here is the latest Q&A on Stack Overflow for Plugin: [http://stackoverflow.com/questions/tagged/Plugin](http://stackoverflow.com/questions/tagged/Plugin)

## Security Reporting

If you find a security issue with our libraries or services please report it to [secure@microsoft.com](mailto:secure@microsoft.com) with as much detail as possible. Your submission may be eligible for a bounty through the [Microsoft Bounty](http://aka.ms/bugbounty) program. Please do not post security issues to GitHub Issues or any other public site. We will contact you shortly upon receiving the information. We encourage you to get notifications of when security incidents occur by visiting [this page](https://technet.microsoft.com/en-us/security/dd252948) and subscribing to Security Advisory Alerts.

## License

Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the Apache License, Version 2.0 (the "License");

## We value and adhere to the Microsoft Open Source Code of Conduct

This project has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/). For more information see the [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/) or contact [opencode@microsoft.com](mailto:opencode@microsoft.com) with any additional questions or comments.
