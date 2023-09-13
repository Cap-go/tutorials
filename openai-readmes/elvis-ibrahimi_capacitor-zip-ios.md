# Capacitor Zip (iOS only)

## Installation

- `npm i @elvis-ibrahimi/capacitor-zip-ios`

## Usage

```ts
import { Zip } from '@elvis-ibrahimi/capacitor-zip-ios'
const zip = new Zip()

await zip.zip(
  {
    source: source,
    destination: destination,
    keepParent: true, // Optional default true
    password: 'password', // Optional
  },
  (progress) => {},
)

await zip.unZip(
  {
    source: source,
    destination: destination,
    overwrite: true, // Optional default true
    password: 'password', // Optional
  },
  (progress) => {},
)
```
