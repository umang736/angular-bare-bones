# Setup
Download Nodejs v14+ from https://nodejs.org/en/download/ or install node version manager from https://github.com/coreybutler/nvm-windows/releases
and then install node v14+

# AngularBareBones
This project was generated with node v14.18.1 and [Angular CLI](https://github.com/angular/angular-cli) version 13.0.2.
Its has an App module, multiple components, a data service, routing, makes HTTP GET calls for movies data from a public REST json API.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.
Following scripts are useful:
    `"electron-start-UI-hosted-server": starts electron app and loads hosted webiste`
    `"electron-start-UI-local-server":starts electron app and loads local angular server`
    `"electron-start-UI-local": starts  electron app with locally built code in dist/`
    `"electron-build-start-UI-local": builds local code and starts electron app`,
    `"start": starts angular server`,

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
