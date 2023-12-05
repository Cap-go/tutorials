---
title: "Using Capacitor Gray Geolocation"
description: "Learn how to use the capacitor-gray-geolocation package to track location in your Capacitor app."
created_at: "2022-07-15"
published: true
slug: "gray-geolocation"
---

# Using Capacitor Gray Geolocation

In this tutorial, we will learn how to use the `capacitor-gray-geolocation` package to track the user's location in your Capacitor app. The `capacitor-gray-geolocation` package provides a simple API for accessing and monitoring location information using the device's built-in GPS sensor.

## Prerequisites

Before we get started, make sure you have the following pre-requisites:

1. Capacitor 3+ installed in your project.
2. An understanding of how to create a Capacitor app.
3. Basic knowledge of JavaScript and TypeScript.

## Installation

To install the `capacitor-gray-geolocation` package, follow these steps:

1. Open a terminal and navigate to your project's root directory.
2. Run the following command to install the package using either `yarn` or `npm`:

```bash
yarn add capacitor-gray-geolocation
# OR
npm install capacitor-gray-geolocation --save
```

3. After the installation is complete, run the following command to sync the native project files with Capacitor:

```bash
npx cap sync
```

## Usage

To use the `capacitor-gray-geolocation` package, follow these steps:

1. Import the `capacitor-gray-geolocation` package in your JavaScript or TypeScript file:

```javascript
import GrayGeolocation from 'capacitor-gray-geolocation';
```

2. Connect to the Gray Geolocation service by calling the `connect` method. This step is required before accessing any geolocation features:

```javascript
GrayGeolocation.connect();
```

3. Start receiving location updates by subscribing to the `location` event. The `location` event will be triggered whenever the device's location changes:

```javascript
const subscription = GrayGeolocation.addListener('location', (position) => {
  console.log('New location:', position);
});
```

4. To stop receiving location updates, you can unsubscribe from the `location` event:

```javascript
subscription.remove();
```

5. You can also get the current location of the device using the `getCurrentLocation` method:

```javascript
const position = await GrayGeolocation.getCurrentLocation();
console.log('Current location:', position);
```

## Example

Here's an example of how you can use the `capacitor-gray-geolocation` package in a Capacitor app:

```javascript
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonToggle, IonItemDivider, IonLabel } from '@ionic/react';
import React from 'react';
import GrayGeolocation from 'capacitor-gray-geolocation';

const HomePage: React.FC = () => {
  const [location, setLocation] = React.useState(null);

  React.useEffect(() => {
    const subscription = GrayGeolocation.addListener('location', (position) => {
      setLocation(position);
    });

    return () => {
      subscription.remove();
    };
  }, []);

  const handleGetCurrentLocation = async () => {
    const position = await GrayGeolocation.getCurrentLocation();
    setLocation(position);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Gray Geolocation Example</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonButton onClick={handleGetCurrentLocation}>Get Current Location</IonButton>
        {location && (
          <div>
            <h2>Latitude: {location.latitude}</h2>
            <h2>Longitude: {location.longitude}</h2>
          </div>
        )}
      </IonContent>
    </IonPage>
  );
};

export default HomePage;
```

In this example, we create a simple home page component that fetches the current location using the `capacitor-gray-geolocation` package. When the "Get Current Location" button is clicked, we call the `getCurrentLocation` method and display the latitude and longitude of the current location.

## Conclusion

In this tutorial, we have learned how to use the `capacitor-gray-geolocation` package to track the user's location in a Capacitor app. We covered the installation process, basic usage, and provided an example implementation. You can now incorporate geolocation features into your Capacitor app and build location-aware experiences for your users.