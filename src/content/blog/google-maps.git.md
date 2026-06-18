I can provide a sample template for your markdown tutorial with frontmatter. Here's how you can structure it:

```markdown
---
"title": "Using @capacitor-community/google-maps Package",
"description": "A tutorial on integrating and using the @capacitor-community/google-maps package in your Capacitor project.",
"created_at": "2023-10-23",
"published": true,
"slug": "google-maps-git"
---

# Using @capacitor-community/google-maps Package

This tutorial will guide you through integrating and utilizing the @capacitor-community/google-maps package in your Capacitor project.

### Installation

To get started, install the package:

```bash
npm install @capacitor-community/google-maps
npx cap sync
```

### Adding API Keys

Before using the Google Maps SDK, ensure you have your API keys set up. Follow the steps outlined in the Google Maps documentation to obtain the necessary keys for each platform (Android, iOS, and JavaScript).

### Integrating with iOS

For iOS users, make sure to include privacy descriptions required by Apple for location usage. Update your `Info.plist` with the necessary keys. Also, ensure your deployment target is set to iOS 14.0.

### Integrating with Android

In the Android setup, add your API key to the `AndroidManifest.xml` file. Remember to include the necessary permissions for location access.

### Conclusion

By following these steps, you'll be able to successfully integrate and use the @capacitor-community/google-maps package in your Capacitor project.

Stay tuned for more Capacitor tutorials and tips on our blog!
```

This template includes frontmatter with required information as specified. You can customize the content further based on your needs.