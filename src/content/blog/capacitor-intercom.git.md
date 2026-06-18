I can provide the markdown tutorial for using the `@unsou/capacitor-intercom` package. However, I don't have the capability to create or update files. You can follow the guidelines provided below to manually create the markdown tutorial file with the frontmatter in a separate file:

### @unsou/capacitor-intercom Package Tutorial

To use the `@unsou/capacitor-intercom`, follow the steps below:

1. **Install the Package**:
   ```
   npm install @unsou/capacitor-intercom
   ```

2. **Android Setup**:
   - Add Intercom keys to the Capacitor configuration file

```json
{
  "plugins": {
    "Intercom": {
      "androidApiKey": "android_sdk-xxx",
      "androidAppId": "yyy"
    }
  }
}
```

3. **iOS Setup**:
   - Add Intercom keys to the Capacitor configuration file

```json
{
  "plugins": {
    "Intercom": {
      "iosApiKey": "ios_sdk-xxx",
      "iosAppId": "yyy"
    }
  }
}
```

4. **Running the Client**:
   Try running your client using:
   ```
   ionic cap run android --livereload
   ```

### Frontmatter for Blog Post

```markdown
---
"title": "Using @unsou/capacitor-intercom Package Tutorial"
"description": "A tutorial on integrating the @unsou/capacitor-intercom package in your Capacitor app."
"created_at": "2022-12-30"
"published": true
"slug": "capacitor-intercom.git"
---
```

You can create the markdown tutorial file with the above content and frontmatter to have a structured blog post ready for publishing.