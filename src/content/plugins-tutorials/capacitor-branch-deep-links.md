## Tutorial: Using `capacitor-branch-deep-links` Package

### Prerequisites

Before starting with the tutorial, make sure you have the following installed:

- Node.js and npm
- Capacitor
- Branch SDK

### Step 1: Installation

To use the `capacitor-branch-deep-links` package, you need to install it in your Capacitor project.

```bash
npm install capacitor-branch-deep-links
```

### Step 2: Configuration

1. In your Capacitor project root folder, locate the `capacitor.config.json` file.

2. Add the following `plugins` entry to your `capacitor.config.json` file:

```json
"plugins": {
  "BranchDeepLinks": {
    "TEST_KEY": "<YOUR_BRANCH_TEST_KEY>",
    "liveKey": "<YOUR_BRANCH_LIVE_KEY>",
    "uri": "<YOUR_DEEP_LINK_URI>"
  }
}
```

Replace `<YOUR_BRANCH_TEST_KEY>` with your Branch test key and `<YOUR_BRANCH_LIVE_KEY>` with your Branch live key. Also, replace `<YOUR_DEEP_LINK_URI>` with the URI scheme you want to use for your deep links.

### Step 3: Importing and Initializing

Import the `BranchDeepLinks` class from the `capacitor-branch-deep-links` package into your project.

```typescript
import { BranchDeepLinks } from 'capacitor-branch-deep-links';
```

Initialize the `BranchDeepLinks` class and set up event listeners for handling deep link data.

```typescript
const branchDeepLinks = new BranchDeepLinks();

branchDeepLinks.addListener('deepLinkOpen', (data: any) => {
  console.log('Received deep link data:', data);
});

branchDeepLinks.addListener('routeOpen', (data: any) => {
  console.log('Received route data:', data);
});
```

### Step 4: Handling Deep Link Data

To handle deep link data, use the `deepLinkOpen` event listener. The `data` parameter contains the deep link data.

```typescript
branchDeepLinks.addListener('deepLinkOpen', (data: any) => {
  console.log('Received deep link data:', data);
  // Handle the deep link data here
});
```

### Step 5: Handling Route Data

To handle route data, use the `routeOpen` event listener. The `data` parameter contains the route data.

```typescript
branchDeepLinks.addListener('routeOpen', (data: any) => {
  console.log('Received route data:', data);
  // Handle the route data here
});
```

### Step 6: Generating Deep Links

To generate deep links using Branch, you can use the `generateShortUrl` method. The `generateShortUrl` method accepts an object with `data` and `channel` properties.

```typescript
const deepLinkData = {
  data: {
    key1: 'value1',
    key2: 'value2'
  },
  channel: 'email'
};

branchDeepLinks.generateShortUrl(deepLinkData)
  .then((url: string) => {
    console.log('Generated deep link:', url);
  })
  .catch((error: any) => {
    console.error('Error generating deep link:', error);
  });
```

### Step 7: Opening Deep Links

To open deep links in your app, you can use the `openUrl` method. Pass the deep link URL as a parameter to open it.

```typescript
const deepLinkUrl = '<DEEP_LINK_URL>';

branchDeepLinks.openUrl(deepLinkUrl)
  .then(() => {
    console.log('Successfully opened deep link');
  })
  .catch((error: any) => {
    console.error('Error opening deep link:', error);
  });
```

### Step 8: Testing 

Run your Capacitor app and test the deep linking functionality.

```bash
npx cap open android
```

### Conclusion

In this tutorial, you have learned how to use the `capacitor-branch-deep-links` package to handle deep links in your Capacitor app. You have also learned how to generate and open deep links using Branch.