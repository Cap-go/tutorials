To generate a markdown tutorial for using the `otpless-ionic` package, you can follow the steps below:

1. Install the `otpless-ionic` package using npm or yarn:

```
npm install otpless-ionic
```

2. Import the necessary components and functions from the package in your Ionic application:

```typescript
import { Otpless } from 'otpless-ionic';
```

3. Initialize the `Otpless` object by providing your API key:

```typescript
const otpless = new Otpless('YOUR_API_KEY');
```

4. Generate an OTP using the `generateOtp` function and your user's phone number:

```typescript
const phoneNumber = '1234567890';
const otp = await otpless.generateOtp(phoneNumber);
```

5. Verify the OTP entered by the user using the `verifyOtp` function:

```typescript
const enteredOtp = '123456';
const verificationResult = await otpless.verifyOtp(phoneNumber, enteredOtp);
if (verificationResult) {
  console.log('OTP verification successful!');
} else {
  console.error('OTP verification failed!');
}
```

6. That's it! You have successfully implemented OTP verification using the `otpless-ionic` package in your Ionic application.

Here is the markdown tutorial with frontmatter for the blog:

```markdown
---
title: "Using otpless-ionic Package"
description: "This tutorial explains how to use the otpless-ionic package for OTP verification in Ionic applications."
created_at: "2021-10-10"
published: true
slug: "otpless-ionic"
---

# Using otpless-ionic Package

This tutorial will guide you through the process of implementing OTP verification in your Ionic application using the `otpless-ionic` package.

## Installation

To install the package, open your terminal and run the following command:

```bash
npm install otpless-ionic
```

## Usage

1. Import the necessary components and functions from the `otpless-ionic` package in your Ionic application.

```typescript
import { Otpless } from 'otpless-ionic';
```

2. Initialize the `Otpless` object by providing your API key.

```typescript
const otpless = new Otpless('YOUR_API_KEY');
```

3. Generate an OTP using the `generateOtp` function and your user's phone number.

```typescript
const phoneNumber = '1234567890';
const otp = await otpless.generateOtp(phoneNumber);
```

4. Verify the OTP entered by the user using the `verifyOtp` function.

```typescript
const enteredOtp = '123456';
const verificationResult = await otpless.verifyOtp(phoneNumber, enteredOtp);
if (verificationResult) {
  console.log('OTP verification successful!');
} else {
  console.error('OTP verification failed!');
}
```

That's it! You have successfully implemented OTP verification using the `otpless-ionic` package in your Ionic application.
```

Please note that the `YOUR_API_KEY` mentioned in the code should be replaced with your actual API key provided by the `otpless-ionic` service.