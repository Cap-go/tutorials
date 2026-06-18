---

"title": "Using Capacitor Firebase Authentication",
"description": "This markdown tutorial will guide you through the steps to use the capacitor-firebase-auth package.",
"created_at": "2022-03-09",
"published": true,
"slug": "capacitor-firebase-auth.git"

---

## Getting Started

First, you need to install the capacitor-firebase-auth package in your Capacitor project:

```bash
npm install @capacitor-community/firebase-auth
```

## Set Up Firebase

Make sure you have set up Firebase in your project following the instructions. You will need the configuration files for both Android and iOS.

### iOS Setup

Add the GoogleService-Info.plist file to your Xcode project and ensure the file is part of all targets.

### Android Setup

Insert the google-services.json file into your Android project directory: `android/app/`.

## Initialize the Firebase Authentication Plugin

Now, you need to initialize the Firebase Authentication Plugin in your project:

```typescript
import { registerWebPlugin } from '@capacitor/core';
import { FirebaseAuthPlugin } from '@capacitor-community/firebase-auth';

registerWebPlugin(FirebaseAuthPlugin);
```

Ensure to include this code in your entry file (e.g., `src/index.ts` or `src/main.ts`).

## Using the Plugin

You can now use the Firebase Authentication plugin methods in your Capacitor project. Some commonly used methods include:

### Sign In with Email and Password

```typescript
import { Plugins } from '@capacitor/core';
const { FirebaseAuth } = Plugins;

const result = await FirebaseAuth.login({
  email: 'user@example.com',
  password: 'Test1234',
});
```

### Sign Out

```typescript
const result = await FirebaseAuth.logout();
```

### Get User Info

```typescript
const result = await FirebaseAuth.getUser();
```

These are just a few examples of how you can use the capacitor-firebase-auth package in your project. Explore more methods and functionalities to enhance your authentication setup.

That's it! You have successfully integrated Firebase Authentication using Capacitor in your project.

---