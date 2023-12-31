<div>
  <img alt="Recative System" width="100%" src="https://raw.githubusercontent.com/recative/recative-system/05a199e188eecf9b10cbb0225a478463d0a878d7/assets/title.svg" />
</div>

Recative is a comprehensive system to help creators to build interactive media for the modern web platform. The Recative System aims to allow creators to build their dreaming interactive content without bothering with trivial troubles of the performance issue, compatibility, etc.

Our architectural design allows creators to integrate a variety of content from diverse sources, with several types into a solitary product, like video, interactive programs, and distribute it to different platforms, in multiple forms, including desktop clients, mobile applications, and websites.

It is highly recommended to use `Recative Studio` with this system, which can handle resource management, automatic compatibility issue fixing, internationalization, version control, media publishing, application bundling, and more tasks with ease.

## Status

Recative System is under active development, and we are currently focusing on optimizing the architecture, refining the documentation, and completing the functionality.

You can expect breaking changes at any time until we release the stable version.

## Contributing

We use [nx](https://nx.dev/) to manage multiple packages in this repository.

### Building

to build all packages, use:

```
yarn build
```

### Committing

To write a changelog that reflects your commit, run this command **before** commit your codes:

```
yarn changelog
```

Answer the questions generated by [changesets](https://github.com/changesets/changesets) and commit the generated file with the code.

### Publishing

Bump the version code with:

```
yarn version
```

commit all generated changes with the following commit message:

```
chore: Bump version
```

Publishing all packages to NPM:

```
yarn publish
```

Nx will automatically build and publish all changed packages.

### Creating a new package

If you think we need to create a new package, use the following command:

```
yarn nx generate @nrwl/js:library --name=[name] --publishable --importPath @recative/[name]
```

Replace `[name]` with your package name.
