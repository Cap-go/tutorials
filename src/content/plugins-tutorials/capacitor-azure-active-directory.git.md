```markdown
---
title: "Using Capacitor-AAD package"
description: "This tutorial will guide you through using the Capacitor-AAD package for integrating Azure Active Directory in your Capacitor projects."
created_at: "2022-01-14"
published: true
slug: capacitor-azure-active-directory.git
---

# Tutorial: Using Capacitor-AAD Package

To integrate Azure Active Directory into your Capacitor projects, follow these steps:

1. Install the Capacitor-AAD package:
   ```bash
   npm install capacitor-aad
   ```

2. Configure the package with your Azure AD settings:
   ```typescript
   import { CapacitorAadPlugin, AuthResponse } from 'capacitor-aad';

   const config = {
       tenantId: '<your_tenant_id>',
       clientId: '<your_client_id>',
       redirectUri: '<redirect_uri>',
   };

   CapacitorAadPlugin.configure(config).then(() => {
       console.log('Capacitor-AAD plugin configured successfully!');
   }).catch((error) => {
       console.error('Error configuring Capacitor-AAD plugin:', error);
   });
   ```

3. Implement login functionality:
   ```typescript
   CapacitorAadPlugin.login().then((authResponse: AuthResponse) => {
       console.log('User logged in successfully:', authResponse);
   }).catch((error) => {
       console.error('Error logging in:', error);
   });
   ```

4. Secure your routes using authentication:
   ```typescript
   import { RouteGuard } from 'capacitor-aad';

   const guard = new RouteGuard();

   // Protect a route
   guard.protect('/secure-route', () => {
       console.log('Access granted to secure route');
   });

   // Guard navigation
   guard.navigate('<target_url>', () => {
       console.log('Navigating to target URL');
   }, (error) => {
       console.error('Error during navigation:', error);
   });
   ```

5. Enjoy the benefits of integrating Azure Active Directory in your Capacitor app!

```
```  