# Using capacitor-add-event package

In this tutorial, we will learn how to use the `capacitor-add-event` package with Capacitor to add event listeners to your mobile app. 

## Installation

To get started, you need to install the `capacitor-add-event` package. Run the following command in your project directory:

```
npm install capacitor-add-event
```

## Importing the package

Next, you need to import the `capacitor-add-event` package into your project. Open the file where you want to use the package and add the following line at the top:

```typescript
import 'capacitor-add-event';
```

## Adding an event listener

To add an event listener using the `capacitor-add-event` package, you can use the `addEventChangeListener` method. Here's an example:

```typescript
import { addEventChangeListener } from 'capacitor-add-event';

addEventChangeListener('eventName', (eventData) => {
  // Handle the event here
  console.log('Event data:', eventData);
});
```

In the above code, we use the `addEventChangeListener` function to add a listener for the event with the name "eventName". Whenever the event is fired, the callback function will be executed and the event data will be passed as the parameter.

## Removing an event listener

To remove an event listener, you can use the `removeEventChangeListener` method. Here's an example:

```typescript
import { removeEventChangeListener } from 'capacitor-add-event';

const listener = (eventData) => {
  // Handle the event here
  console.log('Event data:', eventData);
};

// Add the event listener
addEventChangeListener('eventName', listener);

// Remove the event listener
removeEventChangeListener('eventName', listener);
```

In the above code, we first add the event listener using `addEventChangeListener`, and then we remove it using `removeEventChangeListener`.

## Conclusion

In this tutorial, we have learned how to use the `capacitor-add-event` package to add and remove event listeners in Capacitor. Event listeners are useful for handling various events in your mobile app.