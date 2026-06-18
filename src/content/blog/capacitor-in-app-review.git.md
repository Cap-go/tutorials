```md
---
"title": "Using @capgo/capacitor-in-app-review Package",
"description": "This blog tutorial will guide you on how to use the @capgo/capacitor-in-app-review package in your Capacitor project.",
"created_at": "2022-03-14",
"published": true,
"slug": "capacitor-in-app-review.git"
---

# Using @capgo/capacitor-in-app-review Package

To get started with the @capgo/capacitor-in-app-review package, follow the steps below:

## Installation

First, install the package using npm:

```bash
npm install @capgo/capacitor-in-app-review
npx cap sync
```

## Implementation

Next, add the necessary code to implement the package in your project:

```javascript
import { launch } from '@capacitor-in-app-review';

// Call the launch function to trigger the in-app review flow
const triggerInAppReview = async () => {
    try {
        await launch();
        console.log('In-app review flow triggered successfully');
    } catch (error) {
        console.error('Error triggering in-app review:', error);
    }
};

// Call the trigger function when you want to prompt the user for a review
triggerInAppReview();
```

That's it! You have successfully integrated the @capgo/capacitor-in-app-review package into your project. Happy coding!
```