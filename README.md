# NgResumeParser

<a alt="Nx logo" href="https://nx.dev" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="45"></a>

✨ **This workspace has been generated by [Nx, a Smart, fast and extensible build system.](https://nx.dev)** ✨

## Development server

Run `nx serve frontend` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

## Understand this workspace

Run `nx graph` to see a diagram of the dependencies of the projects.

## Remote caching

Run `npx nx connect-to-nx-cloud` to enable [remote caching](https://nx.app) and make CI faster.

## Further help

Visit the [Nx Documentation](https://nx.dev) to learn more.

## Manual Setup from Scratch

For documentation purposes, here's how you can set up this monorepo from scratch:

```sh
# from here, setup an Angular template for a package called "frontend"
npx create-npx-workspace@latest

# navigate to project directory
cd <project_name>

# setup the API
npm install --save-dev @nrwl/express
npx nx g @nrwl/express:app api

# generate the required components
nx g @nrwl/angular:component parser --project frontend
nx g @nrwl/angular:component textparser --project frontend
nx g @nrwl/angular:component ocr --project frontend

# @angular/material
npm install --save @angular/material
nx g @angular/material:ng-add --project frontend
```

To run the API and frontend concurrently:

```sh
nx run-many --parallel --target=serve --projects=api,frontend
```