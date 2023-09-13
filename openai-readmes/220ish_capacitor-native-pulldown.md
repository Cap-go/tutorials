# pulldown list capacitor plugin for iOS

a capacitor plugin that provides a native iOS pull-down list implementation using SwiftUI and UIKit. this plugin is using Apple's SF Symbols library for icons. if you need help implementing this feel free to DM!

**note**: this plugin is still work in progress, i might be releasing more native implementations to use within your beautiful react apps with that native feel!

## installation

```bash
npm install capacitor-native-pulldown
npx cap sync
```

## usage

import the `PulldownList` plugin and see the calling methods in docs bellow :)

### basic react component example

```jsx
import React, { useEffect } from 'react';
import { PulldownList } from 'capacitor-native-pulldown';

const App = () => {

  const onShow = async () => {
    // this emits the coordinates to render your pulldown natively in ios
    await PulldownList.show({ x: 50, y: 100 });
  }

  useEffect(() => {
    await PulldownList.setContent([
      { id: 'voleume-off', title: 'Volume Off', icon: 'speaker.wave.2.fill' },
      { id: 'add-to-favourites', title: 'Add to Favourites', icon: 'star.fill' }
    ]);

    PulldownList.addListener('itemSelected', (item) => {
      // listen for changes on the dropdown
      console.log(item)
    });

    return () => console.log("forgot to implement removeListener(). will fix lol")
  }, [])

  return (
    <div onClick={onShow}>
      <h1>Settings</h1>
    </div>
  );
};

export default App;
```

## API

### `setContent(items: PulldownListItem[]): Promise<void>;`

sets the content of the pull-down list with an array of items.

#### parameters

- `items`: an array of objects representing the items in the pull-down list. each object should contain the following properties:
  - `id` (string): a unique identifier for the item.
  - `title` (string): the text to display for the item.
  - `icon` (string, optional): the SF Symbols icon name to display alongside the item's text (e.g., 'speaker.wave.2.fill').

### `show(options: ShowOptions): Promise<void>`

displays the pull-down list and sets its position on the screen.

#### parameters

- `options`: an object containing the `x` and `y` coordinates (numeric) that represent the position of the pull-down list on the screen.

### `setPosition(x: number, y: number): Promise<void>`

sets the position of the pull-down list on the screen.

**note**: this method is not needed in the current implementation, as the position is set in the `show()` method. i'll probably remove or implement this later.

### `addListener(eventName: 'itemSelected', listenerFunc: (item: PulldownListItem) => void): PluginListenerHandle;`

adds a listener to handle the 'itemSelected' event. use this to receive information about the selected item when a user selects an item within the pull-down list.

#### parameters

- `eventName`: the event name string 'itemSelected'.
- `listenerFunc`: a function that will be called when the 'itemSelected' event is triggered. it receives the selected item as a parameter.
