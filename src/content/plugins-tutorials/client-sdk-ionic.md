---
title: "Using the @beaconsmind/ionic-sdk Package"
description: "A tutorial on how to use the @beaconsmind/ionic-sdk package for building mobile apps with Ionic"
created_at: "2022-03-10"
published: true
slug: client-sdk-ionic
---

# Using the @beaconsmind/ionic-sdk Package

In this tutorial, we will explore how to use the @beaconsmind/ionic-sdk package to build mobile apps with Ionic. The @beaconsmind/ionic-sdk package provides a set of tools and components that make it easier to integrate the BeaconsMind platform into your Ionic applications.

## Installation

To get started with the @beaconsmind/ionic-sdk package, you need to have an existing Ionic project. If you don't have one, you can create a new project using the Ionic CLI:

```sh
ionic start my-app
```

Once you have your Ionic project set up, you can install the @beaconsmind/ionic-sdk package using npm:

```sh
npm install @beaconsmind/ionic-sdk
```

## Configuration

To use the @beaconsmind/ionic-sdk package, you need to configure it with your BeaconsMind credentials. Create a new file named `beaconsmind.config.ts` in your project's root directory and add the following code:

```typescript
import { Config } from '@beaconsmind/ionic-sdk';

export const beaconsmindConfig: Config = {
  apiKey: 'YOUR_API_KEY',
  authDomain: 'YOUR_AUTH_DOMAIN',
  projectId: 'YOUR_PROJECT_ID',
};
```

Replace `YOUR_API_KEY`, `YOUR_AUTH_DOMAIN`, and `YOUR_PROJECT_ID` with your actual BeaconsMind credentials.

## Initializing the SDK

To initialize the @beaconsmind/ionic-sdk package in your Ionic app, open `src/app/app.module.ts` and import the necessary modules and components:

```typescript
import { beaconsmindConfig } from '../beaconsmind.config';
import { BeaconsMindModule } from '@beaconsmind/ionic-sdk';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    BeaconsMindModule.forRoot(beaconsmindConfig),
  ],
  ...
})
export class AppModule {}
```

## Using the SDK

Once the @beaconsmind/ionic-sdk package is set up and initialized, you can start using its features in your Ionic app. The package provides various components and services that allow you to interact with the BeaconsMind platform.

For example, you can use the `BeaconsMindService` to fetch data from the BeaconsMind API:

```typescript
import { BeaconsMindService } from '@beaconsmind/ionic-sdk';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  constructor(private beaconsMindService: BeaconsMindService) {}

  ngOnInit() {
    this.beaconsMindService.getData().subscribe((data) => {
      // Process the data
    });
  }
}
```

Make sure to import the necessary components and services in your component file.

## Conclusion

In this tutorial, we learned how to use the @beaconsmind/ionic-sdk package to integrate the BeaconsMind platform into your Ionic applications. We covered the installation, configuration, initialization, and basic usage of the package. With the @beaconsmind/ionic-sdk package, you can easily leverage the features and functionalities offered by BeaconsMind in your mobile app development with Ionic.

Remember to refer to the package documentation and resources for more advanced features and customization options.

Happy coding!
