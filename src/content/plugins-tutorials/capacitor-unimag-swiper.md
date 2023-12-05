---
title: "Using the capacitor-unimag-swiper package"
description: "In this tutorial, we will learn how to use the capacitor-unimag-swiper package to swipe through images in a Capacitor app."
created_at: "2021-08-25"
published: true
slug: "capacitor-unimag-swiper-tutorial"
---

# Using the capacitor-unimag-swiper package

In this tutorial, we will be exploring how to use the capacitor-unimag-swiper package in a Capacitor app. The capacitor-unimag-swiper package provides a simple and intuitive way to implement image swiping functionality in your app.

## Prerequisites

Before getting started, make sure you have the following dependencies installed:

- Node.js
- Capacitor

## Installation

To install the capacitor-unimag-swiper package, run the following command in your project directory:

```bash
npm install capacitor-unimag-swiper
```

## Usage

Once the package is installed, you can import it into your project and start using it. Here's an example of how to implement a basic image swiper using the capacitor-unimag-swiper package:

```javascript
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { UnimagSwiper } from 'capacitor-unimag-swiper';

const MySwiperPage: React.FC = () => {
  useEffect(() => {
    // Initialize the swiper
    const swiper = new UnimagSwiper('.swiper-container', {
      // Set the desired options
    });

    // Add event listeners
    swiper.on('slideChange', () => {
      // Handle slide change event
    });
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Image Swiper</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className="swiper-container">
          <div className="swiper-wrapper">
            <div className="swiper-slide"><img src="image1.jpg" alt="Image 1" /></div>
            <div className="swiper-slide"><img src="image2.jpg" alt="Image 2" /></div>
            <div className="swiper-slide"><img src="image3.jpg" alt="Image 3" /></div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default MySwiperPage;
```

Make sure to replace the image URLs in the example with your own image URLs.

## Conclusion

In this tutorial, we have learned how to use the capacitor-unimag-swiper package to implement image swiping functionality in a Capacitor app. By following the steps outlined above, you should now be able to integrate the capacitor-unimag-swiper package into your own projects and create interactive image swipers.

Feel free to explore the capacitor-unimag-swiper package documentation for more advanced usage and configuration options. Happy coding!